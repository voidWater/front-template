import template_1 from '@/modules/template/template_1'
import rich_text from '@/modules/template/rich-text'
let routes = [
	    {
	        path: '/template/t1',
	        name: 'template_1',
	        component: template_1,
	        meta: {}
	    },
		{
		    path: '/template/rt',
		    name: 'rich-text',
		    component: rich_text,
		    meta: {}
		}
	];
 
export default routes;