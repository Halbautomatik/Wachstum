// WACHSTUM Service Worker — v11
const CACHE_NAME = 'wachstum-v11';
const CORE_ASSETS = ['./', './index.html'];

// Install: cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// Activate: remove old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: network-first for API calls, cache-first for assets
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Never cache API calls (Anthropic, CDN scripts)
  if (url.hostname === 'api.anthropic.com' ||
      url.hostname === 'cdnjs.cloudflare.com' ||
      url.hostname === 'fonts.googleapis.com' ||
      url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      fetch(e.request).catch(() => new Response('', { status: 503 }))
    );
    return;
  }

  // Cache-first for same-origin assets (HTML, icons, manifest)
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => caches.match('./index.html'));
      })
    );
  }
});
