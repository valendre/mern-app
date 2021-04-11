#!/bin/sh     
git pull origin main
npm install
cd client
npm install
npm run-script build
cd ..
sudo systemctl restart nginx
sudo pm2 restart all
