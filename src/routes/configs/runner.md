<script>
  import Code from "$lib/Code.svelte"
</script>

## Configuration du runner

Les exemples de configuration suivant sont fait avec les runners de gitlab. S'il doit être possible d'utiliser ce projet avec les runners d'autres plateformes, certaines adaptations devront surement être faite.

<h3 id="defaut">Configuration du runner</h3>

Tout d'abord, il faut installer un runner GitLab, plusieurs méthodes sont possibles (cf [la documentation](https://docs.gitlab.com/runner/install/))  
Une fois installer il faut configurer un runner comme suit : 

<Code>
```
concurrent = 1
check_interval = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "pagiel-runner"
  url = "https://gitlab.com"
  token = "token"
  executor = "shell"
```
</Code>

Il est important que le runner ne puisse executer qu'un job à la fois, le projet ne tolère pas de multiples tests en simultané.

La commande suivante permet d'enregistrer un runner avec cette configuration, mais attention les paramettres `concurrent` et `check_interval` ne sont pas accessible en ligne de commande, il faudra les éditer manuellement dans le fichier de configuration.
<Code>
```
sudo gitlab-runner register \
    --name "pagiel-runner" \
    --url "https://gitlab.com/" \
    --registration-token "token" \
    --executor "shell"
```
</Code>

<h3 id="jobs">Configuration des jobs</h3>

Voici un exemple de script d'une pipeline gitlab
<Code>
```
pagiel:
  stage: pagiel
  tags: 
    - pagiel
  variables:
    GIT_STRATEGY: none
  script:
    - initialDirectory=$(pwd)
    - cd $PROJECT_DIRECTORY
    - echo "$URLS" > ./input/urls.yaml
    - ./pagiel.sh
    - cp reports/reports/report.xml $initialDirectory
  artifacts:
    when: always
    reports:
      junit: 
        - report.xml
```
</Code>
Où :
 - `stage: pagiel` est un stage personnalisé ;
 - Le tag `pagiel` est le tag du runner ;
 - Le `cd` en début de script met le runner dans le répertoire du projet ;
 - On stocke dans une variable le dossier du runner afin de pouvoir y copier le rapport.
 - $URL contient le fichier yaml à utiliser
 - $PROJECT_DIRECTORY est le dossier dans lequel est installé le projet sur la machine du runner

Toutefois, certaine partie de la déclaration du job peuvent être redondantes sur un projet ou une organisation. Il est possible d'utiliser l'extension de job pour gagner du temps sur la déclaration des jobs.
<Code>
```
.pagiel:
  tags: 
    - pagiel
  variables:
    GIT_STRATEGY: none
  script:
    - initialPath=$(pwd)
    - cd $PROJECT_DIRECTORY
    - echo "$URLS" > ./input/urls.yaml
    - ./pagiel.sh
    - cp reports/reports/report.xml $initialPath
  artifacts:
    when: always
    reports:
      junit: 
        - report.xml

pagiel:
  stage: pagiel
  extends: .pagiel
  rules: 
    - if: $CI_COMMIT_BRANCH == "master"
      variables:
        URLS: "$URLS_MASTER"
    - variables: 
        URLS: "$URLS_OTHER"
```
</Code>
Toutes les configurations particulière au projet ont été rassemblées dans un template de jobs, et les `rules` servent à écraser la variable URLS. Ce template n'a pas besoin d'être dans le même fichier que le job, il peut être dans un répertoire public pour l'organisation. Le template peut aussi être décliner avec les différentes configurations imaginable (avec ou sans PowerAPI, avec ou sans rapport, etc.).

Dans le cas ou le script de génération de rapport est configuré pour renvoyer un code de sortie différent de 0 s'il y a des indicateurs hors normes (variable EXIT_CODE_FAIL du fichier .env), il faut adapter légèrement le script du job pour copier le rapport dans le dossier du runner quoi qu'il arrive.
<Code>
```
.pagiel:
  ...
  script:
    - initialPath=$(pwd)
    - cd $PROJECT_DIRECTORY
    - echo "$URLS" > ./input/urls.yaml
    - RESULT=0
    - ./pagiel.sh || RESULT=$?
    - mv reports/reports/report.xml $initialPath
    - exit $RESULT
  ...
```
</Code>

Toutes les options restent accessible avec l'utilisation via runner.