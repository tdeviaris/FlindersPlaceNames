# Scripts du site Flinders Place Names

Le site Flinders est propriétaire des données Flinders : c'est ici qu'elles se produisent et se corrigent.

- `journal_flinders.py` : tire du récit publié (1814) le parcours de l'Investigator, du Porpoise et de la Cumberland.
- `journal_navigation_flinders.py` : verse dans les fiches de parcours le journal de navigation (SLNSW).
- `calage_flinders.py` : cale chaque journée sur la carte générale de 1814 (`map.html?calage=flinders`).
- `carte_flinders.py`, `integre_carte_flinders.py` : géoréférencement de la carte de 1814 et relevés qu'elle porte.
- `visuels_flinders.py`, `applique_visuels.py`, `hakluyt_visuels.py`, `vide_visuels.gs` : visuels des toponymes.
- `flinders_vers_classeur.py` : prépare l'onglet « Flinders » du classeur Toponymes.
- `glossaire_nautique.py` : porte le glossaire (termes de Flinders) dans `glossary.html`.
- `maj_commun.sh` : ramène le sous-module `commun/` à sa dernière version.

Outils communs aux deux sites, à lancer depuis la racine du site : `commun/scripts/` (serveur local
`npm run dev`, trait de côte, traduction des journaux, images, et le script du classeur Google
`Toponyms_update.gs`).

Le site French Place Names garde une copie en lecture de certaines données Flinders (serveur MCP, base de
connaissance de l'assistant) : après une modification ici, lancer `scripts/synchro_flinders.sh` dans
`../FrenchNamesAustralia`. Ce même script rapporte ici `data/journaux_reperes.json`, calculé là-bas.
