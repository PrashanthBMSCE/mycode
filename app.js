var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var Genre=require('./node_modules/genr');
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));

app.get('/',function(req,res){
    res.send('Hello')
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres)
    })
})

app.post('/api/genres',function(req,res){
    var genre=req.body;
    console.log('genres POST body :',genre)
    Genre.addGenres(genre,function(err,genre){
        if(err){
            throw err;
        }
        res.json(genre)
    });
});

app.put('/api/genres/:_id',function(req,res){
    var id=req.params._id;
    var genre=req.body;
    console.log('genres POST body :',genre)
    Genre.updateGenres(id,genre,{},function(err,genre){
        if(err){
            throw err;
        }
        res.json(genre)
    });
});

app.delete('/api/genres/:_id',function(req,res){
    var id=req.params._id;
    Genre.deleteGenres(id,function(err,genre){
        if(err){
            throw err;
        }
        res.json(genre)
    });
});
app.listen(3000);
console.log("running on port 3000");
