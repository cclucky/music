<template>
  <div>
      <div class="smc_lis">
          <div class="smc_lis1" v-for="somItm in somList" :key="somItm.id">
          <img :src="somItm.picUrl"  style="width:140px;height:140px">
          <h1 style="width:130px">{{somItm.name}}</h1>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'SomllCars',
    props:['somList']
}
</script>

<style scoped lang="scss">
.smc_lis{
  width: 58vw;
  padding: 10px;
  height: auto;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-wrap: wrap;
  .smc_lis1{
      margin: 15px;
  }
}
</style>