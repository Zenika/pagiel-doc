<script>
	import SideNav from "$lib/SideNav.svelte"
	const linkGroups = [
		{
			name: "Configuration de PAGIEL",
			slug: "/configs",
			links: [
				{
					name: "Configuration autonome",
					url: "#complete"
				},
				{
					name: "Base de données externes",
					url: "#externe"
				},
				{
					name: "Ne pas utiliser PowerAPI",
					url: "#powerapi"
				},
			]
		},
		{
			name: "Configuration du runner",
			slug: "/configs/runner",
			links: [
				{
					name: "Configuration du runner",
					url: "#defaut"
				},
				{
					name: "Configuration des jobs",
					url: "#jobs"
				}
			]
		}
	]
</script>

<SideNav linkGroups={linkGroups} />
<article id="doc__content">
  <slot></slot>
</article>

<style>
	#doc__content{
		padding: 2rem 1rem;
		margin: 0;
		width: 80%;
	}
</style>