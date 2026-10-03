# Flinders Place Names

Les toponymes donnés par Matthew Flinders le long des côtes australiennes (1795-1803).
Site jumeau de [French Place Names](https://www.frenchplacenames.au/), dont il est issu
(copie du 3 octobre 2026) ; domaine prévu : https://flindersplacenames.au/

## Ce qui diffère du site d'origine

- `js/translations-flinders.js` se charge après `js/translations.js` et en remplace
  les textes propres à ce site (accueil, objet, carte, Q&R, ressources, à propos).
- `map.html` : une ligne par campagne (Tom Thumb, Francis, Norfolk, Investigator) ;
  seule l'Investigator est active. `data/flinders.json` contient déjà les noms des
  autres campagnes : le filtre `filtre` de `expeditionConfigs.flinders` les écarte.
- `glossary.html` : seuls les termes de Flinders ; `python3 scripts/glossaire_nautique.py`
  le régénère depuis `docs/glossaire-nautique.en.md` et `docs/glossaire-nautique-flinders.fr.md`.
- Images propres au site : `img/flinders/` (crédits dans `img/flinders/credits.json`).
- L'assistant Q&R garde la base de connaissance complète ; les lieux et journées des
  expéditions françaises renvoient vers la carte de frenchplacenames.au.

## Lancer en local

    python3 -m http.server 8767        # pages statiques
    npm install && npm run dev         # avec l'assistant (api/), port 3000
