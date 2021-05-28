# install dependencies for each service
for dir in ./*/; do sh -c "cd ${dir} && yarn install"; done
# start mongoDB and NATS service queue
docker-compose up -d
# launch all service
for dir in ./*/; do sh -c "cd ${dir} && yarn start:dev &"; done
