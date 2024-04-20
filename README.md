# afifafian_betest

### Stack Used: ###

* Nodejs
* Express
* MongoDB
* Mongoose
* Json Web Token
* BcryptJS
* Jest
* Kafka
## How to run this app:

* Clone the Repository
* Make an environment file (.env) using the values given in the `Environment` section below
* Install the dependencies using `npm install` command
* Start to run this app by using `npm run start` command

## How to run unit test:

* Start to run the test by using `npm run test` command
### Environment: ###

* PORT=4001
* DB_URL=mongodb://localhost:27017/db_afifafian_betest
* JWT_SECRET=1jwtSecretKey1
* JWT_LIFETIME=3
* BCRYPT_SALT=10
* KAFKA_BROKER=localhost:9092
* KAFKA_TOPIC=kafka_afifafian_betest
