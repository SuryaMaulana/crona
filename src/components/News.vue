<template>
	<div class="news">
		<div class="row">
			<div class="col-sm-12 col-md-4 col-lg-4" v-for="(article, index) in articles" :key="index">
				<div class="card service">
					<div class="card-body">
						<div class="text-center">
							<h3 class="font-weight-bold">{{ article.title }}</h3>
						</div>
						<img :src="article.image" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'News',
		data() {
			return {
				articles: {}
			}
		},
		mounted() {
			this.getNews()
		},
		methods: {
			getNews: function() {
				// let _that = this;
				axios({
					method: 'get',
					url: 'https://thevirustracker.com/free-api?countryTotal=ID',
				}).then(function(response) {
					// response.data.countrynewsitems.forEach(function(item, index) {
					// 	if(index) {
					// 		break;
					// 	} else {
					// 		_that.articles = item
					// 	}
					// })
					for(let i = 0; i <= 5; i++) {
						console.log(response.data.countrynewsitems[i])
					}
				})
			}
		}
	}
</script>