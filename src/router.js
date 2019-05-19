import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NewGame from "./views/NewGame";
import Play from "./views/Play";
import About from "./views/About";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/new-game",
            component: NewGame
        },
        {
            path: "/play/:id",
            name: "play",
            props: true,
            component: Play
        },
        {
            path: "/about",
            component: About
        }
    ]
});
