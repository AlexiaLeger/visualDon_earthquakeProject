# visualDon_earthquakeProject

## Contexte : d'où viennent les données, qui les a créées et dans quel contexte
https://www.usgs.gov/programs/earthquake-hazards/science/20-largest-earthquakes-world
U.S. Geological Survey
L'USGS surveille les tremblements de terre et en rend compte, évalue les impacts et les risques sismiques et mène des recherches ciblées sur les causes et les effets des tremblements de terre. Ils entreprennent ces activités dans le cadre du programme national de réduction des risques sismiques (NEHRP), un partenariat de quatre agences établi par le Congrès.

## Description Comment sont structurées les données ? Parler du format, des attributs et du type de données
Format de base : Tableau HTML
Nous l'avons repris et intégrer dans un fichier Excel, puis nous l'avons transformé en JSON via https://products.aspose.app/cells/fr/conversion/excel-to-json.
Format exploitable : fichier Excel/Json
Attribut : il y a un attribut lien qui redirige les noms des lieux vers la fiche des tremblements de terre.
Types des données : int, float, string, date, time, degrés minutes secondes (lat/long).
Nous avons changé les degrés minutes secondes en degrés décimaux afin de les utiliser sur une globe. Nous avons réalisé la conversion grâce à l'outil : https://www.coordonnees-gps.fr/conversion-coordonnees-gps


## But: qu'est-ce que vous voulez découvrir ? Des tendances ? Vous voulez explorer ou expliquer?
Avec ce projet, nous voulons informer, visualiser et explorer les tremblements de terre les plus fort dans le monde. Les tremblements de terre seront affichés sur un globe. Nous voulons intégrer une visualisation de la magnitude, d'une manière ou d'une autre.
Nous souhaitons intégrer des témoignages, anecdotes, photos, articles, etc. pour se projetter dans l'évènement.

## Références: Qui d'autre dans le web ou dans la recherche a utilisé ces données ? Dans quel but ?
Wikipedia : https://fr.wikipedia.org/wiki/Listes_de_s%C3%A9ismes
But : lister les séismes

Bristol Petitions : What Are The 20 Largest Earthquakes Ever Recorded
https://www.bristolpetitions.com/what-are-the-20-largest-earthquakes-ever-recorded/
But : Questions&Réponses sur les tremblements de terre

maritzareyes : https://maritzareyes.github.io/leaflet-lab1/
But : Représenter les tremblements de terr sur une map 2D, avec timeline et magnitude statique

Storymap : https://storymaps.arcgis.com/stories/6be3461def7b4028be0604802baf4e04
But : site interactif qui présente les tremblements de terre


