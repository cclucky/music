<template>
  <div class="m_player">
    <div class="m_play">
      <!--  -->
      <div class="m_play_left">
        <a href="/#" class="a_prv el-icon-caret-left"></a>
        <a href="/#" class="a_pry el-icon-video-pause" v-if="true">暂停</a>
        <a href="/#" class="a_pry el-icon-video-play" v-else></a>
        <a href="/#" class="a_nxt el-icon-caret-right"></a>
      </div>
      <!--  -->
      <img src="" alt="" />
      <!--  -->
      <div class="m_play_center">
        <div v-if="songs.name">  <a href=""> {{songs.name}}</a> 演唱者：{{songs.ar[0].name}}</div>
        <div><!-- <el-slider v-model="value1"></el-slider> -->
        <audio controls  :src="MusicUrlList.url" autoplay> <source  type="audio/mp3"></audio></div>
      </div>
      <!--  -->

      <!--  -->
      <div class="m_play_right">
        <div><a href=""> </a> <a href=""> </a><a href=""></a></div>
        <div>
          <a href="" class="el-icon-bell"></a>
          <a href="">2</a>
          <a href="">3</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Player",
  data() {
    return {
      value1: 0,
      songs:{}
    };
  },computed:{
    ...mapState('m_plays',['MusicUrlList','songsId'])
  },
  mounted(){
      this.getMusicUrlx()
  },
  methods:{
      async getMusicUrlx(){
      let res= await this.$API.getMusicIds(this.songsId)
        if(res.code==200){
           this.songs=res.songs[0]
        }
      }
  }
};
</script>

<style scoped lang="scss">
.m_player {
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: rgb(46, 46, 46);
  font-size: 12px;
  color: #e8e8e8;
  margin: auto;
  .m_play {
    width: 52vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .m_play_left {
      width: 160px;
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
          margin: 0 5px;
          text-align: center;
      }
    }
    .m_play_center {
        width: 30vw;
      margin-right: auto;
      el-slider{
          width: 80%;
      }
      audio{
          height: 30px;
          width: 80%;
          margin: 5px 0;
      }
    }
    .m_play_right {
      width: 300px;
    }
  }
}
</style>