<template>
  <div class="flool_main">
    <div class="flool_left">
      <ul>
        <li>服务条款<span>|</span></li>
        <li>隐私政策<span>|</span></li>
        <li>儿童隐私政策<span>|</span></li>
        <li>版权投诉<span>|</span></li>
        <li>投资者关系<span>|</span></li>
      </ul>
      <p>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</p>
      <p>粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</p>
    </div>
    <div class="flool_right">
      <ul>
        <li><i class="el-icon-platform-eleme"></i>
      <p>2</p></li>
        <li><i class="el-icon-picture-outline-round"></i>
      <p>用户认证</p></li>
        <li><i class="el-icon-upload"></i>
      <p>独立音乐人</p></li>
        <li><i class="el-icon-brush"></i>
      <p>赞赏</p></li>
        <li><i class="el-icon-money"></i>
      <p>视频奖励</p></li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "floor",
};
</script>

<style scoped lang="scss">
.flool_main {
  display: flex;
  padding: 20px 0;
  justify-content: center;
  .flool_left {
    li {
      display: inline-block;
    }
    margin-right: 200px;
  }
  .flool_right {
    ul{
      display: flex;
      justify-content: space-around;
      li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding-top: 15px;
        margin: 0 10px;
      }
    }
  }
}
</style>