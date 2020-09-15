### NestJS MicroService NATS example ( Choreography )

### Launch the project

First of all install dependency, start database service and message broker service, then run each of microservice <br />
If you use linux based operating system, to do above few things, just type in root directory <br/>
```bash
$ sh ./runAllServices.sh
```

### database migrations
To fill our database with example product data. <br/>
Use migration scripts which are great for this purpose. <br/>
Install globally needed migration CLI package: <br/> 
```bash
$ sudo npm install -g migrate-mongo
```
Then fill database with data by using migration script written before, just type:
```bash
$ cd products-worker && migrate-mongo up
```
