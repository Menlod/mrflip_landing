import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const indexHtmlPath = join(distPath, 'index.html');
const notFoundHtmlPath = join(distPath, '404.html');

console.log('Dist path:', distPath);
console.log('Index HTML path:', indexHtmlPath);
console.log('404 HTML path:', notFoundHtmlPath);

// Проверяем, существует ли dist директория
if (!existsSync(distPath)) {
    console.log('Dist directory does not exist');
    process.exit(1);
}

// Проверяем, существует ли index.html
if (!existsSync(indexHtmlPath)) {
    console.log('index.html does not exist in dist folder');
    process.exit(1);
}

console.log('index.html exists, copying to 404.html...');

// Копируем index.html в 404.html
copyFileSync(indexHtmlPath, notFoundHtmlPath);

console.log('404.html created successfully!');

// Проверяем, что файл создан
if (existsSync(notFoundHtmlPath)) {
    console.log('Verification: 404.html exists');
} else {
    console.log('Error: 404.html was not created');
}