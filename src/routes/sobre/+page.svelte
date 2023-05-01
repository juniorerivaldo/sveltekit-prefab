<script>
	 import imgUrl from '../../assets/profile2.png';
	import Whatsapp from '../../components/whatsapp.svelte';
</script>
<svelte:head>
	<title>Sobre</title>
	<meta name="Sobre" content="Pagina sobre" />
</svelte:head>
<main>
	<div class="hero min-h-screen bg-gradient-to-r from-base-200 to-secondary">
			<div class="hero-content flex-col lg:flex-row ">
				<div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0 px-7">
					<div >
						<img src={imgUrl} alt="home pic" width="600" class="rounded-xl   hover:scale-105 " />
					</div>
				</div>
				<div class="container mx-auto py-9 md:py-12 lg:py-24">
					<div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
						<div class="lg:w-10/12 flex justify-center items-center">
							<div >
								<h3 class="text-3xl md:text-5xl xl:text-4xl font-semibold ">
									SOBRE MIM
								</h3>
								<p
									class="   md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal font-semibold"
								>
									Presta serviços de Psicologia clínica e Psicoterapia, com atendimento infantil, adolescente, adulto, idoso e casal,
									definindo o método de intervenção psicológico a ser utilizado, visando possibilitar melhor qualidade de vida e saúde mental
									aos pacientes, trabalhando com acolhimento, ética, sigilo e dedicação. <br /><br />
									As suas áreas de intervenção incidem, particularmente, na Psicologia clínica e da saúde e na Psicoterapia com crianças, adolescentes,
									 adultos, idosos e casais. As suas áreas incluem ainda a psicoterapia breve, terapia cognitivo-comportamental (TCC), avaliação psicológica, acompanhamento
									 terapêutico (AT), aconselhamento psicológico, tratamento da ansiedade, psicodiagnóstico, orientação vocacional e acompanhamento psicopedagógico.
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
</main>
