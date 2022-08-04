## Indicateurs

PAGIEL remonte un grand nombre d'indicateurs sur plusieurs catégories différentes. Chacun de ces indicateurs peut être plus ou moins pertinent selon le projet et l'installation sur laquelle il est déployé pour être testé. Bien qu'aucune règle générale ne puisse être déterminé, certains indicateurs ont des valeurs conseillées. Ces valeurs proviennent pour la plupart des recommandations des [**115 bonnes pratiques**](https://github.com/cnumr/best-practices) de la communauté greenit. 

<h3 id="assets">Catégorie `assets`</h3>

Cette catégorie remonte des informations sur les fichiers javascript, css, et json utilisés par la page. On peut y retrouver des informations sur le nombre et le volume de fichier chargé par la page, comment ces fichiers ont été requêtés (cookie, etc.). Ces indicateurs sont utiles pour connaître 

<h3 id="caching">Catégorie `caching`</h3>

Cette catégorie remonte des indicateurs sur la configuration du cache des fichiers statiques sur le serveur web. On peut mesurer le nombre de fichiers qui ont été rechargés lors du rechargement de la page, ainsi que les fichiers pour lesquels un cache plus long serait envisageable. Ces indicateurs ont seulement un intérêt lors de tests sur le serveur de production.

<h3 id="compression">Catégorie `compression`</h3>

Cette catégorie remonte des indicateurs sur la compression utilisé sur les fichiers reçus. Cela permet principalement de connaître le volume total de fichier reçu compressé et décompressé, ainsi que quels fichiers ne sont pas compressés.

<h3 id="cookies">Catégorie `cookies`</h3>

Cette catégorie remonte des indicateurs sur les cookies échangés avec les serveurs lors du chargement de la page. 

<h3 id="css">Catégorie `css`</h3>

Cette catégorie remonte des indicateurs sur la qualité du css utilisé dans la page. Cette partie est assez fournie, avec des informations sur le nombre et la qualité des sélecteurs utilisés, les propriétés définies, les erreurs. On peut aussi y retrouver des informations sur la responsivité de la page, comme le nombre de breakpoints et le nombre de règles 'mobile first'.

<h3 id="dom">Catégorie `DOM`</h3>

Cette catégorie remonte des indicateurs sur le DOM de la page qui est chargé. On y retrouve deux catégories d'information : une analyse du DOM affiché et une analyse des requêtes faites sur le DOM. Dans l'analyse du DOM se trouve entre autres le nombre d'iframe, le nombre total de noeuds et la profondeur maximale du DOM. Du côté des requêtes faites sur le DOM, on peut trouver le nombre d'appel au différentes fonction de requête (document.querySelector, document.getElementById, etc.). Il faut prendre en compte que, pour un projet fait avec des frameworks frontend comme React ou Vue.js, le framework a plus d'impact que le développeur sur ces requêtes.

<h3 id="domains">Catégorie `domains`</h3>

Cette catégorie remonte des indicateurs sur les domaines requêté lors du chargement de la page. On y retrouve des informations sur les requêtes effectué aux différents domaines lors du chargement de la page. Nombre moyen et médian de requêtes, nombre de domaines à requêter pour charger la page, etc.

<h3 id="eco">Catégorie `eco`</h3>

Cette catégorie remonte les indicateurs environnementaux de l'outils greenit analysis, c'est-à-dire l'écoindex de la page, l'émission de gaz à effet de serre et la consommation d'eau.

<h3 id="fonts">Catégorie `fonts`</h3>

Cette catégorie remonte des indicateurs sur les polices de caractère chargé dans la page web.

<h3 id="headers">Catégorie `headers`</h3>

Cette catégorie remonte des indicateurs sur les headers des requêtes HTTP exécutées lors du chargement de la page web. On y retrouve le nombre et le volume d'headers échanger avec les serveurs, ainsi qu'un indicateur sur la présente de réponses dont le corps serait plus léger que les headers.

<h3 id="images">Catégorie `images`</h3>

Cette catégorie remonte des indicateurs sur les images et vidéos utilisées sur la page web. On y trouve leur nombre et volume, mais aussi si certaines images sont redimensionnées dans le navigateur, ou téléchargé mais pas affiché, ou encore mal compressé.

<h3 id="jquery">Catégorie `jQuery`</h3>

Cette catégorie remonte des indicateurs sur l'utilisation de jQuery sur la page web. On peut relever la version chargée, et si plusieurs versions sont chargées, ainsi que l'appel à certaines fonctions lourdes.

<h3 id="js">Catégorie `javascript`</h3>

Cette catégorie remonte des indicateurs sur la qualité du code javascript de la page. On peut y trouver le nombre d'appels à des fonctions comme les fonctions de log (console.*) ou d'interaction avec l'utilisateur (window.alert, window.prompt, window.confirm), le nombre d'erreurs, de variable globale, et d'entrée dans le localStorage.

<h3 id="performance">Catégorie `performance`</h3>

Les performances sont divisées en deux catégories, cette première partie couvre l'affichage de la page web ainsi que les requêtes. On peut y retrouver une grande partie des informations que remonte lighthouse, comme le TTFB, le FirstVisualChange, etc.

<h3 id="performance_cpu">Catégorie `performance_cpu`</h3>

La seconde partie des performances porte sur l'usage du CPU de la machine hôte, comme la durée de tâche à exécuter, la durée des recalculs de layout, etc.

<h3 id="protocols">Catégorie `protocols`</h3>

Cette catégorie remonte des indicateurs sur les protocoles utilisés lors des requêtes. On y retrouve la version des protocoles HTTP et TLS utilisés par le domaine principal, et le nombre de domaines utilisant de vieux protocoles.

<h3 id="requests">Catégorie `requests`</h3>

Cette catégorie remonte des indicateurs sur les requêtes exécutés. On peut y retrouver le nombre de requêtes par catégorie de fichier, la latence moyenne et médiane des réponses, le nombre de requêtes nécessaire au chargement du DOM, etc.

<h3 id="other">Catégorie `other`</h3>

Dans cette catégorie figurent les indicateurs inclassables, soit est-ce que le site utilise wordpress et l'appréciation sur l'usage des boutons standards des réseaux sociaux.