<script>
  import { onMount } from 'svelte';
  
  let divContent;
  let codeText = '';
  
  onMount(() => {
      codeText = divContent.textContent;
  });

  function copyToClipboard(){
    navigator.clipboard.writeText(codeText)
  }
</script>

<div class="code-main">
  <button class="code-copybtn" on:click={copyToClipboard}>Copy</button>
  <div bind:this={divContent}>
    <slot class="test"/>
  </div>
</div>

<style>
  .code-copybtn {
    position: absolute;
    top: 0;
    right: 0;
  }

  .code-main{
    position: relative;
    width: fit-content;
  }
</style>