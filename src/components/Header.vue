<template>
    <div class="header">
        <span>Fernando Galende <strong> + </strong> Onesait</span>
    </div>
</template>

<script>
    export default {
        name: "headerApp",
    };
</script>

<style lang="scss">
    @import "../theme/_variables.scss";

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        color: $Black;
    }
</style>
