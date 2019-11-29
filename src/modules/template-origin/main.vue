<template>
	<div id="app">
		<div id="menu">
			<vc-menu></vc-menu>
		</div>
		<div class="main" v-bind:class="{main2:$store.state.view.shrinkMenu}">
			<vc-header></vc-header>
			<vc-tab></vc-tab>
			<div id="page">
				<el-scrollbar style="height: 100%;">
				<el-collapse-transition>
				<router-view></router-view>
				</el-collapse-transition>
				</el-scrollbar>
			</div>
		</div>
	</div>
</template>
<script>
import vcMenu from '../../components/origin/vc-menu-origin.vue';
import vcHeader from '../../components/origin/vc-header-origin.vue';
import vcTab from '../../components/origin/vc-tab-origin.vue';
export default{
	name:"",
	components:{vcMenu,vcHeader,vcTab},
	data(){
		return{
		}
	},
	created:function(){
		this.$router.push({path:'/mainOrigin/index'})
		this.$store.state.view.tabs.push({name:"主页",code:"main",path:"/mainOrigin/index",showClose:true,active:true});
	},
	methods:{
	}
}
</script>
<style scoped>
#menu{
	z-index: 99999;
}	
.main{
	background-color: #F5F5F5;position: absolute;top: 0;bottom: 0;left: 200px;right: 0;
}
.main2{
	background-color: #F5F5F5;position: absolute;top: 0;bottom: 0;left: 50px;right: 0;
}
#page{
	position:absolute;left:0;right:0;top:75px;bottom:0;overflow:auto;padding-right: 1px;
}
</style>
