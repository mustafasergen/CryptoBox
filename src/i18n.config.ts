import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "METAMASK_NEDIR": "What is metamask?",
                    "HAKKIMIZDA": "About Us",
                    "KAYIT_OL": "Sign Up",
                    "OTURUM_AC": "Login",
                    "HEMEN_BASLAYIN": "Start Now",
                    "BIZ_KIMIZ": "WHO ARE WE?",
                    "BIZ_INTERTECH_SIRKETINDE_2022_YILI_AGUSTOS_DONEMI_STAJYERLERINDEN": "From the Interntech 2022 August interns we Team 2",
                    "TAKIM_UYELERI": "Team Members",
                    "TAKIM_2YIZ_VE_SIZINLE_DE_AYNI_TAKIMDAYIZ": "And we are on the same team with you",
                    "PRODUCT_OWNERIMIZ_BILAL_MURAT_NAZLI_VE_AGILE_KOCUMUZ_IPEK_AKYUZE": "To our Product Owner Bilal Murat Nazlı and Agile Coach İpek Akyüz",
                    "DESTEKLERI_ICIN_COK_TESEKKUR_EDERIZ": "We thank them for their support",
                    "MISYONUMUZ": "Our mission",
                    "VIZYONUMUZ": "Our Vision",
                    "AILELER_ICIN": "For Families,",
                    "ETHEREUM_KRIPTO_PARA_BIRIMIYLE": "With Ethereum cryptocurrency",
                    "URUNLER_ICERISINDE": "using our products",
                    "BIRIKIM_YAPMALARINA": "saving money",
                    "1_NUMARA_OLMAK": "Being number one!",
                    "KULLANICI_DOSTU_VE_GUVENILIR": "With our user friendly and trusted",
                    "URUNUMUZLE": "product",
                    "OLMAYAN_WEBDE_ETKILESIM_KURARKEN": "control is always yours",
                    "AILELERIN_COCUKLARI_ICIN": "helping parents with",
                    "DESTEK_OLMAK": "for their children",
                    "LANGUAGES": "Languages",
                    "2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR": "© 2022 Intertech, Inc. All rights reserved",
                    "CONTINUE": "Continue",
                    "YATIRIMINIZ": "LET YOUR INVESTMENT",
                    "COCUGUNUZLA_BERABER_BUYUSUN": "GROW WITH YOUR CHILD",
                    "BEBEGINIZIN_SIZE_DOGRU_ATTIGI_ILK_ADIMLAR_GIBI_SIZ_DE_ONUN": "Just like your baby taking their first steps towards you",
                    "GELECEGI_ICIN_BIRIKTIRMEYE_ILK_ADIMI_ATIN_ÇOCUGUNUZ_ICIN": "Take your first steps to save up for their future",
                    "METAMASK_HESABINIZ_VARSA": "If you have a metamask account",
                    "ETHEREUM_NETWORKUNDE_ISE": "If it is on Ethereum Network",
                    "BIR_MIKTAR_ETHEREUMUNUZ_VARSA": "If you have some Ethereum",
                    "ACACAGINIZ_HESAPLA_ONUN_ICIN_KRIPTO_PARA_BIRIKTIREBILIRSINIZ": "You can save money for them with the account you are going to open",
                    "EGER": "If",
                    "COCUGUNUZUN_GELECEGI_ICIN": "INVEST FOR THE FUTURE",
                    "SIMDI_YATIRIM_YAPIN": "OF YOUR KID NOW",
                    "YATIRIM_YAPMAYA_BASLAYIN": "Start Investing Now",
                    "SIZE_KAZANDIRMAYA_BASLASIN": "will start making profit",
                    "BIRIKIMINIZ_BUYUSUN": "Increase your asset",
                    "AILELER_ICIN_BIRIKIM_YAPMAYI_KOLAY_VE_EGLENCELI_HALE_GETIREN_CRYPTOBOX_ILE": "Easy and fun saving for families with CryptoBox save for your kid",
                    "COCUGUNUZ_ICIN_BIRIKIM_YAPIN": " ",
                    "FINANSAL_GUCLENDIRME": "Financial Empowerment",
                    "CRYPTOBOX_AILELERIN_VE_COCUKLARIN_CESITLI": "CryptoBox offers a variety of services for families and children.",
                    "ACILARDAN_FINANSAL_OLARAK_GUCLENMESINE_KATKI":"contribute to its financial empowerment in terms of",
                    "SAGLAR_BIR_YATIRIM_ARACI_OLAN_CRYPTOBOX":"provides. CryptoBoX, an investment vehicle",
                    "SAYESINDE_AILELER_FINANSAL_BILGILERINI":"families financial information",
                    "KULLANARAK_KARARLAR_ALIRLAR_VE_COCUKLARINI":"make decisions using",
                    "18_YASINDA_HESAP_SAHIBI_OLMAYA_HAZIRLARLAR":"Prepare to have an account at 18",
                    "FINANSAL_OZGURLUK":"Financial Freedom",
                    "COCUKLARIN_YATIRIMLARI_OLDUGUNU_BILEREK":"Knowing that children have investments",
                    "BUYUMELERI_ONLARI_BU_BIRIKIMLE_NELER":"what does their growth do with this accumulation?",
                    "YAPABILECECEKLERI_KONUSUNDA_ONLARI_HAYAL":"imagine them about what they can do",
                    "KURMAYA_TESVIK_EDER_BU_BIRIKIMLERINI_EGITIME":"encourages establishment. These savings on education,",
                    "ILK_GIRISIMLERINE_YA_DA_DUNYAYI_GEZME":"their first ventures or traveling the world",
                    "AMACLARIYLA_KULLANABILME_FIRSATI_VERIR":"provides the opportunity to use it for its own purposes.",
                    "WEB_SITEMIZDEN_SANIYELER_ICINDE_HESABINI_OLUSTUR": "Open an account in seconds with our website",
                    "EN_GUVENILIR_KRIPTO_PARA_BIRIMLERINDEN_OLAN_ETHEREUM_ILE_BIRIKIMINIZ": "Your savings with Ethereum, one of the most reliable cryptocurrencies",
                    "NEDEN_CYRPTOBOX": "WHY CYRPTOBOX?",
                    "ISMINIZI_GIRINIZ": "Enter Name",
                    "SOYISMINIZI_GIRINIZ": "Enter Surname",
                    "AD": "Name",
                    "SOYAD": "Surname",
                    "CRYPTOBOX_HESABINIZI_OLUSTURUN": "Make a Cryptobox Account",
                    "GIRIS": "GO",
                    "SIGN_THE_MESSAGE_IN_YOUR_WALLET_TO": "Sign the message in your wallet to",
                    "ETHEREUM_BLOCKCHAIN_ILE_ETKILESIM": "A crypto wallet used to establish",
                    "KURMAK_ICIN_KULLANILAN_BIR_KRIPTO": "Interaction with Ethereum",
                    "CUZDANIDIR": "Blockchain",
                    "TOKEN_SATIN_ALIN_SAKLAYIN_GONDERIN_VE": "Buy, store, send and token",
                    "DEGISTIRIN": "replace",
                    "BIR_TARAYICI_UZANTISI_VE_BIR_MOBIL_UYGULAMA": "Available as A browser extension and a mobile app",
                    "OLARAK_MEVCUT_OLAN_METAMASK_SIZE_KEY": "MetaMask, offers you key",
                    "VAULT_GUVENLI_OTURUM_ACMA_TOKEN": "vault, secure login, Token",
                    "CUZDANI_VE_TOKEN_TAKASI_ILE_DIJITAL": "digital with wallet and Token swap",
                    "VARLIKLARINIZI_YONETMEK_ICIN_IHTIYACINIZ_OLAN": "Everything you need",
                    "HER_SEYI_SAGLAR": "to manage your assets",
                    "BLOCKCHAIN_UYGULAMALARINI_KESFEDIN": "Discover blockchain applications",
                    "METAMASK_BLOCK_ZINCIRI_TABANLI": "Blockchain based Metamask is ",
                    "UYGULAMALARA_BAGLANMANIN_EN_BASIT_AMA": "the simplest way to connect to apps while",
                    "EN_GUVENLI_YOLUN_SAGLAR_YENI_MERKEZI": "also provididing the safest way. New central",
                    "KONTROL_HER_ZAMAN_SIZDEDIR": "while interacting on the non web",
                    "VERILERINIZE_SAHIP_OLUN": "Ownership of your data",
                    "METAMASK_CIHAZINIZDA_SIFRELER_VE": "Passwords on MetaMask devices and ",
                    "ANAHTARLAR_OLUŞTURUR_BOYLECE": "keys created thus",
                    "HESAPLARINIZA_VE_VERILERINIZE_YALNIZCA_SIZ": "only you can access your accounts",
                    "ERISEBILIRSINIZ_NEYI_PAYLASACAGINIZI_VE": "and data. You decide what to share",
                    "NEYI_GIZLI_TUTACAGINIZI_HER_ZAMAN_SIZ": "or what to keep private",
                    "SECERSINIZ": "its yor choice always",
                    "DISCONNECT": "Disconnect",
                    "ZATEN_BIR_CRYPTOBOX_HESABINIZ_VAR_MI": "Already have an account?",
                    "METAMASK_BLOK_ZINCIRI_TABANLI" : "Metamask is blockchain based and is ",
                    "HEMEN_TARAYICIN_ICIN_METAMASK_INDIR": "Download metamask for your browser now",
                    "DEVAM": "Continue",
                    "GIRIS_YAPIN":"Login",
                    "METAMASK_EXTENSION_BULUNAMADI":"Metamask Extension Not Found",
                    "INTERNET_TARAYICINIZDA_METAMASKIN":"Check if the Metamask on your",
                    "ACIK_VE_BAGLI_OLDUGUNU_KONTROL":"browser is on and",
                    "EDINIZ":"connected",
                    "METAMASK_ILE_ILGILI_DAHA_FAZLA_BILGI":"If you want to",
                    "OGRENMEK_ICIN":" to learn more on Metamask",
                    "SAYFAMIZA_BAKABILIRSINIZ":"You can check our page.",
                    "LUTFEN_METAMASK_HESABINA_BAGLANIN":"Please connect to your Metamask account",
                    "TUTAR":"Amount",
                    "ALICI_COCUK":"RECIEVING:",
                    "ACIKLAMA":"EXPLANATION:",
                    "ISTEGE_BAGLI": "Optional",
                    "GONDER":"SEND",
                    "ETHEREUM_CEK":"Withdraw Ethereum",
                    "ETHEREUM_YATIR":"Invest Ethereum",
                    "MY_CRYPROBOX": "My CryptoBoX",
                    "COCUKLARIM":"My Children",
                    "CIKIS_YAP":"Log Out",
                    "COCUGUNUZUN_ADI":"Name of your child",
                    "COCUGUNUZUN_SOYADI":"Surname of your child",
                    "COCUGUNUZUN_DOGUM_TARIHI":"Release Time",
                    "COCUGUNUZUN_METAMASK_HESABI":"Metamask account of your child",
                    "COCUGU_EKLE":"Add Child",
                    "METMASK_HESABIM_YOK_YINE_DE_CRYTOBOXA_KAYIT_OLABILIR_MIYIM":"I don't have a metmask account. Can I still register to cryptobox?",
                    "MAALESEF_KAYIT_OLMAK_ICIN_METAMASK_HESABIN_OLMASI_GEREKIYOR_DETAYLI_BILGI":"Unfortunately, you need a MetaMask account to register. More information",
                    "SAYFAMIZA_GOZ_ATABILIRSIN":"You can check our page",
                    "CRYPTOBOX_GUVENILIR_BIR_UYGULAMA_MI":"Is CryptoBox a reliable app?",
                    "ETHEREUM_EN_GUVENLI_KRIPTO_PARA_BIRIMLERINDEN_BIR_TANESIDIR_CRYPTOBOX_DA":"Ethereum is one of the safest cryptocurrencies. And CryptoBox",
                    "GUVENILIRLIGINI_ETHEREUMUN_AKILLI_KONTRAT_VE_GUVENLI_FINANSAL_ISLEMLERI_DESTEKELEMESINDEN_ALIR":"derives its credibility from Ethereum's ability to support smart contracts and secure financial transactions.",
                    "CRYPTOBOXA_KIMLER_UYE_OLABILIR":"Who can become a member of CryptoBox?",
                    "METAMASK_HESABI_ETHEREUM_NETWORKUNDE_OLAN_HESABINDA_ETHEREUMU_BULUNAN":"MetaMask account on the Ethereum network, with Ethereum in the account",
                    "VE_COCUKLARI_ICIN_KRIPTO_BIRIKIMI_YAPMAK_ISTEYEN_TUM_EBEVEYNLER_UYE_OLABILIR":"and all parents who want to save crypto for their children can become members.",
                    "SIK_SORULAN_SORULAR":"FREQUENTLY ASKED QUESTIONS",
                    "VE_INDIRME_DETAYLARI_ICIN":"and for installation information",
                    "ISLEMINIZ_BASARIYLA_TAMAMLANMISTIR":"Your transaction was sucsessfull",
                    "HOS_GELDIN": "Welcome",
                    "PARA_CEK":"Withdraw",
                    "PARA_GONDERME":"Send Money",
                    "HESAP_HAREKETLERI":"Transactions",
                    "OTURUM_DEGISTIRME":"Change Account",
                    "TARIHINDEN_ITIBAREN_ISLEM_YAPMAYA":"after this date you can start making",
                    "BASLAYABILIRSIN":"transtactions",
                    "KIME": "To:",
                    "ISLEM":"Process",
                    "BU_KISIM_BOS_BIRAKILAMAZ": "Can't leave this form empty",
                    "AD_SOYAD":"Name and Surname",
                    "BAKIYE":"Balance",
                    "METAMASK_ADRESI": "Metamask Adress",
                    "COCUKLARA_GONDERILEN_TOPLAM_MIKTAR":"Total amount sent to children",
                    "KAYIT_OLMADIYSANIZ_LUTFEN_KAYIT_OLUNUZ_EGER_KAYITLI_HESABINIZ_VARSA_GIRIS_YAPINIZ":"If you have never registered please sign up, İf you did login with your registered account",
                    "EBEVEYN_HESABI_OLARAK_GIRIS_YAPINIZ":"Login as Parent",
                    "COCUK_HESABI_OLARAK_GIRIS_YAPINIZ":"Login as Child",
                    "COCUGUNUZUN_HESABINDAN_PARA_CEK":"Withdraw money from child",
                    "COCUGUNUZUN_EKLENMESI_ICIN_METAMASKTAN_UCRETI_ONAYLAYIN_LUTFEN":"For your child to be added please approve the payment from Metamask",
                    "BILGILENDIRME_MESAJI":"Information Message",
                    "LUTFEN_BILGILERI_ISTENILEN_GIBI_DOLDURUN":"Please fill in the forms as required",
                    "HESAP_OLUSTURUN":"Create an Account",
                    "BU_ADRES_ILE_HESAP_VAR":"There is an account using this adress",
                    "METAMASKTAN_UCRETI_ONAYLAYIN_LUTFEN":"Please approve the payment from Metamask",
                    "BILGILENDIRME":"Information",
                    "CUZDAN_HIZMETI_VEREN":"providing wallet service"








                }
            },
            tr: {
                translation: {
                    "METAMASK_NEDIR": "Metamask Nedir?",
                    "HAKKIMIZDA": "Hakkımızda",
                    "KAYIT_OL": "Kayıt Ol",
                    "OTURUM_AC": "Oturum aç",
                    "FAQ": "FAQ",
                    "HEMEN_BASLAYIN": "Hemen Başlayın",
                    "COCUGUNUZLA_BERABER_BUYUSUN": "ÇOCUĞUNUZLA BERABER BÜYÜSÜN",
                    "BIRIKIMINIZ_BUYUSUN": "Birikiminiz Büyüsün",
                    "BIZ_KIMIZ": "BİZ KİMİZ?",
                    "TAKIM_2YIZ_VE_SIZINLE_DE_AYNI_TAKIMDAYIZ": "Takım 2'yiz Ve sizinle de aynı takımdayız",
                    "TAKIM_UYELERI": "Takım üyeleri",
                    "PRODUCT_OWNERIMIZ_BILAL_MURAT_NAZLI_VE_AGILE_KOCUMUZ_IPEK_AKYUZE": "Product Owner’ımız Bilal Murat Nazlı ve Agile Koç’umuz İpek Akyüz’e",
                    "DESTEKLERI_ICIN_COK_TESEKKUR_EDERIZ.": "destekleri için çok teşekkür ederiz.",
                    "MISYONUMUZ": "Misyonumuz",
                    "VIZYONUMUZ": "Vizyonumuz",
                    "AILELER_ICIN": "Aileler için",
                    "ETHEREUM_KRIPTO_PARA_BIRIMIYLE": "Ethereum kripto para birimiyle",
                    "URUNLER_ICERISINDE": "ürünler içerisinde",
                    "BIRIKIM_YAPMALARINA": "birikim yapmalarına",
                    "1_NUMARA_OLMAK": "1 Numara olmak!",
                    "KULLANICI_DOSTU_VE_GUVENILIR": "Kullanıcı dostu ve güvenilir",
                    "URUNUMUZLE": "ürünümüzle",
                    "OLMAYAN_WEBDE_ETKILESIM_KURARKEN'de_etkileşim_kurarken": "olmayan web'de_etkileşim_kurarken",
                    "AILELERIN_COCUKLARI_ICIN": "ailelerin çocukları için",
                    "DESTEK_OLMAK": "destek olmak",
                    "LANGUAGES": "Diller",
                    "2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR": "© 2022 Intertech, Inc. Her hakkı saklıdır",
                    "BIZ_INTERTECH_SIRKETINDE_2022_YILI_AGUSTOS_DONEMI_STAJYERLERINDEN": "Biz INTERTECH şirketinde 2022 yılı Ağustos dönemi stajyerlerinden",
                    "METAMASK_HESABINIZ_VARSA": "MetaMask hesabınız varsa",
                    "ETHEREUM_NETWORKUNDE_ISE": "Ethereum Networkünde ise",
                    "BIR_MIKTAR_ETHEREUMUNUZ_VARSA": "Bir miktar Ethereum’unuz varsa",
                    "ACACAGINIZ_HESAPLA_ONUN_ICIN_KRIPTO_PARA_BIRIKTIREBILIRSINIZ":"açacağınız hesapla onun için kripto para biriktirebilirsiniz.",
                    "EGER": "Eğer",
                    "COCUGUNUZUN_GELECEGI_ICIN": "ÇOCUĞUNUZUN GELECEĞİ İÇİN",
                    "YATIRIM_YAPMAYA_BASLAYIN": "Yatırım Yapmaya Başlayın",
                    "SIZE_KAZANDIRMAYA_BASLASIN": "size kazandırmaya başlasın",
                    "SIMDI_YATIRIM_YAPIN": "ŞİMDİ YATIRIM YAPIN",
                    "WEB_SITEMIZDEN_SANIYELER_ICINDE_HESABINI_OLUSTUR": "Web sitemizden saniyeler içinde hesabını oluştur",
                    "EN_GUVENILIR_KRIPTO_PARA_BIRIMLERINDEN_OLAN_ETHEREUM_ILE_BIRIKIMINIZ": "En güvenilir kripto para birimlerinden olan Ethereum ile birikiminiz",

                    "AILELER_ICIN_BIRIKIM_YAPMAYI_KOLAY_VE_EGLENCELI_HALE_GETIREN_CRYPTOBOX_ILE": "Aileler için birikim yapmayı kolay ve eğlenceli hale getiren CryptoBox ile",
                    "FINANSAL_GUCLENDIRME": "Finansal Güçlendirme",
                    "CRYPTOBOX_AILELERIN_VE_COCUKLARIN_CESITLI": "CryptoBox, ailelerin ve çocukların çeşitli",
                    "ACILARDAN_FINANSAL_OLARAK_GUCLENMESINE_KATKI":"açılardan finansal olarak güçlenmesine katkı",
                    "SAGLAR_BIR_YATIRIM_ARACI_OLAN_CRYPTOBOX":"sağlar. Bir yatırım aracı olan  CryptoBoX",
                    "SAYESINDE_AILELER_FINANSAL_BILGILERINI":"sayesinde aileler finansal bilgilerini",
                    "KULLANARAK_KARARLAR_ALIRLAR_VE_COCUKLARINI":"kullanarak kararlar alırlar ve çocuklarını",
                    "18_YASINDA_HESAP_SAHIBI_OLMAYA_HAZIRLARLAR":"18 yaşında hesap sahibi olmaya hazırlarlar",
                    "FINANSAL_OZGURLUK":"Finansal Özgürlük",
                    "COCUKLARIN_YATIRIMLARI_OLDUGUNU_BILEREK":"Çocukların yatırımları olduğunu bilerek",
                    "BUYUMELERI_ONLARI_BU_BIRIKIMLE_NELER":"büyümeleri onları bu birikimle neler",
                    "YAPABILECECEKLERI_KONUSUNDA_ONLARI_HAYAL":"yapabilececekleri konusunda onları hayal",
                    "KURMAYA_TESVIK_EDER_BU_BIRIKIMLERINI_EGITIME":"kurmaya teşvik eder. Bu birikimlerini eğitime,",
                    "ILK_GIRISIMLERINE_YA_DA_DUNYAYI_GEZME":"ilk girişimlerine ya da dünyayı gezme ",
                    "AMACLARIYLA_KULLANABILME_FIRSATI_VERIR":"amaçlarıyla kullanabilme fırsatı verir. ",
                    "COCUGUNUZ_ICIN_BIRIKIM_YAPIN": "çocuğunuz için birikim yapın",
                    "NEDEN_CYRPTOBOX": "NEDEN CRYPTOBOX?",
                    "ZATEN_BIR_CRYPTOBOX_HESABINIZ_VAR_MI": "Zaten bir CryptoBox Hesabınız var mı?",
                    "CONTINUE": "İlerle",
                    "YATIRIMINIZ": "YATIRIMINIZ",
                    "BEBEGINIZIN_SIZE_DOGRU_ATTIGI_ILK_ADIMLAR_GIBI_SIZ_DE_ONUN": "Bebeğinizin size doğru attığı ilk adımlar gibi siz de onun",
                    "GELECEGI_ICIN_BIRIKTIRMEYE_ILK_ADIMI_ATIN_ÇOCUGUNUZ_ICIN": "geleceği için biriktirmeye ilk adımı atın! Çocuğunuz için",
                    "METAMASK_NEDIR?": "MetaMask Nedir?",
                    "ISMINIZI_GIRINIZ": "İsminizi giriniz",
                    "SOYISMINIZI_GIRINIZ": "İsminizi giriniz",
                    "AD": "Ad",
                    "SOYAD": "Soyad",
                    "CRYPTOBOX_HESABINIZI_OLUSTURUN": "CryptoBox Hesabınızı Oluşturun",
                    "GIRIS": "Giriş",
                    "SIGN_THE_MESSAGE_IN_YOUR_WALLET_TO": "Cüzdanınızın mesajını girin",
                    "ETHEREUM_BLOCKCHAIN_ILE_ETKILESIM": "Ethereum Blockchain ile etkileşim",
                    "KURMAK_ICIN_KULLANILAN_BIR_KRIPTO": "kurmak için kullanılan bir Kripto",
                    "CUZDANIDIR": "Cüzdanıdır",
                    "TOKEN_SATIN_ALIN_SAKLAYIN_GONDERIN_VE": "Token satın alın, saklayın, gönderin ve",
                    "DEGISTIRIN": "değiştirin",
                    "BIR_TARAYICI_UZANTISI_VE_BIR_MOBIL_UYGULAMA": "Bir tarayıcı uzantısı ve bir mobil uygulama",
                    "OLARAK_MEVCUT_OLAN_METAMASK_SIZE_KEY": "olarak mevcut olan MetaMask, size key",
                    "VAULT_GUVENLI_OTURUM_ACMA_TOKEN": "vault, güvenli oturum açma, Token",
                    "CUZDANI_VE_TOKEN_TAKASI_ILE_DIJITAL": "cüzdanı ve Token takası ile dijital",
                    "VARLIKLARINIZI_YONETMEK_ICIN_IHTIYACINIZ_OLAN": "varlıklarınızı yönetmek için ihtiyacınız olan",
                    "HER_SEYI_SAGLAR": "her şeyi sağlar",
                    "BLOCKCHAIN_UYGULAMALARINI_KESFEDIN": "Blockchain uygulamalarını keşfedin",
                    "METAMASK_BLOCK_ZINCIRI_TABANLI": "Metamask, block chain zinciri tabanlı",
                    "UYGULAMALARA_BAGLANMANIN_EN_BASIT_AMA": "uygulamalara bağlanmanın en basit ama",
                    "EN_GUVENLI_YOLUN_SAGLAR_YENI_MERKEZI": "en güvenli yolunu sağlar. Yeni merkezi",
                    "OLMAYAN_WEBDE_ETKILESIM_KURARKEN":"olmayan web'de etkileşim kurarken",
                    "KONTROL_HER_ZAMAN_SIZDEDIR": "kontrol her zaman sizdedir",
                    "VERILERINIZE_SAHIP_OLUN": "Verilerinize sahip olun",
                    "METAMASK_CIHAZINIZDA_SIFRELER_VE": "MetaMask cihazınızda şifreler ve",
                    "ANAHTARLAR_OLUŞTURUR_BOYLECE": "anahtarlar oluşturur, böylece",
                    "HESAPLARINIZA_VE_VERILERINIZE_YALNIZCA_SIZ": "hesaplarınıza ve verilerinize yalnızca siz",
                    "ERISEBILIRSINIZ_NEYI_PAYLASACAGINIZI_VE": "erişebilirsiniz. Neyi paylaşacağınızı ve",
                    "NEYI_GIZLI_TUTACAGINIZI_HER_ZAMAN_SIZ": "neyi gizli tutacağınızı her zaman siz",
                    "SECERSINIZ": "seçersiniz",
                    "HEMEN_TARAYICIN_ICIN_METAMASK_INDIR":"Hemen tarayıcın için MetaMask indir",
                    "DISCONNECT": "Bağlantıyı kes",
                    "DEVAM": "Devam",
                    "GIRIS_YAPIN": "Giriş Yapın",
                    "METAMASK_EXTENSION_BULUNAMADI":"Metamask Extension Bulunamadı",
                    "INTERNET_TARAYICINIZDA_METAMASKIN":"İnternet tarayıcınızda Metamask’ın",
                    "ACIK_VE_BAGLI_OLDUGUNU_KONTROL":"açık ve bağlı olduğunu kontrol",
                    "EDINIZ":"ediniz.",
                    "METAMASK_ILE_ILGILI_DAHA_FAZLA_BILGI":"Metamask ile ilgili daha fazla bilgi",
                    "OGRENMEK_ICIN":" öğrenmek için",
                    "SAYFAMIZA_BAKABILIRSINIZ":"sayfamıza bakabilirsiniz.",
                    "LUTFEN_METAMASK_HESABINA_BAGLANIN":"Lütfen MetaMask hesabına bağlanın",
                    "TUTAR":"Tutar",
                    "ALICI_COCUK":"Alıcı Çocuk:",
                    "ISTEGE_BAGLI":"İsteğe Bağlı",
                    "ACIKLAMA":"Açıklama:",
                    "GONDER":"Gönder",
                    "ETHEREUM_CEK":"Ethereum Çek",
                    "ETHEREUM_YATIR":"Ethereum Yatır",
                    "MY_CRYPROBOX": "CryptoBoX'um",
                    "COCUKLARIM":"Çocuklarım",
                    "CIKIS_YAP":"Çıkış Yap",
                    "COCUGUNUZUN_ADI":"Çocuğunuzun Adı",
                    "COCUGUNUZUN_SOYADI":"Çocuğunuzun Soyadı",
                    "COCUGUNUZUN_DOGUM_TARIHI":"Aktivasyon Tarihi",
                    "COCUGUNUZUN_METAMASK_HESABI":"Çocuğunuzun Metamask Hesabı",
                    "COCUGU_EKLE":"Çocuğu Ekle",
                    "METMASK_HESABIM_YOK_YINE_DE_CRYTOBOXA_KAYIT_OLABILIR_MIYIM":"Metmask hesabim yok. Yine de cryptobox'a kayıt olabilir miyim?",
                    "MAALESEF_KAYIT_OLMAK_ICIN_METAMASK_HESABIN_OLMASI_GEREKIYOR_DETAYLI_BILGI":"Maalesef kayıt olmak için MetaMask hesabın olması gerekiyor. Detaylı bilgi",
                    "SAYFAMIZA_GOZ_ATABILIRSIN":"sayfamıza göz atabilirsin.",
                    "CRYPTOBOX_GUVENILIR_BIR_UYGULAMA_MI":"CryptoBox güvenilir bir uygulama mı?",
                    "ETHEREUM_EN_GUVENLI_KRIPTO_PARA_BIRIMLERINDEN_BIR_TANESIDIR_CRYPTOBOX_DA":"Ethereum en güvenli kripto para birimlerinden bir tanesidir. CryptoBox da ",
                    "GUVENILIRLIGINI_ETHEREUMUN_AKILLI_KONTRAT_VE_GUVENLI_FINANSAL_ISLEMLERI_DESTEKELEMESINDEN_ALIR":"güvenilirliğini Ethereum’un akıllı kontrat ve güvenli finansal işlemleri destekelemesinden alır.",
                    "CRYPTOBOXA_KIMLER_UYE_OLABILIR":"CryptoBox’a kimler üye olabilir?",
                    "METAMASK_HESABI_ETHEREUM_NETWORKUNDE_OLAN_HESABINDA_ETHEREUMU_BULUNAN":"MetaMask hesabı Ethereum networkünde olan, hesabında Ethereum’u bulunan",
                    "VE_COCUKLARI_ICIN_KRIPTO_BIRIKIMI_YAPMAK_ISTEYEN_TUM_EBEVEYNLER_UYE_OLABILIR":"ve çocukları için kripto birikimi yapmak isteyen tüm ebeveynler üye olabilir.",
                    "SIK_SORULAN_SORULAR":"SIK SORULAN SORULAR",
                    "VE_INDIRME_DETAYLARI_ICIN":"ve indirme detayları için",
                    "ISLEMINIZ_BASARIYLA_TAMAMLANMISTIR":"İşleminiz başarıyla tamamlanmıştır.",
                    "HOS_GELDIN":"Hoş Geldin",
                    "PARA_CEK":"Para Çek",
                    "PARA_GONDERME":"Para Gönder",
                    "HESAP_HAREKETLERI":"Hesap Hareketleri",
                    "OTURUM_DEGISTIRME":"Oturum Değiştirme",
                    "TARIHINDEN_ITIBAREN_ISLEM_YAPMAYA":" tarihinden itibaren işlem yapmaya",
                    "BASLAYABILIRSIN":" başlayabilirsin",
                    "KIME": "Kime:",
                    "ISLEM":"İşlem",
                    "BU_KISIM_BOS_BIRAKILAMAZ": "Bu kısım boş bırakılamaz",
                    "AD_SOYAD":"Ad ve Soyad Giriniz",
                    "BAKIYE":"Bakiye",
                    "METAMASK_ADRESI": "Metamask Adresi",
                    "COCUKLARA_GONDERILEN_TOPLAM_MIKTAR":"Çocuklara Gönderilen Toplam Miktar",
                    "KAYIT_OLMADIYSANIZ_LUTFEN_KAYIT_OLUNUZ_EGER_KAYITLI_HESABINIZ_VARSA_GIRIS_YAPINIZ":"Kayıt olmadıysanıza lütfen kayıt olun, Eğer hesabınız varsa Kayıtlı hesabınız ile Giriş yapınız",
                    "EBEVEYN_HESABI_OLARAK_GIRIS_YAPINIZ":"Ebeveyn Hesabı olarak Giriş Yapın",
                    "COCUK_HESABI_OLARAK_GIRIS_YAPINIZ":"Çocuk Hesabı Olarak Giriş Yapın",
                    "COCUGUNUZUN_HESABINDAN_PARA_CEK":"Çocuğunuzun hesabından para çekin",
                    "COCUGUNUZUN_EKLENMESI_ICIN_METAMASKTAN_UCRETI_ONAYLAYIN_LUTFEN":"Çoçuğunuzun eklenmesi için MetaMask'tan ücreti onaylayın lütfen.",
                    "BILGILENDIRME_MESAJI":"Bilgilendirme Mesajı",
                    "LUTFEN_BILGILERI_ISTENILEN_GIBI_DOLDURUN":"Lütfen Bilgileri İstenilen gibi doldurdun",
                    "HESAP_OLUSTURUN":"Hesap Oluşturun",
                    "BU_ADRES_ILE_HESAP_VAR":"Bu adres ile hesap var",
                    "METAMASKTAN_UCRETI_ONAYLAYIN_LUTFEN":"Metamask'tan ücrei onaylayın lütfen",
                    "BILGILENDIRME":"Bilgilendirme",
                    "CUZDAN_HIZMETI_VEREN":"Cüzdan hizmeti veren"


























                }
            }
        },
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: 'locales'
        },
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export const languages = [
    {
        code: 'tr',
        name: 'Türkçe',
        country_code: 'tr',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    }
]
export function ML(key: string) {
    return i18n.t(key)
}

export default i18n;