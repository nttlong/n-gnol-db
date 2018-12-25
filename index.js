const Sequelize = require('sequelize');
var models ={};
var sequelize =undefined
var sync=require("./sync");
/**
 * Set connection 
 * @param {string} connectionString 
 */
var setConnect=(connectionString)=>{
    sequelize = new Sequelize(connectionString);
}
var doTestConnect=()=>{
    var run=(cb)=>{
        sequelize
            .authenticate()
            .then(cnn => {
                cb(null,true);
            })
            .catch(err => {
                cb(err);
            });
    }
    return sync.sync(run,[]);
    
}
/**
 * Create model
 * @param {string} name 
 * @param {*} config 
 */
var define=(name,config)=>{
    models[name] = sequelize.define(name, config);
}
var createModels=()=>{
    var keys=Object.keys(models);
    var syncModel=(index,cb)=>{
        index=index||0;
        if(index<keys.length){
            var key = keys[index];
            models[key].sync({ force: false }).then(() => {
                syncModel(index+1,cb);
            }).catch(ex=>{
                cb(ex);
            });

        }
        else {
            cb(null,index);
        }
    }
    return sync.sync(syncModel,[0]);
}
module.exports={
    sync:sync,
    setConnect: setConnect,
    doTestConnect:doTestConnect,
    define: define,
    createModels: createModels,
    Sequelize: Sequelize,
    models:models,
    syncModel: ()=>{sequelize.sync()}
}
