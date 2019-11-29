<template>
  <div id="tabs">
	<a href="#" v-for="(tab,index) in $store.state.view.tabs" @mouseenter="enter(tab)" @mouseleave="leave(tab)" @click="selected(tab)">
		<div class="tab-item" v-bind:class="{'tab-item-active':tab.active}"><i class="fa fa-book">&nbsp;&nbsp;</i>{{tab.name}}
			<div v-show="tab.showClose" class="tab-itam-close" @click="close(tab,index)">x</div>
		</div>
	</a>
  </div>
</template>

<script>
export default {
  name: 'vc-menu-origin',
  data () {
    return {
    }
  },
  methods:{
	close:function(tab,index){
		this.$store.state.view.tabs.splice(index, 1);
	},
	enter:function(tab){
		tab.showClose=true;
	},
	leave:function(tab){
		if(tab.active==true)return;
		tab.showClose=false;
	},
	selected:function(tab){
		var that = this;
		this.$router.push({path:tab.path})
		this.$store.state.view.tabs.forEach(t=>{
			t.active=false;
			that.leave(t);
		})
		tab.active=true;
		this.enter(tab);
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only //e9edf7 -->
<style scoped>
#tabs{
	background-color: #e9edf7;height: 27px;width: 100%;text-align: left;box-shadow: 3px 3px 5px 1px #c5c5c5;
}
.tab-item{
	height: 27px;
	width: 120px;
	display: inline-block;
	line-height: 27px;
	text-align: center;
	background-color: #e9edf7;
	margin-right:1px;
	color:#7e8c8d;
	font-size: 14px;
	/* background-color: #3963bc;color:#fff; */
}
.tab-item-active{
	background-color: #3963bc;color:#fff;
}
.tab-itam-close{
	background-color: #aec3f8;
	color:#fff;
	display: inline-block;
	width: 15px;
	height: 15px;
	font-size: 5px;
	line-height: 10px;
	float:right;
	border-radius: 0 0 0 20px;
	text-align: center;padding-left:3px ;
}
.tab-item:hover{
	background-color: #3963bc;color:#fff;
}

</style>
