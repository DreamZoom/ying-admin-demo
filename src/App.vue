<template>
  <ying-app :config="config"></ying-app>
</template>

<script>
import config from "./config"
export default {
  name: 'App',
  methods:{
    config(){
      return Promise.resolve(config);
    }
  }
}
</script>

