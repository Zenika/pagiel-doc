<script>
	import Header from "$lib/Header.svelte"
</script>

<Header />
<main id="doc">
	<slot></slot>
</main>

<style>
	#doc {
		width: 100%;
		margin: auto;
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: row;
	}
</style>