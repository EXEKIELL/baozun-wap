//地址参数
var addressX = 113.383958;
var addressY = 23.098703;
var map = new AMap.Map('companyMap', {
    resizeEnable: true,
    zoom:19,
    center: [addressX,addressY]
});
var marker = new AMap.Marker({
    position: map.getCenter(),
    draggable: true,
    cursor: 'move',
    icon: "img/addressIcon.png"
});
marker.setMap(map);
// 设置点标记的动画效果，此处为弹跳效果
//marker.setAnimation('AMAP_ANIMATION_BOUNCE');
marker.setTitle('点击我，打开地图，恒帝欢迎您的到来！');
marker.on('click',function(e){
    marker.markOnAMAP({
    name:'广州恒帝信息科技有限公司',
    position:marker.getPosition()
    })
});
$(document).ready(function(){
	
});