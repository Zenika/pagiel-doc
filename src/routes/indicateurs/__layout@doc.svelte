<script>
	import SideNav from "$lib/SideNav.svelte"
	const linkGroups = [
		{
			name: "Résumé",
			slug: "/indicateurs",
			links: [
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