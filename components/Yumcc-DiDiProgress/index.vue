<template>
  <view style="position: relative;">
    <view style="width:100vw; min-height:70vw;">
      <canvas
        :style="{ backgroundColor: canvasStyle.canvasBgColor }"
        style="position: absolute; z-index: -1; width: 100vw; min-height: 120vw;"
        canvas-id="progress">
      </canvas>
    </view>
    <view
      :style="{ width: `${contentWidth}px`, maxHeight: radius + 'px', marginTop: -radius * 1.3 + 'px', left: `calc((100vw - ${contentWidth}px) / 2)` }"
      style="position: absolute;top: 70vw;z-index: 99999;">
      <slot/>
    </view>
  </view>
</template>

<script>
  export default {
    computed: {
      contentWidth: function () {
        return this.radius * 1.5
      }
    },
    props: {
      // 配置数据
      configureData: {
        type: Array,
        default: () => {
          return [
            {
              percent: 5, // 百分比
              label: '白银', // 文字(等级用)
              num: 100 // 数值(显示用)
            },
            {
              percent: 23,
              label: '黄金',
              num: 150
            },
            {
              percent: 41,
              label: '白金',
              num: 300
            },
            {
              percent: 59,
              label: '钻石',
              num: 800
            },
            {
              percent: 77,
              label: '黄金',
              num: 1800
            },
            {
              percent: 95,
              label: '黑金',
              num: 3800
            }
          ]
        }
      },
      // 最终百分比
      currentPercent: {
        type: Number,
        default: 100
      },
      // canvas样式
      canvasStyle: {
        type: Object,
        default: () => {
          return {
            canvasBgColor: '#333', // canvas背景颜色
            percentText: { // 百分比文字样式
              color: '#FFF',
              fontSize: 13
            },
            configure: {
              color: '#555', // 配置背景颜色
              circleWidth: 5, // 配置背景圆圈半径
              lineWidth: 4, // 配置背景圆线条的宽度
            },
            current: {
              color: '#ff9411', // 最终背景颜色
              circleWidth: 5, // 最终背景圆圈半径
              lineWidth: 4, // 最终背景圆线条的宽度
            }
          }
        }
      }
    },
    data() {
      return {
        process: 0.0, // 当前进度
        circleX: 0, // 中心x坐标
        circleY: 0, // 中心y坐标
        radius: 0, // 圆环半径
        ctx: null
      }
    },
    methods: {
      // 初始化
      init () {
        const screenWidth = uni.getSystemInfoSync().screenWidth
        this.radius = (screenWidth / 2) * .7
        this.circleX = screenWidth / 2
        this.circleY = ((screenWidth) / 2)  * 1.1
        this.ctx = uni.createCanvasContext('progress', this)
        this.circleLoading = setInterval(() => {
          this.loading()
        }, 20)
      },
      // 绘制圆点旁边的数值文字
      drawPercentText (x, y, str, num) {
        this.ctx.font = this.canvasStyle.percentText.fontSize + "px April"
        this.ctx.textAlign = "center"
        this.ctx.textBaseline = "middle"
        this.ctx.fillStyle = this.canvasStyle.percentText.color
        this.ctx.fillText(str, x, y)
        this.ctx.fillText(num, x, y + this.canvasStyle.percentText.fontSize + 3)
      },
      // 绘制圆点
      drawSmallCircle (cx, cy, r, color) {
        this.ctx.beginPath()
        this.ctx.lineWidth = 1
        this.ctx.fillStyle = color
        this.ctx.arc(cx, cy, r, 0, Math.PI * 2)
        this.ctx.fill()
      },
      // 绘制默认进度条
      configureSector (cx, cy, r) {
        this.ctx.beginPath()
        this.ctx.lineWidth = this.canvasStyle.configure.lineWidth
        this.ctx.strokeStyle = this.canvasStyle.configure.color
        this.ctx.arc(cx, cy, r, Math.PI * 1, Math.PI * 2)
        this.ctx.stroke()
      },
      // 绘制已完成进度条
      currentSector (cx, cy, r, startAngle, endAngle, anti) {
        this.ctx.beginPath()
        this.ctx.lineWidth = this.canvasStyle.current.lineWidth
        this.ctx.strokeStyle = this.canvasStyle.current.color
        this.ctx.lineCap = "round"
        this.ctx.arc(cx, cy, r, startAngle, Math.PI * (1 + endAngle / 100), false)
        this.ctx.stroke()
      },
      // 刷新
      loading () {
        if (this.process >= this.currentPercent) {
          clearInterval(this.circleLoading)
        }

        // 清除canvas内容
        this.ctx.clearRect(0, 0, this.circleX * 2, this.circleY * 2)

        // 绘制默认进度条
        this.configureSector(this.circleX, this.circleY, this.radius)

        // 绘制默认进度条圆点
        for (let i of this.configureData) {
          this.drawSmallCircle(
            this.circleX + Math.sin(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
            this.circleY + Math.cos(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
            this.canvasStyle.configure.circleWidth,
            this.canvasStyle.configure.color
          )
        }

        // 绘制已完成进度条
        this.currentSector(this.circleX, this.circleY, this.radius, Math.PI * 1, this.process)

        // 绘制已完成进度条圆点和数值文字
        for (let i of this.configureData) {
          if (this.process >= i.percent) {
            this.drawSmallCircle(
              this.circleX + Math.sin(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
              this.circleY + Math.cos(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
              this.canvasStyle.current.circleWidth,
              this.canvasStyle.current.color
            )
          }
          this.drawPercentText(
            this.circleX + Math.sin(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * (this.radius + 30),
            this.circleY + Math.cos(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * (this.radius + 30),
            i.label,
            i.num
          )
        }

        // 控制结束时动画的速度
        if (this.process / this.currentPercent > 0.9) {
          this.process += 0.3
        } else if (this.process / this.currentPercent > 0.8) {
          this.process += 0.55
        } else if (this.process / this.currentPercent > 0.7) {
          this.process += 0.75
        } else {
          this.process += 1.0
        }
        this.ctx.draw(true, () => {
          this.$emit('onFinish')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
