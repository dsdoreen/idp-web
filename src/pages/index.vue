<template>
  <div class="sections">
    <!-- 留学资讯 begin-->
    <div class="section mes">
      <div class="section-con">
        <h1 class="clearfix">
          <b>留学资讯</b>
        </h1>
        <ul class="clearfix">
          <li v-for="(infoItem,infoIndex) in infomations" :key="infoIndex">
            <router-link :to="{name:'article',query:{id:infoItem.id}}" :title="infoItem.headeTitle" class="mes_a_big">
              <img :src="infoItem.img" />
              <h3>{{infoItem.headeTitle}}</h3>
            </router-link>
            <router-link v-for="(cinfoItem,cinfoIndex) in infoItem.titlelist" :key="cinfoIndex"
             :to="{name:'article',query:{id:cinfoItem.id}}" 
             
              :title="cinfoItem.title"
              class="mes_a_sm"
            >-{{cinfoItem.title}}</router-link>
          
          </li>
        
        </ul>
      </div>
    </div>
    <!-- 留学资讯 end-->
    <!--最新留学活动 begin-->
    <div class="section sec_active">
      <div class="section-con section-r">
        <h1 class="wh1">
          <b>最新留学活动</b>
          <i
            class="i_active"
            @mouseenter="triggerActlayer('enter')"
            @mouseleave="triggerActlayer('leave')"
          ></i>
        </h1>
        <div class="active_layer" v-show="actlayer_isshow">
          IDP留学受众多海外名校委托，定期举办”院校与学生直接见面活动“，该活动旨在搭建”便捷、透明的信息平台“，合格的申请人有机会被当场录取。
          <p>【本活动为公益性质，全程免费】</p>
        </div>

        <div class="tab-contents">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper active-swiper">
              <div
                class="swiper-slide"
                v-for="(act_item,itemIndex) in actives"
                :key="itemIndex"
                :data="itemIndex"
              >
                <ul class="active_content_ul clearfix">
                  <li
                    v-for="(act_group,groupIndex) in act_item.activeGroup"
                    :key="groupIndex"
                    :class="act_group.type==0?'t_ac_cont':act_group.type==1?'t_ac_otcard':'t_ac_lastcard'"
                  >
                    <!--t_ac_cont : 活动信息卡片-->
                    <div class="ac_cont" v-if="act_group.type==0">
                      <div class="ac_cont_top">
                        <a href="javasctipt:void(0)" target="_blank">
                          <img :src="act_group.p_img" class="ac_tea_photo" />
                        </a>
                        <p>
                          <span>{{act_group.p_name}}</span>
                          <br />
                          <span>{{act_group.position}}</span>
                        </p>
                        <img :src="act_group.country_img" class="ac_c_img" />
                      </div>
                      <div class="ac_cont_botm clearfix">
                        <div class="left">
                          <div class="row_adrs">
                            <h5>{{act_group.act_name}}</h5>
                            <div class="ac_cont_city">
                              <span>{{act_group.act_city}}</span>
                            </div>
                            <div class="ac_cont_time" v-if="act_group.isShowAppointment">
                              <p class="ac_date">{{act_group.act_date}}</p>
                              <p>
                                <b>距离开始还剩</b>
                              </p>
                              <p class="p_sysj">{{act_group.countdown}}</p>
                            </div>
                            <div class="ac_cont_determined" v-else>待定</div>
                          </div>
                        </div>
                        <div class="right">
                          <div class="div_sch_img">
                            <img :src="act_group.sch_img" class="ac_sch_img" />
                          </div>
                          <h4>{{act_group.sch_name}}</h4>

                          <div class="ac_orderinfo" v-if="act_group.isShowAppointment">
                            <div class="clearfix">
                              <a class="ac_yy_btn" href="javasctipt:void(0)" target="_blank">预约</a>
                            </div>
                            <p class="p_residue">剩余XX席位</p>
                          </div>
                          <div class="ac_orderinfo" v-else>
                            <div class="clearfix">
                              <a
                                class="ac_yy_btn yy_next"
                                href="javasctipt:void(0)"
                                target="_blank"
                                @mouseenter="triggerYynext('enter',itemIndex,groupIndex)"
                                @mouseleave="triggerYynext('leave',itemIndex,groupIndex)"
                                :itemIndex="itemIndex"
                                :groupIndex="groupIndex"
                              >预约下一场</a>
                              <div class="layer_yynextinfo" v-show="act_group.yynextlay_isshow">
                                该面试官排期场次或预约席位已满。
                                <br />提前预约下一场，我们将第一时间为您安排。
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--t_ac_cont : 活动信息卡片-->

                    <!--t_ac_otcard : 其他活动信息卡片-->
                    <a href="javascript:void(0)" target="_blank" v-else-if="act_group.type==1">
                      <img src="../../static/imgs/active_card.jpg" />
                    </a>
                    <!--t_ac_otcard : 其他活动信息卡片-->
                    <!--t_ac_lastcard : 品牌栏卡片-->
                    <p v-else-if="act_group.type==2">
                      IDP每年在中国举办3场大型教育展及150余场面试活动。
                      <br />海外招生官亲临现场，面试答疑。助力学生实现留学梦想。
                    </p>
                    <!--t_ac_lastcard : 品牌栏卡片-->
                  </li>
                </ul>
              </div>
            </div>

            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <!--最新留学活动 end-->

    <!-- 留学顾问 -->
    <div class="section teacher">
      <div class="section-con section-l">
        <h1 class="clearfix">
          <b>留学顾问</b>
        </h1>
        <div class="country_tab">
          <ul class="section_tab clearfix tea_ul">
            <span v-for="(coun_item,coun_index) in consultants.country_list" :key="coun_index">
              <li
                :class="consultants.country_active==coun_index?'currentTab':''"
                @mouseenter="CurrentCountry(coun_index)"
              >{{coun_item}}</li>
              <span v-if="coun_index!=(consultants.country_list.length-1)">丨</span>
            </span>
          </ul>
        </div>
        <div class="tab-contents">
          <div class="tab-content-item tea_type_all">
            <div class="tea_infos">
              <div class="tea_info clearfix">
                <div class="left tea-l">
                  <img :src="currentConsultant.p_photo" class="teabg" />
                  <div class="info">
                    <span class="name">
                      <b>{{currentConsultant.name}}</b>
                    </span>
                    <span class="name1">
                      <b>{{currentConsultant.ename}}</b>
                    </span>
                    <br />
                    <span class="titi">
                      {{currentConsultant.pname}}
                      <img src="../../static/imgs/tea-icon1.png" />全部
                    </span>
                  </div>
                </div>
                <div class="right tea-r">
                  <div class="tit">
                    <b>专家简介</b>
                  </div>
                  <p class="tit-teainfos">{{currentConsultant.desc}}</p>

                  <!---->
                  <div class="ly-wrap clearfix right">
                    <a class="left" href>预约</a>
                    <a class="right" href>咨询</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="tea_carousel">
              <div v-swiper:teaSwiper_all="teaSwOption">
                <div class="swiper-wrapper teacher-swiper">
                  <div
                    class="swiper-slide"
                    v-for="(c_item,c_index) in currentCountry"
                    :key="c_index"
                    @mouseenter="ActiveCarousel(c_index)"
                  >
                    <img :src="c_item.min_photo" />
                    <p class="name">{{c_item.name}}</p>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <a href="http://blog.idp.cn/" target="_blank" class="right more">更多>></a>
      </div>
    </div>
    <!-- 留学顾问 -->
    <!-- 广州精彩案例 -->
    <div class="section case bg-color">
      <div class="section-con section-m">
        <h1 class="clearfix">
          <b>广州精彩案例</b>
        </h1>
        <div class="search_tab">
          <form
            class="searchform clearfix"
            action
            id="searchform"
            name="myform"
            method="post"
            onsubmit="return false;"
          >
            <select class="sel_coun" name="info[Nstep]" id data-type="*" nullmsg errormsg>
              <option>国家</option>
              <option value="美国">美国</option>
              <option value="英国">英国</option>
              <option value="澳洲">澳洲</option>
              <option value="加拿大">加拿大</option>
              <option value="新西兰">新西兰</option>
              <option value="中国香港">中国香港</option>
              <option value="新加坡">新加坡</option>
              <option value="瑞士">瑞士</option>
              <option value="爱尔兰">爱尔兰</option>
              <option value="其他">其他</option>
            </select>
            <select class="sel_step" name="info[Nstep]" id data-type="*" nullmsg errormsg>
              <option>阶段</option>
              <option value="小学">小学</option>
              <option value="初中">初中</option>
              <option value="高中">高中</option>
              <option value="专科">专科</option>
              <option value="本科">本科</option>
              <option value="硕士">硕士</option>
              <option value="其他">其他</option>
            </select>
            <select class="sel_pro" name="info[Nstep]" id data-type="*" nullmsg errormsg>
              <option>专业</option>
              <option value="戏剧专业">戏剧专业</option>
            </select>
            <input type="button" name="submit" id="submit" class="from_btn" value onclick />
          </form>
        </div>
        <div class="case-banner slideTxtBox">
          <div v-swiper:caseSwiper="caseSwOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide case-item">
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_double">
                    <div class="div_case_box left">
                      <p class="casename">
                        <b>
                          <a href="#" target="_blank">双非本科成功逆袭名校理工大学，申请秘籍是什么?</a>
                        </b>
                      </p>
                      <p class="caseschicon">
                        <a href="#" target="_blank">
                          <img src="../../static/imgs/case_sch_otago.png" />
                        </a>
                      </p>
                      <p class="sch">
                        <a href="#" target="_blank">新西兰 · 奥塔哥大学</a>
                      </p>
                      <p class="major">戏剧专业</p>
                    </div>
                    <div class="div_case_box right">
                      <img src="../../static/imgs/case_1.png" />
                      <div class="case_imgcontent">
                        <h3 class="img_name">张同学</h3>

                        <p class="img_sch">
                          <b>南京信息工程大学</b>
                        </p>
                        <p class="img_pro">
                          <b>戏剧专业</b>
                        </p>
                        <p class="img_lanresult">
                          <span>GPA:80</span>
                          <span>IELTS:9</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_double">
                    <div class="div_case_box left">
                      <p class="casename">
                        <b>
                          <a href="#" target="_blank">双非本科成功逆袭名校理工大学，申请秘籍是什么?</a>
                        </b>
                      </p>
                      <p class="caseschicon">
                        <a href="#" target="_blank">
                          <img src="../../static/imgs/casesch_1.png" />
                        </a>
                      </p>
                      <p class="sch">
                        <a href="#" target="_blank">加拿大 · 皇家威尔士音乐戏剧学院</a>
                      </p>
                      <p class="major">戏剧专业</p>
                    </div>
                    <div class="div_case_box right">
                      <img src="../../static/imgs/case_2.png" />
                      <div class="case_imgcontent">
                        <h3 class="img_name">张同学</h3>

                        <p class="img_sch">
                          <b>南京信息工程大学</b>
                        </p>
                        <p class="img_pro">
                          <b>戏剧专业</b>
                        </p>
                        <p class="img_lanresult">
                          <span>GPA:80</span>
                          <span>IELTS:9</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_double">
                    <div class="div_case_box left">
                      <p class="casename">
                        <b>
                          <a href="#" target="_blank">双非本科成功逆袭名校理工大学，申请秘籍是什么?</a>
                        </b>
                      </p>
                      <p class="caseschicon">
                        <a href="#" target="_blank">
                          <img src="../../static/imgs/casesch_2.png" />
                        </a>
                      </p>
                      <p class="sch">
                        <a href="#" target="_blank">皇家威尔士戏剧学院</a>
                      </p>
                      <p class="major">戏剧专业</p>
                    </div>
                    <div class="div_case_box right">
                      <img src="../../static/imgs/case_3.png" />
                      <div class="case_imgcontent">
                        <h3 class="img_name">张同学</h3>

                        <p class="img_sch">
                          <b>南京信息工程大学</b>
                        </p>
                        <p class="img_pro">
                          <b>戏剧专业</b>
                        </p>
                        <p class="img_lanresult">
                          <span>GPA:80</span>
                          <span>IELTS:9</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_last">
                    <div class="p_s">
                      <p>• IDP在全球35个国家，设立120间办公室</p>
                      <p>• 900位顾问和超过700家密切合作大学</p>
                      <p>• 每14分钟就会有一位IDP的学生入学</p>
                      <p>• 全球90%的学生都会推荐IDP</p>
                    </div>
                  </div>
                </li>
              </div>
              <div class="swiper-slide case-item">
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_double">
                    <div class="div_case_box left">
                      <p class="casename">
                        <b>
                          <a href="#" target="_blank">双非本科成功逆袭名校理工大学，申请秘籍是什么?</a>
                        </b>
                      </p>
                      <p class="caseschicon">
                        <a href="#" target="_blank">
                          <img src="../../static/imgs/case_sch_otago.png" />
                        </a>
                      </p>
                      <p class="sch">
                        <a href="#" target="_blank">新西兰 · 奥塔哥大学</a>
                      </p>
                      <p class="major">戏剧专业</p>
                    </div>
                    <div class="div_case_box right">
                      <img src="../../static/imgs/case_1.png" />
                      <div class="case_imgcontent">
                        <h3 class="img_name">张同学</h3>

                        <p class="img_sch">
                          <b>南京信息工程大学</b>
                        </p>
                        <p class="img_pro">
                          <b>戏剧专业</b>
                        </p>
                        <p class="img_lanresult">
                          <span>GPA:80</span>
                          <span>IELTS:9</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_double">
                    <div class="div_case_box left">
                      <p class="casename">
                        <b>
                          <a href="#" target="_blank">双非本科成功逆袭名校理工大学，申请秘籍是什么?</a>
                        </b>
                      </p>
                      <p class="caseschicon">
                        <a href="#" target="_blank">
                          <img src="../../static/imgs/casesch_1.png" />
                        </a>
                      </p>
                      <p class="sch">
                        <a href="#" target="_blank">加拿大 · 皇家威尔士音乐戏剧学院</a>
                      </p>
                      <p class="major">戏剧专业</p>
                    </div>
                    <div class="div_case_box right">
                      <img src="../../static/imgs/case_2.png" />
                      <div class="case_imgcontent">
                        <h3 class="img_name">张同学</h3>

                        <p class="img_sch">
                          <b>南京信息工程大学</b>
                        </p>
                        <p class="img_pro">
                          <b>戏剧专业</b>
                        </p>
                        <p class="img_lanresult">
                          <span>GPA:80</span>
                          <span>IELTS:9</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_double">
                    <div class="div_case_box left">
                      <p class="casename">
                        <b>
                          <a href="#" target="_blank">双非本科成功逆袭名校理工大学，申请秘籍是什么?</a>
                        </b>
                      </p>
                      <p class="caseschicon">
                        <a href="#" target="_blank">
                          <img src="../../static/imgs/casesch_2.png" />
                        </a>
                      </p>
                      <p class="sch">
                        <a href="#" target="_blank">皇家威尔士戏剧学院</a>
                      </p>
                      <p class="major">戏剧专业</p>
                    </div>
                    <div class="div_case_box right">
                      <img src="../../static/imgs/case_3.png" />
                      <div class="case_imgcontent">
                        <h3 class="img_name">张同学</h3>

                        <p class="img_sch">
                          <b>南京信息工程大学</b>
                        </p>
                        <p class="img_pro">
                          <b>戏剧专业</b>
                        </p>
                        <p class="img_lanresult">
                          <span>GPA:80</span>
                          <span>IELTS:9</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <!--div_case_box_double 两张卡片-->
                  <div class="clearfix div_case_box_last">
                    <div class="p_s">
                      <p>• IDP在全球35个国家，设立120间办公室</p>
                      <p>• 900位顾问和超过700家密切合作大学</p>
                      <p>• 每14分钟就会有一位IDP的学生入学</p>
                      <p>• 全球90%的学生都会推荐IDP</p>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 广州精彩案例 -->

    <!-- IDP全球动态 -->
    <div class="section global">
      <div class="section-con">
        <h1 class="clearfix">
          <b>IDP全球动态</b>
        </h1>
        <ul class="clearfix">
          <li v-for="(newitem,newindex) in global_news" :key="newindex">
            <a :href="newitem.url" target="_blank" :title="newitem.title" class="mes_a_big">
              <img :src="newitem.img" />
              <h3>
                {{newitem.title}}
              </h3>
            </a>
          </li>
         
        </ul>
      </div>
    </div>
    <!-- IDP全球动态 -->
    <!-- 留学视频 -->
    <div class="section movie bg-color">
      <div class="section-con section-m">
        <h1 class="clearfix">
          <b>留学视频</b>
        </h1>
        <div class="video-content clearfix">
          <div class="video-big left">
            <a href="http://schools.idp.cn/videos/122.html" target="_blank">
              <div class="video_list">
                <embed
                  src="http://yuntv.letv.com/bcloud.swf"
                  allowfullscreen="true"
                  quality="high"
                  width="524"
                  height="410"
                  align="middle"
                  allowscriptaccess="always"
                  flashvars="auto_play=0&uu=kesabsaqz0&amp;vu=e17f32d8c7"
                  type="application/x-shockwave-flash"
                />
              </div>
              <p class="videoName">为什么选择IDP?</p>
            </a>
          </div>

          <ul class="videoList right clearfix">
            <li>
              <a href="http://schools.idp.cn/videos/122.html" target="_blank">
                <div class="video_list">
                  <embed
                    src="http://yuntv.letv.com/bcloud.swf"
                    allowfullscreen="true"
                    quality="high"
                    width="306"
                    height="172"
                    align="middle"
                    allowscriptaccess="always"
                    flashvars="auto_play=0&uu=kesabsaqz0&amp;vu=cf0009378c"
                    type="application/x-shockwave-flash"
                  />
                </div>
                <p class="videoName">AIEC 2018 Promo Video</p>
              </a>
            </li>

            <li>
              <a href="http://schools.idp.cn/videos/122.html" target="_blank">
                <div class="video_list">
                  <embed
                    src="http://yuntv.letv.com/bcloud.swf"
                    allowfullscreen="true"
                    quality="high"
                    width="306"
                    height="172"
                    align="middle"
                    allowscriptaccess="always"
                    flashvars="auto_play=0&uu=kesabsaqz0&amp;vu=cf0009378c"
                    type="application/x-shockwave-flash"
                  />
                </div>
                <p class="videoName">AIEC 2018 Promo Video</p>
              </a>
            </li>

            <li>
              <a href="http://schools.idp.cn/videos/122.html" target="_blank">
                <div class="video_list">
                  <embed
                    src="http://yuntv.letv.com/bcloud.swf"
                    allowfullscreen="true"
                    quality="high"
                    width="306"
                    height="172"
                    align="middle"
                    allowscriptaccess="always"
                    flashvars="auto_play=0&uu=kesabsaqz0&amp;vu=7b814b647d"
                    type="application/x-shockwave-flash"
                  />
                </div>
                <p class="videoName">AIEC 2018 Promo Video</p>
              </a>
            </li>

            <li>
              <a href="http://schools.idp.cn/videos/122.html" target="_blank">
                <div class="video_list">
                  <embed
                    src="http://yuntv.letv.com/bcloud.swf"
                    allowfullscreen="true"
                    quality="high"
                    width="306"
                    height="172"
                    align="middle"
                    allowscriptaccess="always"
                    flashvars="auto_play=0&uu=kesabsaqz0&amp;vu=cf0009378c"
                    type="application/x-shockwave-flash"
                  />
                </div>
                <p class="videoName">AIEC 2018 Promo Video</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 留学视频 -->
  </div>
