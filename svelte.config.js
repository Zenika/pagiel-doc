import adapter from '@sveltejs/adapter-static';
import {markdown} from "svelte-preprocess-markdown"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: markdown(),
	extensions: ['.svelte','.md'],
	kit: {
		adapter: adapter({fallback: "200.html"})
	}
};

export default config;
