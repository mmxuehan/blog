<template>
  <div class="login">
    <!-- 这里是登录组件 -->
    
    <!-- 有邮箱登录和用户名登录两种方式 -->
    <diV>
      <!-- <router-link to="/login/loginname">用户名登录</router-link>
      <router-link to="/login/loginmail">邮箱登录</router-link>
      <router-view></router-view>-->
      <!-- 登录方式写在一起 -->
      <a href="javascript:;" class="login-type" @click="show = true" :class="{on:show}">用户名登录</a>
      <a href="javascript:;" class="login-type" @click="show = false" :class="{on: !show}">邮箱登录</a>
    </diV>

    <div class="noshow" :class="{on:show}">
      <!-- 用户名登录方式的input框 -->
      <el-row>
        <el-col :span="8">
          <label for="userName">用户名</label>
        </el-col>
        <el-col :span="16">
          <el-input placeholder="请输入内容" v-model="userName" id="userName" clearable></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <label for="userPassword">密码</label>
        </el-col>
        <el-col :span="16">
          <el-input placeholder="请输入密码" v-model="userPassword" id="userPassword" show-password></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="noshow" :class="{on: !show}">
      <!-- 邮箱登录方式的input框 -->
      <el-row>
        <el-col :span="8">
          <label for="userEmail">邮箱</label>
        </el-col>
        <el-col :span="16">
          <el-input placeholder="请输入内容" v-model="userEmail" id="userEmail" clearable></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <label for="userPassword">密码</label>
        </el-col>
        <el-col :span="16">
          <el-input placeholder="请输入密码" v-model="userPassword" id="userPassword" show-password></el-input>
        </el-col>
      </el-row>
    </div>
    <el-button  @click="login" round>登录</el-button>
    <!-- 忘记密码需要跳转到新的页面 -->
    <router-link to = "/forgetpsd">忘记密码</router-link>
    <!-- <a href="javascript:;" @click="forgetpsd"></a> -->
    <!-- 修改密码需要重新跳转到新的页面 -->
    <!-- <router-link @click='changepsd'>修改密码</router-link> -->
  </div>
</template>

<script>
import qs from "qs";
import { ajax } from "../network/request";

export default {
  name: "login",
  data() {
    return {
      input: "",
      show: true, //true代表用户名登录，false代表邮箱登录
      userName: "",
      userEmail: "",

      userPassword: "",
    };
  },
  methods: {
    login() {
      if (this.show) {
        //用户名登录
        let data = {
          userName: this.userName,
          userPassword: this.userPassword
        };
        ajax({
          url: "/user/login",
          method: "post",
          data: qs.stringify(data),
          // headers:{'token':"aaaaaaaaaa"}
        })
          .then(res => {
            console.log(res);
            // let res = JSON.parse(response);
            if (res.status == 0) {
              alert("登录成功,token为" + res.data);
            }
          })
          .catch(err => {
            alert("登录失败");
            console.log(err)
          });
      } else {
        //邮箱登录
      }
    },
    forgetpsd(){
      this.$router.replace = "/forgetpsd"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  line-height: 40px;
  text-align-last: justify;
  text-align: justify;
}
.login {
  font-size: 14px;
}
.login-type{
  float: left;
  /* margin: 5px 5px; */
  margin-left: 5px;
}
.noshow {
  display: none;
}
.on {
  display: block;
}
.el-row {
  margin-top: 20px;
}
</style>
