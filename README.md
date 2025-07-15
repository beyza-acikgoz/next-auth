Tabii Beyza! Aşağıda senin için oluşturduğum **tam ve profesyonel `README.md`** dosyasını bulabilirsin. Bunu doğrudan proje kök dizinine `README.md` olarak kaydedebilirsin:

---

### ✅ `README.md` (tam içerik)

````md
# 🧵 Beyza Kilim

Beyza Kilim, geleneksel Anadolu motiflerini modern dokunuşlarla sunan, el dokuması kilim ve halı satışı yapan bir e-ticaret platformudur. Sistem ayrıca **dropshipping iş ortaklığı** fırsatları da sunar. Geliştirilen frontend altyapısı **modern güvenlik sistemleriyle** desteklenmiş, kurumsal seviyede ölçeklenebilir şekilde inşa edilmiştir.

🔗 [forms repository](https://github.com/beyza-acikgoz/next-auth)

---

## 🚀 Teknolojiler

- **Next.js 14+** (App Router yapısı)
- **TypeScript**
- **TailwindCSS** (UI tasarımı)
- **Auth0** – OAuth ile kimlik doğrulama
- **NextAuth.js** – Oturum ve JWT yönetimi
- **Middleware (Next.js)** – Yetkilendirme ve route koruma
- **12Factor App** ilkeleri
- **SOLID prensipleri**
- **Git & GitHub** – Çoklu branch yapısı
- **Docker (opsiyonel)**

---

## 🔐 Kimlik Doğrulama & Yetkilendirme

- Auth0 üzerinden OAuth login
- JWT tabanlı session yönetimi
- `NextAuth.js` entegrasyonu ile kullanıcı ve oturum bilgileri
- Sayfa bazlı yetkilendirme: middleware ile koruma
- Rol bazlı erişim sistemi (opsiyonel: `admin`, `user`)

---

## 🛍️ Özellikler

- Kilim ve halı ürünlerini listeleme ve satın alma
- “Alışverişe Başla” & “Dropshipping” butonları ile yönlendirme
- Dropshipping bilgi ve başvuru formu
- Giriş Yap / Kayıt Ol butonu açılır menülü şekilde tasarlanmıştır
- Responsive ve mobil uyumlu yapı
- Dark Mode uyumu (Tailwind & CSS değişkenleri ile)

---

## ⚙️ Kurulum

```bash
git clone https://github.com/beyza-acikgoz/next-auth
cd beyza-kilim

# Bağımlılıkları yükle
yarn install

# .env.local dosyasını oluştur
cp .env.example .env.local

# Gerekli Auth0 bilgilerini .env dosyasına gir
# AUTH0_CLIENT_ID=
# AUTH0_CLIENT_SECRET=
# NEXTAUTH_SECRET=
# NEXTAUTH_URL=

# Uygulamayı çalıştır
yarn dev
````

---

## 🧩 Sayfa Yapısı

| Sayfa           | Açıklama                                   |
| --------------- | ------------------------------------------ |
| `/`             | Ana sayfa (alışverişe başla, dropshipping) |
| `/shop`         | Tüm ürünlerin listelendiği mağaza sayfası  |
| `/dropshipping` | İş modeli hakkında bilgi ve başvuru formu  |
| `/about`        | Şirket ve hikayesi                         |
| `/contact`      | İletişim formu                             |
| `/login`        | Giriş sayfası                              |
| `/register`     | Kayıt sayfası                              |
| `/dashboard`    | Giriş yapan kullanıcıların erişim paneli   |

---

## 📂 Klasör Yapısı

```
.
├── app/                 # Next.js App Router yapısı
│   ├── layout.tsx       # Tüm sayfaların ana layout'u
│   ├── page.tsx         # Ana sayfa
│   └── protected/       # Auth middleware ile korunan sayfalar
├── components/          # Header, Footer, Buton vb. UI bileşenleri
├── lib/                 # NextAuth, auth handler, API yardımcıları
├── styles/              # Global ve modül CSS dosyaları
├── public/              # Görseller
├── .env.example         # Ortam değişkeni şablonu
├── middleware.ts        # Sayfa yetkilendirme kontrolü
└── README.md
```

---

## 🧪 Test ve Kod Kalitesi

* Geliştirme sürecinde açıklamalı commit mesajları kullanıldı
* Kodlar `SOLID` prensiplerine uygun yazıldı
* Çevresel değişkenler `.env` dosyası üzerinden kontrol edilir (12Factor uyumu)

---

## 🧱 Planlanan Geliştirmeler

* [ ] Ürün filtreleme & kategori sistemi
* [ ] Ödeme entegrasyonu (Stripe)
* [ ] Admin paneli (stok ve sipariş yönetimi)
* [ ] Çok dilli destek
* [ ] SEO optimizasyonu

---

## ✨ Canlı Demo (isteğe bağlı)

> Henüz yayında değil / veya [https://beyzakilim.vercel.app](https://beyzakilim.vercel.app)

---

## 📜 Lisans

Bu proje [MIT](https://opensource.org/licenses/MIT) lisansı ile lisanslanmıştır.

---

## 👤 Geliştirici

**Beyza Açıkgöz**
[GitHub](https://github.com/beyza-acikgoz) | [LinkedIn](https://www.linkedin.com/in/beyzaacikgoz/)
📍 Kayseri / İstanbul

