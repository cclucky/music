<template>
  <div class="my_bat">
    <div  class="my_bat_sid"><SideBar></SideBar></div>
    <router-view></router-view>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
      name:'MyMusic',
      data() {
        return {
        }
      },
      computed:{
        ...mapState('m_user',['userInfo','playlists']),
        
      },
      created(){
        
      },
      mounted(){
        this.getPlaysList()
        this.toPlaysList()
      },
      methods:{
       getPlaysList(){
         this.$store.dispatch('m_user/userPlayList',this.userInfo.account.id)
       },
       toPlaysList(){
          if(this.playlists[0]){
            this.$router.push({path:`/MyMusic/MyPlaysList`,query:{id:this.playlists[0].id}})
          }
       }
      }
}
</script>

<style scoped lang="scss">
.my_bat{
  width: 58vw;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  .my_bat_sid{
  }
  .my_bat_all{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>