#!/bin/sh     
git pull origin main
npm install
cd client
npm install
sudo chown -R $USER:$USER /home/ubuntu/mern-app/client/build
chmod -R 777 /home/ubuntu/mern-app/client/build
sudo npm run-script build
cd ..

sudo systemctl restart nginx
sudo pm2 restart all
