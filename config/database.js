//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:Bone20120@fiaptecnico.zrjut.mongodb.net/test')
}

//exportar as infomações para acesso externo
module.exports = conn 