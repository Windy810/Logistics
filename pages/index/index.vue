<template>
	<view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="">修改车辆信息</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-purple"></text>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
					<view class="cu-form-group">
						<view class="title">车辆类型</view>
						<input placeholder="1小型/2轻型/3中型/4重型" name="cartype" v-model="info.cartype"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">省份简称</view>
						<input placeholder="车牌单字简称" name="province" v-model="info.province"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">车牌号码</view>
						<input placeholder="车牌数字部分" name="number" v-model="info.number"></input>
					</view>
				<!-- 	<view class="cu-form-group">
						<view class="title">车高</view>
						<input placeholder="" name="height" v-model="info.height"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">车宽</view>
						<input placeholder="" name="width" v-model="info.width"></input>
					</view> -->
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-purple text-green" @tap="hideModal">取消</button>
						<button class="cu-btn margin-left text-white" style="backgroundColor: #7676b1;" @tap="modcarinfo">确定</button>

					</view>
				</view>
			</view>
		</view>
		
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
		<view class="flex topfixed text-white " >
			<view class="justify-start cuIcon-friend  padding-sm text-xxl margin-xs radius" @tap="showModal" data-target="viewModal"></view>
			<view class="flex-sub text-xl padding-sm margin-xs radius text-center">外运配送</view>
			<view class="justify-end cuIcon-more text-white text-xl padding-sm margin-xs radius" @click="toTravel"></view>
		</view>
		<didi-progress ref="progress" :configureData="configureData" :currentPercent="currentPercent" :canvasStyle="canvasStyle">
			<view class="padding-xl content">
				<view class="a1">车辆{{info.cartype}}——[{{info.province}}·{{info.number}}]</view>
				<view class="a2">186</view>
				<view class="a3">超过30.7%的司机</view>
				<view class="a4">还差114增长值升级白金</view>
			</view>
		</didi-progress>
		<view class=" s-card bg-grey shadow-lg">
			<view class="text-center padding-sm">·今日行驶情况·</view>
			<view class="flex solid-bottom justify-around">
				<view class=" margin-xs radius text-xl">配送地点</view>
				<view class=" margin-xs radius text-xl">花费时间</view>
				<view class=" margin-xs radius text-xl">偏航次数</view>
			</view>
			<view class="flex justify-around">
				<view class=" margin-xs radius text-xl">3处</view>
				<view class=" margin-xs radius text-xl">235分钟</view>
				<view class=" margin-xs radius text-xl">2次</view>
			</view>
		</view>

		<view class="padding-sm white-card bg-white shadow-lg radius">
			<view class="text-center">-今日配送任务-</view>
			<view class="cu-timeline">
				<view class="cu-item text-gray" v-for="index in plan">
					<view class="text-black">
						<text class="text-black">【{{index.status}}】</text>
						{{index.Distribution_point}}
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="flex solid-bottom padding justify-around shadow">
			
			
			<button style="backgroundColor: #7676b1;" type="primary" @click.stop="toWay">路线规划</button>
		
			
				<button class="circlebtn text-white" @click.stop="toCarNav">记录轨迹</button>
			
		</view> -->
		<view class="flex circlebtn text-white shadow-blur justify-center" @click.stop="toCarNav">
			<view class="padding-xl text-center text-xl">
				开始配送
			</view>
		</view>
		</scroll-view>
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-form-group">
					<view class="title">车辆类型</view>
					<input placeholder="1小型/2轻型/3重型/4重型" name="cartype" v-model="info.cartype"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">省份简称</view>
					<input placeholder="车牌单字简称" name="province" v-model="info.province"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">车牌号码</view>
					<input placeholder="车牌数字部分" name="number" v-model="info.number"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">车高</view>
					<input placeholder="以m为单位" name="height" v-model="info.height"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">车宽</view>
					<input placeholder="以m为单位" name="width" v-model="info.width"></input>
				</view>
				<view style="margin: 15rpx;" class="padding shadow">
					<button style="backgroundColor: #7676b1;" type="primary" @tap="modcarinfo">确认信息</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import didiProgress from '@/components/Yumcc-DiDiProgress/index.vue';

