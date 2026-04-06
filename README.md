# UstaYapı — Stok & Müşteri Yönetim Sistemi

## 📁 Dosyalar
- `index.html` — Ana uygulama (PWA)
- `data.json` — Ürün & müşteri veritabanı
- `manifest.json` — PWA ayarları
- `sw.js` — Offline desteği (Service Worker)
- `icon.svg` — Uygulama ikonu

## 🚀 GitHub Pages'e Yükleme

1. GitHub'da yeni repo oluştur (örn: `ustayapi-data`)
2. Bu 5 dosyayı repoya yükle
3. Repo → Settings → Pages → Source: `main` branch → Save
4. Birkaç dakika bekle → `https://KULLANICI.github.io/ustayapi-data` adresinden aç

## 📱 Telefona Yükleme (PWA)

**Android:**  
Tarayıcıda aç → Menü (3 nokta) → "Ana Ekrana Ekle"

**iPhone:**  
Safari'de aç → Paylaş butonu → "Ana Ekrana Ekle"

## 🔑 Giriş
- `admin` / `1234` — Tüm yetkiler
- `ahmet` / `1234` — Satış & müşteri
- `fatma` / `1234` — Satış & müşteri

## ☁️ GitHub Sync
İlk girişte GitHub kullanıcı adı, repo adı ve token girin.  
Token için: github.com → Settings → Developer settings → Personal access tokens → `repo` yetkisi seçin.

Sync aktif olunca tüm değişiklikler `data.json`'a otomatik kaydedilir.
