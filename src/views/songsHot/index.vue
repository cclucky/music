<template>
  <div class="sl_nav">
    <!--  -->
    <div class="sl_nav_top">
      <dt><img :src="songsArtistList.cover" /></dt>
      <dd>
        <div class="sl_nav_up">
          <span>{{ songsArtistList.name }}</span>
         <!--  <span>等级</span>
          <span>性别</span> -->
          <!-- <p>台湾歌手张惠妹</p> -->
        </div>
        <!--  -->
        <div class="sl_nav_down">
          <ul>
            <li>
              <i>112</i>
              <p>动态</p>
            </li>
            <span>|</span>
            <li>
              <i>112</i>
              <p>动态</p>
            </li>
            <span>|</span>
            <li>
              <i>112</i>
              <p>动态</p>
            </li>
          </ul>
          <p>所在地区：台湾省 - 台北市</p>
          <p>个人介绍：{{ songsArtistList.briefDesc }}</p>
        </div>
      </dd>
    </div>
    <div class="sl_nav_ct">
      <div class="nav_ct_bar">
        <span>听歌排行</span>
        <h4>累计听歌24</h4>
        <!-- <div><span>最近一周</span><span>|</span><span>所有时间</span></div> -->
      </div>
      <ul>
        <li v-for="(allSons, index) in allSonsList" :key="index">
          <span>{{ index + 1 }}</span> <i class="el-icon-video-play" @click="getMusicById(allSons)"></i>
          <div>
            <a >{{ allSons.name }}</a
            ><a style="color: gray">{{ songsArtistList.name }}</a>
          </div>
        </li>
      </ul>
    </div>
    <el-pagination
      style="text-align: center"
      background
      layout="prev, pager, next"
      :page-size="100"
      :total="songsArtistList.musicSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allSonsList: [],
      songsArtistList: [],
    };
  },
  mounted() {
    this.getSongsArtList();
  },
  methods: {
    async getSongsArtList() {
      let res = await this.$API.songsArtist(this.$route.query.id);
      if (res.code == 200) {
        this.allSonsList = res.songs;
      }
      let res1 = await this.$API.songsSimiist(this.$route.query.id);
      this.songsArtistList = res1.data.artist;
    },
    getMusicById(allSons){
        this.$store.dispatch('m_plays/getMusicUrlList',allSons.id)
    }
  },
};
</script>

<style scoped lang="scss">
.sl_nav {
  width: 48vw;
  margin: auto;
  .sl_nav_top {
    display: flex;
    justify-content: space-between;
    dt {
      padding: 20px;
    }
    dd {
      padding: 20px 0;
      margin-right: auto;
      .sl_nav_up {
        border-bottom: 2px solid red;
        span {
          font-size: 20px;
          margin: 10px 5px;
        }
      }
      .sl_nav_down {
        margin: 20px 0;
        p {
          margin: 5px 0;
        }
        ul {
          display: flex;
          justify-content: space-around;
        }
      }
    }
    img {
      width: 140px;
      height: 140px;
    }
  }
  .sl_nav_ct {
    .nav_ct_bar {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid red;
      h4 {
        margin-right: auto;
        margin-left: 20px;
      }
    }
    li {
      a {
        margin-left: 20px;
      }
      span {
        display: inline-block;
        width: 40px;
        text-align: center;
      }
      margin: 20px 0;
      padding: 5px 0;
      display: flex;
      div {
        display: flex;
      }
    }
  }
}
</style>