<template>
  <div class="s_tab_main">
      <!--  -->
       <div class="s_tab_main1"> <h1>歌曲列表</h1> <span v-if="MusicSongs.length">{{MusicSongs.length}}首歌</span></div>
       <!--  -->
       <el-table
    ref="singleTable"
    :data="MusicSongs"
    highlight-current-row
    @current-change="handleCurrentChange"
    size="mini"
    style="width: 80%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      label="歌曲标题">
       <template v-slot:default="{row}">
         <i class="el-icon-video-play" style="font-size:18px" @click="playSongs(row)"></i>
         <a  @click="getSongsById(row)"> {{row.name}}</a>
    </template>
    </el-table-column>
    <el-table-column
      label="时长"
      width="120">
      <template v-slot:default={row}>
             <span>{{`0${Math.floor(row.dt/1000/60)}:${Math.floor(row.dt/1000%60)}`}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手"
      width="120">
    </el-table-column>
     <el-table-column
      property="5"
      label="专辑"
      width="120">
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
  </div>
  </div>
</template>

<script>
export default {
     name:'MusicLists',
     props:['trackID'],
       data() {
      return {
        MusicSongs:[],
        currentRow: null,
      }
    },
    computed:{
   
    },
   mounted() {
       this.getAllTrackList()
   },
    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
        // this.$store.dispatch('m_plays/getMusicUrlList',val.id)
      },
      playSongs(row){
        this.$store.dispatch('m_plays/getMusicUrlList',row.id)
      },
    async getAllTrackList() {
        const{trackID} = this
      let res = await this.$API.allPlayTrackList(trackID);
      if(res.code==200){
        this.MusicSongs=res.songs
      }
  },
  getSongsById(row){
          this.$router.push(`/song?id=${row.id}`)
  }
    },
      watch:{
           '$route.query.id':{
               deep: true,
               immediate: true,
               handler(val, oldVal){
               this.getAllTrackList(this.$route.query.id)
           }
           }
       }
}
</script>

<style scoped lang="scss">
.s_tab_main{
    // width: 58vw;
    margin: auto;
    .s_tab_main1{
      h1{
        display: inline-block;
        padding: 0 20px;
      }
    }
}
</style>