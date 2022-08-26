# TENZI Game

## Quick Start
```bash
npm install  # Install all dependencies via npm 
npm start  # Run this app
```

Then, you can see the Tenzi Game on [`http://localhost:3000/`](http://localhost:3000/)

## Preview

<img width="500" alt="image" src="https://s2.loli.net/2022/08/26/Ban4zOE9is7grkv.png">

<img width="500" alt="image" src="https://s2.loli.net/2022/08/26/nSG9UzORN2w6dKP.png">

<img width="500" alt="image" src="https://user-images.githubusercontent.com/87511626/186850559-8bb21bee-4fa9-4c70-a2bb-aed05f1aa25e.png">

## Architecture

### Front-end

Built an web app with **React**

#### Dependencies

```bash
❯ node --version
v18.0.0

❯ npm list
tenzi@0.1.0 /Users/lei/Desktop/Portfolio/tenzi
├── @testing-library/jest-dom@5.16.4
├── @testing-library/react@13.3.0
├── @testing-library/user-event@13.5.0
├── react-confetti@6.1.0
├── react-dom@18.2.0
├── react-router-dom@6.3.0
├── react-scripts@5.0.1
├── react@18.2.0
├── tailwindcss@3.1.8
└── web-vitals@2.1.4
```

- [react-confetti](https://www.npmjs.com/package/react-confetti)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [tailwindcss](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/en/main)

### Back-end

Created a game record CRUD API with **Springboot** + **AWS RDS** (PostgreSQL) + **AWS EC2**

The Springboot application is runing on my own EC2 and could be access to see all game records via http://ec2-18-212-191-193.compute-1.amazonaws.com:8080/api/record/getAll. 

NOTE: if you find the API doesn't work, feel free to contact me via [leicao.usc@gmail.com](mailto:leicao.usc@gmail.com)

#### Game Record API instruction

If you run the app on your local terminal, you could use this API via `http://localhost:{prot_number}/`.

Or I have set up the API on my AWS EC2 instance, you can access via `http://ec2-18-212-191-193.compute-1.amazonaws.com:8080/`

```shell
# GET
http://localhost:8080/api/record/getAll  # Get all game records
http://localhost:8080/api/record/getBestTime  # Get the best game time
http://localhost:8080/api/record/getOrderByTime  # Get all game records ordered by game time

# POST
POST http://localhost:8080/api/record/add
Content-Type: application/json

{
  "name": "your name",
  "recordTime": "2022-08-26T16:40:00",
  "time": 40,
  "rolls": 20
}

# DELETE
http://localhost:8080/api/record/delete/{recordId}  # Delete record by recordID
```

#### Setup API on your machine (Optional)

1. Open [tenzidb](./tenzidb/) folder with intellij idea

2. Maven: Clean -> install

 	Generate `tenzidb-0.0.1-SNAPSHOT.jar`

3. Run the API app

   ```shell
   java -jar tenzidb-0.0.1-SNAPSHOT.jar --server.port={prot_number}  # default port=8080
   ```

#### 