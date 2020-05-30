<template>
  <div class>
    <!--导航栏-->
    <div class="head_navi">
      <div class="mb_wrapper">
        <ul class="clearfix navi_ul">
          <li class="orange">
           <router-link :to="{name:'index'}"> 首页</router-link>
          
          </li>
          <li class="orange clearfix" isopen="0">
           <router-link :to="{name:'index'}"> 美国留学</router-link>
            <div class="navi_layer mb_wrapper clearfix">
              <div class="navi_content clearfix">
                <div class="left navic_l">
                  <ul class="clearfix">
                    <li>
                      <a href="#" target="_blank" title>
                        <img src="../../static/imgs/otherlink_g5.png" />
                        <span>美国G5精英大学申请指南</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国热门高薪专业全解析">
                        <img src="../../static/imgs/otherlink_uk.png" />
                        <span>美国热门高薪专业全解析</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国留学申请末班车">
                        <img src="../../static/imgs/otherlink_uk2.png" />
                        <span>美国留学申请末班车</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="right navic_r">
                  <h5>• 我要申请</h5>
                  <div class="div_list clearfix nomarbotm">
                    <a href="#" target="_blank">硕士</a>
                    <a href="#" target="_blank">本科</a>
                    <a href="#" target="_blank">中学</a>
                  </div>
                  <h5>• 留学资讯</h5>
                  <div class="div_list clearfix">
                    <a href="#" target="_blank">留学要闻</a>
                    <a href="#" target="_blank">留学规划</a>
                    <a href="#" target="_blank">留学博客</a>
                    <a href="#" target="_blank">留学费用</a>
                    <a href="#" target="_blank">排名解读</a>
                    <a href="#" target="_blank">签证指导</a>
                    <a href="#" target="_blank">文书准备</a>
                    <a href="#" target="_blank">职业规划</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="orange">
           <router-link :to="{name:'aboutus'}">  英国留学</router-link>
            <div class="navi_layer mb_wrapper clearfix">
              <div class="navi_content clearfix">
                <div class="left navic_l">
                  <ul class="clearfix">
                    <li>
                      <a href="#" target="_blank" title>
                        <img src="../../static/imgs/otherlink_g5.png" />
                        <span>英国G5精英大学申请指南</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国热门高薪专业全解析">
                        <img src="../../static/imgs/otherlink_uk.png" />
                        <span>英国热门高薪专业全解析</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国留学申请末班车">
                        <img src="../../static/imgs/otherlink_uk2.png" />
                        <span>英国留学申请末班车</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="right navic_r">
                  <ul>
                    <li>
                      <span>▪</span>
                      <a
                        href="#"
                        target="_blank"
                        title="重磅！布里斯托大学直属预科开始接受国内高二学费"
                      >重磅！布里斯托大学直属预科开始接受国内高二学费</a>
                    </li>
                    <li>
                      <span>▪</span>
                      <a
                        href="#"
                        target="_blank"
                        title="重磅！布里斯托大学直属预科开始接受国内高二学费"
                      >重磅！布里斯托大学直属预科开始接受国内高二学费</a>
                    </li>
                    <li>
                      <span>▪</span>
                      <a
                        href="#"
                        target="_blank"
                        title="重磅！布里斯托大学直属预科开始接受国内高二学费"
                      >重磅！布里斯托大学直属预科开始接受国内高二学费</a>
                    </li>
                    <li>
                      <span>▪</span>
                      <a
                        href="#"
                        target="_blank"
                        title="重磅！布里斯托大学直属预科开始接受国内高二学费"
                      >重磅！布里斯托大学直属预科开始接受国内高二学费</a>
                    </li>
                    <li>
                      <span>▪</span>
                      <a
                        href="#"
                        target="_blank"
                        title="重磅！布里斯托大学直属预科开始接受国内高二学费"
                      >重磅！布里斯托大学直属预科开始接受国内高二学费</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="orange"><router-link :to="{name:'aboutus'}"> 澳洲留学</router-link></li>
          <li class="orange"><router-link :to="{name:'article'}"> 加拿大留学</router-link></li>
          <li class="orange bor_r bor_r_nav1">
            <router-link :to="{name:'aboutus'}"> 新西兰留学</router-link>
            <span>|</span>
          </li>
          <li class="green navi_2">
           <router-link :to="{name:'article'}"> 看排名</router-link>
            <div class="navi_layer mb_wrapper clearfix">
              <div class="navi_content clearfix">
                <div class="left navic_l">
                  <ul class="clearfix">
                    <li>
                      <a href="#" target="_blank" title>
                        <img src="../../static/imgs/otherlink_g5.png" />
                        <span>英国G5精英大学申请指南</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国热门高薪专业全解析">
                        <img src="../../static/imgs/otherlink_uk.png" />
                        <span>英国热门高薪专业全解析</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="right navic_r nav_rank_r">
                  <h5>• 排名类别</h5>
                  <div class="div_list clearfix nomarbotm">
                    <a href="#" target="_blank">综合排名</a>
                    <a href="#" target="_blank">专业排名</a>
                    <a href="#" target="_blank">学院排名</a>
                  </div>
                  <h5>• 国别</h5>
                  <div class="div_list clearfix">
                    <a href="#" target="_blank">世界</a>
                    <a href="#" target="_blank">英国</a>
                    <a href="#" target="_blank">美国</a>
                    <a href="#" target="_blank">加拿大</a>
                    <a href="#" target="_blank">澳大利亚</a>
                    <a href="#" target="_blank">新西兰</a>
                  </div>
                  <h5>• 排名品牌</h5>
                  <div class="div_list clearfix nomarbotm">
                    <a href="#" target="_blank">QS</a>
                    <a href="#" target="_blank">U.S.News</a>
                    <a href="#" target="_blank">THE</a>
                    <a href="#" target="_blank">软科（ARWU）</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="green navi_type3">
           <router-link :to="{name:'article'}"> 选专业</router-link>
            <div class="navi_layer mb_wrapper clearfix">
              <div class="navi_content clearfix">
                <div class="left navic_l">
                  <ul class="clearfix">
                    <li>
                      <a href="#" target="_blank" title>
                        <img src="../../static/imgs/otherlink_g5_m.png" />
                        <span>英国G5精英大学申请指南</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国热门高薪专业全解析">
                        <img src="../../static/imgs/otherlink_uk_m.png" />
                        <span>英国热门高薪专业全解析</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国热门高薪专业全解析">
                        <img src="../../static/imgs/otherlink_uk2_m.png" />
                        <span>英国热门高薪专业全解析</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="right navic_r nav_rank_r">
                  <h5>• 一级类目</h5>
                  <div class="div_list clearfix">
                    <a href="#" target="_blank">艺术与人文</a>
                    <a href="#" target="_blank">工程与科技</a>
                    <a href="#" target="_blank">生命科学与医学</a>
                    <a href="#" target="_blank">艺术与人文</a>
                    <a href="#" target="_blank">工程与科技</a>
                    <a href="#" target="_blank">生命科学与医学</a>
                  </div>
                  <h5>• 二级类目</h5>
                  <div class="div_list div_list_st clearfix">
                    <a href="#" target="_blank">艺术设计</a>
                    <a href="#" target="_blank">英语语言文学</a>
                    <a href="#" target="_blank">历史</a>
                    <a href="#" target="_blank">语言学</a>
                    <a href="#" target="_blank">现代语言</a>
                    <a href="#" target="_blank">哲学</a>
                    <a href="#" target="_blank">计算机应用</a>
                    <a href="#" target="_blank">更多</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="green navi_type3">
            <router-link :to="{name:'aboutus'}">访名校</router-link>
            <div class="navi_layer mb_wrapper clearfix">
              <div class="navi_content clearfix">
                <div class="left navic_l">
                  <ul class="clearfix">
                    <li>
                      <a href="#" target="_blank" title>
                        <img src="../../static/imgs/otherlink_g5_m.png" />
                        <span>英国G5精英大学申请指南</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国热门高薪专业全解析">
                        <img src="../../static/imgs/otherlink_uk_m.png" />
                        <span>英国热门高薪专业全解析</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="英国热门高薪专业全解析">
                        <img src="../../static/imgs/otherlink_uk2_m.png" />
                        <span>英国热门高薪专业全解析</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="right navic_r nav_rank_r">
                  <h5>• 一级类目</h5>
                  <div class="div_list div_list_st clearfix">
                    <a href="#" target="_blank">集团</a>
                    <a href="#" target="_blank">联盟</a>
                    <a href="#" target="_blank">八大</a>
                    <a href="#" target="_blank">常春藤</a>
                    <a href="#" target="_blank">集团</a>
                    <a href="#" target="_blank">联盟</a>
                    <a href="#" target="_blank">八大</a>
                    <a href="#" target="_blank">常春藤</a>
                  </div>
                  <h5>• 二级类目</h5>
                  <div class="div_list div_list_st div_list_st clearfix">
                    <a href="#" target="_blank">公立院校</a>
                    <a href="#" target="_blank">私立院校</a>
                    <a href="#" target="_blank">国立大学</a>
                    <a href="#" target="_blank">综合大学</a>
                    <a href="#" target="_blank">研究型大学</a>
                    <a href="#" target="_blank">理工大学</a>
                    <a href="#" target="_blank">天主教大学</a>
                    <a href="#" target="_blank">更多</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- <li class="green"><router-link :to="{name:'article'}"> 问名师</router-link></li> -->

          <li class="blue bor_r bor_r_nav2 navi_type_successstor">
            成功故事
            <span>|</span>
            <div class="navi_layer mb_wrapper clearfix">
              <div class="navi_content clearfix">
                <div class="left navic_l">
                 <router-link :to="{name:'article'}">▪ 英国硕士申请|进阶G5名校斩获LSE+UCL法律硕士录取</router-link>
                 <router-link :to="{name:'article'}">▪ 美国硕士申请|攻克低G点无科研弊端 逆袭纽约大学EE</router-link>
                 <router-link :to="{name:'article'}">▪ 澳洲高考VCE数学满分学霸 跻身八大墨尔本大学</router-link>
                  <router-link :to="{name:'article'}">▪ 谁说双非生无缘G5院校？无语言低绩点逆袭伦敦大学学院</router-link>
                </div>
                <div class="right navic_r nav_rank_r">
                 <router-link :to="{name:'article'}">▪ 英国硕士申请|进阶G5名校斩获LSE+UCL法律硕士录取</router-link>
                  <router-link :to="{name:'article'}">▪ 美国硕士申请|攻克低G点无科研弊端 逆袭纽约大学EE</router-link>
                 <router-link :to="{name:'article'}">▪ 澳洲高考VCE数学满分学霸 跻身八大墨尔本大学</router-link>
                 <router-link :to="{name:'article'}">▪ 谁说双非生无缘G5院校？无语言低绩点逆袭伦敦大学学院</router-link>
                </div>
              </div>
            </div>
          </li>
          <li class="orange navi_4 navi_type_abidp">
            <router-link :to="{name:'aboutus'}"> 关于IDP</router-link>
            <div class="navi_layer mb_wrapper clearfix">
              <div class="navi_content clearfix">
                <ul>
                  <li>
                    <h5>1969</h5>
                    <p>澳大利亚政府出资建立“澳大利亚—亚洲大学合作项目”，帮助亚洲国家高等院校提高教学和科研能力。</p>
                  </li>
                  <li>
                    <h5>1985</h5>
                    <p>更名为IDP教育集团，成为专门推广澳大利亚教育的非营利性机构，隶属于澳大利亚38所大学。</p>
                  </li>
                  <li>
                    <h5>1987</h5>
                    <p>与澳大利亚国际教育协会（IEAA）共同主办第一届“澳大利亚国际教育大会”（AIEC）。</p>
                  </li>
                  <li>
                    <h5>1989</h5>
                    <p>与剑桥大学考试委员会（Cambridge ESOL）及英国文化协会（British Council）共同推出雅思考试IELTS。</p>
                  </li>
                  <li>
                    <h5>1993</h5>
                    <p>进入中国市场，与教育部留学服务中心共同设立“赴澳留学办公室”，为中国学生提供澳洲留学服务。</p>
                  </li>
                  <li>
                    <h5>2017</h5>
                    <p>IDP收购全球最大留学课程搜索与咨询平台Hotcourse集团。IDP同台湾捷进国际文教事业有限公司的中国事业部战略合并开设“IDP捷进美国留学中心”。</p>
                  </li>
                  <li>
                    <h5>2015</h5>
                    <p>IDP中国运营团队与北京诺思国际教育咨询有限公司战略合并，形成IDP诺思留学。</p>
                  </li>
                  <li>
                    <h5>2014</h5>
                    <p>在中国（教育部）留学服务中心的支持下，成功举办“第一届世界大学排名高峰论坛”。</p>
                  </li>
                  <li>
                    <h5>2011</h5>
                    <p>首次联合《英国泰晤士报高等教育副刊》发布世界大学排名。</p>
                  </li>
                  <li>
                    <h5>2019</h5>
                    <p>在美国、英国、加拿大设立办公室，正式开启美、英、加多国留学服务业务，并成为首批获得美国国际招生委员会认证的成员之一。</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--导航栏-->

    <!--banner-->
    <div class="banner">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper banner-swiper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img :src="banner" />
            <div class="adrs_boxs">
              <div class="adrs_box">
                <a
                  onclick="max_from_company_mini(this)"
                  target="_blank"
                  rel="nofollow"
                >联系我们&nbsp;&nbsp;&nbsp;></a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--banner-->
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      banners: [
        require("../../static/imgs/banner.png"),
        require("../../static/imgs/banner.png"),
        require("../../static/imgs/banner.png")
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        autoplay: {
          delay: 3000,

          stopOnLastSlide: false,

          disableOnInteraction: false
        },

        //滑动速度

        speed: 800
      }
    };
  },
  mounted() {},
  computed: {
   
  }
};
</script>

