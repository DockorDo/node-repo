const client = require('./index.js')

async function run(){
    try {
        const database = client.db('insertDB')

        const colors = database.collection("colors");

        const query = {color:'red'}

        const colorList = await colors.find(query,{

        });
        console.log(colorList)
        for await (const color of colorList){
            console.log(color)
        }
    }finally {
        await client.close()
    }
}
run().catch(console.dir)