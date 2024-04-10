<script>
    /**
     * @type {any}
     */
     export let clues;

     /**
     * @type {any}
     */
     export let currentClue = 1;
</script>

<div>
    {#each clues as clue, index}
        {#if index > currentClue}
        <div>???</div>
        {:else if index == currentClue}
        <div class="font-bold">{clue}</div>
        {:else}
        <div>{clue}</div>
        {/if}
    {/each}
</div>