# KİME GİDEYİM — Kurulum Kılavuzu (Vercel)

Bu kılavuz, botu 30 öğretmenin **API anahtarı girmeden**, sadece bir bağlantıya tıklayarak kullanabilmesi için adımları anlatır. Anahtarınız tek bir yerde (Vercel) gizli kalır; linke giren hiç kimse göremez.

Toplam süre: yaklaşık 15 dakika. Teknik bilgi gerektirmez, adımları sırayla izlemeniz yeterli.

---

## Bu pakette ne var?

```
kime-gideyim-vercel/
├── index.html        ← Botun ekranı (öğretmenlerin gördüğü sayfa)
└── api/
    └── chat.js       ← Anahtarı gizli tutan küçük sunucu fonksiyonu
```

İki dosyayı da olduğu gibi yükleyeceksiniz; içlerini değiştirmenize gerek yok.

---

## ADIM 1 — GitHub'a dosyaları yükleyin

1. https://github.com adresine girip ücretsiz hesap açın (zaten varsa giriş yapın).
2. Sağ üstteki **+** işaretine tıklayıp **New repository** (Yeni depo) seçin.
3. **Repository name** kısmına `kime-gideyim` yazın.
4. **Private** (Gizli) seçeneğini işaretleyin — anahtar zaten burada olmayacak ama yine de gizli tutmak iyidir.
5. **Create repository** düğmesine basın.
6. Açılan sayfada **uploading an existing file** (mevcut bir dosya yükleyin) bağlantısına tıklayın.
7. Bu paketteki **`index.html`** ve **`api`** klasörünü (içinde `chat.js` ile birlikte) sürükleyip bırakın.
   - Not: Klasör yapısının korunması önemli. `chat.js` mutlaka `api` klasörünün içinde olmalı.
8. Aşağıdaki **Commit changes** (Değişiklikleri kaydet) düğmesine basın.

---

## ADIM 2 — Vercel'e bağlayın

1. https://vercel.com adresine girin.
2. **Sign Up** → **Continue with GitHub** ile GitHub hesabınızla giriş yapın.
3. Panelde **Add New...** → **Project** seçin.
4. Az önce oluşturduğunuz **`kime-gideyim`** deposunu listede bulup **Import** edin.
5. Hiçbir ayarı değiştirmeden bir alt adıma geçin (henüz **Deploy** demeyin — önce anahtarı eklemeliyiz).

---

## ADIM 3 — API anahtarınızı gizli olarak ekleyin (en önemli adım)

1. Import ekranında **Environment Variables** (Ortam Değişkenleri) bölümünü açın.
2. İki kutu göreceksiniz:
   - **Key** (Ad) kutusuna tam olarak şunu yazın: `ANTHROPIC_API_KEY`
   - **Value** (Değer) kutusuna Anthropic API anahtarınızı yapıştırın (`sk-ant-...` ile başlar).
3. **Add** düğmesine basın.
4. Şimdi **Deploy** düğmesine basın.

Bu anahtar yalnızca Vercel'in panelinde durur. Bota giren öğretmenler, sayfanın kaynağına baksalar bile anahtarı **göremez**.

> Anahtarınızı buradan alabilirsiniz: https://console.anthropic.com/settings/keys

---

## ADIM 4 — Linki paylaşın

1. Birkaç saniye içinde Vercel kurulumu tamamlar ve size bir adres verir, örneğin:
   `https://kime-gideyim.vercel.app`
2. **Visit** (Ziyaret et) düğmesiyle açıp test edin: bir soru yazın, yanıt gelmeli.
3. Bu adresi 30 öğretmeninize gönderin. Hepsi aynı linke girip kullanır; kimse anahtar girmez.

İsterseniz adresi özelleştirebilirsiniz: Vercel'de proje → **Settings** → **Domains** kısmından `pendik-bilsem-rehberlik` gibi bir ad verebilirsiniz.

---

## Sık sorulanlar

**Maliyet ne olur?**
Vercel ve GitHub'ın ücretsiz katmanı bu kullanım için fazlasıyla yeterli. Sadece Anthropic API kullanımınız (sorulan soru sayısına göre) ücretlendirilir — 30 öğretmenin günlük kullanımı tipik olarak çok düşük bir tutardır. Anthropic konsolundan bir **aylık harcama limiti** koymanız önerilir.

**Bilgileri (öğretmen listesi, kılavuz) nasıl güncellerim?**
`api/chat.js` dosyasının başındaki `TEACHER_TABLE` ve `GUIDE` bölümlerini GitHub üzerinden düzenleyip kaydetmeniz yeterli. Vercel değişikliği otomatik yayına alır.

**Anahtarı değiştirmem gerekirse?**
Vercel'de proje → **Settings** → **Environment Variables** → `ANTHROPIC_API_KEY` değerini güncelleyin, sonra **Deployments** → en üstteki dağıtımda **Redeploy** deyin.

**Bir öğretmen "asistan ayarlanmamış" hatası alırsa?**
Büyük ihtimalle anahtar adı yanlış yazılmıştır. ADIM 3'teki adın tam olarak `ANTHROPIC_API_KEY` olduğundan emin olun.

**Güvenlik notu:** Bu kurulumda anahtar gizli kalır. Yine de botu yalnızca güvendiğiniz kişilerle paylaşın; bağlantı herkese açıktır (link bilen herkes soru sorabilir). Erişimi kurum içiyle sınırlamak isterseniz, Vercel'in **Password Protection** özelliği (ücretli plan) veya basit bir şifre ekranı eklenebilir — bunu da ayarlayabilirim.
