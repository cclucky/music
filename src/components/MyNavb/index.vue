<template>
  <div class="my_navb">
     <img :src="playlists[0].coverImgUrl" v-if="playlists[0]">
     <!--  -->
      <div class="my_navb_right" v-if="playlists[0]">
          <span>歌单</span> <span>{{playlists[0].name}}</span>
          <div class="navb_right"> <img :src="userInfo.profile.avatarUrl" style="width:40px;height:40px"> <a> liiiiiilil</a> <a>创建时间{{`4-5`}}</a></div>
          <el-button type="primary" size="mini">播放+</el-button>
      <el-button size="mini">收藏</el-button>
      <el-button size="mini">分享</el-button>
      <el-button size="mini">下载</el-button>
      <el-button size="mini">评论</el-button></div>
      <!--  -->
      <slot></slot>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
      name:'MyNavb',
      computed:{
        ...mapState('m_user',['playlists','userInfo'])
      },
      mounted(){
      
      },
      methods:{
      
      }
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