<template>
  <div class="my_dici_bar">  
      <div class="my_dici_nav"><h1>评论</h1> <i>共计4396条</i></div>
      <div class="dici_nav"> <img :src="userInfo.profile.avatarUrl" alt="" style="width:50px;height:50px" v-if="userInfo.profile.avatarUrl"> <textarea v-model="content" name="" id="" cols="100%" rows="4"></textarea></div>
      <div style="margin-bottom:20px">  <el-button type="primary" size="mini" @click.native="addPlayComment" >评论</el-button></div>
      <h3>精彩评论</h3>
      <div v-for="(comment,index) in comments" :key="comment.commentId" style="display:flex;margin:20px 20px">   
          <img :src="comment.user.avatarUrl" alt="" style="width:50px;height:50px;">  <div class="com_m" >  <div><a href="/#" style="color:blue">{{comment.user.nickname +':'}}</a> <a>{{comment.content}}</a></div>
           <div class="my_dici_lly">
           <p>{{comment.time | comTime}}</p>  <div><a  @click="deleteComment(comment.commentId,index)">删除</a><span>|</span> <!-- <i>11</i><span>|</span> --> <a @click="changerShowHf(index)">回复</a></div>
           </div>
           <div v-if="comment.isShowHf"> <textarea v-model="comment.contentSon" name="" id="" cols="100%" rows="4"></textarea> <el-button type="primary" size="mini" @click.native="baComment">回复</el-button></div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
     name:'Decision',
     data() {
       return {
         comments:[],
           t:'',
           type:'',
           id:'',
           content:'',
           commentId:'',
           contentSon:'',
       }
     },
     computed:{
       ...mapState('m_user',['userInfo']),
     },
     mounted(){
      this.getUserPlayDics()
     },
     methods:{
      async getUserPlayDics(){
       let res = await this.$API.getUserPlayDic(this.$route.query.id)
             if(res.code==200){
                res.comments.forEach(item => {
                    this.$set(item,'isShowHf',false)
                    this.$set(item,'contentSon','')
                    this.comments.push(item)
                });
             }
       },
      async addPlayComment(){
        let {t,type,id,content,commentId} = this
        t=1,type=2,id=this.$route.query.id  
       let res = await this.$API.addComment(t,type,id,content)
             if(res.code==200){
               this.comments.unshift(res.comment)
               alert('评论成功')
              //  this.getUserPlayDics()
             }
       },
      async deleteComment(commentId,index){
              let {t,type,id,content} = this
              t=0,type=2,id=this.$route.query.id 
              let res = await this.$API.addComment(t,type,id,content,commentId)
              if(res.code==200){
                alert('删除成功')
                this.comments.splice(index,1)
              }
       },
       baComment(){
            //  let {t,type,id} = this
            //  t=0,type=2,id=this.$route.query.id 
            //  let res = await this.$API.addComment(t,type,id,content,commentId)
       },
       changerShowHf(index){
         this.comments.forEach(item=>item.isShowHf=false)
         this.comments[index].isShowHf=true
       }
     },
     watch:{
       '$route.query.id'(val,oval){
           this.getUserPlayDics()
       },
     },
     filters:{
        comTime(value){
           let date = new Date(value)
           let Y = date.getFullYear() + '-';
           let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
           let D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
           let h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
           let m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
           let strDate = Y+M+D+h+m;
         return  strDate
       }
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
.com_m{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
}
.my_dici_lly{
  display: flex;
  justify-content: space-between;
  p{
    margin-right: 500px;
  }
}
</style>