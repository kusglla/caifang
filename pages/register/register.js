//uni进行封装
		uni.request({
				url: 'http:192.168.101:8081/cf-user/register',
				method: 'POST',
				data: {
					user_username:this.login.username,
					user_phone:this.login.phone
				},
				success: res => {
					console.log("之前的数据:" +"用户名:"+this.login.username +"手机号码"+this.login.phone);
				    console.log("数据状态"+res.statusCode);
					let list =JSON.stringify(res.data);
					console.log("返回数据状态:"+list);
					if(list ==[]){
						uni.showToast({
							icon:'none',
							title:'用户名或者手机号码错误'
						});
						return;
					}
					uni.showToast({
						icon:'none',
						title:'登陆成功'
					});
					uni.switchTab({
						url:'../index/index'
					});
				},
				fail: () => {
					uni:showToast({
						icon:'none',
						title:'网络异常，请稍后重试'
					})
				},
				complete: () => {}
			});
		}