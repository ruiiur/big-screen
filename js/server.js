$(function(){
    new WOW().init();
    // var orgid=window.location.href.split('=')[1];
    var orgid='D2FB3DB0-AFFD-46C6-AE75-EBFDAF27F567';
    var apiUrl="http://api.xiaoboli.com:8766";//本地
    // var apiUrl="http://192.168.10.102:8765/";//测试
    // var apiUrl="http://192.168.10.20:8765/";//正式
    // var apiUrl='/apiG';
    // 获取当前日期
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = ".";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
    var nowData=getNowFormatDate();
    $('.now-data').html(nowData);
    // 查询业务数据
    $.ajax({
        type: 'get',
        url:apiUrl+'/api/OrdOrderInfo/GetFin_IndicatorsData',
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('查询业务数据成功');
            if(data!=null){
                $('.performance-indicator').html(Math.round((data[0].PerformanceIndicators /10000) * 100) / 100);
                $('.guest-indicator').html(data[0].CollectGuestIndicators);
                if(parseInt(data[0].PerformanceIndicatorsPercentage)>='100'){
                    $('.performance-pre').html('完成');
                }
                else{
                    $('.performance-pre').html(parseInt(data[0].PerformanceIndicatorsPercentage)+'%');
                }
                if(parseInt(data[0].CollectGuestIndicatorsPercentage)>='100'){
                    $('.guest-pre').html('完成');
                }
                else{
                    $('.guest-pre').html(parseInt(data[0].CollectGuestIndicatorsPercentage)+'%');
                }
                $('.guest-com').html('已完成'+data[0].TheCustomerNum+'人');
                $('.performance-com').html('已完成'+Math.round((data[0].AccountsReceivable /10000) * 100) / 100+'万');
                $(".circleChart#1").circleChart({
                    size:85,
                    value: parseInt(data[0].CollectGuestIndicatorsPercentage),
                    text: 0,
                    widthRatio: 0.15,
                    startAngle: -175, // 进度条起点
                    counterclockwise: true, // 进度条反方向
                });
                $(".circleChart#0").circleChart({
                    size: 95,
                    value: parseInt(data[0].PerformanceIndicatorsPercentage),
                    text: 0,
                    widthRatio: 0.15,
                    startAngle: -175, // 进度条起点
                    counterclockwise: true, // 进度条反方向
                    onDraw: function(el, circle) {
                        circle.text(Math.round(circle.value) + "%");
                    }
                });
            }
        }
    });

    //销售前五排行
    $.ajax({
        type: 'get',
        url:apiUrl+"/api/OrdOrderInfo/GetOrderSalesNew",
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('销售前五排行');
            if(data!=null){
                var max=0;
                var maxIndex;
                for(var i=0;i<data.length;i++){
                    if(max>parseInt(data[i].OrderNum)){
                        max=max;
                    }
                    else{
                        max=data[i].OrderNum;
                    }
                    // console.log(max);
                }
                for(var j=1;j<10000;j++){
                    if(j*10>max){
                        maxIndex=j*10;
                        break;
                    }
                }
                // console.log(maxIndex);
                var $con="<i>数量</i><span>"+maxIndex/5+"</span><span>"+maxIndex/5*2+"</span><span>"+maxIndex/5*3+"</span><span>"+maxIndex/5*4+"</span><span>"+maxIndex+"</span>"
                $('.max-list').append($con);
                var $li='';
                var indexPre=[];
                for(var j=0;j<data.length;j++){
                    $li+="<li><p>No."+(j+1) + data[j].OrderSaler+"</p><div id='progressbar"+(j+1)+"'></div><span>"+data[j].OrderNum+"</span></li>";
                    indexPre.push(parseInt(data[j].OrderNum/maxIndex*100));
                }
                $('.sale-top').append($li);
                $('#progressbar1').LineProgressbar({
                    percentage: indexPre[0],
                    fillBackgroundColor: '#f1c40f',
                    height: '14px',
                    radius: '7px'
                });
                $('#progressbar2').LineProgressbar({
                    percentage: indexPre[1],
                    fillBackgroundColor: '#eaf382',
                    height: '14px',
                    radius: '7px'
                });
                $('#progressbar3').LineProgressbar({
                    percentage: indexPre[2],
                    fillBackgroundColor: '#dae29a',
                    height: '14px',
                    radius: '7px'
                });
                $('#progressbar4').LineProgressbar({
                    percentage: indexPre[3],
                    fillBackgroundColor: '#dff8c0',
                    height: '14px',
                    radius: '7px'
                });
                $('#progressbar5').LineProgressbar({
                    percentage: indexPre[4],
                    fillBackgroundColor: '#f2eccb',
                    height: '14px',
                    radius: '7px'
                });
            }
        }
    });

    // 客户前五排行
    $.ajax({
        type: 'get',
        url:apiUrl+"/api/OrdOrderInfo/GetOrderOfCustomer",
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('客户前五排行');
            if(data!=null){
                var $p="";
                for(var i=0;i<data.length;i++){
                    $p+="<p title='"+data[i].CustomerName+"'>"+(i+1)+"."+data[i].CustomerName+"</p>"
                }
                $('.customer').append($p);
                $('.customer p').hover(function(){
                    $(this).addClass("active").siblings().removeClass("active");                
                })
            }
        }
    });

    // 最新订单排行
    $.ajax({
        type: 'get',
        url:apiUrl+"/api/OrdOrderInfo/GetLatestOrder",
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('最新订单前三排行');
            if(data!=null){
                var $li="";
                for(var i=0;i<data.length;i++){
                    data[i].CreatedDate=data[i].CreatedDate.split('/')[1]+'-'+data[i].CreatedDate.split('/')[2].substring(0,3)+data[i].CreatedDate.split('/')[2].substring(3,8);
                    if(data[i].ChildNum==0){
                        $li+="<li><span title='"+data[i].OrderSaler+"'>"+data[i].OrderSaler+"</span><span>"+data[i].AdultNum+"人</span><span>"+data[i].CreatedDate+"</span><span title='"+data[i].EntrySource+"'>"+data[i].EntrySource+"</span></li>";
                    }
                    else{
                        $li+="<li><span title='"+data[i].OrderSaler+"'>"+data[i].OrderSaler+"</span><span>"+data[i].AdultNum+"人+"+data[i].ChildNum+"</span><span>"+data[i].CreatedDate+"</span><span title='"+data[i].EntrySource+"'>"+data[i].EntrySource+"</span></li>";
                    }
                }
                $('.new-order').append($li);
                $('.new-order li:nth-child(2)').addClass('active');
            }
        }
    });

    // 查询应收款
    function animate(){
        $(".charts").each(function(i,item){
            var a=parseInt($(item).attr("w"));
            $(item).animate({
                width: a+"%"
            },1000);
        });
    }
    $.ajax({
        type: 'get',
        url:apiUrl+"/api/OrdOrderInfo/GetReceivableData",
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('查询应收款');
            if(data!=null){
                $('.receivable').html(data[0].AccountsReceivable.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,'));
                $('.received').html('已收'+data[0].Received.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,')+'元，完成'+data[0].ThePercentage);
                $('.barline').append("<div w='"+parseFloat(data[0].ThePercentage)+"' class='charts'></div>");
                animate();
            }
        }
    });

    // 查询热销线路
    $.ajax({
        type: 'get',
        url:apiUrl+"/api/OrdOrderInfo/GetOrderNameList",
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('查询热销线路');
            if(data!=null){
                var $p="";
                for(var i=0;i<data.length;i++){
                    $p+="<p title='"+data[i].OrderName+"'>"+(i+1)+"."+data[i].OrderName+"</p>"
                }
                $('.hot-line').append($p);
                $('.hot-line p').hover(function(){
                    $(this).addClass("active").siblings().removeClass("active");                
                })
            }
        }
    });

    // 查询目的地订单分布
    $.ajax({
        type: 'get',
        url:apiUrl+"/api/OrdOrderInfo/GetOrderOfDestination",
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('查询目的地订单分布');
            if(data!=null){
                var areaList=[];
                for(var i=0;i<Math.min(5,data.length);i++){
                    if(data[i].OrderNum!='0'){
                        areaList.push({
                            value:data[i].OrderNum,
                            name:data[i].DestName
                        })
                    }
                }
    
    
                // 大地图
                var mapdata = [  
                    {name: '北京',value: 0 },{name: '天津',value: 0 },  
                    {name: '上海',value: 0 },{name: '重庆',value: 0 },  
                    {name: '河北',value: 0 },{name: '河南',value: 0 },  
                    {name: '云南',value: 0 },{name: '辽宁',value: 0 },  
                    {name: '黑龙江',value:0 },{name: '湖南',value: 0 },  
                    {name: '安徽',value: 0 },{name: '山东',value: 0 },  
                    {name: '新疆',value: 0 },{name: '江苏',value: 0 },  
                    {name: '浙江',value: 0 },{name: '江西',value: 0 },  
                    {name: '湖北',value: 0 },{name: '广西',value: 0 },  
                    {name: '甘肃',value: 0 },{name: '山西',value: 0 },  
                    {name: '内蒙古',value: 0 },{name: '陕西',value: 0 },  
                    {name: '吉林',value: 0 },{name: '福建',value: 0 },  
                    {name: '贵州',value: 0 },{name: '广东',value: 0 },  
                    {name: '青海',value: 0 },{name: '西藏',value: 0 },  
                    {name: '四川',value: 0 },{name: '宁夏',value: 0 },  
                    {name: '海南',value: 0 },{name: '台湾',value: 0 },  
                    {name: '香港',value: 0 },{name: '澳门',value: 0 }  
                ];
                var mapMax=parseInt(data[0].OrderNum);
                for(var j=0;j<data.length;j++){
                    for(var i=0;i<mapdata.length;i++){
                        if(mapdata[i].name==data[j].DestName){
                            mapdata[i].value= data[j].OrderNum;
                        }
                    }
                    parseInt(data[j].OrderNum)> mapMax ? mapMax = parseInt(data[j].OrderNum) : null;
                }
                console.log(mapMax,'111');
                var maxList=[   
                    {start: mapMax/5*4, end:mapMax+10},{start: mapMax/5*3, end: mapMax/5*4},  
                    {start: mapMax/5*2, end: mapMax/5*3},{start: mapMax/5, end: mapMax/5*2},  
                    {start: 1, end: mapMax/5},{start:0,end:0}
                ]
                // 地区前五排行
                var regionChart = echarts.init(document.getElementById('region-grow'));
                // optionRegion = {
                //     tooltip : {
                //         trigger: 'item',
                //         formatter: "{a} <br/>{b} : {c} ({d}%)",
                //     },
                //     color:['#7ee7fd','#032f5c','#04457b','#75c6fe','#abeeff','#d2f6ff'],
                //     series : [
                //         {
                //             name:'地区',
                //             type:'pie',
                //             radius : ['40%', '50%'],
                //             center: ['50%', '50%'],
                //             data:areaList,//数据
                //             avoidLabelOverlap: false,
                //             hoverAnimation: false,
                //             label: { //  饼图图形上的文本标签
                //                 normal: { // normal 是图形在默认状态下的样式
                //                     show: true,
                //                     fontSize: 14,
                //                     fontWeight: 'normal',
                //                     formatter: '{b}\n{d}%', // {b}:数据名； {c}：数据值； {d}：百分比
                //                     textStyle: {
                //                         color: '#c9d1e2',  // 改变标示文字的颜色
                //                         fontSize:14
                //                     },   
                //                 }
                //             },
                //             labelLine: {
                //                 normal: {
                //                     length:25,  // 改变标示线的长度
                //                     // lineStyle: {
                //                     //     color: "transparent"  // 改变标示线的颜色
                //                     // }
                //                 }
                //             },
                //         }
                //     ]
                // };
                optionRegion = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color:['#ffffff','#c8f5ff','#63d5ed','#2facc6','#0c849d'],
                    calculable : true,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:areaList
                        }
                    ]
                };                 
                regionChart.setOption(optionRegion);
    
                
                // var mapData=[];
                // for(let i=0;i<data.length;i++){
                //     mapData.push(
                //         {name: data[i].DestName,value: data[i].OrderNum } 
                //     )
                // } 
                var optionMap = {  
                    backgroundColor: 'transparent',   
                    tooltip : {  
                        trigger: 'item'  
                    },
                    //左侧小导航图标
                    visualMap: {  
                        show : false,  
                        x: 'left',  
                        y: 'center',  
                        splitList:maxList,  
                        color: ['#d2f6ff', '#abeeff', '#75c6fe','#04457d', '#032f5c']  
                    },  
                    //配置属性
                    series: [{  
                        name: '数据',  
                        type: 'map',  
                        mapType: 'china',   
                        roam: false, 
                        // focusNodeAdjacency : false, 
                        label: {  
                            normal: {  
                                show: true,  //省份名称
                                textStyle: {
                                    fontSize: 12,
                                    color: 'fff'
                                }  
                            },  
                            emphasis: {  
                                show: true,
                                textStyle: {
                                    fontSize: 14,
                                    // color: 'fff'
                                }
                            }  
                        },
                        itemStyle: {
                            normal:{
                                label:{show:true},
                                borderColor : '#fff',
                                borderWidth : 0.5,
                                areaStyle : {
                                    color : 'rgba(0, 0, 0, 0)'
                                },
                                textStyle: {
                                    fontSize: 12,
                                    color: 'fff'
                                } 
                              },
                            emphasis: {
                                borderWidth: 1,
                                areaStyle : {
                                    color : 'rgba(0, 0, 0, 0)'
                                },
                            }
                        },
                        data:mapdata  //数据
                    }]  
                };  
                //初始化echarts实例
                var myChart = echarts.init(document.getElementById('main')); 
                //使用制定的配置项和数据显示图表
                myChart.setOption(optionMap);
            }
        }
    });

    // 查询销售额
    $.ajax({
        type:'get',
        url:apiUrl+"/api/OrdOrderInfo/GetReceivableSalesData",
        dataType: "json",
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('查询销售额');
            if(data!=null){
                 // 销售总额
                var saleSum=0;
                // 组合每个月的销售额
                var saleList=[0,0,0,0,0,0,0,0,0,0,0,0];
                for(let i=0;i<data.length;i++)
                {
                    // console.log(data[i].AccountsReceivable);
                    saleSum+=parseInt(data[i].AccountsReceivable);
                }
                $('.sale-sum').html(Math.round((saleSum /10000) * 100) / 100+'万');
                for(var i=0;i<saleList.length;i++){
                    for(var j=0;j<data.length;j++){
                        if(data[j].Month==i){
                            saleList[i]=Math.round((data[j].AccountsReceivable /10000) * 100) / 100;
                        }
                    }
                }
                console.log(saleList);
                // 水波图
                var saleChart = echarts.init(document.getElementById('sale-grow'));
                var optionSale = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['201801-201812'],
                        right:40,
                        textStyle:{//图例文字的样式
                            color:'#c9d1e2',
                            fontSize:12
                        }
                    },
                    xAxis : [
                        {
                            splitLine:{show: false},//去除网格线
                            type : 'category',
                            boundaryGap : false,
                            data : ['01','02','03','04','05','06','07','08','09','10','11','12'],
                            axisLine:{
                                lineStyle:{
                                    color:'#c9d1e2',
                                }
                            },
                            // splitArea : {show : true}//保留网格区域
                        }
                    ],
                    yAxis : [
                        {
                            splitLine:{show: false},//去除网格线
                            type : 'value',
                            axisLine:{
                                lineStyle:{
                                    color:'#c9d1e2',
                                }
                            },
                        }
                    ],
                    series : [
                        {
                            name:'201801-201812',
                            type:'line',
                            smooth:true,
                            symbol: 'image://./images/circle.png',     //自定义图片
                            symbolSize: 14,
                            itemStyle: {normal: {
                                color:'rgba(165,81,223,1)',
                                areaStyle: {type: 'default',color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
                                    offset: 0,  
                                    color: 'rgba(165,81,223,0.5)'  
                                }, {  
                                    offset: 1,  
                                    color: 'rgba(165,81,223,0)'  
                                }])}}},
                            data:saleList
                        },
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                saleChart.setOption(optionSale);
            }
        }
    });

    // 查询业务增长率（客户数量）
    var customerList=[0,0,0,0,0,0,0,0,0,0,0,0];
    $.ajax({
        type:'get',
        url:apiUrl+"/api/OrdOrderInfo/GetGrowthRage",
        dataType: "json",
        async:false,
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('查询业务增长率（客户数量）');
            if(data!=null){
                for(var i=0;i<customerList.length;i++){
                    for(var j=0;j<data.length;j++){
                        if(data[j].Month==i){
                            customerList[i]=data[j].TheCustomerNum;
                        }
                    }
                }
            }
        }
    });

    // 查询业务增长率（订单数量）
    var orderList=[0,0,0,0,0,0,0,0,0,0,0,0];
    $.ajax({
        type:'get',
        url:apiUrl+"/api/OrdOrderInfo/GetOrderAmtStatData",
        dataType: "json",
        async:false,
        data:{
            orgid:orgid
        },
        success: function (data) {
            console.log(data);
            console.log('查询业务增长率（订单数量）');
            if(data!=null){
                for(var i=0;i<orderList.length;i++){
                    for(var j=0;j<data.length;j++){
                        if(data[j].Month==i){
                            orderList[i]=data[j].OrderNum;
                        }
                    }
                }
            }
        }
    });
    // 业务增长率图表
    var businessChart = echarts.init(document.getElementById('business-grow'));
    optionBusiness = {
        tooltip : {
            trigger: 'axis'
        },
        // legend: {
        //     data:['客户数量','订单数量'],
        //     orient: 'vertical',
        //     right:0,
        //     itemWidth:10,//图例的宽度
        //     itemHeight:10,//图例的高度
        //     textStyle:{//图例文字的样式
        //         color:'#c9d1e2',
        //         fontSize:12
        //     }
        // },
        xAxis : [
            {
                type : 'category',
                data : ['1月','2','3','4','5','6','7','8','9','10','11','12'],
                axisLine:{
                    lineStyle:{
                        color:'#c9d1e2',
                    }
                },
            }
        ],
        yAxis : [
            {
                splitLine:{show: false},//去除网格线
                type : 'value',
                name:'客户',
                axisLine:{
                    lineStyle:{
                        color:'#c9d1e2',
                    }
                },
            },
            {
                splitLine:{show: false},//去除网格线
                type : 'value',
                name:'订单',
                axisLine:{
                    lineStyle:{
                        color:'#c9d1e2',
                    }
                },
            }
        ],
        series : [
            {
                name:'客户数量',
                type:'bar',
                barWidth : 5,//柱图宽度
                itemStyle:{
                    normal:{
                        color:'#f7cb75',
                        barBorderRadius:[3, 3, 0, 0],
                    }
                },
                data:customerList
            },
            {
                name:'订单数量',
                type:'line',
                // symbol: 'star',  // 数据级个性化拐点图形
                symbol: 'circle',     //设定为实心点
                symbolSize: 5,   //设定实心点的大小
                yAxisIndex: 1,
                itemStyle:{
                    normal:{
                        color: "#d2f6ff",
                        lineStyle:{
                            color:'#d2f6ff',
                            width:1.5
                        }
                    }
                },
                data:orderList
            }
        ]
    };
    businessChart.setOption(optionBusiness);  
    return false;
})