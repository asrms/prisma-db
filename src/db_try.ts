import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const myPromise = new Promise<String>((resolve, reject) => {
    setTimeout(() => reject('ciao'), 1000);
})

/* myPromise
.then((res) =>{
    console.log(res);
})
.catch((err) => {
    console.log('errore: ' +err);
})
.finally(() => console.log('promise completata')); */

 async function main(){

    try {
 
        const users = await prisma.user.findMany();
        console.log('get users: ', users);
 
        console.log('risultato promise: ' + await myPromise);
        
    } catch (error) {

        console.log('errore: ' + error);
    }
}

main(); 