</template>

<script type="text/javascript">
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import api from "../../axios/api";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      actives: [
        {
          activeGroup: [
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/111.jpg"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country.png"),
              sch_img: require("../../static/imgs/test_sch.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              act_date: "2020-XX-XX",
              countdown: "X天X小时X分",
              isShowAppointment: true,
              yynextlay_isshow: false
            },
            {
              type: 1, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              img: require("../../static/imgs/active_card.jpg")
            },
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/222.jpg"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country_aus.png"),
              sch_img: require("../../static/imgs/active_sch.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              act_date: "2020-XX-XX",
              countdown: "X天X小时X分",
              isShowAppointment: true, // 不可预约，显示预约下一场
              yynextlay_isshow: false
            },
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/active_people.png"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country_usa.png"),
              sch_img: require("../../static/imgs/test_sch.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              isShowAppointment: false, // 不可预约，显示预约下一场
              yynextlay_isshow: false
            },
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/222.jpg"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country.png"),
              sch_img: require("../../static/imgs/test_sch2.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              isShowAppointment: false, // 不可预约，显示预约下一场
              yynextlay_isshow: false
            },
            {
              type: 2, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              desc:
                "IDP每年在中国举办3场大型教育展及150余场面试活动。海外招生官亲临现场，面试答疑。助力学生实现留学梦想。"
            }
          ]
        },
        {
          activeGroup: [
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/111.jpg"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country.png"),
              sch_img: require("../../static/imgs/test_sch.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              act_date: "2020-XX-XX",
              countdown: "X天X小时X分",
              isShowAppointment: true,
              yynextlay_isshow: false
            },
            {
              type: 1, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              img: require("../../static/imgs/active_card.jpg")
            },
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/222.jpg"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country_aus.png"),
              sch_img: require("../../static/imgs/active_sch.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              act_date: "2020-XX-XX",
              countdown: "X天X小时X分",
              isShowAppointment: true, // 不可预约，显示预约下一场
              yynextlay_isshow: false
            },
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/active_people.png"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country_usa.png"),
              sch_img: require("../../static/imgs/test_sch.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              isShowAppointment: false, // 不可预约，显示预约下一场
              yynextlay_isshow: false
            },
            {
              type: 0, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              p_img: require("../../static/imgs/222.jpg"),
              p_name: "Kenneth Eu",
              position: "Recruitment Manager,China",
              country_img: require("../../static/imgs/active_country.png"),
              sch_img: require("../../static/imgs/test_sch2.png"),
              sch_name: "皇家墨尔本理工大学",
              act_name: "招生官面试",
              act_city: "青岛",
              isShowAppointment: false, // 不可预约，显示预约下一场
              yynextlay_isshow: false
            },
            {
              type: 2, //活动类型 0:活动信息栏 1:其他活动 2:品牌栏
              desc:
                "IDP每年在中国举办3场大型教育展及150余场面试活动。海外招生官亲临现场，面试答疑。助力学生实现留学梦想。"
            }
          ]
        }
      ],
      actlayer_isshow: false,
      yynextlay_isshow: false,
      consultants: {
        country_active: 0,
        country_list: [
          "全部",
          "澳洲•新西兰",
          "英国•中国香港",
          "美国",
          "加拿大",
          "新西兰"
        ],
        country_consuls: [
          {
            is_active: 0,
            consultant_group: [
              {
                p_id: 0,
                name: "沈燕1",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/tea_test.jpg"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 1,
                name: "沈燕2",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 2,
                name: "沈燕3",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 3,
                name: "沈燕4",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea3.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 4,
                name: "沈燕5",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 5,
                name: "沈燕6",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 6,
                name: "沈燕7",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 7,
                name: "沈燕8",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 8,
                name: "沈燕9",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea3.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },

              {
                p_id: 9,
                name: "沈燕10",
                ename: "Cindy Shen",
                pname: "全部高级顾问",
                country: "全部-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              }
            ]
          },
          {
            is_active: 0,
            consultant_group: [
              {
                p_id: 0,
                name: "沈燕1",
                ename: "Cindy Shen",
                pname: "澳新高级顾问",
                country: "澳新-国家",
                min_photo: require("../../static/imgs/tea_test.jpg"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 1,
                name: "沈燕2",
                ename: "Cindy Shen",
                pname: "澳新高级顾问",
                country: "澳新-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 2,
                name: "沈燕3",
                ename: "Cindy Shen",
                pname: "澳新高级顾问",
                country: "澳新-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 3,
                name: "沈燕4",
                ename: "Cindy Shen",
                pname: "澳新高级顾问",
                country: "澳新-国家",
                min_photo: require("../../static/imgs/ic_tea3.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 4,
                name: "沈燕5",
                ename: "Cindy Shen",
                pname: "澳新高级顾问",
                country: "澳新-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 5,
                name: "沈燕6",
                ename: "Cindy Shen",
                pname: "澳新高级顾问",
                country: "澳新-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              }
            ]
          },
          {
            is_active: 0,
            consultant_group: [
              {
                p_id: 0,
                name: "沈燕1",
                ename: "Cindy Shen",
                pname: "英+港高级顾问",
                country: "英+港-国家",
                min_photo: require("../../static/imgs/tea_test.jpg"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 1,
                name: "沈燕2",
                ename: "Cindy Shen",
                pname: "英+港高级顾问",
                country: "英+港-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 2,
                name: "沈燕3",
                ename: "Cindy Shen",
                pname: "英+港高级顾问",
                country: "英+港-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              }
            ]
          },
          {
            is_active: 0,
            consultant_group: [
              {
                p_id: 0,
                name: "沈燕1",
                ename: "Cindy Shen",
                pname: "美国高级顾问",
                country: "美国-国家",
                min_photo: require("../../static/imgs/tea_test.jpg"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 1,
                name: "沈燕2",
                ename: "Cindy Shen",
                pname: "美国高级顾问",
                country: "美国-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 2,
                name: "沈燕3",
                ename: "Cindy Shen",
                pname: "美国高级顾问",
                country: "美国-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              }
            ]
          },
          {
            is_active: 0,
            consultant_group: [
              {
                p_id: 0,
                name: "沈燕1",
                ename: "Cindy Shen",
                pname: "加拿大高级顾问",
                country: "加拿大-国家",
                min_photo: require("../../static/imgs/tea_test.jpg"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 1,
                name: "沈燕2",
                ename: "Cindy Shen",
                pname: "加拿大高级顾问",
                country: "加拿大-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 2,
                name: "沈燕3",
                ename: "Cindy Shen",
                pname: "加拿大高级顾问",
                country: "加拿大-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 3,
                name: "沈燕4",
                ename: "Cindy Shen",
                pname: "加拿大高级顾问",
                country: "加拿大-国家",
                min_photo: require("../../static/imgs/ic_tea3.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 4,
                name: "沈燕5",
                ename: "Cindy Shen",
                pname: "加拿大高级顾问",
                country: "加拿大-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              }
            ]
          },
          {
            is_active: 0,
            consultant_group: [
              {
                p_id: 0,
                name: "沈燕1",
                ename: "Cindy Shen",
                pname: "新西兰高级顾问",
                country: "新西兰-国家",
                min_photo: require("../../static/imgs/tea_test.jpg"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 1,
                name: "沈燕2",
                ename: "Cindy Shen",
                pname: "新西兰高级顾问",
                country: "新西兰-国家",
                min_photo: require("../../static/imgs/ic_tea1.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              },
              {
                p_id: 2,
                name: "沈燕3",
                ename: "Cindy Shen",
                pname: "新西兰高级顾问",
                country: "新西兰-国家",
                min_photo: require("../../static/imgs/ic_tea2.png"),
                p_photo: require("../../static/imgs/tea1.png"),
                desc:
                  "国外留学生活六年，回国从事留学行业十二年，有丰富 的留学咨询经验。涉及国家澳大利亚、新西兰等，深谙 澳大利亚和新西兰留学、移民政策。对西方教育体制， 日常生活、签证资料及留学疑难杂症有充分的知识面及 经验。"
              }
            ]
          }
        ]
      },
      //保存当前选中国家的轮播数据
      currentCountry: [],
      //保存当前选中顾问的个人信息
      currentConsultant: {},
      //全球动态
      global_news: "",
      infomations:"",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // loop: true,

        autoplay: {
          delay: 3000,

          stopOnLastSlide: false,

          disableOnInteraction: false
        },

        //滑动速度

        speed: 800
      },
      teaSwOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "custom",
          renderCustom: function(swiper, current, total) {
            const activeColor = "#168fed";
            const normalColor = "#aeaeae";
            const activeWidth = "25px";
            const activeRadius = "20px";
            let color = "";
            let paginationStyle = "";
            let html = "";
            let width = "10px";
            let radius = "50%";
            let bulletClass = "";
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor;
                width = activeWidth;
                radius = activeRadius;
                bulletClass = "bullet-active";
                paginationStyle = `background:${color};height:10px;opacity:1;margin-right:0.875rem;width:${width};border-radius:${radius}`;
              } else {
                color = normalColor;
                bulletClass = "";
                paginationStyle = `background:${color};height:10px;opacity:1;margin-right:0.875rem;cursor:pointer;width:10px`;
              }

              html += `<span class="swiper-pagination-bullet ${bulletClass}" style=${paginationStyle}></span>`;
            }
            return html;
          }
        },
        // loop: true,
        //滑动速度
        speed: 1000,
        slidesPerView: 5,
        spaceBetween: 26,
        slidesPerGroup: 5,
        loopedSlides: 5
      },
      caseSwOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "custom",
          renderCustom: function(swiper, current, total) {
            const activeColor = "#168fed";
            const normalColor = "#aeaeae";
            const activeWidth = "25px";
            const activeRadius = "20px";
            let color = "";
            let paginationStyle = "";
            let html = "";
            let width = "10px";
            let radius = "50%";
            let bulletClass = "";
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor;
                width = activeWidth;
                radius = activeRadius;
                bulletClass = "bullet-active";
                paginationStyle = `background:${color};height:10px;opacity:1;margin-right:0.875rem;width:${width};border-radius:${radius}`;
              } else {
                color = normalColor;
                bulletClass = "";
                paginationStyle = `background:${color};height:10px;opacity:1;margin-right:0.875rem;cursor:pointer;width:10px`;
              }

              html += `<span class="swiper-pagination-bullet ${bulletClass}" style=${paginationStyle}></span>`;
            }
            return html;
          }
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
  mounted() {
    // 顾问模块国家切换及顾问信息切换 begin
    this.currentCountry = this.consultants.country_consuls[
      this.consultants.country_active
    ].consultant_group;
    let currentindx = this.consultants.country_consuls[
      this.consultants.country_active
    ].is_active;
    this.currentConsultant = this.currentCountry[currentindx];
    // 顾问模块国家切换及顾问信息切换 end

    // 使用 Mock
    var that = this;
    this.getnews();
    this.getInfos();
  },
  computed: {},
  methods: {
    triggerActlayer: function(type) {
      if (type == "enter") {
        this.actlayer_isshow = true;
      } else {
        this.actlayer_isshow = false;
      }
    },
    triggerYynext: function(type, itemIndex, groupIndex) {
      // console.log(itemIndex, groupIndex);
      if (type == "enter") {
        this.actives[itemIndex].activeGroup[groupIndex].yynextlay_isshow = true;
      } else {
        this.actives[itemIndex].activeGroup[
          groupIndex
        ].yynextlay_isshow = false;
      }
    },
    //切换国家
    CurrentCountry: function(coun_index) {
      this.consultants.country_active = coun_index;
      console.log(coun_index);
      this.currentCountry = this.consultants.country_consuls[
        coun_index
      ].consultant_group;
      let currentindx = this.consultants.country_consuls[
        this.consultants.country_active
      ].is_active;
      this.currentConsultant = this.currentCountry[currentindx];
    },
    // 顾问小图选中
    ActiveCarousel: function(c_index) {
      this.consultants.country_consuls[
        this.consultants.country_active
      ].is_active = c_index;
      this.currentConsultant = this.currentCountry[c_index];
    },
    getnews() {
      var that = this;
      api.$api("/newlist/newsdata").then(res => {
        console.log(res);
        if (res) {
          that.global_news = res;
        }
      });
    },
    getInfos() {
      var that = this;
      api.$api("/infolist/infosdata").then(res => {
        console.log(res);
        if (res) {
          that.infomations = res;
        }
      });
    }
  }
};
</script>

<style scoped>
/*----mes begin-----*/

.mes h1:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_mes.png) no-repeat left;
  background-size: initial;
  left: 0;
}

.mes li {
  width: 380px;
  float: left;
  margin-right: 29px;
}

.mes li:nth-child(3n) {
  margin-right: 0;
}

.mes li h3 {
  font-size: 24px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  text-align: left;
  margin: 8px 0 16px 0;
}

.mes li a.mes_a_sm {
  width: 380px;
  overflow: hidden;
  display: block;
  font-size: 18px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36px;
}

/*----mes end-----*/
/*<!--最新留学活动 begin-->*/

.sec_active {
  background: url(../../static/imgs/sec_activebg.jpg) no-repeat center top;
  background-size: cover;
}

.sec_active h1:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_sec_active.png) no-repeat left;
  background-size: initial;
  left: 0;
  top: 0;
}

.sec_active h1 i {
  position: relative;
  width: 27px;
  padding: 0 20px;
  height: 45px;
  cursor: pointer;
  margin: 5px;
  z-index: 15;
  box-sizing: border-box;
}

.sec_active h1 i:after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background: url(../../static/imgs/ic_Q.png) no-repeat center;
  background-size: initial;
  left: 0;
  top: 7px;
}

.active_layer {
  /* display: none; */
  color: #333;
  font-size: 12.6px;
  line-height: 20px;
  background: #fff;
  border-radius: 10px;
  width: 260px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 212px;
  top: 45px;
  z-index: 12;
  box-shadow: 0 4px 20px rgba(155, 159, 174, 0.3);
}

.active_layer:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_layer_arrow.png) no-repeat left;
  background-size: initial;
  left: 20px;
  top: -25px;
}

