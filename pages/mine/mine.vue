<template>
	<view class="content">
		<view class="header" v-bind:class="{'status':isH5Plus}">
			<view class="userinfo">
				<view class="face"><image :src="userinfo.face"></image></view>
				<view class="info">
					<view class="username">
						<navigator url="/static/img/login">
							{{userinfo.username}}
						</navigator>
					</view>
				</view>
			</view>
			<view class="setting"><image src="/static/img/login/shezhi.png"></image></view>
		</view>
		<view class="mine-price">
			<view class="uni-flex-row">
				<text>{{cityName}}</text>
			</view>
		</view>
		<view class="list" v-for="(list,list_i) in severList" :key="list_i">
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(list_i,li_i)" v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover" :key="li.name" >
				<view class="icon"><image :src="'/static/img/login/'+li.icon"></image></view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="/static/img/login/to.png"></image>
			</view>
		</view>
		<navigator url="../login/login">
			<button class="mine-btn" type="warn" size="default">{{loginBtn}}</button>
		</navigator>
		
	</view>
</template>
<script>
	export default {
		data() {
			// cityName:"佛山实时房价";
			return {
				userinfo:{},
				severList:[
					[   {name:'佛山实时房价',icon:'map.png'},
						{name:'我的关注',icon:'heart.png'},
						{name:'浏览历史',icon:'time.png'},
						{name:'我的优惠卷',icon:'money.png'},
						{name:'我的订阅',icon:'add.png'}
					]
				],
				loginBtn:"登录领返现"
			};
		},
		onLoad() {
			//加载
			this.init();
		},
		methods: {
			init() {
				//用户信息
				this.userinfo={
					face:'/static/img/login/face.jpeg',
					username:"点击注册/登录"
				}		
			},
			//用户点击订单类型
			toOrderType(index){
				uni.showToast({title: this.orderTypeLise[index].name});
			},
			//用户点击列表项
			toPage(list_i,li_i){
				uni.showToast({title: this.severList[list_i][li_i].name});
			}
		}
	}
</script>

<style lang="scss">
	.header{
		&.status{padding-top:var(--status-bar-height);}
		background-color:#CCCCCC;width:92%;height:30vw;padding:0 4%;display:flex;align-items:center;
		.userinfo{
			width:90%;display:flex;
			.face{flex-shrink:0;width:15vw;height:15vw;
				image{width:100%;height:100%;border-radius:100%}
			}
			.info{
				display:flex;flex-flow:wrap;padding-left:30upx;
				.username{width:100%;color:#fff;font-size:40upx}
				.integral{display:flex;align-items:center;padding:0 20upx;height:40upx;color:#fff;
				background-color:rgba(0,0,0,0.1);border-radius:20upx;font-size:24upx}
			}
		}
		.setting{
			flex-shrink:0;width:6vw;height:6vw;
			image{width:100%;height:100%}
		}
	}
	.hover{background-color:#eee}
	
	.mine-btn{
	     font-size:28upx;
		 color:#fff;
		 width:80%;
		 margin:100upx auto;
		 border-radius: 50upx;
	}
	.info>.username>navigator{
		font-size:25upx;
		padding:5upx 10upx;
		margin-top:40upx;
	}
	.info>.username>navigator:hover{
		background-color:#ccc;
	}
	.mine-price{
		background-image: url('/static/img/login/shezhi.png');
		height:100upx;
	}
	.list{
		width:95%;margin:0 2.5%;border-bottom:solid 26upx #f1f1f1;
		font-size:36upx;
		.li{
			width:92%;height:100upx;padding:0 4%;border-bottom:solid 1upx #e7e7e7;display:flex;align-items:center;
		&.noborder{border-bottom:0}
			.icon{
				flex-shrink:0;width:30upx;height:30upx;
				image{width:40upx;height:40upx}
			}
			.text{padding-left:35upx;width:100%;color:#666;font-size:25upx;}
			.to{flex-shrink:0;width:30upx;height:30upx;font-size:25upx;}
		}
	}
// @import "./mine.css"
</style>

