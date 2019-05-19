<template>
    <div>
        <b-card class="mb-2"
                img-alt="Image"
                img-src="../assets/rock.jpg"
                img-top
                style="max-width: 20rem;"
                tag="article"
                title="Rock">
            <b-card-text>Lorem Ipsum {{id}}</b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            id: String
        }
    };
</script>

<style lang="stylus" scoped>
</style>
