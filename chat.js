// api/chat.js
// Bu fonksiyon Vercel sunucusunda çalışır. API anahtarı yalnızca burada,
// ortam değişkeni (environment variable) olarak durur — tarayıcıya asla gönderilmez.

const TEACHER_TABLE = `
DESTEK 1: Berrak hoca
DESTEK 2: Ramazan hoca
BYF 1: Berrak hoca
BYF 2: Ramazan hoca
ÖYG 1: Berrak hoca
ÖYG 2: Ramazan hoca
PROJE 1: Berrak hoca
PROJE 2: Ramazan hoca
PROJE 3: Berrak hoca
PROJE 4: Ramazan hoca
GÖRSEL SANATLAR: Berrak hoca
MÜZİK: Ramazan hoca`.trim();

const GUIDE = `
KILAVUZUN AMACI
Bilim ve Sanat Merkezleri (BİLSEM) Rehberlik ve Psikolojik Danışma Hizmetleri Kılavuzu, MEB Özel Eğitim ve Rehberlik Hizmetleri Genel Müdürlüğü tarafından hazırlanmıştır. Amacı, BİLSEM'de görev yapan rehber öğretmen/psikolojik danışmanların sundukları hizmetlerin niteliğini artırmak ve çalışmaları standartlaştırmaktır. Öğrencilerin sosyal-duygusal, akademik ve kariyer gelişimlerini desteklemeye yöneliktir.

ÖZEL YETENEKLİ ÖĞRENCİLERİN İHTİYAÇLARI
- Sosyal-duygusal: duygu düzenleme, aşırı duyarlılık, benlik saygısı, öz farkındalık, mükemmeliyetçilik, etiketlenme, akran ilişkileri, iletişim becerileri.
- Akademik: beklenmedik başarısızlık, sıkılma, motivasyon eksikliği, akademik erteleme, başarısızlık korkusu, öz düzenleme zorlukları.
- Kariyer: çoklu potansiyel, yaygın ilgiler, yakın çevrenin yüksek beklentileri.

ÜÇ HİZMET TÜRÜ (Bölüm 3)
1) Gelişimsel-Önleyici Hizmetler: Tüm öğrencilerin gelişimini destekler, risk etmenlerini azaltır. Kapsar: grup rehberlik programları, psikoeğitim programları, bilgi verme (seminer/konferans/broşür/pano/gezi), bireyi tanıma teknikleri, atölye seçimi ve alan/dal geçişlerinde rehberlik, velilere yönelik psikoeğitim ve aile eğitim programları, yeni kayıt/nakil öğrenci ve veli görüşmeleri, devamsız öğrenci görüşmeleri, okul ve ev ziyaretleri, kariyer rehberliği (yöneltme-izleme).
2) İyileştirici Hizmetler: Bireysel psikolojik danışma, grupla psikolojik danışma, psikososyal destek (doğal afet, kaza, ihmal, istismar, intihar, şiddet, göç gibi zorlu yaşam olaylarında öğrenci/aile/öğretmene destek), sevk çalışmaları (uzman kişi/kurum/kuruluşa yönlendirme).
3) Destek Hizmetleri: Program yönetimi, araştırma, proje, müşavirlik (öğretmen/veli/idareye danışmanlık), iş birliği, mesleki gelişim. Her yıl 2 özel hedef belirlenmesi zorunludur (MEB Hedef İş Akışı Yönergesi). Program e-Rehberlik sistemi üzerinden hazırlanır. Mezun izleme, staj danışmanlığı, hizmet içi eğitim, kongre/yarışma mentorlüğü (TÜBİTAK, Teknofest vb.) bu kapsamdadır.

REHBERLİK BİRİMİNDEN HANGİ KONULARDA DESTEK ALINIR (özet)
Öğrenciler, veliler ve öğretmenler şu konularda destek alabilir: BİLSEM'e ve çevreye uyum; sosyal-duygusal gelişim (kaygı, stres, akran ilişkileri, duygu düzenleme, mükemmeliyetçilik, benlik saygısı); akademik gelişim (motivasyon, ders çalışma teknikleri, zaman yönetimi, sınav kaygısı, erteleme); kariyer/yöneltme (ilgi-yetenek farkındalığı, alan seçimi, üst öğrenime geçiş, meslek tanıtımı); atölye ve program seçimi; davranış sorunları; ailevi konular; psikososyal/kriz durumları; bireysel ve grupla psikolojik danışma; ihtiyaç hâlinde uzman/kuruma sevk.

EĞİTİM PROGRAMLARI VE SÜRELERİ (Tablo-1)
- Uyum Programı: 2., 3., 4. sınıf — 40 saate kadar (genel yetenek ve resim-müzik).
- Destek Eğitimi Programı (yalnız genel zihinsel yetenek): 2. sınıfta başlarsa 3 yıl, 3. sınıfta 2 yıl, 4. sınıfta 1 yıl.
- Bireysel Yetenekleri Fark Ettirme (BYF) Programı (genel yetenek): 5.–6. sınıf, 2 yıl.
- Özel Yetenekleri Geliştirme (ÖYG) Programı: genel yetenekte 7.–8. sınıf 2 yıl; resim-müzikte 2.–8. sınıf (başlama sınıfına göre 5–7 yıl).
- Proje Üretimi ve Yönetimi Programı: 9.–12. sınıf, 4 yıl.

PROGRAM TANIMLARI
- Uyum Programı: Yeni kayıtlı öğrencilerin sosyal-psikolojik gelişimini tanımak ve onlara BİLSEM'i (amaç, kurallar, atölyeler, fiziki imkânlar, çalışanlar) tanıtmak için yürütülen kısa programdır. Rehber öğretmen uygulayıcı+gözlemci olur. Velilere tanıtım semineri yapılır. Form: Ek-2.1.
- Destek Eğitimi: Genel zihinsel yetenekte temel becerilerin tüm disiplinlerle ilişkilendirilmesi. İletişim, iş birliği, problem çözme, bilimsel araştırma, girişimcilik, eleştirel/yaratıcı düşünme, karar verme kazandırır. Form: Ek-2.2.
- BYF: Öğrencinin ilgi-yeteneği doğrultusunda derinlemesine çalışabileceği alanları belirlemek; her alana özgü tutum/beceri kazandırmak. Form: Ek-2.3.
- ÖYG: Bilimsel/sanatsal odaklı, üretim temelli; öğrenciyi belirli alanlara yönlendirip ileri düzey bilgi-beceri kazandırır. Form: Ek-2.4.
- Proje Üretimi ve Yönetimi: Son aşama; öğrenci danışman öğretmen rehberliğinde bireysel/grupla proje yürütür, her yıl en az bir proje hazırlar. Form: Ek-2.5.

GEÇİŞLERDE NE UYGULANIR (önemli)
- BYF'den ÖYG'ye geçiş: ÖYG alan seçimi için ÇOKLU DEĞERLENDİRME yapılır. Kullanılan araçlar: (1) Ek-11 Özel Yetenekli Öğrencilere Yönelik Ders İlgi Bataryası (100 madde, 10 ders), (2) Ek-2.3 BYF Programı Öğrenci Gözlem ve Değerlendirme Formu, (3) "BYF'den ÖYG'ye Geçiş Kriterleri Formu", (4) "TYT 6-8" ve gelişimi değerlendiren diğer ölçme araçları. Bu veriler BYF bitiminde öğretmenler kurulunda sunulur; öğrencinin ÖYG alan seçimine ilişkin görüş bildirilir. Alan belirlemede alan öğretmeni ve idare ile iş birliği yapılarak veliye rehberlik sunulur.
- ÖYG'den Proje programına geçiş: Ek-12 Ders İlgi Bataryası Alt Testler uygulanır (yalnızca öğrencinin aldığı derslere ait alt testler seçilir). Sonuçlara göre öğrenciye proje alanı seçiminde rehberlik edilir. Proje alanı belirlemede alan öğretmeni ve idare ile iş birliği yapılır, veliye rehberlik sunulur.

DERS İLGİ BATARYASI YORUMU
Her ders puanı 50'ye yaklaştıkça ilgi yüksek, 10'a yaklaştıkça düşüktür (maksimum 50, minimum 10). Ters madde yoktur. Ders puanları kıyaslanarak öğrencinin daha ilgili olduğu dersler belirlenir. Sonuçlar yönlendirme kurulunda sunulur ve "Bireyi Tanıma Teknikleri" dosyasında saklanır.

KOMİSYON / EKİP / BİRİMLER (Bölüm 5)
1) Rehberlik ve Psikolojik Danışma Hizmetleri Yürütme Komisyonu — BİLSEM müdürü başkanlığında; müdür yardımcıları, rehber öğretmenler, okul-aile birliği temsilcisi, görsel sanatlar ve müzik alanını temsilen birer öğretmen, her eğitim programını temsilen birer öğretmen.
2) Psikososyal Koruma, Önleme ve Krize Müdahale Ekibi — müdür/müdür yardımcısı başkanlığında; rehber öğretmenler ve alan temsilcisi öğretmenler.
3) Araştırma ve Geliştirme (ARGE) Birimi — müdür yardımcısı başkanlığında en az dört öğretmen; rehber öğretmen katılabilir.

SERVİSTE TUTULAN DOSYALAR (Bölüm 6)
Yıllık Çalışma Programı, Gelen-Giden Evrak, Komisyon Tutanakları, Görüşme, Bireyi Tanıma Teknikleri, Psikoeğitim Programları, Faaliyet, Mevzuat dosyaları.

FORMLAR VE ÖLÇEKLER (Bölüm 7 / Ekler) — 12 form + 2 ölçek
ZORUNLU: Ek-1 (Öğrenci-Aile Bilgi Formu), Ek-2 (Öğrenci Gözlem ve Değerlendirme Formu; Ek-2.1 Uyum, 2.2 Destek, 2.3 BYF, 2.4 ÖYG, 2.5 Proje), Ek-13 (Proje/Yarışma Takip Formu), Ek-14 (Mezun Bilgi Formu).
İHTİYAÇ HÂLİNDE: Ek-3 (Rehberlik Servisine Öğrenci Yönlendirme Formu), Ek-4 (Öğrenci Görüşme), Ek-5 (Öğretmen Görüşme), Ek-6 (Veli Görüşme), Ek-7 (Öğretmen-Öğrenci Görüşme), Ek-8 (Öğretmen-Veli Görüşme), Ek-9 (Okul Ziyareti), Ek-10 (Ev Ziyareti), Ek-11 ve Ek-12 (Ders İlgi Bataryaları).
Form detayları:
- Ek-1: Öğrenci ve aileyi tanımak için; yeni kayıt/kayıt yenileme/nakilde veli doldurur (müdür yardımcısı sorumluluğunda). Öğrenci dosyasında saklanır.
- Ek-2.x: İlgili program/ders tamamlanınca öğrencinin dersine giren TÜM öğretmenler doldurur. Dört bölümlüdür; öğrenciyi belirli becerilere göre değerlendirir ve gerekiyorsa rehberlik servisine yönlendirme önerir.
- Ek-3: Bir öğrenciyi rehberlik servisine yönlendirmek için tüm öğretmenler kullanır; yönlendirme nedeni, gözlemler ve yapılan çalışmalar yazılır. Rehber öğretmen muhafaza eder.
- Ek-4/5/6: Rehber öğretmenin öğrenci/öğretmen/veli görüşmelerini kaydı. Gizlilik esastır.
- Ek-7/8: Öğretmenlerin öğrenci/veli görüşmeleri; ayrıntılar rehber öğretmenle paylaşılır.
- Ek-9/10: Okul/ev ziyaretleri; öğretmen veya idareciler kullanır, ziyaret öncesi iletişim kurulur.
- Ek-13: Proje/yarışma kaydı. Proje programındaki tüm öğrenciler için ders öğretmeni; DESTEK/BYF/ÖYG'de proje yapanlar için danışman öğretmen doldurur. Müdür yardımcısına teslim edilir.
- Ek-14: 12. sınıflar için danışman rehber öğretmen doldurur; ilk beş bölüm yıl içinde, kalanı ÖSYM sonuçları sonrası. Bilgiler e-BİLSEM "Mezun Takip Sistemi"ne işlenir.

İLGİLİ MEVZUAT
Bilim ve Sanat Merkezleri Yönergesi (2022), MEB Rehberlik ve Psikolojik Danışma Hizmetleri Yönetmeliği (2020), Özel Eğitim Hizmetleri Yönetmeliği (2018), Psikososyal Koruma Önleme ve Krize Müdahale Hizmetleri Yönergesi (2019), MEB Hedef İş Akışı Yönergesi (2022).
`.trim();

