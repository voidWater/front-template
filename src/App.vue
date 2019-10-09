<template>
  <div id="app">
	<header id="header" class="color">
		<div class="word">{{title}}</div>
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
import vcMenu from './components/vc-menu.vue';
import vcTab from './components/vc-tab.vue';
export default {
  name: 'App',
  components:{vcMenu,vcTab},
  data () {
    return {
      title: 'Welcome to Your room',
	  menu:[
		{name:"模板一",code:"null",router:"",active:false,
			subMenus:[{name:"一般界面",code:"null",parent:"模板一",router:"/template/t1"}],
		},
		{name:"模板二",code:"null",router:"",active:false,
			subMenus:[{name:"一般界面",code:"null",parent:"模板二",router:"/test/main"}],
		},
		{name:"百度地图用例",code:"null",router:"",active:false,
			subMenus:[{name:"概览-1",code:"null",parent:"百度地图用例",router:"/test/main"},
			{name:"概览-2",code:"null",parent:"百度地图用例",router:"/test/active"}],
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

<style>
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
.content{
	position:absolute;left:200px;right:0;top:55px;bottom:0;
}
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
	display:inline-block;margin-left:50px;line-height:45px;font-size:25px;
}
body{
	margin:0;
}
.color{
	background-color:#2e68ab;
}
</style>
