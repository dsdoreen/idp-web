<template>
  <div>
    <!--footer begin-->
    <div class="div_footer">
      <!--partner begin-->
      <div class="partner wrapper">
        <h1>品牌合作方</h1>
        <ul class="partner_ul clearfix">
          <li class="li_ielts">
            <h5>▪ 雅思考试全球主办方</h5>
            <a href="https://www.britishcouncil.cn/" title="britishcounci" target="_blank">
              <img src="../../static/imgs/foot-britishcouncil.png" />
            </a>
            <a href="http://www.idp.cn/" title="idp" target="_blank">
              <img src="../../static/imgs/f_IDP_Logo.png" />
            </a>
            <a
              href="http://www.cambridgeenglish.cn/"
              title="cambirdgeAssessmentEnglish"
              target="_blank"
            >
              <img src="../../static/imgs/foot-cambirdgeAssessmentEnglish.png" />
            </a>
          </li>
          <li class="li_idp">
            <h5>▪ IDP旗下教育品牌</h5>
            <a
              href="https://www.thecompleteuniversityguide.co.uk/"
              title="完全大学指南发布"
              target="_blank"
            >
              <div class="div_logo">
                <img src="../../static/imgs/foot-universityGuide.png" />
              </div>
              <span>完全大学指南发布</span>
            </a>
            <a href="https://www.hotcourses.cn/" title="全球范围专业课程检索" target="_blank">
              <div class="div_logo">
                <img src="../../static/imgs/foot-hotcourses.png" />
              </div>
              <span>全球范围专业课程检索</span>
            </a>
            <a href="https://www.cacos.com/" title="自助式留学申请平台" target="_blank">
              <div class="div_logo div_logo_c">
                <img src="../../static/imgs/foot-cacos.png" class="logo_center" />
              </div>
              <span>自助式留学申请平台</span>
            </a>
          </li>
          <li class="li_brand">
            <h5>▪ 合作品牌</h5>
            <a href="http://ieltsbro.com/" title="雅思哥" target="_blank">
              <div class="div_logo div_logo_c">
                <img src="../../static/imgs/f_ieltsbro.png" class="logo_center" />
              </div>
              <span class="txt_c">雅思哥</span>
            </a>
          </li>
          <li class="li_embassy">
            <h5>▪ 合作大使馆</h5>
            <a href="https://china.usembassy-china.org.cn/zh/" title="美国驻华大使馆" target="_blank">
              <div class="div_logo div_logo_c">
                <img src="../../static/imgs/f_embassy_usa.png" class="logo_center" />
              </div>
              <span>美国驻华大使馆</span>
            </a>
            <a
              href="https://www.gov.uk/world/organisations/british-embassy-beijing.zh"
              title="英国驻华大使馆"
              target="_blank"
            >
              <div class="div_logo div_logo_c">
                <img src="../../static/imgs/f_embassy_uk.png" class="logo_center" />
              </div>
              <span>英国驻华大使馆</span>
            </a>
            <a href="https://china.embassy.gov.au/" title="澳大利亚驻华大使馆" target="_blank">
              <div class="div_logo div_logo_c">
                <img src="../../static/imgs/f_embassy_aus.png" class="logo_center" />
              </div>
              <span>澳大利亚驻华大使馆</span>
            </a>
            <a
              href="http://www.canadainternational.gc.ca/china-chine/offices-bureaux/index.aspx"
              title="加拿大驻华大使馆"
              target="_blank"
            >
              <div class="div_logo div_logo_c">
                <img src="../../static/imgs/f_embassy_can.png" class="logo_center" />
              </div>
              <span>加拿大驻华大使馆</span>
            </a>
            <a href="https://www.mfat.govt.nz/" title="新西兰驻华大使馆" target="_blank">
              <div class="div_logo div_logo_c">
                <img src="../../static/imgs/f_embassy_nzl.png" class="logo_center" />
              </div>
              <span>新西兰驻华大使馆</span>
            </a>
          </li>
        </ul>
      </div>
      <!--partner end-->
      <!--idp_gsite begin-->
      <div class="idp_gsite wrapper">
        <h1>IDP全球站点</h1>
        <ul class="gsite_ul clearfix">
          <li v-for="(site_item,index) in global_site" :key="index">
            <a :href="site_item.url" target="_blank" :title="site_item.area">
              <img :src="site_item.img" />

              <span class="f3" v-if="site_item.areaicon_isshow">
                <img :src="site_item.area_icon" />
              </span>
              <span v-else>{{site_item.area}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!--idp_gsite end-->

      <!--idp_abtus begin-->

      <div class="idp_abtus">
        <div class="wrapper inter">
          <ul class="clearfix">
            <li>
              <h3>关于我们</h3>
              <a href="http://www.idp.cn/aboutus/" target="_blank" title="关于IDP">关于IDP</a>
              <a href="http://www.idp.cn/aboutus/culture.shtml" target="_blank" title="企业文化">企业文化</a>
              <a href="http://www.idp.cn/aboutus/honor.shtml" target="_blank" title="企业荣誉">企业荣誉</a>
              <a
                href="http://www.idp.cn/aboutus/service/category.shtml"
                target="_blank"
                title="企业服务"
              >企业服务</a>
              <a
                href="http://www.idp.cn/aboutus/employ_guide.shtml"
                target="_blank"
                title="就业指导"
              >就业指导</a>
              <a
                href="http://www.idp.cn/aboutus/ourTeam/chinaTeam.shtml"
                target="_blank"
                title="精英团队"
              >精英团队</a>
              <a
                href="http://www.idp.cn/IDPzhongguo/recruitment/index.shtml"
                target="_blank"
                title="诚聘英才"
              >诚聘英才</a>
              <a href="http://www.idp.cn/aboutus/contactUs.shtml" target="_blank" title="联系我们">联系我们</a>
              <a href="http://www.idp.cn/aboutus/channel.shtml" target="_blank" title="渠道合作">渠道合作</a>
            </li>
            <li>
              <h3>Privacy Notice</h3>
              <a
                href="https://www.idp.com/global/disclaimer/"
                target="_blank"
                title="Disclaimer"
              >Disclaimer</a>
              <a
                href="https://www.idp.com/global/privacy-policy/"
                target="_blank"
                title="Privacy Policy"
              >Privacy Policy</a>
              <a
                href="https://www.idp.com/global/terms-of-use/"
                target="_blank"
                title="Terms Of Use "
              >Terms Of Use</a>
              <a
                href="https://investors.idp.com/Investor-Centre/"
                target="_blank"
                title="Investors"
              >Investors</a>
            </li>
            <li>
              <h3>关注我们</h3>
              <div class="div_wb" title="微博"></div>
              <div
                class="div_wechat"
                title="微信"
                @mouseenter="triggerWechat('enter')"
                @mouseleave="triggerWechat('leave')"
              >
                <div class="wechat_layer" v-show="isWechatShow">
                  <img src="../../static/imgs/b_idp_code.png" />
                  <div class="triangle_border_down"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--idp_abtus end-->

      <!--idp_friendlink begin-->
      <div class="idp_friendlink">
        <div class="wrapper inter">
          <div class="logo_div clearfix">
            <div class="left">
              <img src="../../static/imgs/foot-logo1.png" />
            </div>
            <div class="right">
              <img src="../../static/imgs/foot-logo2.png" />
            </div>
          </div>
          <p>
            北京诺思国际教育咨询有限公司 ©2002-
            <span class="sp_year"></span> All Right Reserved.
            <br />资格认定书编号：BJ2004058（原：教外综资认字[2004]341号） 京ICP备10031050号-12
          </p>
          <div class="friendlink">
            <span>友情链接：</span>
            <a href="http://www.100yy.com/" target="_blank" title="雅思培训">雅思培训</a>
            <a href="#" target="_blank" title="留学推荐信">留学推荐信</a>
            <a href="#" target="_blank" title="大学排名">大学排名</a>
            <a href="http://www.letsno1.cn/" target="_blank" title="第一家教网">第一家教网</a>
          </div>
        </div>
      </div>

      <!--idp_friendlink end-->
    </div>
    <!--footer end-->
  </div>
</template>

<script>

export default {
  data() {
    return {
      //是否显示微信二维码
      isWechatShow: false,
     
      //全球站点分布
      global_site: [
        {
          url: "https://www.idp.com/",
          img: require("../../static/imgs/China_Logo_POS.png"),
          area: "中国",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/australia/",
          img: require("../../static/imgs/aus_Logo_POS.png"),
          area: "Australia",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/middleeast/",
          img: require("../../static/imgs/Logo_POS_3.png"),
          area: "البحرين",
          area_icon: require("../../static/imgs/Logo_POS_f3.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/bangladesh/",
          img: require("../../static/imgs/Bangtadesh_Logo_POS.png"),
          area: "Bangtadesh",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/cambodia/",
          img: require("../../static/imgs/Logo_POS_5.png"),
          area: "កម្ព",
          area_icon: require("../../static/imgs/Logo_POS_f5.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/canada/",
          img: require("../../static/imgs/can_Logo_POS.png"),
          area: "Canada",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/egypt/",
          img: require("../../static/imgs/Logo_POS_7.png"),
          area: "مصر",
          area_icon: require("../../static/imgs/Logo_POS_f7.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/india/",
          img: require("../../static/imgs/Logo_POS_9.png"),
          area: "भारत",
          area_icon: require("../../static/imgs/Logo_POS_f9.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/indonesia/",
          img: require("../../static/imgs/Indonesia_Logo_POS.png"),
          area: "Indonesia",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/iran/",
          img: require("../../static/imgs/Logo_POS_11.png"),
          area: "ایران",
          area_icon: require("../../static/imgs/Logo_POS_f11.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/middleeast/",
          img: require("../../static/imgs/Logo_POS_12.png"),
          area: "الأردن",
          area_icon: require("../../static/imgs/Logo_POS_f12.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/korea/",
          img: require("../../static/imgs/Logo_POS_13.png"),
          area: "대한민국",
          area_icon: require("../../static/imgs/Logo_POS_f13.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/middleeast/",
          img: require("../../static/imgs/Logo_POS_14.png"),
          area: "الكويت",
          area_icon: require("../../static/imgs/Logo_POS_f14.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/middleeast/",
          img: require("../../static/imgs/Logo_POS_15.png"),
          area: "لبنان",
          area_icon: require("../../static/imgs/Logo_POS_f15.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/malaysia/",
          img: require("../../static/imgs/Malaysia_Logo_POS.png"),
          area: "Malaysia",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/mauritius/",
          img: require("../../static/imgs/Mauritius_Logo_POS.png"),
          area: "Mauritius",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/middleeast/",
          img: require("../../static/imgs/Logo_POS_18.png"),
          area: "الشرق الأوسط",
          area_icon: require("../../static/imgs/Logo_POS_f18.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/nepal/",
          img: require("../../static/imgs/Logo_POS_19.png"),
          area: "नेपाल",
          area_icon: require("../../static/imgs/Logo_POS_f19.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/newzealand/",
          img: require("../../static/imgs/nzl_Logo_POS.png"),
          area: "New Zealand",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/oman/",
          img: require("../../static/imgs/Logo_POS_21.png"),
          area: "عُمان",
          area_icon: require("../../static/imgs/Logo_POS_f21.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/philippines/",
          img: require("../../static/imgs/Pilipinas_Logo_POS.png"),
          area: "Philippines",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/saudiarabia/",
          img: require("../../static/imgs/Logo_POS_23.png"),
          area: "المملكة العربية السعودية",
          area_icon: require("../../static/imgs/Logo_POS_f23.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/singapore/",
          img: require("../../static/imgs/Singapore_Logo_POS.png"),
          area: "Singapore",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/srilanka/",
          img: require("../../static/imgs/Logo_POS_25.png"),
          area: "இலங்கை",
          area_icon: require("../../static/imgs/Logo_POS_f25.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/thailand/",
          img: require("../../static/imgs/Logo_POS_27.png"),
          area: "ไทย",
          area_icon: require("../../static/imgs/Logo_POS_f27.png"),
          areaicon_isshow: true
        },
        {
          url: "https://www.idp.com/turkey/",
          img: require("../../static/imgs/Logo_POS_28.png"),
          area: "Türkiye",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/uae/",
          img: require("../../static/imgs/Logo_POS_29.png"),
          area: "UAE",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/usa/",
          img: require("../../static/imgs/usa_Logo_POS.png"),
          area: "USA",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.ranke-heinemann.de/australien/",
          img: require("../../static/imgs/deutschland_Logo_POS.png"),
          area: "Deutschland",
          area_icon: "",
          areaicon_isshow: false
        },
        {
          url: "https://www.idp.com/vietnam/",
          img: require("../../static/imgs/Vietnam_Logo_POS.png"),
          area: "Vietnam",
          area_icon: "",
          areaicon_isshow: false
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    triggerWechat: function(type) {
      if (type == "enter") {
        this.isWechatShow = true;
      } else {
        this.isWechatShow = false;
      }
    }
   
  }
};
</script>

<style>
/*<!--footer begin-->*/

.div_footer {
  padding: 64px 0 0;
  background: #f5f6f7;
}

/*<!--partner begin-->*/

.partner h1 {
  position: relative;
}

.partner h1:after {
  content: "";
  background: url(../../static/imgs/f_handbad.png) no-repeat left;
  background-size: initial;
  width: 91px;
  height: 107px;
  position: absolute;
  left: 190px;
  top: -30px;
}

.partner_ul {
}

.partner_ul li {
  float: left;
  margin-right: 96px;
}

.partner_ul li:last-child {
  margin-right: 0;
}

.partner_ul h5 {
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 32px;
  color: rgba(51, 51, 51, 1);
}

.partner_ul li a {
  width: 260px;
  height: 92px;
  margin: 0 auto 24px auto;
  display: block;
  padding-left: 13px;
  box-sizing: border-box;
}

/*.partner_ul li a:hover {
	background: #fff;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 7px 16px 0px rgba(155, 174, 159, 0.35);
	border-radius: 6px;
}*/

.partner_ul .div_logo {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.partner_ul .div_logo_c {
  width: 196px;
}

.partner_ul .li_ielts a {
  display: flex;
  align-items: center;
  padding-left: 13px;
}

.logo_center {
  align-items: center;
  margin: 0 auto;
}

.li_embassy .div_logo_c {
  width: 124px !important;
}

.partner_ul li img {
  display: inline-block;
}

.partner_ul li span {
  width: 196px;
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
  text-align: center;
  color: rgba(102, 102, 102, 1);
}

.partner_ul li.li_brand {
  margin-right: 88px;
}

.partner_ul li.li_brand,
.partner_ul li.li_brand a {
  width: 120px !important;
}

.partner_ul li.li_brand a {
  height: 124px !important;
}

.partner_ul li.li_brand .div_logo,
.partner_ul li.li_embassy .div_logo {
  padding-bottom: 0;
}

.li_brand .div_logo_c,
.li_brand .txt_c {
  width: 82px !important;
}

/*{
	
}*/

.partner_ul li.li_embassy {
  width: 280px;
}

.partner_ul li.li_embassy span {
  width: 124px;
  text-align: center !important;
}

.partner_ul li.li_embassy a {
  width: 120px;
  margin-right: 16px;
  display: inline-block !important;
  height: 100px !important;
}

.partner_ul li.li_idp {
  margin-right: 72px !important;
}

/*<!--partner end-->*/

/*<!--idp_gsite begin-->*/

.idp_gsite {
  padding: 56px 0;
}

.gsite_ul li {
  float: left;
  width: 200px;
  height: 45px;
  margin-bottom: 36px;
}

.gsite_ul li:nth-last-child(1),
.gsite_ul li:nth-last-child(2),
.gsite_ul li:nth-last-child(3) {
  margin-bottom: 0;
}

.gsite_ul li img {
  display: inline-block;
}

.gsite_ul span {
  margin-left: 16px;
  line-height: 42px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.gsite_ul span.f3 {
  font-size: 24px;
  font-weight: bold;
  font-family: AdobeArabic-Bold;
}

.gsite_ul span img {
  padding-top: 12px;
}

.nopading {
  padding-top: 0 !important;
}

/*<!--idp_gsite end-->*/

/*<!--idp_abtus begin-->*/

.idp_abtus {
  background: rgba(41, 41, 41, 1);
}

.idp_abtus .inter {
  padding: 64px 0 48px 0;
  box-sizing: border-box;
}

.idp_abtus .inter h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 1);
}

.idp_abtus .inter a {
  font-size: 14px;
  display: block;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
}

.idp_abtus li {
  width: 398px;
  float: left;
  padding: 0 36px;
  box-sizing: border-box;
}

.idp_abtus li:last-child {
  padding-left: 120px;
}

.div_wb,
.div_wechat {
  cursor: pointer;
  margin-top: 25px;
  display: inline-block;
}

.div_wb {
  width: 56px;
  height: 56px;
  background: url(../../static/imgs/ic_wb.png) no-repeat center top;
  background-size: contain;
}

.div_wechat {
  position: relative;
  margin-left: 24px;
  width: 56px;
  height: 56px;
  background: url(../../static/imgs/ic_wechat.png) no-repeat center top;
  background-size: contain;
}

.div_wb:hover {
  background: url(../../static/imgs/ic_wb_h.png) no-repeat center top;
  background-size: contain;
}

.div_wechat:hover {
  background: url(../../static/imgs/ic_wechat_h.png) no-repeat center top;
  background-size: contain;
}

.wechat_layer {
  width: 176px;
  height: 174px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 0px 7px 16px 0px rgba(155, 174, 159, 0.35);
  position: absolute;
  top: -196px;
  left: -61px;
}

.wechat_layer img {
  margin: 6px auto 0;
}

/*向下*/

.triangle_border_down {
  width: 0;
  height: 0;
  border-width: 20px 20px 0;
  border-style: solid;
  border-color: #fff transparent transparent;
  margin: 5px auto;
  position: relative;
}

/*<!--idp_abtus end-->*/

/*<!--idp_friendlink begin-->*/

.idp_friendlink {
  height: 234px;
  padding-top: 40px;
  box-sizing: border-box;
  background: rgba(67, 67, 67, 1);
}

.left {
  float: left;
}

.right {
  float: right;
}

.idp_friendlink .logo_div {
  width: 554px;
  margin: 0 auto;
}

.idp_friendlink p {
  margin-top: 32px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(111, 111, 111, 1);
  text-align: center;
}

.friendlink {
  margin-top: 24px;
  padding-top: 4px;
  border-top: 1px solid rgba(111, 111, 111, 1);
}

.friendlink span,
.friendlink a {
  font-size: 14px;
  color: rgba(111, 111, 111, 1);
  display: inline-block;
  margin-right: 48px;
}

/*<!--idp_friendlink end-->*/

/*<!--footer end-->*/
</style>