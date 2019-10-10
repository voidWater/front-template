<template>
  <div @contextmenu.prevent.native="rightClick">
	<el-tabs v-model="$store.state.hmtp.currTab" type="border-card" closable @tab-click="handleClick" @tab-remove="removeTab">
	  <el-tab-pane
		v-for="(item, index) in $store.state.hmtp.tabs"
		:key="item.name"
		:label="item.title"
		:name="item.name" >
		<span slot="label">
				<el-popover                                                                                                     
					placement="bottom"                                                                                          
					width="50"                                                                                                  
					trigger="manual"                                                                                            
					v-model="item.visible" @contextmenu.prevent.native="rightClick(item)">                                           		
					<template>
						<div style="text-align:center"><el-link type="info" @click="closeTabs(1,item)">关闭右边</el-link></div>    
						<div style="text-align:center"><el-link type="info" @click="closeTabs(2,item)">关闭左边</el-link></div>
						<div style="text-align:center"><el-link type="info" @click="closeTabs(3,item)">关闭其他</el-link></div>    
						<div style="text-align:center"><el-link type="info" @click="closeTabs(4,item)">关闭所有</el-link></div>																					
					</template>																									
					<el-button slot="reference"  style="border:0px;padding:0px">{{item.name}}</el-button> 			            
				</el-popover>
		</span>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item><i class="fa fa-rebel"></i></el-breadcrumb-item>
		  <el-breadcrumb-item v-show="item.parent">{{item.parent}}</el-breadcrumb-item>
		  <el-breadcrumb-item>{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	  </el-tab-pane>
	</el-tabs>
  </div>
</template>
<script>
export default {
  name: 'vc-tab',
  data() {
      return {
      }
    },
    methods: {
	  handleClick:function(val){//切换tab
	    if(val.name=="首页"){
				this.$router.push({path:'/main'})
				return
			}
			for(let i = 0;i < this.$store.state.hmtp.tabs.length;i++){
				if(val.name==this.$store.state.hmtp.tabs[i].name){
					this.$router.push({path:this.$store.state.hmtp.tabs[i].router})
					return;
				}
			}
	  }, 	
		rightClick:function(val){//打开contextMenu
				let tabs = this.$store.state.hmtp.tabs;
				for(let i = 0;i < tabs.length;i++){
						if(tabs[i].name!=val.name){
							tabs[i].visible=false;
						}
				}
				val.visible=!val.visible;
				this.$store.state.hmtp.tabs=tabs
		},
		closeTabs:function(val,item){//批量关闭
				let tabs = this.$store.state.hmtp.tabs;
				if(val == 1){//关闭右边
					for(let i = 0, j = 0;i < tabs.length;i++){
						if(tabs[i].name==item.name){
							j = i;
						}
						if(j>0){
							j++;
							this.removeTab(tabs[j].name);
						}
					}
					item.visible=false;
				}else if(val == 2){//关闭左边
					for(let i = 0;i < tabs.length;i++){
						if(tabs[i].name!=item.name){
							this.removeTab(tabs[i].name);
						}else{
							break;
						}
					}
					item.visible=false;
				}else if(val == 3){//关闭其他
					for(let i = 0;i < tabs.length;i++){
						if(tabs[i].name==item.name){
							item.visible=false;
							continue;
						}
						this.removeTab(tabs[i].name);
					}
				}else if(val == 4){//关闭所有
					for(let i = 0;i < tabs.length;i++){
						this.removeTab(tabs[i].name);
					}
				}
		},
    removeTab:function(targetName) {//关闭tab
				if(targetName=="首页"){
					return;
				}
        let tabs = this.$store.state.hmtp.tabs;
        let currTab = this.$store.state.hmtp.currTab;
        if (this.$store.state.hmtp.currTab === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
							currTab = nextTab.name;
							}
						}
					});
				}
				this.$store.state.hmtp.currTab = currTab;
				this.$store.state.hmtp.tabs = this.$store.state.hmtp.tabs.filter(tab => tab.name !== targetName);
				for(let i = 0;i < this.$store.state.hmtp.tabs.length;i++){
					if(currTab==this.$store.state.hmtp.tabs[i].name){
						this.$router.push({path:this.$store.state.hmtp.tabs[i].router})
						return;
					}
				}
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tabs--border-card{
	border:0px #fff
}
 a{
	text-decoration:none
}
.el-popover{
	padding:0;
}

</style>
