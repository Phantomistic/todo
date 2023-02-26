import express, { json } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import { empty } from '@prisma/client/runtime';


const authRouter= require('./routes/auth')
const todoRouter= require('./routes/todo')

require('dotenv').config();

const prisma = new PrismaClient()
const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());



app.use(cors()); 
async function main() {
    // Connect the client
    await prisma.$connect()
    // await prisma.user.deleteMany({})
    // await prisma.todo.deleteMany({})
    app.use('/auth',authRouter);
    app.use('/todo',todoRouter);
    const user = await prisma.user.findFirst({where:{id:"clel1n52z0000u14o476leiuv"}})
    console.log(user)
    // const users = await prisma.user.create({
    //   data:{
    //     username:"fares",
    //     email:"fares1131@live.com",
    //     password:"123",
    //     todos:{
    //       create:{
    //         title:"test",
    //         description:"help"
            
    //       }
    //     }
    //   },
    //   include:{
    //     todos:true
    //   }
    // });
    
    // const todos = await prisma.todo.create({
    //     data:{
          
    //           userId:"clel12dor0000u1tc94ioxevy",
    //           title:"tester",
    //           description:"helpu"
              
            
          
    //     }
    // })
  //    console.log(todos)

// const userd = await prisma.user.findMany({
//   include:{todos:true}
// })
// console.log(userd)
// }

  // const updatedUser = await prisma.user.update({
  //   where:{
  //     email:'fares1131@live.com',
  //   },
  //   data:{
  //     todos:{
  //       connect:{
  //         id:"clel1n65u0007u14odiebo3ec",
  //       }
  //     }
  //   },
  // })
  // console.log(updatedUser)
  }
 

  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

app.listen(port,() => {
console.log(`Server running on port: ${port}`);
})


