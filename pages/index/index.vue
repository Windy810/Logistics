<template>
	<view>
		<view class="flex topfixed" :style="{ backgroundColor: 'rgb(35,37,58)' }">
			<view class="justify-start cuIcon-friend text-white text-xxl padding-sm margin-xs radius"></view>
			<view class="flex-sub text-white text-xl padding-sm margin-xs radius text-center">finfin出车</view>
			<view class="justify-end cuIcon-more text-white text-xl padding-sm margin-xs radius" @click.stop="toRouteMap"></view>
		</view>
		<didi-progress ref="progress" :configureData="configureData" :currentPercent="currentPercent" :canvasStyle="canvasStyle">
			<view class="padding-xl content">
				<view class="a1">本期2020.7-2020.9</view>
				<view class="a2">186</view>
				<view class="a3">超过70.7%的用户</view>
				<view class="a4">还差114增长值升级白金</view>
			</view>
		</didi-progress>
		<view class="padding-sm s-card bg-grey shadow-lg">
			<view class="text-center">·今日行驶情况·</view>
			<view class="flex solid-bottom padding justify-around">
				<view class="padding-sm margin-xs radius">已配送3处</view>
				<view class="padding-sm margin-xs radius">around</view>
			</view>
		</view>

		<view class="padding-sm white-card bg-white shadow-lg radius">
			<view class="text-center">-今日配送任务-</view>
			<view class="cu-timeline">
				<view class="cu-item text-grey">
					<view class="text-black">
						<text class="text-black">20:00</text>
						【月球】快件已到达月球，准备发往地球
					</view>
				</view>
				<view class="cu-item text-grey">
					<view class="text-black">
						<text class="text-black">20:00</text>
						【月球】快件已到达月球，准备发往地球
					</view>
				</view>
				<view class="cu-item text-blue">
					<view class="text-black">
						<text class="text-black">20:00</text>
						【月球】快件已到达月球，准备发往地球
					</view>
				</view>
			</view>
		</view>
		<view style="margin: 15rpx;">
			<button style="backgroundColor: #aaaaff;" type="primary" @click.stop="toCarNav">点击出车</button>
		</view>
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
					label: '黄金', // 文字(等级用)
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
	methods:{
		toRouteMap(){
			uni.navigateTo({
				url: '/pages/routemap/routemap'
			})
		},
		toCarNav(){
			uni.navigateTo({
				url: '/pages/carnavigation/carnavigation'
			})
		},
	}
};
</script>

<style lang="less" scoped>
.content {
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.a1 {
		margin-top: 10rpx;
		font-size: 12rpx;
	}
	.a2 {
		margin: 10rpx 0;
		font-size: 60rpx;
	}
	.a3 {
		font-size: 10rpx;
	}
	.a4 {
		margin-top: 10rpx;
		padding: 5rpx 20rpx;
		border-radius: 20rpx;
		background-color: #363545;
		font-size: 10rpx;
	}

	.touming {
		background: rgba(121, 119, 156, 0.5);
	}
}
.s-card {
	margin-top: -5%;
	margin-left: 5%;
	border-radius: 10upx;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	width: 90%;
	z-index: 1;
	background: rgba(121, 119, 156, 0.5);
}
.white-card {
	margin-top: 10%;
	margin-left: 5%;
	border-radius: 20upx;
	width: 90%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;
	background: rgb(255, 255, 255);
}

.topfixed{
	
	top: 0rpx;
}
</style>
