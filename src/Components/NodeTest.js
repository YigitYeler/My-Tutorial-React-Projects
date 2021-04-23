import React from "react"

const mysql = require('mysql');


  function NodeDb(){
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'kullanici-adi',
        password: 'kullanici-sifre',
        database: 'veritabani-adi'
      });
      
      connection.connect(function (err) {
        if (err) throw err;
      
        console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
      
      });

  }
export default NodeDb;