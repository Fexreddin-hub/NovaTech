(function(){
  const translations = {
    AZ: {
      nav: ['Ana Səhifə','Avadanlıq','Geyim Seçici','Təhlükəsizlik','Səyahət Köməkçisi','Haqqımızda','Əlaqə'],
      heroTitle: 'Zirvələri fəth et, Təbiəti kəşf et',
      heroDesc: 'TripO ilə ən yüksək zirvələrə və dağlıq bölgələrə səyahət edin — macəra, təbiət və sakitlik bir arada.',
      startJourney: 'Səyahətə Başla',
      mapBtn: 'Xəritə',
      touristBtn: 'Mən turistəm',
      featuresTitle: 'Dağları Qiymətləndir',
      featuresDesc: 'Hər dağın altında ulduzlarla çətinlik dərəcəsini özünüz qiymətləndirin',
      destinationsTitle: 'Populyar Məkanlar',
      destinationsDesc: 'Azərbaycan və regionun məşhur dağları və təbiət məkanları',
      aboutTitle: 'Haqqımızda',
      aboutDesc: 'TripO 15 ildir dünyanın hər guşəsində lüks səyahət təcrübələri təqdim edir. Biz müştərilərimizə yalnız səyahət deyil, həyatları boyu yadda qalacaq xatirələr yaratmağı vəd edirik.',
      aboutDesc2: 'Komandamız səyahət mütəxəssislərindən, yerli bələdçilərdən və peşəkar tur operatorlarından ibarətdir. Hər bir səyahətimiz fərdi ehtiyac və istəklər nəzərə alınmaqla hazırlanır.',
      aboutContact: 'Bizimlə Əlaqə',
      contactTitle: 'Bizimlə Əlaqə',
      stats: ['Ölkə','Şəhər','Partner','Müştəri'],
      footerContact1: '+994 12 345 67 89',
      footerContact2: 'info@elitetravel.az',
      theme: 'Gecə rejimi',
      rating: 'Qiymətləndir',
      rate: 'Dəyərləndir',
      rateBtn: 'Dəyərləndir və Şərh Yaz',
      sendBtn: 'Göndər',
      contactForm: 'Bizimlə əlaqə saxlayın',
      name: 'Ad',
      email: 'E-poçt',
      message: 'Mesaj',
      subject: 'Mövzu',
      destination1: 'Elbrus',
      destination2: 'Bazardüzü',
      destination3: 'Tufandağ',
      destination4: 'Babadağ',
      destination5: 'Lökbatan Vulkanı',
      destination6: 'Qobustan',
      destPlace: 'Dağlıq məkan',
      destVisitors: 'İlin ziyarətçisi',
      destLocation: 'Yerləşmə',
      mapLocationTitle: 'Dağ Məkanları Xəritəsi',
      mountainPeaks: 'Dağ Zirvələri',
      natureSpots: 'Təbiət Məkanları',
      gearDescription: 'Dağcılıq üçün lazım olan avadanlıqlar',
      outfitDescription: 'Dağcılıq geyimini seçin',
      safetyDescription: 'Təhlükəsizlik qaydaları',
      recommendationsTitle: 'Tövsiyələr',
      // Travel helper (local page)
      travelHelperTitle: 'Səyahət Köməkçisi',
      travelHelperDesc: 'Kateqoriyanı seç və lazımi məlumatları əldə et',
      catGear: 'Avadanlıq',
      catClothes: 'Geyim Seçici',
      catSafe: 'Təhlükəsizlik',
      gearMore: 'Daha çox avadanlıq',
      gearItemsTitles: ['Çadır','Fərdi Poçt çantası','Fonar','Qida seti','Sırt çantası','Termos'],
      gearItemsDesc: ['Yüngül, 2 nəfərlik','Suya davamlı kisə','Yüksək lumen, uzun batareya','Yüngül, təcili yeməklər','Ergonomik 40L','İstiliyi saxlayan'],
      clothesOptions: ['Yay geyimi','Qış geyimi','Dağ yürüşü geyimi'],
      clothesItems: ['Yüngül şapka','Yürüş Botları','Əlcəklər','Yağışlıq'],
      clothesItemsDesc: ['Günəşdən qoruma üçün yüngül şapka','Suya davamlı və möhkəm yürüş botları','İstiliyi təmin edən əlcəklər','Sudan qoruyan yağışlıq'],
      tagLight: 'Yüngül',
      tagWarm: 'İstilik',
      safetyCards: ['Su ehtiyatı','SOS siqnalları','Yol nişanları','Dağ təhlükələri','Hava xəbərdarlığı'],
      safetySubtexts: ['Mütləq 2L+ / adam','Siqnal cihazları və tətbiqlər','Nişanların oxunması','Heyvanlar, sürüşmə riski','Rüzgar və yağış proqnozu'],
      safetyDetails: {
        water: 'Hər bir şəxs üçün ən az 2 litr su; əlavə təmizləmə tabletləri tövsiyə olunur.',
        sos: 'Səs və işıq siqnal cihazları, paylaşılmış marşrut və əlaqə nöqtələri.',
        signs: 'İstiqamətlərə riayət edin, işarələri foto ilə qeyd edin.',
        hazards: 'Sürüşmə və heyvan riski: topografiyanı nəzərdən keçirin.',
        weather: 'Yüksək rüzgar və yağış üçün alternativ planlar hazırlayın.'
      },
      currentLocation: 'Cari konum',
      selectDestination: 'Məkan seçin',
      back: 'Geri',
      next: 'Sonrakı',
      close: 'Bağla',
      search: 'Axtarış',
      filter: 'Filtrlə',
      sort: 'Sırala',
      // Gear page translations
      gearPageTitle: 'Dağ Avadanlıqları',
      gearPageDesc: 'Hər dağcılıq macərası üçün lazım olan premium ekipman',
      campingTitle: 'Düşərgə Avadanlıqları',
      campingDesc: 'Rahat və etibarlı kamp ekipmenti',
      campingItems: ['Çadır', 'Xərəlit', 'Lampası'],
      hikingTitle: 'Dağ Çəkmələri',
      hikingDesc: 'Dağlıq ərazidə peşə etmək üçün',
      hikingItems: ['Palka', 'Halat', 'Karabin'],
      backpackTitle: 'Sırt Çantaları',
      backpackDesc: 'Uzun səyahətlər üçün dərin tutum',
      backpackItems: ['50-60L', '30-40L', '20-30L'],
      sleepingTitle: 'Yatış Tulumları',
      sleepingDesc: 'Hava şəraitinə görə ısı sinfi',
      sleepingItems: ['Yaza', 'Kışa', '3 Fəsil'],
      gearFeatures: ['Premium Keyfiyyət', 'Uzun Ömürlü Material', 'Ağırlığa Optimum', 'Hava Müqavəməti'],
      // Outfit page translations
      outfitPageTitle: 'Geyim Tövsiyəsi',
      weatherSelect: 'Hava Vəziyyətini Seçin',
      weatherWarm: 'Isti',
      weatherCold: 'Soyuq',
      weatherRain: 'Yağış',
      weatherMountain: 'Dağ',
      outfitTop: 'Üst Paltarı',
      outfitTopDesc: ['Keyfiyyətli Parça', 'Roto Kontrolü', 'Hava Nüfuzuçusu'],
      outfitOuter: 'Xarici Paltar',
      outfitOuterDesc: ['Su Müqavəmli', 'Lehim Dikilişlər', 'Ağır Qoruma'],
      outfitBottom: 'Alt Paltarı',
      outfitBottomDesc: ['Rahat Hərəkət', 'Dura Parça', 'Tərə Cibləri'],
      outfitShoes: 'Ayakkabılar',
      outfitShoesDesc: ['Spor Ayakkabı', 'Qayçı Diş', 'Zərbəyə Damgalı'],
      outfitTips: 'Əsas Tövsiyələr',
      outfitTipLayers: 'Layərli Paltarlanma',
      outfitTipMoisture: 'Nəmişə Qoruma',
      outfitTipWind: 'Rüzğardan Qoruma',
      outfitTipUV: 'UV Qoruma',
      // Safety page translations
      safetyPageTitle: 'Səyahət Təhlükəsizliyi',
      safetyPageDesc: 'Dağlıq ərazidə təhlükəsiz və rahat səyahətiniz üçün lazım olan bütün məlumatlar',
      safetyIntroTitle: 'Təhlükəsizliyi Ciddi Alın',
      safetyIntroText: 'Hər dağcılıq macərası görmə qabaqda zəruri planlama tələb edir. Düzgün hazırlıq və təhlükəsizlik qaydalarına riayət etmə, sizin və başqalarının xoşbaxtlığını təmin etmənin ana açarıdır.',
      safetyMap: 'Xəritə & Marşrut',
      safetyMapDesc: 'Marşrutunuzu əvvəlcədən hazırlayın. Xəritəni yaxşı öyrənin. Hava proqnozunu yoxlayın. Digər səyahətçilərə məlumat verin.',
      safetyFirst: 'Fərst Yardım',
      safetyFirstDesc: 'Fərst yardım çantası daşıyın. Əsas tikiş bacarıqlarını bilin. Ətrəfiniz insanlara fərst yardım barədə məlumat verin.',
      safetyComm: 'Rabitə Əlavatı',
      safetyCommDesc: 'Mobil telefon şarjlı saxlayın. Offline xəritə yükləyin. Acsəs nömrələrini bələ götürün. İtki zamanında istifadə etməyin.',
      safetySteps: 'Hazırlıq Addımları',
      safetyStep1: 'Fiziki forma yoxlayın',
      safetyStep2: 'Avadanlıqları sınaqdan keçirin',
      safetyStep3: 'Hava proqnozunu izləyin',
      safetyStep4: 'İtkilərinizi planlaşdırın',
      safetyStep5: 'Bələdçi ilə müəyyənləşin',
      safetyStep6: 'Sığorta alın',
      safetyEmergency: 'Təcili Zəng Nömrələri',
      emergencyAZ: 'Azərbaycanda',
      emergencyNumbers: 'Fövqəladə: 112 | Polis: 102 | Həkim: 103',
      emergencyRescue: 'Nəcaat Xidməti',
      emergencyRescueNum: 'Dağ xidməti: +994 12 4921212',
      emergencyHealth: 'Sağlamlıq Xidməti',
      emergencyHealthNum: 'Həkim: +994 12 4924566',
      // About page translations
      aboutPageTitle: 'Haqqımızda',
      aboutPageSubtitle: 'TripO səyahət və macəraya olan həvəsi bölüşmək üçün yaradılıb',
      bizKimik: 'Biz Kimik',
      bizKimikText1: 'TripO, dağ və tərəvət aşkınları üçün ən yaxşı səyahət təcrübəsini yaratmaq üçün işləyən bir komandadır. Bizim missiyası hər bir səyahətçiyə güvən, rahat və ya da axşam səyahəti verməkdir.',
      bizKimikText2: 'Üzərində 10 ildən artıq təcrübə ilə, biz minlərlə səyahətçiyə kömək etmişik öz arzularını gerçəkləşdirmək. Dağ təhlükəsizliyi, keyfiyyətli avadanlıq və böyük komanda - bunlar bizim əsas dəyərlərimizdir.',
      bizKimikText3: 'Hər bir səyahətçi bizim üçün vahid və xüsusi. Onlar dəqiq şəxsi tövsiyələr və peşəkar dəstək əldə edirlər. Siz bir ən böyük macəraya hazırlıq edilən zaman, biz sizin məsul tərəfdəşiniz olmağa tətavvəz edirik.',
      missiyamiz: 'Missiyamız',
      missiyamizSubtitle: 'Şəxsi dəyərlərimiz və hədəflərimiz',
      tehlukesesSeyahat: 'Təhlükəsiz Səyahət',
      tehlukesesSeyahatDesc: 'Hər bir səyahətçinin təhlükəsizliyi bizim prioritetimizdir. Biz ən yüksək standartlarda təhlükəsizlik protokolları təmin edirik.',
      yuksekKeyfiyyet: 'Yüksək Keyfiyyət',
      yuksekKeyffiyyetDesc: 'Premium avadanlıq və xidmət hər zaman bizim təlabatıdır. Biz yalnız ən yaxşısını təyin edirik.',
      tecrubeligKomanda: 'Təcrübəli Komanda',
      tecrubeligKomandaDesc: 'Dağ rehbərləri, təhlükəsizlik ekspertləri və müşdəriyə xidmət spesialistləri sizə kömək etmək üçün hazırıq.',
      niyeBiziSecirler: 'Niyə Bizi Seçirlər',
      niyeBiziSecirlerSubtitle: 'TripO-ı digərlərdən fərqli edən xüsusiyyətlər',
      ferdiPlanlastirma: 'Fərdi Planlaşdırma',
      ferdiPlanlastirmaDesc: 'Hər səyahət sizin ehtiyaclarınıza və istəklərinizə uyğun öz-özünə planlaşdırılır. Bir şablonun qapısı olmaz.',
      genisTecribe: 'Geniş Təcrübə',
      genisTecribeDesc: 'Kaukaz dağları ilə Alp dağlarından tutaraq, biz dünya boyu birbirinin ardısıra səyahətlər təşkil edirik.',
      destekKirk: '24/7 Dəstək',
      destekKirkDesc: 'Səyahət zamanı hər zaman biz başınızın fövqündə. Həqiqi məsələlər üçün dərhal yardım sağlanır.',
      suratliProsses: 'Sürətli Prosses',
      suratliProssesDesc: 'Mobil tətbiq ilə planlaşdırma sadə və tez. Boş vaxtınızı itirmədən, səyahətə başlayın.',
      bizimpleSeyahat: 'Bizimlə Səyahət Edin',
      bizimpleSeyahatSubtitle: 'TripO şirkətinin başarı statistikası',
      xoshbexSeyahatci: 'Xoşbəxt Səyahətçi',
      tamamlanmisSeyahatler: 'Tamamlanmış Səyahətlər',
      dagTepeIeri: 'Dağ Təpələri',
      memnunMusteriler: 'Məmnun Müştərilər',
      auth: {
        signIn: 'Giriş',
        signUp: 'Qeydiyyat',
        email: 'E-poçt',
        password: 'Şifrə',
        show: 'Göstər',
        hide: 'Gizlət',
        forgot: 'Şifrəni unutdum?',
        signinBtn: 'GİRİŞ ET',
        signupBtn: 'QEYDIYYAT',
        continueGoogle: 'Google ilə davam et',
        continueFacebook: 'Facebook ilə davam et',
        name: 'Ad, Soyad',
        pageTitle: 'Giriş / Qeydiyyat'
      }
    },
    EN: {
      nav: ['Home','Gear','Outfit Selector','Safety','Travel Helper','About Us','Contact'],
      heroTitle: 'Conquer the Peaks, Discover Nature',
      heroDesc: 'Travel to the highest peaks and mountain regions with TripO — adventure, nature, and tranquility together.',
      startJourney: 'Start Your Journey',
      mapBtn: 'Map',
      touristBtn: 'I am a tourist',
      featuresTitle: 'Rate The Mountains',
      featuresDesc: 'Rate each mountain\'s difficulty using stars',
      destinationsTitle: 'Popular Destinations',
      destinationsDesc: 'Famous mountains and nature spots in Azerbaijan and the region',
      aboutTitle: 'About Us',
      aboutDesc: 'TripO has provided premium travel experiences for 15 years. We deliver memorable journeys tailored to each traveler.',
      aboutDesc2: 'Our team consists of travel experts, local guides, and professional tour operators. Each trip is tailored to individual needs and wishes.',
      aboutContact: 'Contact Us',
      contactTitle: 'Contact Us',
      stats: ['Countries','Cities','Partners','Customers'],
      footerContact1: '+994 12 345 67 89',
      footerContact2: 'info@elitetravel.az',
      theme: 'Dark Mode',
      rating: 'Rating',
      rate: 'Rate',
      rateBtn: 'Rate and Comment',
      sendBtn: 'Send',
      contactForm: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      subject: 'Subject',
      destination1: 'Mount Elbrus',
      destination2: 'Bazardüzü',
      destination3: 'Tufandağ',
      destination4: 'Babadağ',
      destination5: 'Lökbatan Volcano',
      destination6: 'Gobustan',
      destPlace: 'Mountain location',
      destVisitors: 'Annual visitors',
      destLocation: 'Location',
      mapLocationTitle: 'Mountain Locations Map',
      mountainPeaks: 'Mountain Peaks',
      natureSpots: 'Nature Spots',
      gearDescription: 'Essential climbing equipment',
      outfitDescription: 'Select climbing outfit',
      safetyDescription: 'Safety guidelines',
      recommendationsTitle: 'Recommendations',
      // Travel helper (local page)
      travelHelperTitle: 'Travel Helper',
      travelHelperDesc: 'Choose a category and get the information you need',
      catGear: 'Gear',
      catClothes: 'Outfit Selector',
      catSafe: 'Safety',
      gearMore: 'More gear',
      gearItemsTitles: ['Tent','Pack','Headlamp','Food Kit','Backpack','Thermos'],
      gearItemsDesc: ['Light, 2-person','Waterproof pack','High-lumen, long battery','Light emergency meals','Ergonomic 40L','Keeps liquids hot/cold'],
      clothesOptions: ['Summer outfit','Winter outfit','Hiking outfit'],
      clothesItems: ['Light cap','Hiking Boots','Gloves','Raincoat'],
      clothesItemsDesc: ['Protects from sun exposure','Waterproof and sturdy hiking boots','Thermal gloves for warmth','Lightweight rain protection'],
      tagLight: 'Light',
      tagWarm: 'Warm',
      safetyCards: ['Water supply','SOS signals','Road signs','Mountain hazards','Weather alerts'],
      safetySubtexts: ['At least 2L / person','Signaling devices & apps','Read and follow signs','Wildlife & slip risks','Wind & rain forecasts'],
      safetyDetails: {
        water: 'At least 2L of water per person; consider purification tablets.',
        sos: 'Sound and light signaling devices, shared route and contact points.',
        signs: 'Follow directions, photograph any important signs.',
        hazards: 'Beware of slips and wildlife; check topography.',
        weather: 'Prepare alternative plans for high winds and heavy rain.'
      },
      currentLocation: 'Current location',
      selectDestination: 'Select destination',
      back: 'Back',
      next: 'Next',
      close: 'Close',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      // Gear page translations
      gearPageTitle: 'Mountain Gear',
      gearPageDesc: 'Premium equipment for every mountain adventure',
      campingTitle: 'Camping Equipment',
      campingDesc: 'Comfortable and reliable camping gear',
      campingItems: ['Tent', 'Sleeping Mat', 'Headlamp'],
      hikingTitle: 'Mountain Boots',
      hikingDesc: 'For hiking in mountain terrain',
      hikingItems: ['Ice Axe', 'Rope', 'Carabiner'],
      backpackTitle: 'Backpacks',
      backpackDesc: 'Deep capacity for long journeys',
      backpackItems: ['50-60L', '30-40L', '20-30L'],
      sleepingTitle: 'Sleeping Bags',
      sleepingDesc: 'Heat rating by season',
      sleepingItems: ['Summer', 'Winter', '3-Season'],
      gearFeatures: ['Premium Quality', 'Durable Materials', 'Weight Optimized', 'Weather Resistant'],
      // Outfit page translations
      outfitPageTitle: 'Outfit Suggestion',
      weatherSelect: 'Select Weather Condition',
      weatherWarm: 'Warm',
      weatherCold: 'Cold',
      weatherRain: 'Rainy',
      weatherMountain: 'Mountain',
      outfitTop: 'Top Layer',
      outfitTopDesc: ['Quality Fabric', 'Moisture Control', 'Breathable'],
      outfitOuter: 'Outer Jacket',
      outfitOuterDesc: ['Water Resistant', 'Sealed Seams', 'Heavy Protection'],
      outfitBottom: 'Bottom Layer',
      outfitBottomDesc: ['Comfortable Movement', 'Durable Fabric', 'Side Pockets'],
      outfitShoes: 'Footwear',
      outfitShoesDesc: ['Sport Shoes', 'Treaded Sole', 'Impact Cushioned'],
      outfitTips: 'Key Recommendations',
      outfitTipLayers: 'Layered Clothing',
      outfitTipMoisture: 'Moisture Protection',
      outfitTipWind: 'Wind Protection',
      outfitTipUV: 'UV Protection',
      // Safety page translations
      safetyPageTitle: 'Travel Safety',
      safetyPageDesc: 'All information you need for safe and comfortable mountain travel',
      safetyIntroTitle: 'Take Safety Seriously',
      safetyIntroText: 'Every mountain adventure requires careful planning. Proper preparation and following safety guidelines is key to ensuring happiness for you and others.',
      safetyMap: 'Map & Route',
      safetyMapDesc: 'Plan your route in advance. Know your map well. Check weather forecast. Inform other travelers.',
      safetyFirst: 'First Aid',
      safetyFirstDesc: 'Carry a first aid kit. Know basic treatment skills. Brief others on first aid.',
      safetyComm: 'Communication Equipment',
      safetyCommDesc: 'Keep mobile charged. Download offline maps. Note emergency numbers. Don\'t use during emergency.',
      safetySteps: 'Preparation Steps',
      safetyStep1: 'Check physical fitness',
      safetyStep2: 'Test your equipment',
      safetyStep3: 'Monitor weather forecast',
      safetyStep4: 'Plan your route',
      safetyStep5: 'Arrange guide',
      safetyStep6: 'Get insurance',
      safetyEmergency: 'Emergency Numbers',
      emergencyAZ: 'In Azerbaijan',
      emergencyNumbers: 'Emergency: 112 | Police: 102 | Medical: 103',
      emergencyRescue: 'Rescue Service',
      emergencyRescueNum: 'Mountain service: +994 12 4921212',
      emergencyHealth: 'Health Service',
      emergencyHealthNum: 'Doctor: +994 12 4924566',
      // About page translations
      aboutPageTitle: 'About Us',
      aboutPageSubtitle: 'TripO was created to share the passion for travel and adventure',
      bizKimik: 'Who We Are',
      bizKimikText1: 'TripO is a team working to create the best travel experience for mountain and nature lovers. Our mission is to provide every traveler with trust, comfort, and unforgettable journeys.',
      bizKimikText2: 'With over 10 years of experience, we have helped thousands of travelers achieve their dreams. Mountain safety, quality equipment, and a great team are our core values.',
      bizKimikText3: 'Every traveler is unique and special to us. They receive personalized recommendations and professional support. When preparing for your greatest adventure, we are ready to be your responsible partner.',
      missiyamiz: 'Our Mission',
      missiyamizSubtitle: 'Our personal values and objectives',
      tehlukesesSeyahat: 'Safe Travel',
      tehlukesesSeyahatDesc: 'Every traveler\'s safety is our priority. We provide the highest standard safety protocols.',
      yuksekKeyfiyyet: 'Premium Quality',
      yuksekKeyffiyyetDesc: 'Premium equipment and service are always our requirement. We choose only the best.',
      tecrubeligKomanda: 'Experienced Team',
      tecrubeligKomandaDesc: 'Mountain guides, safety experts, and customer service specialists are ready to assist you.',
      niyeBiziSecirler: 'Why Choose Us',
      niyeBiziSecirlerSubtitle: 'Features that make TripO different from others',
      ferdiPlanlastirma: 'Personal Planning',
      ferdiPlanlastirmaDesc: 'Each trip is planned according to your needs and wishes. There is no template that fits everyone.',
      genisTecribe: 'Extensive Experience',
      genisTecribeDesc: 'From the Caucasus to the Alps, we organize travels all around the world.',
      destekKirk: '24/7 Support',
      destekKirkDesc: 'During your trip, we are always by your side. For real issues, help is provided immediately.',
      suratliProsses: 'Fast Process',
      suratliProssesDesc: 'With our mobile app, planning is simple and quick. Start your journey without wasting time.',
      bizimpleSeyahat: 'Travel With Us',
      bizimpleSeyahatSubtitle: 'TripO company success statistics',
      xoshbexSeyahatci: 'Happy Travelers',
      tamamlanmisSeyahatler: 'Completed Journeys',
      dagTepeIeri: 'Mountain Peaks',
      memnunMusteriler: 'Satisfied Customers',
      auth: {
        signIn: 'Sign In',
        signUp: 'Sign Up',
        email: 'Email',
        password: 'Password',
        show: 'Show',
        hide: 'Hide',
        forgot: 'Forgot password?',
        signinBtn: 'SIGN IN',
        signupBtn: 'REGISTER',
        continueGoogle: 'Continue with Google',
        continueFacebook: 'Continue with Facebook',
        name: 'Full Name',
        pageTitle: 'Sign In / Sign Up'
      }
    },
    TR: {
      nav: ['Ana Sayfa','Ekipman','Kıyafet Seçici','Güvenlik','Seyahat Yardımcısı','Hakkımızda','İletişim'],
      heroTitle: 'Zirveleri Fethedin, Doğayı Keşfedin',
      heroDesc: 'TripO ile en yüksek zirvelere ve dağlık bölgelere seyahat edin — macera, doğa ve huzur bir arada.',
      startJourney: 'Seyahatinize Başlayın',
      mapBtn: 'Harita',
      touristBtn: 'Ben turistim',
      featuresTitle: 'Dağları Değerlendirin',
      featuresDesc: 'Her dağın zorluk derecesini yıldızlarla değerlendirin',
      destinationsTitle: 'Popüler Yerler',
      destinationsDesc: 'Azerbaycan ve bölgedeki ünlü dağlar ve doğal alanlar',
      aboutTitle: 'Hakkımızda',
      aboutDesc: 'TripO 15 yıldır dünya çapında kaliteli seyahat deneyimleri sunmaktadır. Müşterilerimize yalnızca bir gezi değil, hayat boyu sürecek anılar vaat ediyoruz.',
      aboutDesc2: 'Ekibimiz seyahat uzmanlarından, yerel rehberlerden ve profesyonel tur operatörlerinden oluşur. Her seyahat, bireysel ihtiyaç ve istekler göz önünde bulundurularak hazırlanır.',
      aboutContact: 'İletişime Geçin',
      contactTitle: 'İletişime Geçin',
      stats: ['Ülke','Şehir','Ortak','Müşteri'],
      footerContact1: '+994 12 345 67 89',
      footerContact2: 'info@elitetravel.az',
      theme: 'Gece Modu',
      rating: 'Puanlama',
      rate: 'Değerlendir',
      rateBtn: 'Değerlendir ve Yorum Yap',
      sendBtn: 'Gönder',
      contactForm: 'Bizimle İletişime Geçin',
      name: 'Ad',
      email: 'E-posta',
      message: 'Mesaj',
      subject: 'Konu',
      destination1: 'Elbrus Dağı',
      destination2: 'Bazardüzü',
      destination3: 'Tufandağ',
      destination4: 'Babadağ',
      destination5: 'Lökbatan Volkanı',
      destination6: 'Gobustan',
      destPlace: 'Dağ konumu',
      destVisitors: 'Yıllık ziyaretçi',
      destLocation: 'Konum',
      mapLocationTitle: 'Dağ Konumları Haritası',
      mountainPeaks: 'Dağ Zirveleri',
      natureSpots: 'Doğa Alanları',
      gearDescription: 'Tırmandırma için gerekli ekipman',
      outfitDescription: 'Tırmanış kıyafeti seçin',
      safetyDescription: 'Güvenlik kuralları',
      recommendationsTitle: 'Öneriler',
      // Travel helper (local page)
      travelHelperTitle: 'Seyahat Yardımcısı',
      travelHelperDesc: 'Kategori seçin ve gerekli bilgileri alın',
      catGear: 'Ekipman',
      catClothes: 'Kıyafet Seçici',
      catSafe: 'Güvenlik',
      gearMore: 'Daha fazla ekipman',
      gearItemsTitles: ['Çadır','Sırt Çantası','Kafa Lambası','Yiyecek Seti','Sırt Çantası','Termos'],
      gearItemsDesc: ['Hafif, 2 kişilik','Su geçirmez çanta','Yüksek lümen, uzun pil ömrü','Hafif acil yemekler','Ergonomik 40L','Sıcak/soğuk tutar'],
      clothesOptions: ['Yaz kıyafeti','Kış kıyafeti','Yürüyüş kıyafeti'],
      clothesItems: ['Hafif şapka','Yürüyüş Botları','Eldivenler','Yağmurluk'],
      clothesItemsDesc: ['Güneşten koruma için hafif şapka','Suya dayanıklı ve sağlam yürüyüş botları','Isı sağlayan eldivenler','Hafif yağmur koruması'],
      tagLight: 'Hafif',
      tagWarm: 'Isı',
      safetyCards: ['Su kaynağı','SOS sinyalleri','Yol işaretleri','Dağ tehlikeleri','Hava uyarıları'],
      safetySubtexts: ['Kişi başı en az 2L','Sinyal cihazları & uygulamalar','İşaretleri okuyun ve takip edin','Vahşi yaşam & kayma riski','Rüzgar & yağış tahminleri'],
      safetyDetails: {
        water: 'Kişi başı en az 2 litre su; arıtma tabletleri önerilir.',
        sos: 'Ses ve ışık sinyal cihazları, paylaşılan rota ve iletişim noktaları.',
        signs: 'Yönlere uyun, önemli işaretlerin fotoğrafını çekin.',
        hazards: 'Kayma ve vahşi hayvan riskine dikkat edin; topografyayı kontrol edin.',
        weather: 'Şiddetli rüzgar ve yağış için alternatif planlar hazırlayın.'
      },
      currentLocation: 'Mevcut konum',
      selectDestination: 'Destinasyon seçin',
      back: 'Geri',
      next: 'İleri',
      close: 'Kapat',
      search: 'Ara',
      filter: 'Filtrele',
      sort: 'Sırala',
      // Gear page translations
      gearPageTitle: 'Dağ Ekipmanı',
      gearPageDesc: 'Her dağ macerası için premium ekipman',
      campingTitle: 'Kamp Ekipmanı',
      campingDesc: 'Rahat ve güvenilir kamp ekipmanı',
      campingItems: ['Çadır', 'Uyku Matı', 'Far'],
      hikingTitle: 'Dağcılık Botları',
      hikingDesc: 'Dağ arazisinde tırmanış için',
      hikingItems: ['Buz Baltası', 'İp', 'Karabiner'],
      backpackTitle: 'Sırt Çantaları',
      backpackDesc: 'Uzun yolculuklar için derin kapasite',
      backpackItems: ['50-60L', '30-40L', '20-30L'],
      sleepingTitle: 'Uyku Tulumları',
      sleepingDesc: 'Mevsime göre ısı değerlendirmesi',
      sleepingItems: ['Yaz', 'Kış', '3-Mevsim'],
      gearFeatures: ['Premium Kalite', 'Dayanıklı Malzeme', 'Ağırlık Optimize', 'Hava Durumuna Karşı Dirençli'],
      // Outfit page translations
      outfitPageTitle: 'Kıyafet Önerisi',
      weatherSelect: 'Hava Durumunu Seçin',
      weatherWarm: 'Sıcak',
      weatherCold: 'Soğuk',
      weatherRain: 'Yağmurlu',
      weatherMountain: 'Dağ',
      outfitTop: 'Üst Katman',
      outfitTopDesc: ['Kaliteli Kumaş', 'Nem Kontrolü', 'Nefes Alabilir'],
      outfitOuter: 'Dış Ceket',
      outfitOuterDesc: ['Su Geçirmez', 'Yapıştırmalı Dikişler', 'Ağır Koruma'],
      outfitBottom: 'Alt Katman',
      outfitBottomDesc: ['Rahat Hareket', 'Dayanıklı Kumaş', 'Yan Cepli'],
      outfitShoes: 'Ayakkabı',
      outfitShoesDesc: ['Spor Ayakkabı', 'Desenli Taban', 'Çarpışma Yastığı'],
      outfitTips: 'Temel Öneriler',
      outfitTipLayers: 'Katmanlı Giyim',
      outfitTipMoisture: 'Nem Koruması',
      outfitTipWind: 'Rüzgar Koruması',
      outfitTipUV: 'UV Koruması',
      // Safety page translations
      safetyPageTitle: 'Seyahat Güvenliği',
      safetyPageDesc: 'Güvenli ve konforlu dağ seyahati için ihtiyaç duyduğunuz tüm bilgiler',
      safetyIntroTitle: 'Güvenliği Ciddiye Alın',
      safetyIntroText: 'Her dağ macerası dikkatli planlama gerektirir. Uygun hazırlık ve güvenlik yönetmeliklerini takip etmek, siz ve diğerleri için mutluluğu sağlamada anahtardir.',
      safetyMap: 'Harita & Rota',
      safetyMapDesc: 'Rotanızı önceden planlayın. Haritanızı iyi bilin. Hava tahmini kontrol edin. Diğer seyahatlere bilgi verin.',
      safetyFirst: 'İlk Yardım',
      safetyFirstDesc: 'İlk yardım seti taşıyın. Temel tedavi becerilerini bilin. Diğerlerine ilk yardım konusunda bilgi verin.',
      safetyComm: 'İletişim Ekipmanı',
      safetyCommDesc: 'Cep telefonunuzu şarj tutun. Çevrimdışı haritaları indirin. Acil numaraları not edin. Acil durumlarda kullanmayın.',
      safetySteps: 'Hazırlık Adımları',
      safetyStep1: 'Fiziksel kondisyonu kontrol edin',
      safetyStep2: 'Ekipmanınızı test edin',
      safetyStep3: 'Hava durumu tahmini izleyin',
      safetyStep4: 'Rotanızı planlayın',
      safetyStep5: 'Rehber düzenleyin',
      safetyStep6: 'Sigorta alın',
      safetyEmergency: 'Acil Numaralar',
      emergencyAZ: 'Azerbaycanda',
      emergencyNumbers: 'Acil: 112 | Polis: 102 | Tıbbi: 103',
      emergencyRescue: 'Kurtarma Servisi',
      emergencyRescueNum: 'Dağ servisi: +994 12 4921212',
      emergencyHealth: 'Sağlık Servisi',
      emergencyHealthNum: 'Doktor: +994 12 4924566',
      // About page translations
      aboutPageTitle: 'Hakkımızda',
      aboutPageSubtitle: 'TripO seyahat ve maceraya olan tutkunuzu paylaşmak için oluşturuldu',
      bizKimik: 'Biz Kimiz',
      bizKimikText1: 'TripO, dağ ve doğa tutkunları için en iyi seyahat deneyimini yaratmak için çalışan bir takımdır. Misyonumuz her gezgine güven, rahatlık ve unutulmaz yolculuklar sağlamaktır.',
      bizKimikText2: '10 yıldan fazla deneyimle, binlerce gezginin hayallerini gerçekleştirmesine yardımcı olduk. Dağ güvenliği, kaliteli ekipman ve harika bir takım - bunlar bizim temel değerlerimizdir.',
      bizKimikText3: 'Her gezgin bizim için benzersiz ve özeldir. Kişiselleştirilmiş öneriler ve profesyonel destek alırlar. En büyük maceraya hazırlandığınızda, biz sizin sorumlu ortağınız olmaya hazırız.',
      missiyamiz: 'Misyonumuz',
      missiyamizSubtitle: 'Kişisel değerlerimiz ve hedeflerimiz',
      tehlukesesSeyahat: 'Güvenli Seyahat',
      tehlukesesSeyahatDesc: 'Her gezginin güvenliği bizim önceliğimizdir. En yüksek standart güvenlik protokollerini sağlarız.',
      yuksekKeyfiyyet: 'Premium Kalite',
      yuksekKeyffiyyetDesc: 'Premium ekipman ve hizmet her zaman bizim gereksinimimizdir. Sadece en iyisini seçeriz.',
      tecrubeligKomanda: 'Deneyimli Ekip',
      tecrubeligKomandaDesc: 'Dağ rehberleri, güvenlik uzmanları ve müşteri hizmetleri uzmanları size yardımcı olmaya hazırlar.',
      niyeBiziSecirler: 'Neden Bizi Seçin',
      niyeBiziSecirlerSubtitle: 'TripO\'ı diğerlerinden farklı kılan özellikler',
      ferdiPlanlastirma: 'Kişisel Planlama',
      ferdiPlanlastirmaDesc: 'Her seyahat ihtiyaçlarınıza ve isteklerinize göre planlanır. Herkese uyan tek bir şablon yoktur.',
      genisTecribe: 'Geniş Deneyim',
      genisTecribeDesc: 'Kafkasya Dağları\'ndan Alpler\'e, dünyanın her yerinde seyahatler düzenleriz.',
      destekKirk: '24/7 Destek',
      destekKirkDesc: 'Seyahat sırasında her zaman yanınızdayız. Gerçek sorunlar için hemen yardım sağlanır.',
      suratliProsses: 'Hızlı İşlem',
      suratliProssesDesc: 'Mobil uygulamamızla planlama basit ve hızlıdır. Zamanınızı boşa harcamadan seyahatinize başlayın.',
      bizimpleSeyahat: 'Bizimle Seyahat Edin',
      bizimpleSeyahatSubtitle: 'TripO şirketi başarı istatistikleri',
      xoshbexSeyahatci: 'Mutlu Gezginler',
      tamamlanmisSeyahatler: 'Tamamlanan Yolculuklar',
      dagTepeIeri: 'Dağ Zirveleri',
      memnunMusteriler: 'Memnun Müşteriler',
      auth: {
        signIn: 'Giriş Yap',
        signUp: 'Kayıt Ol',
        email: 'E-posta',
        password: 'Parola',
        show: 'Göster',
        hide: 'Gizle',
        forgot: 'Parolayı mı unuttunuz?',
        signinBtn: 'GİRİŞ YAP',
        signupBtn: 'KAYIT OL',
        continueGoogle: 'Google ile devam et',
        continueFacebook: 'Facebook ile devam et',
        name: 'Ad Soyad',
        pageTitle: 'Giriş / Kayıt'
      }
    }
  };

  function safeText(sel, text){ try{ const el = document.querySelector(sel); if(el){ if(el.tagName.toLowerCase()==='input' || el.tagName.toLowerCase()==='textarea') el.placeholder = text; else el.innerHTML = text; } } catch(e){} }
  function safeAll(sel, arr){ try{ const nodes = Array.from(document.querySelectorAll(sel)); nodes.forEach((n,i)=>{ if(arr[i]!==undefined) n.innerHTML = arr[i]; }); } catch(e){} }

  function setLang(lang){ if(!translations[lang]) lang='AZ'; localStorage.setItem('siteLang', lang); document.documentElement.lang = lang.toLowerCase(); const t = translations[lang];
    // NAV menu
    safeAll('nav ul li a', t.nav);
    safeAll('nav a', t.nav);
    
    // Header small buttons (theme and start)
    document.querySelectorAll('[data-theme-toggle]').forEach(b=>{ if(b && b.title) b.title = t.theme; });
    document.querySelectorAll('.start-journey-btn').forEach(b=>{ if(!b) return; const icon = b.querySelector('i'); const label = t.startJourney || ''; if(icon) b.innerHTML = icon.outerHTML + ' ' + label; else b.textContent = label; });
    
    // Hero
    safeText('.hero h1', t.heroTitle); 
    safeText('.hero p', t.heroDesc);
    
    // Hero buttons
    const mapBtn = document.querySelector('.hero-buttons a'); 
    if(mapBtn) { const ico = mapBtn.querySelector('i'); mapBtn.innerHTML = (ico? ico.outerHTML + ' ':'') + (t.mapBtn||''); }
    
    const touristBtn = document.getElementById('touristOpenBtnHero'); 
    if(touristBtn) { const ico = touristBtn.querySelector('i'); touristBtn.innerHTML = (ico? ico.outerHTML + ' ':'') + (t.touristBtn||''); }

    // Section titles & subtitles
    safeText('.features .section-title h2', t.featuresTitle || ''); 
    safeText('.features .section-title p', t.featuresDesc || '');
    safeText('.destinations .section-title h2', t.destinationsTitle || ''); 
    safeText('#destSubtitle', t.destinationsDesc || '');
    
    // Rating buttons
    document.querySelectorAll('.open-bar-btn').forEach(btn=>{ btn.innerHTML = t.rateBtn || btn.innerHTML; });
    
    // About section
    safeText('.about-text h2', t.aboutTitle); 
    const aboutPs = document.querySelectorAll('.about-text p'); 
    if(aboutPs && aboutPs.length>=2){ 
      aboutPs[0].innerHTML = t.aboutDesc; 
      aboutPs[1].innerHTML = t.aboutDesc2 || aboutPs[1].innerHTML; 
    }
    const aboutContact = document.querySelector('.about-text a'); 
    if(aboutContact) aboutContact.innerHTML = (aboutContact.querySelector('i')? aboutContact.querySelector('i').outerHTML+' ':'') + (t.aboutContact || t.contactBtn || '');

    // Stat texts
    try{ 
      document.querySelectorAll('.stat-card .stat-text').forEach(function(el,i){ 
        if(t.stats && t.stats[i]) el.innerText = t.stats[i]; 
      }); 
    }catch(e){}

    // Destination cards & placeholders
    try{
      document.querySelectorAll('[data-dest-id]').forEach(card=>{
        const id = card.getAttribute('data-dest-id');
        const key = 'destination' + id;
        if(t[key]){
          const titleEl = card.querySelector('h4, .dest-title, [data-dest-title]');
          if(titleEl) titleEl.textContent = t[key];
        }
      });
      // Generic destination update
      document.querySelectorAll('.dest-card h4').forEach((el,i)=>{
        const key = 'destination' + (i+1);
        if(t[key]) el.textContent = t[key];
      });
    }catch(e){}

    // Contact form labels & placeholders
    try{
      document.querySelectorAll('label[for="name"]').forEach(l=>{ l.textContent = t.name; });
      document.querySelectorAll('label[for="email"]').forEach(l=>{ l.textContent = t.email; });
      document.querySelectorAll('label[for="subject"]').forEach(l=>{ l.textContent = t.subject; });
      document.querySelectorAll('label[for="message"]').forEach(l=>{ l.textContent = t.message; });
      document.getElementById('name') && (document.getElementById('name').placeholder = t.name);
      document.getElementById('email') && (document.getElementById('email').placeholder = t.email);
      document.getElementById('subject') && (document.getElementById('subject').placeholder = t.subject);
      document.getElementById('message') && (document.getElementById('message').placeholder = t.message);
      const submitBtn = document.querySelector('#contactForm button[type="submit"]');
      if(submitBtn) submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + (t.sendBtn || t.contactForm);
    }catch(e){}

    // Footer
    try{ 
      const foot = document.querySelector('footer'); 
      if(foot){ 
        foot.querySelectorAll('*').forEach(node=>{ 
          if(node.innerHTML && node.innerHTML.indexOf('+994')!==-1) node.innerHTML = t.footerContact1; 
          if(node.innerHTML && node.innerHTML.indexOf('info@')!==-1) node.innerHTML = t.footerContact2; 
        });
      } 
    }catch(e){}

    // Contact page title (if present)
    safeText('.contact-info h2', t.contactTitle);
    
    // Map and other titles
    safeText('[data-i18n="mapLocationTitle"]', t.mapLocationTitle);
    safeText('[data-i18n="mountainPeaks"]', t.mountainPeaks);
    safeText('[data-i18n="natureSpots"]', t.natureSpots);
    safeText('[data-i18n="recommendationsTitle"]', t.recommendationsTitle);

    // Travel helper page texts
    safeText('.travel-helper-title', t.travelHelperTitle || '');
    safeText('.travel-helper-desc', t.travelHelperDesc || '');
    safeText('[data-i18n="catGear"]', t.catGear || '');
    safeText('[data-i18n="catClothes"]', t.catClothes || '');
    safeText('[data-i18n="catSafe"]', t.catSafe || '');
    // More gear button
    try{ const mg = document.getElementById('moreGear'); if(mg) mg.innerHTML = t.gearMore || mg.innerHTML; }catch(e){}
    // Clothes options - map to .clothes-btn order
    try{ const opts = t.clothesOptions || []; document.querySelectorAll('.clothes-btn').forEach((b,i)=>{ if(opts[i]) b.innerText = opts[i]; }); }catch(e){}
    // Gear items (titles + descriptions)
    try{ if(t.gearItemsTitles) safeAll('.gear-card .title', t.gearItemsTitles); if(t.gearItemsDesc) safeAll('.gear-card .desc', t.gearItemsDesc); }catch(e){}
    // Clothes card titles/descriptions
    try{ if(t.clothesItems) safeAll('.cloth .cloth-title', t.clothesItems); if(t.clothesItemsDesc) safeAll('.cloth .cloth-desc', t.clothesItemsDesc); }catch(e){}
    // Tag labels
    try{ if(t.tagLight) document.querySelectorAll('.tag-teal').forEach(n=>n.innerText = t.tagLight); if(t.tagWarm) document.querySelectorAll('.tag-yellow').forEach(n=>n.innerText = t.tagWarm); }catch(e){}
    // Safety card titles and subtexts
    try{ if(t.safetyCards) safeAll('.safety-card strong', t.safetyCards); if(t.safetySubtexts) safeAll('.safety-card .safety-sub', t.safetySubtexts); }catch(e){}
    // Also attach detailed safety paragraphs to elements for the detail modal
    try{
      document.querySelectorAll('.safety-card').forEach(card=>{
        const k = card.dataset.key;
        if(k && t.safetyDetails && t.safetyDetails[k]) card.dataset.detail = t.safetyDetails[k];
      });
    }catch(e){}

    // Navigation buttons and UI elements
    document.querySelectorAll('[data-i18n="back"]').forEach(el=>{ el.textContent = t.back; });
    document.querySelectorAll('[data-i18n="next"]').forEach(el=>{ el.textContent = t.next; });
    document.querySelectorAll('[data-i18n="close"]').forEach(el=>{ el.textContent = t.close; });
    document.querySelectorAll('[data-i18n="search"]').forEach(el=>{ el.placeholder = t.search; });
    document.querySelectorAll('[data-i18n="filter"]').forEach(el=>{ el.textContent = t.filter; });
    document.querySelectorAll('[data-i18n="sort"]').forEach(el=>{ el.textContent = t.sort; });

    // Auth / Login page
    try{
      const auth = t.auth || {};
      // Tabs
      const tabs = document.querySelectorAll('.auth-tab'); 
      if(tabs && tabs.length>=2){ 
        tabs[0].innerText = auth.signIn; 
        tabs[1].innerText = auth.signUp; 
      }
      const signInTitle = document.getElementById('authTitle'); 
      if(signInTitle) signInTitle.innerText = auth.pageTitle || (lang==='EN'?'Sign In / Sign Up': (lang==='TR'?'Giriş / Kayıt':'Giriş / Qeydiyyat'));
      
      // Labels and placeholders
      const mapLabels = [ ['siEmail','email'], ['siPass','password'], ['suName','name'], ['suEmail','email'], ['suPass','password'], ['liEmail','email'], ['liPass','password'] ];
      mapLabels.forEach(([id,key])=>{ 
        const lab = document.querySelector('label[for="'+id+'"]'); 
        if(lab && auth[key]) lab.textContent = auth[key]; 
        const inp = document.getElementById(id); 
        if(inp && auth[key]) inp.placeholder = auth[key]; 
      });
      
      const forgot = document.getElementById('forgotLink'); 
      if(forgot) forgot.innerText = auth.forgot || '';
      
      const signinBtn = document.querySelector('#signInForm .primary-btn, #signInForm .btn-primary, #loginForm .btn-primary, #loginForm button[type="submit"]'); 
      if(signinBtn) signinBtn.innerText = auth.signinBtn || auth.signIn || '';
      
      const signupBtn = document.querySelector('#signUpForm .primary-btn, #signupForm .btn-primary, #signupForm button[type="submit"]'); 
      if(signupBtn) signupBtn.innerText = auth.signupBtn || auth.signUp || '';
      
      const googleBtn = document.getElementById('googleBtn'); 
      if(googleBtn) googleBtn.innerText = auth.continueGoogle || '';
      
      const facebookBtn = document.getElementById('facebookBtn'); 
      if(facebookBtn) facebookBtn.innerText = auth.continueFacebook || '';
    }catch(e){ console.warn(e); }

    // Update language label in selector
    const currentSpan = document.getElementById('currentLang'); 
    if(currentSpan) currentSpan.innerText = lang;
  }

  // language selector wiring
  document.addEventListener('DOMContentLoaded', function(){
    const stored = localStorage.getItem('siteLang') || 'AZ';
    setLang(stored);
    // build simple selector if present
    const selectorBtn = document.getElementById('langSelectorBtn');
    const menu = document.getElementById('langSelectorMenu');
    if(selectorBtn && menu){
      selectorBtn.addEventListener('click', function(e){ e.stopPropagation(); menu.style.display = (menu.style.display==='block'?'none':'block'); });
      menu.querySelectorAll('.lang-option').forEach(b=>{ b.addEventListener('click', function(e){ const l=this.dataset.lang; setLang(l); menu.style.display='none'; }); });
      document.addEventListener('click', function(){ if(menu) menu.style.display='none'; });
    }
    // Also add event for any .lang-option elements (global)
    document.querySelectorAll('.lang-option').forEach(b=>{ b.addEventListener('click', function(){ setLang(this.dataset.lang); }); });
  });

  // expose function for debugging
  window.setSiteLang = setLang;
})();
