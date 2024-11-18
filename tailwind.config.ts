import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dyslexia: ['var(--font-dyslexia)'],
        unbounded: ['var(--font-unbounded)'],
        ibmmono: ['var(--font-ibm-mono)'],
        lexend: ['var(--font-lexend)']
      },
      spacing: {
        'full-minus-1': 'calc(100% - 0.25rem)',
      },
      colors: {
        'sam-light': "rgba(var(--sam-light-def-color))",
        'sam-dark': "rgba(var(--sam-dark-def-color))",
        background: "rgba(var(--sam-bg-color))",
        foreground: "rgba(var(--sam-fg-color))",
        surface: "rgba(var(--sam-surface-color))",
        primary: "rgba(var(--sam-primary-color))",
        secondary: "rgba(var(--sam-secondary-color))",
        border: "rgba(var(--sam-border-color))",
        divider: "rgba(var(--sam-divider-color))",
        error: "rgba(var(--sam-error-color))",
        'sam-bg-color': "rgba(var(--sam-bg-color))",
        'sam-fg-color': "rgba(var(--sam-fg-color))",
        'sam-txt-title-color': "rgba(var(--sam-txt-title-color))",
        'sam-txt-content-color': "rgba(var(--sam-txt-content-color))",
        'sam-txt-pybtn-color': "rgba(var(--sam-txt-pybtn-color))",
        'sam-txt-sybtn-color': "rgba(var(--sam-txt-sybtn-color))",
        'sam-error-color': "rgba(var(--sam-error-color))",
        'sam-primary-color': "rgba(var(--sam-primary-color))",
        'sam-bro-primary-color': "rgba(var(--sam-bro-primary-color))",
        'sam-secondary-color': "rgba(var(--sam-secondary-color))",
        'sam-border-color': "rgba(var(--sam-border-color))",
        'sam-divider-color': "rgba(var(--sam-divider-color))",
        'sam-orange-color': "rgba(var(--sam-orange-color))",
        rainbow: {
          red: '#FF0000',
          orange: '#FFA500',
          yellow: '#FFFF00',
          green: '#008000',
          blue: '#0000FF',
          indigo: '#4B0082',
          violet: '#9400D3',
        },
      },
      borderRadius: {
        'sam-border-btn-radius': 'var(--sam-border-btn-radius)',
        'sam-border-panels-radius': 'var(--sam-border-panels-radius)',
      },
      backgroundSize: {
        '105p': '105%',
      },
    },
  },
  plugins: [],
};
export default config;
