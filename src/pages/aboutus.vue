<template>
  <div>
    <div class="main clearfix">
      <div class="leftNav">
        <h1>
          <router-link :class="[queryType=='about'?'active li':'li']" :to="{name:'aboutus',query:{type:'about'}}">
            <div class="nav-tit">
              <img src="../../static/imgs/icon1.png" />
              <img class="active-icon" src="../../static/imgs/icon1_a.png" />
              <span>关于IDP</span>
            </div>
          </router-link>
          <router-link  :class="[queryType=='culture'?'active li':'li']"  :to="{name:'aboutus',query:{type:'culture'}}">
            <div class="nav-tit">
              <img src="../../static/imgs/icon2.png" />
              <img class="active-icon" src="../../static/imgs/icon2_a.png" />
              <span>企业文化</span>
            </div>
          </router-link>
          <router-link :class="[queryType=='honor'?'active li':'li']"  class="li" :to="{name:'aboutus',query:{type:'honor'}}">
            <div class="nav-tit">
              <img src="../../static/imgs/icon3.png" />
              <img class="active-icon" src="../../static/imgs/icon3_a.png" />
              <span>企业荣誉</span>
            </div>
          </router-link>
          <div
            :class="[queryType=='category'?'active li':queryType=='ProAdvantages'?'active li':'li']"
            @mouseenter="ServiceTrigger('enter')"
            @mouseleave="ServiceTrigger('leave')"
          >
            <div class="nav-tit">
              <img src="../../static/imgs/icon4.png" />
              <img class="active-icon" src="../../static/imgs/icon4_a.png" />
              <span>企业服务</span>
            </div>
            <ul class="subNav subNav1" v-show="isServiceShow||queryType=='category'||queryType=='ProAdvantages'">
              <li>
                <router-link :class="[queryType=='category'?'active li':'']" :to="{name:'aboutus',query:{type:'category'}}">业务范畴</router-link>
              </li>
              <li>
                <router-link :class="[queryType=='ProAdvantages'?'active li':'']" :to="{name:'aboutus',query:{type:'ProAdvantages'}}">服务项目及优势</router-link>
              </li>
            </ul>
          </div>
          <router-link :class="[queryType=='employ_guide'?'active li':'li']" :to="{name:'aboutus',query:{type:'employ_guide'}}">
            <div class="nav-tit">
              <img src="../../static/imgs/icon5.png" />
              <img class="active-icon" src="../../static/imgs/icon5_a.png" />
              <span>就业指导</span>
            </div>
          </router-link>
          <div :class="[queryType=='ceo'?'active li':'li']" @mouseenter="TeamTrigger('enter')" @mouseleave="TeamTrigger('leave')">
            <div class="nav-tit">
              <img src="../../static/imgs/icon6.png" />
              <img class="active-icon" src="../../static/imgs/icon6_a.png" />
              <span>精英团队</span>
            </div>
            <ul class="subNav subNav2" v-show="isTeamShow||queryType=='ceo'">
              <li>
                <router-link :class="[queryType=='ceo'?'active':'']" :to="{name:'aboutus',query:{type:'ceo'}}">总裁</router-link>
              </li>
              
            </ul>
          </div>

          <router-link :class="[queryType=='contactUs'?'active li':'li']" :to="{name:'aboutus',query:{type:'contactUs'}}">
            <div class="nav-tit">
              <img src="../../static/imgs/icon8.png" />
              <img class="active-icon" src="../../static/imgs/icon8_a.png" />
              <span>联系我们</span>
            </div>
          </router-link>
          <router-link :class="[queryType=='channel'?'active li':'li']" :to="{name:'aboutus',query:{type:'channel'}}">
            <div class="nav-tit">
              <img src="../../static/imgs/icon9.png" />
              <img class="active-icon" src="../../static/imgs/icon9_a.png" />
              <span>渠道合作</span>
            </div>
          </router-link>
        </h1>
      </div>
      <aboutus :queryType="queryType"></aboutus>
    </div>
  </div>
</template>

<script>
import Aboutus from "../components/about-comp";
export default {
  data() {
    return {
      isServiceShow: false,
      isTeamShow: false,
      queryType: "about",
    };
  },
  components: { Aboutus },
  mounted() {
    if (this.$router.queryType != undefined) {
      this.queryType = this.$router.queryType;
    }
    else{
      this.queryType ='about'
    }
    // console.log(this.queryType)
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        if (val.query.type != undefined) {
          this.queryType = val.query.type;
        }
      }
    }
  },
  methods: {
    ServiceTrigger: function(type) {
      if (type == "enter") {
        this.isServiceShow = true;
      } else {
        this.isServiceShow = false;
      }
    },
    TeamTrigger: function(type) {
      if (type == "enter") {
        this.isTeamShow = true;
      } else {
        this.isTeamShow = false;
      }
    }
  },

  
};
</script>

<style>
</style>