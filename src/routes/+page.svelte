<script>
	import imgUrl from '../assets/profile1.png';
	import imgUrl2 from '../assets/segunda.png';
	import Whatsapp from '../components/whatsapp.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="PSICO INSTITUCIONAL" />
</svelte:head>
<main>
	<!-- HERO 1 -->
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<div class="container mx-auto py-9 md:py-12 lg:py-24">
				<div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
					<div class="lg:w-6/12 flex justify-center items-center">
						<div class="py-5">
							<h3 class="text-4xl md:text-5xl xl:text-4xl font-semibold ">
								Aprenda a lidar com seus problemas de uma forma mais leve.
							</h3>
							<div class="mt-2">
								<span class="inline-block w-40 h-1 rounded-full bg-green-500" />
								<span class="inline-block w-3 h-1 ml-1 rounded-full bg-green-500" />
								<span class="inline-block w-1 h-1 ml-1 rounded-full bg-green-500" />
							</div>
							<p
								class="   md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal font-semibold"
							>
								Olá, eu sou Elizabeth Marques, psícologa clínica. <br />
								Vamos conversar ?
							</p>
							<div class="py-9 mt-5 flex-auto">
								<Whatsapp />
							</div>
						</div>
					</div>
					<div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0 px-7">
						<div class="relative w-full h-full ml-10 lg:justify-center">
							<img src={imgUrl} alt="home pic" width="427" class="rounded-xl hover:scale-105" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- HERO 2 -->
	<!-- <div class="bg-gray-500"> -->
		<div class="hero min-h-screen bg-gradient-to-l from-base-200 to-secondary">
			<div class="hero-content flex-col lg:flex-row ">
				<div class="lg:w-6/12 mt-6 md:mt-8 lg:mt-0 px-7">
					<div class="relative w-full h-full ml-10">
						<img src={imgUrl2} alt="home pic" width="427" class="rounded-xl   hover:scale-105 " />
					</div>
				</div>
				<div class="container mx-auto py-9 md:py-12 lg:py-24">
					<div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
						<div class="lg:w-6/12 flex justify-center items-center">
							<div>
								<h3 class="text-3xl md:text-5xl xl:text-4xl font-semibold ">
									COMO A PSICOTERAPIA PODE TE AJUDAR
								</h3>
								<p
									class="   md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal font-semibold"
								>
									A vida nos traz desafio e necessidade de mudança. Doenças, perdas, conflitos
									familiares, a chegada de um filho, casamento ou dificuldades na carreira exigem
									redirecionamento. <br /><br />
									A psicoterapia promove o autoconhecimento, o desenvolvimento de habilidades de resolução
									de problemas e a capacidade de tomar decisões. Além disso, leva a melhora nas relações
									familiares, conjugais e socials. É o caminho indicado com bases científicas para o
									alívio de sintomas como ansiedade, depressão, fobias, compulsão e outros transtornos
									mentais ou de personalidade que levam ao sofrimento psíquico.
								</p>
								<div class="py-9 mt-5 flex-auto">
									<Whatsapp />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	<!-- </div> -->
</main>
