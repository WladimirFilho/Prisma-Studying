import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
    // Prisma Queries

    // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'John Does',
    //         email: "john@email.com"
    //     }
    // })
    //  console.log(user);

    ////////////////////////////////

    // Get all users
    const users = await prisma.user.findMany({
        include: {
            articles: true
        }
    })
    // console.log(users);

      ////////////////////////////////
    
    // Create article and associated with the user
    // const article = await prisma.article.create({
    //     data: {
    //         title: "John First Article",
    //         body: "This is Johns first article",
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })
    // console.log(article)

    // Get all articles
    // const allArticles = await prisma.article.findMany()
    // console.log(allArticles)

    // Create User and article and associate them together
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Sarah Smith",
    //         email: "sara@gmail.com",
    //         articles: {
    //             create: {
    //                 title: "Saras First Article",
    //                 body: "This is Saras first article"
    //             }
    //         }
    //     }
    // })
    // console.log(user)

    // const articles = await prisma.article.findMany()
    // console.log(articles)

    ////////////////////////////////

    // Create another article
    // const article = await prisma.article.create({
    //     data: {
    //         title: "Sample article",
    //         body: "Sample article",
    //         author: {
    //             connect: {
    //                 id: 2
    //             }
    //         }
    //     }
    // })
    // console.log(article)

    ////////////////////////////////////////////////////////

    // Loop over articles
    users.forEach((user) => {
        console.log(`User: ${user.name} Email: ${user.email}`)
        console.log("Article:")
        user.articles.forEach((article) => { 
            console.log(`- Title: ${article.title} Body: ${article.body}`)
        })
        console.log("\n")
    })
}

main()
    .then(async () => { await prisma.$disconnect })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect
        process.exit(1)
    })