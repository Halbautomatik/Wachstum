# WACHSTUM — PWA Deployment

## Dateien
```
wachstum-pwa-final/
├── index.html       ← Die komplette App (2500+ Zeilen)
├── manifest.json    ← PWA-Konfiguration
├── sw.js            ← Service Worker (Offline-Support)
├── icon-192.png     ← App-Icon (192×192)
├── icon-512.png     ← App-Icon (512×512)
└── README.md        ← Diese Datei
```

## Deployment (wähle eine Option)

### Option A: Netlify Drop — 60 Sekunden ⭐ Empfohlen
1. Gehe zu → https://app.netlify.com/drop
2. Ziehe den gesamten `wachstum-pwa-final/` Ordner ins Fenster
3. Du bekommst sofort eine HTTPS-URL (z.B. `https://abc123.netlify.app`)
4. Fertig — öffne die URL auf dem Handy

### Option B: GitHub Pages — kostenlos, eigene URL
1. GitHub-Account unter github.com anlegen/einloggen
2. Neues Repository erstellen (z.B. "wachstum"), Public
3. Alle 6 Dateien hochladen (Upload files)
4. Settings → Pages → Branch: main, Folder: / → Save
5. Nach ~60 Sek erreichbar: `https://DEIN-NAME.github.io/wachstum`

---

## Auf dem iPhone installieren (nach Deployment)
1. URL in **Safari** öffnen (nicht Chrome!)
2. Teilen-Button ⬆ unten in der Leiste antippen
3. „Zum Home-Bildschirm" auswählen
4. „Hinzufügen" oben rechts bestätigen
→ WACHSTUM erscheint auf dem Homescreen wie eine native App

## Auf Android installieren
1. URL in **Chrome** öffnen
2. Nach ~30 Sek erscheint automatisch ein Install-Banner
3. Oder: Menü ⋮ → „App installieren"
→ Icon erscheint sofort auf dem Homescreen

---

## Technische Details
- Vollständig offline nutzbar nach erstem Laden (Service Worker)
- Alle Daten lokal auf dem Gerät (localStorage) — kein Server, keine Cloud
- Daten-Backup: Profil-Tab → JSON exportieren
- KI-Features benötigen Internetverbindung (Anthropic API)
- Getestet: iOS Safari 16+, Chrome Android 100+, Chrome Desktop

## Datenschutz
Alle persönlichen Daten (Reflexionen, Streak, Energie) bleiben
ausschließlich auf dem Gerät. Es werden keine Daten an Server gesendet
außer den KI-Anfragen an die Anthropic API (diese enthalten nur den
Text deiner aktuellen Anfrage, keine historischen Daten).
