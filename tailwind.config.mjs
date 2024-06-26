/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(15rem, 1fr))',
				'sideBar': '15rem, 1fr',
      },
		},
	},
	plugins: [],
}
