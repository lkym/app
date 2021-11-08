'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// console.log('event : ', event._Id)
	const db = uniCloud.database()
	let res
	if(event.name == '' || event.phone == '' || event.detailArea == '' || event.addressSign == '' || event.area.length == 0){
		return false
	}else{
		if(event._Id){  // 判断是否是修改地址信息
			if(event.default){
				await db.collection('address').where({"userId": event.userId}).update({
					"default": 0
				})
			}
			await db.collection('address').where({"_id": event._Id}).update({
				"name": event.name,
				"phone": event.phone,
				"area": event.area,
				"detailArea": event.detailArea,
				"addressSign": event.addressSign,
				"default": event.default,
				"userId": event.userId,
			})
			return true
			
		}else{
			if(event.default == 1){
				await db.collection('address').where({"userId": event.userId}).update({
					"default": 0
				})
			}
			res = await db.collection('address').add(event)
		}
		
	}
	
	//返回数据给客户端
	return res
};
