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

*/