.act_ul {
  position: absolute;
  font-size: 18px;
  color: #fff;
  width: auto;
  height: 18px;
  top: 5px;
  right: 0;
  float: right;
  margin-top: 10px;
}

.act_ul li {
  cursor: pointer;
  color: #fafafa;
  margin-right: 4px;
  display: inline-block;
}

.act_ul li.currentTab {
  color: #fafafa;
  padding-bottom: 2px;
  border-bottom: 2px solid #fafafa;
  font-weight: bold;
}

.active_content_ul {
  margin-top: 48px;
  margin-left: 32px;
}

.active_content_ul li {
  width: 372px;
  height: 248px;
  float: left;
  margin-right: 26px;
  margin-bottom: 50px;
  position: relative;
}

.t_ac_otcard,
.t_ac_lastcard {
  width: 372px !important;
  height: 248px !important;
  /*margin-right: 50px !important;
	margin-left: -10px;*/
}

.t_ac_otcard img,
.t_ac_lastcard img {
  width: 372px !important;
  height: 248px !important;
}

.t_ac_lastcard {
  margin-right: 0 !important;
}

.active_content_ul li:nth-child(3n) {
  margin-right: 0;
}

.ac_cont {
  height: 216px;
  width: 355px;
  float: right;
  margin-top: 30px;
}

