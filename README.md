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

Create a game record API app with Spring Boot

Springboot + AWS RDS (PostgreSQL) + AWS EC2

1. Open [tenzidb](./tenzidb/) folder with intellij idea

2. Maven: Clean -> install

  Generate tenzidb-0.0.1-SNAPSHOT.jar

3. Run the game record API app

    ```
    java -jar tenzidb-0.0.1-SNAPSHOT.jar --server.port=8081  # default port=8080
    ```


