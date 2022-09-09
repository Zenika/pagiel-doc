<script>
  import Code from "$lib/Code.svelte"
</script>

## Utilisation

<h3 id="defaut">Script pagiel.sh</h3>

Le script `pagiel.sh` permet de lancer le projet.

Ce script dispose de plusieurs options : 

| Option | Description |
|--------|-------------|
| `-P` | Désactive PowerAPI pour le test |
| `-G` | Désactive GreenIt Analysis CLI pour le test |
| `-S` | Désactive Sitespeed pour le test |
| `-Y` | Désactive Yellow Lab Tools pour le test |
| `-F` | Désactive Robot Framework pour le test |
| `-R` | Ne pas générer de rapport pour le test |
| `-d` | Tester une simple image de container docker |
| `-D` | Tester un fichier docker-compose |
| `--docker-front-container` | Nom du container front a tester (défaut test-container) |
| `--docker-port` | Port sur lequel se connecter pour le front (défaut 80) |
| `--docker-image` | Nom de l'image à tester (obligatoire avec -d, inutile sinon) |
| `--docker-compose-file` | Nom du fichier docker-compose à tester (obligatoire avec -D, inutile sinon) |

Par défaut le script lance des test avec tous les sous projets open-source configurés. La plupart des options servent à ignorer certain des tests mis à disposition par la plateforme. Il est important de noter que si centains des indicateurs demandés lors de la génération d'un rapport devaient provenir de l'un des tests ignoré, la génération de rapport risque d'échouer.

<h3 id="docker-image">Test d'une image docker</h3>

Il est possible de fournir à PAGIEL une image docker à tester plutôt qu'une URL d'un site déjà déployé. Il faut dans ce cas utilisé les options `-d`, `--docker-image` avec l'image à tester et `--docker-port` avec le port sur lequel se trouvera le front-end une fois le conteneur démaré.
Exemple : 
<Code>
```
./pagiel.sh -d --docker-image nginx --docker-port 80
```
</Code> 

<h3 id="docker-compose">Test d'un docker compose</h3>

Il est aussi possible de tester un fichier docker-compose complet. Avec les options `-D`, `--docker-compose-file` indiquant le nom du fichier, `--docker-front-container` indiquant le nom du container exposant la partie front-end, `docker-port` avec le port sur lequel le front-end est exposé.
Exemple : 

<Code>
```
./pagiel.sh -D --docker-compose-file docker-pagiel.yml --docker-front-container front --docker-port 3000
```
</Code>

Il y a toutefois quelques contrainte sur le fichier docker-compose : celui-ci doit démarrer avec un simple `docker compose up`, et le container exposant le front-end doit être sur le réseau par défaut, celui-ci étant modifié au début du test pour le connecté au réseau utilisé par PAGIEL.