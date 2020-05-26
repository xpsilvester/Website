const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const path = require('path');
const serve = require('koa-static');
const main = serve(path.join(__dirname));
const Spider = require('./spider');

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">About Page</a>';
};
//获取数据
const getData = async (ctx) => {
    let data = await Spider.getData('https://voice.baidu.com/act/newpneumonia/newpneumonia')
    ctx.response.body = JSON.parse(data)
}

app.use(main);
app.use(route.get('/about', about));
app.use(route.get('/getData', getData));

app.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000')
});