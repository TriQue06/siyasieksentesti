const questions = [
    {
        question: "Ekonomik eşitsizliği azaltmak için zenginlerden daha yüksek vergi alınmalıdır.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "Eğitim, sağlık gibi alanlar vergiler ile herkese ücretsiz hâle getirilmelidir.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "TRT'nin vergilerle ayakta tutulması, devletin kendi televizyonunun olması için önemlidir.",
        axis: "solsag",
        effect: 1
    },
    {
        question: "Şirket kurma ve girişmde bulunma kolaylaştırılmalıdır.",
        axis: "solsag",
        effect: -1
    },
    {
        question: "Vergi, devletin para koparma yöntemidir.",
        axis: "solsag",
        effect: -1
    },
    {
        question: "Rekabet ortamı, ürünlerin daha kaliteli olması için itici bir güçtür.",
        axis: "solsag",
        effect: -1
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
        question: "Dinler bizi bir arada tutar, din olmadan toplumsal çöküş hızlanır.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "Din olmadan ahlak olmaz, dinsizler genel anlamda ahlaksız insanlarla paralellik gösterir.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "Erkeklerin kolye/küpe gibi aksesuarları takması ya da kızların açık giyinmesi kesinlikle denetim altına alınmalı.",
        axis: "ilericimuhafazakar",
        effect: 1
    },
    {
        question: "NATO, Avrupa Birliği, Birleşmiş Milletler gibi oluşumlar yararlıdır ve Türkiye'nin yer alması önemlidir.",
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
        question: "Ulusal çıkarlar her ne olursa olsun, uluslararası beraberliklerden daha öncelikli olmalıdır.",
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
        question: "Yerel yönetimlerin, daha fazla yetkiye sahip olması gereklidir.",
        axis: "feduni",
        effect: 1
    },
    {
        question: "Kürtçe tabelalar aşırıya kaçmadığı sürece benim için problem değildir.",
        axis: "feduni",
        effect: 1
    },
    {
        question: "Federal eyalet sistemi daha kapsayıcı bir devlet yönetim biçimidir.",
        axis: "feduni",
        effect: 1
    },
    {
        question: "Şehirler ve kültürler arası farklılıklar ne olursa olsun her yerde kurallar adaptasyon geçirmeden birebir uygulanmalıdır.",
        axis: "feduni",
        effect: -1
    },
    {
        question: "Türklük, tüm vatandaşların kullanması gereken zorunlu üst kimliktir.",
        axis: "feduni",
        effect: -1
    },
    {
        question: "Türkçe dışında hiçbir dil resmi devlet dairelerinde kabul edilmemelidir.",
        axis: "feduni",
        effect: -1
    }
];