'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const db = uniCloud.database()
	const address = db.collection('address')
	const addressList = await address.where(event).get()
	
	
	//返回数据给客户端
	return addressList
};
