document.addEventListener('DOMContentLoaded', () => {

    const fixNavLinks = () => {
        const path = window.location.pathname;
        const isIndexPage = path.endsWith('/') || path.endsWith('index.html');
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                if (!isIndexPage) {
                    link.setAttribute('href', `index.html${href}`);
                }
            }
        });
    };
    fixNavLinks();

    // --- LANGUAGE TRANSLATION ---
    const translations = {
        en: {
            navAboutPage: "About Us",
            navDeities: "Deities",
            navScriptures: "Scriptures",
            navGita: "Gita Chapters",
            navFestivals: "Festivals",
            navTemples: "Temples",
            navContact: "Contact Us",
            heroTitle: "Welcome to the Eternal Path",
            heroSubtitle: "Sanatan Dharma",
            heroDescription: "Discover the Roots of Hindu Culture, Beliefs, and Traditions",
            heroBtn1: "Gita Chapters",
            preloaderText: "DivyaLok",
            heroBtn2: "Darshan",
            aboutTitle: "What is Sanatan Dharma?",
            aboutText: `Sanatan Dharma, often translated as the "Eternal Religion," is the indigenous name for Hinduism. It signifies a timeless, universal set of principles and truths. It is not founded by a single person but is a result of the collective wisdom of ancient sages and seers. Key concepts include Dharma (righteous conduct), Karma (the law of cause and effect), Samsara (the cycle of birth, death, and reincarnation), and Moksha (liberation from the cycle).`,
            aboutLink: "Explore Philosophy →",
            aboutPageTitle: "About DivyaLok",
            aboutPageMissionTitle: "Our Mission",
            aboutPageMissionText: "Welcome to DivyaLok, your digital sanctuary for exploring the profound wisdom of Sanatan Dharma. Our mission is to provide a beautiful, accessible, and authentic resource for seekers, scholars, and anyone curious about Hindu philosophy, culture, and traditions. We believe that the timeless knowledge of the Vedas, Upanishads, and the Bhagavad Gita holds immense value for modern life, offering guidance on peace, purpose, and righteous living.",
            aboutPageVisionTitle: "Our Vision",
            aboutPageVisionText: "We envision DivyaLok as a bridge connecting ancient heritage with the digital generation. Through interactive features like our virtual aarti, bilingual content, and in-depth explorations of scriptures, we aim to create an immersive experience that is both educational and spiritually uplifting. This project is a labor of love, built with modern web technologies to ensure it is fast, responsive, and available to everyone, everywhere.",
            aboutPageTeamTitle: "The Team",
            aboutPageTeamText: "DivyaLok was created by a passionate developer dedicated to preserving and sharing the richness of Sanatan Dharma. This project is an open-source initiative, and we welcome contributions from anyone who shares our vision.",
            deitiesTitle: "Major Gods & Goddesses",
            shivaTitle: "Lord Shiva 🕉️",
            shivaDesc: "The Destroyer and Transformer within the Trimurti, the supreme being who creates, protects and transforms the universe.",
            vishnuTitle: "Lord Vishnu 🪷",
            vishnuDesc: "The Preserver and Protector of creation. He descends to Earth in various avatars to restore cosmic order.",
            durgaTitle: "Goddess Durga 🔱",
            durgaDesc: "The warrior goddess, whose mythology centers around combating evils and demonic forces that threaten peace.",
            ganeshaTitle: "Lord Ganesha 🐘",
            ganeshaDesc: "The remover of obstacles, revered as the lord of beginnings and the lord of intellect and wisdom.",
            hanumanTitle: "Hanuman ji 🐒",
            hanumanDesc: "A divine vanara companion of Lord Rama, Hanuman is a symbol of strength, devotion, and perseverance.",
            krishnaTitle: "Lord Krishna 🦚",
            krishnaDesc: "The eighth avatar of Vishnu, known for his wisdom, compassion, and divine play (Lila).",
            scripturesTitle: "Sacred Scriptures",
            scriptureTab1: "Vedas",
            scriptureTab2: "Upanishads",
            scriptureTab3: "Ramayana",
            scriptureTab4: "Mahabharata",
            scriptureTab5: "Bhagavad Gita",
            vedasTitle: "The Vedas",
            vedasDesc: "The most ancient Hindu scriptures, a large body of religious texts originating in ancient India. Composed in Vedic Sanskrit, the texts constitute the oldest layer of Sanskrit literature and the oldest scriptures of Hinduism.",
            upanishadsTitle: "The Upanishads",
            upanishadsDesc: "A collection of texts of religious and philosophical nature, written in India probably between c. 800 BCE and c. 500 BCE, during a time when Indian society started to question the traditional Vedic religious order.",
            ramayanaTitle: "The Ramayana",
            ramayanaDesc: "An ancient Indian epic poem which narrates the struggle of the divine prince Rama to rescue his wife Sita from the demon king Ravana. It explores human values and the concept of dharma.",
            mahabharataTitle: "The Mahabharata",
            mahabharataDesc: "One of the two major Sanskrit epics of ancient India. It is an epic narrative of the Kurukshetra War and the fates of the Kaurava and the Pandava princes.",
            gitaTitle: "The Bhagavad Gita",
            gitaDesc: "A 700-verse Hindu scripture that is part of the epic Mahabharata, it presents a synthesis of Hindu ideas about dharma, theistic bhakti, and the yogic paths to moksha.",
            vedasListTitle: "The Four Vedas:",
            veda1: "Rigveda",
            veda2: "Yajurveda",
            veda3: "Samaveda",
            veda4: "Atharvaveda",
            upanishadsListTitle: "Principal Upanishads:",
            upanishad1: "Isha",
            upanishad2: "Kena",
            upanishad3: "Katha",
            upanishad4: "Prashna",
            upanishad5: "Mundaka",
            upanishad6: "Mandukya",
            ramayanaListTitle: "The Seven Kandas (Books):",
            kanda1: "Bala Kanda",
            kanda2: "Ayodhya Kanda",
            kanda3: "Aranya Kanda",
            kanda4: "Kishkindha Kanda",
            kanda5: "Sundara Kanda",
            kanda6: "Yuddha Kanda",
            kanda7: "Uttara Kanda",
            mahabharataListTitle: "The Eighteen Parvas (Books):",
            parva1: "Adi Parva",
            parva2: "Sabha Parva",
            parva3: "Vana Parva",
            parva4: "Virata Parva",
            parva5: "Udyoga Parva",
            parva6: "...and more",
            gitaListTitle: "Key Concepts:",
            gitaConcept1: "Karma Yoga",
            gitaConcept2: "Jnana Yoga",
            gitaConcept3: "Bhakti Yoga",
            gitaConcept4: "Dharma",
            gitaConcept5: "Moksha",
            readMore: "Read More →",
            festivalsTitle: "Festivals & Rituals",
            diwaliTitle: "Diwali",
            diwaliDesc: "The festival of lights, symbolizing the victory of light over darkness, good over evil, and knowledge over ignorance.",
            holiTitle: "Holi",
            holiDesc: "The festival of colors, celebrating the arrival of spring and the triumph of good over evil. A day of joyful celebration.",
            navratriTitle: "Navratri",
            navratriDesc: "A nine-night festival dedicated to the worship of the goddess Durga, celebrating her victory over the demon Mahishasura.",
            janmashtamiTitle: "Janmashtami",
            janmashtamiDesc: "Celebrates the birth of Lord Krishna, an avatar of Vishnu. It involves fasting, singing, and dramatic enactments.",
            mantrasTitle: "Daily Prayers & Mantras",
            gayatriTitle: "Gayatri Mantra",
            mahamrityunjayaTitle: "Mahamrityunjaya Mantra",
            pauseAudio: "Pause Audio ⏸️",
            playAudio: "Play Audio 🔊",
            blogTitle: "Articles & Insights",
            blog1Title: "Benefits of Meditation",
            blog1Desc: "Daily meditation brings peace, clarity, and spiritual growth by calming the mind and fostering a deeper connection with the self.",
            blog2Title: "The Spiritual Meaning of Rudraksha",
            blog2Desc: "Rudraksha beads are sacred seeds associated with Lord Shiva, believed to offer protection, peace, and spiritual benefits to the wearer.",
            blog3Title: "Why Fasting is Done",
            blog3Desc: "Fasting is a sacred practice that provides both spiritual and scientific benefits, purifying the body and mind and deepening one's devotion.",
            readArticle: "Read Article →",
            footerContact: "Contact Us",
            footerFollow: "Follow Us",
            footerDisclaimer: "Disclaimer",
            footerDisclaimerText: "This website is for educational and spiritual purposes only.",
            footerQuickLinks: "Quick Links",
            navPrivacy: "Privacy Policy",
            contactFormName: "Your Name",
            privacyTitle: "Privacy Policy for DivyaLok",
            privacyLogFiles: "Log Files",
            privacyCookies: "Cookies and Web Beacons",
            privacyAdPartners: "Advertising Partners",
            privacyInfoCollect: "Information You Provide",
            privacyConsent: "Consent",
            contactPageSubtitle: "Have a question or feedback? We'd love to hear from you!",
            privacyLastUpdated: "Last updated:",
            privacyIntro: "At DivyaLok, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information that is received and collected by DivyaLok and how it is used.",
            privacyLogFilesText: "Like many other Web sites, DivyaLok makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.",
            privacyCookiesText: "DivyaLok does use cookies to store information about visitors' preferences, to record user-specific information on which pages the user accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.",
            privacyAdPartnersText1: "As an open-source project, we may partner with third-party advertising companies, such as Google AdSense, to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.",
            privacyAdPartnersText2: "Google's use of the DART cookie enables it to serve ads to users based on their visit to our sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Google ad and content network privacy policy</a>.",
            privacyAdPartnersText3: "We have no access to or control over these cookies that are used by third-party advertisers. You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices.",
            privacyInfoCollectText: "If you use our contact form, we collect the name and email address you provide solely for the purpose of responding to your inquiry. We do not use this information for marketing purposes or share it with third parties.",
            privacyConsentText: "By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you require any more information or have any questions about our privacy policy, please feel free to contact us.",
            contactFormEmail: "Your Email",
            contactFormMessage: "Your Message",
            contactFormSending: "Sending...",
            contactFormSuccess: "Thank you! Your message has been sent successfully.",
            contactFormError: "Oops! Something went wrong. Please try again later.",
            contactFormSubmit: "Send Message",
            footerDevotion: "Made with devotion 💛",
            footerRights: "© 2025 Av_eSAFE . All Rights Reserved.",
            temple1Name: "Kashi Vishwanath",
            temple2Name: "Kedarnath",
            temple3Name: "Tirupati Balaji",
            templeBtn: "Know More",
            darshanTitle: "Puja Darshan",
            darshanSubtitle: "Experience the divine rituals and connect with the sacred ceremonies.",
            aartiBtn: "Perform Aarti",
            aartiPageTitle: "Live Aarti",
            aartiSelectDeity: "Select a Deity for Aarti",
            aartiInstruction: "Click and drag the items to perform the aarti.",
            aartiReset: "Reset Items",
            muteAartiTitle: "Mute Audio",
            unmuteAartiTitle: "Unmute Audio",
            aartiNoteTitle: "Note:",
            aartiNoteDiya: "<strong>Diya:</strong> Drag over the deity to perform aarti.",
            aartiNoteSticks: "<strong>Incense Sticks:</strong> Drag over the deity to offer fragrance.",
            aartiNoteBell: "<strong>Bell:</strong> Tap to ring the sacred bell.",
            aartiNoteFlower: "<strong>Flower:</strong> Tap to shower flowers.",
            gitaChaptersTitle: "Bhagavad Gita Chapters",
            gitaCh1Title: "Chapter 1",
            gitaCh2Title: "Chapter 2",
            gitaCh3Title: "Chapter 3",
            gitaCh4Title: "Chapter 4",
            gitaCh5Title: "Chapter 5",
            gitaCh6Title: "Chapter 6",
            gitaCh7Title: "Chapter 7",
            gitaCh8Title: "Chapter 8",
            gitaCh9Title: "Chapter 9",
            gitaCh10Title: "Chapter 10",
            gitaCh11Title: "Chapter 11",
            gitaCh12Title: "Chapter 12",
            gitaCh13Title: "Chapter 13",
            gitaCh14Title: "Chapter 14",
            gitaCh15Title: "Chapter 15",
            gitaCh16Title: "Chapter 16",
            gitaCh17Title: "Chapter 17",
            gitaCh18Title: "Chapter 18",
            vedaAboutTitle: "About the Veda",
            vedaStructureTitle: "Structure & Organization",
            vedaContentTitle: "Content & Significance",
            rigvedaSubtitle: "The Book of Mantras",
            rigvedaDetailDesc: "The Rigveda is an ancient Indian collection of Vedic Sanskrit hymns. It is one of the four sacred canonical texts of Hinduism known as the Vedas. The text is a collection of 1,028 hymns and 10,600 verses, organized into ten books (Mandalas).",
            rigvedaStructure: "The Rigveda is organized into ten books, or Mandalas. The 'family books', Mandalas 2–7, are the oldest part and account for 38% of the text. The first and the tenth mandalas are the youngest and longest books.",
            rigvedaContent: "The hymns are dedicated to various deities, chief of whom are Indra, Agni (the sacrificial fire), and Soma. The hymns also contain philosophical questions, verses on charity, and other worldly issues.",
            yajurvedaSubtitle: "The Book of Rituals",
            yajurvedaDetailDesc: "The Yajurveda is the Veda primarily of prose mantras for worship rituals. An ancient Vedic Sanskrit text, it is a compilation of ritual-offering formulas that were said by a priest while an individual performed ritual actions.",
            yajurvedaStructure: "The Yajurveda is broadly grouped into two: the 'black' or 'dark' (Krishna) Yajurveda and the 'white' or 'bright' (Shukla) Yajurveda. The Krishna Yajurveda has un-arranged, unclear, motley collections of verses, whereas the Shukla Yajurveda has well-arranged and clear verses.",
            yajurvedaContent: "It provides the liturgical framework for sacrifices and rituals, detailing the procedures and the accompanying chants. It is a crucial source for understanding ancient Indian sacrificial traditions (Yajna).",
            samavedaSubtitle: "The Book of Chants",
            samavedaDetailDesc: "The Samaveda is the Veda of melodies and chants. An ancient Vedic Sanskrit text, it is part of the scriptures of Hinduism. It is a liturgical text whose 1,875 verses are primarily derived from the Rigveda.",
            samavedaStructure: "The Samaveda is divided into two major parts. The first part includes four melody collections (gāna) and the second part three verse 'books' (ārcika). A melody in the song books corresponds to a verse in the arcika books.",
            samavedaContent: "It is the root of Indian classical music and dance. The verses are meant to be sung at Soma-sacrifices by specific priests. It focuses on the devotional and musical aspects of worship.",
            atharvavedaSubtitle: "The Book of Spells",
            atharvavedaDetailDesc: "The Atharvaveda is the 'knowledge storehouse of atharvāṇas,' the procedures for everyday life. The text is the fourth Veda, but has been a late addition to the Vedic scriptures of Hinduism.",
            atharvavedaStructure: "The Atharvaveda is composed in Vedic Sanskrit, and it is a collection of 730 hymns with about 6,000 mantras, divided into 20 books. About a sixth of the Atharvaveda texts adapts verses from the Rigveda.",
            atharvavedaContent: "This Veda includes hymns, spells, and incantations for various purposes, from healing diseases and prolonging life, to black magic and rituals for kings. It provides a unique insight into the popular beliefs and practices of the Vedic era.",
            footerAuthor: "By: Abhinav Utkarsh Mishra",
            templeImportanceTitle: "Importance",
            templeHistoryTitle: "History",
            kashiLocation: 'Varanasi, Uttar Pradesh',
            kashiImportance: 'Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.',
            kashiHistory: 'The temple has been destroyed and re-constructed a number of times in history. The present structure was built on an adjacent site by the Maratha ruler, Ahilya Bai Holkar of Indore in 1780. It has been a central part of Shaivite worship for centuries.',
            kedarnathLocation: 'Garhwal Himalayan range, Uttarakhand',
            kedarnathImportance: 'Kedarnath Temple is a Hindu temple dedicated to Lord Shiva. Located on the Garhwal Himalayan range near the Mandakini river, Kedarnath is in the state of Uttarakhand. It is one of the four sites in India\'s Chota Char Dham pilgrimage and the most important of the Panch Kedar temples.',
            kedarnathHistory: 'The temple is not accessible by road and has to be reached by a 16-kilometre (9.9 mi) uphill trek from Gaurikund. The temple is believed to have been built by the Pandavas and revived by Adi Sankaracharya in the 8th century A.D. It is one of the 12 Jyotirlingas.',
            tirupatiLocation: 'Tirumala, Andhra Pradesh',
            tirupatiImportance: 'Venkateswara Temple is a landmark Vaishnavite temple situated in the hill town of Tirumala at Tirupati in Chittoor district of Andhra Pradesh, India. The Temple is dedicated to Lord Sri Venkateswara, an incarnation of Vishnu, who is believed to have appeared here to save mankind from trials and troubles of Kali Yuga.',
            tirupatiHistory: 'The temple has its origins in Vaishnavism, an ancient sect of Hinduism, which advocates the principles of equality and love, and prohibits animal sacrifice. The temple has been patronized by various dynasties, including the Pallavas, Cholas, and the Vijayanagara Empire, who made significant contributions to its structure and wealth.',
            shivaPageTitle: "Lord Shiva",
            shivaPageSubtitle: "The Destroyer, The Transformer, The Adiyogi",
            shivaAboutTitle: "About Lord Shiva",
            shivaAboutText: "Shiva is one of the principal deities of Hinduism. He is the Supreme Being within Shaivism, one of the major traditions within contemporary Hinduism. Shiva is known as 'The Destroyer' within the Trimurti, the Hindu trinity that includes Brahma and Vishnu. In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe. He is often depicted as an ascetic yogi, but also as a householder with wife Parvati and his two children, Ganesha and Kartikeya.",
            shivaHistoryTitle: "History & Significance",
            shivaHistoryText: "The worship of Shiva is a pan-Hindu tradition, practiced widely across all of India, Nepal and Sri Lanka. His iconic attributes are the serpent around his neck, the adorning crescent moon, the holy river Ganga flowing from his matted hair, the third eye on his forehead, the trishula as his weapon, and the damaru drum. He is the primal Atman (Self) of the universe.",
            vishnuPageTitle: "Lord Vishnu",
            vishnuPageSubtitle: "The Preserver, The Protector, The Supreme Being",
            vishnuAboutTitle: "About Lord Vishnu",
            vishnuAboutText: "Vishnu is one of the principal deities of Hinduism, and the Supreme Being in its Vaishnavism tradition. He is known as 'The Preserver' within the Trimurti, the Hindu trinity that includes Brahma and Shiva. In Vaishnavism, Vishnu is the Supreme Being who creates, protects and transforms the universe. He is said to descend in the form of an avatar (incarnation) to restore cosmic order and protect Dharma.",
            vishnuHistoryTitle: "History & Significance",
            vishnuHistoryText: "Vishnu is usually depicted as having a dark or pale blue complexion and having four arms. He holds a padma (lotus flower) in his lower left hand, the Kaumodaki gada (mace) in his lower right hand, the Panchajanya shankha (conch) in his upper left hand and the Sudarshana Chakra (discus) in his upper right hand. His ten avatars, known as the Dashavatara, are central to his mythology.",
            durgaPageTitle: "Goddess Durga",
            durgaPageSubtitle: "The Mother of the Universe, The Invincible One",
            durgaAboutTitle: "About Goddess Durga",
            durgaAboutText: "Durga, also identified as Adi Parashakti, is a principal and popular form of the Hindu Goddess. She is the warrior goddess, whose mythology centers around combating evils and demonic forces that threaten peace, prosperity, and dharma of the good. She is the fierce form of the protective mother goddess, willing to unleash her anger against wrong, violence for liberation and destruction to empower creation.",
            durgaHistoryTitle: "History & Significance",
            durgaHistoryText: "Durga is depicted in the Hindu pantheon as a goddess riding a lion or tiger, with many arms each carrying a weapon, often defeating the mythical buffalo demon Mahishasura. She is a central deity in Shaktism tradition of Hinduism, where she is equated with the concept of ultimate reality called Brahman. The most important texts of Shaktism, the Devi Mahatmya, celebrates Durga as the Goddess, declaring her as the supreme being and the creator of the universe.",
            ganeshaPageTitle: "Lord Ganesha",
            ganeshaPageSubtitle: "The Remover of Obstacles, The Lord of Beginnings",
            ganeshaAboutTitle: "About Lord Ganesha",
            ganeshaAboutText: "Ganesha, also known as Ganapati and Vinayaka, is one of the best-known and most worshipped deities in the Hindu pantheon. His image is found throughout India, Sri Lanka, Thailand, and Nepal. Hindu denominations worship him regardless of affiliations. Devotion to Ganesha is widely diffused and extends to Jains and Buddhists. Although he is known by many attributes, Ganesha's elephant head makes him easy to identify.",
            ganeshaHistoryTitle: "History & Significance",
            ganeshaHistoryText: "Ganesha is widely revered as the remover of obstacles, the patron of arts and sciences, and the deva of intellect and wisdom. As the god of beginnings, he is honoured at the start of rites and ceremonies. Ganesha is also invoked as patron of letters and learning during writing sessions. Several texts relate mythological anecdotes associated with his birth and exploits and explain his distinct iconography.",
            hanumanPageTitle: "Hanuman Ji",
            hanumanPageSubtitle: "The Symbol of Strength, Devotion, and Perseverance",
            hanumanAboutTitle: "About Hanuman Ji",
            hanumanAboutText: "Hanuman is a Hindu god and a divine vanara companion of the god Rama. Hanuman is one of the central characters of the Hindu epic Ramayana. He is an ardent devotee of Rama and one of the chiranjivis. Hanuman is also the son of the wind-god Vayu, who in several stories played a direct role in Hanuman's birth.",
            hanumanHistoryTitle: "History & Significance",
            hanumanHistoryText: "Hanuman is worshipped as a deity with the ability to attain victory against evil and provide protection. His tales are a source of inspiration and a guide to a life of devotion, service, and humility. Many temples are dedicated to him, and his image is a common sight in most temples dedicated to Rama. The Hanuman Chalisa, a devotional hymn, is one of the most popular prayers in Hinduism.",
            krishnaPageTitle: "Lord Krishna",
            krishnaPageSubtitle: "The Divine Statesman, The Supreme Personality of Godhead",
            krishnaAboutTitle: "About Lord Krishna",
            krishnaAboutText: "Krishna is a major deity in Hinduism. He is worshipped as the eighth avatar of the god Vishnu and also as the supreme God in his own right. He is the god of protection, compassion, tenderness, and love and is one of the most popular and widely revered among Indian divinities. Krishna's birthday is celebrated every year by Hindus on Krishna Janmashtami.",
            krishnaHistoryTitle: "History & Significance",
            krishnaHistoryText: "The anecdotes and narratives of Krishna's life are generally titled as Krishna Leela. He is a central character in the Mahabharata, the Bhagavata Purana, and the Bhagavad Gita, and is mentioned in many Hindu philosophical, theological, and mythological texts. They portray him in various perspectives: a god-child, a prankster, a model lover, a divine hero, and as the universal supreme being.",
            shivaMetaDescription: "Learn about Lord Shiva, the Destroyer and Transformer in the Hindu trinity. Explore his significance, history, and role as the Adiyogi in Sanatan Dharma.",
            vishnuMetaDescription: "Discover Lord Vishnu, the Preserver in the Hindu trinity. Learn about his avatars, including Rama and Krishna, and his role in maintaining cosmic order (Dharma).",
            durgaMetaDescription: "Explore the power of Goddess Durga, the mother of the universe. Understand her mythology, her victory over Mahishasura, and her significance in Shaktism.",
            ganeshaMetaDescription: "Learn about Lord Ganesha, the beloved elephant-headed deity. Discover his role as the remover of obstacles and the god of beginnings, wisdom, and intellect.",
            hanumanMetaDescription: "Uncover the story of Hanuman, the ultimate devotee of Lord Rama. Explore his symbolism of strength, selfless service, and unwavering devotion in Hinduism.",
            krishnaMetaDescription: "Delve into the life and teachings of Lord Krishna, the eighth avatar of Vishnu. Learn about his divine play (Lila), the Bhagavad Gita, and his role as a supreme guide."
        },
        hi: {
            navAboutPage: "हमारे बारे में",
            navDeities: "देवी-देवता",
            navScriptures: "ग्रंथ",
            navGita: "गीता अध्याय",
            navFestivals: "त्योहार",
            navTemples: "मंदिर",
            navContact: "संपर्क करें",
            heroTitle: "सनातन पथ में आपका स्वागत है",
            heroSubtitle: "सनातन धर्म",
            heroDescription: "हिंदू संस्कृति, विश्वास और परंपराओं की जड़ों की खोज करें",
            heroBtn1: "गीता अध्याय",
            preloaderText: "दिव्यलोक",
            heroBtn2: "दर्शन",
            aboutTitle: "सनातन धर्म क्या है?",
            aboutText: `सनातन धर्म, जिसे अक्सर "शाश्वत धर्म" के रूप में अनुवादित किया जाता है, हिंदू धर्म का स्वदेशी नाम है। यह कालातीत, सार्वभौमिक सिद्धांतों और सत्यों का प्रतीक है। इसकी स्थापना किसी एक व्यक्ति द्वारा नहीं की गई है, बल्कि यह प्राचीन ऋषियों और द्रष्टाओं के सामूहिक ज्ञान का परिणाम है। मुख्य अवधारणाओं में धर्म, कर्म, संसार (जन्म, मृत्यु और पुनर्जन्म का चक्र), और मोक्ष (चक्र से मुक्ति) शामिल हैं।`,
            aboutLink: "दर्शन का अन्वेषण करें →",
            aboutPageTitle: "दिव्यलोक के बारे में",
            aboutPageMissionTitle: "हमारा मिशन",
            aboutPageMissionText: "दिव्यलोक में आपका स्वागत है, जो सनातन धर्म के गहन ज्ञान की खोज के लिए आपका डिजिटल अभयारण्य है। हमारा मिशन साधकों, विद्वानों और हिंदू दर्शन, संस्कृति और परंपराओं के बारे में जिज्ञासु किसी भी व्यक्ति के लिए एक सुंदर, सुलभ और प्रामाणिक संसाधन प्रदान करना है। हमारा मानना है कि वेदों, उपनिषदों और भगवद् गीता का कालातीत ज्ञान आधुनिक जीवन के लिए अत्यधिक मूल्य रखता है, जो शांति, उद्देश्य और धार्मिक जीवन पर मार्गदर्शन प्रदान करता है।",
            aboutPageVisionTitle: "हमारी दृष्टि",
            aboutPageVisionText: "हम दिव्यलोक को प्राचीन विरासत को डिजिटल पीढ़ी से जोड़ने वाले एक सेतु के रूप में देखते हैं। हमारी आभासी आरती, द्विभाषी सामग्री और शास्त्रों के गहन अन्वेषण जैसी इंटरैक्टिव सुविधाओं के माध्यम से, हमारा लक्ष्य एक ऐसा immersive अनुभव बनाना है जो शैक्षिक और आध्यात्मिक रूप से उत्थानकारी दोनों हो। यह परियोजना प्रेम का श्रम है, जिसे आधुनिक वेब तकनीकों के साथ बनाया गया है ताकि यह सुनिश्चित हो सके कि यह तेज, उत्तरदायी और हर जगह सभी के लिए उपलब्ध है।",
            aboutPageTeamTitle: "टीम",
            aboutPageTeamText: "दिव्यलोक को सनातन धर्म की समृद्धि को संरक्षित करने और साझा करने के लिए समर्पित एक भावुक डेवलपर द्वारा बनाया गया था। यह परियोजना एक ओपन-सोर्स पहल है, और हम उन सभी के योगदान का स्वागत करते हैं जो हमारी दृष्टि साझा करते हैं।",
            deitiesTitle: "प्रमुख देवी-देवता",
            shivaTitle: "भगवान शिव 🕉️",
            shivaDesc: "त्रिमूर्ति के भीतर संहारक और परिवर्तक, जो ब्रह्मांड का निर्माण, संरक्षण और परिवर्तन करते हैं।",
            vishnuTitle: "भगवान विष्णु 🪷",
            vishnuDesc: "सृष्टि के संरक्षक और पालक। वह ब्रह्मांडीय व्यवस्था को बहाल करने के लिए विभिन्न अवतारों में पृथ्वी पर अवतरित होते हैं।",
            durgaTitle: "देवी दुर्गा 🔱",
            durgaDesc: "योद्धा देवी, जिनकी पौराणिक कथाएं शांति के लिए खतरा पैदा करने वाली बुराइयों और राक्षसी ताकतों से निपटने पर केंद्रित हैं।",
            ganeshaTitle: "भगवान गणेश 🐘",
            ganeshaDesc: "बाधाओं को दूर करने वाले, शुरुआत के देवता और बुद्धि और ज्ञान के स्वामी के रूप में पूजे जाते हैं।",
            hanumanTitle: "हनुमान जी 🐒",
            hanumanDesc: "भगवान राम के एक दिव्य वानर साथी, हनुमान शक्ति, भक्ति और दृढ़ता के प्रतीक हैं।",
            krishnaTitle: "भगवान कृष्ण 🦚",
            krishnaDesc: "विष्णु के आठवें अवतार, जो अपनी बुद्धि, करुणा और दिव्य लीला के लिए जाने जाते हैं।",
            scripturesTitle: "पवित्र ग्रंथ",
            scriptureTab1: "वेद",
            scriptureTab2: "उपनिषद",
            scriptureTab3: "रामायण",
            scriptureTab4: "महाभारत",
            scriptureTab5: "भगवद् गीता",
            vedasTitle: "वेद",
            vedasDesc: "सबसे प्राचीन हिंदू ग्रंथ, जो प्राचीन भारत में उत्पन्न हुए धार्मिक ग्रंथों का एक बड़ा निकाय है। वैदिक संस्कृत में रचित, ये ग्रंथ संस्कृत साहित्य की सबसे पुरानी परत और हिंदू धर्म के सबसे पुराने ग्रंथ हैं।",
            upanishadsTitle: "उपनिषद",
            upanishadsDesc: "धार्मिक और दार्शनिक प्रकृति के ग्रंथों का एक संग्रह, जो भारत में शायद 800 ईसा पूर्व और 500 ईसा पूर्व के बीच लिखा गया था, उस समय जब भारतीय समाज ने पारंपरिक वैदिक धार्मिक व्यवस्था पर सवाल उठाना शुरू कर दिया था।",
            ramayanaTitle: "रामायण",
            ramayanaDesc: "एक प्राचीन भारतीय महाकाव्य जो अपनी पत्नी सीता को राक्षस राजा रावण से बचाने के लिए दिव्य राजकुमार राम के संघर्ष का वर्णन करता है। यह मानवीय मूल्यों और धर्म की अवधारणा की पड़ताल करता है।",
            mahabharataTitle: "महाभारत",
            mahabharataDesc: "प्राचीन भारत के दो प्रमुख संस्कृत महाकाव्यों में से एक। यह कुरुक्षेत्र युद्ध और कौरव और पांडव राजकुमारों के भाग्य का एक महाकाव्य है।",
            gitaTitle: "भगवद् गीता",
            gitaDesc: "एक 700-श्लोकों का हिंदू ग्रंथ जो महाभारत का हिस्सा है, यह धर्म, आस्तिक भक्ति और मोक्ष के योगिक मार्गों के बारे में हिंदू विचारों का संश्लेषण प्रस्तुत करता है।",
            vedasListTitle: "चार वेद:",
            veda1: "ऋग्वेद",
            veda2: "यजुर्वेद",
            veda3: "सामवेद",
            veda4: "अथर्ववेद",
            upanishadsListTitle: "प्रमुख उपनिषद:",
            upanishad1: "ईश",
            upanishad2: "केन",
            upanishad3: "कठ",
            upanishad4: "प्रश्न",
            upanishad5: "मुण्डक",
            upanishad6: "माण्डूक्य",
            ramayanaListTitle: "सात काण्ड (पुस्तकें):",
            kanda1: "बाल काण्ड",
            kanda2: "अयोध्या काण्ड",
            kanda3: "अरण्य काण्ड",
            kanda4: "किष्किन्धा काण्ड",
            kanda5: "सुंदर काण्ड",
            kanda6: "युद्ध काण्ड",
            kanda7: "उत्तर काण्ड",
            mahabharataListTitle: "अठारह पर्व (पुस्तकें):",
            parva1: "आदि पर्व",
            parva2: "सभा पर्व",
            parva3: "वन पर्व",
            parva4: "विराट पर्व",
            parva5: "उद्योग पर्व",
            parva6: "...और भी",
            gitaListTitle: "मुख्य अवधारणाएं:",
            gitaConcept1: "कर्म योग",
            gitaConcept2: "ज्ञान योग",
            gitaConcept3: "भक्ति योग",
            gitaConcept4: "धर्म",
            gitaConcept5: "मोक्ष",
            readMore: "और पढ़ें →",
            festivalsTitle: "त्योहार और अनुष्ठान",
            diwaliTitle: "दिवाली",
            diwaliDesc: "रोशनी का त्योहार, जो अंधकार पर प्रकाश, बुराई पर अच्छाई और अज्ञान पर ज्ञान की विजय का प्रतीक है।",
            holiTitle: "होली",
            holiDesc: "रंगों का त्योहार, जो वसंत के आगमन और बुराई पर अच्छाई की जीत का जश्न मनाता है। आनंदमय उत्सव का दिन।",
            navratriTitle: "नवरात्रि",
            navratriDesc: "देवी दुर्गा की पूजा के लिए समर्पित नौ रातों का त्योहार, जो राक्षस महिषासुर पर उनकी जीत का जश्न मनाता है।",
            janmashtamiTitle: "जन्माष्टमी",
            janmashtamiDesc: "विष्णु के अवतार भगवान कृष्ण के जन्म का जश्न। इसमें उपवास, गायन और नाट्य अभिनय शामिल हैं।",
            mantrasTitle: "दैनिक प्रार्थना और मंत्र",
            gayatriTitle: "गायत्री मंत्र",
            mahamrityunjayaTitle: "महामृत्युंजय मंत्र",
            pauseAudio: "ऑडियो रोकें ⏸️",
            playAudio: "ऑडियो चलाएं 🔊",
            blogTitle: "लेख और अंतर्दृष्टि",
            blog1Title: "ध्यान के लाभ",
            blog1Desc: "दैनिक ध्यान मन को शांत करके और स्वयं के साथ गहरा संबंध स्थापित करके शांति, स्पष्टता और आध्यात्मिक विकास लाता है।",
            blog2Title: "रुद्राक्ष का आध्यात्मिक अर्थ",
            blog2Desc: "रुद्राक्ष के मोती भगवान शिव से जुड़े पवित्र बीज हैं, जो पहनने वाले को सुरक्षा, शांति और आध्यात्मिक लाभ प्रदान करते हैं।",
            blog3Title: "उपवास क्यों किया जाता है",
            blog3Desc: "उपवास एक पवित्र अभ्यास है जो आध्यात्मिक और वैज्ञानिक दोनों लाभ प्रदान करता है, शरीर और मन को शुद्ध करता है और व्यक्ति की भक्ति को गहरा करता है।",
            readArticle: "लेख पढ़ें →",
            footerContact: "संपर्क करें",
            footerFollow: "हमें फॉलो करें",
            footerDisclaimer: "अस्वीकरण",
            footerDisclaimerText: "यह वेबसाइट केवल शैक्षिक और आध्यात्मिक उद्देश्यों के लिए है।",
            footerQuickLinks: "त्वरित लिंक",
            navPrivacy: "गोपनीयता नीति",
            contactFormName: "आपका नाम",
            privacyTitle: "दिव्यलोक के लिए गोपनीयता नीति",
            privacyLogFiles: "लॉग फ़ाइलें",
            privacyCookies: "कुकीज़ और वेब बीकन",
            privacyAdPartners: "विज्ञापन भागीदार",
            privacyInfoCollect: "आपके द्वारा प्रदान की गई जानकारी",
            privacyConsent: "सहमति",
            contactPageSubtitle: "कोई प्रश्न या प्रतिक्रिया है? हमें आपसे सुनना अच्छा लगेगा!",
            privacyLastUpdated: "अंतिम अपडेट:",
            privacyIntro: "दिव्यलोक में, हमारे आगंतुकों की गोपनीयता हमारे लिए अत्यंत महत्वपूर्ण है। यह गोपनीयता नीति दस्तावेज़ दिव्यलोक द्वारा प्राप्त और एकत्र की जाने वाली व्यक्तिगत जानकारी के प्रकार और इसका उपयोग कैसे किया जाता है, की रूपरेखा तैयार करता है।",
            privacyLogFilesText: "कई अन्य वेब साइटों की तरह, दिव्यलोक लॉग फ़ाइलों का उपयोग करता है। लॉग फ़ाइलों के अंदर की जानकारी में इंटरनेट प्रोटोकॉल (आईपी) पते, ब्राउज़र का प्रकार, इंटरनेट सेवा प्रदाता (आईएसपी), दिनांक/समय टिकट, संदर्भित/निकास पृष्ठ, और रुझानों का विश्लेषण करने, साइट का प्रशासन करने, साइट के चारों ओर उपयोगकर्ता के आंदोलन को ट्रैक करने और जनसांख्यिकीय जानकारी इकट्ठा करने के लिए क्लिकों की संख्या शामिल है। आईपी पते और ऐसी अन्य जानकारी किसी भी ऐसी जानकारी से नहीं जुड़ी होती है जो व्यक्तिगत रूप से पहचानी जा सके।",
            privacyCookiesText: "दिव्यलोक आगंतुकों की वरीयताओं के बारे में जानकारी संग्रहीत करने, उपयोगकर्ता-विशिष्ट जानकारी को रिकॉर्ड करने के लिए कुकीज़ का उपयोग करता है, जिस पर उपयोगकर्ता पहुँचता है या जाता है, और आगंतुकों के ब्राउज़र प्रकार या अन्य जानकारी के आधार पर हमारे वेब पेज की सामग्री को वैयक्तिकृत या अनुकूलित करने के लिए जो आगंतुक अपने ब्राउज़र के माध्यम से भेजता है।",
            privacyAdPartnersText1: "एक ओपन-सोर्स प्रोजेक्ट के रूप में, हम तृतीय-पक्ष विज्ञापन कंपनियों, जैसे कि Google AdSense, के साथ साझेदारी कर सकते हैं, जब आप हमारी वेबसाइट पर जाते हैं तो विज्ञापन दिखाने के लिए। ये कंपनियाँ आपकी इस और अन्य वेबसाइटों की यात्राओं के बारे में जानकारी (आपका नाम, पता, ईमेल पता, या टेलीफोन नंबर शामिल नहीं) का उपयोग कर सकती हैं ताकि आपको रुचि के सामान और सेवाओं के बारे में विज्ञापन प्रदान किए जा सकें।",
            privacyAdPartnersText2: "Google द्वारा DART कुकी का उपयोग इसे हमारी साइटों और इंटरनेट पर अन्य साइटों पर उनकी यात्रा के आधार पर उपयोगकर्ताओं को विज्ञापन दिखाने में सक्षम बनाता है। उपयोगकर्ता <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Google विज्ञापन और सामग्री नेटवर्क गोपनीयता नीति</a> पर जाकर DART कुकी के उपयोग से बाहर निकल सकते हैं।",
            privacyAdPartnersText3: "हमारे पास इन कुकीज़ पर कोई पहुँच या नियंत्रण नहीं है जो तृतीय-पक्ष विज्ञापनदाताओं द्वारा उपयोग की जाती हैं। आपको उनकी प्रथाओं के बारे में अधिक विस्तृत जानकारी के साथ-साथ कुछ प्रथाओं से बाहर निकलने के निर्देशों के लिए इन तृतीय-पक्ष विज्ञापन सर्वरों की संबंधित गोपनीयता नीतियों से परामर्श करना चाहिए।",
            privacyInfoCollectText: "यदि आप हमारे संपर्क फ़ॉर्म का उपयोग करते हैं, तो हम आपके द्वारा प्रदान किए गए नाम और ईमेल पते को केवल आपकी जांच का जवाब देने के उद्देश्य से एकत्र करते हैं। हम इस जानकारी का उपयोग विपणन उद्देश्यों के लिए नहीं करते हैं या इसे तीसरे पक्ष के साथ साझा नहीं करते हैं।",
            privacyConsentText: "हमारी वेबसाइट का उपयोग करके, आप हमारी गोपनीयता नीति के लिए अपनी सहमति देते हैं और इसकी शर्तों से सहमत होते हैं। यदि आपको किसी और जानकारी की आवश्यकता है या हमारी गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करने में संकोच न करें।",
            contactFormEmail: "आपका ईमेल",
            contactFormMessage: "आपका संदेश",
            contactFormSending: "भेज रहा है...",
            contactFormSuccess: "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।",
            contactFormError: "उफ़! कुछ गलत हो गया। कृपया बाद में पुनः प्रयास करें।",
            contactFormSubmit: "संदेश भेजें",
            footerDevotion: "भक्ति से बनाया गया 💛",
            footerRights: "© 2025 Av_eSAFE . सर्वाधिकार सुरक्षित।",
            temple1Name: "काशी विश्वनाथ",
            temple2Name: "केदारनाथ",
            temple3Name: "तिरुपति बालाजी",
            templeBtn: "और जानें",
            darshanTitle: "पूजा दर्शन",
            darshanSubtitle: "दिव्य अनुष्ठानों का अनुभव करें और पवित्र समारोहों से जुड़ें।",
            aartiBtn: "आरती करें",
            aartiPageTitle: "लाइव आरती",
            aartiSelectDeity: "आरती के लिए एक देवता चुनें",
            aartiInstruction: "आरती करने के लिए वस्तुओं पर क्लिक करें और खींचें।",
            aartiReset: "वस्तुओं को रीसेट करें",
            muteAartiTitle: "ऑडियो म्यूट करें",
            unmuteAartiTitle: "ऑडियो अनम्यूट करें",
            aartiNoteTitle: "ध्यान दें:",
            aartiNoteDiya: "<strong>दीया:</strong> आरती करने के लिए देवता के ऊपर खींचें।",
            aartiNoteSticks: "<strong>अगरबत्ती:</strong> सुगंध अर्पित करने के लिए देवता के ऊपर खींचें।",
            aartiNoteBell: "<strong>घंटी:</strong> पवित्र घंटी बजाने के लिए टैप करें।",
            aartiNoteFlower: "<strong>फूल:</strong> फूल बरसाने के लिए टैप करें।",
            gitaChaptersTitle: "भगवद् गीता अध्याय",
            gitaCh1Title: "अध्याय १",
            gitaCh2Title: "अध्याय २",
            gitaCh3Title: "अध्याय ३",
            gitaCh4Title: "अध्याय ४",
            gitaCh5Title: "अध्याय ५",
            gitaCh6Title: "अध्याय ६",
            gitaCh7Title: "अध्याय ७",
            gitaCh8Title: "अध्याय ८",
            gitaCh9Title: "अध्याय ९",
            gitaCh10Title: "अध्याय १०",
            gitaCh11Title: "अध्याय ११",
            gitaCh12Title: "अध्याय १२",
            gitaCh13Title: "अध्याय १३",
            gitaCh14Title: "अध्याय १४",
            gitaCh15Title: "अध्याय १५",
            gitaCh16Title: "अध्याय १६",
            gitaCh17Title: "अध्याय १७",
            gitaCh18Title: "अध्याय १८",
            vedaAboutTitle: "वेद के बारे में",
            vedaStructureTitle: "संरचना और संगठन",
            vedaContentTitle: "सामग्री और महत्व",
            rigvedaSubtitle: "मंत्रों की पुस्तक",
            rigvedaDetailDesc: "ऋग्वेद वैदिक संस्कृत भजनों का एक प्राचीन भारतीय संग्रह है। यह हिंदू धर्म के चार पवित्र विहित ग्रंथों में से एक है जिन्हें वेद के रूप में जाना जाता है। यह पाठ 1,028 भजनों और 10,600 छंदों का संग्रह है, जो दस पुस्तकों (मंडलों) में व्यवस्थित है।",
            rigvedaStructure: "ऋग्वेद दस पुस्तकों, या मंडलों में व्यवस्थित है। 'परिवार की किताबें', मंडल 2-7, सबसे पुराना हिस्सा हैं और पाठ का 38% हिस्सा हैं। पहला और दसवां मंडल सबसे युवा और सबसे लंबी किताबें हैं।",
            rigvedaContent: "भजन विभिन्न देवताओं को समर्पित हैं, जिनमें प्रमुख इंद्र, अग्नि (यज्ञ की अग्नि), और सोम हैं। भजनों में दार्शनिक प्रश्न, दान पर छंद और अन्य सांसारिक मुद्दे भी शामिल हैं।",
            yajurvedaSubtitle: "अनुष्ठानों की पुस्तक",
            yajurvedaDetailDesc: "यजुर्वेद मुख्य रूप से पूजा अनुष्ठानों के लिए गद्य मंत्रों का वेद है। एक प्राचीन वैदिक संस्कृत पाठ, यह अनुष्ठान-बलिदान सूत्रों का एक संकलन है जो एक पुजारी द्वारा कहा जाता था जबकि एक व्यक्ति अनुष्ठानिक कार्य करता था।",
            yajurvedaStructure: "यजुर्वेद को मोटे तौर पर दो में बांटा गया है: 'कृष्ण' यजुर्वेद और 'शुक्ल' यजुर्वेद। कृष्ण यजुर्वेद में छंदों का अव्यवस्थित, अस्पष्ट संग्रह है, जबकि शुक्ल यजुर्वेद में सुव्यवस्थित और स्पष्ट छंद हैं।",
            yajurvedaContent: "यह यज्ञों और अनुष्ठानों के लिए पूजन-संबंधी ढांचा प्रदान करता है, जिसमें प्रक्रियाओं और साथ के मंत्रों का विवरण होता है। यह प्राचीन भारतीय यज्ञ परंपराओं को समझने के लिए एक महत्वपूर्ण स्रोत है।",
            samavedaSubtitle: "मंत्रों की पुस्तक",
            samavedaDetailDesc: "सामवेद धुनों और मंत्रों का वेद है। एक प्राचीन वैदिक संस्कृत पाठ, यह हिंदू धर्म के धर्मग्रंथों का हिस्सा है। यह एक पूजन-संबंधी पाठ है जिसके 1,875 छंद मुख्य रूप से ऋग्वेद से लिए गए हैं।",
            samavedaStructure: "सामवेद को दो प्रमुख भागों में बांटा गया है। पहले भाग में चार धुन संग्रह (गान) और दूसरे भाग में तीन छंद 'पुस्तकें' (आर्चिका) शामिल हैं।",
            samavedaContent: "यह भारतीय शास्त्रीय संगीत और नृत्य की जड़ है। छंदों को विशिष्ट पुजारियों द्वारा सोम-यज्ञों में गाया जाना है। यह पूजा के भक्ति और संगीत पहलुओं पर केंद्रित है।",
            atharvavedaSubtitle: "जादू-टोनों की पुस्तक",
            atharvavedaDetailDesc: "अथर्ववेद 'अथर्वाणों का ज्ञान भंडार' है, जो रोजमर्रा की जिंदगी की प्रक्रियाएं हैं। यह पाठ चौथा वेद है, लेकिन हिंदू धर्म के वैदिक धर्मग्रंथों में देर से जोड़ा गया है।",
            atharvavedaStructure: "अथर्ववेद वैदिक संस्कृत में रचा गया है, और यह लगभग 6,000 मंत्रों के साथ 730 भजनों का संग्रह है, जो 20 पुस्तकों में विभाजित है। अथर्ववेद के लगभग छठे हिस्से में ऋग्वेद के छंदों को अपनाया गया है।",
            atharvavedaContent: "इस वेद में विभिन्न उद्देश्यों के लिए भजन, मंत्र और जादू-टोने शामिल हैं, बीमारियों को ठीक करने और जीवन को लंबा करने से लेकर, काले जादू और राजाओं के लिए अनुष्ठान तक। यह वैदिक युग की लोकप्रिय मान्यताओं और प्रथाओं में एक अनूठी अंतर्दृष्टि प्रदान करता है।",
            footerAuthor: "द्वारा: अभिनव उत्कर्ष मिश्रा",
            templeImportanceTitle: "महत्व",
            templeHistoryTitle: "इतिहास",
            kashiLocation: 'वाराणसी, उत्तर प्रदेश',
            kashiImportance: 'काशी विश्वनाथ मंदिर भगवान शिव को समर्पित सबसे प्रसिद्ध हिंदू मंदिरों में से एक है। यह वाराणसी, उत्तर प्रदेश, भारत में स्थित है। यह मंदिर पवित्र गंगा नदी के पश्चिमी तट पर स्थित है, और बारह ज्योतिर्लिंगों में से एक है, जो शिव के सबसे पवित्र मंदिर हैं।',
            kashiHistory: 'मंदिर को इतिहास में कई बार नष्ट और पुनर्निर्मित किया गया है। वर्तमान संरचना 1780 में इंदौर की मराठा शासक, अहिल्या बाई होल्कर द्वारा एक निकटवर्ती स्थल पर बनाई गई थी। यह सदियों से शैव पूजा का एक केंद्रीय हिस्सा रहा है।',
            kedarnathLocation: 'गढ़वाल हिमालय श्रृंखला, उत्तराखंड',
            kedarnathImportance: 'केदारनाथ मंदिर भगवान शिव को समर्पित एक हिंदू मंदिर है। मंदाकिनी नदी के पास गढ़वाल हिमालय श्रृंखला पर स्थित, केदारनाथ उत्तराखंड राज्य में है। यह भारत की छोटा चार धाम तीर्थयात्रा में चार स्थलों में से एक है और पंच केदार मंदिरों में सबसे महत्वपूर्ण है।',
            kedarnathHistory: 'मंदिर सड़क मार्ग से सुलभ नहीं है और गौरीकुंड से 16 किलोमीटर (9.9 मील) की चढ़ाई वाली ट्रेक द्वारा पहुंचा जा सकता है। माना जाता है कि यह मंदिर पांडवों द्वारा बनाया गया था और 8 वीं शताब्दी ईस्वी में आदि शंकराचार्य द्वारा पुनर्जीवित किया गया था। यह 12 ज्योतिर्लिंगों में से एक है।',
            tirupatiLocation: 'तिरुमाला, आंध्र प्रदेश',
            tirupatiImportance: 'वेंकटेश्वर मंदिर भारत के आंध्र प्रदेश के चित्तूर जिले में तिरुपति में तिरुमाला के पहाड़ी शहर में स्थित एक ऐतिहासिक वैष्णव मंदिर है। यह मंदिर भगवान श्री वेंकटेश्वर को समर्पित है, जो विष्णु के एक अवतार हैं, जिनके बारे में माना जाता है कि वे कलियुग के परीक्षणों और परेशानियों से मानव जाति को बचाने के लिए यहां प्रकट हुए थे।',
            tirupatiHistory: 'मंदिर की उत्पत्ति वैष्णववाद में हुई है, जो हिंदू धर्म का एक प्राचीन संप्रदाय है, जो समानता और प्रेम के सिद्धांतों की वकालत करता है, और पशु बलि पर रोक लगाता है। मंदिर को पल्लव, चोल और विजयनगर साम्राज्य सहित विभिन्न राजवंशों द्वारा संरक्षण दिया गया है, जिन्होंने इसकी संरचना और धन में महत्वपूर्ण योगदान दिया।',
            shivaPageTitle: "भगवान शिव",
            shivaPageSubtitle: "संहारक, परिवर्तक, आदियोगी",
            shivaAboutTitle: "भगवान शिव के बारे में",
            shivaAboutText: "शिव हिंदू धर्म के प्रमुख देवताओं में से एक हैं। वह शैव धर्म के भीतर सर्वोच्च प्राणी हैं, जो समकालीन हिंदू धर्म की प्रमुख परंपराओं में से एक है। शिव को त्रिमूर्ति के भीतर 'संहारक' के रूप में जाना जाता है, हिंदू त्रिमूर्ति जिसमें ब्रह्मा और विष्णु शामिल हैं। शैव परंपरा में, शिव सर्वोच्च भगवान हैं जो ब्रह्मांड का निर्माण, संरक्षण और परिवर्तन करते हैं। उन्हें अक्सर एक तपस्वी योगी के रूप में चित्रित किया जाता है, लेकिन पत्नी पार्वती और उनके दो बच्चों, गणेश और कार्तिकेय के साथ एक गृहस्थ के रूप में भी।",
            shivaHistoryTitle: "इतिहास और महत्व",
            shivaHistoryText: "शिव की पूजा एक अखिल-हिंदू परंपरा है, जो पूरे भारत, नेपाल और श्रीलंका में व्यापक रूप से प्रचलित है। उनकी प्रतिष्ठित विशेषताएं उनके गले में सर्प, सुशोभित अर्धचंद्र, उनकी उलझी हुई जटाओं से बहने वाली पवित्र नदी गंगा, उनके माथे पर तीसरी आंख, उनके हथियार के रूप में त्रिशूल और डमरू हैं। वह ब्रह्मांड के आदिम आत्मा (स्वयं) हैं।",
            vishnuPageTitle: "भगवान विष्णु",
            vishnuPageSubtitle: "संरक्षक, पालक, परमात्मा",
            vishnuAboutTitle: "भगवान विष्णु के बारे में",
            vishnuAboutText: "विष्णु हिंदू धर्म के प्रमुख देवताओं में से एक हैं, और वैष्णववाद परंपरा में सर्वोच्च प्राणी हैं। उन्हें त्रिमूर्ति के भीतर 'संरक्षक' के रूप में जाना जाता है, जिसमें ब्रह्मा और शिव शामिल हैं। वैष्णववाद में, विष्णु सर्वोच्च प्राणी हैं जो ब्रह्मांड का निर्माण, संरक्षण और परिवर्तन करते हैं। कहा जाता है कि वे ब्रह्मांडीय व्यवस्था को बहाल करने और धर्म की रक्षा के लिए एक अवतार के रूप में अवतरित होते हैं।",
            vishnuHistoryTitle: "इतिहास और महत्व",
            vishnuHistoryText: "विष्णु को आमतौर पर गहरे या हल्के नीले रंग के और चार भुजाओं वाले के रूप में दर्शाया जाता है। वे अपने निचले बाएं हाथ में पद्म (कमल का फूल), निचले दाएं हाथ में कौमोदकी गदा, ऊपरी बाएं हाथ में पांचजन्य शंख और ऊपरी दाएं हाथ में सुदर्शन चक्र धारण करते हैं। उनके दस अवतार, जिन्हें दशावतार के नाम से जाना जाता है, उनकी पौराणिक कथाओं के केंद्र में हैं।",
            durgaPageTitle: "देवी दुर्गा",
            durgaPageSubtitle: "ब्रह्मांड की माता, अजेय",
            durgaAboutTitle: "देवी दुर्गा के बारे में",
            durgaAboutText: "दुर्गा, जिन्हें आदि पराशक्ति के रूप में भी जाना जाता है, हिंदू देवी का एक प्रमुख और लोकप्रिय रूप है। वह योद्धा देवी हैं, जिनकी पौराणिक कथाएं शांति, समृद्धि और धर्म के लिए खतरा पैदा करने वाली बुराइयों और राक्षसी ताकतों से निपटने पर केंद्रित हैं। वह सुरक्षात्मक मातृ देवी का उग्र रूप हैं, जो गलत के खिलाफ अपना क्रोध प्रकट करने, मुक्ति के लिए हिंसा और सृष्टि को सशक्त बनाने के लिए विनाश करने को तैयार रहती हैं।",
            durgaHistoryTitle: "इतिहास और महत्व",
            durgaHistoryText: "दुर्गा को हिंदू देवताओं में एक शेर या बाघ की सवारी करने वाली देवी के रूप में दर्शाया गया है, जिनकी कई भुजाएँ हैं और प्रत्येक में एक हथियार है, जो अक्सर पौराणिक भैंस राक्षस महिषासुर को पराजित करती हैं। वह हिंदू धर्म की शक्तिवाद परंपरा में एक केंद्रीय देवता हैं, जहाँ उन्हें ब्राह्मण नामक अंतिम वास्तविकता की अवधारणा के बराबर माना जाता है। शक्तिवाद का सबसे महत्वपूर्ण ग्रंथ, देवी महात्म्य, दुर्गा को देवी के रूप में मनाता है, उन्हें सर्वोच्च प्राणी और ब्रह्मांड का निर्माता घोषित करता है।",
            ganeshaPageTitle: "भगवान गणेश",
            ganeshaPageSubtitle: "विघ्नहर्ता, आदिपूज्य",
            ganeshaAboutTitle: "भगवान गणेश के बारे में",
            ganeshaAboutText: "गणेश, जिन्हें गणपति और विनायक के नाम से भी जाना जाता है, हिंदू देवताओं में सबसे प्रसिद्ध और सबसे अधिक पूजे जाने वाले देवताओं में से एक हैं। उनकी छवि पूरे भारत, श्रीलंका, थाईलैंड और नेपाल में पाई जाती है। हिंदू संप्रदाय संबद्धता की परवाह किए बिना उनकी पूजा करते हैं। गणेश के प्रति भक्ति व्यापक रूप से फैली हुई है और जैन और बौद्धों तक फैली हुई है। यद्यपि उन्हें कई विशेषताओं से जाना जाता है, गणेश का हाथी का सिर उन्हें पहचानना आसान बनाता है।",
            ganeshaHistoryTitle: "इतिहास और महत्व",
            ganeshaHistoryText: "गणेश को व्यापक रूप से बाधाओं को दूर करने वाले, कला और विज्ञान के संरक्षक, और बुद्धि और ज्ञान के देव के रूप में सम्मानित किया जाता है। शुरुआत के देवता के रूप में, उन्हें संस्कारों और समारोहों की शुरुआत में सम्मानित किया जाता है। गणेश को लेखन सत्रों के दौरान अक्षरों और सीखने के संरक्षक के रूप में भी invo किया जाता है। कई ग्रंथ उनके जन्म और कारनामों से जुड़े पौराणिक उपाख्यानों से संबंधित हैं और उनकी विशिष्ट प्रतिमा की व्याख्या करते हैं।",
            hanumanPageTitle: "हनुमान जी",
            hanumanPageSubtitle: "शक्ति, भक्ति और दृढ़ता का प्रतीक",
            hanumanAboutTitle: "हनुमान जी के बारे में",
            hanumanAboutText: "हनुमान एक हिंदू देवता और भगवान राम के एक दिव्य वानर साथी हैं। हनुमान हिंदू महाकाव्य रामायण के केंद्रीय पात्रों में से एक हैं। वह राम के एक उत्साही भक्त और चिरंजीवियों में से एक हैं। हनुमान पवन-देवता वायु के पुत्र भी हैं, जिन्होंने कई कहानियों में हनुमान के जन्म में प्रत्यक्ष भूमिका निभाई।",
            hanumanHistoryTitle: "इतिहास और महत्व",
            hanumanHistoryText: "हनुमान को बुराई पर विजय प्राप्त करने और सुरक्षा प्रदान करने की क्षमता वाले देवता के रूप में पूजा जाता है। उनकी कहानियाँ प्रेरणा का स्रोत हैं और भक्ति, सेवा और विनम्रता के जीवन के लिए एक मार्गदर्शक हैं। उन्हें समर्पित कई मंदिर हैं, और उनकी छवि राम को समर्पित अधिकांश मंदिरों में एक आम दृश्य है। हनुमान चालीसा, एक भक्ति भजन, हिंदू धर्म में सबसे लोकप्रिय प्रार्थनाओं में से एक है।",
            krishnaPageTitle: "भगवान कृष्ण",
            krishnaPageSubtitle: "दिव्य राजनीतिज्ञ, भगवान का सर्वोच्च व्यक्तित्व",
            krishnaAboutTitle: "भगवान कृष्ण के बारे में",
            krishnaAboutText: "कृष्ण हिंदू धर्म में एक प्रमुख देवता हैं। उन्हें भगवान विष्णु के आठवें अवतार के रूप में और अपने आप में सर्वोच्च भगवान के रूप में भी पूजा जाता है। वह संरक्षण, करुणा, कोमलता और प्रेम के देवता हैं और भारतीय देवताओं में सबसे लोकप्रिय और व्यापक रूप से सम्मानित हैं। कृष्ण का जन्मदिन हर साल हिंदुओं द्वारा कृष्ण जन्माष्टमी पर मनाया जाता है।",
            krishnaHistoryTitle: "इतिहास और महत्व",
            krishnaHistoryText: "कृष्ण के जीवन के उपाख्यानों और कथाओं को आम तौर पर कृष्ण लीला के रूप में शीर्षक दिया गया है। वह महाभारत, भागवत पुराण और भगवद गीता में एक केंद्रीय पात्र हैं, और कई हिंदू दार्शनिक, धार्मिक और पौराणिक ग्रंथों में उनका उल्लेख है। वे उन्हें विभिन्न दृष्टिकोणों में चित्रित करते हैं: एक ईश्वर-बालक, एक मसखरा, एक आदर्श प्रेमी, एक दिव्य नायक, और सार्वभौमिक सर्वोच्च प्राणी के रूप में।",
            shivaMetaDescription: "भगवान शिव, हिंदू त्रिमूर्ति में संहारक और परिवर्तक के बारे में जानें। सनातन धर्म में उनके महत्व, इतिहास और आदियोगी के रूप में उनकी भूमिका का अन्वेषण करें।",
            vishnuMetaDescription: "हिंदू त्रिमूर्ति में संरक्षक भगवान विष्णु की खोज करें। राम और कृष्ण सहित उनके अवतारों और लौकिक व्यवस्था (धर्म) को बनाए रखने में उनकी भूमिका के बारे में जानें।",
            durgaMetaDescription: "ब्रह्मांड की माता, देवी दुर्गा की शक्ति का अन्वेषण करें। उनकी पौराणिक कथाओं, महिषासुर पर उनकी विजय और शक्तिवाद में उनके महत्व को समझें।",
            ganeshaMetaDescription: "प्रिय हाथी के सिर वाले देवता भगवान गणेश के बारे में जानें। बाधाओं को दूर करने वाले और शुरुआत, बुद्धि और ज्ञान के देवता के रूप में उनकी भूमिका की खोज करें।",
            hanumanMetaDescription: "भगवान राम के परम भक्त हनुमान की कहानी को उजागर करें। हिंदू धर्म में शक्ति, निस्वार्थ सेवा और अटूट भक्ति के उनके प्रतीकवाद का अन्वेषण करें।",
            krishnaMetaDescription: "भगवान विष्णु के आठवें अवतार भगवान कृष्ण के जीवन और शिक्षाओं में तल्लीन हों। उनकी दिव्य लीला, भगवद गीता और एक सर्वोच्च मार्गदर्शक के रूप में उनकी भूमिका के बारे में जानें।"
        }
    };

    const templeDetailsData = {
        kashi: {
            nameKey: 'temple1Name',
            imageSrc: 'images/temples/kashi.jpg',
            locationKey: 'kashiLocation',
            importanceKey: 'kashiImportance',
            historyKey: 'kashiHistory'
        },
        kedarnath: {
            nameKey: 'temple2Name',
            imageSrc: 'images/temples/kedarnath.jpg',
            locationKey: 'kedarnathLocation',
            importanceKey: 'kedarnathImportance',
            historyKey: 'kedarnathHistory'
        },
        tirupati: {
            nameKey: 'temple3Name',
            imageSrc: 'images/temples/tirupati.jpg',
            locationKey: 'tirupatiLocation',
            importanceKey: 'tirupatiImportance',
            historyKey: 'tirupatiHistory'
        }
    };

    const deityDetailsData = {
        shiva: {
            imageSrc: 'images/Card Image/Card - Lord shiva wallpaper.jfif',
            nameKey: 'shivaPageTitle',
            subtitleKey: 'shivaPageSubtitle',
            aboutTitleKey: 'shivaAboutTitle',
            aboutTextKey: 'shivaAboutText',
            historyTitleKey: 'shivaHistoryTitle',
            historyTextKey: 'shivaHistoryText',
            metaDescriptionKey: 'shivaMetaDescription'
        },
        vishnu: {
            imageSrc: 'images/Card Image/Card - Vishnu.jfif',
            nameKey: 'vishnuPageTitle',
            subtitleKey: 'vishnuPageSubtitle',
            aboutTitleKey: 'vishnuAboutTitle',
            aboutTextKey: 'vishnuAboutText',
            historyTitleKey: 'vishnuHistoryTitle',
            historyTextKey: 'vishnuHistoryText',
            metaDescriptionKey: 'vishnuMetaDescription'
        },
        durga: {
            imageSrc: 'images/Card Image/Card - Durga maa.jfif',
            nameKey: 'durgaPageTitle',
            subtitleKey: 'durgaPageSubtitle',
            aboutTitleKey: 'durgaAboutTitle',
            aboutTextKey: 'durgaAboutText',
            historyTitleKey: 'durgaHistoryTitle',
            historyTextKey: 'durgaHistoryText',
            metaDescriptionKey: 'durgaMetaDescription'
        },
        ganesha: {
            imageSrc: 'images/Card Image/Card - Ganesha.jfif',
            nameKey: 'ganeshaPageTitle',
            subtitleKey: 'ganeshaPageSubtitle',
            aboutTitleKey: 'ganeshaAboutTitle',
            aboutTextKey: 'ganeshaAboutText',
            historyTitleKey: 'ganeshaHistoryTitle',
            historyTextKey: 'ganeshaHistoryText',
            metaDescriptionKey: 'ganeshaMetaDescription'
        },
        hanuman: {
            imageSrc: 'images/Card Image/Card - Hanuman ji.jfif',
            nameKey: 'hanumanPageTitle',
            subtitleKey: 'hanumanPageSubtitle',
            aboutTitleKey: 'hanumanAboutTitle',
            aboutTextKey: 'hanumanAboutText',
            historyTitleKey: 'hanumanHistoryTitle',
            historyTextKey: 'hanumanHistoryText',
            metaDescriptionKey: 'hanumanMetaDescription'
        },
        krishna: {
            imageSrc: 'images/Card Image/Card - Krishna.jfif',
            nameKey: 'krishnaPageTitle',
            subtitleKey: 'krishnaPageSubtitle',
            aboutTitleKey: 'krishnaAboutTitle',
            aboutTextKey: 'krishnaAboutText',
            historyTitleKey: 'krishnaHistoryTitle',
            historyTextKey: 'krishnaHistoryText',
            metaDescriptionKey: 'krishnaMetaDescription'
        }
    };

    // --- DEITY CARD GENERATION (for index.html) ---
    const deityData = [
        {
            href: 'deity-details.html?name=shiva',
            aosDelay: '100',
            imgSrc: 'images/Shiva.jfif',
            imgAlt: 'Lord Shiva',
            titleKey: 'shivaTitle',
            descKey: 'shivaDesc'
        },
        {
            href: 'deity-details.html?name=vishnu',
            aosDelay: '200',
            imgSrc: 'images/Vishnu.jfif',
            imgAlt: 'Lord Vishnu',
            titleKey: 'vishnuTitle',
            descKey: 'vishnuDesc'
        },
        {
            href: 'deity-details.html?name=durga',
            aosDelay: '300',
            imgSrc: 'images/durga devi.jfif',
            imgAlt: 'Goddess Durga',
            titleKey: 'durgaTitle',
            descKey: 'durgaDesc'
        },
        {
            href: 'deity-details.html?name=ganesha',
            aosDelay: '400',
            imgSrc: 'images/Ganesha.jfif',
            imgAlt: 'Lord Ganesha',
            titleKey: 'ganeshaTitle',
            descKey: 'ganeshaDesc'
        },
        {
            href: 'deity-details.html?name=hanuman',
            aosDelay: '500',
            imgSrc: 'images/Hanuman.jfif',
            imgAlt: 'Hanuman ji',
            titleKey: 'hanumanTitle',
            descKey: 'hanumanDesc'
        },
        {
            href: 'deity-details.html?name=krishna',
            aosDelay: '600',
            imgSrc: 'images/Krishna.jfif',
            imgAlt: 'Lord Krishna',
            titleKey: 'krishnaTitle',
            descKey: 'krishnaDesc'
        }
    ];
    const deityGrid = document.querySelector('#deities .deity-grid');

    if (deityGrid) {
        deityGrid.innerHTML = ''; // Clear any hardcoded cards

        deityData.forEach(deity => {
            const link = document.createElement('a');
            link.href = deity.href;
            link.className = 'deity-link';
            link.setAttribute('data-aos', 'fade-up');
            link.setAttribute('data-aos-delay', deity.aosDelay);

            link.innerHTML = `
                <div class="deity-card">
                    <img src="${deity.imgSrc}" alt="${deity.imgAlt}">
                    <h3 data-lang-key="${deity.titleKey}"></h3>
                    <p data-lang-key="${deity.descKey}"></p>
                </div>
            `;
            
            deityGrid.appendChild(link);
        });
    }

    // --- SCRIPTURE TABS ---
    const initScriptureTabs = () => {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));

                    button.classList.add('active');
                    const content = document.getElementById(button.dataset.tab);
                    if (content) {
                        content.classList.add('active');
                    }
                });
            });
        }
    };

    // Initialize Animate on Scroll
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });

    // --- STICKY HEADER ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- MOBILE NAVIGATION ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // --- MANTRA TYPING ANIMATION ---
    function typeWriter(element, text, speed) {
        let i = 0;
        element.innerHTML = ""; // Clear existing text
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const gayatriMantraText = "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥";
    const mahamrityunjayaMantraText = "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥";

    // Use Intersection Observer to trigger typing animation when section is visible
    const mantraSection = document.getElementById('mantras');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const gayatriEl = document.getElementById('gayatri-mantra');
                const mahamrityunjayaEl = document.getElementById('mahamrityunjaya-mantra');
                
                if (gayatriEl) typeWriter(gayatriEl, gayatriMantraText, 100);
                if (mahamrityunjayaEl) typeWriter(mahamrityunjayaEl, mahamrityunjayaMantraText, 100);

                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    if (mantraSection) {
        observer.observe(mantraSection);
    }

    // --- MANTRA AUDIO PLAYER ---
    const audioButtons = document.querySelectorAll('.btn-audio');

    // Function to reset all audio buttons to "Play" state
    const resetAllAudioButtons = () => {
        const currentLang = localStorage.getItem('language') || 'en';
        audioButtons.forEach(btn => {
            btn.textContent = translations[currentLang]['playAudio'];
            btn.setAttribute('data-lang-key', 'playAudio');
        });
    };

    audioButtons.forEach(button => {
        const audioId = button.dataset.audioId;
        const audioEl = document.getElementById(audioId);

        if (audioEl) {
            button.addEventListener('click', () => {
                const isPlaying = !audioEl.paused;

                // Pause all audio elements first
                document.querySelectorAll('audio').forEach(a => a.pause());
                resetAllAudioButtons(); // Reset all button texts

                if (!isPlaying) {
                    audioEl.play();
                    const currentLang = localStorage.getItem('language') || 'en';
                    button.textContent = translations[currentLang]['pauseAudio'];
                    button.setAttribute('data-lang-key', 'pauseAudio');
                }
            });

            // When audio finishes, reset its specific button
            audioEl.addEventListener('ended', () => {
                const currentLang = localStorage.getItem('language') || 'en';
                button.textContent = translations[currentLang]['playAudio'];
                button.setAttribute('data-lang-key', 'playAudio');
            });
        }
    });

    // --- LANGUAGE TOGGLE LOGIC ---
    const langToggleButton = document.getElementById('lang-toggle');

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                const translationText = translations[lang][key];

                if (key === 'aboutText') {
                    // Special handling for aboutText to add highlights
                    element.innerHTML = translationText.replace(/Dharma/g, '<span class="highlight">Dharma</span>')
                                                       .replace(/Karma/g, '<span class="highlight">Karma</span>')
                                                       .replace(/Samsara/g, '<span class="highlight">Samsara</span>')
                                                       .replace(/Moksha/g, '<span class="highlight">Moksha</span>');
                } else if (/<[a-z][\s\S]*>/i.test(translationText)) {
                    // If translation contains HTML, use innerHTML
                    element.innerHTML = translationText;
                } else {
                    // Otherwise, use textContent for performance and security
                    element.textContent = translationText;
                }
            }
        });

        // Add this new part for placeholders
        document.querySelectorAll('[data-lang-placeholder-key]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder-key');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Special handling for Aarti mute button title on language change
        const aartiMuteBtn = document.getElementById('aarti-mute-btn');
        if (aartiMuteBtn) {
            const aartiAudio = document.getElementById('aarti-audio');
            if (aartiAudio) {
                if (aartiAudio.muted) {
                    aartiMuteBtn.title = translations[lang]['unmuteAartiTitle'];
                } else {
                    aartiMuteBtn.title = translations[lang]['muteAartiTitle'];
                }
            }
        }

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        langToggleButton.textContent = lang === 'en' ? 'हिन्दी' : 'English';
    };

    // Set initial language on page load
    const initialLang = localStorage.getItem('language') || 'en';
    setLanguage(initialLang);

    // --- HERO SECTION PARALLAX ---
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const parallaxLayers = document.querySelectorAll('.mountain-layer');
            // Calculate the base movement based on the mouse position from the center of the screen
            const x = (window.innerWidth / 2 - e.pageX) / 20;

            parallaxLayers.forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const x_movement = (x * speed) / 10;
                layer.style.transform = `translateX(${x_movement}px)`;
            });
        });
    }

    // --- AARTI PAGE LOGIC (SELECTOR & DRAGGING) ---
    const initAartiPage = () => {
        const aartiContainer = document.getElementById('aarti-container');
        const deitySelectorGrid = document.querySelector('.deity-selector-grid');
        const deityImage = document.getElementById('aarti-deity-image');
        const aartiAudio = document.getElementById('aarti-audio'); // Get the audio element
        const muteButton = document.getElementById('aarti-mute-btn');
        const pujaBell = document.getElementById('puja-bell');
        const bellAudio = document.getElementById('bell-audio');

    
        if (!aartiContainer || !deitySelectorGrid || !deityImage || !aartiAudio || !muteButton || !pujaBell || !bellAudio) return;
    
        const aartiDeityData = [
            { nameKey: 'shivaTitle', thumbSrc: 'images/Shiva.jfif', alt: 'Lord Shiva', audioSrc: 'audio/aarti/shiva.mp3' },
            { nameKey: 'vishnuTitle', thumbSrc: 'images/Vishnu.jfif', alt: 'Lord Vishnu', audioSrc: 'audio/aarti/vishnu.mp3' },
            { nameKey: 'durgaTitle', thumbSrc: 'images/durga devi.jfif', alt: 'Goddess Durga', audioSrc: 'audio/aarti/durga.mp3' },
            { nameKey: 'ganeshaTitle', thumbSrc: 'images/Ganesha.jfif', alt: 'Lord Ganesha', audioSrc: 'audio/aarti/ganesha.mp3' },
            { nameKey: 'hanumanTitle', thumbSrc: 'images/Hanuman.jfif', alt: 'Hanuman Ji', audioSrc: 'audio/aarti/hanuman.mp3' },
            { nameKey: 'krishnaTitle', thumbSrc: 'images/Krishna.jfif', alt: 'Lord Krishna', audioSrc: 'audio/aarti/krishna.mp3' }
        ];
    
        // Generate deity selector cards
        deitySelectorGrid.innerHTML = ''; // Clear any placeholders
        aartiDeityData.forEach((deity, index) => {
            const card = document.createElement('div');
            card.className = 'deity-selector-card';
            
            card.innerHTML = `
                <img src="${deity.thumbSrc}" alt="${deity.alt}">
                <span data-lang-key="${deity.nameKey}"></span>
            `;
    
            card.addEventListener('click', () => {
                // Update image
                deityImage.src = deity.thumbSrc;
                deityImage.alt = deity.alt;

                // Update active card style
                document.querySelectorAll('.deity-selector-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');

                // Update and play audio
                aartiAudio.pause();
                aartiAudio.src = deity.audioSrc;
                aartiAudio.play().catch(error => {
                    // Autoplay was prevented. This can happen if the user hasn't interacted with the page yet.
                    console.log("Audio autoplay prevented. A user interaction is required to start audio.");
                });
            });
    
            deitySelectorGrid.appendChild(card);
    
            if (index === 0) {
                card.click(); // Programmatically click the first card to set initial state
            }
        });
    
        // MUTE/UNMUTE LOGIC
        const updateMuteButtonState = () => {
            const currentLang = localStorage.getItem('language') || 'en';
            const langTranslations = translations[currentLang];
            if (aartiAudio.muted) {
                muteButton.textContent = '🔊';
                muteButton.title = langTranslations['unmuteAartiTitle'];
            } else {
                muteButton.textContent = '🔇';
                muteButton.title = langTranslations['muteAartiTitle'];
            }
        };

        muteButton.addEventListener('click', () => {
            aartiAudio.muted = !aartiAudio.muted;
            updateMuteButtonState();
        });

        // Set initial state of the mute button
        updateMuteButtonState();

        // PUJA BELL LOGIC
        pujaBell.addEventListener('click', () => {
            // Rewind to the start and play. This allows for rapid clicking.
            bellAudio.currentTime = 0;
            bellAudio.play().catch(error => {
                console.log("Bell audio could not be played:", error);
            });
        });

        // FLOWER SHOWER LOGIC
        const flowerShowerBtn = document.getElementById('flower-shower-btn');
        let isFlowerShowerActive = false;

        if (flowerShowerBtn) {
            flowerShowerBtn.addEventListener('click', () => {
                if (isFlowerShowerActive || !aartiContainer) return;

                isFlowerShowerActive = true;

                const overlay = document.createElement('div');
                overlay.className = 'flower-shower-overlay';
                aartiContainer.appendChild(overlay);

                const flowerImages = [
                    'images/Aarti/Marigold1.png',
                    'images/Aarti/Marigold2.png',
                    'images/Aarti/Marigold3.png'
                ];
                const numberOfFlowers = 50;
                for (let i = 0; i < numberOfFlowers; i++) {
                    const flower = document.createElement('div');
                    flower.className = 'flower';
                    
                    // Randomly select a flower image from the array
                    const randomFlowerImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];
                    flower.style.backgroundImage = `url('${randomFlowerImage}')`;

                    // Randomize properties for a natural look within a 5-second window
                    flower.style.left = `${Math.random() * 100}%`;
                    flower.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duration between 3s and 5s
                    flower.style.animationDelay = `${Math.random() * 1}s`;      // Start delay up to 1s
                    
                    overlay.appendChild(flower);
                }

                // Clean up the overlay and flowers after 5 seconds
                setTimeout(() => {
                    overlay.remove();
                    isFlowerShowerActive = false;
                }, 5000);
            });
        }

        // DRAGGABLE LOGIC
        const pujaItems = document.querySelectorAll('.puja-item');
        pujaItems.forEach(item => {
            let isPotentiallyDragging = false;
            let isDragging = false;
            let draggedClone = null;
            let startX, startY;
            let offsetX, offsetY;
            const scaleFactor = 2.2;
            const dragThreshold = 5; // The number of pixels the mouse must move to start a drag
    
            const startPotentialDrag = (e) => {
                isPotentiallyDragging = true;
                startX = e.clientX || e.touches[0].clientX;
                startY = e.clientY || e.touches[0].clientY;
                
                // Calculate the offset for the real drag later
                const rect = item.getBoundingClientRect();
                offsetX = startX - rect.left;
                offsetY = startY - rect.top;
            };

            const drag = (e) => {
                if (!isPotentiallyDragging) return;

                const currentX = e.clientX || e.touches[0].clientX;
                const currentY = e.clientY || e.touches[0].clientY;

                if (!isDragging) {
                    // Check if the drag threshold has been met
                    if (Math.abs(currentX - startX) < dragThreshold && Math.abs(currentY - startY) < dragThreshold) {
                        return; // Not dragging yet
                    }

                    // --- START THE REAL DRAG ---
                    isDragging = true;
                    document.body.classList.add('is-dragging-item');

                    // Create, style, and append the clone
                    draggedClone = item.cloneNode(true);
                    draggedClone.classList.add('dragging');
                    const rect = item.getBoundingClientRect();
                    draggedClone.style.width = `${rect.width * scaleFactor}px`;
                    draggedClone.style.height = `${rect.height * scaleFactor}px`;
                    document.body.appendChild(draggedClone);

                    // Hide original item
                    item.style.opacity = '0.4';
                }

                // This part runs for every frame of an active drag
                e.preventDefault();
                
                // Position the clone so the cursor is at the same relative point on the new, larger item.
                draggedClone.style.left = `${currentX - (offsetX * scaleFactor)}px`;
                draggedClone.style.top = `${currentY - (offsetY * scaleFactor)}px`;
            };
    
            const stopDrag = () => {
                if (isDragging) {
                    document.body.classList.remove('is-dragging-item');
                    if (draggedClone) {
                        draggedClone.remove();
                    }
                    item.style.opacity = '1';
                }
                isPotentiallyDragging = false;
                isDragging = false;
                draggedClone = null;
            };
    
            item.addEventListener('mousedown', startPotentialDrag);
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
    
            item.addEventListener('touchstart', startPotentialDrag, { passive: false });
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('touchend', stopDrag);
        });
    };
    
    // --- TEMPLE DETAILS PAGE LOGIC ---
    const initTempleDetailsPage = () => {
        // Check if we are on a page that needs this logic by looking for a specific element
        const templeNameEl = document.getElementById('temple-name');
        if (!templeNameEl) return;

        const urlParams = new URLSearchParams(window.location.search);
        const templeId = urlParams.get('temple');
        const templeData = templeDetailsData[templeId];

        if (templeData) {
            // Set the image source first to ensure it loads even if translation logic fails.
            document.getElementById('temple-image').src = templeData.imageSrc;

            // Get current language and the corresponding translations
            const currentLang = localStorage.getItem('language') || 'en';
            const langTranslations = translations[currentLang];

            // Populate the page with data
            const templeNameText = langTranslations[templeData.nameKey] || 'Temple Details';
            document.title = `${templeNameText} - DivyaLok`;
            templeNameEl.setAttribute('data-lang-key', templeData.nameKey);
            templeNameEl.textContent = templeNameText;
            document.getElementById('temple-image').alt = templeNameText;

            // Populate dynamic text fields using the correct language and set data-lang-key for future toggles
            const locationEl = document.getElementById('temple-location');
            locationEl.textContent = langTranslations[templeData.locationKey];
            locationEl.setAttribute('data-lang-key', templeData.locationKey);

            const importanceEl = document.getElementById('temple-importance-text');
            importanceEl.textContent = langTranslations[templeData.importanceKey];
            importanceEl.setAttribute('data-lang-key', templeData.importanceKey);

            const historyEl = document.getElementById('temple-history-text');
            historyEl.textContent = langTranslations[templeData.historyKey];
            historyEl.setAttribute('data-lang-key', templeData.historyKey);
        } else {
            // Handle case where temple ID is invalid or not found
            templeNameEl.textContent = "Temple Not Found";
            document.querySelector('.deity-content-section').innerHTML = '<p>The requested temple details could not be found. Please return to the home page and try again.</p>';
        }
    };

    // --- SCRIPTURE DETAILS PAGE LOGIC ---
    const vedaDetailsData = {
        rigveda: {
            titleKey: 'veda1',
            subtitleKey: 'rigvedaSubtitle',
            sections: [
                { titleKey: 'vedaAboutTitle', contentKey: 'rigvedaDetailDesc' },
                { titleKey: 'vedaStructureTitle', contentKey: 'rigvedaStructure' },
                { titleKey: 'vedaContentTitle', contentKey: 'rigvedaContent' }
            ]
        },
        yajurveda: {
            titleKey: 'veda2',
            subtitleKey: 'yajurvedaSubtitle',
            sections: [
                { titleKey: 'vedaAboutTitle', contentKey: 'yajurvedaDetailDesc' },
                { titleKey: 'vedaStructureTitle', contentKey: 'yajurvedaStructure' },
                { titleKey: 'vedaContentTitle', contentKey: 'yajurvedaContent' }
            ]
        },
        samaveda: {
            titleKey: 'veda3',
            subtitleKey: 'samavedaSubtitle',
            sections: [
                { titleKey: 'vedaAboutTitle', contentKey: 'samavedaDetailDesc' },
                { titleKey: 'vedaStructureTitle', contentKey: 'samavedaStructure' },
                { titleKey: 'vedaContentTitle', contentKey: 'samavedaContent' }
            ]
        },
        atharvaveda: {
            titleKey: 'veda4',
            subtitleKey: 'atharvavedaSubtitle',
            sections: [
                { titleKey: 'vedaAboutTitle', contentKey: 'atharvavedaDetailDesc' },
                { titleKey: 'vedaStructureTitle', contentKey: 'atharvavedaStructure' },
                { titleKey: 'vedaContentTitle', contentKey: 'atharvavedaContent' }
            ]
        }
    };

    const initScriptureDetailsPage = () => {
        const scriptureTitleEl = document.getElementById('scripture-title');
        if (!scriptureTitleEl) return; // Only run on the details page

        const urlParams = new URLSearchParams(window.location.search);
        const vedaName = urlParams.get('name');
        const vedaData = vedaDetailsData[vedaName];

        if (vedaData) {
            const contentContainer = document.getElementById('scripture-content');
            contentContainer.innerHTML = ''; // Clear placeholder

            vedaData.sections.forEach(section => {
                const sectionHtml = `
                    <h3 data-lang-key="${section.titleKey}"></h3>
                    <p data-lang-key="${section.contentKey}"></p>
                `;
                contentContainer.innerHTML += sectionHtml;
            });

            // Set attributes for the main titles
            scriptureTitleEl.setAttribute('data-lang-key', vedaData.titleKey);
            document.getElementById('scripture-subtitle').setAttribute('data-lang-key', vedaData.subtitleKey);
            
            // Re-run setLanguage to populate all new and existing elements
            const currentLang = localStorage.getItem('language') || 'en';
            setLanguage(currentLang);

            // Set the page title after translation
            const vedaTitleText = scriptureTitleEl.textContent || 'Scripture Details';
            document.title = `${vedaTitleText} - DivyaLok`;

        } else {
            scriptureTitleEl.textContent = "Scripture Not Found";
            document.getElementById('scripture-content').innerHTML = '<p>The requested scripture details could not be found. Please return to the home page and try again.</p>';
        }
    };

    // --- DEITY DETAILS PAGE LOGIC ---
    const initDeityDetailsPage = () => {
        const deityNameEl = document.getElementById('deity-name');
        if (!deityNameEl) return; // Only run on the deity-details.html page

        const urlParams = new URLSearchParams(window.location.search);
        const deityId = urlParams.get('name');
        const deityData = deityDetailsData[deityId];

        if (deityData) {
            const currentLang = localStorage.getItem('language') || 'en';
            const langTranslations = translations[currentLang];

            // Set image and alt text
            document.getElementById('deity-image').src = deityData.imageSrc;
            const deityNameText = langTranslations[deityData.nameKey] || 'Deity Details';
            document.getElementById('deity-image').alt = deityNameText;

            // Set page title and meta description for SEO
            document.title = `${deityNameText} - DivyaLok`;
            const metaDescTag = document.querySelector('meta[name="description"]');
            if (metaDescTag) {
                metaDescTag.setAttribute('content', langTranslations[deityData.metaDescriptionKey] || '');
            }

            // Populate all text fields and set data-lang-key for future language toggles
            deityNameEl.textContent = deityNameText;
            deityNameEl.setAttribute('data-lang-key', deityData.nameKey);

            const subtitleEl = document.getElementById('deity-subtitle');
            subtitleEl.textContent = langTranslations[deityData.subtitleKey];
            subtitleEl.setAttribute('data-lang-key', deityData.subtitleKey);

            const aboutTitleEl = document.getElementById('deity-about-title');
            aboutTitleEl.textContent = langTranslations[deityData.aboutTitleKey];
            aboutTitleEl.setAttribute('data-lang-key', deityData.aboutTitleKey);

            const aboutTextEl = document.getElementById('deity-about-text');
            aboutTextEl.textContent = langTranslations[deityData.aboutTextKey];
            aboutTextEl.setAttribute('data-lang-key', deityData.aboutTextKey);

            const historyTitleEl = document.getElementById('deity-history-title');
            historyTitleEl.textContent = langTranslations[deityData.historyTitleKey];
            historyTitleEl.setAttribute('data-lang-key', deityData.historyTitleKey);

            const historyTextEl = document.getElementById('deity-history-text');
            historyTextEl.textContent = langTranslations[deityData.historyTextKey];
            historyTextEl.setAttribute('data-lang-key', deityData.historyTextKey);

        } else {
            deityNameEl.textContent = "Deity Not Found";
            document.querySelector('.deity-content-section').innerHTML = '<p>The requested deity details could not be found. Please return to the home page and try again.</p>';
        }
    };

    // --- CONTACT FORM AJAX SUBMISSION ---
    const initContactForm = () => {
        const form = document.getElementById('contact-form');
        const resultDiv = document.getElementById('form-result');

        if (!form || !resultDiv) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);

            const currentLang = localStorage.getItem('language') || 'en';
            const submitButton = form.querySelector('button[type="submit"]');
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = translations[currentLang]['contactFormSending'];
            resultDiv.style.display = 'none';
            resultDiv.className = ''; // Reset classes

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let jsonResponse = await response.json();
                resultDiv.classList.add(response.status === 200 ? 'success' : 'error');
                resultDiv.innerHTML = response.status === 200 ? translations[currentLang]['contactFormSuccess'] : (jsonResponse.message || translations[currentLang]['contactFormError']);
                if (response.status === 200) form.reset();
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                resultDiv.classList.add('error');
                resultDiv.innerHTML = translations[currentLang]['contactFormError'];
            })
            .finally(() => {
                resultDiv.style.display = 'block';
                submitButton.disabled = false;
                const buttonKey = submitButton.getAttribute('data-lang-key');
                submitButton.textContent = translations[currentLang][buttonKey];
                setTimeout(() => { resultDiv.style.display = 'none'; }, 6000);
            });
        });
    };

    // --- PRE-LOADER LOGIC ---
    const initPreloader = () => {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        // --- Set Preloader Text Directly (for reliability) ---
        // This ensures the text is set immediately when the preloader initializes, avoiding timing conflicts.
        const preloaderTextEl = document.querySelector('.preloader-text');
        if (preloaderTextEl) {
            const currentLang = localStorage.getItem('language') || 'en';
            const text = translations[currentLang]?.preloaderText || 'DivyaLok';
            preloaderTextEl.textContent = text;
        }

        // --- Dedication Text Fade-in Logic (JS-Controlled) ---
        // This is more reliable than CSS animation timing.
        const dedicationEl = document.querySelector('.preloader-dedication');
        setTimeout(() => { dedicationEl?.classList.add('visible'); }, 500); // Fade in after 0.5s
    
        const startTime = Date.now();
        const minDisplayTime = 2500; // Minimum display time in milliseconds (2.5 seconds)
    
        const hidePreloader = () => {
            preloader.classList.add('loaded');
            preloader.addEventListener('transitionend', () => {
                preloader.style.display = 'none';
            });
        };
    
        window.addEventListener('load', () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minDisplayTime - elapsedTime;
    
            if (remainingTime > 0) {
                setTimeout(hidePreloader, remainingTime);
            } else {
                hidePreloader();
            }
        });
    };

    // --- INITIALIZE ALL FUNCTIONS ON PAGE LOAD ---
    initPreloader();
    initAartiPage();
    initTempleDetailsPage();
    initScriptureTabs();
    initScriptureDetailsPage();
    initDeityDetailsPage();
    initContactForm();

    // This listener must be after setLanguage is defined
    langToggleButton.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'en';
        const newLang = currentLang === 'en' ? 'hi' : 'en';
        setLanguage(newLang);
    });

});
