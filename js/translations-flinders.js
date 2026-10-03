// js/translations-flinders.js
// Textes propres au site Flinders Place Names. Le fichier se charge apres
// js/translations.js, herite du site French Place Names, et en remplace ou
// complete les cles : celles qui ne figurent pas ici restent celles du site
// d'origine (menus, carte, formulaire de contact...).
(() => {
    const SITE_FR = 'https://www.frenchplacenames.au/';
    const legal = {
        fr: (translations.fr['about-legal-content'] || '')
            .replace('<em>Noms Français le long du littoral Australien</em> est un projet de recherche',
                     '<em>Flinders Place Names</em> est un projet de recherche'),
        en: (translations.en['about-legal-content'] || '')
            .replace('<em>French Names Along the Australian Coastline</em> is a research project',
                     '<em>Flinders Place Names</em> is a research project')
    };

    Object.assign(translations.fr, {
        // --- Titres des onglets ---
        'index-meta-title': "Les toponymes de Matthew Flinders | Flinders Place Names",
        'objet-meta-title': "Objet du projet | Flinders Place Names",
        'map-meta-title': "Carte des toponymes de Flinders | Flinders Place Names",
        'expert-meta-title': "Assistant IA | Flinders Place Names",
        'resources-meta-title': "Ressources | Flinders Place Names",
        'actors-meta-title': "Acteurs clés | Flinders Place Names",
        'maps-meta-title': "Cartes marines | Flinders Place Names",
        'ships-meta-title': "Les navires | Flinders Place Names",
        'glossary-meta-title': "Glossaire des termes | Flinders Place Names",
        'technologies-meta-title': "Les technologies | Flinders Place Names",
        'anecdotes-meta-title': "Anecdotes | Flinders Place Names",
        'methodology-meta-title': "Objectifs et méthodologie | Flinders Place Names",
        'findings-meta-title': "Enseignements | Flinders Place Names",
        'sitemap-meta-title': "Structure du site | Flinders Place Names",
        'presentation-meta-title': "À propos | Flinders Place Names",
        'author-meta-title': "L'auteure | Flinders Place Names",
        'supporters-meta-title': "Soutiens du projet | Flinders Place Names",
        'contact-meta-title': "Nous contacter | Flinders Place Names",
        'legal-meta-title': "Mentions légales | Flinders Place Names",

        // --- Accueil ---
        'fl-hero-title': "Les toponymes de Matthew&nbsp;Flinders",
        'fl-hero-audio-src': "data/intro_flinders_fr.m4a",
        'fl-hero-subtitle': "Les noms donnés par Matthew Flinders le long des côtes australiennes (1795-1803)",
        'fl-intro-title': "Introduction",
        'fl-intro-subtitle': "Un navigateur et sa nomenclature",
        'fl-intro-p1': "Entre 1795 et 1803, le navigateur britannique Matthew Flinders (1774-1814) a donné près de 350 noms aux caps, baies, îles et détroits des côtes australiennes. La plupart figurent encore sur les cartes d'aujourd'hui.",
        'fl-intro-p2': "Ces noms sont nés d'un travail de levé : chaque cap relevé au compas, chaque sonde jetée, chaque latitude observée à midi devait trouver sa place sur une carte que d'autres marins pourraient suivre après lui. Nommer, pour Flinders, c'était d'abord rendre une côte utilisable.",
        'fl-intro-p3': "Ce site suit ses campagnes successives, des petites embarcations de ses débuts jusqu'à la circumnavigation de l'<em>Investigator</em>, et présente pour chaque nom les circonstances de son attribution, ce qu'il commémore et ce que les journaux de bord en disent.",
        'fl-early-title': "Les années d'apprentissage (1795-1799)",
        'fl-early-subtitle': "<em>Reliance</em>, <em>Tom Thumb</em>, <em>Francis</em> et <em>Norfolk</em>",
        'fl-early-h-tom': "Le <em>Tom Thumb</em>, un canot de huit pieds",
        'fl-early-p1': "Arrivé à Port Jackson en septembre 1795 sur le <em>Reliance</em>, le jeune Flinders se lie avec le chirurgien du bord, George Bass, lui aussi originaire du Lincolnshire. Sur un canot d'à peine 2,5 mètres, le <em>Tom Thumb</em>, ils remontent la Georges River (1795), puis longent la côte au sud de Sydney jusqu'au lac Illawarra (1796).",
        'fl-early-h-norfolk': "Le détroit et l'île",
        'fl-early-p2': "En 1798, sur la goélette <em>Francis</em>, Flinders reconnaît les îles Furneaux, où s'est échoué le <em>Sydney Cove</em>. La même année, le gouverneur Hunter lui confie le sloop <em>Norfolk</em> : avec Bass, il fait le tour de la Terre de Van Diemen d'octobre 1798 à janvier 1799 et établit qu'un détroit la sépare du continent. Sur sa proposition, ce passage reçoit le nom de Bass Strait.",
        'fl-early-p3': "En 1799, toujours sur le <em>Norfolk</em>, il remonte la côte jusqu'à Moreton Bay et Hervey Bay, accompagné de Bungaree, un homme de Broken Bay qui le suivra encore sur l'<em>Investigator</em>.",
        'fl-pj-title': "Port Jackson",
        'fl-pj-caption': "<em>View of Port Jackson, taken from the South Head</em>. Dessin de William Westall, gravé pour l'atlas de <em>A Voyage to Terra Australis</em> (Londres, 1814). C'est de Port Jackson que partirent toutes les campagnes de Flinders sur les côtes australiennes.",
        'fl-pj-source': "Source : <a href=\"https://commons.wikimedia.org/wiki/File:View_of_Port_Jackson,_taken_from_the_South_Head_from_A_Voyage_to_Terra_Australis_(1814)_by_Matthew_Flinders.jpg\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a> (domaine public)",
        'fl-inv-title': "Le voyage de l'<em>Investigator</em> (1801-1803)",
        'fl-inv-subtitle': "<em>General Chart of Terra Australis or Australia</em>, 1814",
        'fl-inv-h1': "Achever la découverte d'un continent",
        'fl-inv-p1': "Parti de Spithead le 18 juillet 1801, l'<em>Investigator</em> atteint le cap Leeuwin le 6 décembre. Flinders lève alors toute la côte sud, encore inconnue des Européens : l'archipel de Nuyts, le golfe Spencer, l'île Kangaroo et le golfe Saint-Vincent.",
        'fl-inv-p2': "Après une escale à Port Jackson, il remonte la côte est, franchit la Grande Barrière et le détroit de Torres, puis lève le golfe de Carpentarie. Le navire, pourri, l'oblige à rentrer par l'ouest et le sud : le 9 juin 1803, il achève à Sydney la première circumnavigation de l'Australie. Le voyage lui fait attribuer quelque 260 noms.",
        'fl-inv-h2': "Encounter Bay",
        'fl-inv-p3': "Le 8 avril 1802, l'<em>Investigator</em> croise le <em>Géographe</em> de Nicolas Baudin. Les deux commandants échangent leurs observations, alors même que leurs pays sont en guerre. Flinders donne au lieu le nom d'Encounter Bay, la baie de la Rencontre.",
        'fl-pellew-title': "L'archipel Sir Edward Pellew",
        'fl-pellew-caption': "<em>View in Sir Edward Pellew's Group, Gulph of Carpentaria</em>. Dessin de William Westall, gravé par John Pye pour l'atlas de <em>A Voyage to Terra Australis</em> (1814). Flinders nomma cet archipel en l'honneur de l'amiral Edward Pellew en décembre 1802.",
        'fl-pellew-source': "Source : <a href=\"https://commons.wikimedia.org/wiki/File:A_Voyage_to_Terra_Australis_-_View_in_Sir_Edward_Pellew%27s_Group%E2%80%94Gulph_of_Carpentaria.png\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a> (domaine public)",
        'fl-wreck-title': "Naufrage, captivité et publication",
        'fl-wreck-h1': "Wreck Reef",
        'fl-wreck-p1': "L'<em>Investigator</em> condamné, Flinders embarque comme passager sur le <em>Porpoise</em> pour rentrer en Angleterre. Le 17 août 1803, le navire et le <em>Cato</em> qui l'accompagne se brisent sur un récif de la mer de Corail. Flinders regagne Sydney en canot, sur plus de 1 200 kilomètres, et revient chercher les naufragés.",
        'fl-wreck-h2': "Six ans à l'île de France",
        'fl-wreck-p2': "Reparti sur la petite goélette <em>Cumberland</em>, il doit relâcher à l'île de France (Maurice) en décembre 1803. Le gouverneur Decaen le soupçonne d'espionnage et le retient jusqu'en juin 1810. Flinders y met ses cartes au net et y rédige une partie de son récit.",
        'fl-wreck-h3': "<em>Terra Australis</em>, ou Australie",
        'fl-wreck-p3': "<em>A Voyage to Terra Australis</em> paraît à Londres le 18 juillet 1814, avec son atlas. Flinders y propose le nom d'<em>Australia</em>, que l'Amirauté avait refusé pour le titre. Il meurt le lendemain, le 19 juillet 1814, à quarante ans.",
        'fl-malay-title': "Malay Road",
        'fl-malay-caption': "<em>View of Malay Road, from Pobassoo's Island</em>. Dessin de William Westall, gravé par Samuel Middiman pour l'atlas de 1814. En février 1803, Flinders rencontre ici une flotte de pêcheurs de trépang venus de Makassar, menée par Pobassoo, dont il donne le nom à l'île.",
        'fl-malay-source': "Source : <a href=\"https://commons.wikimedia.org/wiki/File:A_Voyage_to_Terra_Australis_-_View_of_Malay_Road,_from_Pobassoo%27s_Island.png\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a> (domaine public)",
        'fl-why-title': "Pourquoi s'intéresser aux toponymes de Flinders",
        'fl-why-p1': "Les noms donnés par Flinders forment l'une des couches les plus durables de la toponymie australienne : la quasi-totalité est encore en usage. Ils dessinent une géographie familière à des millions d'Australiens, du cap Catastrophe à Port Lincoln, du golfe Spencer à l'île Kangaroo.",
        'fl-why-p2': "Ils racontent aussi un monde : celui de l'Amirauté et de ses lords, des protecteurs du voyage comme Joseph Banks, de l'équipage de l'<em>Investigator</em>, et du Lincolnshire natal de Flinders, dont les villages se retrouvent semés le long de la côte sud.",
        'fl-why-p3': "Comme toute nomenclature coloniale, la sienne a été posée sans égard pour les noms que les peuples aborigènes donnaient déjà à ces lieux. Le site les mentionne lorsqu'ils sont connus, et rappelle le rôle de guides et d'intermédiaires comme Bungaree.",
        'fl-why-p4': "Ce site prolonge <a href=\"" + SITE_FR + "\" target=\"_blank\" rel=\"noopener\">French Place Names</a>, consacré aux toponymes des expéditions françaises d'Entrecasteaux et Baudin. Les deux nomenclatures se croisent sur la côte sud, où Flinders et Baudin travaillèrent en même temps.",

        // --- Carte ---
        'map-layer-investigator': "Investigator",
        'map-layer-reliance': "Tom Thumb",
        'map-layer-francis': "Francis",
        'map-layer-norfolk': "Norfolk",
        'map-ships-title': "Navires",
        'map-aria-flinders-places': "Lieux de l'Investigator",
        'map-aria-flinders-route': "Route de l'Investigator",
        'map-aria-flinders-map': "Carte de Flinders",

        // --- Q&R ---
        'expert-info': "Cet assistant IA répond à vos questions sur les voyages de Matthew Flinders : les noms qu'il a donnés aux côtes australiennes, les routes de ses navires jour après jour, et ce que racontent ses journaux de bord. Il connaît aussi les expéditions françaises d'Entrecasteaux et Baudin, qui croisèrent sa route.",
        'expert-welcome': "Bonjour ! Je suis l'expert des voyages de Matthew Flinders. Posez-moi vos questions sur ses campagnes australiennes, du <em>Tom Thumb</em> (1795) à l'<em>Investigator</em> (1801-1803) : les noms qu'il a donnés et leur origine, les routes de ses navires jour après jour, ce que racontent son récit et son journal de navigation, ou les hommes qui l'ont accompagné. Je connais aussi les expéditions françaises d'Entrecasteaux et Baudin.",
        'expert-q1': "Pourquoi Flinders a-t-il été retenu prisonnier à l'île de France ?",
        'expert-q2': "Que se sont dit Flinders et Baudin lors de leur rencontre à Encounter Bay ?",

        // --- Objet ---
        'fl-objet-audio-title': "Les voyages de Flinders",
        'fl-objet-audio-subtitle': "Découvrez les voyages de Matthew Flinders (1795-1803) à travers ce dialogue présentant ses campagnes, ses découvertes et les noms qu'il a donnés.",
        'fl-objet-audio-src': "data/flinders_fr.m4a",
        'fl-objet-french-entry': "<a class=\"resource-primary-link\" href=\"" + SITE_FR + "\" target=\"_blank\" rel=\"noopener\">Les expéditions françaises</a>",
        'fl-objet-french-description': "<p>Les toponymes des expéditions françaises d'Entrecasteaux (1791-1794) et Baudin (1800-1804) font l'objet du site jumeau, <em>French Place Names</em> : 671 noms, les routes de la <em>Recherche</em>, de l'<em>Espérance</em>, du <em>Géographe</em> et du <em>Naturaliste</em>, et leurs journaux de bord.</p><p><a href=\"" + SITE_FR + "\" target=\"_blank\" rel=\"noopener\">frenchplacenames.au</a></p>",
        'resources-methodology-entry': "<a class=\"resource-primary-link\" href=\"methodology.html\">Objectifs et méthodologie</a>",
        'resources-methodology-description': "Objectifs du site, méthode suivie et sources du contenu.",
        'resources-findings-entry': "<a class=\"resource-primary-link\" href=\"findings.html\">Enseignements</a>",
        'resources-findings-subtitle': "Premiers enseignements tirés des quelque 350 toponymes donnés par Flinders.",
        'resources-findings-description': "Une nomenclature de marin, ce qu'elle commémore, et ce qu'il en reste aujourd'hui.",
        'about-sitemap-entry': "<a class=\"resource-primary-link\" href=\"site_map.html\">Structure du site</a>",
        'about-sitemap-subtitle': "Vue d'ensemble de la structure et de l'organisation du site.<br>Description des rubriques Accueil, Objet, Carte, Q&amp;R IA, Ressources et À propos.",

        // --- Ressources ---
        'resources-actors-subtitle': "Les hommes des voyages de Flinders",
        'resources-actors-description': "Notices biographiques de Matthew Flinders et de ceux qui ont rendu ses voyages possibles : compagnons, savants, artistes et protecteurs.",
        'resources-charts-description': "La vidéo <em>Naissance de l'Australie</em>, puis la carte générale de Flinders (1814), à explorer en haute définition.",
        'resources-journals-description': "Le récit publié de Flinders et son journal de navigation, jour après jour, côte à côte.",
        'resources-ships-subtitle': "Les navires de Flinders",
        'resources-ships-description': "Du <em>Reliance</em> à la <em>Cumberland</em>, en passant par le <em>Tom Thumb</em>, le <em>Norfolk</em> et l'<em>Investigator</em>.",
        'resources-glossary-subtitle': "Le vocabulaire de marine de Flinders",
        'resources-glossary-description': "Les termes de navigation, d'hydrographie et de vie à bord relevés dans <em>A Voyage to Terra Australis</em> et dans le journal de l'<em>Investigator</em>.",

        // --- À propos ---
        'about-author-lead': "<strong style=\"color:#111;\">Dany Bréelle</strong> est agrégée et docteur en géographie, et l’auteure des projets <em>French Place Names</em> et <em>Flinders Place Names</em>.",
        'about-supporters-subtitle': "Organisations et personnes soutenant ce projet.",
        'about-supporters-list': "<p><em>À venir.</em></p>",
        'about-supporters-page-title': "Soutiens du projet",
        'fl-supporters-placeholder': "Cette page présentera les personnes et les organisations qui soutiennent le projet <em>Flinders Place Names</em>. <em>En préparation.</em>",
        'about-sitemap-content': "<h3>Vue d'ensemble</h3><p>Le site <em>Flinders Place Names</em> présente les noms donnés par Matthew Flinders le long des côtes australiennes, de ses premières reconnaissances avec George Bass (1795) jusqu'au voyage de l'<em>Investigator</em> (1801-1803). Il se compose de six rubriques, accessibles depuis le menu : <strong>Accueil</strong>, <strong>Objet</strong>, <strong>Carte</strong>, <strong>Q&amp;R IA</strong>, <strong>Ressources</strong>, <strong>À propos</strong>.</p><h3>1. Accueil</h3><p>Un parcours illustré par les vues de William Westall : les années d'apprentissage, le voyage de l'<em>Investigator</em>, le naufrage et la captivité, et ce que disent aujourd'hui les noms de Flinders.</p><h3>2. Objet</h3><ul><li>Un dialogue audio sur les voyages de Flinders, en français et en anglais</li><li>Un renvoi vers le site jumeau consacré aux expéditions françaises</li><li><strong>Objectifs et méthodologie</strong></li><li><strong>Enseignements</strong></li><li>La présente <strong>Structure du site</strong></li></ul><h3>3. Carte interactive</h3><p>Un panneau, en haut à gauche, donne une ligne à chaque campagne de Flinders : <em>Tom Thumb</em>, <em>Francis</em>, <em>Norfolk</em> et <em>Investigator</em>. Seule cette dernière est renseignée pour l'instant ; les autres suivront. Pour l'<em>Investigator</em>, trois affichages :</p><ul><li><strong>Lieux</strong> : les toponymes donnés pendant le voyage, chacun avec sa notice</li><li><strong>Route</strong> : la trace de l'<em>Investigator</em>, du <em>Porpoise</em> et de la <em>Cumberland</em>, jour après jour, avec les extraits des journaux et un curseur temporel</li><li><strong>Carte</strong> : la carte générale de Flinders (1814), calée sur les coordonnées modernes</li></ul><h3>4. Q&amp;R IA</h3><p>Un assistant conversationnel qui répond, en français ou en anglais, aux questions sur les voyages de Flinders, à partir de la base de connaissance du projet.</p><h3>5. Ressources</h3><ul><li><strong>Acteurs clés</strong></li><li><strong>Cartes marines</strong> : la vidéo <em>Naissance de l'Australie</em> et la carte générale de Flinders</li><li><strong>Journaux de bord comparés</strong></li><li><strong>Les navires</strong></li><li><strong>Glossaire des termes</strong></li><li><strong>Les technologies</strong></li><li><strong>Anecdotes</strong></li></ul><h3>6. À propos</h3><p>Présentation de l'auteure, soutiens du projet, formulaire de contact et mentions légales.</p>"
    });

    Object.assign(translations.en, {
        // --- Tab titles ---
        'index-meta-title': "Matthew Flinders's Place Names | Flinders Place Names",
        'objet-meta-title': "Aim of the project | Flinders Place Names",
        'map-meta-title': "Map of Flinders's place names | Flinders Place Names",
        'expert-meta-title': "AI Assistant | Flinders Place Names",
        'resources-meta-title': "Resources | Flinders Place Names",
        'actors-meta-title': "Key Figures | Flinders Place Names",
        'maps-meta-title': "Nautical Charts | Flinders Place Names",
        'ships-meta-title': "Ships | Flinders Place Names",
        'glossary-meta-title': "Glossary of Terms | Flinders Place Names",
        'technologies-meta-title': "Technologies | Flinders Place Names",
        'anecdotes-meta-title': "Anecdotes | Flinders Place Names",
        'methodology-meta-title': "Objectives and Methodology | Flinders Place Names",
        'findings-meta-title': "Findings | Flinders Place Names",
        'sitemap-meta-title': "Site Structure | Flinders Place Names",
        'presentation-meta-title': "About | Flinders Place Names",
        'author-meta-title': "The Author | Flinders Place Names",
        'supporters-meta-title': "Supporters | Flinders Place Names",
        'contact-meta-title': "Contact Us | Flinders Place Names",
        'legal-meta-title': "Legal Notice | Flinders Place Names",

        // --- Home ---
        'fl-hero-title': "Flinders Place Names",
        'fl-hero-audio-src': "data/intro_flinders_en.m4a",
        'fl-hero-subtitle': "The place names given by Matthew Flinders along the Australian coast (1795–1803)",
        'fl-intro-title': "Introduction",
        'fl-intro-subtitle': "A navigator and his nomenclature",
        'fl-intro-p1': "Between 1795 and 1803 the British navigator Matthew Flinders (1774–1814) gave some 350 names to the capes, bays, islands and straits of the Australian coast. Most of them are still on the map today.",
        'fl-intro-p2': "These names grew out of survey work: every headland taken by compass, every sounding, every noon latitude had to find its place on a chart that other seamen could follow after him. For Flinders, naming was first of all a way of making a coast usable.",
        'fl-intro-p3': "This site follows his successive campaigns, from the small boats of his early years to the circumnavigation in the <em>Investigator</em>, and sets out for each name the circumstances in which it was given, what it commemorates and what the logbooks say about it.",
        'fl-early-title': "The apprenticeship years (1795–1799)",
        'fl-early-subtitle': "<em>Reliance</em>, <em>Tom Thumb</em>, <em>Francis</em> and <em>Norfolk</em>",
        'fl-early-h-tom': "<em>Tom Thumb</em>, a boat eight feet long",
        'fl-early-p1': "Arriving at Port Jackson in September 1795 aboard the <em>Reliance</em>, the young Flinders befriended the ship's surgeon, George Bass, a fellow Lincolnshire man. In a boat barely eight feet long, the <em>Tom Thumb</em>, they explored the Georges River (1795) and then the coast south of Sydney as far as Lake Illawarra (1796).",
        'fl-early-h-norfolk': "The strait and the island",
        'fl-early-p2': "In 1798, aboard the schooner <em>Francis</em>, Flinders surveyed the Furneaux Islands, where the <em>Sydney Cove</em> had been wrecked. That same year Governor Hunter gave him the sloop <em>Norfolk</em>: with Bass he sailed round Van Diemen's Land between October 1798 and January 1799, establishing that a strait divides it from the mainland. At his suggestion it was named Bass Strait.",
        'fl-early-p3': "In 1799, again in the <em>Norfolk</em>, he ran north to Moreton Bay and Hervey Bay, accompanied by Bungaree, a man from Broken Bay who would sail with him once more in the <em>Investigator</em>.",
        'fl-pj-title': "Port Jackson",
        'fl-pj-caption': "<em>View of Port Jackson, taken from the South Head</em>. Drawing by William Westall, engraved for the atlas of <em>A Voyage to Terra Australis</em> (London, 1814). Every one of Flinders's Australian campaigns set out from Port Jackson.",
        'fl-pj-source': "Source: <a href=\"https://commons.wikimedia.org/wiki/File:View_of_Port_Jackson,_taken_from_the_South_Head_from_A_Voyage_to_Terra_Australis_(1814)_by_Matthew_Flinders.jpg\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a> (public domain)",
        'fl-inv-title': "The voyage of the <em>Investigator</em> (1801–1803)",
        'fl-inv-subtitle': "<em>General Chart of Terra Australis or Australia</em>, 1814",
        'fl-inv-h1': "Completing the discovery of a continent",
        'fl-inv-p1': "Sailing from Spithead on 18 July 1801, the <em>Investigator</em> reached Cape Leeuwin on 6 December. Flinders then surveyed the whole of the south coast, still unknown to Europeans: the Nuyts Archipelago, Spencer Gulf, Kangaroo Island and Gulf St Vincent.",
        'fl-inv-p2': "After a call at Port Jackson he ran up the east coast, threaded the Great Barrier Reef and Torres Strait, and surveyed the Gulf of Carpentaria. His rotting ship forced him home by the west and south: on 9 June 1803 he completed at Sydney the first circumnavigation of Australia. The voyage produced some 260 of his names.",
        'fl-inv-h2': "Encounter Bay",
        'fl-inv-p3': "On 8 April 1802 the <em>Investigator</em> met Nicolas Baudin's <em>Géographe</em>. The two commanders exchanged their observations, although their countries were at war. Flinders named the place Encounter Bay.",
        'fl-pellew-title': "Sir Edward Pellew Group",
        'fl-pellew-caption': "<em>View in Sir Edward Pellew's Group, Gulph of Carpentaria</em>. Drawing by William Westall, engraved by John Pye for the atlas of <em>A Voyage to Terra Australis</em> (1814). Flinders named the group after Admiral Edward Pellew in December 1802.",
        'fl-pellew-source': "Source: <a href=\"https://commons.wikimedia.org/wiki/File:A_Voyage_to_Terra_Australis_-_View_in_Sir_Edward_Pellew%27s_Group%E2%80%94Gulph_of_Carpentaria.png\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a> (public domain)",
        'fl-wreck-title': "Shipwreck, captivity and publication",
        'fl-wreck-h1': "Wreck Reef",
        'fl-wreck-p1': "With the <em>Investigator</em> condemned, Flinders took passage in the <em>Porpoise</em> for England. On 17 August 1803 she and her consort the <em>Cato</em> struck a reef in the Coral Sea. Flinders sailed an open boat back to Sydney, more than 700 miles, and returned to rescue the castaways.",
        'fl-wreck-h2': "Six years on the Isle de France",
        'fl-wreck-p2': "Setting out again in the small schooner <em>Cumberland</em>, he was forced to put in at the Isle de France (Mauritius) in December 1803. Governor Decaen suspected him of spying and held him until June 1810. There Flinders drew his fair charts and wrote part of his narrative.",
        'fl-wreck-h3': "<em>Terra Australis</em>, or Australia",
        'fl-wreck-p3': "<em>A Voyage to Terra Australis</em> was published in London on 18 July 1814, with its atlas. In it Flinders proposed the name <em>Australia</em>, which the Admiralty had refused for the title. He died the next day, 19 July 1814, aged forty.",
        'fl-malay-title': "Malay Road",
        'fl-malay-caption': "<em>View of Malay Road, from Pobassoo's Island</em>. Drawing by William Westall, engraved by Samuel Middiman for the 1814 atlas. In February 1803 Flinders met here a fleet of trepang fishermen from Makassar, led by Pobassoo, after whom he named the island.",
        'fl-malay-source': "Source: <a href=\"https://commons.wikimedia.org/wiki/File:A_Voyage_to_Terra_Australis_-_View_of_Malay_Road,_from_Pobassoo%27s_Island.png\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a> (public domain)",
        'fl-why-title': "Why Flinders's place names matter",
        'fl-why-p1': "The names given by Flinders form one of the most enduring layers of Australian toponymy: almost all of them are still in use. They shape a geography familiar to millions of Australians, from Cape Catastrophe to Port Lincoln, from Spencer Gulf to Kangaroo Island.",
        'fl-why-p2': "They also tell of a world: that of the Admiralty and its lords, of patrons of the voyage such as Joseph Banks, of the <em>Investigator</em>'s company, and of Flinders's native Lincolnshire, whose villages are scattered along the south coast.",
        'fl-why-p3': "Like every colonial nomenclature, his was laid down without regard for the names Aboriginal peoples already gave these places. The site records them where they are known, and recalls the part played by guides and intermediaries such as Bungaree.",
        'fl-why-p4': "This site extends <a href=\"" + SITE_FR + "\" target=\"_blank\" rel=\"noopener\">French Place Names</a>, devoted to the place names of the French expeditions of d'Entrecasteaux and Baudin. The two nomenclatures meet on the south coast, where Flinders and Baudin were at work at the same time.",

        // --- Map ---
        'map-layer-investigator': "Investigator",
        'map-layer-reliance': "Tom Thumb",
        'map-layer-francis': "Francis",
        'map-layer-norfolk': "Norfolk",
        'map-ships-title': "Ships",
        'map-aria-flinders-places': "Investigator places",
        'map-aria-flinders-route': "Investigator route",
        'map-aria-flinders-map': "Flinders's chart",

        // --- Q&A ---
        'expert-info': "This AI assistant answers your questions about Matthew Flinders's voyages: the names he gave to the Australian coast, his ships' routes day by day, and what his logbooks tell. It also knows the French expeditions of d'Entrecasteaux and Baudin, which crossed his path.",
        'expert-welcome': "Hello! I'm the expert on Matthew Flinders's voyages. Ask me about his Australian campaigns, from the <em>Tom Thumb</em> (1795) to the <em>Investigator</em> (1801–1803): the names he gave and where they come from, his ships' routes day by day, what his narrative and his logbook tell, or the men who sailed with him. I also know the French expeditions of d'Entrecasteaux and Baudin.",
        'expert-q1': "Why was Flinders held prisoner on the Isle de France?",
        'expert-q2': "What did Flinders and Baudin say to each other when they met at Encounter Bay?",

        // --- Aim ---
        'fl-objet-audio-title': "Flinders's voyages",
        'fl-objet-audio-subtitle': "Discover Matthew Flinders's voyages (1795–1803) through this dialogue presenting his campaigns, his discoveries and the names he gave.",
        'fl-objet-audio-src': "data/flinders_en.m4a",
        'fl-objet-french-entry': "<a class=\"resource-primary-link\" href=\"" + SITE_FR + "\" target=\"_blank\" rel=\"noopener\">The French expeditions</a>",
        'fl-objet-french-description': "<p>The place names of the French expeditions of d'Entrecasteaux (1791–1794) and Baudin (1800–1804) have their own companion site, <em>French Place Names</em>: 671 names, the routes of the <em>Recherche</em>, <em>Espérance</em>, <em>Géographe</em> and <em>Naturaliste</em>, and their logbooks.</p><p><a href=\"" + SITE_FR + "\" target=\"_blank\" rel=\"noopener\">frenchplacenames.au</a></p>",
        'resources-methodology-entry': "<a class=\"resource-primary-link\" href=\"methodology.html\">Objectives and Methodology</a>",
        'resources-methodology-description': "The aims of the site, the method followed and the sources of its content.",
        'resources-findings-entry': "<a class=\"resource-primary-link\" href=\"findings.html\">Findings</a>",
        'resources-findings-subtitle': "First findings from the 350 or so place names given by Flinders.",
        'resources-findings-description': "A seaman's nomenclature, what it commemorates, and what remains of it today.",
        'about-sitemap-entry': "<a class=\"resource-primary-link\" href=\"site_map.html\">Site Structure</a>",
        'about-sitemap-subtitle': "Overview of the website structure and organisation.<br>Description of the Home, Aim, Map, AI Q&amp;A, Resources and About sections.",

        // --- Resources ---
        'resources-actors-subtitle': "The men of Flinders's voyages",
        'resources-actors-description': "Biographical notes on Matthew Flinders and on those who made his voyages possible: companions, scientists, artists and patrons.",
        'resources-charts-description': "The video <em>The Birth of Australia</em>, then Flinders's general chart (1814), to explore in high definition.",
        'resources-journals-description': "Flinders's published narrative and his logbook, day by day, side by side.",
        'resources-ships-subtitle': "Flinders's ships",
        'resources-ships-description': "From the <em>Reliance</em> to the <em>Cumberland</em>, by way of the <em>Tom Thumb</em>, the <em>Norfolk</em> and the <em>Investigator</em>.",
        'resources-glossary-subtitle': "Flinders's seafaring vocabulary",
        'resources-glossary-description': "Terms of navigation, hydrography and shipboard life found in <em>A Voyage to Terra Australis</em> and in the <em>Investigator</em>'s log.",

        // --- About ---
        'about-author-lead': "<strong style=\"color:#111;\">Dany Bréelle</strong> holds the French agrégation and a PhD in geography and is the author of the <em>French Place Names</em> and <em>Flinders Place Names</em> projects.",
        'about-supporters-subtitle': "Organisations and people supporting this project.",
        'about-supporters-list': "<p><em>Coming soon.</em></p>",
        'about-supporters-page-title': "Supporters",
        'fl-supporters-placeholder': "This page will present the people and organisations supporting the <em>Flinders Place Names</em> project. <em>In preparation.</em>",
        'about-sitemap-content': "<h3>Overview</h3><p>The <em>Flinders Place Names</em> website presents the names given by Matthew Flinders along the Australian coast, from his first surveys with George Bass (1795) to the voyage of the <em>Investigator</em> (1801–1803). It comprises six sections, reached from the menu: <strong>Home</strong>, <strong>Aim</strong>, <strong>Map</strong>, <strong>AI Q&amp;A</strong>, <strong>Resources</strong>, <strong>About</strong>.</p><h3>1. Home</h3><p>An illustrated journey through William Westall's views: the apprenticeship years, the voyage of the <em>Investigator</em>, shipwreck and captivity, and what Flinders's names tell us today.</p><h3>2. Aim</h3><ul><li>An audio dialogue on Flinders's voyages, in English and French</li><li>A link to the companion site on the French expeditions</li><li><strong>Objectives and Methodology</strong></li><li><strong>Findings</strong></li><li>This <strong>Site Structure</strong> page</li></ul><h3>3. Interactive Map</h3><p>A panel at the top left gives a row to each of Flinders's campaigns: <em>Tom Thumb</em>, <em>Francis</em>, <em>Norfolk</em> and <em>Investigator</em>. Only the last is filled in so far; the others will follow. For the <em>Investigator</em>, three displays:</p><ul><li><strong>Places</strong>: the names given during the voyage, each with its entry</li><li><strong>Route</strong>: the tracks of the <em>Investigator</em>, <em>Porpoise</em> and <em>Cumberland</em>, day by day, with extracts from the journals and a time slider</li><li><strong>Map</strong>: Flinders's general chart (1814), georeferenced to modern coordinates</li></ul><h3>4. AI Q&amp;A</h3><p>A conversational assistant that answers questions on Flinders's voyages, in English or French, from the project's knowledge base.</p><h3>5. Resources</h3><ul><li><strong>Key Figures</strong></li><li><strong>Nautical charts</strong>: the video <em>The Birth of Australia</em> and Flinders's general chart</li><li><strong>Ships' journals compared</strong></li><li><strong>Ships</strong></li><li><strong>Glossary of Terms</strong></li><li><strong>Technologies</strong></li><li><strong>Anecdotes</strong></li></ul><h3>6. About</h3><p>The author, the project's supporters, the contact form and the legal notice.</p>"
    });

    // Mentions legales : celles du site d'origine, au nom de ce site-ci.
    translations.fr['about-legal-content'] = legal.fr;
    translations.en['about-legal-content'] = legal.en;
})();
