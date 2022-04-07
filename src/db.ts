import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient();

async function printUsers(){
 
    const users = await prisma.user.findMany();

    console.log('all users: ', users);

}

async function findUserById(id:number){

    try {

        const user = await prisma.user.findUnique({
            where:{
                id: id
            }
        });

        console.log(user);
        
    } catch (error) {
        console.log("error: " + error);
    }

}


async function findUserByAge(age:number){

    try {

        const user = await prisma.user.findMany({
            where:{
               age:age
            }
        });

        console.log(user);
        
    } catch (error) {
        console.log("error: " + error);
    }

}

    async function findUserPerAge(){

        try {
    
            const user = await prisma.user.findMany({
                orderBy:{
                    age: 'desc',
                },
              /*   select:{
                    id:true,
                    age:true,
                } */
                where:{
                    age:{
                        gte:18
                    }
                }
            });
    
            console.log(user);
            
        } catch (error) {
            console.log("error: " + error);
        }

 

}

async function createUser(age:number, name:string, email:string){

    const user = await prisma.user.create({
        data: {
            age: age,
            name: name,
            email: email
        }
    });


}


async function deleteUser(id:number){

    const user = await prisma.user.delete({

        where:{
            id: id
        }
     })
}

async function updateEmailUser(id:number,email:string){

    try {


        const user = await prisma.user.update({
            data:{
                email:email
            },
            where:{
                id: id
            }
         }) 
        
    } catch (error) {
        console.log("error: " + error);
    }

 
}

 async function main(){

    try {


    /*    await createUser(29,"marco","marco@mail.com");   */

   /*   await deleteUser(2); */

 /*   await findUserById(1); */

/*  const user = await prisma.user.update({
     where:{
         email: "Y@mail.com",
     },
     data: {
         email: "Ylenia@mail.com"
     }
 }); */

    await findUserPerAge(); 
       await printUsers(); 
        
        
    } catch (error) {

        console.log('errore: ' + error);
    }
}
main();

