var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

app.listen(3000, function(){
    console.log("Server is running...")
})

//Đem admin về
const {db} = require('./config/admin')


app.get("/gifts", async(req,res)=>{
    //gọi về firebase
    const giftRef = db.collection('gifts');
    try{
        // Từ clothesRef lấy hết thì(then)
        giftRef.get().then ( (snapshot) => {
        const items = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))
            console.log(items);
            res.status(201).json(items);
        })
    }catch(error){
        res.status(500).json({message : error});
    }
    //trả về đối tượng
    //res.status(201).json(items);
})