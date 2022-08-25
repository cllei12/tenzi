# TENZI Game

## Quick Start
1. Check the version of Node version install all dependencies
    ```
    node --version
    npm install
    ```
2. Run this app
    ```
    npm start
    ```
    Then, you can see the Tenzi Game on `http://localhost:3000/`

## Dependencies
- [react-confetti](https://www.npmjs.com/package/react-confetti)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [tailwindcss](https://tailwindcss.com/)



## Backend

springboot + AWS RDS (PostgreSQL) + AWS EC2

- Create an EC2 instance and install 

  ```shell
  sudo yum install java-1.8.0-openjdk  # java 8
  sudo amazon-linux-extras install java-openjdk11 # java 11
  java -version
  
  # Finally, if you want to switch between java versions run:
  sudo alternatives --config java
  ```

- init sprintboot project

  ```
  Dependencies
    Spring Web WEB
    Spring Data JPA SQL
    PostgreSQL Driver
    Lombok
  ```

  set up application.properties to connect to AWS RDS

  - [pgAdmin](https://www.pgadmin.org/)
  - psql

  https://aws.amazon.com/blogs/opensource/using-a-postgresql-database-with-amazon-rds-and-spring-boot/

  ```
  Endpoint & port
    Endpoint
    	tenzi-db.clznrlmncqs9.us-east-1.rds.amazonaws.com
    Port
    	5432
  ```

  ```shell
  # Using psql to connect to a PostgreSQL DB instance
  # https://www.postgresguide.com/utilities/psql/
  psql --host=DB_instance_endpoint --port=port --username=master_user_name --password --dbname=database_name
  
  # NOTE: if can't connect to the RDS, please check security group. Add your IP into inbound rules
  #https://docs.aws.amazon.com/zh_cn/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html#CHAP_SettingUp.SecurityGroup
  
  # test connection
  # mac
  nc -zv tenzi-db.clznrlmncqs9.us-east-1.rds.amazonaws.com(endpoint) 5432(port)
  # linux
  telnet tenzi-db.clznrlmncqs9.us-east-1.rds.amazonaws.com 5432
  
  sudo yum install postgresql postgresql-server
  psql --host=tenzi-db.clznrlmncqs9.us-east-1.rds.amazonaws.com --port=5432 --username=postgres --password --dbname=tenziDB
  \l # all databases
  \c tenziDB  # connect to tenziDB database
  \du
  grant all privileges on database 'tenziDB' to postgres
  
  ```

- Create `User` class and `UserController`

  https://stackabuse.com/controller-and-restcontroller-annotations-in-spring-boot/

- Set application.properties

​		https://awstip.com/deploy-spring-boot-application-with-amazon-ec2-and-rds-d7ca7e4b223f

​		https://aws.amazon.com/premiumsupport/knowledge-center/rds-cannot-connect/

- maven 

  Clean -> install

  ```
  java -jar tenzidb-0.0.1-SNAPSHOT.jar --server.port=8081  # default port=8080
  ```

- put jar to ec2 and visit the api by public IP

  ```
  http://18.212.191.193:8080/api/record/getAll
  # or
  http://ec2-18-212-191-193.compute-1.amazonaws.com:8080/api/record/getAll
  ```

React + API app with spring boot

https://developer.okta.com/blog/2022/06/17/simple-crud-react-and-spring-boot

- React router

  https://www.w3schools.com/react/react_router.asp
