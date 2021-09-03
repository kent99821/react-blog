let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    articleList: ipUrl + 'articlelist', //首页接口
    detailed: ipUrl + 'detailed',//文章详细页
    getTypeInfo: ipUrl + 'type', //获取导航栏分类数据
    getListById:ipUrl + 'list' //获取文章列表

}
export default servicePath