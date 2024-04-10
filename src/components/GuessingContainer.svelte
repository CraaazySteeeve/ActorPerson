<script>
    let autoPredictMovies = ['The Godfather', 'Father Christmas'];

    /**
     * @param {any} e
     */
    function updateAutoPredictList(e) {
        // @ts-ignore
        let currentTypedMessage = document.getElementById('guessInput').value;
        console.log(currentTypedMessage);
        //TODO: Compare to our movie db somehow.
    }


</script>

<div class="w-2/3">
    <input id="guessInput" on:input={updateAutoPredictList} class="border border-slate-500 rounded-xl drop-shadow-l w-full p-5 mt-10" type="text" placeholder="Type your movie guess here..."/>
    <div class="sticky top-0 left-0 mx-5 flex flex-col max-h-96 overflow-hidden overflow-y-auto">
        {#each autoPredictMovies as movie}
        <div class="border border-black border-t-0 p-2 bg-slate-100 hover:bg-slate-300">{movie}</div>
        {/each}
    </div>
</div>