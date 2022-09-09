## Configurations

Il est possible de configurer PAGIEL pour fonctionner avec plusieurs achitectures différentes en fonction des besoins.

<h3 id="complete">Configuration complète (par défaut)</h3>

Par défaut PAGIEL est configurer pour utiliser les quatres outils de test en étant hébergé sur un serveur indépendant. Dans ce cas, l'installation est autonome. PowerAPI, pour récupérer la consommation des conteneurs, a besoin de certaine condition pour fonctionner : il se branche sur l'API RAPL des processeurs Intel, cette API est disponible sur les ditributions Linux. Pour lire dans les registres, le conteneur "powerapi-hwpc-sensor" doit être lancé sur avec des permission administrateur. 

Pour installer PAGIEL ainsi il suffit de:
- Cloner le répo en ligne
- Copier le fichier `.env.exemple` vers le fichier `.env`.
- Changer les couples nom d'utilisateur/mot de passe.
- Lancer `docker-compose up`, cela lancera les conteneurs influxdb et grafana qui sont prévu pour fonctionner en permanance.
- Se connecter à influxdb (`http://localhost:8086` par défault) pour récuperer l'id de l'organisation (dans l'url suivant la connexion `http://localhost:8086/orgs/<org id>`) et le token de connection (data -> API Token), et renseigner les variables d'environnement correspondantes
- Executer le script setup.sh, il va créer certains fichiers de configurations nécéssaire pour les autres conteneurs à partir du fichier `.env` et installer les sous modules.

<h3 id="externe">Configuration avec les conteneurs permanent externe</h3>

Dans le cas ou la configuration de PAGIEL est prévue pour être lancé depuis un serveur différent de celui ou seront les modules permanent (Influxdb et Grafana), l'installation est plus simple. Après le clonage du projet, il suffit de configurer le fichier `.env` avec les valeurs correspondantes au serveur sur lequel est hébergé les autres services. Il conviendra aussi de supprimer les dépendances vers le service influxdb des conteneurs `sitespeed`, `eco-index`, `smartwatts`, `yellowlabtools` et `report`. Pour un installation extérieur de grafana, les dashboards se trouvent dans le dossier `graafana-providing` et il conviendra de mettre à jour les datasources pour refléter les changements dans l'installation.

<h3 id="powerapi">Configuration sans PowerAPI</h3>

Pour ne pas utiliser PowerAPI il suffit d'utiliser l'option `-P` lors du lancement du projet. Aucune étape d'installation dédié n'est nécessaire.