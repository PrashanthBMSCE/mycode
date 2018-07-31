var mongoose=require('mongoose');

//genre schema
var genreSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
    type:Date,
    default:Date.now
    },
    title:{
        type:String,
        require:true
    }
    
})
var Genre=module.exports=mongoose.model('Genre',genreSchema);
//get genres
module.exports.getGenres=function(callback,limit){
    console.log('coming here....')
Genre.find(callback).limit(limit);
}

//Ad Genre
module.exports.addGenres=function(genre,callback){
    Genre.create(genre,callback);
}

//update
module.exports.updateGenres=function(id,genre,options,callback){
    var query={_id:id};
    var update={
        name:genre.name
    }
    Genre.findOneAndUpdate(query,update,options,callback);
}

//delte
module.exports.deleteGenres=function(id,callback){
    var query={_id:id};
    Genre.remove(query,callback);
}