<template>
  <div class="mp_list"><MyNavb class="ccce">
      <template v-slot:myImg>
         <img :src="playlists[0].coverImgUrl" v-if="playlists&&playlists[0]">
      </template> <template v-slot:navB>
      <span>歌单</span> <span>{{playlists[0].name}}</span>
          <div class="navb_right"> <img :src="userInfo.profile.avatarUrl" style="width:40px;height:40px"> <a> liiiiiilil</a> <a>创建时间{{`4-5`}}</a></div>
  </template>
  </MyNavb>
    <MusicLists :trackID="$route.query.id" style="width:740px"></MusicLists>
    <Decision :chType="2"></Decision></div>
</template>

<script>
import {mapState} from 'vuex';
export default {
       name:'myplayslist',
       data() {
           return {
               
           }
       },computed:{
           ...mapState('m_user',['playlists','userInfo'])
       },
       created(){

       },
       mounted(){
         
       },
       methods:{
     
       },
     
}
</script>

<style scoped lang="scss">
.mp_list{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ccce{
        flex: 1;
    }
}
 .navb_right{
      display: flex;
      align-items: center;
    }
</style>