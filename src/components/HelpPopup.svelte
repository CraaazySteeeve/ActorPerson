<script>
    /**
     * @type {any}
     */
     export let visible;

    function closePopup() {
        var popup = document.getElementById('help-pop-up');
        if(popup != null) {
            popup.style.visibility = "hidden";
            popup.style.display = "none";
        }
    }
</script>

{#if visible}
<div id="help-pop-up" class="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center">
    <div class="bg-slate-300 rounded-xl border-2 border-black drop-shadow-lg w-3/4 h-2/3 max-w-screen-sm overflow-hidden overflow-y-auto">
        <button class="absolute top-5 right-5 text-center flex text-2xl w-5 h-5 items-center justify-center font-bold" on:click={closePopup}>X</button>
        <div class="m-5 md:m-10">
            <h2 class="text-2xl font-bold">How To Play</h2>
            <div class="text-lg">Guess the movie, based on the mashed up actor/character names. </div>
            <ul class="list-disc my-5 text-base ml-5">
                <li>Type in your guess, and tap 'Submit' to see if you were correct.</li>
                <li>Each incorrect guess gets you another clue.</li>
                <li>Find the correct movie before you run out of clues!</li>
            </ul>

            <h2 class="mt-5 text-xl font-bold">Example Clues</h2>
            <ol class="list-decimal text-base ml-5">
                <li>An example clue could be <b>"Iron Bridges"</b>.</li>
                <li>The next clue could be <b>"Happy Favreau"</b>.</li>
                <li>And then the third clue could be <b>"Robert Stark"</b>.</li>
            </ol>
            <div class="mt-4">Then you go, ah-ha! As you work it out, because you realise:</div>
            <ul class="list-disc text-base ml-5">
                <li><b>"Iron Bridges"</b> = Jeff <b>Bridges</b> as <b>Iron</b> Monger</li>
                <li><b>"Happy Favreau"</b> = Jon <b>Favreau</b> as <b>Happy</b> Morgan</li>
                <li><b>"Robert Stark"</b> = <b>Robert</b> Downey Jr. as Tony <b>Stark</b></li>
                <li>The movie was <b>Iron Man</b>!</li>
            </ul>
            <div class="mt-8 text-xl">
                Remember, the names can either: 
                <ul class="list-disc text-base ml-5">
                    <li>(Character First Name) + (Actor Last name)</li>
                    <li>(Actor First Name) + (Character Last name)</li>
                </ul>
            </div>
        </div>
    </div>
</div>
{/if}