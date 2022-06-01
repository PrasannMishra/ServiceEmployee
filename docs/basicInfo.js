//This is used for Swagger basic info
module.exports = {
    swaggerDefinition:{
      openapi: "3.0.0",
        info: {  
            title:'Employee API',  
            version:'1.0.0',
            contact: {
              name: "Prasann Mishra",
              email: "prasann.mishra@outlook.com",
              url: "http://localhost:4000",
            },
            license: {
              name: "MIT-Licence-Great_Day",
              url: "https://javascript.plainenglish.io/how-to-implement-and-use-swagger-in-nodejs-d0b95e765245",
            },
        } ,
        servers: [
          {
            url: "http://localhost:3000",
          },
          {
            url: "http://prodHost:3000",
          },
        ],
    },
    apis:['./routes/*'],   
  }