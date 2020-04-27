
module.exports ={
    port: process.env.port || 3001,
    db: process.env.MONGODB || 'mongodb://admin:admin@localhost:27018/my_mongodb?authSource=admin'
    SECRET_TOKEN : 'miclavedetokens'
}