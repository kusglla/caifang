<template>
	<view class="page">
		<view style="position: fixed;top: 0;width: 100%; z-index: 9999;">
			<uni-search-bar @confirm="search" @input="input" cancelButton="none" ></uni-search-bar>
		</view>
		
		<!-- 轮播图 -->
		<swiper :autoplay="true" :interval="3000" :duration="1000" >
			<swiper-item>
				<view class="swiper-item"><image src="http://img1.imgtn.bdimg.com/it/u=2173418683,546044082&fm=26&gp=0.jpg"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://img3.imgtn.bdimg.com/it/u=2038741492,1420838963&fm=26&gp=0.jpg"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://img2.imgtn.bdimg.com/it/u=1014376233,4293797259&fm=26&gp=0.jpg"></image></view>
			</swiper-item>
		</swiper>
		<!-- 轮播图end -->
		
		<!-- 选项卡 -->
		<view class="xxk">
			<view class="xxk-item" v-for="item in 5">
				<view><image src="http://img1.imgtn.bdimg.com/it/u=2173418683,546044082&fm=26&gp=0.jpg" mode="scaleToFill"></image></view>
				<text>新房</text>
			</view>
		</view>
		<!-- 选项卡end -->
		
		<!-- 群聚 -->
		<scroll-view scroll-x="true" style="margin-top: 20rpx;white-space: nowrap; ">
			<view v-for="item in 7" style="width: 240rpx; height: 300rpx;display: inline-block; margin-left: 20rpx; box-sizing: border-box; padding: 20rpx; 4rpx; 4rpx;4rpx; background: #FFFFFF;">
				<view>买房卖房</view>
				<view>一键搞定</view>
				<image src="http://img2.imgtn.bdimg.com/it/u=1014376233,4293797259&fm=26&gp=0.jpg" mode="" style="width: 100%;height: 160rpx;"></image>
			</view>
		</scroll-view>
		<!-- 群聚end -->
		
		<!-- 优选二手房 -->
		<view class="hot-house">
			<view class="title">
				<view>热卖新盘</view>
				<view class="more">查看全部 > </view>
			</view>
			<scroll-view scroll-x="true" class="content">
				<view v-for="item in HouseList" class="content-item">
					<view><image style="height: 200rpx; width: 300rpx; border-radius: 5rpx;" src="http://img1.imgtn.bdimg.com/it/u=2173418683,546044082&fm=26&gp=0.jpg" mode=""></view>
					<view style="font-size: 28rpx;">国风云越花园</view>
					<view style="display: flex; justify-content: space-between; align-items: center;">
						<text class="house-money">89-120m²</text>
						<view>
							<text style="font-size: 24rpx;">250-250</text>
							<text style="font-size: 28rpx;color: #F0AD4E;">万</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 优选二手房end -->
		
		
		<!-- 精选新房 -->
		<view class="hot-house">
			<view class="title">
				<view>精选新房</view>
				<view class="more">查看全部 > </view>
			</view>
			
			<view v-for="item in HouseList" @click="ondetail(item)" class="content" style="display: flex;justify-content: space-between;">
				<view>
					<image style="height: 200rpx; width: 230rpx; border-radius: 10rpx;" :src="item.img" mode=""></image>
				</view>
				<view style="width: 300rpx;">
					<view class="font-lg" style="overflow: hidden;text-overflow: ellipsis;">{{item.name}}</view>
					<view class="font-sm mt-10">3室2厅2卫生 121.86m²</view>
					<view class="font-sm mt-5">{{item.address}}</view>
				</view>
				<view style="display: flex;flex-direction: column;align-items: flex-end;justify-content: center; color: #E98A51;">
					<view class="font-bs" style="margin-top: 10rpx;">{{item.allmoney}}万</view>
					<view class="font-sm" style="margin-top: 10rpx;">{{item.pfmoney}}元/m²</view>
				</view>
			</view>
			<uni-load-more v-if="loading" :loadingType="0"></uni-load-more>
		</view>


	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue';
	import uniLoadMore from '@/components/uLi-load-more/uLi-load-more.vue'
	export default {
		data() {
			return {
				HouseList:[
					{id:'01',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=944933763,1608605451&fm=15&gp=0.jpg',name:'星辉家园',address:'佛山 三水',allmoney:'172',pfmoney:'8214',latitude:39.929,longitude:116.39522},
					{id:'02',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg',name:'星辉南湾',address:'佛山 南海', allmoney:'200',pfmoney:'8214',latitude:39.929,longitude:116.39522},
					{id:'03',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=476433651,2640023555&fm=15&gp=0.jpg',name:'万科精修小洋楼',address:'佛山 禅城', allmoney:'178',pfmoney:'9820',latitude:39.929,longitude:116.39522},
					{id:'04',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2314787491,618093992&fm=15&gp=0.jpg',name:'碧桂园',address:'惠州 惠东', allmoney:'198',pfmoney:'7914',latitude:39.929,longitude:116.39522}
				],
				loading:true
			}
		},
		onLoad() {

		},
		methods: {
			search(){
				
			},
			input(){
				
			},
			ondetail(item){
				uni.navigateTo({
					url:"./detail?item="+ encodeURIComponent(JSON.stringify(item))
				})
			},
			onReachBottom(){
				if(this.HouseList.length<30){
					setTimeout(()=>{
						this.HouseList = [...this.HouseList,...this.HouseList]
					},500)
				}else{
					this.loading = false
					uni.showToast({
						title:'没有更多了',
						icon:'none'
					})
				}
			}
		},
		components:{
			uniSearchBar,
			uniLoadMore
		}
	}
</script>

<style>
 .page{
 	width: 100%;
 	padding-top: 100rpx;
 	box-sizing: border-box;
 	background: #F1F1F1;
 }
 
 .swiper-item{
 	width: 100%!important;
 	height: 100%!important;
 }
 
 .swiper-item image{
 	width: 100%;
 	height: 100%;
 }
 
 .xxk{
 	display: flex;
 	justify-content: space-around;
 	margin-top: 30rpx;
 }
 
 .xxk-item{
 	font-size: 24rpx;
 	text-align: center;
 }
 
 .xxk image{
 	width: 80rpx;
 	height: 80rpx;
 	border-radius: 50%;
 }
 
 
 /* 热卖新房 */
 .hot-house{
 	margin: 40rpx 25rpx 0rpx;
 	padding-top: 40rpx;
 	border-top: 1rpx #C0C0C0 solid;
 }
 
 .hot-house .title{
 	display: flex;
 	justify-content: space-between;
 }
 
 .hot-house .title .more{
 	font-size: 24rpx;
 	color: #C0C0C0;
 }
 
 .hot-house .content{
 	white-space: nowrap;
 	margin: 40rpx 0rpx;
 }
 
 .hot-house .content .content-item{
 	margin-left: 20rpx;
 	display: inline-block;
 	width: 300rpx;
 }
 
 .hot-house .content .content-item:nth-child(1){
 	margin-left: 0rpx;
 }
 
 .house-name{
 	font-size: 24rpx;
 }
 
 .house-money{
 	font-size: 22rpx;
 }
 
 .font-sm{
 	font-size: 24rpx;
 }
 
 .font-bs{
 	font-size: 28rpx;
 }
 
 .font-lg{
 	font-size: 32rpx;
 }
</style>
