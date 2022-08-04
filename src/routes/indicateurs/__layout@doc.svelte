<script>
	import SideNav from "$lib/SideNav.svelte"
	const linkGroups = [
		{
			name: "Résumé",
			slug: "/indicateurs",
			links: [
				{
					name: "Assets",
					url: "#assets"
				},
				{
					name: "Caching",
					url: "#caching"
				},
				{
					name: "Compression",
					url: "#compression"
				},
				{
					name: "Cookies",
					url: "#cookies"
				},
				{
					name: "Css",
					url: "#css"
				},
				{
					name: "DOM",
					url: "#dom"
				},
				{
					name: "Domains",
					url: "#domains"
				},
				{
					name: "Eco",
					url: "#eco"
				},
				{
					name: "Fonts",
					url: "#fonts"
				},
				{
					name: "Headers",
					url: "#headers"
				},
				{
					name: "Images",
					url: "#images"
				},
				{
					name: "JQuery",
					url: "#jquery"
				},
				{
					name: "Javascript",
					url: "#js"
				},
				{
					name: "Performance",
					url: "#performance"
				},
				{
					name: "Performance CPU",
					url: "#performance_cpu"
				},
				{
					name: "Protocoles",
					url: "#protocols"
				},
				{
					name: "Requêtes",
					url: "#requests"
				},
				{
					name: "Autres",
					url: "#other"
				},
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