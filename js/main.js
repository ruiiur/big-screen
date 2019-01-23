// $(function(){

// function randomData() {  
//     return Math.round(Math.random()*500);  
// } 
// var mydata = [  
//     {name: '北京',value: '100' },{name: '天津',value: randomData() },  
//     {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
//     {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
//     {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
//     {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
//     {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
//     {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
//     {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
//     {name: '湖北',value: randomData() },{name: '广西',value: randomData() },  
//     {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
//     {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },  
//     {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
//     {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
//     {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
//     {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
//     {name: '海南',value: randomData() },{name: '台湾',value: randomData() },  
//     {name: '香港',value: randomData() },{name: '澳门',value: randomData() }  
// ]; 
// var optionMap = {  
//     backgroundColor: 'transparent',   
//     tooltip : {  
//         trigger: 'item'  
//     },
//     //左侧小导航图标
//     visualMap: {  
//         show : false,  
//         x: 'left',  
//         y: 'center',  
//         splitList: [   
//             {start: 500, end:600},{start: 400, end: 500},  
//             {start: 300, end: 400},{start: 200, end: 300},  
//             {start: 0, end: 200}
//         ],  
//         color: ['#d2f6ff', '#abeeff', '#75c6fe','#04457d', '#032f5c']  
//     },  
    
//     //配置属性
//     series: [{  
//         name: '数据',  
//         type: 'map',  
//         mapType: 'china',   
//         roam: false,  
//         label: {  
//             normal: {  
//                 show: true,  //省份名称
//                 textStyle: {
//                     fontSize: 12,
//                     color: 'fff'
//                 }  
//             },  
//             emphasis: {  
//                 show: true,
//             }  
//         },
//         itemStyle: {
//             normal:{
//                 label:{show:true},
//                 borderColor : '#fff',
//                 borderWidth : 0.5,
//                 areaStyle : {
//                     color : 'rgba(0, 0, 0, 0)'
//                 },
//                 color:'#fff',
//               },
//             emphasis: {
//                 borderWidth: 1,
//                 areaStyle : {
//                     color : 'rgba(0, 0, 0, 0)'
//                 },
//             }
//         },
//         data:mydata  //数据
//     }]  
// };  
// //初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));

