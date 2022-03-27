const http = require('http');

// import os module
const os = require("os");

// get host name
const hostName = os.hostname();

const CURRENTDATE = new Date();

const ip = require("ip");
const IP = ip.address();
  
const requestListener = (req, res)=>{
  console.log("Request is Incoming");

      
  const responseData = {
      message:"Hello, plan A",
    articleData:{
        timestamp: CURRENTDATE,
        hostname: hostName,
        engine: "Node",
        TestIP : IP
        
    },
    endingMessage:"Thank you"
  }
    
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};
  
const server = http.createServer(requestListener);
  
server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});