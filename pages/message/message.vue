<template>
	<view class="p-25" style="box-sizing: border-box;">
		<view style="display: flex;" class="pb-20 pt-20" v-for="item in HouseList">
			<view style="height: 120rpx; width: 130rpx;">
				<image :src="item.img" mode=""  style="height: 100rpx;width: 100rpx; border-radius: 50%;"></image>
			</view>
			<view style="display: flex; justify-content: space-between; border-bottom: 1px solid #C8C7CC; width: 570rpx;">
				<view>
					<view class="f-28 mt-5" style="font-weight: 600;">{{item.name}}</view>
					<view class="f-24 mt-10">{{item.message}}</view>
				</view>
				<view class="f-22">
					12月12日 12:32
				</view>
			</view>
		</view>
		<uni-load-more v-if="loading" :loadingType="0"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uLi-load-more/uLi-load-more.vue'
	export default {
		data() {
			return {
				HouseList:[
					{id:'01',name:"系统通知",img:'http://img2.imgtn.bdimg.com/it/u=1683274290,324285416&fm=26&gp=0.jpg',message:'很高兴为你服务'},
					{id:'02',name:"张经搞",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg', message:'你好,请问有买房的想法吗?'},
					{id:'03',name:"黄经理",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=476433651,2640023555&fm=15&gp=0.jpg', message:'我们这推出新特价9980,你看你需要吗'},
					{id:'04',name:"张经理",img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2314787491,618093992&fm=15&gp=0.jpg', message:'我这边给你咨询一下'},
					{id:'02',name:"周小莉",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg', message:'好的,那麻烦你了'},
					{id:'01',name:"陈乐乐",img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=944933763,1608605451&fm=15&gp=0.jpg',message:'很高兴为你服务'},
					{id:'02',name:"张郭若",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg',message:'你好,请问有买房的想法吗?'},
					{id:'03',name:"郑小明",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=476433651,2640023555&fm=15&gp=0.jpg',message:'我们这推出新特价9980,你看你需要吗'},
					{id:'04',name:"刘芳",img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2314787491,618093992&fm=15&gp=0.jpg',message:'我这边给你咨询一下'},
					{id:'04',name:"京经理",img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2314787491,618093992&fm=15&gp=0.jpg',message:'我这边给你咨询一下'},
					{id:'02',name:"供商理",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg',message:'好的,那麻烦你了'},
					{id:'01',name:"张该理",img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=944933763,1608605451&fm=15&gp=0.jpg',message:'很高兴为你服务'},
					{id:'02',name:"张欧冠",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg',message:'你好,请问有买房的想法吗?'},
					{id:'03',name:"斯平",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=476433651,2640023555&fm=15&gp=0.jpg',message:'我们这推出新特价9980,你看你需要吗'},
					{id:'02',name:"供理",img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=144259019,1194700251&fm=15&gp=0.jpg',message:'好的,那麻烦你了'}
				],
				loading:true,
				ReachBottomCount:1
			}
		},
		methods: {
			onReachBottom(){
				setTimeout(()=>{
					this.ReachBottomCount+=1;
					console.log(this.ReachBottomCount)
					if(this.ReachBottomCount<5){
						this.HouseList = [...this.HouseList,...this.HouseList.slice(1,8)]
					}else{
						uni.showToast({
							title:"没有更多了",
							icon:"none"
						})
						this.loading=false
					}
				},300)
			}
		},
		components:{
			uniLoadMore
		}
	}
</script>

<style>

</style>
