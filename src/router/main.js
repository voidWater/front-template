import janView from '@/modules/jan/view'
import janCx from '@/modules/jan/cx'
import janMain from '@/modules/jan/main'

import mainOrigin from '@/modules/template-origin/main'
let routes = [
		{
		    path: '/mainOrigin',
		    name: 'mainOrigin',
		    component: mainOrigin,
		    meta: {},
			children:[
				
			]
		},
		{
		    path: '/janMain',
		    name: 'janMain',
		    component: janMain,
		    meta: {},
			children:[
				{
				  path: 'view',
				  component: janView
				},
			]
		},
		{
		    path: '/cx/:id',
		    name: 'janCx',
		    component: janCx,
		    meta: {
		    	title: '修改昵称'
		    }
		}
	];
 
export default routes;