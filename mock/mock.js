
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据 首页的全球动态列表
const getNewsData = function () {
    let newslist = [];
    for (let i = 0; i < 6; i++) {
        let newsObject = {
            title: 'mock数据：IDP教育集团+' + Random.csentence(10, 15), //  Random.csentence( min, max )
            img: require('../static/imgs/globla_img.png'),
            url: Random.url()
        }
        newslist.push(newsObject)
    }

    // return {
    //     newslist: newslist
    // }
    return newslist;

}

// mock一组数据 首页的留学资讯
const getInformation = function () {
    let infolist = [];
    let _titlelist=[];
    let _id=Mock.mock({
        "id|1-100":1
    }) 
    let _minid=Mock.mock({
        "id|1-100":1
    })

    _titlelist=Mock.mock({
        "titlelist|6": [
            {
                id:_minid.id,
                title: "在美国高中选校的过程中 90%家长都会犯到的"
                
            }
        ]
    });
    for (let i = 0; i < 3; i++) {
        let infosObject = {
            id:_id.id,
            img: require('../static/imgs/mes_img_'+(i+1)+'.png'),
            headeTitle: "mock数据："+Random.ctitle(5, 8)+"?" ,
            titlelist: _titlelist.titlelist


        }
        infolist.push(infosObject)
    }

    // return {
    //     newslist: newslist
    // }
    return infolist;

}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/newlist/newsdata', 'post', getNewsData);
Mock.mock('/infolist/infosdata', 'post', getInformation);