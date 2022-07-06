<header id="header">
	<h1 id="header__title">Plateforme Automatique de Génération d'Indicateurs d'Ecoconception du Logiciel</h1>
	<nav id="header__navbar">
		<a class="header__navbar-link" href="/">Accueil</a>
		<a class="header__navbar-link" href="/configs">Configuration</a>
		<a class="header__navbar-link" href="/indicateurs">Indicateurs</a>
	</nav>
</header>

<style>
	#header {
		background-color: var(--light-color);
		margin: 0 auto;
		display: flex;
		align-content: center;
		justify-content: space-between;
		flex-wrap: wrap;
		font-size: 16px;
		padding: 1rem;
		box-shadow: var(--simple-shadow);
	}

	#header__title {
		font-size: 1.5rem;
		text-align: center;
		color: var(--black-color);
	}

	#header__navbar {
		display: flex;
		gap: 10px;
		margin: auto 0;
	}

	.header__navbar-link, .header__navbar-link:visited {
		color: var(--dark-color);
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 700;
		line-height: 16px;
	}

</style>