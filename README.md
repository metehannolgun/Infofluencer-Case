# Infofluencer Dashboard

Modern ve kullanıcı dostu bir influencer yönetim dashboard'u. Bu proje, influencer'ları takip etmek, performans metriklerini görüntülemek ve veri analizi yapmak için geliştirilmiştir.

## 🚀 Projeyi Nasıl Çalıştırırım?

### Ön Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn package manager

### Kurulum Adımları

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/metehannolgun/Infofluencer-Case.git
cd Infofluencer-Case
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Development server'ını başlatın:**
```bash
npm run dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:3000
```

### Login Bilgileri
- **Email:** test@test.com
- **Password:** 1234

### Build ve Production

```bash
# Production build oluşturma
npm run build

# Production server başlatma
npm start

# Kod analizi
npm run lint
```

## 🛠️ Hangi Teknolojileri Kullandınız?

### Frontend Framework & Language
- **Next.js 15** - React tabanlı fullstack framework (App Router)
- **TypeScript** - Type-safe development için
- **React 19** - UI bileşenleri için

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon kütüphanesi
- **Framer Motion** - Smooth animasyonlar için

### Data Visualization
- **Recharts** - Responsive chart ve grafik kütüphanesi

### Form Management
- **React Hook Form** - Performanslı form yönetimi

### Notifications
- **React Toastify** - Kullanıcı bildirimleri

### Development Tools
- **ESLint** - Kod kalitesi analizi
- **PostCSS** - CSS işleme

## 🎨 Tasarım Tercihleri

### 1. **Minimalist ve Clean Tasarım Yaklaşımı**
- **Modern kartlı yapı:** KPI kartları ve chart'lar için clean card design kullanıldı
- **Beyaz space kullanımı:** Görsellerin nefes alabilmesi için yeterli boşluk bırakıldı
- **Tutarlı renk paleti:** Mavi tonlarda profesyonel ve güvenilir görünüm sağlandı
- **Typography hierarchy:** Başlıklar, alt başlıklar ve içerik metinleri için net hiyerarşi

### 2. **Mobile-First Responsive Tasarım**
- **Adaptive sidebar:** Desktop'ta genişletilebilir, mobilde overlay olarak çalışan akıllı sidebar
- **Responsive grid system:** KPI kartları ekran boyutuna göre 1-2-3 sütun düzeninde
- **Touch-friendly interactions:** Mobil cihazlarda kolay kullanım için büyük touch target'lar
- **Flexible chart görünümü:** Grafiklerin tüm ekran boyutlarında optimal görünmesi

### 3. **Kullanıcı Deneyimi Odaklı Etkileşimler**
- **Smooth transitions:** Sidebar açılma/kapanma, hover efektleri için yumuşak geçişler
- **Visual feedback:** Active menu states, hover efektleri ve loading durumları
- **Intuitive navigation:** Breadcrumb yapısı olmasa da clear navigation flow
- **Professional data visualization:** Recharts ile interactive ve responsive grafikler

## 📁 Proje Yapısı

```
📁 app/
├── 📁 components/          # Reusable UI bileşenleri
├── 📁 constants/          # Sabit veriler ve konfigürasyonlar
├── 📁 dashboard/          # Dashboard sayfası
├── 📁 lib/               # Veri dosyaları
├── 📁 types/             # TypeScript tip tanımlamaları
├── 📁 utils/             # Yardımcı fonksiyonlar
└── 📁 public/            # Statik dosyalar
```

## ✨ Özellikler

- 🔐 **Secure Login System** - Form validation ile güvenli giriş
- 📊 **Interactive Dashboard** - KPI kartları ve grafiklerle veri görselleştirme
- 📱 **Fully Responsive** - Tüm cihazlarda mükemmel görünüm
- 🎯 **Type Safety** - TypeScript ile tam tip güvenliği
- 🚀 **Modern Architecture** - Clean code principles ile organize edilmiş yapı
- 💫 **Smooth Animations** - Framer Motion ile professional animasyonlar

## 🎯 KPI Metrikleri

Dashboard'da gösterilen temel metrikler:
- **Toplam Influencer:** 3
- **Toplam Takipçi:** 102.400
- **Ortalama Etkileşim:** %4.7

## 📈 Grafik Verileri

Haftalık takipçi artış grafiği:
- 1. Hafta: 200 takipçi
- 2. Hafta: 450 takipçi  
- 3. Hafta: 300 takipçi
- 4. Hafta: 600 takipçi

## 🔧 Geliştirme

Proje clean code principles ve modern React patterns kullanılarak geliştirilmiştir:

- **Component-based architecture**
- **Separation of concerns**
- **DRY principle**
- **Type safety with TypeScript**
- **Modular file organization**

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Metehan Olgun** - [GitHub](https://github.com/metehannolgun)

---

*Bu proje Infofluencer case study için geliştirilmiştir.*
