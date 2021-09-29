const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://calvin:calvin969@cluster0.2d3ff.mongodb.net/banthai?retryWrites=true&w=majority', {
  mongoose.connect('mongodb+srv://rana:12345@cluster0.snhpu.mongodb.net/baantai01?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log('Database Connected Successfully');
})
  .catch(error => console.log(error));

  
    
// 'mongodb+srv://calvin:calvin969@cluster0.2d3ff.mongodb.net/banthai?retryWrites=true&w=majority'

// mongoose.connect('mongodb+srv://rana:12345@cluster0.snhpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {


