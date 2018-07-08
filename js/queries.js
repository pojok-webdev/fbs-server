getFbs = () => {
    sql = 'select * from fbs '
    return sql
}
getFb = obj => {
    sql = 'select * from fbs '
    sql+= 'where id = ' + obj.id + ' '
    return sql
}
saveFb = obj => {
    sql = 'insert into fbs '
    sql+= '(nofb,client_id,client_site_id,name,businesstype,siup,npwp,address,city,telp,fax,activationdate,period1,period2,services)'
    sql+= 'values '
    sql+= '("'+obj.nofb+'","'+obj.client_id+'","'+obj.client_site_id+'","'+obj.name+'","'+obj.businesstype+'","'+obj.siup+'","'+obj.npwp+'","'+obj.address+'","'+obj.city+'","'+obj.telp+'","'+obj.fax+'","'+obj.activationdate+'","'+obj.period1+'","'+obj.period2+'","'+obj.services+'")'
    return sql
}
updateFb = obj => {
    sql = 'update fbs '
    sql+= 'set '
    sql+= 'nofb="'+obj.nofb+'",client_id="'+obj.client_id+'",client_site_id="'+obj.client_site_id+'",name="'+obj.name+'",businesstype="'+obj.businesstype+'",siup="'+obj.siup+'",npwp="'+obj.npwp+'",address="'+obj.address+'",city="'+obj.city+'",telp="'+obj.telp+'",fax="'+obj.fax+'",activationdate="'+obj.activationdate+'",period1="'+obj.period1+'",period2="'+obj.period2+'",services="'+obj.services+'"'
    return sql
}
module.exports = {
    getFbs : getFbs,
    getFb : getFb,
    saveFb : saveFb,
    updateFb : updateFb
}