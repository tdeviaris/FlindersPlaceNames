// js/carte-config.js -- configuration de la carte du site Flinders Place Names.
// Le moteur (commun/carte/carte.js, depot toponymes-commun) lit cet objet :
// il dit quelles expeditions et quelles routes afficher, et construit le
// panneau d'apres `lignes`. Voir commun/README.md.
window.CARTE_CONFIG = {
    panneauAria: 'Campagnes de Flinders',
    expeditions: {
        flinders: {
            label: 'Investigator',
            // flinders.json tient deja les noms de toutes les campagnes ; seuls
            // ceux de l'Investigator s'affichent tant que les autres lignes du
            // panneau restent « a venir ».
            filtre: (p) => p.navire === "l'Investigator"
        }
    },
    parcours: { flinders: {} },
    cartesSelecteur: [
        { nom: 'flinders', libelle: 'Flinders 1814' }
    ],
    remarquables: {
        F: { couche: 'flinders', route: 'toggle-flinders-parcours' }
    },
    // Une ligne par campagne de Flinders. Seule l'Investigator est renseignee
    // pour l'instant ; les autres gardent leur place, cases grisees.
    lignes: [
        { avenir: true, classe: 'toggle-reliance', couleur: '#8a6d3b', nom: 'Tom Thumb', nomI18n: 'map-layer-reliance' },
        { avenir: true, classe: 'toggle-francis', couleur: '#5c7f8f', nom: 'Francis', nomI18n: 'map-layer-francis' },
        { avenir: true, classe: 'toggle-norfolk', couleur: '#6b5b95', nom: 'Norfolk', nomI18n: 'map-layer-norfolk' },
        {
            cle: 'flinders', classe: 'toggle-flinders', couleur: '#c2255c',
            nom: 'Investigator', nomI18n: 'map-layer-investigator',
            lieux: { id: 'toggle-flinders', coche: true, ariaI18n: 'map-aria-flinders-places', aria: "Lieux de l'Investigator" },
            route: { id: 'toggle-flinders-parcours', parcours: 'flinders', nomFrise: 'Investigator',
                     ariaI18n: 'map-aria-flinders-route', aria: "Route de l'Investigator" },
            carte: { id: 'toggle-flinders-carte', nom: 'flinders', ariaI18n: 'map-aria-flinders-map', aria: 'Carte de Flinders' },
            navires: { bloc: 'ship-block-flinders', liste: 'ship-list-flinders', titre: 'Navires', titreI18n: 'map-ships-title' }
        }
    ]
};