.t_ac_otcard img {
  border-radius: 10px;
}

.ac_cont_top {
  height: 55px;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
  background: #eaeaea;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.ac_tea_photo {
  width: 115px;
  height: 115px;
  position: absolute;
  margin-left: -30px;
  margin-top: -48px;
  z-index: 10;
  border-radius: 50%;
  /*----addclass 20190402-------*/
  border: 3px solid #fafafa;
  box-sizing: border-box;
  /*----addclass 20190402-------*/
}

.ac_cont_top p {
  width: 210px;
  margin-left: 96px;
  text-align: left;
  line-height: 20px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ac_cont_top .ac_c_img {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 36px;
  height: 36px;
  display: inline-block;
}

.ac_cont_botm {
  color: #333;
  height: 163px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px 10px 15px;
  position: relative;
  background: url(../../static/imgs/active_bg.png) #fff no-repeat left bottom;
  background-size: inherit;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.ac_sch_img {
  max-width: 130px;
  max-height: 53px;
  margin: 0 auto 5px auto;
}

.ac_cont_botm .left {
  width: 165px;
  position: relative;
}

.ac_cont h5 {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.ac_cont_city {
  padding-left: 20px;
  position: relative;
  font-size: 16px;
}

.ac_cont_city:before {
  content: "";
  position: absolute;
  width: 18px;
  height: 20px;
  background: url(../../static/imgs/active_nav.png) no-repeat left;
  background-size: contain;
  left: 0;
}

.ac_cont_determined {
  font-size: 20px;
  margin-top: 35px;
}

.row_adrs {
  height: 110px;
  margin-top: 8px;
  margin-left: 5px;
  position: relative;
}

p.ac_date {
  font-size: 14px;
  margin: 5px 0 10px 0;
}

p.p_sysj {
  margin: 3px 0 0;
}

.ac_cont_botm .right h4 {
  color: #333;
  font-weight: bold;
  font-size: 14px;
}

.ac_orderinfo {
  position: absolute;
  bottom: 10px;
  right: 15px;
}

.ac_yy_btn {
  float: right;
  color: #fafafa;
  background: #0086f9;
  padding: 3px 16px;
  border-radius: 10px;
  position: relative;
  /*right: 4px;*/
}

p.p_residue {
  margin-top: 2px;
  font-size: 12px;
  text-align: right;
}

.layer_yynextinfo {
  color: #3d3d3d;
  font-size: 14px;
  line-height: 20px;
  background: #fafafa;
  border-radius: 10px;
  width: 176px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  left: -69px;
  top: -120px;
  box-shadow: 0 4px 20px rgba(155, 159, 174, 0.35);
}

.layer_yynextinfo:after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_yynext.png) no-repeat right;
  background-size: initial;
  right: 20px;
  bottom: -25px;
}

.t_ac_lastcard {
  padding: 45px;
  box-sizing: border-box;
  border-radius: 20px;
  background: url(../../static/imgs/active_card_bg.png) no-repeat center;
}

.t_ac_lastcard h4 {
  font-size: 24px;
  color: #fafafa;
  font-weight: bold;
}

.t_ac_lastcard p {
  color: #fafafa;
  font-size: 22px;
  line-height: 36px;
  position: relative;
  padding-top: 24px;
  height: 138px;
  overflow: hidden;
  width: 304px;
}

.active_slide .hd ul {
  float: right;
  overflow: hidden;
  zoom: 1;
  width: 100%;
  height: 25px;
  position: absolute;
  z-index: 1;
  bottom: -10px;
  text-align: center;
}

.active_slide .hd ul li {
  display: inline-block;
  margin: 0 5px;
  width: 8px;
  height: 8px;
  background: #ccc;
  overflow: hidden;
  text-indent: -999px;
  cursor: pointer;
  opacity: 0.5;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.active_slide .hd ul li.on {
  width: 25px;
  height: 8px;
  opacity: 1 !important;
  background-color: #fafafa !important;
  border-radius: 20px;
}

/*<!--最新留学活动 end-->*/
/*<!-- 留学顾问 -->*/

.teacher h1:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_sec_tea.png) no-repeat left;
  background-size: initial;
  left: 0;
  top: -2px;
}

