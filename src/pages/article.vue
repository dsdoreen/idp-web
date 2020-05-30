<template>
  <div class="sections">
    <!-- 留学资讯 begin-->
    <div class="section mes—detail">
      <div class="section-con">
        <h1 class="clearfix">
          <b>【致最重要的你】给全体IDP学生的一封信</b>
        </h1>
        <div class="article_content">
          <div class="art_attribute">
            <span class="date">2020-02-05 20:52</span>
            <span class="from">来源：网络</span>
            <span class="author">编辑：fiona.guan</span>
            <span class="reader">
              已有
              <em class="number">2390</em> 人阅读
            </span>
          </div>
              <div class="newpics"><a href="javascript:void(0);" onclick="max_from_company_mini(this)"><img src="http://www.idp.cn/special/JDT/FY20/20200403-660x120.jpg" alt="IDP世界名校招生咨询会" title="IDP世界名校招生咨询会"></a></div>
          
          <p class="cnotent">
            如大家所知，一些国家已经采取了安全措施和旅游限制阻止新型冠状病毒的进一步传播，<br/>
            我们明白，这对即将开始留学生涯的学生们产生了影响，所以我们准备了以下信息希望可以维护大家的安全和健康。<br/>
            <b>请密切关注自身的健康状况</b><br/>
            您的健康是第一要务。<br/>
            如果您曾经到访过湖北省，或者跟来自湖北且有干咳、发烧或者其他感冒病症的人有过亲密接触，请在出行前立即联系医院。如果你已经抵达目的地，请尽快联系当地的医生，寻求医疗帮助。IDP也会全力协助为您联系专业的医疗服务帮助。<br/>
            更多关于预防新型冠状病毒的信息请访问链接：<br/>
           <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank"> https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public</a><br/>
            <b>抵达新的目的地之后</b><br/>
            当地政府会定时更新关于冠状病毒的信息。<br/>
            对于即将前往澳大利亚的同学，可以访问studyinaustralia.gov.au 查询您的航班信息。<br/>
            到达之后需要注意的事项请访问www.health.gov.au/health-topics/novel-coronavirus<br/>
            有关其他国家的旅行建议和最新信息，请访问以下网址：<br/>
            • 英国:  <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">https://www.nhs.uk/conditions/wuhan-novel-coronavirus/</a><br/>
            • 新西兰:  <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">https://www.safetravel.govt.nz/news/novel-coronavirus-china-2019-ncov</a><br/>
            • 加拿大:  <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">https://www.canada.ca/en/public-health/services/diseases/coronavirus.html</a><br/>
            • 美国: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank"> https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html</a><br/>
           <br/>
            <b>如果旅行限制影响您的出行</b>
            <br/>
            如果您担心旅行限制可能会影响您的开学日期，请联系您的IDP顾问。我们会和校方沟通协调。如果您有任何疑问，请联系您所在地的IDP 办公室，我们会随时提供帮助。<br/>
            关于雅思考试的调整<br/>
            关于现阶段雅思考试的调整，请访问一下链接：<br/>
           <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank"> https://www.ielts.org/news/2020/changes-to-ielts-test-arrangements-in-some-locations-due-to-novel-coronavirus</a><br/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.mes—detail h1 {
  padding-bottom: 9px;
  border-bottom: 1px solid #d0e2ff;
  margin-bottom: 10px;
  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(../../static/imgs/ic_mes.png) no-repeat left;
    background-size: initial;
    left: 0;
  }
}
.article_content{
    .newpics{
        margin-bottom: 20px;
    }
    a{
        color: #444;
        &:hover{
            text-decoration: underline;
        }
    }
    .art_attribute{
        color: #666;
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 30px;
        .reader{
            float: right;
            .number{
                color: red;
            }
        }
        .from{
            margin: 0 50px;
        }
    }
    .cnotent{
        font-size: 14px;
        color: #444;
        line-height: 30px;
    }
}
</style>