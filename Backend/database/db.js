import mysql from "mysql2";

export const myDB = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"xm_bakeries"
});
myDB.getConnection((err,connect)=>{
    if(err){ console.log("failed to connect");}
        else{console.log("database is connected successfull");}
        return connect.release();
    }
)