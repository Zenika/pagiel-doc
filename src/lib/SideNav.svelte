<script>
  export let linkGroups = []
	$: innerWidth = 0
  $: navExpended = innerWidth >= 768
  function test () {
    navExpended = !navExpended
  }
</script>

<svelte:window bind:innerWidth />

<div id="sidenav" class={navExpended ? "extended": "closed"}>
  <button id="sidenav-button" on:click={test}>{navExpended ? "Masquer l'index": "Montrer l'index"}</button>
  {#if navExpended}
    <nav id="sidenav-nav" class={navExpended ? "extended": "closed"}>
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
  {/if}
</div>


<style>
  #sidenav{
    margin: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--medium-color);
  }

  #sidenav.extended{
    border-width: 1px 0 1px 0;
  }

  #sidenav.closed{
    border-width: 1px 0 0 0;
  }

  #sidenav-nav {
    padding: 2rem 1rem;
  }

  #sidenav-button{
    display: block;
  }

  .sidenav__group{
    list-style: none;
  }

  .sidenav__link{
    padding: 0 1em;
    border-radius: 5px;
    text-decoration: none;
  }

  .sidenav__link:visited{
    color: var(--black-color);
    text-decoration: none;
  }

  .sidenav__link:hover, .sidenav__link:focus{
    color: var(--white-color);
    background-color: var(--dark-color);
  }
  @media screen and (min-width: 768px){
    #sidenav{
      width: 20%;
    }

    #sidenav.extended{
      border-width: 1px;
  }

    #sidenav-button{
      display: none;
    }
	}
</style>