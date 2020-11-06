<template>
	<view>
		<lxCalendar @change="change"></lxCalendar>
		<amap></amap>
	</view>
</template>

<script>
import lxCalendar from '../../components/lx-calendar/lx-calendar.vue';
import amap from '@/components/ITkoala-amap/amap.vue';
export default {
	components: {
		lxCalendar,
		amap
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.my-map {
	width: 750rpx;
}
.control-btn {
	position: fixed;
	flex-direction: column;
	top: 400rpx;
	left: 20rpx;
	align-items: center;
	/* background-color: #f00; */
}
.location {
	margin-bottom: 30rpx;
	flex-direction: column;
	align-items: center;
	z-index: 999;
}
.assemble {
	flex-direction: column;
	align-items: center;
}
.control-btn-location-img {
	width: 60rpx;
	height: 60rpx;
}
.control-btn-assemble-img {
	width: 80rpx;
	height: 80rpx;
}
.control-btn-txt {
	font-size: 19rpx;
	text-align: center;
}
.weather {
	position: fixed;
	bottom: 10rpx;
	right: 50rpx;
	background-color: #fff;
	flex-direction: row;
	align-items: center;
}
.weather-img {
	width: 50rpx;
	height: 50rpx;
}
.wearth-txt {
	color: #999999;
	font-size: 32rpx;
}
</style>
