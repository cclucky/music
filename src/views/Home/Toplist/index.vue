<template>
  <div class="topList">
    <!-- 左边 -->
    <div class="topList_left">
      <h2>云音乐特色榜</h2>
      <ul>
        <li @click="updataTopList1(t1,index)" v-for="(t1,index) in topList1" :key="t1.id" :class="{active:isActive==index}">
          <div>
            <img :src="t1.coverImgUrl" style="width: 40px; height: 40px" />
            <div class="lul_1">
              <p>{{ t1.name }}</p>
              <p style="font-weight: 100">{{t1.updateFrequency}}</p>
            </div>
          </div>
        </li>
      </ul>
      <h2>全球媒体榜</h2>
      <ul>
        <li @click="updataTopList(t2,index)" v-for="(t2,index) in topList" :key="t2.id" :class="{active:isActive1===index}">
          <div>
            <span
              ><img :src="t2.coverImgUrl" style="width: 40px; height: 40px"
            /></span>
            <div class="lul_1">
              <p>{{ t2.name }}</p>
              <p style="font-weight: 100">{{t2.updateFrequency}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="topList_right">
      <!-- 上方 -->
      <div class="topList_right_t">
        <div>
          <img
            :src="topList2.coverImgUrl"
            style="width: 150px; height: 150px"
          />
        </div>
        <div class="topList_right_t1">
          <div>
            <h2>{{topList2.name}}</h2>
            <p>更新</p>
          </div>
          <div>
            <el-button
              type="primary"
              size="mini"
              >播放+</el-button
            >
            <el-button size="mini">收藏</el-button>
            <el-button size="mini">分享</el-button>
            <el-button size="mini">下载</el-button>
            <el-button size="mini">评论{{`(${total})`}}</el-button>
          </div>
        </div>
      </div>
      <div class="topList_right_b">
        <MusicLists :trackID="$route.query.id"></MusicLists>
        <Decision :chType="2" ref="cs"></Decision>
      </div>
      <!-- 组件 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "toplist",
  data() {
    return {
      topList1: [],
      topList: [],
      topList2:[],
      isActive:0,
      isActive1:'',
      total:0
    };
  },
  mounted() {
    this.getTopList();
  },
  methods: {
    async getTopList() {
      let res = await this.$API.getTopListDetail();
      if (res.code == 200) {
        this.topList2=res.list[0]
        this.$router.push(`/home/toplist?id=${this.topList2.id}`)
        this.topList1 = res.list.splice(0, 4);
        this.topList = res.list;
        this.total=this.$refs.cs.total
      }
    },
    updataTopList1(t,index) {
      this.isActive = index
      this.isActive1=-1
      this.topList2=t
      this.$router.push(`/home/toplist?id=${t.id}`)
      this.total=this.$refs.cs.total
    },
     updataTopList(t,index) {
      this.isActive1 = index
      this.isActive=-1
      this.topList2=t
      this.$router.push(`/home/toplist?id=${t.id}`)
      this.total=this.$refs.cs.total
    },
  },
};
</script>

<style scoped lang="scss">
.topList {
  width: 58vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  .topList_left {
    padding: 40px 20px;
    width: 12vw;
    ul {
      cursor: pointer;
      // vertical-align: middle;
      margin: 20px 0;
      li {
        margin: 15px 0;
        padding: 10px 0 10px 10px;
      }
      div {
        display: flex;
      }
    }
  }
  .topList_right {
    width: 46vw;
    margin-right: auto;
    .topList_right_t {
      padding: 40px;
      display: flex;
      img {
        margin-right: 50px;
      }
      .topList_right_t1 {
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .topList_right_b {
      width: 40vw;
      padding: 20px;
    }
  }
}
.lul_1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
}
.active {
  background-color: rgb(230, 230, 230);
}
</style>