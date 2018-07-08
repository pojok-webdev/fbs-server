var mysql = require('promise-mysql'),
    config = require('./configs.js'),
    query = require('./queries')
qResult = (sql,callback) => {
    con = mysql.createConnection(config.mysql)
    .then(cn => {
        var qry = cn.query(sql)
        cn.end()
        return qry
    })
    .then(rows => {
        callback(rows)
    })
    .error(err => {
        return err
    })
}
module.exports = {
    getFbs : callback => {
        qResult(query.getFbs(),result => {
            callback(result)
        })
    },
    getFb : (obj,callback) => {
        qResult(query.getFb(obj),result => {
            callback(result)
        })
    },
    executeQuery : qResult
}