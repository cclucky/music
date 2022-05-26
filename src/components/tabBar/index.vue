<template>
<div>
  <div class="m_top">
  <div class="m-top-nav">
      <div class="wrap-left">
      <h1 class="logo">
        <img src="./images/iconnav.png">
        <a href="/#">网易云音乐</a>
        </h1>
      <ul class="m_nav">
        <li class="alive">
          <span
            ><a href="/#"> <em>发现音乐</em></a>
            <div class="low"></div></span
          >
        </li>
        <li>
          <span>
            <a href="/#"> <em>我的音乐</em></a>
            <div class="low"></div></span
          >
        </li>
        <li>
          <span
            ><a href="/#"> <em>关注</em></a>
            <div class="low"></div></span
          >
        </li>
        <li>
          <span>
            <a href="/#"> <em>音乐人</em></a>
            <div class="low"></div></span
          >
        </li>
        <li>
          <span
            ><a href="/#"> <em>下载客户端</em></a>
            <div class="low"></div></span
          >
        </li>
      </ul>
    </div>
    <div class="wrap-right"> 
      <div><el-input  v-model="input" placeholder="音乐/视频/电台/用户" size="mini" icon="el-icon-search"></el-input></div>
      <a href="/#">创作者中心</a>
      <div class="m_img"> 
        <img src="./images/user.png" style="width:40px;height:40px">
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
   <div class="nav-down">
      <a href="/#"><em class="actives">推荐</em></a>
      <a href="/#"><em>排行榜</em></a>
      <a href="/#"><em>歌单</em></a>
      <a href="/#"><em>主播电台</em></a>
      <a href="/#"><em>歌手</em></a>
      <a href="/#"><em>新碟上架</em></a>
      </div>
   </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      input:''
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('m_user/userLogout')
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