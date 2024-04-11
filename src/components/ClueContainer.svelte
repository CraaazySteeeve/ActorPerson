<script>
    /**
     * @type {any}
     */
     export let clues;

     /**
     * @type {any}
     */
     export let currentClue = 4;
</script>

<div class="flex flex-col">
    <div class="w-full text-center text-xl font-bold my-5 text-slate-200 text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">Clues</div>
    {#each clues as clue, index}
        <div class="flex flex-row items-center my-1">
            <div class="bg-slate-100 border-2 border-black p-2 px-8 w-full rounded-xl hover:drop-shadow-xl">
                {#if index > currentClue}
                <span>???</span>
                {:else if index == currentClue}
                <span class="font-bold text-lg">{clue}</span>
                {:else}
                <span>{clue}</span>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>

</style>