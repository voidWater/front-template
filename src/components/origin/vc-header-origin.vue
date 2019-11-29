<template>
  <div id="header">
		<a href="#">
			<i v-if="!$store.state.view.shrinkMenu" class=" fa fa-outdent shrink-menu-button" @click="$store.state.view.shrinkMenu=!$store.state.view.shrinkMenu"></i>
			<i v-else class=" fa fa-indent shrink-menu-button" @click="$store.state.view.shrinkMenu=!$store.state.view.shrinkMenu"></i>
		</a>
		 <a href="#">
		 	<i class=" fa fa-arrows-alt full-button" @click="fullScreen"></i>
		 </a>
  </div>
  
</template>

<script>
export default {
  name: 'vc-menu-origin',
  data () {
    return {
		show:true
    }
  },
  methods:{
	fullScreen:function(){
		var docElm = document.documentElement;

		//W3C  

		if (docElm.requestFullscreen) {  

			docElm.requestFullscreen();  

		}

		//FireFox  

		else if (docElm.mozRequestFullScreen) {  

			docElm.mozRequestFullScreen();  

		}

		//Chrome等  

		else if (docElm.webkitRequestFullScreen) {  

			docElm.webkitRequestFullScreen();  

		}

		//IE11

		else if (elem.msRequestFullscreen) {

		  elem.msRequestFullscreen();

		}
		
		if (document.exitFullscreen) {  

		document.exitFullscreen();  

		}  

		else if (document.mozCancelFullScreen) {  

			document.mozCancelFullScreen();  

		}  

		else if (document.webkitCancelFullScreen) {  

			document.webkitCancelFullScreen();  

		}

		else if (document.m**itFullscreen) {

			  document.m**itFullscreen();

		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only //e9edf7 -->
<style scoped>
#header{
	background-color: #eef4f9;height: 45px;width: 100%;text-align: left;
}
.shrink-menu-button{
	font-size: 24px;
	line-height: 45px;
	margin-left: 20px;
	color:#B8BBBF
}
.shrink-menu-button:hover{
	color:#4c76af
}
.full-button{
	font-size: 24px;
	line-height: 45px;
	color:#B8BBBF;
	float: right;
	margin-right: 20px;
}
a{text-decoration: none;}
</style>
