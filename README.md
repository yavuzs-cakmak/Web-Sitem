# TR
# WEB SİTEM YAYINDA !!!
# 🚀 Yavuz Selim Çakmak - Personal Portfolio Website

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)
![Cypress](https://img.shields.io/badge/Tested_with-Cypress-17202C?logo=cypress&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

Bu proje; modern web teknolojileri kullanılarak geliştirilmiş, yüksek performanslı, duyarlı (responsive) ve çift dil (Türkçe / İngilizce) desteğine sahip kişisel portföy web sitemdir. 

Kullanıcı deneyimini (UX) ön planda tutarak **Google Core Web Vitals (INP 56 ms)** standartlarında optimize edilmiştir. Proje mimarisi; dinamik API entegrasyonları, global durum yönetimi (Context API), özel kancalar (Custom Hooks) ve uçtan uca (E2E) otomatik testlerle güçlendirilmiştir.

---

## ✨ Öne Çıkan Özellikler

* **🌓 Akıllı Karanlık & Aydınlık Mod:** `useLocalStorage` kancası ile kullanıcının tema tercihini hafızada tutar. Tarayıcının boyama yükünü (Repaint/Reflow) engellemek için önceden hesaplanan CSS mimarisiyle sıfır parlama (Zero-FOUC) sağlar.
* **🌐 Çift Dil Desteği (i18n):** Context API üzerinden anlık Türkçe ↔ İngilizce içerik değişimi. Sayfa yenilenmeden tüm metinler, butonlar ve proje kartları dinamik olarak güncellenir.
* **⚡ Yüksek Performans & Optimizasyon:** Tailwind CSS v4 ile sıfır gereksiz CSS yükü. Google PageSpeed ve Core Web Vitals ölçümlerinde mükemmel **INP (Interaction to Next Paint) — 56 ms** skoru!
* **📡 Asenkron API Entegrasyonu:** Proje verileri statik değil, Axios kullanılarak `reqres.in` REST API üzerinden dinamik olarak çekilir ve yükleme durumları (Loading state) başarıyla yönetilir.
* **🎯 Kullanıcı Etkileşimi & Analitik Logları:** "Hire Me" butonuna basıldığında hem yumuşak kaydırma (smooth scroll) tetiklenir hem de arka planda API'ye log isteği (`POST`) iletilerek React Toastify ile kullanıcıya görsel geri bildirim verilir.
* **🛡️ Endüstri Standardı E2E Test Yapısı:** Projenin tüm kritik işlevleri (API yanıtları, tema/dil değişimi, buton etkileşimleri) **Cypress** ile `data-cy` nitelikleri üzerinden otomatik testlere tabi tutulur.

---

## 🛠️ Kullanılan Teknolojiler & Araçlar

* **Frontend Framework:** React 19, Vite
* **Stilleme & Tasarım:** Tailwind CSS v4, FontAwesome Icons
* **Ağ (Networking) & HTTP:** Axios
* **Bildirimler:** React Toastify
* **Kalite Güvence & E2E Test:** Cypress
* **Kod Standartları:** ESLint (Flat Config)
* **Versiyon Kontrol & Dağıtım:** Git, GitHub Pages / Vercel / Netlify

---

## 🏗️ Mimari ve Klasör Yapısı

Proje; "Clean Code" prensiplerine ve ölçeklenebilir React bileşen yapısına göre kurgulanmıştır:

```text
├── cypress/               # Cypress E2E test senaryoları ve konfigürasyonları
│   └── e2e/
│       └── portfolio.cy.js # API, UI ve State yönetimini doğrulayan otomasyon testleri
├── src/
│   ├── components/        # Yeniden kullanılabilir UI bileşenleri (Hero, Header, Projects vb.)
│   ├── context/           # SiteContext (Tema ve Dil global durum yönetimi)
│   ├── data/              # Çok dilli içerik verileri (TR/EN JSON/JS listeleri)
│   ├── hooks/             # Özel React kancaları (useSite, useLocalStorage)
│   ├── App.jsx            # Ana uygulama sarmalayıcısı ve katman kurgusu
│   └── main.jsx           # React kök render ve Provider bağlantıları
├── .env.example           # API anahtarları için şablon çevre değişkeni dosyası
├── cypress.config.js      # Cypress test motoru ayarları
└── package.json           # Proje bağımlılıkları ve betik (script) tanımları

---

## 📬 İletişim
**Sorularınız, iş teklifleriniz veya geri bildirimleriniz için benimle iletişime geçebilirsiniz:**

**LinkedIn:** linkedin.com/in/yavuzscakmak

**GitHub:** github.com/yavuzs-cakmak

## ⭐️ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
