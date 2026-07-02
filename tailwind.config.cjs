module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'pblue': 'var(--color-pblue)',
        'pgreen': 'var(--color-pgreen)',
        'ppink': 'var(--color-ppink)',
        'pyellow': 'var(--color-pyellow)',
        'ppurlple': 'var(--color-ppurlple)',
        'pblack': 'var(--color-pblack)',
        'pwhite': 'var(--color-white)'
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card1': 'var(--shadow-card1)',
        'hover': 'var(--shadow-hover)'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
