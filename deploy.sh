if [ $# -eq 0 ]
  then
    echo "Please pass in x500"
    exit
fi
echo "Building for $1"
npm run build
chmod -R 775 build
scp -r build/* $1@web-mgmt01.oit.umn.edu://www/premium/ahc/vhlab/www.vhlab1.umn.edu/htdocs