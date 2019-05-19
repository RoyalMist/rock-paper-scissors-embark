<template>
    <div>
        <h1>Play</h1>
        <Card :id="$route.params.id"/>
    </div>
</template>

<script>
    import Card from "../components/Card";

    export default {
        name: "Play",
        components: {Card},
    }
</script>

<style scoped>

</style>