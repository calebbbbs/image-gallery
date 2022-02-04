const tailwindcss = require('tailwindcss');

module.expors = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
}