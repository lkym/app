'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// //返回数据给客户端
	// return event
	const db = uniCloud.database()
	const user = db.collection('user')
	const userObj = await user.where(event).get()
	// console.log(userObj.data);
	// return userObj
	return userObj.data
};
