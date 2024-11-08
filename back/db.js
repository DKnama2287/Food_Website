const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/gofood";

mongoose.connect(url)
    .then(async () => {
        console.log("Successfully connected to MongoDB database");

        try {
            const data = await mongoose.connection.db.collection("fooditems"); // corrected collection name
            const documents = await data.find({}).toArray(); // await toArray directly
            if(documents){
                const foodda = await mongoose.connection.db.collection("foodcateogry");
                const catdata = await foodda.find({}).toArray();
                if(catdata){
                    global.food_items = documents;
                    global.fooddata = catdata;
                }
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });
                             