<style>


/*------------navi begin---------------*/

.head_navi {
  height: 60px;
  line-height: 60px;
  position: absolute;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 1);
}

.navi_ul {
  position: relative;
  
}


.head_navi .navi_ul > li {
  cursor: pointer;
  padding: 0 24px;
  height: 60px;
  color: #d4d7e0;
  font-size: 18px;
  float: left;
  text-align: center;
}
.head_navi .navi_ul > li>a{
  color: #d4d7e0;
}
.head_navi .navi_ul > li:hover>a,.head_navi .navi_ul > li.active>a{
  color: #fff;
}
.head_navi .navi_ul li.green:hover,
.head_navi .navi_ul li.green.active {
  color: #fafafa;
  background: #51c21a;
}

.head_navi .navi_ul li.blue,
.head_navi .navi_ul li.orange {
  padding: 0 16px;
}

.head_navi .navi_ul li.blue:hover,
.head_navi .navi_ul li.blue.active {
  color: #fff;
  background: #008ce6;
}

.head_navi .navi_ul li.orange:hover,
.head_navi .navi_ul li.orange.active {
  color: #fff;
  background: #ff8300;
}

.head_navi .navi_ul li.bor_r span {
  position: absolute;
  margin-left: 8px;
}

.bor_r_nav1 span,
.bor_r_nav2 span {
  margin-left: 26px !important;
}

