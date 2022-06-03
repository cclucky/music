<template>
  <div>
    <MusicLists :trackID="$route.query.id" style="width:56vw"></MusicLists>
  </div>
</template>

<script>
export default {
  name: "musicList",
  data() {
    return {};
  },
  mounted(){
  }
};
</script>

<style>
</style>