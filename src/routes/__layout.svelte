<script>
	import Header from "$lib/Header.svelte"
</script>

<Header />
<main id="content">
	<slot></slot>
</main>

<style>
	#content {
		padding: 2rem 0;
		width: 80%;
		margin: auto;
		height: 100%;
		min-height: 100vh;
	}
</style>