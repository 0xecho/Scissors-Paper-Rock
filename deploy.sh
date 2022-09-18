git branch -D gh-pages
git checkout -b gh-pages

npm run build

git add -f dist
git commit -m "Deploy to GitHub Pages"
git push -f origin gh-pages
git checkout -
