# Logistics
物流配送路线规划及轨迹记录与回放APP
此APP通过获取人工智能算法计算出的车辆最优调度顺序，然后针对相应地区车辆限行政策为司机提供路线导航，除此之外，还另需对配送行驶路径进行监督及记录，保证路径规划的有效进行执行。主要采用vue和nodejs进行开发

# 1.1车辆信息界面
                 
进入首页时，APP将弹出此窗，提醒用户输入驾驶车辆信息，为便于用户使用，我们提供了友好的填写提示，并可智能保留上次输入记录，避免反复输入。
如果首次填写错误，还能点击主界面左上角人物图标，随时对车辆信息进行修改。
![车辆信息界面](https://github.com/Windy810/Logistics/blob/main/static/carinfo1.png?raw=true) ![](https://github.com/Windy810/Logistics/blob/main/static/carinfo2.png?raw=true)

## 1.2首页界面
 
本界面主要分为两部分：
	第一部分是司机评级界面，系统根据司机在行驶过程中的花费时间、偏航次数、配送地点数量等自动对其进行分数评估，并将分数转为直观的可视化半圆弧，增添界面整体美观度。此外，还标注了该名司机在所有配送人员之中的业务水平排名。
	第二部分是按规划顺序排列的今日配送点详细地址以及各任务的完成状态，用时间轴的方式展现，使得各个任务的排版更为清晰。
当司机点击“开始配送”按钮后，则能跳转到行驶记录界面，开始一次完整的配送过程记录。
![](https://github.com/Windy810/Logistics/blob/main/static/home.png?raw=true)

## 1.3路线规划界面
 
根据司机当天的配送任务，系统自动对所有配送点进行路线规划，并展示详细的行驶指示，如遇重大交通事故或大型活动等特殊情况，能随时点击左侧悬浮按钮重新规划线路，或者切换导航策略。  
![](https://github.com/Windy810/Logistics/blob/main/static/logistics.png?raw=true)

## 1.4行驶记录界面
此界面在左下角以卡片形式标明司机当前所处位置详细信息，包括经纬度、地理名称及已行驶时间等。并持续获取附近区域的实时天气状况，为司机行驶提供贴心的提示，为未来可能因天气造成的事故做出提前预警。
更重要的是，是展示当前位置与规划路径的距离，并随时对司机的偏离航线行驶进行警示，监督其回归规定路径。
当司机完成所有配送任务回到起点后，即可点击右上角结束按钮，完成本次驾驶记录。  
![](https://github.com/Windy810/Logistics/blob/main/static/record1.png?raw=true)  ![](https://github.com/Windy810/Logistics/blob/main/static/record2.png?raw=true)  
![](https://github.com/Windy810/Logistics/blob/main/static/record3.png?raw=true)

## 1.5轨迹点记录界面
 
此界面用时间轴形式详细展示了各个时间点车辆所在位置的具体信息，用户还可随时通过上侧的日历查看不同日期该车的行驶记录。  
![](https://github.com/Windy810/Logistics/blob/main/static/detail.png?raw=true)

## 1.6轨迹回放界面
 
这个界面将会从后端请求一次配送过程的所有途径点信息，在地图上通过可视点聚集的线路展示车辆行驶轨迹，用户可随时点击开始动画，观看由小车模拟的行驶过程  
![](https://github.com/Windy810/Logistics/blob/main/static/animation.png?raw=true)
