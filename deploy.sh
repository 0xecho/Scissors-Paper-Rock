git branch -D gh-pages
git checkout -b gh-pages

npm run build

rm -rf ./
cp -r dist/* ./
rm -rf dist

git add .
git commit -m "Deploy"
git push origin gh-pages --force

git checkout -