'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// console.log('event : ', event)
	
	//返回数据给客户端
	// return event
	
	 try {
	     
	    const res = await uniCloud.sendSms({
	     
	      //smsKey、smsSecret值为开通
	      smsKey: '2afa5110abd5700f1ece2fdba38a2c11', 
	      smsSecret: 'f05dc281978269fb2a96fe4c64e181f9',
	      phone: '18725668049', // 为验证码的接收者号码
	      templateId: 'xxxxxxx', // 短信模板id
		  name: 'telcode', // 请注意使用自行申请的模板时必须传name字段，值为报备时填写的应用名称
	      data: {
	     
	        code: '123456', // 测试的验证码，可自定义
	        action: '注册', // 表明用途
	        expMinute: '3', // 有效时间 单位分钟
	      }
	    })
	    // 调用成功，请注意这时不代表发送成功
	    return res
	  } catch(err) {
	     
	    // 调用失败
	    console.log(err.errCode)
	    console.log(err.errMsg)
	    return {
	     
	      code: err.errCode,
	      msg: err.errMsg
	    }
	  }
};
