/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo' : "url('./images/logo_tiffin.png')",
        'profile' : "url('./images/profile_pic_placeholder.png')",
        'background_img' : "url('./images/bg_img_landpg.png')",
      },
      height: {
        '80px' : '80px',
        '975px' : "975px",
      },
      width: {
        '420px' : '420px',
        '1728px' : "1728px",
      },
      spacing: {
        '103px': '103px',
      },
      colors: {
        
      },
    },
  },
  plugins: [],
}