<template>
	<div class="main">
		<div class="jumbotron">
			<div class="container"><br><br>
				<h1 class="m-0 text-dark text-center">
					Live Update Covid-19 Indonesia
				</h1>
				<h5 class="lead m-0 text-center">
					<small class="tgl_update">Update per Hari-tgl-tahun jam-menit-detik </small>
					<small>Sumber: <a href="#"></a></small>
				</h5>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
				<div class="card bg-danger img-card box-primary-shadow">
					<div class="card-body">
						<div class="d-flex">
							<div class="text-white">
								<p class="text-white mb-0">TOTAL POSITIF</p>
								<h2 class="mb-0 number-font">{{ positif }}</h2>
								<p class="text-white mb-0">ORANG</p>
							</div>
							<div class="ml-auto"> <img style="opacity: 0.4" src="/images/icons/mood-neutral-outline.svg" alt="Positif" width="50" height="50"> </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
				<div class="card bg-dark img-card box-primary-shadow">
					<div class="card-body">
						<div class="d-flex">
							<div class="text-white">
								<p class="text-white mb-0">TOTAL MENINGGAL</p>
								<h2 class="mb-0 number-font">{{ meninggal }}</h2>
								<p class="text-white mb-0">ORANG</p>
							</div>
							<div class="ml-auto"> <img style="opacity: 0.4" src="/images/icons/mood-sad-outline.svg" alt="Meninggal" width="50" height="50"> </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
				<div class="card bg-success img-card box-primary-shadow">
					<div class="card-body">
						<div class="d-flex">
							<div class="text-white">
								<p class="text-white mb-0">TOTAL SEMBUH</p>
								<h2 class="mb-0 number-font">{{ sembuh }}</h2>
								<p class="text-white mb-0">ORANG</p>
							</div>
							<div class="ml-auto"> <img style="opacity: 0.4" src="/images/icons/mood-happy-outline.svg" alt="Sembuh" width="50" height="50"> </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
				<div class="card  bg-purple img-card box-success-shadow">
					<div class="card-body">
						<div class="d-flex">
							<div class="text-white">
								<h2 class="mb-0 number-font">INDONESIA</h2>
								<p class="text-white mb-0"><b> {{ indonesia.positif }} </b> POSITIF, <b>{{ indonesia.sembuh }}</b> SEMBUH,<br> <b>{{ indonesia.meninggal }}</b> MENINGGAL</p>
							</div>
							
							<div class="ml-auto"> <img style="opacity: 0.6" src="/images/icons/indonesia.png" alt="Positif" width="50" height="50"> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="jumbotron">
			<div class="container"><br><br>
				<h1 class="m-0 text-dark text-center">
					Cara Pencegahan Virus Corona (COVID-19)
				</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 col-xl-6">
				<div class="card service bg-blue">
					<div class="card-body">
						<div class="text-center">
							<img src="/data/images/icon-corona-cases/handwashing.svg" alt="Cuci Tangan" width="100" height="100">
						</div><br><br>
						<div class="item-box text-align">
							<h1 class="card-title text-white">Cuci Tangan Sesering Mungkin</h1>
							<h5 class="card-text text-white">
								Cuci tangan secara teratur dan menyeluruh dengan sabun dan air atau cairan berbasis alkohol. Kenapa? Mencuci tangan dengan sabun dan air atau menggunakan cairan berbasis alkohol dapat membunuh virus yang mungkin ada di tangan.<br><br><br>
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-xl-6">
				<div class="card service bg-blue">
					<div class="card-body">
						<div class="text-center">
							<img src="/data/images/icon-corona-cases/handsanitizer.svg" alt="Hand Sanitizer" width="100" height="100">
						</div><br><br>
						<div class="item-box text-align">
							<h1 class="card-title  text-black">Jaga jarak</h1>
              <h5 class="card-text  text-white">
								Jaga jarak setidaknya 1 meter antara Anda dengan siapa saja yang batuk atau bersin. Kenapa? Ketika seseorang bersin atau batuk, mereka menyemprotkan tetesan cairan kecil yang mungkin mengandung virus dari hidung atau mulut. Jika Anda terlalu dekat dengan orang yang bersin atau batuk, Anda bisa menghirup tetesan cairan itu, termasuk virus penyebab Covid-19.
              </h5>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-xl-6">
				<div class="card service bg-blue">
					<div class="card-body">
						<div class="text-center">
							<img src="/data/images/icon-corona-cases/covermouth.svg" alt="Hindari Menyentuh Mulut, Mata, dan Hidung" width="100" height="100">
						</div><br><br>
						<div class="item-box text-align">
							<h1 class="card-title text-black">Lakukan kebersihan pernapasan</h1>
              <h5 class="card-text text-white">
								Tangan menyentuh banyak permukaan, dan di sana kemungkinan juga ada virus. Jika terkontaminasi, tangan dapat memindahkan virus ke mata, hidung, atau mulut. Dari sana, virus masuk ke tubuh dan bisa membuat sakit. <br><br>
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-xl-6">
				<div class="card service bg-blue">
					<div class="card-body">
						<div class="text-center">
							<img src="/data/images/icon-corona-cases/highfever.svg" alt="Periksakan Diri" width="100" height="100">
						</div><br>
						<div class="item-box text-align">
							<h1 class="card-title  text-black">Jika mengalami demam, batuk, dan kesulitan bernapas, cari perawatan medis sejak dini</h1>
              <h5 class="card-text  text-white">
								Jika Anda merasa tidak sehat, tetaplah di rumah. Jika Anda mengalami demam, batuk, atau sulit bernapas, segera cari bantuan medis. Jangan lupa ikuti arahan otoritas kesehatan setempat. Untuk diketahui, otoritas nasional dan lokal selalu memiliki informasi terbaru tentang situasi di daerah Anda.
              </h5>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-xl-6">
				<div class="card service bg-blue">
					<div class="card-body">
						<div class="text-center"><img style="opacity: 0.7" src="/data/images/icon-corona-cases/hospital14day.svg" alt="Update Informasi Terpercaya" width="100" height="100"> </div><br><br>
						<div class="item-box text-align">
							<h1 class="card-title  text-black">Update informasi dan ikuti saran tenaga medis</h1>
              <h5 class="card-text  text-white">
								Selalu update informasi terkini terkait perkembangan Covid-19. Selain itu, ikuti saran yang diberikan oleh penyedia layanan kesehatan, Kemenkes, dan kesehatan lokal untuk melindungi diri sendiri dan orang lain.
              </h5>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-xl-6">
				<div class="card service bg-blue">
					<div class="card-body">
						<div class="text-center"><img style="opacity: 0.7" src="/data/images/icon-corona-cases/stopspeakinginpublic.svg" alt="Stop Berita Bohong" width="100" height="100"> </div><br><br>
						<div class="item-box text-align">
							<h1 class="card-title  text-black">Stop Berita Bohong</h1>
              <h5 class="card-text  text-white">
								Jangan bagikan berita dari sumber yang tidak terpercaya, hentikan membuat kepanikan, mulai dari diri sendiri dan terus update berita dari sumber yang terpercaya, jika menemui berita dari sumber yang tidak terpercaya. Hentikan, dan Laporkan.
              </h5>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Main',
		data() {
			return {
				positif: '',
				sembuh: '',
				meninggal: '',
				indonesia: {
					meninggal: '',
					positif: '',
					sembuh: ''
				}
			}
		},
		mounted() {
			this.load();
		},
		methods: {
			load() {
				// Get global positive
				axios({
					method: 'get',
					url: 'https://api.kawalcorona.com/positif/'
				}).then(response => {
					this.positif = response.data.value
				})

				// Get global recovered
				axios({
					method: 'get',
					url: 'https://api.kawalcorona.com/sembuh/'
				}).then(response => {
					this.sembuh = response.data.value
				})

				// Get global deaths
				axios({
					method: 'get',
					url: 'https://api.kawalcorona.com/meninggal/'
				}).then(response => {
					this.meninggal = response.data.value
				})

				// Get indonesian data covid-19
				axios({
					method: 'get',
					url: 'https://api.kawalcorona.com/'
				}).then(response => {
					for(let i = 0; i < response.data.length; i++) {
						if(response.data[i].attributes.Country_Region === 'Indonesia') {
							this.indonesia.meninggal = response.data[i].attributes.Deaths
							this.indonesia.positif = response.data[i].attributes.Confirmed
							this.indonesia.sembuh = response.data[i].attributes.Recovered
						}
					}
				})
			}
		}
	}
</script>