<template>
    <div class="home">
        <b-container>
            <b-row>
                <b-col>
                    <img alt="Logo" src="../assets/logo.jpg"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-button to="/new-game">Create</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-input-group class="mt-3" prepend="Game ID">
                        <b-form-input v-model="id"/>
                        <b-input-group-append>
                            <b-button :to="{ name: 'play', params: { id: id }}" variant="outline-success">Join Game
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                id: "",
            }
        },
    };
</script>
