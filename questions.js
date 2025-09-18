const questions = [
    {
        question: "Fakirlere kaynak sağlamak için zenginlerden daha yüksek vergi alınmalıdır.",
        axis: "solsag",
        effect: -1
    },
    {
        question: "Devletin, tüketiciyi korumak için ekonomiye müdahale etmesi gerekir.",
        axis: "solsag",
        effect: -1
    },
    {
        question: "Eğitim, sağlık gibi alanlar vergiler ile herkese ücretsiz hâle getirilmelidir.",
        axis: "solsag",
        effect: -1
    },
    {
        question: "TRT'nin vergilerle ayakta tutulması, devletin kendi televizyonunun olması için önemlidir.",
        axis: "solsag",
        effect: -1
    },
    {
        question: "Geliri yüksek olanlardan alınan vergilerle işsizlere işsizlik maaşı verilmelidir.",
        axis: "solsag",
        effect: -1
    },
    {
        question: "Şirket kurma ve girişim yapma kolaylaştırılmalıdır.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "Vergi, devletin para koparma yöntemidir.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "Rekabet ortamı, ürünlerin daha kaliteli olması için itici bir güçtür.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "Piyasalar ne kadar özgürse insanlar da o kadar özgürdür.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "İşsizlikten önce enflasyon çözülmeli.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "Emniyet kemeri zorunlu olmamalıdır.",
        axis: "libotok",
        effect: 1
    },
    {
        question: "Belirli uyuşturucu türleri yasal hale getirilmeli ve suç olmamalıdır.",
        axis: "libotok",
        effect: 1
    },
    {
        question: "Devletin çeşitli sitelere ya da doğrudan İnternet'e bant daraltması uygulaması kabul edilemez.",
        axis: "libotok",
        effect: 1
    },
    {
        question: "Belirli saatlerdeki alkol satışı yasağı, müzik çalma yasağı vb. yasaklar kesinlikle kaldırılmalıdır.",
        axis: "libotok",
        effect: 1
    },
    {
        question: "Devlet ne yiyeceğime, içeceğime ya da giyeceğime karışamaz.",
        axis: "libotok",
        effect: 1
    },
    {
        question: "Bireysel özgürlükler, toplumsal düzen için devlet tarafından kısıtlanabilir.",
        axis: "libotok",
        effect: -1
    },
    {
        question: "Devlet yanlış haberin yayılmaması için önlem almalı ve cezai işlem uygulamalıdır.",
        axis: "libotok",
        effect: -1
    },
    {
        question: "Genel anlamda devlet doğru işleri yapar, konu ne olursa olsun.",
        axis: "libotok",
        effect: -1
    },
    {
        question: "Her yetkinin tek elde toplanması bazen daha iyidir.",
        axis: "libotok",
        effect: -1
    },
    {
        question: "Devletin işleyişi için bir noktada otorite gereklidir.",
        axis: "libotok",
        effect: -1
    },
    {
        question: "Eşcinsel bireyler ve hakları vardır ve savunulmalıdır.",
        axis: "ilericimuhafazakar",
        effect: -1
    },
    {
        question: "Tıbbi yardımlı intihar serbest olmalıdır.",
        axis: "ilericimuhafazakar",
        effect: -1
    },
    {
        question: "Devlet, tüm vatandaşlar için eşit mesafede durmalı ve dinlerüstü bir konumda olmalıdır.",
        axis: "ilericimuhafazakar",
        effect: -1
    },
    {
        question: "Dinler geçmiş çağların mitolojileridir.",
        axis: "ilericimuhafazakar",
        effect: -1
    },
    {
        question: "Türkiye'nin dini olmamalı, laik bir ülke olarak kalmalıdır.",
        axis: "ilericimuhafazakar",
        effect: -1
    },
    {
        question: "Din olmadan toplumsal çöküş hızlanır.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "Din Kültürü dersi zorunlu olmalı, öğrencilere İslam aşılanmalıdır.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "Kadın; mirasın 1/3'ünü almalı, mahkeme şahitliği erkeğin yarısı kadar sayılmalıdır.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "Erkeklerin kolye/küpe gibi aksesuarları takması ya da kızların açık giyinmesi kesinlikle çok aşırıya kaçtı.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "Kadınlar ile erkekler asla tam anlamıyla eşit olamaz, olmamalıdır.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "Kültürü fark etmeksizin her insana eşit davranılmalıdır.",
        axis: "kurmil",
        effect: 1
    },
    {
        question: "NATO, Avrupa Birliği, Birleşmiş Milletler gibi oluşumlar yararlıdır ve Türkiye'nin yer alması önemlidir.",
        axis: "kurmil",
        effect: 1
    },
    {
        question: "Fazla devlet fazla savaşa sebep olur.",
        axis: "kurmil",
        effect: 1
    },
    {
        question: "Tüm dünya tek bir ülke olsaydı insanlık açısından her şey daha iyi olurdu.",
        axis: "kurmil",
        effect: 1
    },
    {
        question: "Türkiye yönünü doğudan ziyade batıya, özellikle Avrupa'ya doğrultmalıdır.",
        axis: "kurmil",
        effect: 1
    },
    {
        question: "Uluslararası birlikler kültürümüzü zedeler.",
        axis: "kurmil",
        effect: -1
    },
    {
        question: "Türkiye, yurt dışı teknolojilerini sınırlayıp kendi ürünlerinin kullanımını teşvik etmelidir.",
        axis: "kurmil",
        effect: -1
    },
    {
        question: "Güçlü diplomasiden ziyade güçlü asker her zaman daha iyidir.",
        axis: "kurmil",
        effect: -1
    },
    {
        question: "Devletim, komşu ülkelere tehdit oluşturacaksa bile her alanda bizim çıkarlarıma uygun hareket etmelidir.",
        axis: "kurmil",
        effect: -1
    },
    {
        question: "Mülteciler, kim olduğuna bakılmaksızın sınır dışı edilmelidir.",
        axis: "kurmil",
        effect: -1
    },
    {
        question: "Türkiye'de uygulanacak bir eyalet sistemi, sorunları çözebilir.",
        axis: "unifed",
        effect: 1
    },
    {
        question: "Türkiye içinde bir Kürdistan kurulabilir.",
        axis: "unifed",
        effect: 1
    },
    {
        question: "Yerel yönetimlerin, daha fazla yetkiye sahip olması gereklidir.",
        axis: "unifed",
        effect: 1
    },
    {
        question: "Kürtçe veya Arapça, Kürtlerin veya Arapların çoğunluk olduğu bölgelerde tabelalarda vb. yerlerde kullanılabilir.",
        axis: "unifed",
        effect: 1
    },
    {
        question: "Federal eyalet sistemi daha kapsayıcı bir devlet yönetim biçimidir.",
        axis: "unifed",
        effect: 1
    },
    {
        question: "Şehirler ve kültürler arası farklılıklar ne olursa olsun her yerde kurallar adaptasyon geçirmeden birebir uygulanmalıdır.",
        axis: "unifed",
        effect: -1
    },
    {
        question: "Anayasanın ilk dört ve 66. maddesi güvencemizdir.",
        axis: "unifed",
        effect: -1
    },
    {
        question: "Türklük, tüm vatandaşların kullanması gereken zorunlu üst kimliktir.",
        axis: "unifed",
        effect: -1
    },
    {
        question: "Türkçe dışında hiçbir dil resmi devlet dairelerinde kabul edilmemelidir.",
        axis: "unifed",
        effect: -1
    },
    {
        question: "Türkiye'de Türk Bayrağı dışında herhangi bir bayrak sallamak suç teşkil etmelidir.",
        axis: "unifed",
        effect: -1
    }
];