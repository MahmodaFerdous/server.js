 var http = require('http');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html',function(err,data){ 
        if (err){
         console.log('Server running');
        
  }
  res.end(data);
  });
  })
  
  server.listen(process.env.PORT, process.env.IP, function(){
      
    console.log('Server running');
     
      
  });
