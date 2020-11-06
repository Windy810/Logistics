# 日历组件 lx-calendar可选择周与月支持左右滑动切换


```
<template>
	<view class="content">

		<lxCalendar @change="change"></lxCalendar>
	</view>
</template>

<script>
	import lxCalendar from '../../components/lx-calendar/lx-calendar.vue'
	export default {
		components:{
			lxCalendar,
		},
		data() {
			return {
				title: 'Hello'
			}
		},

		onLoad() {

		},
		methods: {
			change(e){
				console.log(e);
			}

		}
	}
</script>
```


事件 | 说明
---|---
change | 日期改变时执行

参数 | 类型 | 说明
---|---|---
value | 字符串 | 选中的日期 
dot_lists | 数组 | 显示点的日期





