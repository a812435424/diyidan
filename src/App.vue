<template>
  <div id="app">
    <router-view></router-view>
    <wk-footer></wk-footer>
  </div>
</template>

<script>
    import Footer from '@/components/Footer/Footer'

    export default {
        name: 'app',
        components: {
            'wk-footer': Footer
        }
    }
</script>

<style>
    #app {
        padding: 50px 0;
    }
</style>