import main from '@/modules/main'
import HelloWorld from '@/modules/HelloWorld'
import template_1 from '@/modules/template/template_1'
import rich_text from '@/modules/template/rich-text'
let routes = [
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
				}
			]
	    }
	];
 
export default routes;