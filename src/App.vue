<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">Rock Paper Scissor</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item to="/about">About</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view/>
    </div>
</template>