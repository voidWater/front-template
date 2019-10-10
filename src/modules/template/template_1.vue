<template>
	<div class="t1">
		<vc-utils ref="utils"></vc-utils>
		<div class="form-bar">
			<div class="title-bar">
					<i class="fa fa-th-large"></i>&nbsp;基本表单
			</div>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="审批人">
					<el-input v-model="formInline.user" placeholder="审批人"></el-input>
				</el-form-item>
				<el-form-item label="活动区域">
					<el-select v-model="formInline.region" placeholder="活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="content-bar">
			<div class="control-bar">
					<el-row>
						<el-button>默认按钮</el-button>
						<el-button type="primary">主要按钮</el-button>
						<el-button type="success">成功按钮</el-button>
						<el-button type="info">信息按钮</el-button>
						<el-button type="warning">警告按钮</el-button>
						<el-button type="danger">危险按钮</el-button>
					</el-row>
			</div> 
			<el-table
			  :data="tableData"
			  style="width: 100%">
			  <el-table-column
				prop="date"
				label="日期"
				width="180">
			  </el-table-column>
			  <el-table-column
				prop="name"
				label="姓名"
				width="180">
			  </el-table-column>
			  <el-table-column
				prop="address"
				label="地址">
			  </el-table-column>
			</el-table>
			<el-pagination
				background
				layout="prev, pager, next"
				:total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import vcUtils	from '../../components/vc-utils.vue'
export default {
  name: 'template_1',
	components:{vcUtils},
  data () {
	return {
	    formInline: {
          user: '',
          region: ''
        },
		tableData: [{
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		  }, {
			date: '2016-05-04',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1517 弄'
		  }, {
			date: '2016-05-01',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1519 弄'
		  }, {
			date: '2016-05-03',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1516 弄'
		  }],
		  ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        } 
	}
  },
	methods:{
			showLoading:function(){
					this.$refs.utils.showLoading()
			}
	}
}
</script>

<style>
	.t1{
		background-color: #f2f2f2;width: 100%;height: 100%;text-align: left;
	}
	.form-bar{
		width: 100%;box-sizing:border-box;padding: 5px 10px 20px 10px;background-color: #fff;margin-bottom: 20px;text-align: left;
	}
	.title-bar{
		margin-bottom: 20px;
	}
	.content-bar{
		width: 100%;height:auto;background-color: #fff;padding: 20px 0;
	}
	.control-bar{
		width:100%;box-sizing:border-box;padding: 5px 10px 20px 10px;background-color: #fff;border-bottom: 1.5px solid #ebeef5;
	}
</style>
