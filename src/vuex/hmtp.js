export default {
	namespaced:true,
    state:{        //数据状态
		currTab:"首页",//tab
		tabs: [{
          title: '首页',
          name: '首页',
          content: '',
		  router:'/main',
		  visible:false
        }],
		coftMenu:false,//收缩菜单标识
		sCoftMenu:false//鼠标收缩菜单标识
	},
	getters:{
        not_show(state){//这里的state对应着上面这个state
            return state.currTab+"1213";
        }
    },
	mutations:{   //修改状态，同步
		setState(state,payload){
			
		},
		addTabs(state,payload){
			console.log(payload)
			for(let i = 0;i < state.tabs.length ;i++){
				if(state.tabs[i].name==payload.name){
					state.currTab = payload.name;
					return;
				}
			}
			state.tabs.push({
			  title: payload.name,
			  name: payload.name,
			  router: payload.router,
			  parent: payload.parent,
			  content: '5'+payload.name,
			  visible:false
			});
			state.currTab = payload.name;
		}
	},
	actions:{    //修改状态，异步
		setStateAsyn(context,payload){
		  /**
		   * 模拟异步的过程，2000毫秒后通过commit()方法执行mumations中的changeSearchContentByObject方法改变数据
		   * 同样，payload可以是单数据或通过对象的方式，传递多个数据
		   * 这里只举例通过对象传递多数据的情况
		   */
		  setTimeout(()=>{
			context.commit("setState",payload)
		  },2000)
		}
	}
}