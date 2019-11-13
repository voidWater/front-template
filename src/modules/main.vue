<template>
	  <div id="app">
		<header id="header" class="color">
			<div class="word">{{title}}</div>
			<div class="user-bar">
				<span style="margin:0 15px;line-height: 25px;font-size: 16px;">
					<i class="fa fa-search"></i>
				</span>
				<span style="margin:0 15px;line-height: 25px;font-size: 16px;">
					<i class="fa fa-envelope"></i>
				</span>
				<span style="margin:0 15px;line-height: 25px;font-size: 16px;">
					<el-badge :value="2" class="item">
						<i class="fa fa-bell"></i>
					</el-badge>
				</span>
				
			 <el-dropdown>
			  <span class="el-dropdown-link" style="margin-left: 15px;font-size: 16px;">
				<i class="fa fa-user"></i>&nbsp;{{user}}<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
				<el-dropdown-item>修改密码</el-dropdown-item>
				<el-dropdown-item>退出系统</el-dropdown-item>
			  </el-dropdown-menu>
			 </el-dropdown>
		</div>
		</header>
		<aside class="menu" :class="{sMenu:$store.state.hmtp.sCoftMenu}" >
			<vc-menu :items="menu" title="前端基础框架"></vc-menu>
		</aside>
	  <div class="content" :class="{sContent:$store.state.hmtp.coftMenu}">
			<div id="tab">
				<vc-tab></vc-tab>
			</div>
			<div id="page">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
import vcMenu from '../components/vc-menu.vue';
import vcTab from '../components/vc-tab.vue';
export default {
  name: 'main',
  components:{vcMenu,vcTab},
  data () {
	return {
	  title: 'Welcome to Your room',
	  user:"your name",
	  menu:[
		{name:"模板",code:"null",router:"",active:false,
			subMenus:[{name:"一般界面",code:"null",parent:"模板",router:"/main/profile"},
			{name:"富文本编辑",code:"null",parent:"模板",router:"/main/posts"}],
		},
		{name:"企业管理",code:"null",router:"",active:false,
			subMenus:[{name:"部门机构角色设置",code:"null",parent:"企业管理",router:"/main/userManage"},
			{name:"人员管理",code:"null",parent:"企业管理",router:"/main/userManage"}],
		}
		]
	}
  },
  created:function(){
	this.$router.push({path:'/main'})
  },
  methods:{

  }
}
</script>

<style >
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}
	#page{
	
		position:absolute;left:0;right:0;top:85px;bottom:0;overflow:auto;
	}
	#tab{
		position:absolute;left:0;right:0;top:0;
	}
/* 	.content{
		position:absolute;left:200px;right:0;top:55px;bottom:0;
	} */
	.sContent{
		left:35px;
	}
	.menu a{
		text-decoration:none
	}
	.menu{
		position:absolute;left:0px;top:55px;bottom:0;width:200px; border-right:1px solid #d8d8d8;overflow:auto;z-index: 999999;
		-webkit-box-sizing: border-box;
	       -moz-box-sizing: border-box;
	            box-sizing: border-box;
	}
	.sMenu{
		left:-165px;
	}
	.cMenu{
		left:0px;
	}
	#header{
		margin:0;padding:5px;text-align:left;color:#fff;height:45px;
	}
	#header .title{
		width:600px;
	}
	#header .word{
		display:inline-block;margin-left:50px;line-height:45px;font-size:25px;display: inline-block;
	}
	#header .user-bar{
		float:right;line-height: 45px;margin: 0 40px;
	}
	#header .user-bar .el-dropdown{
		color:#fff;
	}
	body{
		margin:0;
	}
	.color{
		background-color:#2e68ab;
	}
</style>
