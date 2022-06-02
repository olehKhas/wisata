module.exports = {
    darkMode: 'class',
    purge: {
      content: ['./src/**/*.{js,ts,jsx,tsx}'],
    },
      theme: {
        extend: {
          fontFamily:{
            spartan: ['Spartan'],
          },
          animation: {
            updown: 'updown 3s ease-in-out infinite',
            roket: 'roket roket1 roket2 roket3 10s infinite',
            roket1: 'roket1 10s infinite',
            roket2: 'roket2 10s infinite',
            roket3: 'roket3 10s infinite',
          },
    
          keyframes: {
            updown: {
              '0%, 100%': { transform: 'translateY(-100%)' },
              '50%': { transform: 'translateY(100%)' },
            },
            roket:{
              '0%': {transform: 'perspective(600px)'},
              '100%': {transform: 'perspective(600px)'},
            },
            roket1:{
              '0%': {transform: 'translateY(0)'},
              '100%': {transform: 'translateY(-400px)'},
            },
            roket2:{
              '0%': {transform: 'translateX(0)'},
              '100%': {transform: 'translateX(300px)'},
            },
            roket3:{
              '0%': {transform: 'rotate(0)'},
              '100%': {transform: 'rotate(0)'},
            },
          }
        },
      },
      plugins: [],
    }