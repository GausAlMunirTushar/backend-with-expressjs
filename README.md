# Application Object
## properties:

- app.locals
```
app.locals.title = 'My Application';
```
- app.mounthpath
```
admin.mountpath
```

## Events
- mount
## Methods
- app.all()
```
app.all('*', requireAuthentication, loadUser)
```
```
app.all('*', requireAuthentication)
app.all('*', loadUser)
```
```
app.all('/api/*', requireAuthentication)
```
- app.delete()
- app.enable()
- app.enabled()
- app.disable()
- app.disabled()
- app.engine('ejs')
- app.get()
- app.get()

``` 
app.get('/') //set routes
```
- app.listen() - start server listen
- app.METHOD - all http methods
- app.param()
- app.post()
- app.path()
```
var app = express()
var blog = express()
var blogAdmin = express()

app.use('/blog', blog)
blog.use('/admin', blogAdmin)

console.dir(app.path()) // ''
console.dir(blog.path()) // '/blog'
console.dir(blogAdmin.path()) // '/blog/admin'
```
- app.put()
- app.render()
- app.route()
```
var app = express()

app.route('/events')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })
  .get(function (req, res, next) {
    res.json({})
  })
  .post(function (req, res, next) {
    // maybe add a new event...
  })
```
- app.set()
```
    app.set('view engine', 'ejs')
```
- app.use()
```
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'files')))
app.use(express.static(path.join(__dirname, 'uploads')))
```

# Template Engine:
- ejs

# Request Object:
repesents the HTTP request
knwon as req
## Proterties::
- req.app
- req.baseUrl
- req.body
- req.originalUrl
- req.path
- req.hostname
- req.ip
- req.method
- req.protocol
- req.params
- req.query
- req.cookies
- req.signedCookies
- req.secure
- req.app
- req.
- 

## Methods::
- req.accepts()
- req.
- req.get()
- req.is()

# Response Object
- represents  the HTTP Response
- known as res
## Properties:
- res.app - reference to the app instance
- res.headersSent
## Methods::
- res.cookie() - sets cookie name to value
- res.clearCookie()
- res.end()
- res.send() - sends the HTTP Response
- res.json() - send JSON Response
- res.status()
- res.sendFile
- res.sendStatus() - 
- res.render() - render a view
- res.format()
- res.location()
- res.redirect()
- res.get() - response header get
- res.set() - header set


# Middleware Concept:
- What is middleware:
- functions that have access to req res object and next function
- Request and Response Cycle
- executes any code
- can requst and response end
- chang change req and res object
- call next middleware by next()
- throw and catch errors
## Types of Middleware:
- Applicaiton Level Middleware
- Router Level Middleware
- error-handling middleware
- built in middleware
- third party middleware
```
const middleware1 =(req, res, next)=>{
    console.log("I am logging")
    next()
}
app.use(middleware1)
app.get('/', (req, res)=>{
    res.send('hello')
})
```

# Router Concept:
