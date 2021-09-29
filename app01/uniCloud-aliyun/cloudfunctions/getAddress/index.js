'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let data = [];
	if(event.level == 1){
		const db = uniCloud.database()
		const province = await db.collection('province').get()
		data = province
	}else if(event.level == 2){
		const db = uniCloud.database()
		const city = await db.collection('city').where({'province_id': event.id}).get()
		data = city
	}else if(event.level == 3){
		const db = uniCloud.database()
		const district = await db.collection('district').get()
		data = district
	}
	
	//返回数据给客户端
	return data
};
