<template>
  <div>
    <MusicLists :trackID="$route.query.id"></MusicLists>
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