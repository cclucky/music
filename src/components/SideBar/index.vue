<template>
  <div class="my_sid_nav">
    <div>我的歌手(5)</div>
    <div class="my_sid_nav_left">
      <div class="nav_left">
        <h1>创建的歌单>{{ `(${playlists.length})` }}</h1>
        <el-button @click.native="changeIs">新建</el-button>
      </div>
      <div v-if="isShowNew"> 
        <el-input v-model="playName" placeholder="" size="mini" ></el-input> 
        <el-button size="mini" @click.native="addNewPlayList">+新建</el-button>
        <el-button size="mini" @click.native="isShowNew=false">取消</el-button></div>
      <div
        class="nav_down"
        @click="toPlaysList(list)"
        v-for="list in playlists"
        :key="list.id"
      >
        <img :src="list.coverImgUrl" alt="" />
        <div>
          <a>{{ list.name }}</a>
          <!-- @click.stop="deletePlayList(list.id)" -->
          <span @click="open(list.id)">删除</span>
          <!-- <a>{{ playlists.length }}首歌</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SideBar",
  data() {
    return {
      playName: "",
      isShowNew:false
    };
  },
  computed: {
    ...mapState("m_user", ["playlists"]),
  },
  methods: {
    async toPlaysList(list) {
      this.$router.push(`/MyMusic/MyPlaysList?id=${list.id}`);
      // this.$store.dispatch('m_user/userPlayList',list.id)
      // let res= await this.$API.allPlayTrackList(list.id)
      // console.log(res);
      // let res1= await this.$API.allTrackList(list.id)
      // console.log(res1);
    },
    changeIs(){
this.isShowNew=true;
    },
    async addNewPlayList() {
      let res = await this.$API.getNewPlayList(this.playName);
      if (res.code == 200) {
        this.isShowNew=false;
        this.playlists.push(res.playlist);
      }
    },
    async deletePlayList(id) {
      let res = await this.$API.getDeletePlayList(id);
      if(res.code==200){
      }
    },
    open(id){
      this.$confirm('此操作将永久删除该歌单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deletePlayList(id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
};
</script>

<style scoped lang="scss">
.my_sid_nav {
  width: 240px;
  padding: 20px;
  .my_sid_nav_left {
    img {
      width: 40px;
      height: 40px;
    }
    .nav_left {
      display: flex;
      justify-content: space-around;
    }
    .nav_down {
      margin: 10px 0;
      display: flex;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 20px;
      }
    }
  }
}
</style>