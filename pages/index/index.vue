<template>
	<view class="page">
		<!-- 搜索栏 -->
		<view style="position: fixed;top: 0;width: 100%; z-index: 9999;">
			<uni-search-bar @confirm="search" @input="input" cancelButton="none" ></uni-search-bar>
		</view>
		<!-- 搜索栏end -->
		
		
		<!-- 轮播图 -->
		<swiper :autoplay="true" :interval="3000" :duration="1000" >
			<swiper-item>
				<view class="swiper-item"><image src="http://img5.imgtn.bdimg.com/it/u=1003927797,3379999590&fm=26&gp=0.jpg"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://img3.imgtn.bdimg.com/it/u=1041281687,2404179784&fm=26&gp=0.jpg"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://img1.imgtn.bdimg.com/it/u=3561208366,4229610799&fm=26&gp=0.jpg"></image></view>
			</swiper-item>
		</swiper>
		<!-- 轮播图end -->
		<!-- 选项卡 -->
		<view class="xxk">
			<view v-for="(item,index) in itemList" :key="index" class="in-row" hover-class="hover" @click="goDetail(index)">
				<view class="xxk-item" v-if="show" @tap="itemList" >
					<image :src="'../../static/img/index/'+item.icon" mode="true"></image>
				</view>
				<view class="xxk-text" v-if="show" @tap="itemList">
					{{item.name}}
				</view>
			</view>
		</view>
		<!-- 选项卡end -->
		
		<!-- 群聚 -->
		<scroll-view scroll-x="true" class="mt-20" style="white-space: nowrap; ">
			<view v-for="item in HouseList" style="width: 240rpx; height: 300rpx;display: inline-block; margin-left: 20rpx; 
			box-sizing: border-box; padding: 20rpx; 4rpx; 4rpx;4rpx; background: #FFFFFF;">
				<view style="font-size:26upx;line-height:40upx;">
					<view>买房卖房</view>
					<view>一键搞定1</view>
				</view>
				<image :src="item.img" mode="" style="width: 100%;height: 160rpx;"></image>
			</view>
		</scroll-view>
		<!-- 群聚end -->
		
		<!-- 热卖新盘 -->
		<view class="hot-house">
			<view class="title">
				<view>热卖新盘</view>
				<view class="more" @click="onHouseList">查看全部 > </view>
			</view>
			<scroll-view scroll-x="true" class="content">
				<view v-for="item in HouseList" class="content-item">
					<view><image style="height: 200rpx; width: 300rpx; border-radius: 5rpx;" :src="item.img" mode=""></view>
					<view class="f-28">{{item.name}}</view>
					<view style="display: flex; justify-content: space-between; align-items: center;">
						<text class="house-money">89-120m²</text>
						<view>
							<text class="f-24">250-250</text>
							<text class="f-28" style="color: #F0AD4E;">万</text>
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
				<view class="more" @click="onHouseList">查看全部 > </view>
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
					{id:'04',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2314787491,618093992&fm=15&gp=0.jpg',name:'碧桂园',address:'惠州 惠东', allmoney:'198',pfmoney:'7914',latitude:39.929,longitude:116.39522},
					{id:'02',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg',name:'星辉南',address:'佛山 南海', allmoney:'220',pfmoney:'8214',latitude:39.921,longitude:116.39522}
				],
				loading:true,
				ReachBottomCount:0,
				//选项卡
				itemList:[
					{icon:'new.png',name:'新房'},
					{icon:'quarters.png',name:'查成交'},
					{icon:'xiao.png',name:'找小区'},
					{icon:'house-price.png',name:'查房价'},
					{icon:'agent.png',name:'找经纪人'}
					
				],
				show:true
			}
		},
		onLoad() {

		},
		methods: {
			search(){
				
			},
			input(){
				
			},
			//选项部分
			goDetail(e){
				let that = this;
				console.log(e);
				if(e==0){
					that.new();
				}
				if(e ==1){
					that.agent();
				}
				if(e ==2){
					that.xiao();
				}
				if(e ==3){
					that.housePrice();
				}
				if(e ==4){
					that.quarters();
				}
			},
			new(){
				uni.navigateTo({
					url: '../tabs/new',
					success: res => {}
				});
			},
			agent(){
				uni.navigateTo({
					url: '../tabs/agent',
					success: res => {}
				});
			},
			xiao(){
				uni.navigateTo({
					url: '../tabs/xiao',
					success: res => {}
				});
			},
			housePrice(){
				uni.navigateTo({
					url: '../tabs/housePrice',
					success: res => {}
				});
			},
			quarters(){
				uni.navigateTo({
					url: '../tabs/quarters',
					success: res => {}
				});
			},
			
			//详情页
			ondetail(item){
				uni.navigateTo({
					url:"./detail?item="+ encodeURIComponent(JSON.stringify(item))
				})
			},
			
			// 房屋列表
			onHouseList(){
				uni.navigateTo({
					url:'./houseList'
				});
			},
			
			// 下拉刷新
			onReachBottom(){
				this.ReachBottomCount+=1;
				if(this.ReachBottomCount<5){
					setTimeout(()=>{
						this.HouseList = [...this.HouseList,...this.HouseList.slice(1,5)]
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
 
 swiper{
	height: 380rpx;
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
 
 .xxk-text{
	 font-size:24upx;
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
