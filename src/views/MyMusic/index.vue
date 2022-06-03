<template>
  <div class="my_bat" v-if="token&&userInfo">
    <div  class="my_bat_sid"><SideBar></SideBar></div>
    <router-view></router-view>
    </div>
    <div v-else class="my_bat1" >  <div>  <h1>登录一下,更多精彩</h1> <p>方便并管理你的音乐，并随时随地收听</p> <el-button type="primary" @click.native="toLogin">立即登录</el-button></div> </div>
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
        ...mapState('m_user',['userInfo','playlists','token']),
        
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
       },
       toLogin(){
         this.$router.push('/login')
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
.my_bat1{
  display: flex;
  justify-content: center;
  background-image: url('./images/bg.webp');
  max-width: 50vw;
  height: 30vw;
  margin: auto;
  h1{
    font-size: 40px;
  }
  div{
    height: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>