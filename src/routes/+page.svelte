<script>
    import ClueContainer from '../components/ClueContainer.svelte';
    import GuessingContainer from '../components/GuessingContainer.svelte';
    import HelpPopup from '../components/HelpPopup.svelte';
    // @ts-ignore
    export let data;
</script>

<HelpPopup visible={false}/>

<div class="mt-10 flex flex-col items-center">
    <h2 class="text-3xl font-bold underline">Challenges:</h2>
    {#each data.challenges as challenge}
        <div>
            <span class="font-bold">{challenge.id} - {challenge.challenge_date}</span>
            <ClueContainer clues={challenge.clues}/>
        </div>
    {/each}
    <GuessingContainer />
    <h2 class="mt-10">End of Challenges</h2>
</div>