export default {
	components: {
		didiProgress
	},
	mounted() {
		this.$refs.progress.init();
	},
	data() {
		return {
			modalName:"DialogModal1",
			colorstatus:false,
			info:{
				cartype:null,
				province:'黑',
				number:'1NE11',
				height:"4m",
				width:"1.6m"
			},
			plan:[
					{
						status:'暂无数据',
						Distribution_point:'请填写车辆信息后查询相应配送任务'
					}
				// {
				// 	status:'已完成',
				// 	Distribution_point:'北京市顺义区李桥镇沿河村滨沿路2号'
				// },
				// {
				// 	status:'已完成',
				// 	Distribution_point:'北京市朝阳区黑庄户乡大鲁店甲一号'
				// },
				// {
				// 	status:'进行中',
				// 	Distribution_point:'北京市朝阳区双桥桥关西侧'
				// },
				// {
				// 	status:'未完成',
				// 	Distribution_point:'北京市顺义区高丽营镇金马工业区19号圣士鑫建材有限公司'
				// }
			],
			// 进度条配置参数
			configureData: [
				{
					percent: 5, // 百分比
					label: '白银', // 文字(等级用)
					num: 100 // 数值(显示用)
				},
				{
					percent: 23, // 百分比
					label: '黄金', // 文字(等级用)
					num: 150 // 数值(显示用)
				},
				{
					percent: 41, // 百分比
					label: '白金', // 文字(等级用)
					num: 300 // 数值(显示用)
				},
				{
					percent: 59, // 百分比
					label: '钻石', // 文字(等级用)
					num: 800 // 数值(显示用)
				},
				{
					percent: 77, // 百分比
					label: '星耀', // 文字(等级用)
					num: 1800 // 数值(显示用)
				},
				{
					percent: 95, // 百分比
					label: '黑金', // 文字(等级用)
					num: 3800 // 数值(显示用)
				}
			],
			// 当前百分比
			currentPercent: 28,
			// 绘制配置
			canvasStyle: {
				canvasBgColor: '#23253a', // canvas背景颜色
				percentText: {
					// 百分比文字样式
					color: '#FFF',
					fontSize: 11
				},
				configure: {
					color: '#3a384d', // 配置背景颜色
					circleWidth: 5, // 配置背景圆圈半径
					lineWidth: 3 // 配置背景圆线条的宽度
				},
				current: {
					color: '#f19756', // 最终背景颜色
					circleWidth: 5, // 最终背景圆圈半径
					lineWidth: 3 // 最终背景圆线条的宽度
				}
			}
		};
	},
	onLoad() {
		this.getcarinfo()
	},
	methods:{
		toWay(){
			uni.navigateTo({
				url: '/pages/waypoints/waypoints',
			})
		},
		toTravel(){
			uni.navigateTo({
				url: '/pages/travel/travel',
			})
		},
		toCarNav(){
			uni.navigateTo({
				url: '/pages/carnavigation/recordloc/recordloc'
			})
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target
		},
		hideModal(e) {
			this.modalName = null
		},
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
		},
		getcarinfo(){
			uniCloud.callFunction({
				name: 'getcarinfo'
			}).then((res) => {
				this.info=res.result.data[0].info
			}).catch((err) => {
				console.error(err)
			})
		},
		getplan(){
			uni.showLoading({
				title: '处理中...'
			})
			uniCloud.callFunction({
				name: 'getplan'
			}).then((res) => {
				uni.hideLoading()
				uni.showModal({
					content: `修改信息成功`,
					showCancel: false
				})
				// console.log(res.result.data)
				this.plan=res.result.data[this.info.cartype].plan
				// console.log(this.plan)
			}).catch((err) => {
				uni.hideLoading()
				uni.showModal({
					content: `查询失败，错误信息为：${err.message}`,
					showCancel: false
				})
				console.error(err)
			})
		},
		update() {
			uniCloud.callFunction({
				name: 'updatecarinfo',
				data: {
					info:this.info
				}
			}).then((res) => {
				console.log(res)
			}).catch((err) => {
				console.error(err)
			})
		},
		modcarinfo(e){
			this.update();
			this.modalName = null;
			this.getplan();
		}
	}
};
</script>

<style lang="less" scoped>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}
.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
.content {
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.a1 {
		margin-top: 10rpx;
		font-size: 30rpx;
	}
	.a2 {
		margin: 10rpx 0;
		font-size: 50rpx;
	}
	.a3 {
		font-size: 18rpx;
	}
	.a4 {
		margin-top: 10rpx;
		// padding: 5rpx 20rpx;
		border-radius: 20rpx;
		background-color: #363545;
		font-size: 20rpx;
	}

	.touming {
		background: rgba(121, 119, 156, 0.5);
	}
}
.s-card {
	margin-top: -2%;
	margin-left: 5%;
	border-radius: 10upx;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	width: 90%;
	z-index: 1;
	background: rgba(121, 119, 156, 0.5);
}
.white-card {
	margin-top: 6%;
	margin-left: 5%;
	border-radius: 20upx;
	width: 90%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;
	background: rgb(255, 255, 255);
}
.circlebtn{
	margin-top: 5%;
	border-radius: 50%;
	background-color: #7676b1;
	width: 200rpx;
	height: 200rpx;
	margin-left: 38%;
}
.topfixed{
	margin-top: 50rpx;
	margin-bottom: -50rpx;
	// position: fixed;
	top: 0rpx;
	width: 100%;
	// height: 30rpx;
	background-color: rgb(35,37,58);
}

.bottomfixed{
	position: fixed;
}
.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
