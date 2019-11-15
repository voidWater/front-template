export default {
	namespaced:true,
    state:{        //数据状态
		name:"origin"
	},
	getters:{
       
    },
	mutations:{   //修改状态，同步
		setState(state,payload){
			
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