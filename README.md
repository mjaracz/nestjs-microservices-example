### Overview
This source code repository contains an example of a simple implementation of a microservices architecture using the event sourcing pattern. 

### Prerequisites
```
Docker version 20.10.17, build 100c701
Docker Compose version v2.7.0
node version v16.13.2
npm version 8.5.2
yarn version 1.22.17
```

### Lunching the project
First, let's start by installing the necessary dependencies by going to each subdirectory
```
cd api-gateway
yarn install

cd ../mailer-worker
yarn install

cd ../products-worker
yarn install
```

Next we need start message broker and database service from root directory
```
docker-compose up 
```
The only thing left is to start the project by going to the individual subdirectories 
```
cd api-gateway/
yarn start
```
And in new terminal each microservice 
```
cd mailer-worker/
yarn start
```
```
cd products-worker/
yarn start
```