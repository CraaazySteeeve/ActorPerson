<script>
    export let popupActive;

    function openHelpPopup() {
        popupActive = true;
    }
</script>

<div class="absolute top-10 right-10">
    <button on:click={openHelpPopup}><i class="fa-regular fa-circle-question text-4xl text-white drop-shadow-lg hover:drop-shadow-md hover:text-slate-200"></i></button>
</div>