<template>
  <div class="login_tab">
    <div class="login_tab_nab"><h1>手机号登录</h1> <span>X</span></div>
       <el-form  :model="LoginForm" ref="LoginForm" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="phone"
    label="手机号"
    :rules="[
      { required: true, message: '请输入手机号码', trigger: 'blur' },
      { pattern:/^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/, message: '请输入正确的手机号码', trigger: 'blur'}
    ]"
  >
  <!--  -->
    <el-input v-model="LoginForm.phone"></el-input>
  </el-form-item>
  <el-form-item
    label="验证码"
    prop="yanz"
    v-if="isShowLogin"
  >
    <el-input v-model="LoginForm.yanz"></el-input><el-button @click.prevent="getYanz" :disabled="isShowBtn" v-if="!isShowBtn">发送验证码  </el-button><el-button v-else>还有{{njj}}秒可以重新发送</el-button>
  </el-form-item>
  <el-form-item label="密码" prop="password" v-else>
    <el-input v-model="LoginForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('LoginForm')">登录 </el-button>   <span @click="ShowLogin">切换登录模式</span>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import {} from 'vuex'
export default {
    name:'login',
    data() {
      return {
        LoginForm:{
          phone:'',
          yanz:'', 
          password:''  
        },
        isShowBtn:false,
        isShowLogin:true,
        n:5,
      };
    },
    computed:{
      njj(){
        return this.n
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const {phone,yanz,password} = this.LoginForm;
            if(this.password===''){
this.$store.dispatch('m_user/getUserInfo',{phone,password,yanz})
            }
             else{
               this.$store.dispatch('m_user/getUserInfo',{phone,password,yanz})
             }
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async getYanz(){
        this.isShowBtn=true
          const{phone}=this.LoginForm
             let res = await this.$API.getCaptcha(phone)
          let timer = setTimeout(()=>{
              this.isShowBtn=false;
              clearTimeout(timer) 
              clearTimeout(timer1)
              this.n=5     
          },5000)
          let timer1 = setInterval(()=>{
             this.n--
          },1000)
      },
      ShowLogin(){
        this.isShowLogin=!this.isShowLogin
      }
    }
}
</script>

<style  scoped lang="scss">
  .login_tab{
    width: 20vw;
    padding: 20px;
    height: 25vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .login_tab_nab{
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      span{
        display: inline-block;
        width: 40px;
        text-align: center;
        line-height: 22px;
      }
    }
  }
</style>