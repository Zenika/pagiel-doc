## Configuration du runner

Les exemples de configuration suivant sont fait avec les runners de gitlab. S'il doit être possible d'utiliser ce projet avec d'autre runner, certaines adaptations devront surement être faite.

<h3 id="defaut">Configuration du runner</h3>

La manière la plus simple d'installer le runner est d'installer le paquet depuis les répertoires de votre gestionnaire de paquet préféré. Une fois installer il faut configurer un runner comme suis : 
```
concurrent = 1
check_interval = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "eco-runner"
  url = "https://gitlab.com"
  token = "token"
  executor = "shell"
```

Il est important que le runner ne puisse executer qu'un job à la fois, le projet ne tolère pas de multiples tests de source différentes en simultané.