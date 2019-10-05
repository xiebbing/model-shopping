<template>
	<div class="param-info" v-if="Object.keys(goodsParams).length !== 0">

			<table v-for="(table,index) in goodsParams.rule" class="info-size" :key="index">
				<tr v-for="(tr,indey) in table" :key="indey">
					<td v-for="(td,indez) in tr" :key="indez" style="color:#ff0ff0;">{{td}}</td>
				</tr>
			</table>
		
		<table class="info-param">
			<tr v-for="(info,index) in goodsParams.info">
				<td class="info-param-key">{{info.key}}</td>
				<td class="params-value">{{info.value}}</td>
			</tr>
		</table>
		
		<div class="info-img" v-if="goodsParams.info.images">
			<img :src="goodsParams.info.image[0]" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name:'detailGoodsParam',
		props:{
			goodsParams:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.param-info {
		padding:20px 15px;
		font-size:14px;
		border-bottom:5px solid #f2f5f8;
	}
	.param-info table {
		width:100%;
		border-collapse:collapse;
	}
	.param-info table tr {
		height:42px;
	}
	.param-info table tr td {
		border-bottom:1px solid rgba(100,100,100,.2);
	}
	.info-param-key {
		/* 当value的数据量比较大的时候，会挤到key,所以给一个固定的宽度 */
		width:95px;
	}
	.info-param {
		border-top:1px solid rgba(0,0,0,.1);
	}
	.param-value {
		color:#eb4868;
	}
	.info-img img {
		width:100%;
	}
</style>
