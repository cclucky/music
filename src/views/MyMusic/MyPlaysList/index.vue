<template>
  <div class="mp_list"><MyNavb class="ccce"></MyNavb>
    <MusicLists :trackID="$route.query.id" style="width:740px"></MusicLists>
    <Decision></Decision></div>
</template>

<script>
export default {
       name:'myplayslist',
       data() {
           return {
           }
       },
       created(){

       },
       mounted(){
         
       },
       methods:{
     
       },
     
}
</script>

<style scoped lang="scss">
.mp_list{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ccce{
        flex: 1;
    }
}
</style>