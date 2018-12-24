var db=require("./index");
db.setConnect("mysql://root:123456@localhost:3306/hrm");
db.define("users",{
    FirstName: {
        type: db.Sequelize.STRING
    },
    LastName: {
        type: db.Sequelize.STRING
    },
    UserName:{
        type: db.Sequelize.STRING
    },
    HashPassword:db.Sequelize.STRING
});
db.define("emps", {
    FirstName: {
        type: db.Sequelize.STRING
    },
    LastName: {
        type: db.Sequelize.STRING
    },
    Address:db.Sequelize.STRING
});
console.log(db.createModels());
console.log(db.doTestConnect())