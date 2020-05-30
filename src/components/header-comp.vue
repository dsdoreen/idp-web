<template>
  <div class="header wrapper">
    <div class="head_logo">
      <a href="" target="_blank" title="idp教育集团">
        <img src="../../static/imgs/logo.png">
      </a>
    </div>
    <div class="head_search">
      <from action="" class="head_search_form"  method="post" id="subform" target="_blank">
        <input type="text" class="search_text" id="headSearchBox" placeholder="请输入您要搜索的内容......"/>
        <a class="btn_search">
          <img src="../../static/imgs/ic_search.png" />
        </a>
      </from>
    </div>
    <div class="head_active">
      <span class="sp_test">院校测试</span>
      <span class="sp_phone">联系我们</span>
     <a href="javascript:void(0)" class="a_account"><img src="../../static/imgs/user-icon.png" class="img_usericon"></a>
    </div>
  </div>
</template>
<div id="app">

</div>
<script>
export default {
  name: 'header-comp',
  data () {
    return {

    }
  }
}

</script>
<style>



/*header begin*/

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 30px 0;


}

.search_text{
  border: 0;
  height: 36px;
  width: 308px;
  border-bottom: 2px solid #999;
  padding: 0 35px 0 0;
  display: block;
  font-size: 14px;
  line-height: 36px;
  margin-top: 20px;
  color: rgba(153, 153, 153, 1);
  position: relative;
  z-index: 1000;
}

.btn_search{
  cursor: pointer;
  position: relative;
  right: -315px;
  top: -28px;
  z-index: 9999;
}
.head_active span{
  cursor: pointer;
  width: 56px;
  color: #999;
  font-size: 14px;
  padding-top: 32px;
  margin-right: 10px;
  display: inline-block;
}
.sp_test{

  background: url("../../static/imgs/ic_nav_code.png") no-repeat top center;
  background-size: initial;
}
.sp_phone{

  margin-right: 20px;
  background: url("../../static/imgs/ic_nav_phone.png") no-repeat top center;
  background-size: initial;
}
.head_active span:hover{
  color: #51c318;
}
.a_account img{
  display: inline-block;
}
/*header end*/


</style>
