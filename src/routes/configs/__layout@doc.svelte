<nav id="doc__nav">
  <ul>
    <li>link 1</li>
    <li>link 2</li>
  </ul>
</nav>
<article id="doc__content">
  <slot></slot>
</article>

<style>
	#doc__content{
		padding: 2rem 1rem;
		margin: 0;
		width: 80%;
	}

	#doc__nav{
		padding: 2rem 1rem;
		margin: 0;
		width: 20%;
		background-color: var(--medium-color);
		box-shadow: var(--simple-shadow);
	}
</style>