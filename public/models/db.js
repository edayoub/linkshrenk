const mongoose  =require('mongoose');
//connect
mongoose.connect('mongodb://Arnotec:Dknobitmx33@ds133296.mlab.com:33296/site', {
    useMongoClient: true,
});
//creat a schema
const schema = mongoose.Schema({
    site:String,
});
//creat a model
const site = mongoose.model("site",schema);

module.exports = site;