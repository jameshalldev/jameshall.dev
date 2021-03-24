module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
      },
      extend: {
        colors: {
            // Core colours
            text: '#fff5e8',
            background: '#262b35', 
            background_light: '#303644', 
            background_lighter: '#353a46', 
            background_dark: '#20252D', 

            gray: '#c4c5e2',

            accent: '#6F74F1',
            accent_bold: '#6164e0',
            accent_light: '#a3a6fd',

            // General colours
            red: "#FFB3BA",
            orange: "#FFDFB9",
            yellow: "#FFE9C8",
            green: "#BBFFC9",
            blue: '#74c2ff',

        }
      },
      screens: {
        xs: '500px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1400px',
        xxl: '1920px',
      },
      fontSize: {
        'sm': '0.64rem',
        'tiny': '0.8rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.56rem',
        '2xl': '1.95rem',
        '3xl': '2.44rem',
        '4xl': '3.05rem',
        '5xl': '3.81rem',
        '6xl': '4.77rem',
        '7xl': '5.96rem',
      }
    },
    variants: {},
    plugins: [],
  }
