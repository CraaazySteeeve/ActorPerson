<script>
    import ClueContainer from '../components/ClueContainer.svelte';
    import GuessingContainer from '../components/GuessingContainer.svelte';
    import HelpButton from '../components/HelpButton.svelte';
    import HelpPopup from '../components/HelpPopup.svelte';
    // @ts-ignore
    export let data;

    let isHelpPopupVisible = false;
</script>

<HelpPopup bind:visible={isHelpPopupVisible}/>

<div class="mt-10 flex flex-col items-center p-5 mx-5 md:mx-20 bg-white rounded-xl bg-opacity-30 shadow-2xl ring-2 ring-black">
    <HelpButton bind:popupActive={isHelpPopupVisible}/>
    {#each data.challenges as challenge}
        <div>
            <span class="font-bold text-slate-200 text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">Challenge #{challenge.id} for {challenge.challenge_date}</span>
            <ClueContainer clues={challenge.clues}/>
        </div>
    {/each}
    <GuessingContainer />
</div>