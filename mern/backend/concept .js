// middleware
/*

function(res, res, next){}

app.use(middleware)

app.use(funtion(req, res, next){})

=> middleware is a function with has access to request object, response object and next middlware function refrence
=> middleware always came int action in between req-res cycle
=> middleware can modify request object

types of middlewar:
=> middleware having scope of req, res, next and next middlware function refrence
2. routing level middleware
3. third party middleware
4. inbuilt middleware
5. error handling middlware

MVC
Model
View
Controller


database
container
harddrive partion

database mnagement system(DBMS)
1. relational dbms
2. distributed dbms

relational dbms:
=> table based design
=> tuple/row => each record inside a table is tuple/row
=> schema base design
=> not scaleable
=> sql(structure query language) database
=> my-sql, postgres, sqllite

distributed dbms:
=> document based design
=> document is valid json(javascript object notation)
=> collection
=> no schema based
=> highly scaleable
=> no-sql(not only sql)
=> mongodb, redis, cosmos




mongodb
mongodbshell


CRUD:
c => create(post)
r => read(get)
u => update(put)
d => delete(delete)

entity
LMS => user, book
user_id:
user_name:
ER diagram


mongodb:
    commands:
    1. show dbs
    2. use dbname
    3. show collections

    Insert:
     db.name.insertOne({key:'value'})

    Get view:
     db.name.find()
     db.name.find().sort({_id:-1})
     db.name.find().count()
     db.name.find().limit(limitcount)
     db.name.find().skip(skipcount)


*/