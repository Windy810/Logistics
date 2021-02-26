<template>
	<view class=" amap-container">
		<view :change:prop="amap.updateEcharts" id="amap"></view>
		<!-- <view style="margin: 30rpx;"><button type="primary" @click="amap.onClick">定位当前位置</button></view> -->
		<view class="padding-sm radius shadow-blur cu-btn line-purple" style="margin: 10rpx;">
			<view  >经纬度：{{ currentPosition.lng }} {{ currentPosition.lat }}</view>
			
		</view>
		<view class="padding-sm radius shadow-blur cu-btn line-purple" style="margin: 10rpx;">
			<view>地址：{{ address }}</view>
			<!-- <button type="primary" @click="getMyLocation">定位当前位置</button> -->
		</view>
	</view>
</template>

<script module="amap" lang="renderjs">
import config from './config.js'

export default {
	watch:{
		currentPosition:{
			immediate:true,
			deep:true
		},
		address:{
			immediate:true,
			deep:true
		}
	},
	data() {
		return {
			map: null,
			ownerInstanceObj: null ,//service层对象
			markerList: [],
			currentPosition: {},
			// Latitude:"112"
			address: '',
			timer: null
		}
	},
	
	mounted() {
		if (typeof window.AMap === 'function') {
			this.initAmap()
		} else {
			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=' + config.JSAPIAK+'&plugin=AMap.Geocoder'
			script.onload = this.initAmap.bind(this)
			document.head.appendChild(script)
		}
	},

	methods: {
		initAmap() {
			this.map = new AMap.Map('amap', {
				resizeEnable: true,
				// center: [116.397428, 39.90923]
			});
			this.getMyLocation()
			this.recLocation()
			},
			// console.log("error")
		recLocation() {
			uni.showModal({
				content: `开始记录轨迹`,
				showCancel: false
			}),
			// console.log(Date.now());
			// this.isEnd=false;
			this.timer = setInterval(() => {
				// let that = this;
				// // setTimeout(() => {
				// // 	
				// // },2000);
				// console.log(this.isEnd)
				// if (that.isEnd === false){
				// 	that.getMyLocation();
				// 	that.count += 1;
				// }
				this.getMyLocation()
				// if (that.isEnd === true) {
				// 	clearInterval(that.timer);
				// 	console.log(that.count);
				// }
			}, 5000);
			// this.getMyLocation();
		},
		getMyLocation(){
			AMap.plugin('AMap.Geolocation', ()=>{
			        var geolocation = new AMap.Geolocation({
			            enableHighAccuracy: true,//是否使用高精度定位，默认:true
			            timeout: 3000,          //超过10秒后停止定位，默认：5s
			            buttonPosition:'RB',    //定位按钮的停靠位置
			            buttonOffset: new AMap.Pixel(0, 0),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
			            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

			        });
			        this.map.addControl(geolocation);
			        geolocation.getCurrentPosition((status,result)=>{
			            if(status=='complete'){
							console.log(result.position)
							let marker = new AMap.Marker({
							    position: [result.position.lng,result.position.lat]// 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
							})
							this.currentPosition.lng=result.position.lng
							this.currentPosition.lat=result.position.lat
							// 将创建的点标记添加到已有的地图实例：
							this.map.add(marker)
							let lnglat=[result.position.lng+'',result.position.lat+'']
							console.log(lnglat)
							this.getaddress(lnglat)
			                // onComplete(result)
			            }else{
			                // onError(result)
							console.log("cuowu")
			            }
			        });
			    });
		},


		//获取地址信息
		getaddress(lnglat){
			 var geocoder = new AMap.Geocoder({
			        city: "010", //城市设为北京，默认：“全国”
			        radius: 1000 //范围，默认：500
			    });
			geocoder.getAddress(lnglat, (status, result)=> {
				if (status === 'complete'&&result.regeocode) {
					this.address = result.regeocode.formattedAddress;
					console.log(this.address)
					// alert(this.address)
				}else{
					console.log('根据经纬度查询地址失败')
				}
			});
		},
		updateEcharts(newValue, oldValue, ownerInstance, instance) {
			// 监听 service 层数据变更
			this.ownerInstanceObj = ownerInstance
		},
		onClick(event, ownerInstance) {
			// 创建一个 Marker 实例：
			// let marker = new AMap.Marker({
			//     position: this.map.getCenter() // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
			// })
			// // 将创建的点标记添加到已有的地图实例：
			// this.map.add(marker)

			// 调用 service 层的方法
			ownerInstance.callMethod('onViewClick', {
				currentPosition: this.map.getCenter()
			})
		},
		// 获取当前定位
		    // getMyLocation() {
		    // 	let that = this;
		    // 	uni.getLocation({
		    // 		type: 'gch02',//uniapp只支持gch02坐标，用到map上的话一定要改
		    // 		success: function(res) {
		    // 			that.myLatitude = res.latitude;
						// // that.Latitude = res.latitude;
		    // 			that.myLongitude = res.longitude;
		    // 			console.log(that.myLatitude);
		    // 			console.log(that.myLongitude);
		    // 		},
		    // 		fail: function(e) {
		    // 			console.log(e);
		    // 		}
		    // 	});
		    // },
		    //解析定位结果
		    onComplete(data) {
		      this.signAddress = data.formattedAddress;
		    },
		    //解析定位错误信息
		    onError(data) {
		      console.log("定位失败:"+data.message);
		    },
	}
}
</script>

<style lang="scss" scoped>
#amap {
	width: 100%;
	height: 1300rpx;
}
</style>
