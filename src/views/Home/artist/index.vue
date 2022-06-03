<template>
  <div class="sev_nav">
    <div class="sev_navInp"><el-input v-model="keywords" placeholder="输入搜索内容" @keyup.enter.native="getSearch"></el-input> <el-button style="border-radius: 10px;" size="mini" @click.native="getSearch"> <i class="el-icon-search" style="font-size:20px"> </i></el-button></div>
    <span> 搜索</span>
   <el-tabs v-model="type" @tab-click="handleClick" stretch>
    <el-tab-pane label="单曲" name="1">
       <!--  -->
       <el-table
    :data="searchList"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column>
       <template v-slot:default="{row}">
         <i class="el-icon-video-play" style="font-size:18px" @click="playSong(row)"></i>
           <span @click="getSongsById(row)">  {{ row.name}} </span>
      </template>
    </el-table-column>
     <el-table-column
     prop="artists[0].name"
      width="180">
    </el-table-column>
     <el-table-column
      width="180">
      <template v-slot:default="{row}">
           <span> {{ row.duration |slTime}}</span>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
      style="text-align: center;"
      :pageNo="pageNo"
      :page-size="pageSize"
      :limit="limit"
      :total="total"
       @current-change="currentchange"
     background
    layout="prev, pager, next"
    >
</el-pagination>
    </el-tab-pane>
    <el-tab-pane label="歌手" name="100">
      <SomllCars :somList="songListF"></SomllCars>
    </el-tab-pane>
    <el-tab-pane label="歌单" name="1000">
      <SongsList :playlists="playlists"></SongsList>
      <el-pagination
      style="text-align: center;"
      :pageNo="pageNo"
      :page-size="pageSize"
      :limit="limit"
      :total="total"
       @current-change="currentchange"
     background
    layout="prev, pager, next"
    >
</el-pagination>
    </el-tab-pane>
    <el-tab-pane label="视频" name="1004">
      <MvsList :mvsList="mvsList"></MvsList>
    </el-tab-pane>
    <el-tab-pane label="专辑" name="10">
      <SomllCars :somList="songListF"></SomllCars>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
     keywords:'',
     type: '1',
     timer:null,
     searchList:[],
     offset:0,
     pageNo:1,
     pageSize:5,
     total:0,
     limit:30,
     songListF:[],
     mvsList:[],
     playlists:[]
    };
  },
  created(){
    this.keywords=this.$route.query.keyword;
    this.type=this.$route.query.type
  },
  mounted() {
     this.getSearch()
  },
  methods: {
   handleClick(tab, event) {
        console.log(tab, event,this.type);
        this.getSearch()
      },
     async getSearch(){
     let res = await this.$API.getSearchList(this.keywords,this.limit,this.type,this.offset)
     console.log(res);
           if(res.code==200){
          switch (this.type) {
            case '1':
            this.searchList=res.result.songs
            this.total=res.result.songs.length
            break;
          case '100':
            this.songListF=res.result.artists
            break;
        case '10':
            this.songListF=res.result.albums
            break;
        case '1004':
            this.mvsList=res.result.mvs
            break;
             case '1000':
            this.playlists=res.result.playlists
            break;
          default:
            break;
        }
           }
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      playSong(row){
         this.$store.dispatch('m_plays/getMusicUrlList',row.id)  
      },
      currentchange(row){
        this.offset = row
        this.getSearch()
      },
       getSongsById(row){
          this.$router.push(`/song?id=${row.id}`)
  }
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
.sev_nav{
  width: 58vw;
  margin: auto;
  .sev_navInp{
    width: 12vw;
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }
  
}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>