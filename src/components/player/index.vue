<template>
  <div class="player_main">
    <div class="player_box" v-if="isShowCrl">
      <div class="player_boxT">
        <h1>播放列表{{`(${songsLists.length})`}}</h1>
        <span @click="allClear">清空列表</span>
      </div>
      <div class="player_boxM">
        <h1 v-if="songsLists&&songsLists.length===0">还没添加任何歌曲</h1>
        <ul v-else>
          <li v-for="(item,index) in songsLists" :key="item.id" :class="{active:currentIndex===index}">
            <span>{{item.name}}</span>
            <div class="pbl_box">
              <span>{{item.songer}}</span> <span>{{item.dt | slTime}}</span
              ><i class="el-icon-delete" style="font-size: 16px" @click="clearListItem(index)"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="m_player">
      <div class="m_play">
        <!--  -->
        <div class="m_play_left">
          <i class="el-icon-d-arrow-left" @click="prevPlay"></i>
          <i
            class="el-icon-video-play"
            v-if="isShowPlay"
            @click="audioPlay"
          ></i>
          <div v-else @click="controlPlay">
            <i class="el-icon-video-play" v-if="isPlay"></i>
            <i class="el-icon-video-pause" v-else></i>
          </div>
          <i class="el-icon-d-arrow-right" @click="nextPlay"></i>
        </div>
        <!--  -->
        <img src="" alt="" />
        <!--  -->
        <div class="m_play_center">
          <div v-if="songs.name">
            <a href="/#"> {{ songs.name }}</a> 演唱者：{{ songs.ar[0].name }}
            <span>{{ nowTime + "/" + endTimeY }}</span>
          </div>
          <div>
            <el-slider
              class=""
              v-model="currentTime"
              :min="0"
              :max="endTime"
              @change="changeCurrentTime"
              @mousedown.native="isChange = true"
            ></el-slider>
            <!-- controls -->
            <audio
              ref="audioTag"
              :src="currentPlayUrl"
              autoplay
              @play="play"
              @pause="pause"
              @canplay="getDuration"
              @timeupdate="timeupdate"
            >
              <source type="audio/mp3" />
            </audio>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div class="m_play_right">
          <div><a href=""> </a> <a href=""> </a><a href=""></a></div>
          <div >
            <a
              @click="isShowCrl=!isShowCrl"
              class="el-icon-menu"
              style="font-size: 18px; cursor: pointer; margin-left: 80px"
              >播放列表</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Player",
  data() {
    return {
      currentTime: 0,
      endTime: 0,
      songs: [],
      playSongs: [],
      isShowPlay: true,
      isPlay: false,
      currentIndex: 0,
      isChange: false,
      isShowCrl:false
    };
  },
  computed: {
    ...mapState("m_plays", ["MusicUrlList", "songsId","songsLists"]),
    songsLists:{
      get(){
        return this.$store.state.m_plays.songsLists
      },
      set(val){
        this.$store.state.m_plays.songsLists=val
    },},
    currentPlayUrl() {
      return (
        this.MusicUrlList[this.currentIndex] &&
        this.MusicUrlList[this.currentIndex].url
      );
    },
    endTimeY() {
      let m = Math.floor(this.endTime / 60);
      m = m < 10 ? "0" + m : m;
      let s = Math.floor(this.endTime % 60);
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    },
    nowTime() {
      let m = Math.floor(this.currentTime / 60);
      m = m < 10 ? "0" + m : m;
      let s = Math.floor(this.currentTime % 60);
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    },
  },
  mounted() {
    this.getMusicUrlx();
  },
  methods: {
    async getMusicUrlx() {
      let res = await this.$API.getMusicIds(
        this.MusicUrlList[this.currentIndex].id
      );
      if (res.code == 200) {
        this.songs = res.songs[0];
        //  this.isShowPlay=false
      }
    }, // 播放
    audioPlay() {
      this.$refs.audioTag.play();
      this.isShowPlay = !this.isShowPlay;
    },
    //暂停
    controlPlay() {
      this.isPlay = !this.isPlay;
      if (!this.$refs.audioTag.paused) {
        this.$refs.audioTag.pause(); // 停止播放
      } else {
        this.$refs.audioTag.play(); // 开始播放
      }
    },
    prevPlay() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.MusicUrlList.length - 1
          : this.currentIndex - 1;
      this.$nextTick(() => {
        this.audioPlay();
      });
    },
    nextPlay() {
      this.currentIndex =
        this.currentIndex === this.MusicUrlList.length - 1
          ? 0
          : this.currentIndex + 1;
      this.$nextTick(() => {
        this.audioPlay();
      });
    },
    play() {},
    pause() {
      this.isPlay = true;
    },
    getDuration() {
      this.endTime = this.$refs.audioTag.duration;
    },
    timeupdate(e) {
      if (this.isChange === true) return;
      this.currentTime = e.target.currentTime;
    },
    changeCurrentTime(value) {
      this.currentTime = value;
      this.$refs.audioTag.currentTime = value;
      this.isChange = false;
    },
    allClear(){
      this.$store.dispatch('m_plays/allClearX')
    },
    clearListItem(index){
        this.$store.dispatch('m_plays/allClearItem',index)
    }
  },
  watch: {
    currentIndex(val, oval) {
      this.getMusicUrlx();
    },
    songsId(val, oval) {
      this.getMusicUrlx();
    },
  },
  filters:{
     slTime(value){
      let m = Math.floor(value/1000 / 60);
      m = m < 10 ? "0" + m : m;
      let s = Math.floor(value/1000 % 60);
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    }
  }
};
</script>

<style scoped lang="scss">
.m_player {
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: rgb(46, 46, 46);
  font-size: 12px;
  color: #e8e8e8;
  margin: auto;
  .m_play {
    width: 52vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .m_play_left {
      width: 160px;
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      i {
        font-size: 30px;
        border-radius: 15px;
        color: #d33a31;
        margin: 0 10px;
      }
    }
    .m_play_center {
      width: 30vw;
      margin-right: auto;
      el-slider {
        width: 80%;
      }
      audio {
        height: 30px;
        width: 80%;
        margin: 5px 0;
      }
      .el-slider {
        height: 5px;
      }
    }
    .m_play_right {
      width: 300px;
    }
  }
}
.player_main {
  .player_box {
    border-radius: 10px;
    position: fixed;
    left: 26vw;
    bottom: 60px;
    padding: 20px 40px;
    width: 40vw;
    height: 300px;
    opacity: 0.8;
    background-color: rgb(23, 23, 23);
    color: #fff;
    z-index: 999;
    .player_boxT {
      display: flex;
      justify-content: space-between;
    }
    .player_boxM {
      margin: 10px;
      li {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        .pbl_box {
          width: 10vw;
          display: flex;
          justify-content: space-around;
          align-items: center;
          span{
            width: 5vw;
          }
        }
      }
    }
  }
}
.active{
  color: #d33a31;
  background-color:black;
}
</style>