<template>
	<div id="app">
		<!-- <div>{{$store.state.view.name}}</div> -->
		<div id="menu">
			<vc-menu></vc-menu>
		</div>
		<div id="main">
			<vc-header></vc-header>
			<vc-tab></vc-tab>
		</div>
	</div>
</template>

<script>
import vcMenu from '../../components/menu/vc-menu-origin.vue';
import vcHeader from '../../components/menu/vc-header-origin.vue';
import vcTab from '../../components/menu/vc-tab-origin.vue';
export default{
	name:"",
	components:{vcMenu,vcHeader,vcTab},
	data(){
		return{
			
		}
	},
	created:function(){
		
	},
	methods:{
		
	}
}
</script>

<style scoped>

#main{
	background-color: #F5F5F5;
	position: absolute;top: 0;bottom: 0;left: 200px;right: 0;
}
</style>
