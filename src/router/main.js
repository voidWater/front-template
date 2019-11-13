import main from '@/modules/main'
import HelloWorld from '@/modules/HelloWorld'
import template_1 from '@/modules/template/template_1'
import rich_text from '@/modules/template/rich-text'

import org_dert from '@/modules/userManage/org_dert'

import janView from '@/modules/jan/view'
import janCx from '@/modules/jan/cx'
import janMain from '@/modules/jan/main'
let routes = [
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
		    path: '/view/:id',
		    name: 'janView',
		    component: janView
		},
		{
		    path: '/cx/:id',
		    name: 'janCx',
		    component: janCx,
		    meta: {
		    	title: '修改昵称'
		    }
		},
		{
		    path: '/HelloWorld',
		    name: 'HelloWorld',
		    component: HelloWorld,
		    meta: {}
		},
	    {
	        path: '/main',
	        name: 'main',
	        component: main,
	        meta: {},
			children: [
				{
				  path: 'profile',
				  component: template_1
				},
				{
				  path: 'posts',
				  component: rich_text
				},
				{
				  path: 'userManage',
				  component: org_dert
				}
			]
	    }
	];
 
export default routes;