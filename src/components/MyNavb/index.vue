<template>
  <div> <div class="my_navb">
     <slot name="myImg"></slot>
     <!--  -->
      <div class="my_navb_right" v-if="playlists">
          <slot name="navB"></slot>
          <el-button type="primary" size="mini" @click.native="getAllTrackList($route.query.id)">播放+</el-button>
      <el-button size="mini">收藏</el-button>
      <el-button size="mini">分享</el-button>
      <el-button size="mini">下载</el-button>
      <el-button size="mini">评论</el-button></div>
      <!--  -->
  </div> 
      <slot name="dicSong"></slot>
      </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
      name:'MyNavb',
      data() {
        return {
      MusicSongs:[]
          
        }
      },
      computed:{
        ...mapState('m_user',['playlists','userInfo'])
      },
      mounted(){
      
      },
      methods:{
      async getAllTrackList(trackID) {
     if(this.$route.path!=='/mymusic/MyPlaysList'){
       this.$store.dispatch('m_plays/getMusicUrlList',this.$route.query.id)
     }else{
        let res = await this.$API.allPlayTrackList(trackID);
      if(res.code==200){
        //播放按钮，没写呢
        if(res.songs[0]){
          this.$store.dispatch('m_plays/getMusicUrlList',res.songs[0].id)
        }
        
      }
     }
  }
      },
      // watch:{
      //   $router(to,from){
      //     this.getAllTrackList()
      //   }
      // }
}
</script>

<style scoped lang="scss">
.my_navb{
  width: 740px;
  height: 240px;
  display: flex;
  img{
      width: 200px;
      height: 200px;
      padding: 20px;
    }
  .my_navb_right{
    padding: 10px;
    span{
      font-size: 20px;
    }
    .navb_right{
      display: flex;
      align-items: center;
    }   
  }
}
</style>