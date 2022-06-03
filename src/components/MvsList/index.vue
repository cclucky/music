<template>
  <div class="mvs_navbar">
    <div class="mvs_nav" v-for="mvs in mvsList" :key="mvs.id">
      <div class="mvs_nava">
        <div class="mvs_icon">
          <i class="el-icon-video-camera" style="font-size: 16px"></i>
          <span>{{mvs.playCount}}</span>
        </div>
        <img :src="mvs.cover" style="width: 160px; height: 90px" />
        <span class="mvs_nav_sp">{{mvs.duration |slTime}}</span>
      </div>
      <a class="songsName">{{mvs.name}}</a>
      <p>{{mvs.artistName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MvsList",
  props: ["mvsList"],
    filters:{
     slTime(value){
      let m = Math.floor(value/1000 / 60);
      m = m < 10 ? "0" + m : m;
      let s = Math.floor(value/1000 % 60);
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    }
  }
};
</script>

<style scoped lang="scss">
.mvs_navbar {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .mvs_nav{
        padding: 10px;
        margin: 20px;
        width: 140px;
        height: 100px;
        position: relative;
        .mvs_nava{
            color: #fff;
            position: relative;
            .mvs_icon{
            position: absolute;
            top: 5px;
            right: -10px;
            }
            .mvs_nav_sp{
             position: absolute;  
             left: 5px;
             bottom: 10px;
            }
        }
    }
    .songsName{
        display: inline-block;
        font-size: 14px;
        width: 150px;
        height: 20px;
        overflow: hidden;
    }
}
</style>