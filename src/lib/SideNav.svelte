<script>
  export let linkGroups = []
</script>

<nav id="sidenav">
  {#each linkGroups as group (group.name)}
    <section>
      <h4><a class="sidenav__link" href="{group.slug}">{group.name}</a></h4>
      <ul class="sidenav__group">
        {#each group.links as link (link.url)}
          <li class="sidenav__item"><a class="sidenav__link" href="{group.slug}{link.url}">{link.name}</a></li>
        {/each}
      </ul>
    </section>
  {/each}
</nav>

<style>
  #sidenav{
		padding: 2rem 1rem;
		margin: 0;
		width: 20%;
		background-color: var(--white-color);
    border: 1px solid var(--medium-color);
		box-shadow: var(--simple-shadow);
	}

  .sidenav__group{
    list-style: none;
  }

  .sidenav__link{
    padding: 0 1em;
    border-radius: 5px;
  }

  .sidenav__link:visited{
    color: var(--black-color);
  }

  .sidenav__link:hover, .sidenav__link:focus{
    color: var(--white-color);
    background-color: var(--dark-color);
  }
</style>