document.addEventListener('DOMContentLoaded', () => {

    // --- SCRIPTURE TABS (from script.js) ---
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

        // This function relies on `translations` and `setLanguage` from script.js
        // Ensure script.js is loaded before this script.
        if (typeof translations === 'undefined' || typeof setLanguage === 'undefined') {
            console.error("script.js with translations object must be loaded before scriptures.js");
            return;
        }

        if (vedaData) {
            const currentLang = localStorage.getItem('language') || 'en';
            const langTranslations = translations[currentLang];

            const vedaTitleText = langTranslations[vedaData.titleKey] || 'Scripture Details';
            document.title = `${vedaTitleText} - DivyaLok`;

            scriptureTitleEl.setAttribute('data-lang-key', vedaData.titleKey);
            document.getElementById('scripture-subtitle').setAttribute('data-lang-key', vedaData.subtitleKey);

            const contentContainer = document.getElementById('scripture-content');
            contentContainer.innerHTML = ''; // Clear placeholder

            vedaData.sections.forEach(section => {
                const sectionHtml = `
                    <h3 data-lang-key="${section.titleKey}"></h3>
                    <p data-lang-key="${section.contentKey}"></p>
                `;
                contentContainer.innerHTML += sectionHtml;
            });

            // Re-run setLanguage to populate the newly added elements
            setLanguage(currentLang);

        } else {
            scriptureTitleEl.textContent = "Scripture Not Found";
            document.getElementById('scripture-content').innerHTML = '<p>The requested scripture details could not be found. Please return to the home page and try again.</p>';
        }
    };

    // Initialize all functions
    initScriptureTabs();
    initScriptureDetailsPage();
});

