var mongoose = require("mongoose");

let database = "RegistroApi";
let port = "27017";
let host = "localhost";
let uri = `
    mongodb://${host}:${port}:${database}`;

const connectdb = () => {
  mongoose.Promise = global.Promise;

  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
      console.log("La conexión a la base fue exitosa");
    })
    .catch(() => {
      console.log("Inserte puteada");
    });
};

module.exports = {
    connectdb
};
