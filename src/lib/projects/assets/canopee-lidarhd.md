Les données [LiDAR HD](https://geoservices.ign.fr/lidarhd) de l’IGN permettent, au moins pour les
endroits où l’acquisition n’a pas été faite en hiver, d’extraire de façon très fine
la canopée d’une commune, et donc de calculer un indice de canopée précis.

Ici, les données IGN ont été retraitées en R (à l’aide du paquet
[lidR](https://r-lidar.github.io/lidRbook/index.html)) afin de ne conserver que la végétation de
plus de 3 m.
