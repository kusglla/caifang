<template>
	<!---搜索框-->
	<!-- <view class="new-input" >
		<input  type="search" class="uni-searchbar" placeholder="请输入搜索的内容" focus maxlength="11">
	</view> -->
	<!-- 新房列表 -->
 <view class="content">
	 <view class="uni-list">
	 	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index"
		 @tap="openNew" :data-newsid="item.post_id"><!--传递参数获取id在桌面-->
	 		<view class="uni-media-list">
	 			<image class="uni-media-list-logo" :src="item.author_avatar"></image>
	 			<view class="uni-media-list-body">
	 				<view class="uni-media-list-text-top">{{item.title}}</view>
	 				<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
	 			</view>
	 		</view>
	 	</view>
	 </view>
 </view>
</template>
<script>
	export default{
		data(){
			return {
				news:[]
			}
		},
		//页面加载生命周期
		onLoad:function(){
			uni.showLoading({
				title:"加载中...."
			});
			uni.request({//发送页面请求
			   url:'https://unidemo.dcloud.net.cn/api/news',//后台端口
			   method:'GET',//接收后台传来的信息
			   data:{},
			   success:res =>{
				   console.log(res);
				   //当前数组放在当前页面
				   this.news = res.data;//把数据放在页面上
				   uni.hideLoading();//加载完毕隐藏
			   }
				
			})
		},
		methods:{
			openNew(e){
				// console.log(e)
				var newsid = e.currentTarget.dataset.newsid;
				// console.log(newsid)
				uni.navigateTo({
					url: '../detail/new-detail?newsid='+newsid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			
			// 下拉刷新
			onReachBottom(){
				this.ReachBottomCount+=1;
				if(this.ReachBottomCount<5){
					setTimeout(()=>{
						// this.HouseList = [...this.HouseList,...this.HouseList.slice(1,5)]
						this.news = [...this.news,...this.news.slice(1,5)]
						console.log(data)
					},500)
				}else{
					this.loading = false
					uni.showToast({
						title:'没有更多了',
						icon:'none'
					})
				}
			}
		}
	}
</script>
<style>
	.new-input{
		width:90%;
		margin:0 5%;
		height:60upx;
		line-height:60upx;
		justify-content: center;
		border:2upx solid #ccc;
		font-size:25upx;
		border-radius: 15upx;
		
	}
	.uni-searchbar{
		margin-left:5%;
	}
	/* 新房列表 */
	.uni-list{
		flex-wrap :nowrap;
		justify-content: space-between;
	}
	.uni-list-cell{
		height:auto;
		border-bottom:2upx solid #ccc ;
		white-space:pre-wrap;

	}
	.uni-media-list{
		display:flex;
		flex-direction: row;
		margin: 25upx;
	}
	.uni-media-list image{
		height: 100px;
		width: 115px;
		border-radius: 5px;
		display: inline-block;
		overflow: hidden;

	}
	.uni-media-list-body{
		height:auto;
		width:400upx;
		margin:20upx 20upx 20upx;
		font-size:28upx;
		justify-content: center;
	}
	.uni-media-list-text-top{
		line-height:50upx;
		flex-wrap:wrap;
	}
</style>