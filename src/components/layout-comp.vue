<template>
  <div>
    <div class="idp-header">
      <!-- menu begin-->
      <menubar-comp></menubar-comp>
      <!-- menu end-->
      <!-- header begin-->
      <header-comp></header-comp>
      <!-- header end-->
      <!-- nav&banner begin-->
      <navbanner-comp></navbanner-comp>
      <!-- nav&banner end-->
    </div>
    <div class="idp-content">
      <!-- content begin-->
      <div class="app-content">
        <keep-alive />
        <router-view />
      </div>
      <!-- content end-->
    </div>

    <div class="idp-footer">
      <!-- footer begin-->
      <footer-comp></footer-comp>
      <!-- footer end-->
    </div>

    <!--toolbar begin -->
    <div
      class="toolbar_warp"
      :style="{bottom:toolbar_style.bottom+'px',left:toolbar_style.left+'px'}"
    >
      <div class="toolbar_tabs">
        <div class="toolbar_tab tbar_tab_msg">
          <router-link :to="{name:'aboutus',query:{type:'contactUs'}}">
            <i class="tab_ico"></i>
            <div class="bar_content">
              <router-link :to="{name:'aboutus',query:{type:'contactUs'}}">
                <em class="tab_text">联系我们</em>
              </router-link>
            </div>
          </router-link>
        </div>
        <div class="toolbar_tab tbar_tab_leyu">
          <i class="tab_ico"></i>
          <div class="bar_content">
            <form class="submit-tel" action method="post">
              <input type="text" name="telInput" class="telInput" placeholder="输入号码，立即通话" value />
              <input type="button" class="toobar_call_btn" value="拨打" />
            </form>
          </div>
        </div>
        <div class="toolbar_tab tbar_tab_wccode">
          <i class="tab_ico"></i>
          <div class="bar_content">
            <img src="../../static/imgs/tb_code.png" />
          </div>
        </div>

        <div class="toolbar_tab tbar_tab_feedback" @click="signupShow=true">
          <i class="tab_ico"></i>
          <div class="bar_content">
            <em class="tab_text">申请报名</em>
          </div>
        </div>
        <div class="toolbar_tab tbar_tab_apply">
          <router-link :to="{name:'index'}">
            <i class="tab_ico"></i>
            <div class="bar_content">
              <em class="tab_text">返回首页</em>
            </div>
          </router-link>
        </div>
        <transition name="fade">
          <div
            class="toolbar_tab toolbar_footer"
            v-show="tlfoot_isshow"
            transiton="slow"
            @click="reTop"
          >
            <i class="tab_ico"></i>
            <div class="bar_content">
              <em class="tab_text">回到顶部</em>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!--toolbar end -->
    <!--toolbar layer begin-->
    <div class="toolbar_layer_form" v-show="signupShow">
      <!--表单-->
      <div class="div_form">
        <div class="l_close" @click="signupClose">
          <img src="../../static/imgs/layer_close.png" />
        </div>
        <h2>留学申请报名</h2>
        <form
          class="registerform clearfix"
          action
          id="myform"
          name="myform"
          method="post"
          onsubmit="return false;"
        >
          <div class="row">
            <div class>
              <input
                class="txt_name"
               
                placeholder="姓名*"
                type="text"
                name="info[name]"
              
                nullmsg="请输入您的姓名"
               v-model="name"
              />
            </div>
            <span class="err_info">（名字不能包含数字和符号）</span>
          </div>
          <div class="row">
            <div class>
              <input
                class="txt_phone"
                id
                placeholder="手机号*"
                type="text"
                name="info[mobile]"
                data-type="*"
                tip
                altercss="gray"
                autocomplete="off"
                nullmsg="请输入手机号"
                sucmsg
                errormsg
                  v-model="phone"
              />
            </div>
            <span class="err_info">（请填写正确的手机号码）</span>
          </div>

          <div class="row">
            <select class="sel_edu" name="info[Nstep]" id data-type="*" nullmsg errormsg   v-model="nstep">
              <option value="0">学历*</option>
              <option value="硕士">硕士</option>
              <option value="本科">本科</option>
              <option value="专科">专科</option>
              <option value="高中">高中</option>
              <option value="初中以下">初中以下</option>
            </select>
          </div>
          <div class="row row_countries">
            <h3>
              意向国家
              <em>（可多选）</em>
            </h3>
            <ul class="clearfix">
              <li :value="coun.name" v-for="(coun,index) in country" :key="index" :class="coun.active?'active':''" @click="coun.active=!coun.active">
                <img :src="coun.pic" />
                <div class="countries_layer">
                  <img src="../../static/imgs/change_c_layer.png" />
                </div>
                <span>{{coun.name}}</span>
              </li>
              
            </ul>
            <input type="hidden" class="countries_values" name="info[countries]" value />
          </div>
          <input name="info[stitle]" type="hidden" value="IDP留学申请表单官网首页_pc" id="type" />
          <input
            type="button"
            name="submit"
            id="submit"
            class="from_btn"
            value="提交领大礼"
           @click="signupClose"
          />
          <input name="dosubmit" type="hidden" value="提交领大礼" id="dosubmit" />
          <input name="info[source]" type="hidden" value id="source" />
        </form>
      </div>
      <!--表单-->
    </div>
    <!--toolbar layer end-->

    <!--toolbar layer begin-->
    <div class="toolbar_layer_feedback">
      <div class="feedback">
        <div class="l_close">
          <img src="../../static/imgs/layer_close.png" />
        </div>
        <h2>意见反馈</h2>
        <form class="addfeedbackform clearfix" action method="post" onsubmit="return false;">
          <textarea class="txt_fb"></textarea>
          <span class="sp_textarea">
            （
            <span class="fb_sum">0</span>/500）
          </span>
          <input
            type="button"
            name="submit"
            id="submit"
            class="from_btn"
            value="提交"
            onclick="addfeedback()"
          />
        </form>
      </div>
    </div>
    <!--toolbar layer end-->

    <!--toolbar layer begin-->
    <div class="toolbar_layer_login">
      <div class="login">
        <div class="l_close">
          <img src="../../static/imgs/layer_close.png" />
        </div>
        <h2>会员登陆</h2>
        <form
          class="loginform clearfix"
          id="form_login"
          action
          method="post"
          onsubmit="return false;"
        >
          <div class="div_f_name">
            <input type="text" class="txt_l_name" placeholder="用户名/手机号" />
          </div>
          <div class="div_f_pwd">
            <input type="password" class="txt_l_pwd" placeholder="密码" />
            <a href="#" id="passwordeye" class="invisible bgImg" onclick="switchPwd()"></a>
          </div>
          <input
            type="button"
            name="submit"
            id="submit"
            class="from_btn"
            value="登录"
            onclick="login()"
          />
          <div class="clearfix div_explain">
            <a class="left" href="javascript:void(0)" target="_blank" title="忘记密码？">忘记密码？</a>
            <span class="right">
              还没有账号？
              <a href="javascript:void(0)" target="_blank" title="点击注册">点击注册</a>
            </span>
          </div>
        </form>
      </div>
    </div>
    <!--toolbar layer end-->
  </div>
