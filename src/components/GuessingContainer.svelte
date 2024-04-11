<script>
    /**
     * @type {any[]}
     */
    let autoPredictMovies = [];

    let noMoviesFound = false;

    /**
     * @param {any} e
     */
    function updateAutoPredictList(e) 
    {
        if (e.key === "Enter") {
            // @ts-ignore
            let currentTypedMessage = document.getElementById('guessInput').value;
            console.log("Typed Message: " + currentTypedMessage);
            let query = currentTypedMessage;
            fetch("https://api.themoviedb.org/3/search/movie?api_key=3a2249296c7140fd9bccb921b8985700&query="+query)
                .then(response => response.json())
                .then(data => {
                    applyPredictMovies(data);
                }).catch(error => {
                    console.log(error);
                    return [];
            });
        }   
    }

    /**
     * @param {any} e
     */
    function searchInputChanged(e) {
        autoPredictMovies = [];
        noMoviesFound = false;
    }

    /**
     * @param {any} data
     */
    function applyPredictMovies(data) {
        autoPredictMovies = [];
        console.log("Applying data predictions...");
        console.log(data);
        // @ts-ignore
        data.results.forEach(function (movieObj, index) {
            if(movieObj.vote_count >= 1000) {
                autoPredictMovies.push(movieObj.title);
            }
        });

        if(autoPredictMovies.length == 0) {
            noMoviesFound = true;
        }
        else {
            noMoviesFound = false;
        }
    }

    /**
     * @param {any} guessedMovie
     */
    function guessMade(guessedMovie) {
        console.log("Guessed: " + guessedMovie);
    }
</script>

<div class="w-2/3">
    <input id="guessInput" on:input={searchInputChanged} on:keyup={updateAutoPredictList} class="border border-slate-500 rounded-xl drop-shadow-l w-full p-5 mt-10" type="text" placeholder="Type your movie guess here..."/>
    <div class="sticky top-0 left-0 mx-5 flex flex-col max-h-48 overflow-hidden overflow-y-auto">
        {#if autoPredictMovies.length > 0}
        <div class="border border-black border-t-0 p-1 bg-slate-400">Please select your movie from the list below... </div>
        {/if}
        {#each autoPredictMovies as movie}
        <button on:click={() => guessMade(movie)} class="border border-black text-left border-t-0 p-2 bg-slate-200 hover:bg-slate-500 cursor-pointer">{movie}</button>
        {/each}
        {#if noMoviesFound} 
        <div class="border border-black border-t-0 p-2 bg-slate-100 hover:bg-slate-300">No movies found...</div>
        {/if}
    </div>
</div>