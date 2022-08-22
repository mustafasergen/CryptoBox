
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
                    "FAQ": "FAQ",
                    "Hemen_Başlayın": "Start Now",
                    "BIZ_KIMIZ": "WHO ARE WE?",
                    "Biz_INTERTECH_şirketinde_2022_yılı_Ağustos_dönemi_stajyerlerinden": "From the Interntech 2022 August interns we Team 2",
                    "Takım_üyeleri": "Team Members",
                    "Takım_2yiz_Ve_sizinle_de_aynı_takımdayız": "And we are on the same team with you",
                    "Anil_Çetin": "Anıl Çetin",
                    "Çağdaş_Çapuk": "Çağdaş Çapuk",
                    "Elif_Ezgi_İzgin": "Elif Ezgi İzgin",
                    "Emine_Çiğ": "Emine Çiğ",
                    "Hasan_Yiğit_Kaya": "Hasan Yiğit Kaya",
                    "Irmak_Özügüzel": "Irmak Özügüzel",
                    "Mustafa_Sergen_Haysal": "Mustafa Sergen Haysal",
                    "Sezgin_Kale": "Sezgin Kale",
                    "Zeynep_Özer": "Zeynep Özer",
                    "Product_Owner": "To our Product Owner Bilal Murat Nazlı and Agile Coach İpek Akyüz",
                    "destekleri_için_çok_teşekkür_ederiz.": "We thank them for their support",
                    "Misyonumuz": "Our mission",
                    "CryptoBox": "CryptoBox",
                    "Vizyonumuz": "Our Vision",
                    "Aileler_için": "For Families,",
                    "Ethereum_kripto_para_birimiyle": "With Ethereum cryptocurrency",
                    "ürünler_içerisinde": "using our products",
                    "birikim_yapmalarına": "saving money",
                    "Aileler için": "For families",
                    "1_Numara_olmak": "Being number one!",
                    "Kullanıcı_dostu_ve_güvenilir": "With our user friendly and trusted",
                    "ürünümüzle": "product",
                    "olmayan_web'de_etkileşim_kurarken": "control is always yours",
                    "ailelerin_çocukları_için": "helping parents with",
                    "destek_olmak": "for their children",
                    "Languages": "Languages",
                    "2022_Intertech_Inc_Her_hakkı _saklıdır": "© 2022 Intertech, Inc. All rights reserved",
                    "Continue": "Continue",
                    "YATIRIMINIZ": "LET YOUR INVESTMENT",
                    "ÇOCUĞUNUZLA_BERABER_BÜYÜSÜN": "GROW WITH YOUR CHILD",
                    "Bebeğinizin_size_doğru_attığı_ilk_adımlar_gibi_siz_de_onun": "Just like your baby taking their first steps towards you",
                    "geleceği için biriktirmeye ilk adımı atın! Çocuğunuz için": "Take your first steps to save up for their future",
                    "MetaMask_hesabınız_varsa": "If you have a metamask account",
                    "Ethereum_Networkünde_ise": "If it is on Ethereum Network",
                    "Bir_miktar_Ethereum’unuzvarsa": "If you have some Ethereum",
                    "açacağınız hesapla onun için kripto para biriktirebilirsiniz.": "You can save money for them with the account you are going to open",
                    "Eğer": "If",
                    "ÇOCUĞUNUZUN GELECEĞİ İÇİN": "INVEST FOR THE FUTURE",
                    "ŞİMDİ YATIRIM YAPIN": "OF YOUR KID NOW",
                    "Yatırım Yapmaya Başlayın": "Start Investing Now",
                    "size_kazandırmaya_başlasın": "will start making profit",
                    "Birikiminiz_Büyüsün": "Increase your asset",
                    "Aileler_için_birikim yapmayı_kolay_ve_eğlenceli_hale_getiren_CryptoBox_ile": "Easy and fun saving for families with CryptoBox save for your kid",
                    "çocuğunuz_için_birikim_yapın": " ",
                    "Web sitemizden saniyeler içinde hesabını oluştur": "Open an account in seconds with our website",
                    "En güvenilir kripto para birimlerinden olan Ethereum ile birikiminiz": "Your savings with Ethereum, one of the most reliable cryptocurrencies",
                    "NEDEN_CRYPTOBOX": "WHY CYRPTOBOX  ?",
                    "METAMASK_NEDIR?": "What is Metamask?",
                    "İsminizi_giriniz": "Enter Name",
                    "Soyisminizi_giriniz": "Enter Surname",
                    "AD": "Name",
                    "SOYAD": "Surname",
                    "CryptoBox_Hesabınızı_Oluşturun": "Make a Cryptobox Account",
                    "Giriş": "GO",
                    "Sign_the_message_in_your_wallet_to": "Sign the message in your wallet to",
                    "Ethereum_Blockchain_ile_etkileşim": "A crypto wallet used to establish",
                    "kurmak_için_kullanılan_bir_Kripto": "Interaction with Ethereum",
                    "Cüzdanıdır.": "Blockchain",
                    "Token satın alın, saklayın, gönderin ve": "Buy, store, send and token",
                    "değiştirin": "replace",
                    "Bir tarayıcı uzantısı ve bir mobil uygulama": "Available as A browser extension and a mobile app",
                    "olarak mevcut olan MetaMask, size key": "MetaMask, offers you key",
                    "vault, güvenli oturum açma, Token": "vault, secure login, Token",
                    "cüzdanı ve Token takası ile dijital": "digital with wallet and Token swap",
                    "varlıklarınızı yönetmek için ihtiyacınız olan": "Everything you need",
                    "her şeyi sağlar": "to manage your assets",
                    "Blockchain uygulamalarını keşfedin": "Discover blockchain applications",
                    "uygulamalara bağlanmanın en basit ama": "the simplest way to connect to apps while",
                    "en güvenli yolunu sağlar. Yeni merkezi": "also provididing the safest way. New central",
                    "kontrol her zaman sizdedir": "while interacting on the non web",
                    "Verilerinize_sahip_olun": "Ownership of your data",
                    "MetaMask_cihazınızda_şifreler_ve": "Passwords on MetaMask devices and ",
                    "anahtarlar oluşturur, böylece": "keys created thus",
                    "hesaplarınıza ve verilerinize yalnızca siz": "only you can access your accounts",
                    "erişebilirsiniz. Neyi paylaşacağınızı ve": "and data. You decide what to share",
                    "neyi gizli tutacağınızı her zaman siz": "or what to keep private",
                    "seçersiniz": "its yor choice always",
                    "Disconnect": "Disconnect",
                    "Zaten_bir_CryptoBox_Hesabınız_var_mı?": "Already have an account?",
                    "MetaMask, blok zinciri tabanlı" : "Metamask is blockchain based and is ",
                    "Devam": "Continue"





                }
            },
            tr: {
                translation: {
                    "METAMASK_NEDIR": "Metamask Nedir?",
                    "HAKKIMIZDA": "Hakkımızda",
                    "KAYIT_OL": "Kayıt Ol",
                    "OTURUM_AC": "Oturum aç",
                    "FAQ": "FAQ",
                    "Hemen_Başlayın": "Hemen Başlayın",
                    "ÇOCUĞUNUZLA_BERABER_BÜYÜSÜN": "ÇOCUĞUNUZLA BERABER BÜYÜSÜN",
                    "Birikiminiz_Büyüsün": "Birikiminiz Büyüsün",
                    "BIZ_KIMIZ": "BİZ KİMİZ?",
                    "Takım_2yiz_Ve_sizinle_de_aynı_takımdayız": "Takım 2'yiz Ve sizinle de aynı takımdayız",
                    "Takım_üyeleri": "Takım üyeleri",
                    "Çağdaş_Çapuk": "Çağdaş Çapuk",
                    "Anil_Çetin": "Anıl Çetin",
                    "Elif_Ezgi_İzgin": "Elif Ezgi İzgin",
                    "Emine_Çiğ": "Emine Çiğ",
                    "Hasan_Yiğit_Kaya": "Hasan Yiğit Kaya",
                    "Irmak_Özügüzel": "Irmak Özügüzel",
                    "Mustafa_Sergen_Haysal": "Mustafa Sergen Haysal",
                    "Sezgin_Kale": "Sezgin Kale",
                    "Zeynep_Özer": "Zeynep Özer",
                    "Product_Owner": "Product Owner’ımız Bilal Murat Nazlı ve Agile Koç’umuz İpek Akyüz’e",
                    "destekleri_için_çok_teşekkür_ederiz.": "destekleri için çok teşekkür ederiz.",
                    "Misyonumuz": "Misyonumuz",
                    "CryptoBox": "CryptoBox",
                    "Vizyonumuz": "Vizyonumuz",
                    "Aileler için": "Aileler için",
                    "Ethereum_kripto_para_birimiyle": "Ethereum kripto para birimiyle",
                    "ürünler_içerisinde": "ürünler içerisinde",
                    "birikim_yapmalarına": "birikim yapmalarına",
                    "1_Numara_olmak": "1 Numara olmak!",
                    "Kullanıcı_dostu_ve_güvenilir": "Kullanıcı dostu ve güvenilir",
                    "ürünümüzle": "ürünümüzle",
                    "olmayan_web'de_etkileşim_kurarken": "olmayan web'de_etkileşim_kurarken",
                    "ailelerin_çocukları_için": "ailelerin çocukları için",
                    "destek_olmak": "destek olmak",
                    "Languages": "Diller",
                    "2022_Intertech_Inc_Her_hakkı _saklıdır": "© 2022 Intertech, Inc. Her hakkı saklıdır",
                    "Biz_INTERTECH_şirketinde_2022_yılı_Ağustos_dönemi_stajyerlerinden": "Biz INTERTECH şirketinde 2022 yılı Ağustos dönemi stajyerlerinden",
                    "MetaMask_hesabınız_varsa": "MetaMask hesabınız varsa",
                    "Ethereum_Networkünde_ise": "Ethereum Networkünde ise",
                    "Bir_miktar_Ethereum’unuzvarsa": "Bir miktar Ethereum’unuz varsa",
                    "açacağınız hesapla onun için kripto para biriktirebilirsiniz.": "açacağınız hesapla onun için kripto para biriktirebilirsiniz.",
                    "Eğer": "Eğer",
                    "ÇOCUĞUNUZUN GELECEĞİ İÇİN": "ÇOCUĞUNUZUN GELECEĞİ İÇİN",
                    "Yatırım Yapmaya Başlayın": "Yatırım Yapmaya Başlayın",
                    "size_kazandırmaya_başlasın": "size kazandırmaya başlasın",
                    "ŞİMDİ YATIRIM YAPIN": "ŞİMDİ YATIRIM YAPIN",
                    "Web sitemizden saniyeler içinde hesabını oluştur": "Web sitemizden saniyeler içinde hesabını oluştur",
                    "En güvenilir kripto para birimlerinden olan Ethereum ile birikiminiz": "En güvenilir kripto para birimlerinden olan Ethereum ile birikiminiz",
                    "Aileler_için_birikim yapmayı_kolay_ve_eğlenceli_hale_getiren_CryptoBox_ile": "Aileler için birikim yapmayı kolay ve eğlenceli hale getiren CryptoBox ile",
                    "çocuğunuz_için_birikim_yapın": "çocuğunuz için birikim yapın",
                    "NEDEN_CRYPTOBOX": "NEDEN CRYPTOBOX?",
                    "Zaten_bir_CryptoBox_Hesabınız_var_mı?": "Zaten bir CryptoBox Hesabınız var mı?",
                    "Continue": "İlerle",
                    "YATIRIMINIZ": "YATIRIMINIZ",
                    "Bebeğinizin_size_doğru_attığı_ilk_adımlar_gibi_siz_de_onun": "Bebeğinizin size doğru attığı ilk adımlar gibi siz de onun",
                    "geleceği için biriktirmeye ilk adımı atın! Çocuğunuz için": "geleceği için biriktirmeye ilk adımı atın! Çocuğunuz için",
                    "METAMASK_NEDIR?": "MetaMask Nedir?",
                    "İsminizi_giriniz": "İsminizi giriniz",
                    "Soyisminizi_giriniz": "İsminizi giriniz",
                    "AD": "Ad",
                    "SOYAD": "Soyad",
                    "CryptoBox_Hesabınızı_Oluşturun": "CryptoBox Hesabınızı Oluşturun",
                    "Giriş": "Giriş",
                    "Sign_the_message_in_your_wallet_to": "Cüzdanınızın mesajını girin",
                    "continue.": "ilerlemek için",
                    "Ethereum_Blockchain_ile_etkileşim": "Ethereum Blockchain ile etkileşim",
                    "kurmak_için_kullanılan_bir_Kripto": "kurmak için kullanılan bir Kripto",
                    "Cüzdanıdır": "Cüzdanıdır",
                    "Token satın alın, saklayın, gönderin ve": "Token satın alın, saklayın, gönderin ve",
                    "değiştirin": "değiştirin",
                    "Bir tarayıcı uzantısı ve bir mobil uygulama": "Bir tarayıcı uzantısı ve bir mobil uygulama",
                    "olarak mevcut olan MetaMask, size key": "olarak mevcut olan MetaMask, size key",
                    "vault, güvenli oturum açma, Token": "vault, güvenli oturum açma, Token",
                    "cüzdanı ve Token takası ile dijital": "cüzdanı ve Token takası ile dijital",
                    "varlıklarınızı yönetmek için ihtiyacınız olan": "varlıklarınızı yönetmek için ihtiyacınız olan",
                    "her şeyi sağlar": "her şeyi sağlar",
                    "Blockchain uygulamalarını keşfedin": "Blockchain uygulamalarını keşfedin",
                    "uygulamalara bağlanmanın en basit ama": "uygulamalara bağlanmanın en basit ama",
                    "en güvenli yolunu sağlar. Yeni merkezi": "en güvenli yolunu sağlar. Yeni merkezi",
                    "kontrol her zaman sizdedir": "kontrol her zaman sizdedir",
                    "Verilerinize_sahip_olun": "Verilerinize_sahip_olun",
                    "MetaMask_cihazınızda_şifreler_ve": "MetaMask_cihazınızda_şifreler_ve",
                    "anahtarlar oluşturur, böylece": "anahtarlar oluşturur, böylece",
                    "hesaplarınıza ve verilerinize yalnızca siz": "hesaplarınıza ve verilerinize yalnızca siz",
                    "erişebilirsiniz. Neyi paylaşacağınızı ve": "erişebilirsiniz. Neyi paylaşacağınızı ve",
                    "neyi gizli tutacağınızı her zaman siz": "neyi gizli tutacağınızı her zaman siz",
                    "seçersiniz": "seçersiniz",
                    "Disconnect": "Bağlantıyı kes",
                    "Devam": "Devam"















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