<template>
  <div v-cloak>
    <div class="h_bar" v-if="$route.path==='/home'">
    <div class="h_wrap">
      <div class="swiper-left">
        <el-carousel trigger="click" height="285px">
          <el-carousel-item v-for="(banner,index) in banners" :key="index">
            <img :src="banner.imageUrl" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="swiper-right">
        <el-button type="primary" class="swiper-right-btn"
          >下载客户端</el-button
        >
        <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
      </div>
    </div>
    <!--  -->
    <div class="h_rl">
      <div class="h_nav">
        <Smallcte :playlists="playlists">
          <a href="" class="s_navbar-big"
            ><i class="el-icon-headset"></i>热门推荐</a
          >
          <div class="s_navbar-left">
            <a href="">华语</a>
            <span>|</span>
            <a href="">流行</a>
            <span>|</span>
            <a href="">摇滚</a>
            <span>|</span>
            <a href="">民谣</a>
            <span>|</span>
            <a href="">电子</a>
            <span></span></div
        ></Smallcte>
        <Smallcte v-if="token" :playlists="Datasongs">
          <a href="" class="s_navbar-big"
            ><i class="el-icon-headset"></i>个性化推荐</a
          ></Smallcte
        >
        <Smallcte :playlists="newsongList">
          <a href="" class="s_navbar-big"
            ><i class="el-icon-headset"></i> 新碟上架</a
          ></Smallcte
        >
      </div>
      <div class="h_nav_right">
       <div  v-if="token">
          <div class="h_user_top" >
          <img
            :src="userInfo.profile.avatarUrl"
            style="width: 80px; height: 80px"
          />
          <div class="h_user_top1">
            <a href="">用户名</a>
            <a href="">等级</a>
            <el-button type="primary" @click.native="cs">签到</el-button>
          </div>
        </div>
        <div class="h_user_down">
          <ul>
            <li><strong>1</strong><span>动态</span></li>
            <li><strong>1</strong><span>关注</span></li>
            <li><strong>1</strong><span>粉丝</span></li>
          </ul>
        </div>
       </div>
 <div v-else class="h_user_top2"> 
            <h6>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</h6>
            <el-button type="danger" size="mini" class="user_top2_btn" @click="login">用户登录</el-button>
          </div>
        <ul class="h_sing">
          <h3><span>入驻歌手</span> <a href="/#">查看全部></a></h3>
          <li v-for="topsongs in topsongsList" :key="topsongs.id" @click="songsById(topsongs)">
            <img
              :src="topsongs.img1v1Url"
              style="width: 50px; height: 50px"
            />
            <div class="h_sing_right">
              <span>{{topsongs.name}}</span>
              <p>{{topsongs.alias[0]}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view v-else></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "home",
  data() {
    return {
      banners: [],
      playlists: [],
      newsongList: [],
      Datasongs: [],
      topsongsList:[],
    };
  },
  components: {},
  computed: {
    ...mapState('m_user',["userInfo",'token']),
    date() {
      // let date = new Date().toLocaleString().slice(0,9).split('/').join('-');
      let timer = new Date()
      let y=timer.getFullYear()
      let m=timer.getMonth()+1
      m=m<10?'0'+m:m;
      let d=timer.getDate()
      d=d<10?'0'+d:d;
      let date = `${y}-${m}-${d}`
       return date
    },
  },
  mounted() {
    this.getbanners();
    this.getHotPlayList();
    this.getNewsongList();
    this.getDatasongsList();
    this.getTopsongsList();
  },
  methods: {
    async getbanners() {
      let res = await this.$API.getbanner();
      if (res.code == 200) {
        this.banners = res.banners;
      }
    }, //getNewsong
    async getHotPlayList() {
      let res = await this.$API.getHotPlayList();
      if (res.code == 200) {
        this.playlists = res.result.splice(0, 8);
      }
    }, //getDatasongs
    async getNewsongList() {
      let res = await this.$API.getNewsong();
      if (res.code == 200) {
        this.newsongList = res.result.splice(0, 4);
      }
    },
    async getDatasongsList() {
      let res = await this.$API.getDatasongs();
      
      if (res.code == 200) {
        this.Datasongs = res.recommend;
      }
    },
    async getTopsongsList() {
      let res = await this.$API.getTopsongs(10);
      if (res.code == 200) {
         this.topsongsList=res.artists
      }
    },
    login(){
      this.$router.push({path:'/login'})
    },
    songsById(topsongs){
      this.$router.push('/songsHot?id='+topsongs.id)
    },
    cs(){
        console.log(this.playlists);
    }
  },
};
</script>

<style scoped lang="scss">
[v-cloak]{display: none;}
.h_wrap {
  display: flex;
  justify-content: center;
  .swiper-left {
    width: 38vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-right {
    width: 14vw;
    height: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url("./images/home_left.png");
    background-size: 100% 100%;
    .swiper-right-btn {
      width: 150px;
      margin-top: auto;
    }
    span {
      color: #fff;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
}
.s_navbar-left {
  padding-left: 20px;
  margin-right: auto;
  a {
    margin: 0 5px;
  }
}
.s_navbar-big {
  font-size: 24px;
  line-height: 24px;
}
.h_rl {
  display: flex;
  justify-content: center;
  .h_bar {
    position: relative;
    .h_nav {
      padding: 1vw 1vw 3vw;
      position: absolute;
      left: 23.6vw;
      width: 36vw;
    }
  }
  .h_nav_right {
    margin-left: 2vw;
    width: 14vw;
  }
}
.h_user_top {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  .h_user_top1 {
    padding-left: 20px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
.h_user_down {
  margin: 20px 0;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
.h_sing {
  padding: 20px 20px;
  h3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  li {
    display: flex;
    justify-content: space-around;
    .h_sing_right {
      padding: 20px;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
.h_user_top2{
  height: 100px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h6{
    text-align: center;
  }
  .user_top2_btn{
    width: 80px;
    margin: auto;
  }
}
</style>