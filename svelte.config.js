import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: false
		}),
		 inlineStyleThreshold: Infinity
	},
	// seo: {
	// 	title: 'Cafe com Codigo',
	// 	description:
	// 		'Empresa que cria sites para profissionais da saúde, criamos landingpage, site institucional, site completo com blog, robôs para atendimento whatsapp',
	// 	keywords: 'criar site, site institucional, landingpage, blog, robô whatsapp'
	// },
	preprocess: vitePreprocess()
};

export default config;
