<template>
<div>
  <div class="m_top">
  <div class="m-top-nav">
      <div class="wrap-left">
      <h1 class="logo">
        <img src="./images/iconnav.png">
        <router-link href="/#" to="/home">网易云音乐</router-link>
        </h1>
      <ul class="m_nav">
        <li :class="{alive:currentSo===index?'alive':''}" v-for="(item1,index) in tabPyls" :key="index" @click="gotoOrder(index,$event)">
          <span
            ><a> <em>{{item1}}</em></a>
            <div class="low"></div></span
          >
        </li>
      </ul>
    </div>
    <div class="wrap-right"> 
      <div><el-input @keyup.native.enter="toSearch" v-model="keywords" placeholder="音乐/视频/电台/用户" size="mini" icon="el-icon-search"></el-input></div>
      <a href="/#">创作者中心</a>
      <div class="m_img"> 
        <img v-if="userInfo&&userInfo.profile" :src="userInfo.profile.avatarUrl"  style="width:40px;height:40px;border-radius: 20px;">
        <i class="m-tophead">99+</i>
         <div class="m_list"><ul>
        <li>我的主页</li>
        <li>我的消息</li>
        <li>我的等级</li>
        <li>vip会员</li>
        <li>个人设置</li>
        <li @click="logout">退出</li>
      </ul></div>
      </div>
  </div>
     
    </div>
  </div>  
   <div class="nav-down" >
      <a href="/#" v-for="(item,index) in pyls" :key="index" @click="changeAt(index,$event)"><em :class="{actives:index===currentSort?'actives':''}">{{item}}</em></a>
      </div>
   </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "tabbar",
  data() {
    return {
      input:'',
      pyls:['推荐','排行榜','歌单','歌手','主播电台','新碟上架'],
      tabPyls:['发现音乐','我的音乐','关注','音乐人','下载客户端'],
      currentSort:0,
      currentSo:0,
      keywords:''
    }
  },
  computed:{
    ...mapState('m_user',['userInfo'])
  },
  mounted() {
    // this.getBallList()
  },
  methods:{
    logout(){
      this.$store.dispatch('m_user/userLogout')
    },
  //  async getBallList(){
  //   let res= await this.$API.ballList()
  //   console.log(res);
  //   }
    changeAt(index,e){
      this.currentSort=index
      switch (e.target.innerText) {
        case '歌单':
           this.$router.push('/home/playLists')
          break;
      case '推荐':
           this.$router.push('/home')
          break;
          case '排行榜':
           this.$router.push('/home/toplist')  
          break;
          // case '歌手':
          //  this.$router.push('/home/artist')
          // break;
        default:
          break;
      }
  },
  gotoOrder(index,e){
    this.currentSo=index
    switch (e.target.innerText) {
        case '发现音乐':
           this.$router.push('/')
          break;
      case '我的音乐':
           this.$router.push(`/mymusic`)
          break;
        default:
          break;
      }
  },
  toSearch(){
    this.$router.push(`/home/artist?keyword=${this.keywords}&type=1`)
    this.keywords=''
  }
  }
};
</script>

<style scoped lang="scss">
// *{
//   margin: 0;
//   padding: 0;
//   a{
//     text-decoration: none;
//     color: #242424;
//   }
//   em{
//      font-style: normal;
//   }
// }
.m_top{
  height: 70px;
  display: flex;
  justify-content: space-around;
  white-space: nowrap;
  background-color: #242424;
  .m-top-nav{
    width: 1100px;
    display: flex;
  }
  a{
    color: gray;
    line-height: 70px;
    padding: 0 19px;
    font-size: 14px;
  }
  li{
    list-style-type: none;
  }
   .wrap-left{
     color: #fff;
     flex: 1;
     .logo{
       height: 70px;
         float: left;
         display: flex;
         img{
           width: 70px;
           height: 70px;
         }
         a{
           font-size: 24px;
           color: #fff;
         }
     }
     .m_nav{
       display: flex;
       justify-items: stretch;
       li{
         display: inline-block;
       }
       .alive{
         background-color: rgb(15, 15, 15);
          position: relative;
         .low{
           width: 0;
           height: 0;
           position: absolute;
           bottom: 0;
           left: 45%;
           border-top: 5px solid transparent;
           border-bottom: 5px solid red;
           border-left: 5px solid transparent;
           border-right: 5px solid transparent;
         }
       }
     }
   }
   .wrap-right{
 display: flex;
 justify-content: center;
 align-items: center;
   }
  .m_list{
    // display: none;
  }
  .m_img{
    position: relative;
    .m-tophead{
    position:absolute;;
    color: red;
    top: -5px;
    left: 25px;
  } 
   .m_list{
     display: none;
     position:absolute;;
     color: gray;
     background-color: rgb(43,43,43);
     min-width: 160px;
     font-size: 12px;
     text-align: center;
     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
     left: -60px;
      padding: 12px 16px;
   }
   &:hover .m_list{
     display: block;
   }
  } 
}
.nav-down{
  border: 3px solid red;
  background-color: red;
  display: flex;
  justify-content: center;
  padding-right: 70px;
  a{
    .actives{ 
      background-color:rgb(155,9,9);
    }
    em{
      color: #fff;
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px ;
    border-radius: 20px;
    line-height: 16px;
    font-size: 12px;
    }
  }
}

</style>