<template>
  <div class="ms_playL">
    <div class="ms_playL_left">
      <MyNavb>
        <template v-slot:myImg>
          <img :src="songs.al.picUrl" v-if="songs && songs.al" />
        </template>
        <template v-slot:navB>
          <div v-if="songs && songs.ar[0]" class="s_nav_b">
            <div>
              <span>单曲</span>
              <h1>{{ songs.al.name }}</h1>
            </div>
            <ul>
              <li>
                <span>歌手</span> <a href="">{{ songs.ar[0].name }}</a>
              </li>
              <li>
                <span>专辑</span> <a href="">{{ songs.al.name }}</a>
              </li>
            </ul>
          </div>
        </template>
        <template v-slot:dicSong>
            <div v-if="isOpenShow">
          <div class="nav_dic" v-html="lyric" >
          </div>
           <div class="nav_dicqqq" @click="isOpenShow=false"><p>展开 <i class="el-icon-bottom"></i></p></div>
           </div>
           <div v-else>
               <div  v-html="lyric"  class="nav_dic2">
                   </div>
                   <div class="nav_dicqqq" @click="isOpenShow=true"><p> 收起 <i class="el-icon-top"></i></p>
          </div>
           </div>
        </template>
      </MyNavb>
      <Decision :chType="0"></Decision>
    </div>
    <div class="ms_playL_right"></div>
  </div>
</template>

<script>
export default {
  name: "song",
  data() {
    return {
      songs: [],
      lyric: "",
      isOpenShow:true
    };
  },
  mounted() {
    this.getSongsLie();
    this.getLyricLists();
  },
  methods: {
    async getSongsLie() {
      let ids = this.$route.query.id;
      let res = await this.$API.getMusicIds(ids);
      if (res.code == 200) {
        this.songs = res.songs[0];
      }
    },
    async getLyricLists() {
      let id = this.$route.query.id;
      let res = await this.$API.getLyricList(id);
      if (res.code == 200) {
        let str = res.lrc.lyric
        this.lyric = str.replace(/\[.*\]/gm,"<br>")
      }
    },
    open(){
       
    }
  },
};
</script>

<style  scoped lang="scss">
.ms_playL {
  width: 58vw;
  margin: auto;
  display: flex;
  justify-content: center;
}
.s_nav_b {
  margin: 20px 0;
}
.nav_dic {
  margin: 20px auto; 
  width: 320px;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px 0;
  a {
    text-align: center;
  }
}
.nav_dic2{
    margin: 20px auto; 
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px 0;
  a {
    text-align: center;
  }
  
}
.nav_dicqqq{
    text-align: center;
    color: blue;
}
</style>