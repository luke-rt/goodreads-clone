<script lang="ts">
    import type { Profile } from "$lib/types";

    export let profile: Profile;
</script>

<div class="profile-preview">
    <a href={`/profile/${profile.id}`}>{profile.full_name}</a>
</div>

<style lang="scss">
    .profile-preview {
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 3px;
        width: 600px;
        padding: 10px;
        margin-block: 20px;
        a {
            display: block;
            font-weight: bolder;
            font-size: 1.2em;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>