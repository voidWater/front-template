<template>
  <div class="hello">
		<img class="login-bg" src="../assets/login-background.jpg">
		<div class="login-bar">
			  <div >
				<img class="login-bar-content" src="../assets/a.png">
			  </div>
			  <div class="login-bar-content">
				<div class="login-line"><el-input
						placeholder="请输入密码"
						suffix-icon="el-icon-view"
						v-model="password">
					 </el-input>
				</div>	
				<div class="login-line"><el-input
						type="password"
						placeholder="请输入密码"
						suffix-icon="el-icon-view"
						v-model="password">
					 </el-input>
				</div>
				<div class="login-line">
					<el-button @click="login" type="primary">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp登&nbsp&nbsp&nbsp录&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</el-button>
				</div>
			  </div>
		</div>
		<router-link to="/main">login</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App333333'
    }
  },
	methods:{
		login:function(){
			this.$router.push({path:'/main'})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body{
	margin: 0;padding: 0;
	background-color:#e5e8ed;
}
.login-bg {
    width: 100%;height: 100%;position: absolute;top: 0;right: 0;left: 0;bottom: 0;margin: auto;z-index:-1;
	  filter: blur(6px);
}
.login-page{
	height:100%;
}
.login-title{
	font-size:40px;
	text-align:center;
	color:#fff;margin-top:200px;
}
.login-bar{
	width:40%;height:300px;background-color:#ffffff47;margin:50px auto 0 auto;padding:20px;
}
.login-bar .login-bar-content{
	width:50%;float:left;
}
.login-line{
	margin:30px 50px 30px 10px;color:
}
</style>
