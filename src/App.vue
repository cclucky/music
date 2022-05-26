<template>
  <div id="app" v-cloak>
    <TabBar></TabBar>
    <router-view></router-view>
    <Floor></Floor>
    <Player></Player>
  </div>
</template>

<script>
import TabBar from "@/components/tabBar";
import Floor from "@/components/floor";
export default {
  name: 'App',
  components: {
  TabBar,
  Floor
  }
}
</script>

<style>
[v-cloak]{
  display: none;
}
#app{
  padding-bottom: 60px;
}
</style>