// //使用制定的配置项和数据显示图表
// myChart.setOption(optionMap);
//     option = {
//         //    backgroundColor: '#404a59',
//         title: {
//     //            text: '全国主要城市空气质量',
//     //            subtext: 'data from PM25.in',
//     //            sublink: 'http://www.pm25.in',
//             x:'center',
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         tooltip: {
//             trigger: 'item',
//             formatter: function (params) {
//                 return params.name + ' : ' + params.value[2];
//             }
//         },
//         legend: {
//             orient: 'vertical',
//             y: 'bottom',
//             x:'right',
//             data:['pm2.5'],
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//     //     dataRange: {
//     //         x: '-1000px',//图例横轴位置
//     //         y: '-1000px',//图例纵轴位置
//     //         splitList: [
//     //     {start:1, end:1, label: '北京', color: '#cfc5de'},
//     //  {start:2, end:2, label: '天津', color: '#f1ebd1'},
//     //  {start:49, end:49, label: '上海', color: 'red'},
//     //  {start:50, end:50, label: '沈阳', color: 'red'},
//     //  {start:51, end:51, label: '长春', color: '#fde8cd'},
//     //  {start:6, end:6, label: '河南', color: '#e4f1d7'},
//     //  {start:7, end:7, label: '云南', color: '#fffed7'},
//     //  {start:8, end:8, label: '辽宁', color: '#e4f1d7'},
//     //  {start:9, end:9, label: '黑龙江', color: '#e4f1d7'},
//     //  {start:10, end:10, label: '湖南', color: '#fffed7'},
//     //  {start:11, end:11, label: '安徽', color: '#fffed8'},
//     //  {start:12, end:12, label: '山东', color: '#dccee7'},
//     //  {start:13, end:13, label: '新疆', color: '#fffed7'},
//     //  {start:14, end:14, label: '江苏', color: '#fce8cd'},
//     //  {start:15, end:15, label: '浙江', color: '#ddceeb'},
//     //  {start:16, end:16, label: '江西', color: '#e4f1d3'},
//     //  {start:17, end:17, label: '湖北', color: '#fde8cd'},
//     //  {start:18, end:18, label: '广西', color: '#fde8cd'},
//     //  {start:19, end:19, label: '甘肃', color: '#fde8cd'},
//     //  {start:20, end:20, label: '山西', color: '#fffdd6'},
//     //  {start:21, end:21, label: '内蒙古', color: '#ddcfe6'},
//     //  {start:22, end:22, label: '陕西', color: '#fad8e9'},
//     //  {start:23, end:23, label: '吉林', color: '#fce8cd'},
//     //  {start:24, end:24, label: '福建', color: '#fad8e8'},
//     //  {start:25, end:25, label: '贵州', color: '#fad8e8'},
//     //  {start:26, end:26, label: '广东', color: '#ddcfe8'},
//     //  {start:27, end:27, label: '青海', color: '#fad8e9'},
//     //  {start:28, end:28, label: '西藏', color: '#ddcfe6'},
//     //  {start:29, end:29, label: '四川', color: '#e4f1d5'},
//     //  {start:30, end:30, label: '宁夏', color: '#fefcd5'},
//     //  {start:31, end:31, label: '海南', color: '#fad8e9'},
//     //  {start:32, end:32, label: '台湾', color: '#fce8cd'},
//     //  {start:33, end:33, label: '香港', color: '#dc9bbb'},
//     //  {start:40, end:50, label: '澳门', color: '#e0f7cc'},
      
//     //         ],
//     //         color: ['#eee', '#949fb1', '#f3ce85']
//     //     },
//         // visualMap: {
//         //     min: 0,
//         //     max: 200,
//         //     // text:['High','Low'],
//         //     // realtime: false,
//         //     // calculable: true,
//         //     inRange: {
//         //         color: ['red', '#eac736', '#d94e5d']
//         //     },
//         //     // textStyle: {
//         //     //     color: '#fff'
//         //     // }
//         // },
//         geo: {
//             map: 'china',
//             label: {
//                 emphasis: {
//                     show: true
//                 }
//             },
//             regions: customSettings   // 设置单独的样式。
//             // itemStyle: {
//             //     normal: {
//             //         areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//             //             offset: 0,
//             //             color: '#032f5c',
//             //         }, {
//             //             offset: 1,
//             //             color: '#d2f6ff'
//             //         }]),
//             //         borderColor: '#fff'
//             //     },
//             //     emphasis: {
//             //         areaColor: '#2a333d'
//             //     }
//             // }
//         },
//         // visualMap: { 
//         //     show : true, 
//         //     x: 'left', 
//         //     y: 'center', 
//         //     splitList: [ 
//         //     {start: 49, end:49},{start: 50, end: 50}, 
//         //     {start: 51, end: 51},{start: 200, end: 300}, 
//         //     {start: 100, end: 200}, 
//         //     ], 
//         //     color: ['#4F94CD', '#CD5C5C','#9C9C9C', '#85daef', '#458B74',] 
//         //     }, 
//         series: [
//             {
//     //                name: 'pm2.5',
//                 type: 'scatter',
//                 coordinateSystem: 'geo',
//                 data: data,
//                 symbolSize: 12,
//                 label: {
//                     normal: {
//                         show: true,//显示省份标签
//                         textStyle:{color:"red",fontSize:12}//省份标签字体颜色
//                     },    
//                     emphasis: {//对应的鼠标悬浮效果
//                         show: true,
//                         textStyle:{color:"#800080"}
//                     } 
//                 },
                // itemStyle: {
                //     normal:{
                //         label:{show:true},
                //         borderColor : 'rgba(100,149,237,1)',
                //         borderWidth : 0.5,
                //         areaStyle : {
                //             color : 'rgba(0, 0, 0, 0)'
                //         }
                //       },
                //     emphasis: {
                //         // borderColor: '#fff',
                //         borderWidth: 1
                //     }
                // }
            // }
//         ]
//     }
    
    
    
    
    
    
    
    
//     /*var option={"polar": [{"center": ["50%","50%"],"radius": [200,250],"startAngle": 30,"type": "polygon","data": [10,20,30,40,50]}]};*/
    
//     var myChart = echarts.init(document.getElementById('main'));
//     myChart.setOption(option);


    // 进度条
    // $('#progressbar1').LineProgressbar({
    //     percentage: 98,
    //     fillBackgroundColor: '#f1c40f',
    //     height: '14px',
    //     radius: '7px'
    // });
    // $('#progressbar2').LineProgressbar({
    //     percentage: 70,
    //     fillBackgroundColor: '#eaf382',
    //     height: '14px',
    //     radius: '7px'
    // });
    // $('#progressbar3').LineProgressbar({
    //     percentage: 65,
    //     fillBackgroundColor: '#dae29a',
    //     height: '14px',
    //     radius: '7px'
    // });
    // $('#progressbar4').LineProgressbar({
    //     percentage: 40,
    //     fillBackgroundColor: '#dff8c0',
    //     height: '14px',
    //     radius: '7px'
    // });
    // $('#progressbar5').LineProgressbar({
    //     percentage: 30,
    //     fillBackgroundColor: '#f2eccb',
    //     height: '14px',
    //     radius: '7px'
    // });

    // function animate(){
    //     $(".charts").each(function(i,item){
    //         var a=parseInt($(item).attr("w"));
    //         $(item).animate({
    //             width: a+"%"
    //         },1000);
    //     });
    // }
    // animate();

    // 水状图,销售额增速
    // var saleChart = echarts.init(document.getElementById('sale-grow'));
    // var optionSale = {
    //     // title : {
    //     //     text: '销售额增速(单位:万)',
    //     //     // subtext: '纯属虚构'
    //     //     textStyle:{
    //     //         fon
    //     //     }
    //     // },
    //     tooltip : {
    //         trigger: 'axis'
    //     },
    //     legend: {
    //         data:['预购','成交'],
    //         right:40,
    //         orient: 'vertical',
    //         // bottom:'10%',
    //         itemWidth:10,//图例的宽度
    //         itemHeight:10,//图例的高度
    //         textStyle:{//图例文字的样式
    //             color:'#c9d1e2',
    //             fontSize:12
    //         }
    //     },
    //     // toolbox: {
    //     //     show : true,
    //     //     feature : {
    //     //         mark : {show: true},
    //     //         dataView : {show: true, readOnly: false},
    //     //         magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //     //         restore : {show: true},
    //     //         saveAsImage : {show: true}
    //     //     }
    //     // },
    //     // calculable : true,
    //     xAxis : [
    //         {
    //             splitLine:{show: false},//去除网格线
    //             type : 'category',
    //             boundaryGap : false,
    //             data : ['周一','周二','周三','周四','周五','周六','周日'],
    //             axisLine:{
    //                 lineStyle:{
    //                     color:'#c9d1e2',
    //                 }
    //             },
    //             // splitArea : {show : true}//保留网格区域
    //         }
    //     ],
    //     yAxis : [
    //         {
    //             splitLine:{show: false},//去除网格线
    //             type : 'value',
    //             axisLine:{
    //                 lineStyle:{
    //                     color:'#c9d1e2',
    //                 }
    //             },
    //         }
    //     ],
    //     series : [
    //         {
    //             name:'成交',
    //             type:'line',
    //             smooth:true,
    //             itemStyle: {normal: {
    //                 color:'rgba(165,81,223,1)',
    //                 areaStyle: {type: 'default',color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
    //                     offset: 0,  
    //                     color: 'rgba(165,81,223,0.5)'  
    //                 }, {  
    //                     offset: 1,  
    //                     color: 'rgba(165,81,223,0)'  
    //                 }])}}},
    //             data:[10, 12, 21, 54, 260, 830, 710]
    //         },
    //         {
    //             name:'预购',
    //             type:'line',
    //             smooth:true,
    //             // lineStyle:{
    //             //     color:rgba(34,227,212,1),
    //             // },
    //             itemStyle: {normal: {
    //                 color:'rgba(34,227,212,1)',//折点颜色,
    //                 areaStyle: {type: 'default', color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
    //                     offset: 0,  
    //                     color: 'rgba(34,227,212,0.5)'  
    //                 }, {  
    //                     offset: 1,  
    //                     color: 'rgba(34,110,183,0)'  
    //                 }])}}},
    //             data:[30, 182, 434, 791, 390, 30, 10]
    //         }
    //     ]
    // };
    // // 使用刚指定的配置项和数据显示图表。
    // saleChart.setOption(optionSale);

    // 业务增长率
    // var businessChart = echarts.init(document.getElementById('business-grow'));
    // optionBusiness = {
    //     tooltip : {
    //         trigger: 'axis'
    //     },
    //     legend: {
    //         data:['蒸发量','平均温度'],
    //         orient: 'vertical',
    //         right:0,
    //         itemWidth:10,//图例的宽度
    //         itemHeight:10,//图例的高度
    //         textStyle:{//图例文字的样式
    //             color:'#c9d1e2',
    //             fontSize:12
    //         }
    //     },
    //     xAxis : [
    //         {
    //             type : 'category',
    //             data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    //             axisLine:{
    //                 lineStyle:{
    //                     color:'#c9d1e2',
    //                 }
    //             },
    //         }
    //     ],
    //     yAxis : [
    //         {
    //             splitLine:{show: false},//去除网格线
    //             type : 'value',
    //             name : '水量',
    //             axisLabel : {
    //                 formatter: '{value} ml'
    //             },
    //             axisLine:{
    //                 lineStyle:{
    //                     color:'#c9d1e2',
    //                 }
    //             },
    //         },
    //         {
    //             splitLine:{show: false},//去除网格线
    //             type : 'value',
    //             name : '温度',
    //             axisLabel : {
    //                 formatter: '{value} °C'
    //             }
    //         }
    //     ],
    //     series : [
    
    //         {
    //             name:'蒸发量',
    //             type:'bar',
    //             data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    //         },
    //         {
    //             name:'降水量',
    //             type:'bar',
    //             data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    //         },
    //         {
    //             name:'平均温度',
    //             type:'line',
    //             yAxisIndex: 1,
    //             data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    //         }
    //     ]
    // };
    // businessChart.setOption(optionBusiness);  
    
    // 地区Top排行
    // var regionChart = echarts.init(document.getElementById('region-grow'));
    // optionRegion = {
    //     // title : {
    //     //     text: '地区TOP5排行',
    //     //     x:'center',
    //     //     textStyle:{
    //     //         fontWeight:'normal',
    //     //         color:'#fefefe',
    //     //         fontSize:16,
    //     //     }
    //     // },
    //     tooltip : {
    //         trigger: 'item',
    //         formatter: "{a} <br/>{b} : {c} ({d}%)",
    //         // rich: {
    //         //     a: {
    //         //         color: '#999999',
    //         //         fontSize: 11,
    //         //         lineHeight: 20,
    //         //         align: 'center'
    //         //     },
    //         //     hr: {
    //         //         width: '100%',
    //         //         height: 0,
    //         //         alien:'center'
    //         //     },
    //         //     per: {
    //         //         color: '#000000',
    //         //         align: 'center',
    //         //         fontSize: 15,
    //         //     }
    //         // }
    //     },
    //     color:['#032f5c','#04457b','#75c6fe','#abeeff','#d2f6ff'],
    //     // legend: {
    //     //     orient : 'vertical',
    //     //     x : 'left',
    //     //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    //     // },
    //     series : [
    //         {
    //             name:'访问来源',
    //             type:'pie',
    //             radius : ['50%', '70%'],
    //             center: ['50%', '50%'],
    //             data:[
    //                 {value:335, name:'直接访问'},
    //                 {value:310, name:'邮件营销'},
    //                 {value:234, name:'联盟广告'},
    //                 {value:135, name:'视频广告'},
    //                 {value:1548, name:'搜索引擎'}
    //             ],
    //             avoidLabelOverlap: false,
    //             hoverAnimation: false,
    //             label: { //  饼图图形上的文本标签
    //                 normal: { // normal 是图形在默认状态下的样式
    //                     show: true,
    //                     fontSize: 14,
    //                     fontWeight: 'normal',
    //                     formatter: '{b}\n{c}%', // {b}:数据名； {c}：数据值； {d}：百分比
    //                     rich: {
    //                         b: {
    //                             color: '#c9d1e2',
    //                             fontSize: 14,
    //                             lineHeight: 15
    //                         },
    //                         c: {
    //                             fontSize: 14,
    //                             lineHeight: 15,
    //                             color: '#c9d1e2'
    //                         }
    //                     }
    //                 }
    //             },
    //             labelLine: {
    //                 normal: {
    //                     show: false
    //                 }
    //             },
    //         }
    //     ]
    // };
    // regionChart.setOption(optionRegion);  
// })