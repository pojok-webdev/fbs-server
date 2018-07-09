getFbs = () => {
    sql = 'select * from fbs '
    return sql
}
getFb = obj => {
    sql = 'select * from fbs '
    sql+= 'where nofb = "' + obj.nofb + '" '
    return sql
}
saveFb = obj => {
    sql = 'insert into fbs '
    sql+= '(nofb,client_id,name,businesstype,siup,npwp,address,city,telp,fax,activationdate,period1,period2,services)'
    sql+= 'values '
    sql+= '("'+obj.nofb+'","'+obj.client_id+'","'+obj.name+'","'+obj.businesstype+'","'+obj.siup+'","'+obj.npwp+'","'+obj.address+'","'+obj.city+'","'+obj.telp+'","'+obj.fax+'","'+obj.activationdate+'","'+obj.period1+'","'+obj.period2+'","'+obj.services+'")'
    return sql
}
updateFb = obj => {
    sql = 'update fbs '
    sql+= 'set '
    sql+= 'nofb="'+obj.nofb+'",client_id="'+obj.client_id+'",name="'+obj.name+'",businesstype="'+obj.businesstype+'",siup="'+obj.siup+'",npwp="'+obj.npwp+'",address="'+obj.address+'",city="'+obj.city+'",telp="'+obj.telp+'",fax="'+obj.fax+'",activationdate="'+obj.activationdate+'",period1="'+obj.period1+'",period2="'+obj.period2+'",services="'+obj.services+'"'
    sql+= 'where nofb="'+obj.nofb+'"'
    return sql
}

getPics = (obj) => {
    sql = 'select * from fbpics '
    sql+= 'where nofb = "' + obj.nofb + '" '
    return sql
}
getPic = obj => {
    sql = 'select * from fbpics '
    sql+= 'where nofb = "' + obj.id + '" '
    return sql
}
savePic = obj => {
    sql = 'insert into fbpics '
    sql+= '(name,nofb,role,position,idnum,phone,hp,email)'
    sql+= 'values '
    sql+= '("'+obj.name+'","'+obj.nofb+'","'+obj.role+'","'+obj.position+'","'+obj.idnum+'","'+obj.phone+'","'+obj.hp+'","'+obj.email+'")'
    return sql
}
updatePic = obj => {
    sql = 'update fbpics '
    sql+= 'set '
    sql+= 'nofb="'+obj.nofb+'",name="'+obj.name+'",role="'+obj.role+'",position="'+obj.position+'",idnum="'+obj.idnum+'",phone="'+obj.phone+'",hp="'+obj.hp+'",email="'+obj.email+'"'
    sql+= 'where nofb="'+obj.nofb+'"'
    return sql
}

module.exports = {
    getFbs : getFbs,
    getFb : getFb,
    saveFb : saveFb,
    updateFb : updateFb,
    getPics : getPics,
    getPic : getPic,
    savePic : savePic,
    updatePic : updatePic
}