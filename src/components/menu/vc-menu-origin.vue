<template>
  <div id="menu">
		<div class="title"><img style="margin-top:10px" src="../../assets/template-origin/title.png"></div>
		<div class="user-bar">
			<div style="margin-left: 20px; width: 36px;height:36px;display: inline-block;"><i class="fa fa-user-circle"></i></div>
			<div style="width: 36px;height:36px;display: inline-block;">username</div>
		</div>
		<div v-for="(item,index) in menuItems">
			<a href="#"><div class="menu-itme" v-bind:class="{ 'menu-active': item.active }" @click="menuOpen(item)">
				<i :class="item.icon">&nbsp;&nbsp;</i>{{item.name}}<div class="arr-right" >&nbsp;
				<i v-if="item.childs.length>0&&!item.active" class="fa fa-angle-right"></i>
				<i v-if="item.childs.length>0&&item.active" class="fa fa-angle-down"></i>
				</div></div></a>
			<el-collapse-transition>
				<div v-if="item.childs.length>0 && item.active">
					<a href="#" v-for="(subItem,index) in item.childs" @click="menuOpen(item,index,true)"><div class="sub-menu-itme " v-bind:class="{ 'sub-menu-active': subItem.active }">
						 <i v-if="!subItem.active" class="fa fa-genderless" style="font-size: 8px;">&nbsp;&nbsp;</i>
					     <i v-else class="fa fa-circle" style="font-size: 8px;">&nbsp;&nbsp;</i>
					     {{subItem.name}}
					</div></a>
				</div>
			</el-collapse-transition>
		</div>
  </div>
  
</template>

<script>
export default {
  name: 'vc-menu-origin',
  data () {
    return {
		show:true,
		menuItems:[   {name:"海深时见鲸",code:"",path:"",active:false,invalid:true,icon:"fa fa-align-left",childs:[]},
					  {name:"海深时见鲸",code:"",path:"",active:false,invalid:true,icon:"fa fa-file-text",childs:[
						{name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						{name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						{name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						{name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						{name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]}
						]},
					  {name:"海深时见鲸",code:"",path:"",active:false,invalid:true,icon:"fa fa-align-left",childs:[]},
					  {name:"海深时见鲸",code:"",path:"",active:false,invalid:true,icon:"fa fa-file-text",childs:[]},
					  {name:"海深时见鲸",code:"",path:"",active:false,invalid:true,icon:"fa fa-text-height",childs:[
						  {name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						  {name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						  {name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						  {name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]},
						  {name:"林深时见鹿",code:"",path:"",active:false,invalid:true,childs:[]}
					  ]},
					  {name:"海深时见鲸",code:"",path:"",active:false,invalid:true,icon:"fa fa-cut",childs:[]},
				   ]
    }
  },
  methods:{
	menuOpen:function(item,index,flag){
		if(flag){
			item.childs.forEach(i=>{
				i.active=false;
			})
			item.childs[index].active=true;
		}else{
			if(item.active){
				this.menuItems.forEach(i=>{
					i.active=false;
				});
			}else{
				this.menuItems.forEach(i=>{
					i.active=false;
				});
				item.active=!item.active;
			}
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only //0c1a47 -->
<style scoped>
#menu{
	background-color: #192a5e;
	position: absolute;top: 0;bottom: 0;left: 0;width: 200px;
}
.title{
	background-color: #122150;
	height:72px;line-height: 72px;color:#fff;
}
.user-bar{
	color:#fff;height: 36px;line-height: 36px;margin-bottom: 10px;text-align: left;
	background-color: #717fac;
	padding: 10px;
}
.menu-itme{
	color:#cbcbcb;
	height: 36px;
	line-height: 36px;
	font-size: 14px;
	padding: 5px 0;
}
.menu-itme:hover{
	background-color: #0c1a47;
}
.menu-active{
	background-color: #122150;
}
.sub-menu-itme{
	color:#cbcbcb;
	height: 36px;
	line-height: 36px;
	font-size: 14px;
	padding: 5px 0;
	background-color: #122150;
}
.sub-menu-itme:hover{
	background-color: #0c1a47;
}
.sub-menu-active{
	color:#3963bc;
}
.arr-right{float:right;margin-right: 20px;}
a{text-decoration: none;}
</style>
