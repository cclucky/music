<template>
  <div class="s_bar">
    <div class="s_nav">
      <!-- 1 -->
      <div class="s_navbar">
        <slot name="s_navbar-big"></slot>
        <slot></slot>
        <router-link to="/home/playLists" href="">更多 <i class="el-icon-right"></i></router-link>
      </div>
      <!--  -->
      <ul class="s_imgo">
        <li v-for="playlist in playlists" :key="playlist.id">
          <img :src="playlist.picUrl"  @click="getPlayListById(playlist.id)"/><a href="/#"
            ><div class="smollIcon"><i></i><span></span><a href="/#" class="el-icon-video-play"></a></div
          ></a>
          <p style="width:140px"> {{playlist.name}}</p>
        </li>
      </ul>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "Smallcte",
  props:['playlists'],
  data() {
    return {
      
    };
  },
  mounted() {
        
  },
  methods: {
      getPlayListById(id){
      // let res = await this.$API.allTrackList(id)
      this.$router.push({path:`/musiclist?id=${id}`})
 }
  },
};
</script>

<style scoped lang="scss">
.s_bar {
  //   position: relative;
  .s_nav {
    // padding: 1vw 1vw 3vw;
    // position: absolute;
    // left: 23.6vw;
    width: 36vw;
    margin: auto;
    .s_navbar {
      border-bottom: 2px solid red;
      height: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.s_imgo {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 36vw;
  li {
    margin: 20px 0;
     position: relative;
    .smollIcon{
      position: absolute;
      top: 120px;
      right: 10px;
    }
    
  }
  img {
    width: 140px;
    height: 140px;
   
  }
}
</style>