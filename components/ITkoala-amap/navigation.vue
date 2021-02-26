<template>
	<view class="amap-container">
		<view id="amap"></view>
		<view class="" id="panel"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	},
	mounted() {},
	methods: {}
}
</script>

<script module="amap" lang="renderjs">
import config from './config.js'
	
export default {
	data() {
		return {
			map: null,
			ownerInstanceObj: null //service层对象
		}
	},
	mounted() {
		if (typeof window.AMap === 'function') {
			this.initAmap()
		} else {
			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=' + config.JSAPIAK
			script.onload = this.initAmap.bind(this)
			document.head.appendChild(script)
		}
	},
	methods: {
		initAmap() {
			this.map = new AMap.Map('amap', {
				resizeEnable: true,
				center: [116.397428, 39.90923],//地图中心点
				zoom: 13 //地图显示的缩放级别
			})

			this.map.plugin('AMap.Driving', () => {
			  let driving = new AMap.Driving({
			  	map: this.map,
			  	panel: 'panel'
			  })
			  //   var  waypoints:[
					// new AMap.LngLat(116.722967, 40.047705),
					// new AMap.LngLat(116.606476, 39.842024),
					// new AMap.LngLat(116.57941, 39.91557),
					// new AMap.LngLat(116.722967, 40.047705)
					// ]
					
				 var points = [
				    { keyword: '北京市地震局（公交站）',city:'北京' },
				    { keyword: '北京站', city:'北京' }
				  ]
				
				  var opts = {
				    // 途经点参数，最多支持传入16个途经点
				    waypoints: [
				      { keyword: '北京站', city:'北京' }
				    ],
					province:'黑',
					number:'NH1N11'
				  }
			  // 根据起终点经纬度规划驾车导航路线
			  driving.search(points,opts, (status, result) => {
			  	if (status === 'complete') {
			  		console.log('绘制驾车路线完成')
			  	} else {
			  		console.log('获取驾车数据失败：' + result)
			  	}
			  })
			})
		}
	}
}
</script>

<style lang="scss" scoped>
#amap {
	width: 100%;
	height: 600rpx;
}
</style>
