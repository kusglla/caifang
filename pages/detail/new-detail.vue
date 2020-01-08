<template>
	<view class="content">
		<view class="title">{{title}}</view>
		<!-- 新闻的内容 -->
		<view class="art-content">
			<!-- :nodes很关键 ，支持字符串html类型用这个类型 -->
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	 export default{
		 data(){
			return {
				title:'',
				strings:''
			} 
		 },
		 onLoad:function(e){
		 	//接收new页面中传输的id值
			// console.log(e);
			//ure 简写
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' +e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					//输出新闻的标题
					this.title = res.data.title;
					//输出新闻内容
					this.strings = res.data.content;
				},
				fail: () => {},
				complete: () => {}
			});
		 }
	 }
</script>
   
<style>
	.content{
		padding:10upx 2%;
		width:96%;
		flex-wrap: wrap;
	}
	.title{
		line-heiht:2em;
		font-weight: 700;
		font-size:38upx;
	}
</style>
