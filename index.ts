import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
    // Prims Queries

    // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'John Does',
    //         email: "john@email.com"
    //     }
    // })
    //  console.log(user);

    // Get all users
    // const users = await prisma.user.findMany()
    // console.log(users);
    
    // Create article and associated with the user
    const article = await prisma.article.create({
        data: {
            title: "John First Article",
            body: "This is Johns first article",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log(article)
}

main()
    .then(async () => { await prisma.$disconnect })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect
        process.exit(1)
    })