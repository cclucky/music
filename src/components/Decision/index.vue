<template>
  <div class="my_dici_bar">
    <div class="my_dici_nav">
      <h1>评论</h1>
      <i>共计{{total}}条</i>
    </div>
    <div class="dici_nav">
      <img
        :src="userInfo.profile.avatarUrl"
        alt=""
        style="width: 50px; height: 50px;margin-right:20px"
        v-if="userInfo.profile.avatarUrl"
      />
      <textarea v-model="content" name="" id="" cols="100%" rows="4"></textarea>
    </div>
    <div style="margin-bottom: 20px">
      <el-button type="primary" size="mini" @click.native="addPlayComment"
        >评论</el-button
      >
    </div>
    <h3>精彩评论</h3>
    <div
      v-for="(comment, index) in comments"
      :key="index+'a'"
      style="display: flex; margin: 20px 20px"
    >
      <img
        :src="comment.user.avatarUrl"
        style="width: 50px; height: 50px"
      />
      <div class="com_m">
        <div>
          <a href="/#" style="color: blue">{{ comment.user.nickname + ":" }}</a>
          <a class="com_may">{{ comment.content }}</a>
          <!--  -->
          <!-- <div class="com_ms" v-if="comment.beReplied&&comment.beReplied.length"><span>{{`@${comment.beReplied[0].user.nickname}:${comment.beReplied[0].content}`}}</span> </div> -->
        </div>
        <div class="my_dici_lly">
          <p>{{ comment.time | comTime }}</p>
          <div>
            <a @click="deleteComment(comment.commentId, index)" v-show="comment.user.nickname===userInfo.profile.nickname">删除 <span>|</span></a
            >
            <!-- <i>11</i><span>|</span> -->
            <a @click="changerShowHf(index)">回复</a>
          </div>
        </div>
        <div v-if="comment.isShowHf">
          <textarea
            v-model="comment.contentSon"
            name=""
            id=""
            cols="100%"
            rows="4"
          ></textarea>
          <el-button
            type="primary"
            size="mini"
            @click.native="baComment(comment.commentId, index)"
            >回复</el-button 
          >   <el-button
            size="mini"
            @click.native="comment.isShowHf=false"
            >取消</el-button 
          >
        </div>
     
      </div>
    </div>
      <el-pagination
      style="text-align: center;"
      :pageNo="pageNo"
      :page-size="pageSize"
      :total="total"
      @current-change="currentchange"
      @prev-click="prevclick"
      @next-click="nextclick"
     background
    layout="prev, pager, next"
    >
</el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Decision",
  props:['chType'],
  data() {
    return {
      comments: [],
      t: "",
      type: "",
      id: "",
      content: "",
      contentSon: "",
      pageNo:1,
      pageSize:20,
      sortType:'',
      cursor:'',
      total:0
    };
  },
  computed: {
    ...mapState("m_user", ["userInfo"]),
  },
  mounted() {
    this.getUserPlayDics();
    
  },
  methods: {
    async getUserPlayDics() {
      this.comments=[]
      let res = await this.$API.getUserPlayDic(this.chType,this.$route.query.id,this.pageNo,this.pageSize,this.sortType,this.cursor);
      if (res.code == 200) {
         this.total=res.data.totalCount
        this.sortType=res.data.sortTypeList.length
        this.cursor=res.data.comments[res.data.comments.length-1].time
        res.data.comments.forEach((item) => {
          this.$set(item, "isShowHf", false);
          this.$set(item, "contentSon", "");
          this.comments.push(item);
        });
      }
    },
    async addPlayComment() {
      let { t, type, id, content } = this;
      (t = 1), (type = this.chType), (id = this.$route.query.id);
      let res = await this.$API.addComment(t, type, id, content);
      if (res.code == 200) {
        this.comments.unshift(res.comment);
        alert("评论成功");
        //  this.getUserPlayDics()
      }
    },
    async deleteComment(commentId, index) {
      let { t, type, id, content } = this;
      (t = 0), (type = this.chType), (id = this.$route.query.id);
      let res = await this.$API.addComment(t, type, id, content, commentId);
      if (res.code == 200) {
        alert("删除成功");
        this.comments.splice(index, 1);
      }
    },
    async baComment(commentId, index) {
      let { t, type, id } = this;
      (t = 2), (type = this.chType), (id = this.$route.query.id);
      let res = await this.$API.addComment(
        t,
        type,
        id,
        this.comments[index].contentSon,
        commentId
      );
      if (res.code == 200) {
        this.comments.unshift(res.comment);
        alert('回复成功')
        this.comments.forEach(item=>{
          return item.isShowHf=false
        })
      }
    },
    changerShowHf(index) {
      this.comments.forEach((item) => {
        item.contentSon = "";
        return (item.isShowHf = false);
      });
      this.comments[index].isShowHf = true;
    },
    currentchange(row){
         this.pageNo=row
         this.getUserPlayDics()
    },
    prevclick(){
            console.log(222);
    },
    nextclick(){
      console.log(111);
    }
  },
  watch: {
    "$route.query.id":{
      immediate:true,
      deep:true,
      handler(val, oval) {
      this.getUserPlayDics();
    },
     $route(to,from){
           this.getUserPlayDics();
     }
    }
  },
  filters: {
    comTime(value) {
      let date = new Date(value);
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      let h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      let m =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let strDate = Y + M + D + h + m;
      return strDate;
    },
  },
};
</script>

<style scoped lang="scss">
.my_dici_bar {
  .my_dici_nav {
    h1 {
      display: inline-block;
    }
    .dici_nav {
      
    }
    h3 {
      margin: 20px 0;
    }
  }
}
.com_m {
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
}
.my_dici_lly {
  display: flex;
  justify-content: space-between;
  p {
    margin-right: 500px;
  }
}
.com_ms{
  border: 1px solid blanchedalmond;
  background-color:rgb(244,244,244);
  margin: 10px 0;
}

</style>