</template>
<div id="app">

</div>
<script>
import menubarComp from "../components/menubar-comp";
import headerComp from "../components/header-comp";
import navbannerComp from "../components/navbanner-comp";
import footerComp from "../components/footer-comp";
import api from "../../axios/api";
import Vue from "vue";
export default {
  name: "layout-comp",
  data() {
    return {
      // 右侧菜单栏定位长沙市
      toolbar_style: {
        bottom: 0,
        left: 0
      },
      tlfoot_isshow: false,
      signupShow:false,
      name:'',
      phone:'',
      nstep:0,
      country:[
    {
      "id": 1,
      "name": "澳洲",
      "pic": require("../../static/imgs/f_aus.png"),
      "active":true
    },
    {
      "id": 2,
      "name": "美国",
      "pic": require("../../static/imgs/f_usa.png"),
      "active":true
    },
    {
      "id": 3,
      "name": "英国",
      "pic": require("../../static/imgs/f_uk.png"),
      "active":false
    },
    {
      "id": 4,
      "name": "加拿大",
      "pic": require("../../static/imgs/f_can.png"),
      "active":false
    },
    {
      "id": 5,
      "name": "中国香港",
      "pic": require("../../static/imgs/f_hk.png"),
      "active":false
    },
    {
      "id": 6,
      "name": "新西兰",
      "pic": require("../../static/imgs/f_nzl.png"),
      "active":false
    },
    {
      "id": 7,
      "name": "爱尔兰",
      "pic": require("../../static/imgs/f_ael.png"),
      "active":false
    }]
    };
  },
  components: { headerComp, menubarComp, navbannerComp, footerComp },
  created(){
    // api.$api_get('http://localhost:3000/country').then(res=>{
    //   if(res){
    //     this.country=res;
    //   }
    // })
   
  },
  mounted() {
    this.inittoolbar();
    window.addEventListener("scroll", this.showToolbarFooter);
  },
  methods: {
    // 初始化右侧菜单栏的定位
    inittoolbar: function() {
      let that = this;
      //------------------------侧边栏定位逻辑  begin------------------------

      var deviceWidth = document.body.clientWidth; //屏幕宽度：获取用户页面宽度
      var deviceHeight = window.screen.height;
      var wrapWidth = 1200; //页面宽度 = 1200
      var spacingPx = 8; //页面最小间距单位 = 8
      var imgMultiple = 4; //图片最小倍数 = 4
      var partNum = 2; //等分数量 = 2
      var iconWidth = 34; //图标宽度 = 透明背景图片宽度
      var iconHight = 44; //图标宽度 = 透明背景图片高度
      var leftToolbar = spacingPx; //侧栏间距 = 页面最小间距单位
      var TB_Xcoord; //侧栏X坐标
      var reBtnTop; //返回按钮Y坐标
      var TB_Ycoord = 491; //侧边栏Y坐标
      //	#右侧栏间距
      //	（屏幕宽度 - 页面宽度）/ 等分数量 > 图标宽度/图片最小倍数 + 图标宽度
      //	栏位X轴坐标 = （屏幕宽度 - 页面宽度）/ 等分数量 + 页面宽度 + 图标宽度/图片最小倍数
      //	#右侧栏间距
      //	（屏幕宽度 - 页面宽度）/ 等分数量 < 图标宽度/图片最小倍数 + 图标宽度
      //栏位X轴坐标 = （屏幕宽度 - 页面宽度）/ 等分数量 + 页面宽度 - 图标宽度

      if (
        (deviceWidth - wrapWidth) / partNum >
        iconWidth / imgMultiple + iconWidth
      ) {
        TB_Xcoord =
          (deviceWidth - wrapWidth) / partNum +
          wrapWidth +
          iconWidth / imgMultiple;
      } else if (
        (deviceWidth - wrapWidth) / partNum <
        iconWidth / imgMultiple + iconWidth
      ) {
        TB_Xcoord = (deviceWidth - wrapWidth) / partNum + wrapWidth - iconWidth;
      }

      reBtnTop = deviceHeight - iconHight / imgMultiple;

      let toolbarstyle = { bottom: TB_Ycoord, left: TB_Xcoord };
      this.toolbar_style.bottom = TB_Ycoord;
      this.toolbar_style.left = TB_Xcoord;
    },
    //下拉到一定位置显示返回头部按钮
    showToolbarFooter: function() {
      let that = this;
      let tl_scroolTop = document.documentElement.scrollTop;

      if (tl_scroolTop > 50) {
        that.tlfoot_isshow = true;
      } else {
        that.tlfoot_isshow = false;
      }
    },
    //回到顶部
    reTop: function() {
      document.documentElement.scrollTop = 0;
    },
    //点击关闭注册按钮
    signupClose:function(){
      this.signupShow=false;
      this.name='';
      this.phone='';
      this.nstep=0;

    }
  }
};
</script>
<style>
@import "../../static/css/reset.min.css";
@import "../../static/css/common.css";
/*<!--toolbar begin -->*/

