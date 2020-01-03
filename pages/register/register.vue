<template>
	<view class="content">
		<form @submit="tijiao">
			<view class="register-logo">手机快捷登录</view>
		    <view class="has-mglr-10 ">
		        <view class=" has-mgtb-10 ">
					<view class="userow uni-form-item uni-column">
						<input name="phone"  type="number" maxlength="11" focus placeholder="请输入手机号"
						 @input="onInput" class="is-input1 " :verification="['isNull','phone']" :verificationTip="['手机号码不能为空','请输入正确的手机号']" 
						 required validate pattern ="[0-9]{11}" data-error-message="手机号格式不正确"/>
						 <span class="error-message"></span>
					</view>
					<!-- <button>获取验证码</button> -->
					<view class="uni-countdown">
						<view class="uni-countdown-numbers" @click="click" :id="id" :style="{borderColor:borderColor, color:fontColor, background:bgrColor}">{{text}} {{s}}</view>
					</view>
		        </view>
		      
		         <view class=" has-radius has-mgtb-10">
		             <input name="password" placeholder="请输入验证码" :password="true" class="is-input2" />
		        </view>
		        <view class=" registerbtn has-radius has-mgtb-20">
		             <button form-type="submit">注 册</button>
		        </view>
				<view class="register-agreement">注册即 <navigator url="#">注册则表示同意采房协议</navigator></view>
		     </view>
		</form>
	</view>
</template>
<script>
	export default {
			name: "uni-countdown",
			
			data() {
				return {
					setTime: null,
					h: '00',
					i: '00',
					s: '',
					leftTime: 0,
					text:'获取验证码',
					id:1
				}
			},
			
			methods: {
				onInput(e){
					return RegExp(/^1[34578]\d{11}$/).test(e)
					alert(e);
					//不用v-model绑定表单，直接时间获取值 这是uni-app官方方式
					console.log(e.detail)//{value:"12345678910",cursor:1}
					this.phone = e.detail
				},
				setInterValFunc: function(obj) {
					this.setTime = setInterval(function() {
						obj.countDown(obj);
					}, 1000);
				},
				click:function(){
					this.text = '重新获取'
					this.s = 60
				},
				countDown: function(self) {
					if(self.text == '重新获取'){
						if(self.s > 0){
							self.s -= 1;
						}else if(self.s == 0){
							self.s = 60;
							self.text = '获取验证码'
						}
					}
				},
			    tijiao(e){
			    	console.log(e);//接收用户输入的values
			    	uni.setStorageSync("phone","phone");
			        debugger ;//调节器
					var phone = e.detail.value;
					console.log(e.detail.value);
				    //当注册成功跳转登录页面，，跳出一个弹框显示
				    uni.showModal({
				    	title: '友情提示',
				    	content: '注册成功！请往登录界面',
				    	success:function(res){
				    		// alert(res);
							//点击确定后跳转界面
							if(res.confirm){
								uni.switchTab({
									url:'../login/login'
								})
							}
				    	}
				    });		
			    },
			},
		}
</script>
<style>
	.content{
		height: auto;
		width: 92%;
		padding:0 4%;
	}
	.register-logo{
		margin:150upx auto 30upx;
		font-size:35upx;
		
	}
	.has-mgtb-10{
		display:flex;
		flex-direction: row;
	}
	.userow{
		flex:3;
	}
	.has-mgtb-10{
		height:80upx;
		line-height: 80upx;
		border:1px solid #bbb;
		border-radius: 30upx;
		margin:100ux auto;
		font-size:26upx;
		padding:10upx 20upx ;
		text-justify: inherit;
	}
	.is-input1{
		border:none;
	}
	.is-input1,.is-input2{
		width:100%;
		line-height: 80upx;
		margin:100ux auto;
		font-size:26upx;
		padding:10upx 20upx ;
	}
	.has-mgtb-10,.registerbtn{
		margin-top:30upx;
	}
	.registerbtn>button{
		background-color:#fe5e0f;
		display:block;
		color:#fff;
	}
	.uni-countdown {
			flex:1;
			padding:20upx 0;
			font-size:24upx;
		}
		.uni-countdown-splitor {
			width: auto !important;
			justify-content: center;
			line-height: 44upx;
			padding: 0 5upx;
		}
	 
		.uni-countdown-numbers {
			line-height: 44upx;
			width: auto !important;
			padding: 0 10upx;
			justify-content: center;
			height: 44upx;
			margin: 0 5upx;
			font-size: 25upx;
		}
		.register-agreement{
			font-size:30upx;
			display:flex;
			flex-direction: row;
			padding:30upx 0;
		    justify-content: center;
		}
		.register-agreement navigator{
			/* flex:1; */
			color:#fe5e0f;
		}
</style>