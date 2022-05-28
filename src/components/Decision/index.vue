<template>
  <div class="my_dici_bar">  
      <div class="my_dici_nav"><h1>评论</h1> <i>共计4396条</i></div>
      <div class="dici_nav"> <img :src="userInfo.profile.avatarUrl" alt="" style="width:50px;height:50px" v-if="userInfo.profile.avatarUrl"> <textarea name="" id="" cols="100%" rows="4"></textarea></div>
      <div>  <el-button type="primary" size="mini">评论</el-button></div>
      <h3>精彩评论</h3>
      <div>   
          <img src="" alt="">  <div>  <a href="">用户昵称</a> <a>这是一个评论</a>
           <p>时间呀</p>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
     name:'Decision',
     computed:{
       ...mapState('m_user',['userInfo'])
     }
}
</script>

<style scoped lang="scss">
.my_dici_bar{
  .my_dici_nav{
    h1{
      display: inline-block;
    }
    .dici_nav{
     
    }
    h3{
      margin: 20px 0;
    }
  }
}
</style>