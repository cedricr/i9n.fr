Cartes d’ensoleillement réalisées à partir d’un modèle numérique de surface :
chaque valeur de pixel de l’image représente le pourcentage d’illumination : blanc, le point est en
permanence au soleil, noir, en permanence à l’ombre. Ces images ont été réalisées en simulant les
ombrages toutes les 30 minutes, puis en calculant le pourcentage de l’état (ombre ou éclairé) sur
toutes ces images intermédiaires.

Réalisé grâce :
- au “[modèles numériques de surfaces
correlés](https://geoservices.ign.fr/modeles-numeriques-de-surfaces-correles)” de l’IGN (Institut
national de l'information géographique et forestière), qui propose un MNS très récent à une échelle
de 50 cm (!)
- au plugin [UMEP](https://umep-docs.readthedocs.io/en/latest/) pour #QGIS (Urban Multi-scale
Environmental Predictor), qui propose de multiples algorithmes dédiés aux estimations de climat
urbain.
