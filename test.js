var db=require("./index");
db.setConnect("mysql://root:123456@localhost:3306/hrm");
db.define("users",{
    FirstName: {
        type: db.Sequelize.STRING
    },
    LastName: {
        type: db.Sequelize.STRING
    }
});
db.define("emps", {
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    FirstName: {
        type: db.Sequelize.STRING
    },
    LastName: {
        type: db.Sequelize.STRING
    },
    Address:{
        type:db.Sequelize.STRING
    },
    CreatedOn:{
        type:db.Sequelize.DATE,
        defaultValue:db.Sequelize.NOW
    },
    CreatedBy:{
        type: db.Sequelize.DATE
        
    }
});
var emp=db.models.emps.build({
    code:"AAA"

})
emp.save().then(r=>{
    console.log(r);
}).catch(e=>{
    console.log(e);
})
console.log(db.createModels());
console.log(db.doTestConnect())