.toolbar_warp {
  /*display: none;*/
  position: fixed;
  /*bottom: 300px;*/
  width: 44px;
  /*right: 0;*/
  z-index: 10;
}

.toolbar_tabs {
  position: absolute;
  top: 50%;
  right: 0;
  width: 44px;
  /*margin-top: -80px;*/
}

.toolbar_tab {
  position: relative;
  width: 44px;
  height: 44px;
  margin-bottom: 8px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.toolbar_footer {
  /* display: none; */
  margin-top: 176px;
}

.tab_ico {
  width: 34px;
  height: 44px;
  line-height: 44px;
  position: relative;
  z-index: 2;
  display: block;
  margin: 0 auto;
}

.bar_content {
  display: none;
  width: 170px;
  opacity: 0;
  position: absolute;
  z-index: -100;
  right: 0px;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px 0 0 10px;
  -webkit-transition: all 0.3s ease-in-out 0.1s;
  transition: all 0.3s ease-in-out 0.1s;
}

.tab_text {
  display: block;
  width: 170px;
  font-size: 20px;
  height: 44px;
  line-height: 44px;
  color: #fafafa;
  text-align: center;
}

.tbar_tab_msg:hover,
.tbar_tab_apply:hover {
  background: rgba(255, 131, 0, 1);
}

.tbar_tab_leyu:hover,
.tbar_tab_feedback:hover {
  background: #51c21a;
}

.tbar_tab_wccode:hover,
.toolbar_footer:hover {
  background: #0086f8;
}

.tbar_tab_msg:hover .bar_content,
.tbar_tab_apply:hover .bar_content {
  display: block;
  background: rgba(255, 131, 0, 1);
  opacity: 1;
  right: 36px;
}

.tbar_tab_leyu:hover .bar_content,
.tbar_tab_feedback:hover .bar_content {
  display: block;
  background: #51c21a;
  opacity: 1;
  right: 36px;
}

.tbar_tab_wccode:hover .bar_content,
.toolbar_footer:hover .bar_content {
  display: block;
  background: #0086f8;
  opacity: 1;
  right: 36px;
}

.tbar_tab_msg .tab_ico {
  background: url(../../static/imgs/ic_tb_chat.png) no-repeat center;
  background-size: 28px;
}

.tbar_tab_leyu .tab_ico {
  background: url(../../static/imgs/ic_tb_phone.png) no-repeat center;
  background-size: 28px;
}

.tbar_tab_wccode .tab_ico {
  background: url(../../static/imgs/ic_tb_code.png) no-repeat center;
  background-size: 28px;
}

.tbar_tab_apply .tab_ico {
  background: url(../../static/imgs/ic_tb_form.png) no-repeat center;
  background-size: 28px;
}

.tbar_tab_feedback .tab_ico {
  background: url(../../static/imgs/ic_tb_msg.png) no-repeat center;
  background-size: 28px;
}

.toolbar_footer .tab_ico {
  background: url(../../static/imgs/ic_tb_totop.png) no-repeat center;
  background-size: 28px;
}

.telInput {
  width: 143px;
  height: 35px;
  padding: 8px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
}

.toobar_call_btn {
  margin: 16px auto 0 auto;
  display: block;
  cursor: pointer;
  color: #fff;
  width: 80px;
  height: 35px;
  background: rgba(0, 134, 248, 1);
  border-radius: 4px;
}

.tbar_tab_leyu .bar_content {
  position: absolute;
  z-index: 99;
  padding: 16px;
  height: 116px;
  box-sizing: border-box;
}

.tbar_tab_wccode .bar_content {
  width: 140px;
  height: 160px;
  padding: 16px;
  box-sizing: border-box;
}

.tbar_tab_leyu:hover .bar_content,
.tbar_tab_wccode:hover .bar_content {
  right: 44px;
  border-bottom-right-radius: 10px;
}

.tbar_tab_leyu:hover,
.tbar_tab_wccode:hover {
  border-radius: 0 10px 10px 0px;
}


.toolbar_layer_feedback,
.toolbar_layer_login {
  z-index: 110;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}
.toolbar_layer_form{
    z-index: 110;
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}
.toolbar_layer_form .div_form {
  position: relative;
  width: 528px;
  height: 572px;
  padding: 24px 58px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin: 150px auto 0;
}

.div_form h2,
.toolbar_layer_feedback h2,
.toolbar_layer_login h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: rgba(27, 75, 179, 1);
}

