<template>
	<div id="vc-utils" v-show='loading'>
		<div class="sysRic"><i class="fa fa-spinner fa-pulse"></i></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				loading:false
			}
		},
		methods:{
			showLoading:function(){
				this.loading=!this.loading;
			}
		}
	}
</script>

<style>
.sysRic{
	position: fixed;
	top:400px;
	left: 0;
	right: 0;
	margin:0 auto;
	z-index: 999999;
	width: 40px;
	height: 40px;
	background-color: #bbcad88f;
	color:#FFFFFF;
	text-align: center;
	line-height: 40px;
	border-radius: 10px;
	font-size: 20px;
}
</style>
