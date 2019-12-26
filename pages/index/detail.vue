<template>
	<view class="">
		<!-- bannar开始 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item"><image :src="detail.img" mode=""></image></view>
			</swiper-item>
		</swiper>
		<!-- bannar结束 -->
		
		<!-- 简介信息 -->
		<view style="padding: 50rpx 0rpx; border-bottom: 1rpx solid #A8A8A8; margin: 0rpx 25rpx; box-sizing: border-box;">
			<view>{{detail.name}}</view>
			<view style="margin-top: 15rpx;">{{detail.allmoney}}万    {{detail.pfmoney}}元/m²</view>
		</view>
		<!-- 简介信息end -->
		
		<!-- 地图开始 -->
		<view class="ml-25 mr-25" style="box-sizing: border-box;">
			<map :latitude="39.929" :longitude="116.39522" :markers="markers" @tap="mapTap"></map>
		</view>
		<!-- 地图结束 -->
	</view>
</template>

<script>
	export default {
		data(){
			return {
				detail:{},
				markers:[
					{latitude:39.929,longitude:116.39522,iconPath:'/static/img/position.jpg'}
				]
			}
		},
		methods:{
			mapTap(){
				console.log('点击地图了')
				uni.openLocation({
					latitude:this.detail.latitude,
					longitude:this.detail.longitude,
					name:this.detail.name,
					address:this.detail.address,
					fail(res) {
						console.log(res)
					}
				})
			}
		},
		onLoad(option) {
			this.detail = JSON.parse(decodeURIComponent(option.item));
			console.log(this.detail)
		}
	}
</script>

<style>
	swiper{
		height: 400rpx!important;
	}
	.swiper-item{
		width: 100%!important;
		height: 100%!important;
	}
	
	.swiper-item image{
		width: 100%;
		height: 100%;
	}
	
	map{
		width: 100%!important;
		height: 360rpx;
	}
</style>
