<template>
	<div class="t1">
		<div class="form-bar">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini" :inline="true" >
			  <el-form-item label="活动名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			  </el-form-item>
			  <el-form-item label="活动区域" prop="region">
				<el-select v-model="ruleForm.region" placeholder="请选择活动区域">
				  <el-option label="区域一" value="shanghai"></el-option>
				  <el-option label="区域二" value="beijing"></el-option>
				</el-select>
			  </el-form-item>
			  <el-form-item label="活动时间" required>
				<el-col :span="11">
				  <el-form-item prop="date1">
					<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
				  </el-form-item>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
				  <el-form-item prop="date2">
					<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
				  </el-form-item>
				</el-col>
			  </el-form-item>
			  <el-form-item label="即时配送" prop="delivery">
				<el-switch v-model="ruleForm.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="活动性质" prop="type">
				<el-checkbox-group v-model="ruleForm.type">
				  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
				  <el-checkbox label="地推活动" name="type"></el-checkbox>
				  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
				  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			  </el-form-item>
			  <el-form-item label="特殊资源" prop="resource">
				<el-radio-group v-model="ruleForm.resource">
				  <el-radio label="线上品牌商赞助"></el-radio>
				  <el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			  </el-form-item>
			  <el-form-item label="活动形式" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
			
		</div>
		<div class="content-bar">
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
		</div>
	</div>
</template>

<script>
export default {
  name: 'template_1',
  data () {
	return {
	    msg: 'Welcome to Your Vue.js App333333',
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
		
	}
}
</script>

<style>
	.t1{
		background-color: #f2f2f2;width: 100%;height: 100%;
	}
	.form-bar{
		width: 100%;padding: 20px 0;background-color: #fff;margin-bottom: 20px;
	}
	.content-bar{
		width: 100%;height:auto;
	}
</style>