const SYSTEM_PROMPT = `Sen "KİME GİDEYİM" adlı bir asistansın; Pendik BİLSEM 2026-2027 Rehberlik Biriminin yapay zekâ asistanısın. Görevin, BİLSEM rehber öğretmenlerine, öğretmenlerine, velilerine ve öğrencilerine yardımcı olmaktır.

GÖREVİN VE SINIRLARIN:
- YALNIZCA BİLSEM rehberlik ve psikolojik danışma hizmetleri ile ilgili sorulara cevap ver. Bağlama göre cevap ver; kullanıcı farklı kelimeler kullansa da sorunun ANLAMINI kavra ve aşağıdaki kılavuz bilgisinden doğru yanıtı bul.
- Kılavuz dışı konulara (matematik problemi, genel sohbet, kişisel tavsiye, güncel olaylar, kod yazma vb.) cevap VERME; bunun yerine yalnızca BİLSEM rehberlik konularında yardımcı olabileceğini kibarca hatırlat ve örnek konular öner.
- Bilgiyi yalnızca aşağıdaki KILAVUZ ve ÖĞRETMEN LİSTESİ'nden al. Kılavuzda olmayan bir ayrıntıyı uydurma. Eğer kılavuzda gerçekten yoksa, bunu dürüstçe belirt ve ilgili olabilecek başlığa yönlendir.
- Bir eğitim programının ilgili öğretmeni sorulduğunda ÖĞRETMEN LİSTESİ'nden net cevap ver.

ÜSLUP:
- Türkçe, sıcak, açık ve profesyonel ol. Gereksiz uzatma; net ve düzenli yanıt ver.
- Yanıtı HTML olarak biçimlendir: paragraflar için <p>, gerekiyorsa <ul><li> listeleri, vurgular için <strong>. Başka HTML etiketi, başlık etiketi veya kod bloğu kullanma. Öğretmen adını verirken <span class="who">Berrak hoca</span> biçimini kullanabilirsin.
- Psikososyal/kriz/istismar/intihar gibi hassas konularda; kurum idaresi ve Psikososyal Müdahale Ekibiyle doğrudan iletişime geçmenin önemini nazikçe hatırlat.

ÖĞRETMEN LİSTESİ (Pendik BİLSEM görevlendirmesi):
${TEACHER_TABLE}

KILAVUZ BİLGİSİ:
${GUIDE}`;

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Yalnızca POST destekleniyor." });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Sunucu yapılandırılmamış: ANTHROPIC_API_KEY tanımlı değil." });
    return;
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: "Geçersiz istek: messages eksik." });
      return;
    }

    // güvenlik: son 10 mesajla sınırla
    const trimmed = messages.slice(-10);

    const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: trimmed
      })
    });

    if (!apiRes.ok) {
      let detail = "";
      try { const j = await apiRes.json(); detail = j.error?.message || ""; } catch (e) {}
      res.status(apiRes.status).json({ error: detail || ("Anthropic hatası: " + apiRes.status) });
      return;
    }

    const data = await apiRes.json();
    const text = (data.content || [])
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("\n")
      .trim();

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({ error: "Beklenmeyen hata: " + (err?.message || String(err)) });
  }
}
