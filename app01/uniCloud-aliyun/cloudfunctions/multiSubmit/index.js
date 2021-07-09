'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	const user = db.collection('user')
	// const usernameRes = await user.where({
	// 	username:event.name,
	// 	password:event.pwd
	// }).count()
	let way = ''
	const phoneRes = await user.where({
		phone:event.name,
		password:event.pwd
	}).count().then((res)=>{
		// console.log(res.total);
		if(res.total){
			way = 'phone'
		}else{
			const emailRes = user.where({
				email:event.name,
				password:event.pwd
			}).count().then((res)=>{
				if(res.total){
					way = "email"
				}else{
					const usernameRes = user.where({
						username:event.name,
						password:event.pwd
					}).count().then((res)=>{
						if(res.total){
							way = "username"
						}else{
							way = ''
						}
					})
				}
			})
		}
	})
	// const emailRes = await user.where({
	// 	email:event.name,
	// 	password:event.pwd
	// }).count()
	// console.log(usernameRes,phoneRes,emailRes);
	//返回数据给客户端
	return way
};