.tea_ul {
  position: absolute;
  font-size: 18px;
  color: #666;
  width: auto;
  height: 18px;
  top: 5px;
  right: 0;
  float: right;
}

.tea_ul li {
  cursor: pointer;
  color: #666;
  display: inline-block;
}

.tea_ul li.currentTab {
  color: #0159a3;
  padding-bottom: 2px;
  border-bottom: 2px solid #0159a3;
  font-weight: bold;
}

.tea_carousel {
  width: 1200px;
  text-align: center;
  margin: 50px auto 0 auto;
}

.teacher-swiper {
  padding-top: 5px !important;
}
.bullet-active {
  width: 25px;
  height: 8px;
  opacity: 1 !important;
  background-color: #0087f9 !important;
  border-radius: 20px;
}
.tea_carousel .swiper-container {
  padding-bottom: 50px;
}
.teacher-swiper .swiper-slide {
  cursor: pointer;
  float: left;
  height: 162px;
  position: relative;
  border-radius: 6px;
}

.teacher-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.teacher-swiper .swiper-slide .name {
  width: 100%;
  height: 38px;
  text-align: center;
  line-height: 38px;
  color: #fff;
  font-size: 16px;
  background-color: rgba(50, 50, 50, 0.4);
  /* opacity: 0.5; */
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.teacher-swiper .swiper-slide:hover {
  border: 2px solid #0086f9;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 6px;
}

.teacher-swiper .swiper-slide:hover img {
  height: 100%;
  border: 4px solid #fafafa;
  border-radius: 6px;
  box-sizing: border-box;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.teacher-swiper .swiper-slide:hover .name {
  bottom: 3px;
  width: 208px;
  margin: 0 auto;
  left: 3px;
}

.tea_info {
  /* display: none; */
  width: 1072px !important;
  height: 398px;
  margin: 40px auto 0;
  /*border: 1px solid #ccc;*/
  border-radius: 5px;
}

.teacher .tab-contents {
  margin-top: 70px;
}

.current {
  display: block;
  opacity: 0;
  -webkit-animation: opacity 0.8s linear forwards;
  animation: opacity 0.8s linear forwards;
}

.tea-item {
  opacity: 0;
  -webkit-animation: opacity 0.8s linear forwards;
  animation: opacity 0.8s linear forwards;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}

@keyframes opacity {
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}

.tea_info .tea-l {
  width: 534px;
  height: 398px;
  position: relative;
  background: #f6f7f9;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-right: 0;
  box-sizing: border-box;
}

.tea_info .tea-l img.teabg {
  max-width: 536px;
  max-height: 398px;
  display: block;
  margin: 0 auto;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  bottom: 0;
}

.tea_info .tea-l .info {
  width: 430px;
  height: 122px;
  background: url(../../static/imgs/tea-icon3.png) no-repeat top right;
  position: absolute;
  top: 250px;
  left: 0;
  padding-left: 38px;
  padding-top: 15px;
  box-sizing: border-box;
  background-size: cover;
}

.tea_info .info {
  color: #fff;
}

.tea_info .info .name {
  font-size: 36px;
  font-weight: bolder;
  margin-right: 10px;
}

.tea_info .info .name1 {
  font-size: 24px;
  font-weight: bolder;
}

.tea_info .titi {
  font-size: 24px;
  margin-top: 5px;
  position: absolute;
}

.tea_info .titi img {
  display: inline-block;
  width: 16px;
  height: 20px;
  margin-top: 5px;
  margin-left: 25px;
  margin-right: 5px;
}

.tea_info .tea-r {
  width: 537px;
  height: 398px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  color: #fff;
  font-weight: bolder;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.tea_type_all .tea-r {
  background: url(../../static/imgs/tea-r.png) no-repeat center;
  background-size: cover;
}

.tea_type_aus .tea-r {
  background: url(../../static/imgs/tea-r_au.png) no-repeat center;
  background-size: cover;
}

.tea_type_usa .tea-r {
  background: url(../../static/imgs/tea-r_usa.png) no-repeat center;
  background-size: cover;
}

.tea_type_uk .tea-r {
  background: url(../../static/imgs/tea-r_uk.png) no-repeat center;
  background-size: cover;
}

.tea_type_ca .tea-r {
  background: url(../../static/imgs/tea-r_ca.png) no-repeat center;
  background-size: cover;
}

.tea_type_nzl .tea-r {
  background: url(../../static/imgs/tea-r_nzl.png) no-repeat center;
  background-size: cover;
}

.tea_info .tea-r .tit-icon img {
  width: 188px;
  height: 7px;
  display: block;
  position: absolute;
  top: 40px;
  left: -28px;
}

.tea_info .tea-r .tit {
  font-size: 30px;
  font-weight: bolder;
  border-bottom: 2px solid #fafafa;
  padding-bottom: 2px;
  width: 124px;
  margin-bottom: 15px;
  display: block;

}

.tea_info .tea-r .tit-arts {
  width: 100%;
  height: 36px;
  line-height: 36px;
  margin-top: 6px;
  font-weight: 500;
  font-size: 18px;
}

.tea_info .tit-teainfos {
  color: #fff;
  font-size: 18px;
  line-height: 36px;
  font-weight: bold;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
  width: 456px;
}

.tea_info .tea-r .tit-arts:hover {
  text-decoration: underline;
  cursor: pointer;
}

.tea_info .tea-r .zan {
  width: 240px;
  height: 34px;
  font-size: 24px;
  font-weight: bolder;
  line-height: 30px;
  margin-top: 25px;
  /*----addclass 20190402-----*/
  text-align: left;
  display: block;
  overflow: hidden;
  /*----addclass 20190402-----*/
}

.tea_info .tea-r .zan b {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tea_info .tea-r .zan img {
  display: inline-block;
  width: 34px;
  height: 34px;
}

.tea_info .tea-r .ly-wrap {
  width: 200px;
  height: 30px;
  margin-top: 10px;
  position: absolute;
  right: 30px;
  bottom: 25px;
}

.tea_info .tea-r .ly-wrap a {
  width: 90px;
  height: 30px;
  margin-left: 10px;
  display: block;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  box-sizing: border-box;
}

.tea_info .tea-r .ly-wrap a {
  border: 1px solid #fff;
  color: #fff;
}

.tea_info .tea-r .ly-wrap a:hover {
  background: #fff;
  color: #666;
}

.teacher a.more {
  display: block;
  cursor: pointer;
  position: relative;
  z-index: 10;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
}

.teacher a:hover {
  text-decoration: underline;
}

/*<!-- 留学顾问 -->*/

/*<!-- 广州精彩案例 -->*/

.case {
  width: 100%;
  height: auto;
  position: relative;
}

.case h1 {
  width: 100%;
  height: 28px;
  line-height: 28px;
}

.case h1:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_sec_case.png) no-repeat left;
  background-size: initial;
  left: 0;
  top: -7px;
}

.case .case-banner {
  margin-top: 30px;
  width: 100%;
}

.case .case-banner {
  width: 1164px;
  padding: 5px 0;
  text-align: center;
  /*overflow-y: visible;*/
  overflow-x: hidden;
  margin: 96px auto 0 auto;
}

.case .case-banner .case-item {
  margin-bottom: 30px;
}

.case .case-banner .case-item li {
  float: left;
  height: 300px;
  cursor: pointer;
  text-align: center;
  font-size: 11px;
  margin-bottom: 1px;
  position: relative;
  top: 0;
  transition: all ease 0.25s;
  margin-right: 8px;
}

.case .case-banner .case-item,
.case .case-banner .bd,
.case .case-banner .tempWrap {
  overflow: visible !important;
}

.case .case-banner .case-item li:hover {
  top: -5px;
  z-index: 10;
  box-shadow: 2px 0px 20px 1px rgba(155, 159, 174, 0.3);
  border-radius: 15px;
}

.case .case-item li .right img {
  display: block;
  width: 300px;
  height: 300px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.case .case-banner .case-item li .name {
  color: #333;
  font-size: 20px;
  font-weight: bolder;
  padding-top: 20px;
  padding-bottom: 3px;
  width: 60px;
  height: 25px;
  border-bottom: 4px solid #ccc;
  line-height: 25px;
  margin: 0 auto;
}

.case .case-banner .case-item li .info {
  color: #666;
  margin-top: 5px;
  margin-bottom: 13px;
  font-size: 16px;
  line-height: 25px;
}

.case .case-banner .case-item li .sch {
  color: #333;
  font-weight: bolder;
  margin-top: 8px;
  padding: 0 10px;
  font-size: 14px;
  margin-bottom: 0px;
}

.case .case-banner .case-item li .sch.ml {
  font-size: 14px !important;
}

.case .case-banner .case-item li .sch a {
  font-size: 16px;
  color: #333 !important;
}

.case .case-banner .case-item li .major {
  font-size: 14px;
  color: #6b6b6b;
  margin-top: 1px;
}

.case .case-banner .case-item li .icon img {
  display: inline-block;
  width: 20px;
  height: 10px;
  margin-top: 5px;
}

.case .case-banner .case-item li .country img {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 5px;
  /*---------addcss 20190402--------*/
  position: absolute;
  bottom: 10px;
  margin-left: -20px;
  /*---------addcss 20190402--------*/
}

.case .case-banner .case-item li .country {
  font-size: 11.6px;
  color: #6b6b6b;
}

.case .case-banner .case-item li {
  margin-bottom: 8px;
}

.case .case-banner .hd {
  text-align: center;
  margin-top: 20px;
  width: 100%;
}

.case .case-banner .hd li {
  width: 10px;
  height: 10px;
  background: #cbcbcb;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 8px;
  display: inline-block;
}

.case .case-banner .hd li.on {
  width: 30px;
  background: #0087f9;
}

.case .more {
  font-size: 14px;
  width: 100%;
  height: 14px;
  margin-top: 20px;
  color: #6b6b6b;
  text-align: right;
}

.case .more:hover {
  cursor: pointer;
}

.case .case-item .div_case_box {
  width: 285px;
  height: 300px;
  position: relative;
  margin: 0px 1px 1px 0;
  border-radius: 10px;
  background-color: #fefefe;
}

.case .case_imgcontent {
  color: #fafafa;
  top: 18px;
  left: 25px;
  text-align: left;
  position: absolute;
}

.case .div_case_box.left:after {
  content: "";
  position: absolute;
  width: 26px;
  height: 30px;
  background: url(../../static/imgs/case_arrow.png) no-repeat center;
  background-size: initial;
  right: -15px;
  top: 24px;
  z-index: 100;
}

.case .case_imgcontent p {
  line-height: 25px;
  font-size: 17px;
  font-weight: bold;
}

.img_lanresult {
  margin-top: 8px;
  font-size: 14px !important;
  font-weight: 400 !important;
}

.img_name {
  color: #fafafa;
  font-size: 30px;
  font-weight: bold;
}

.img_age {
  text-align: right;
  font-size: 14px;
}

.img_age span {
  margin-right: 10px;
}

.img_age span:last-child {
  margin-right: 0;
}

.img_sch {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 0 0;
}

.img_pro {
  font-size: 17px;
}

.img_lanresult span {
  margin-right: 10px;
  font-weight: bold;
}

.img_lanresult span:last-child {
  margin-right: 0;
}

.div_case_box {
  position: relative;
}

.div_case_box .casename {
  color: #404040;
  font-size: 17px;
  padding: 15px 15px 0;
  text-align: left;
  font-size: 22px;
}

.div_case_box .casename a {
  color: #404040 !important;
  display: block !important;
  height: 88px;
  overflow: hidden;
}

.div_case_box .caseschicon {
  width: 158px;
  height: 100px;
  line-height: 100px;
  margin: 40px auto 0 auto;
  text-align: center;
}

.div_case_box .caseschicon img {
  display: -webkit-inline-box;
  vertical-align: middle;
  max-width: 158px;
  max-height: 100px;
}

.div_case_box .icon {
  height: 15px;
}

.div_case_box_double .div_case_box:nth-child(1),
.div_case_box_double .div_case_box:nth-child(1) img {
  border-bottom-right-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.div_case_box_double .div_case_box:nth-child(2) {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}

.div_case_box_last {
  width: 574px;
  height: 300px;
  background: url(../../static/imgs/case_big_bg.png) no-repeat center;
  background-size: inherit;
}

.layer_major {
  color: #fafafa;
  position: absolute;
  top: 0;
  padding: 40px 25px;
}

.layer_major a {
  color: #fafafa;
  font-weight: bold;
}

.layer_major h4 {
  font-size: 14.4px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
}

.layer_major li {
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px !important;
  width: auto !important;
  height: auto !important;
  border: 1px solid #fafafa;
}

.layer_major li:hover {
  top: 0 !important;
  background: #fafafa;
  border-radius: 0 !important;
}

.layer_major li:hover a {
  color: #333 !important;
}

.div_case_box_last {
  position: relative;
}

.div_case_box_last .p_s {
  left: 24px;
  bottom: 24px;
  position: absolute;
  text-align: left;
  width: 378px;
  height: 110px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
}
.div_case_box_last .p_s p{
    color: rgba(255, 255, 255, 1) !important;
}
.search_tab {
  position: absolute;
  right: 0;
  top: 0;
  width: 586px;
}

.searchform select {
  color: #9a9a9a;
  width: 168px;
  height: 35px;
  line-height: 30px;
  padding-left: 16px;
  box-sizing: border-box;
  background: url(../../static/imgs/case_select.png) no-repeat;
  background-size: contain;
  border-bottom: 0 !important;
}

.searchform input[type="button"] {
  margin-left: 8px;
  width: 46px;
  height: 30px;
  display: inline-block;
  top: 7px;
  cursor: pointer;
  position: relative;
  background: url(../../static/imgs/btn_search.png) no-repeat;
  background-size: contain;
}

/*<!-- 广州精彩案例 -->*/

/*-----全球视频------*/

.movie .video-content {
  margin-top: 70px;
}

.movie h1:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_movie.png) no-repeat left;
  background-size: initial;
  left: 0;
  top: 0;
}

.video-big {
  width: 542px;
  position: relative;
}

.video-big:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 14px;
  left: -14px;
  top: -14px;
  opacity: 0;
  -webkit-transition: ease 0.5s;
  -moz-transition: ease 0.5s;
  -ms-transition: ease 0.5s;
  -o-transition: ease 0.5s;
  transition: ease 0.5s;
}

.video-big img {
  width: 345px;
  height: 260px;
}

.video-big a,
.videoList li a {
  position: relative;
}

.video-big .videoImage {
  width: 345px;
  height: 260px;
  overflow: hidden;
}

.videoList {
  width: 640px;
  height: 330px;
}

.videoName {
  color: #333;
  line-height: 38px;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.videoPlayCount {
  color: #999999;
  font-size: 12px;
}

.videoList li {
  width: 306px;
  position: relative;
  float: left;
  margin-right: 26px;
  margin-bottom: 28px;
}

.videoList li:nth-child(2n) {
  margin-right: 0;
}

.videoList li .videoImage {
  width: 185px;
  height: 95px;
  overflow: hidden;
}

.video-big embed {
  width: 524px;
  height: 410px;
}

.videoList li embed {
  width: 306px;
  height: 172px;
}

/*-----全球视频------*/

/*----全球精彩案例-----*/

.global h1:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../../static/imgs/ic_globa.png) no-repeat left;
  background-size: initial;
  left: 0;
}

.global h3 {
  margin-top: 8px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
  width:300px;
}

.global ul {
  width: 1060px;
  margin: 0 auto;
}

.global li {
  float: left;
  margin-right: 72px;
  margin-bottom: 16px;
}

.global li:nth-child(3n) {
  margin-right: 0;
}

.div_form form::after {
  content: "";
  background: url(../../static/imgs/ic_gift.png) no-repeat;
  background-size: contain;
  position: absolute;
  width: 141px;
  height: 97px;
  bottom: 12px;
  right: 20px;
}
/*----全球精彩案例-----*/
</style>
