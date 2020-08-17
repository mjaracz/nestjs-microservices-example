# install dependencies for each project
for dir in ./*/; do sh -c "cd ${dir} && yarn install"; done
docker-compose up