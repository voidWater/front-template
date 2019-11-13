<template>
	<div id="org_dert">
		<div class="fancy">
			<div class="tree">
				<div class="tree-bar"><span class="title">机构列表</span><div @click="openAddjgDialog" style="float:right"><i class="el-icon-plus"></i></div></div>
				<el-form>
					<el-input
					  placeholder="输入关键字进行过滤"
					  v-model="filterText">
					</el-input>
				</el-form>
				<el-tree
				  class="filter-tree"
				  :data="data"
				  :props="defaultProps"
				  default-expand-all
				  :filter-node-method="filterNode"
				  ref="tree">
				</el-tree>
			</div>
			<div class="info">
				<div class="control-bar">
					<
					<el-button>修改</el-button>
				</div>
			</div>
		</div>
		<el-dialog title="新增机构" :visible.sync="addjgdialogTableVisible" width="700px" >
		  <el-form :model="jgForm" :rules="jgRules" ref="jgForm" label-width="100px" style="text-align: left;">
			  <el-form-item label="机构名称" prop="name">
				<el-input v-model="jgForm.name"></el-input>
			  </el-form-item>
			  <el-form-item label="机构编码" prop="code">
				<el-input v-model="jgForm.code"></el-input>
			  </el-form-item>
			  <el-form-item label="选择区域" prop="region">
				 <el-col :span="11">
				   <el-select v-model="jgForm.value1" placeholder="请选择">
				  						<el-option
				  						  v-for="item in options"
				  						  :key="item.value"
				  						  :label="item.label"
				  						  :value="item.value">
				  						</el-option>
				  </el-select>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
				   <el-select v-model="jgForm.value1" placeholder="请选择">
						<el-option
						  v-for="item in options"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					  </el-select>
				</el-col>
			  </el-form-item>
			  <el-form-item label="电话" prop="phone">
			  				<el-input v-model="jgForm.phone"></el-input>
			  </el-form-item>
			  <el-form-item label="邮箱" prop="email">
			  				<el-input v-model="jgForm.email"></el-input>
			  </el-form-item>
			  <el-form-item label="地址" prop="addr">
			  				<el-input v-model="jgForm.addr"></el-input>
			  </el-form-item>
			  <el-form-item label="描述" prop="desc">
				<el-input type="textarea" v-model="jgForm.desc"></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" @click="submitForm('jgForm')">立即创建</el-button>
				<el-button @click="resetForm('jgForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
export default {
  name: 'org_dert',
  data () {
	return {
        filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
		addjgdialogTableVisible:false,
		jgForm:{},
		jgRules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
	}
  },
  created:function(){
	
  },
  methods:{
	 openAddjgDialog:function(){
		 this.addjgdialogTableVisible=!this.addjgdialogTableVisible;
	 }	
  }
}
</script>

<style scoped>
#org_dert{
	width: 100%;
	height: 100%;
	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
	background-color: #f4f4f4;		
}
.fancy {
  width: 100%;
  height: 100%;
  margin: auto auto;
  padding: 20px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  background-color: #f5f5f5;		  
}
.tree{
	width: 350px;
	position:absolute;left:20px;top:20px;bottom:20px;overflow:auto;
	background-color: #FFFFFF;
	padding: 20px;
	border: none;
	border-shadow:0 1px 1px rgba(0, 0, 0, 0.1);
}
.info{
	position:absolute;left:420px;top:20px;right:20px;bottom:20px;overflow:auto;
	background-color: #FFFFFF;
	
}
.tree-bar{
	text-align: left;
}
.tree-bar .title{
	font-size: 24px;
	font-weight: bold;
}
.control-bar{
	border-bottom: 1px solid #F4F4F4;
	padding: 10px;
	text-align: left;
}
</style>
