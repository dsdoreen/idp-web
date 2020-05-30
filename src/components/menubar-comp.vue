<template>
  <div class="menubar_top">
    <div class="menubar-flex wrapper">
      <div class="left menubar_l">
        <div class="mb_index">
          <router-link :to="{name:'index'}">
            <span>首页</span>
          </router-link>
        </div>
        <div class="mb_changeCity" @mouseenter="toggle_cityShow" @mouseleave="toggle_cityShow">
          <span>选择地区</span>
          <img src="../../static/imgs/ic_arrow_btm.png" class="btn_change" />
          <div class="cg_city_layer" v-show="cityfloatingShow">
            <ul class="clearfix">
              <li>
                <a href="javascript:void(0)">北京</a>
              </li>
              <li>
                <a href="javascript:void(0)">上海</a>
              </li>
              <li>
                <a href="javascript:void(0)">广州</a>
              </li>
              <li>
                <a href="javascript:void(0)">南京</a>
              </li>
              <li>
                <a href="javascript:void(0)">深圳</a>
              </li>
              <li>
                <a href="javascript:void(0)">武汉</a>
              </li>
              <li>
                <a href="javascript:void(0)">杭州</a>
              </li>
              <li>
                <a href="javascript:void(0)">成都</a>
              </li>
              <li>
                <a href="javascript:void(0)">重庆</a>
              </li>
              <li>
                <a href="javascript:void(0)">青岛</a>
              </li>
              <li>
                <a href="javascript:void(0)">苏州</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mb_login mb_hover">
          <span>登录</span>
        </div>
        <div class="mb_register">
          <span>注册有礼</span>
        </div>
        <div class="mb_store">
          <span>积分商城</span>
        </div>
        <div class="mb_applet">
          <span>小程序</span>
        </div>
      </div>
      <div class="right menubar_r">
		<a href="" target="_blank" class="a_system" title="IDP内容管理系统">
			IDP CHINA CMS
		</a>
        <span>联系我们：400-697-9728</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	name: 'menubar-comp',
  data () {
    return {
		cityfloatingShow:false //菜单栏城市悬浮框是否显示
    }
  },
  methods:{
	  toggle_cityShow:function(){
		  this.cityfloatingShow=!this.cityfloatingShow;
	  }
  }
}

</script>

<style >


.menubar-flex{
    display: flex;
    justify-content:space-between;
    align-items: center;
}
/*------------顶部菜单栏 menubar_top begin----*/
.a_system{
	color: #666;
	font-size: 14px;
	margin-right: 20px;
}
.a_system:hover{
	text-decoration: underline;
}
.mb_wrapper {
	width: 1200px;
	margin: 0 auto;
}

.menubar_top {
	height: 36px;
	box-sizing: border-box;
	background: #f1f1f1;
	    position: relative;
    z-index: 9999;
}

.menubar_l div {
	cursor: pointer;
	height: 36px;
	line-height: 36px;
	float: left;
}

.menubar_l div span,
.menubar_r span {
	color: #666;
	font-size: 14px;
	position: relative;
}

.menubar_l .mb_changeCity span {
	padding-left: 22px;
}

.mb_changeCity {
	position: relative;
	cursor: pointer;
	margin-right: 40px;
	padding: 0 8px;
}

.mb_changeCity span:before {
	content: '';
	position: absolute;
	background: url(../../static/imgs/ic_map.png) no-repeat left;
	background-size: contain;
	width: 14px;
	height: 20px;
	left: 0;
	top: 0;
}

.mb_changeCity .btn_change {
	display: inline-block;
	position: relative;
	top: 14px;
	left: 2px;
}

.mb_changeCity:hover {
	background: #fff;
}


/*mb_hover*/

.mb_hover {
	padding: 0 15px;
	/*margin-right: 20px;*/
}

.mb_index {
	margin-right: 16px;
}

.mb_register {
	padding: 0 15px;
	margin: 0 8px 0 36px;
}

.mb_hover {
	color: #fff;
	height: 41px !important;
	background: #ff8300;
}

.mb_hover span {
	color: #fff !important;
}

.mb_register:hover span,
.mb_store:hover span,
.mb_applet:hover span {
	color: #ff8300;
}


/*mb_hover*/


/*mb_store*/

.mb_store {
	margin-left: 5px;
}

.mb_store span {
	padding-left: 28px;
}

.mb_store span:before {
	content: '';
	position: absolute;
	background: url(../../static/imgs/ic_store.png) no-repeat left;
	background-size: contain;
	width: 20px;
	height: 17px;
	left: 0;
	top: 0;
}


/*mb_store*/


/*mb_applet*/

.mb_applet {
	margin-left: 35px;
}

.mb_applet span {
	padding-left: 28px;
}

.mb_applet span:before {
	content: '';
	position: absolute;
	background: url(../../static/imgs/ic_applet.png) no-repeat left;
	background-size: contain;
	width: 20px;
	height: 17px;
	left: 0;
	top: 0;
}


/*mb_applet*/

.menubar_r {
	letter-spacing: 0.75px;
    line-height: 27px;
    height: 36px;
}

.cg_city_layer {
	background: #fff;
	position: absolute;
	z-index: 1004;
	height: 100px !important;
	line-height: inherit !important;
	border: 1px solid #e6e6e6;
	left: -50px;
	top: 36px;
}

.cg_city_layer ul {
	padding: 8px 16px;
	box-sizing: border-box;
	width: 192px;
}

.cg_city_layer li {
	float: left;
	margin-right: 16px;
	line-height: 25px;
}

.cg_city_layer li a {
	color: #666;
	font-size: 14px;
}

.cg_city_layer li a:hover {
	color: #ff8300;
	font-weight: bold;
}

.cg_city_layer li:nth-child(4n) {
	margin-right: 0;
}

.cg_city_layer:before {
	position: absolute;
	content: '';
	width: 110px;
	height: 9px;
	background: url(../../static/imgs/cg_cityline.jpg) repeat;
	background-size: inherit;
	left: 50px;
	top: -4px;
}


/*------------顶部菜单栏 menubar_top end----*/
</style>
