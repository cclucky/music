<template>
  <div class="my_sid_nav">
    <div>我的歌手(5)</div>
    <div class="my_sid_nav_left">
      <div class="nav_left">
        <h1>创建的歌单>{{ `(${playlists.length})` }}</h1>
        <el-button size="mini">+新建</el-button>
      </div>
      <div
        class="nav_down"
        @click="toPlaysList(list)"
        v-for="list in playlists"
        :key="list.id"
      >
        <img :src="list.coverImgUrl" alt="" />
        <div>
          <a>{{ list.name }}</a> 
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