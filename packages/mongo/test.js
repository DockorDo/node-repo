const client = require('./index.js')
async function init(){
    const myDB = client.db("myDB");
    const myColl = myDB.collection("restaurants");
    await myColl.insertMany([
        { "_id": 1, "restaurant": "White Bear", "borough": "Queens", "cuisine": "Chinese" },
        { "_id": 2, "restaurant": "Via Carota", "borough": "Manhattan", "cuisine": "Italian" },
        { "_id": 3, "restaurant": "Borgatti's", "borough": "Bronx", "cuisine": "Italian" },
        { "_id": 4, "restaurant": "Tanoreen", "borough": "Brooklyn", "cuisine": "Middle Eastern" },
        { "_id": 5, "restaurant": "Äpfel", "borough": "Queens", "cuisine": "German" },
        { "_id": 6, "restaurant": "Samba Kitchen", "borough": "Manhattan", "cuisine": "Brazilian" },
    ]);
}
