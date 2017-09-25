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
  comments:{
    'wk-footer': Footer
  }
}
</script>

