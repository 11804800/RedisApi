
# Book Management Api

It is basic book Management api but I've used redis for chaching the data. It is Basically a learning project for exploring more about how redis works and what are the benefits of using redis
- Chached Data
- Set Expire to delete the data after seconds or min.
- Faster Reload and less load on server for calculation.


## Features

- Chached data


    
## Run Locally

Clone the project

```bash
  git clone https://github.com/11804800/RedisApi.git
```

Go to the project directory

```bash
  cd RedisApi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Server:** Node, Express, Redis, Docker , Mongodb


## Deployment

To deploy this project run, firstly run redis either on docker or through exe.

for Docker--

```bash

docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

docker exec -it redis-stack redis-cli
 ```
 Then It will Run On Node Js
