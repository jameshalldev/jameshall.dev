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
            text: '#252525',
            text_light: '#535353',
            background: '#fff',
            gray: '#253540',
            gray_light: '#F4F5F7',
            gray_dark: '#1b1e23',
            accent: '#74c2ff',
            accent_bold: '#56B6FF',
            accent_light: '#99D3FF',

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
