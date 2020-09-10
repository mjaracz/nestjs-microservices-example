### NestJS MicroService NATS example ( Choreography )

### database migrations
First of all we need to fill our product database with data. <br/>
Migration scripts are great for this. <br/>
Install globally needed migration CLI package: <br/> 
```bash
$ sudo npm install -g migrate-mongo
```
Then fill database with data by using migration script written before, just type:
```bash
$ cd products-worker && migrate-mongo up
```


### Launch the whole microservices project

In root directory just type
```bash
$ sh ./installDepsRunDocker.sh
```
