# TR
# WEB SİTEM YAYINDA !!!
# 🚀 Yavuz Selim Çakmak - Personal Portfolio Website
# 🔗 **Live Website** [www.yavuzselimcakmak.com](https://www.yavuzselimcakmak.com)

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://www.yavuzselimcakmak.com)
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
```
---

## 📬 İletişim
**Sorularınız, iş teklifleriniz veya geri bildirimleriniz için benimle iletişime geçebilirsiniz:**

**LinkedIn:** linkedin.com/in/yavuzscakmak

**GitHub:** github.com/yavuzs-cakmak

## ⭐️ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

---

# EN
# MY WEBSITE IS LIVE !!!
# 🚀 Yavuz Selim Çakmak - Personal Portfolio Website
# 🔗 **Live Website** [www.yavuzselimcakmak.com](https://www.yavuzselimcakmak.com)

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://www.yavuzselimcakmak.com)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)
![Cypress](https://img.shields.io/badge/Tested_with-Cypress-17202C?logo=cypress&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

This project is my personal portfolio website, developed using modern web technologies with high performance, responsive design, and dual-language (Turkish / English) support. 

Prioritizing user experience (UX), it is optimized to meet **Google Core Web Vitals (INP 56 ms)** standards. The project architecture is empowered by dynamic API integrations, global state management (Context API), custom hooks, and automated end-to-end (E2E) testing.

---

## ✨ Key Features

* **🌓 Smart Dark & Light Mode:** Persists the user's theme preference in memory using the `useLocalStorage` hook. It ensures a zero flash of unstyled content (**Zero-FOUC**) with a pre-calculated CSS architecture designed to prevent browser repaint/reflow overhead.
* **🌐 Dual-Language Support (i18n):** Real-time Turkish ↔ English content switching via Context API. All texts, buttons, and project cards dynamically update without a page reload.
* **⚡ High Performance & Optimization:** Zero redundant CSS load with Tailwind CSS v4. Exceptional **INP (Interaction to Next Paint) score of 56 ms** on Google PageSpeed and Core Web Vitals benchmarks!
* **📡 Asynchronous API Integration:** Project data is not static; it is fetched dynamically from the `reqres.in` REST API using Axios, with robust management of loading states.
* **🎯 User Interaction & Analytics Logging:** Clicking the "Hire Me" button triggers smooth scrolling while asynchronously dispatching a `POST` log request to the API in the background, providing visual feedback to the user via React Toastify.
* **🛡️ Industry-Standard E2E Testing Architecture:** All critical functionalities of the project (API responses, theme/language toggling, button interactions) undergo automated testing via **Cypress** using `data-cy` attributes.

---

## 🛠️ Technologies & Tools Used

* **Frontend Framework:** React 19, Vite
* **Styling & Design:** Tailwind CSS v4, FontAwesome Icons
* **Networking & HTTP:** Axios
* **Notifications:** React Toastify
* **Quality Assurance & E2E Testing:** Cypress
* **Code Standards:** ESLint (Flat Config)
* **Version Control & Deployment:** Git, GitHub Pages / Vercel / Netlify

---

## 🏗️ Architecture and Folder Structure

The project is structured according to "Clean Code" principles and a scalable React component architecture:

```text
├── cypress/               # Cypress E2E test scenarios and configurations
│   └── e2e/
│       └── portfolio.cy.js # Automation tests verifying API, UI, and State management
├── src/
│   ├── components/        # Reusable UI components (Hero, Header, Projects, etc.)
│   ├── context/           # SiteContext (Global state management for Theme and Language)
│   ├── data/              # Multi-language content data (TR/EN JSON/JS lists)
│   ├── hooks/             # Custom React hooks (useSite, useLocalStorage)
│   ├── App.jsx            # Main application wrapper and layout structure
│   └── main.jsx           # React root render and Provider connections
├── .env.example           # Template environment variables file for API keys
├── cypress.config.js      # Cypress testing engine configurations
└── package.json           # Project dependencies and script definitions
```

---

## 📬 Contact

Feel free to reach out for questions, job opportunities, or feedback:

* **LinkedIn:** [linkedin.com/in/yavuzscakmak](https://linkedin.com/in/yavuzscakmak)
* **GitHub:** [github.com/yavuzs-cakmak](https://github.com/yavuzs-cakmak)

## ⭐️ *If you like this project, don't forget to give it a star!*
