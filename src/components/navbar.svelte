
<script>
	import { page } from '$app/stores';
	import Whatsapp from './whatsapp.svelte';
</script>

<div class="navbar fixed bg-base-100 z-40">
	<div class="navbar-start">
		<!-- Hamburguer menu -->
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/sobre' ? 'page' : undefined}>
					<a href="/sobre">Sobre</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/servicos') ? 'page' : undefined}>
					<a href="/servicos">Serviços</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/contato') ? 'page' : undefined}>
					<a href="/contato">Contato</a>
				</li>
			</ul>
		</div>
		<a href="/">
			<!-- <img class="mask mask-circle" src={imgUrl} width="50" /> -->
			<p>teste</p>
		</a>
	</div>

	<div class="navbar-center hidden lg:flex ">
		<ul class="menu menu-horizontal p-0">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/sobre' ? 'page' : undefined}>
				<a href="/sobre">Sobre</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/servicos') ? 'page' : undefined}>
				<a href="/servicos">Serviços</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contato') ? 'page' : undefined}>
				<a href="/contato">Contato</a>
			</li>
		</ul>
		<div class="pl-10">
			<Whatsapp/>

		</div>
	</div>

	<!-- <div class="navbar-end" >
	

	</div> -->
	
</div>
