var koa = require('koa')  
, route = require('koa-route')
, app = module.exports = koa()
, monk = require('monk')
, wrap = require('co-monk')
, db = monk('localhost/studios')
, posts = wrap(db.get('posts'))
, parse = require('co-body')
, ObjectID = require('mongodb').ObjectID;

app.use(route.get('/posts', list));
app.use(route.get('/post/:id', show));
app.use(route.post('/post/add', add));

function *list() {
    var res = yield posts.find({});
    this.body = res;
    this.status = 200;
}

function *show(id) {
    var res = yield posts.find({_id: ObjectID(id)});
    this.body = res;
    this.status = 200;
}

function *add() {
    var post = yield parse(this);
    
    var u = yield posts.insert(post);
    this.set("Location", "/post/" + post._id);
    this.status = 201;
}

app.listen(3000);
console.log("Listening on http://localhost:3000");
    
 