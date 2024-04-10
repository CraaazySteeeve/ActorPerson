<script>
    export let data;

    /**
     * @param {{ getBasicProfile: () => any; }} googleUser
     */
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
</script>

<h2>Challenges:</h2>
<ul>
{#each data.challenges as challenge}
    <li>{challenge.id} - {challenge.challenge_date} - {challenge.clues[1]}</li>
{/each}
</ul>
<span></span>
<h2>End of Challenges</h2>
<div class="g-signin2" data-onsuccess="onSignIn"></div>