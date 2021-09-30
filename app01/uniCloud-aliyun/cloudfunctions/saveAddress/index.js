'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	let res
	if(event.name == '' || event.phone == '' || event.detailArea == ''){
		return false
	}else{
		if(event.default == 1){
			await db.collection('address').where({"userId": event.userId}).update({
				"default": 0
			})
		}
		res = await db.collection('address').add(event)
	}
	
	//返回数据给客户端
	return res
};