.navi_content {
  padding: 36px 24px;
  background: #fff;
}

.navi_2,
.navi_3,
.navi_4 {
  margin-left: 16px;
}

.navic_l li {
  float: left;
  width: 240px;
  margin-right: 24px;
}

.navic_l li:last-child {
  margin-right: 0;
}

.navic_l li span {
  margin-top: 30px;
  text-align: left;
  display: block;
  width: 210px;
  font-size: 15px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 6px;
}

.navic_l li img {
  box-shadow: 0px 0px 10px 0px rgba(21, 21, 21, 0.17);
}

.navic_l li a:hover span {
  color: #047bef;
}

.navic_r li {
  color: #333;
  width: 320px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 20px;
}

.navic_r li span {
  color: #333;
}

.navic_r li a {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.navic_r li:hover a {
  color: #047bef;
  text-decoration: underline;
}

.navic_r li:hover {
  color: #047bef;
}

.navi_layer {
  position: absolute;
  display: none;
  z-index: 1000;
  margin-left: -8px;
  left: 8px;
}

.navi_ul li:hover .navi_layer {
  display: block !important;
}

.navi_content {
  width: 1200px;
  box-sizing: border-box;
}

.navic_r {
  width: 350px;
}

.navic_r h5 {
  color: #333;
  font-size: 16px;
  text-align: left;
  height: 35px;
  line-height: 35px;
}

.div_list a {
  float: left;
  margin-bottom: 8px;
  margin-right: 16px;
  color: #999;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #999;
  font-size: 14px;
  line-height: 30px;
  display: inline-block;
}

.div_list a:nth-child(3n) {
  margin-right: 0;
}

.div_list a:hover {
  color: #fafafa;
  background: #008be6;
  border: 1px solid #008be6;
}

.nomarbotm a {
  margin-bottom: 0 !important;
}

.nav_rank_r {
  width: 588px;
}

.nav_rank_r a:nth-child(3n) {
  margin-right: 16px;
}

.navi_type3 .navic_r {
  width: 375px;
}

.navi_type3 .div_list a {
  width: 109px;
  margin-right: 20px;
  border-radius: 5px;
}

.navi_type3 .div_list a:nth-child(3n) {
  margin-right: 0;
}

.navi_type3 .navic_l {
  margin-top: 18px;
}

.navi_type3 .navi_content {
  padding-bottom: 36px !important;
}

.div_list_st a {
  width: 88px !important;
  margin-right: 3px !important;
}

.div_list_st a:nth-child(3n) {
  margin-right: 3px !important;
}

.div_list_st a:nth-child(4n) {
  margin-right: 0px !important;
}

.navi_type_successstor a {
  color: #333;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 24px;
  display: block;
  max-width: 540px;
  overflow: hidden;
  text-align: left;
}

.navi_type_successstor a:hover {
  color: #009aff;
  text-decoration: underline;
}

.navi_type_successstor .right a:last-child,
.navi_type_successstor .left a:last-child {
  margin-bottom: 0;
}

.navi_type_successstor .right,
.navi_type_successstor .left {
  width: 550px;
}

.navi_type_successstor .navi_content {
  padding: 36px 50px;
}

.navi_type_abidp .navi_content {
  height: 370px;
  padding: 28px 20px;
  box-sizing: border-box;
  background: url(../../static/imgs/abt_bg.png) #fff no-repeat bottom;
  background-size: inherit;
}

.navi_type_abidp .navi_content ul {
  margin-left: 0;
  width: 1150px;
  height: 315px;
  padding: 28px 0px;
  box-sizing: border-box;
  background: url(../../static/imgs/abidp_tl_bg.png) no-repeat top right;
  background-size: inherit;
}

.navi_type_abidp li {
  float: left;
  color: #999;
  width: 195px;
  height: 120px;
  text-align: left;
  line-height: 22px;
  margin-right: 40px;
  margin-bottom: 37px;
  font-size: 14px;
}

.navi_type_abidp li:first-child,
.navi_type_abidp li:nth-child(6) {
  margin-left: 6px;
}

.navi_type_abidp li:nth-child(5n) {
  margin-right: 0;
}

.navi_type_abidp li:nth-child(3) h5,
.navi_type_abidp li:nth-child(8) h5 {
  margin-right: -16px;
  position: relative;
}

.navi_type_abidp li:nth-child(4) h5,
.navi_type_abidp li:nth-child(9) h5 {
  margin-right: -36px;
  position: relative;
}

.navi_type_abidp li:nth-child(5n) h5 {
  text-align: right;
  margin-right: 50px;
}

.navi_type_abidp li h5 {
  color: #333;
  font-size: 16px;
  text-align: center;
}

/*------------navi end---------------*/
/*-----banner-------*/
.banner-swiper {
  height: 620px;
  width: 100%;
}
.banner-swiper img {
  padding-top: 60px;
  height: 620px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  vertical-align: middle;
  box-sizing: border-box;
}
.banner-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

.banner {
  max-width: 1903px;
  height: 620px;
  margin: 0 auto;
  position: relative;
}

.banner_slide {
  max-width: 1903px;
  /*border: 1px solid #ddd;*/
  text-align: left;
  position: relative;
}

.banner_slide .bd ul {
  zoom: 1;
  width: 100% !important;
  padding: 0;
  margin: 0;
}

.banner_slide .bd ul li {
  position: relative;
  height: 100%;
  width: 100% !important;
}

.banner_slide .bd li > img {
  width: 100%;
  padding-top: 60px;
  height: 560px;
  object-fit: cover;
  object-position: center;
  vertical-align: middle;
}

.banner_slide .bd ul li .banner_a {
  display: block;
  width: 100%;
  height: 100%;
}

.banner_slide .hd {
  position: absolute;
  width: 1200px;
  top: 250px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 10;
}

.banner_slide .hd .prev {
  opacity: 1;
  float: left;
  width: 37px;
  height: 77px;
  background: url(../../static/imgs/banner_arrow_l.png) no-repeat center;
  background-size: contain;
}

.banner_slide .hd .next {
  opacity: 1;
  float: right;
  width: 37px;
  height: 77px;
  background: url(../../static/imgs/banner_arrow_r.png) no-repeat center;
  background-size: contain;
}

.banner_slide .hd .prev:hover,
.banner_slide .hd .next:hover {
  opacity: 1 !important;
}

.banner_slide .hd ul {
  float: right;
  overflow: hidden;
  zoom: 1;
  width: 100%;
  height: 25px;
  position: absolute;
  z-index: 1;
  bottom: 100px;
  text-align: center;
  opacity: 0.5;
}

.banner_slide .hd ul li {
  display: inline-block;
  margin: 0 5px;
  width: 8px;
  height: 8px;
  background: #ccc;
  overflow: hidden;
  text-indent: -999px;
  cursor: pointer;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.banner_slide .hd ul li.on {
  width: 25px;
  height: 8px;
  background-color: #0188f7;
  border-radius: 20px;
}

.banner-con {
  position: absolute;
  width: 1100px;
  height: 51px;
  bottom: 0;
  top: -202px;
  left: 50%;
  margin: auto;
  margin-left: -550px;
  z-index: 11;
}

.changeCity {
  color: #fafafa;
  font-size: 40px;
  position: relative;
  padding-left: 40px;
  margin-bottom: 70px;
  width: 400px;
  cursor: pointer;
}

.changeCity img {
  cursor: pointer;
  display: inline-block;
  line-height: 40px;
  vertical-align: middle;
}

.changeCity:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: url(../../static/imgs/ic_nav.png) no-repeat center left;
  background-size: initial;
}

.adrs_boxs {
  position: absolute;
  width: 1200px;
  margin: 0 auto;
  margin-left: 50%;
  left: -600px;
  top: 370px;
  z-index: 12;
}

.adrs_box {
  margin-left: 0;
  position: absolute;
}

.adrs_box_m {
  margin-left: 200px;
}

.adrs_box_long {
  margin-left: 270px;
}

.layer_city {
  display: none;
  position: absolute;
}

.layer_Cul {
  width: 350px;
  height: 280px;
  font-size: 16px;
  padding: 10px;
  background: #fafafa;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  z-index: 12;
  top: 10px;
}

.layer_Cul div {
  float: left;
  height: 65px;
  width: 109px;
  text-align: center;
  line-height: 65px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}

.layer_Cul div:nth-child(3n) {
  border-right: 0;
}

.layer_Cul div:nth-child(10),
.layer_Cul div:nth-child(11),
.layer_Cul div:nth-child(12) {
  border-bottom: 0;
}

.layer_Cli a {
  display: block;
  color: #8b8b8b;
}

.layer_Cli.active a,
.layer_Cli:hover a {
  color: #333;
}

.adrs_boxs .adrs_box {
  margin-bottom: 87px;
}

.adrs_boxs .adrs_box:last-child {
  margin-bottom: 0;
}

.adrs_box_cd {
  margin-left: 250px;
}

.adrs_box h3 {
  color: #fafafa;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
  width: 390px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.adrs_box .sp_tel {
  color: #fafafa;
  font-weight: bold;
}

.adrs_box a {
  cursor: pointer;
  padding: 5px 20px;
  color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 30px;
  margin-left: 24px;
}

.adrs_box a:hover {
  border: 0;
  padding: 6px 21px;
  background: #e21b36;
  background: -webkit-linear-gradient(left, #e21b36, #ff8300);
  background: -o-linear-gradient(left, #e21b36, #ff8300);
  background: -moz-linear-gradient(left, #e21b36, #ff8300);
  background: linear-gradient(left, #e21b36, #ff8300);
}

.city-b {
  width: 1200px;
  position: absolute;
  height: 150px;
  bottom: -115px;
  left: 50%;
  margin: auto;
  margin-left: -600px;
  z-index: 11;
}

.city-b li {
  width: 383px;
  height: 150px;
  padding: 30px 0;
  box-sizing: border-box;
  text-align: center;
  margin-right: 15px;
  box-shadow: 1px 0px 30px rgba(155, 159, 174, 0.35);
  background: #fafafa;
  border-radius: 10px;
}

.city-b li:type-of-last {
  margin-right: 0;
}

.city-b li .img-wrap {
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.city-b li img {
  display: inline-block;
}

.city-b li p {
  width: 100%;
  height: 18px;
  font-size: 18px;
  line-height: 18px;
  margin-top: 20px;
  color: #616161;
}

/*-----banner-------*/
</style>