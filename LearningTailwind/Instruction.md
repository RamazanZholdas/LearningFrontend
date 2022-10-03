touch index.html
npm init
yarn add -D tailwindcss postcss
npx tailwindcss init
echo "укажите путь до вашего индекс файла (index.html) изменив строку контент до место где лежит индекс файо"
mkdir src
cd src/
touch main.css
echo "@tailwind base;\n@tailwind components;\n@tailwind utilities;" > main.css
cd ../
echo "измените scripts в package.json на build и вставьте команду tailwind build -i src/main.css -o public/styles.css"
yarn build
