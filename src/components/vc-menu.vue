<template>
  <div class="vc-menu" v-show="show">
	<div class="title"><i class="fa fa-eercast">&nbsp;&nbsp;</i>{{title}}
		<a href="#" @click="ssMenu"><div class="l-button"><i class="fa" :class="{'fa-angle-double-left':!$store.state.hmtp.coftMenu,'fa-angle-double-right':$store.state.hmtp.coftMenu}"></i></div></a>
	</div>
	<div  v-for="(item,index) in items" @click="openTab(item)" @mouseenter="enter" @mouseleave="leave">
			<router-link :to="item.router" >
			<div class="item" @click="item.active=!item.active">
					<span class="menu-name">{{item.name}}</span>					
				<i v-show="item.subMenus.length>0" class="fa fa-sort-desc" style="float:right"></i>
			</div>
			</router-link>
		 <el-collapse-transition>
		<div v-show="item.active">
			<div  v-for="(subItem,index) in item.subMenus" @click="openTab(subItem)">
				<router-link :to="subItem.router" ><div class="sub-item">{{subItem.name}}</div></router-link>
			</div>
		</div>
		</el-collapse-transition>
	</div>
  </div>
  
</template>

<script>
export default {
  name: 'vc-menu',
  props:['items','title'],
  data () {
    return {
		show:true
    }
  },
  methods:{
	openTab:function(val){
		if(val.subMenus!=undefined&&val.subMenus.length>0){
			return;
		}
		console.log(val.router);
		this.$store.commit("hmtp/addTabs",{"name":val.name,"code":val.code,"router":val.router,"parent":val.parent})
	},
	ssMenu:function(){
		this.$store.state.hmtp.coftMenu=!this.$store.state.hmtp.coftMenu
		this.$store.state.hmtp.sCoftMenu=!this.$store.state.hmtp.sCoftMenu
	},
	enter:function(){
			  if(this.$store.state.hmtp.coftMenu){
				   this.$store.state.hmtp.sCoftMenu=false;
			  }
	},
	leave:function(){
			  if(this.$store.state.hmtp.coftMenu){
			  	   this.$store.state.hmtp.sCoftMenu=true;
			  }
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
	line-height:50px;color:#fff;text-align: left;font-size: 16px;padding-left: 10px;
}
.title a{
	color: #fff; text-decoration: none;
}
.l-button{
	float:right;background-color:#1c608e;height:38px;line-height:38px;padding:0 10px
}
.vc-menu{
	font-size:14px;font-size:12px;color:#4a5a6a;height:100%;background-color:#4484ce;
}
.item{
	text-align:left;padding: 10px 20px;color:#fff;
}
.sub-item{
	text-align:left;padding: 10px 30px;background-color:#e8e8ef;color:#838A9D;
}
.menu-name{
	margin-left:10px;
}
h1, h2 {
  font-weight: normal;
}
</style>
