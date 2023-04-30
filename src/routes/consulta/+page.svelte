<script>
	import Whatsapp from '../../components/whatsapp.svelte';
</script>

<div class="hero min-h-screen">
	<div class="hero-content flex-col lg:flex-row">
		<div class="container mx-auto py-9 md:py-12 lg:py-24">
			<div class="flex justify-center items-center">
				<div class="py-8">
					<h3 class="text-4xl md:text-5xl xl:text-4xl font-semibold ">
						Como funcionam as consultas.
					</h3>
					<div class="mt-2 flex justify-center py-5">
						<span class="inline-block w-40 h-1 rounded-full bg-green-500" />
						<span class="inline-block w-3 h-1 ml-1 rounded-full bg-green-500" />
						<span class="inline-block w-1 h-1 ml-1 rounded-full bg-green-500" />
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group  ">
				<div
					class="p-10 flex flex-col items-center text-center group  hover:bg-base-300 cursor-pointer"
				>
					<span class="p-5 rounded-full bg-red-500  shadow-lg shadow-red-200"
						><svg
							fill="none"
							stroke="currentColor"
							class="h-10 w-10"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg></span
					>
					<p class="text-xl font-medium mt-3">Seções</p>
					<p class="mt-2 text-sm">Seções com 50 minutos de duração.</p>
				</div>

				<div
					class="p-10 flex flex-col items-center text-center group  hover:bg-base-300 cursor-pointer"
				>
					<span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"
						><svg
							fill="none"
							class="h-10 w-10"
							stroke="currentColor"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
							/>
						</svg></span
					>
					<p class="text-xl font-medium mt-3">Frequência</p>
					<p class="mt-2 text-sm ">Seções semanais, quinzenais ou mensais.</p>
				</div>
				<div
					class="p-10 flex flex-col items-center text-center group  hover:bg-base-300 cursor-pointer"
				>
					<span class="p-5 rounded-full bg-yellow-500  shadow-lg shadow-yellow-200"
						><svg
							fill="none"
							class="h-10 w-10"
							stroke="currentColor"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg></span
					>
					<p class="text-xl font-medium  mt-3">Local</p>
					<p class="mt-2 text-sm ">
						Atendimento em consultório ou Online via (Skype, Whatsapp ou Meet).
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
