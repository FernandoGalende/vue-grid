<template>
    <div id="app">
        <header-app id="header"/>
        <card-container id="cardContainer" />
        <footer-app id="footer"/>
    </div>
</template>

<script>
    import CardContainer from "./components/CardContainer.vue";
    import HeaderApp from "./components/Header.vue"
    import FooterApp from "./components/Footer.vue"

    export default {
        name: "app",
        components: {
            CardContainer,
            HeaderApp,
            FooterApp,
        }
    };
</script>

<style lang="scss" scoped>
    @import "./theme/_partials.scss";
    
    #app {
        grid-template-areas: 'navbar' 'content' 'footer'
    }

     #header {       
        grid-area: navbar;
        margin: 2em;
    }

    #cardContainer {
        grid-area: content;
    }

    #footer {   
        grid-area: footer;
        margin: 1em;     
    }
</style>>