.div_form h3 {
  font-size: 18px;
  font-weight: bold;
  color: rgba(27, 75, 179, 1);
}
.div_form h2,
.div_form h3 {
  background: linear-gradient(
    0deg,
    rgba(225, 25, 55, 1) 10.009765625%,
    rgba(255, 131, 0, 1) 89.990234375%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.div_form input[type="text"],
select {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  width: 410px;
  padding-top: 2px;
  padding-bottom: 6px;
  padding-left: 38px;
  box-sizing: border-box;
  border-bottom: 2px solid rgba(215, 215, 215, 1);
}

.div_form .row {
  position: relative;
  margin-bottom: 4px;
}

.txt_name {
  background: url(../../static/imgs/name_box.png) no-repeat left bottom;
  background-size: inherit;
  background-position-x: 8px;
  background-position-y: 0px;
}

.txt_phone {
  background: url(../../static/imgs/phone_box.png) no-repeat left bottom;
  background-size: inherit;
  background-position-x: 8px;
  background-position-y: 0px;
}

.sel_edu {
  background: url(../../static/imgs/edu_box.png) no-repeat left bottom;
  background-size: inherit;
  background-position-x: 8px;
  background-position-y: 6px;
}

.row_countries {
  margin-top: 32px;
  margin-bottom: 14px !important;
}

.row_countries ul {
  width: 405px;
  margin: 24px auto 0;
}

.row_countries li {
  position: relative;
  cursor: pointer;
  float: left;
  width: 64px;
  height: 76px;
  text-align: center;
  margin-right: 49px;
  margin-bottom: 16px;
}

.row_countries li img {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.row_countries li span {
  margin-top: 8px;
  display: block;
  font-size: 15px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.row_countries li:nth-child(4n) {
  margin-right: 0;
}

.from_btn {
  cursor: pointer;
  display: block;
  width: 164px;
  height: 44px;
  background: linear-gradient(
    90deg,
    rgba(225, 25, 55, 1),
    rgba(255, 131, 0, 1)
  );
  border-radius: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto;
  color: rgba(255, 255, 255, 1);
}

.from_btn:hover {
  text-decoration: underline;
}

.countries_layer {
  display: none;
  position: absolute;
  top: 0;
  left: 8px;
}

.row_countries li.active .countries_layer,
.row_countries li:hover .countries_layer {
  display: block;
}

.inputSuccess:after {
  content: "";
  position: absolute;
  background: url(../../static/imgs/y_right.png) no-repeat center;
  background-size: contain;
  width: 24px;
  height: 24px;
  right: -24px;
  top: 0;
}

.inputError:after {
  content: "";
  position: absolute;
  background: url(../../static/imgs/y_error.png) no-repeat center;
  background-size: contain;
  width: 24px;
  height: 24px;
  right: -24px;
  top: 0;
}

.div_form .err_info {
  visibility: hidden;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 0, 0, 1);
  line-height: 28px;
}

.sub_img {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

.layui-m-layercont h5 {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 16px 0;
}

.layui-m-layercont {
  color: #666;
  font-size: 15px;
  text-align: center;
}

.layui-m-layerchild {
  width: 400px !important;
}

.l_close {
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}

.feedback,
.login {
  position: relative;
  width: 460px;
  height: 380px;
  background: #fff;
  padding: 48px 32px;
  border-radius: 20px;
  margin: 200px auto 0;
  box-sizing: border-box;
}

.toolbar_layer_feedback textarea {
  width: 386px;
  height: 160px;
  padding: 8px;
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 8px;
  box-sizing: border-box;
}

.sp_textarea {
  display: block;
  text-align: right;
  margin: 8px 0 16px 0;
}

.toolbar_layer_login .from_btn {
  width: 386px;
  font-size: 24px;
}

.toolbar_layer_login h2 {
  color: #333;
}

.loginform input[type="text"],
.loginform input[type="password"] {
  color: #999;
  width: 333px;
  float: right;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  padding-left: 8px;
  position: relative;
  left: -3px;
  margin-top: 3px;
  box-sizing: border-box;
}

.div_f_name {
  width: 386px;
  height: 50px;
  margin: 0 auto 16px auto;
  background: url(../../static/imgs/lg_name_box.png) no-repeat left;
  background-size: contain;
}

.div_f_pwd {
  width: 386px;
  height: 50px;
  position: relative;
  margin: 0 auto 24px auto;
  background: url(../../static/imgs/lg_pwd_box.png) no-repeat left;
  background-size: contain;
}

.div_explain {
  color: #999;
  margin-top: 8px;
  font-size: 14px;
}

.div_explain a {
  color: #008be6;
  font-size: 14px;
}

.div_explain a:hover {
  text-decoration: underline;
}

#passwordeye {
  position: absolute;
  right: 5px;
  top: 7px;
}

.loginform .invisible {
  background: url(../../static/imgs/lg_eye_hide.png) no-repeat center;
  background-repeat: no-repeat;
  width: 32px;
  height: 37px;
}

.loginform .visible {
  background: url(../../static/imgs/lg_eye_show.png) no-repeat center;
  background-repeat: no-repeat;
  width: 32px;
  height: 37px;
}

/*<!--toolbar end -->*/
</style>
