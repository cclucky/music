<template>
     <div> 
       <!--  -->
       <el-table
    :data="playlists"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column>
       <template v-slot:default="{row}" >
         <i class="el-icon-video-play" style="font-size:20px"  @click="playSongs(row)"></i>
         <img :src="row.coverImgUrl" style="width:50px;height:50px">
           <span > {{row.name}} </span>
      </template>
    </el-table-column>
     <el-table-column
      width="180">
      <template v-slot:default="{row}">
           <span style="font-size:5px;color:gray"> by：{{row.creator.nickname}} </span>
      </template>
    </el-table-column>
     <el-table-column
      width="180">
      <template v-slot:default="{row}">
           <span style="font-size:5px;color:gray"> 共：{{row.trackCount}} 首</span>
      </template>
    </el-table-column>
     <el-table-column
      width="180">
      <template v-slot:default="{row}">
           <span style="font-size:8px">收听: {{row.playCount/10000}} 万</span>
      </template>
    </el-table-column>
  </el-table></div>
</template>

<script>
export default {
   name:'SongsList',
   props:['playlists'],
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
       playSongs(row){
      
        // this.$store.dispatch('m_plays/getMusicUrlList',row.id)
      }
    },
}
</script>

<style scoped lang="scss">
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>