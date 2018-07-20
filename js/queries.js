getClients = (obj) => {
    sql = 'select a.id,a.name,count(b.nofb)fbcount from clients a '
    sql+= 'left outer join fbs b on b.client_id=a.id '
    sql+= 'where active="1" '
    sql+= 'group by a.id,a.name '
    sql+= 'order by a.name asc '
    sql+= 'limit '+obj.segment+','+obj.offset+' '
    return sql
}
getClientsLength = () => {
    sql = 'select count(id) cnt from clients '
    sql+= 'where active="1" '
    return sql
}
getClient = obj => {
    sql = 'select id,name from clients '
    sql+= 'where id='+obj.id+' '
    return sql
}
saveClient = obj => {
    sql = 'insert into clients '
    sql+= '() '
    sql+= 'values '
    sql+= '()'
    return sql
}
updateClient = obj => {
    sql = 'update clients '
    sql+= 'set '
    sql+= ''
    sql+= 'where id='+obj.id+' '
}
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
getPics = obj => {
    sql = 'select * from fbpics '
    sql+= 'where nofb = "' + obj.nofb + '" '
    return sql
}
getPic = obj => {
    sql = 'select * from fbpics '
    sql+= 'where nofb = "' + obj.nofb + '" '
    sql+= 'and role = "' + obj.role + '" '
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
    sql+= 'nofb="'+obj.nofb+'",name="'+obj.name+'",role="'+obj.role+'",position="'+obj.position+'",idnum="'+obj.idnum+'",phone="'+obj.phone+'",hp="'+obj.hp+'",email="'+obj.email+'" '
    sql+= 'where nofb="'+obj.nofb+'" and role="'+obj.role+'" '
    return sql
}
getServices = obj => {
    sql = 'select * from fbservices '
    sql+= 'where fb_id="' + obj.nofb + '" '
    return sql
}
getService = obj => {
    sql = 'select * from fbservices '
    sql+= 'where id = "' + obj.id + '" '
    return sql
}
saveService = obj => {
    sql = 'insert into fbservices '
    sql+= '(fb_id,category,name,bwtype,upm,upk,upstr,dnm,dnk,dnstr,space,bandwidth)'
    sql+= 'values '
    sql+= '("'+obj.fb_id+'","'+obj.category+'","'+obj.name+'","'+obj.bwtype+'","'+obj.upm+'","'+obj.upk+'","'+obj.upstr+'","'+obj.dnm+'","'+obj.dnk+'","'+obj.dnstr+'","'+obj.space+'","'+obj.bandwidth+'")'
    return sql
}
updateService = obj => {
    sql = 'update fbservices '
    sql+= 'set '
    sql+= 'fb_id="'+obj.fb_id+'",category="'+obj.category+'",name="'+obj.name+'",bwtype="'+obj.bwtype+'",upm="'+obj.upm+'",upk="'+obj.upk+'",upstr="'+obj.upstr+'",dnm="'+obj.dnm+'",dnk="'+obj.dnk+'",dnstr="'+obj.dnstr+'",space="'+obj.space+'",bandwidth="'+obj.bandwidth+'"'
    return sql
}
getFees = obj => {
    sql = 'select * from fbfees '
    sql+= 'where nofb="' + obj.nofb + '" '
    return sql
}
getFee = obj => {
    sql = 'select * from fbfees '
    sql+= 'where client_id = "' + obj.client_id + '" '
    sql+= 'and name = "' + obj.name + '" '
    sql+= 'and nofb = "' + obj.nofb + '"'
    return sql
}
saveFee = obj => {
    sql = 'insert into fbfees '
    sql+= '(client_id,name,nofb,dpp,ppn)'
    sql+= 'values '
    sql+= '("'+obj.client_id+'","'+obj.name+'","'+obj.nofb+'","'+obj.dpp+'","'+obj.ppn+'")'
    return sql
}
updateFee = obj => {
    sql = 'update fbfees '
    sql+= 'set '
    sql+= 'client_id="'+obj.client_id+'",name="'+obj.name+'",nofb="'+obj.nofb+'",dpp="'+obj.dpp+'",ppn="'+obj.ppn+'"'
    sql+= 'where client_id="'+ob.client_id+'" '
    and+= 'and name="'+ob.name+'" '
    and+= 'and nofb="'+ob.nofb+'"'
    return sql
}
removeFee = obj => {
    sql = 'delete from fbfees '
    sql+= 'where nofb = "' + obj.nofb + '" '
    sql+= 'and name = "' + obj.name + '" '
    return sql
}
login = obj => {
    sql = 'select id,salt,password from users '
    sql+= 'where email="'+obj.email+'" '
    return sql
}
updatePassword = (obj) => {
    sql = 'update users set password="'+obj.password+'", '
    sql+= 'salt="'+obj.salt+'" '
    sql+= 'where email = "' + obj.email + '" '
    return sql
}
activateUser = (obj,active) => {
    sql = 'update users set active="'+active+'" '
    sql+= 'where email = "' + obj.email + '" '
    return sql
}
createUser = obj => {
    sql = 'insert into users '
    sql+= '(username,email,password,salt,ip_address,created_on) '
    sql+= 'values '
    sql+= '("'+obj.username+'","'+obj.email+'","'+obj.password+'","'+obj.salt+'","127.0.0.1",0)'
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
    updatePic : updatePic,
    getServices : getServices,
    getService : getService,
    saveService : saveService,
    updateService : updateService,
    getFees : getFees,
    getFee : getFee,
    saveFee : saveFee,
    updateFee : updateFee,
    removeFee : removeFee,
    login : login,
    updatePassword : updatePassword,
    createUser : createUser,
    activateUser : activateUser,
    getClients : getClients,
    getClientsLength : getClientsLength,
    getClient : getClient,
    saveClient : saveClient,
    updateClient : updateClient
}