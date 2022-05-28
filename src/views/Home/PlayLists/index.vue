<template>
  <div><Smallcte :playlists="allPlayList">
      <a href="/#" class="s_navbar-big"
            ><i class="el-icon-headset"></i>全部 <el-button type="primary" size="mini">选择分类↓</el-button></a>
      </Smallcte></div>
</template>

<script>
export default {
    name:'PlayLists',
    data() {
        return {
            allPlayList:[]
        }
    },
    mounted(){
           this.getAllPlayList()
    },
    methods:{
        async getAllPlayList(){
          let res = await this.$API.allPlayList()
          if(res.code==200){
              this.allPlayList=res.result
          }
        }
    }
}
</script>

<style scoped lang="scss">
.s_navbar-big {
  font-size: 24px;
  line-height: 24px;
}
</style>