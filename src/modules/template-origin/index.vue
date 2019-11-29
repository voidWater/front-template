<template>
	<div class="page-container">
		<el-row :gutter="40">
			<el-col :span="8">
				<div class="info-title-bar">
					<div class="title">欢迎使用VS-CMS</div>
					<div class="detail">This place of peace is my hometown</div>
					<span class="url">https://www.voidshell.org</span>
				</div>
			</el-col>
			<el-col :span="16">
				<div class="info-title-bar2">
					<div class="left-content">
						
					</div>
					<div class="">
						<el-image style="width: 80px; height: 80px":src="url"></el-image>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="info-data-bar">
					<div class="left-content">
						<div class="title">总访问量</div>
						<div class="line"></div>
						<div class="data">324,123</div>
					</div>
					<div class="right-icon"><i class="el-icon-sunrise-1"></i></div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="info-data-bar">
					<div class="left-content">
						<div class="title">总用户数</div>
						<div class="line"></div>
						<div class="data">4,321</div>
					</div>
					<div class="right-icon"><i class="el-icon-sunrise-1"></i></div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="info-data-bar">
					<div class="left-content">
						<div class="title">新增访问量 (月)</div>
						<div class="line"></div>
						<div class="data">6,543</div>
					</div>
					<div class="right-icon"><i class="el-icon-sunrise-1"></i></div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="info-data-bar">
					<div class="left-content">
						<div class="title">新增用户数</div>
						<div class="line"></div>
						<div class="data">1,123</div>
					</div>
					<div class="right-icon"><i class="el-icon-sunrise-1"></i></div>
				</div>
			</el-col>
		</el-row>
		
		<el-row>
			<el-col :span="12"><ve-line :data="chartData"></ve-line></el-col>
			<el-col :span="12">
				<ve-pie :data="chartData1" :settings="chartSettings"></ve-pie>
			</el-col>
		</el-row>
		<el-row :gutter="40">
			<el-col :span="10">
				<el-calendar v-model="value">
				</el-calendar>
			</el-col>
			<el-col :span="4">
				<el-timeline :reverse="reverse">
					<el-timeline-item
					  v-for="(activity, index) in activities"
					  :key="index"
					  :timestamp="activity.timestamp">
					  {{activity.content}}
					</el-timeline-item>
				  </el-timeline>
			</el-col>
			<el-col :span="10">
				<ve-histogram :data="chartData2" ></ve-histogram>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
export default{
	data(){
		return{
			reverse: true,
			activities: [{
			  content: '活动按期开始',
			  timestamp: '2018-04-15'
			}, {
			  content: '通过审核',
			  timestamp: '2018-04-13'
			}, {
			  content: '创建成功',
			  timestamp: '2018-04-11'
			}],
			value: new Date(),
			url: require('../../assets/template-origin/1574925460.png'),
			chartData: {
			  columns: ['日期', '访问用户', '下单用户', '下单率'],
			  rows: [
				{ '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
				{ '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
				{ '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
				{ '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
				{ '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
				{ '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
			  ]
			},
			chartData1: {
			  columns: ['日期', '访问用户'],
			  rows: [
				{ '日期': '1/1', '访问用户': 1393 },
				{ '日期': '1/2', '访问用户': 3530 },
				{ '日期': '1/3', '访问用户': 2923 },
				{ '日期': '1/4', '访问用户': 1723 },
				{ '日期': '1/5', '访问用户': 3792 },
				{ '日期': '1/6', '访问用户': 4593 }
			  ]
			},
			chartData2: {
			  columns: ['日期', '访问用户', '下单用户', '下单率'],
			  rows: [
				{ '日期': 1, '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
				{ '日期': 2, '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
				{ '日期': 5, '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
				{ '日期': 10, '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
				{ '日期': 20, '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
				{ '日期': 22, '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
			  ]
			}
		}
	},
	created:function(){
		
	},
	methods:{
		
	}
}
</script>

<style scoped>
.page-container{padding:30px;}
.info-title-bar{background-color: #3054c3;padding: 20px;margin: 0px 0px 25px 0;text-align: left;color: #FFFFFF;border-radius: 5px;}
.info-title-bar .title{font-size: 24px;letter-spacing: 10px;}
.info-title-bar .url{font-size: 10px;background-color: #4772cd;padding: 5px 10px;display: inline-block ;margin-top: 10px;border-radius: 10px;}

.info-title-bar2{background-color: #d5b77a;padding: 20px;margin: 0px 0px 15px 0;text-align: left;color: #FFFFFF;border-radius: 5px;display: flex;justify-content:space-between;}
.info-title-bar2 .left-content{width:600px}
.info-title-bar2 .url{font-size: 10px;background-color: #4772cd;padding: 5px 10px;display: inline-block ;margin-top: 10px;border-radius: 10px;}

.info-data-bar{background-color: #f1f0f0;display: flex;justify-content:space-between;text-align: left;box-shadow: 3px 3px 5px 1px #c5c5c5;margin-bottom: 30px;}
.info-data-bar .left-content{height: 75px;margin: 10px 0 0 10px;}
.info-data-bar .left-content .title{font-size: 18px;}
.info-data-bar .left-content .data{font-size: 26px;}
.info-data-bar .left-content .line{width: 50px;height: 2px;background-color: #000000;}
.info-data-bar .right-icon{font-size: 32px;background-color: #3054c3;line-height: 85px;padding: 0 20px;color: #FFFFFF;}
</style>
