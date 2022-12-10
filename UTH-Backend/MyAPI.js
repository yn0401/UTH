let express = require('express');
let bodyParser = require("body-parser");
let app = express();
let cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log(`Server is running... on http://localhost:3000`)
})

//Đem admin về
const { db } = require('./config/admin')

//---------------------------------------------------------------------------------------------------------GIFT------------------------------------------------------------------------------------------------//
//get all gifts
app.get("/gifts", async (req, res) => {
    //gọi về firebase
    const giftRef = db.collection('gifts');
    try {
        await giftRef.get()
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                console.log('Get All Gifts Success');
                res.status(201).json(items);
            })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get all gifts with latest
app.get("/gifts/latest", async (req, res) => {
    //gọi về firebase
    const giftRef = db.collection('gifts');
    try {
        await giftRef
            .orderBy('createdAt', 'asc')
            .get()
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                console.log('Get All Gifts With DSC Success');
                res.status(201).json(items);
            })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get all gifts with newest
app.get("/gifts/newest", async (req, res) => {
    //gọi về firebase
    const giftRef = db.collection('gifts');
    try {
        await giftRef
            .orderBy('createdAt', 'desc')
            .get()
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                console.log('Get All Gifts With DSC Success');
                res.status(201).json(items);
            })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get all gifts with point asc
app.get("/gifts/points/asc", async (req, res) => {
    //gọi về firebase
    const giftRef = db.collection('gifts');
    try {
        await giftRef
            .orderBy('point', 'asc')
            .get()
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                console.log('Get All Gifts With ASC POINT Success');
                res.status(201).json(items);
            })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get all gifts with point dsc
app.get("/gifts/points/dsc", async (req, res) => {
    //gọi về firebase
    const giftRef = db.collection('gifts');
    try {
        await giftRef
            .orderBy('point', 'desc')
            .get()
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                console.log('Get All Gifts With DSC POINT Success');
                res.status(201).json(items);
            })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get gift detail by id
app.get("/gifts/:id", async (req, res) => {
    const ref = db.collection("gifts");
    const id = req.params.id;
    try {
        ref.doc(id).get().then((snapshot) => {
            const data = snapshot.data();
            console.log(`Get gift detail by id ${id} success!!!!`);
            res.status(201).json(data);
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//add new gift
app.post("/gifts/add", async (req, res) => {
    const ref = db.collection("gifts");
    const data = req.body;
    console.log(req.body);
    try {
        ref.add(data);
        res.status(201).json({ message: "New gift added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//delete gift
app.delete("/gifts/delete/:id", async (req, res) => {
    const ref = db.collection("gifts");
    const id = req.params.id;
    try {
        ref.doc(id).delete();
        console.log(`Delete gift with id:${id} successfull`);
        res.status(201).json({ message: "Gift deleted successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

//update gift
app.put("/gifts/update/:id", async (req, res) => {
    const ref = db.collection("gifts");
    const id = req.params.id;
    const data = req.body;
    try {
        ref.doc(id).set(data);
        console.log(`Update gift info with id:${id} successfull`);
        res.status(201).json({ message: "Gift updated successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

// //search gift
app.get("/gifts/search/:name", async (req, res) => {
    const ref = db.collection("gifts");
    const name = req.params.name;
    // console.log(name);
    try {
        ref.where("name", "==", name).get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(`Gifts total were searched by keyword(${name}): ${data.length}}`);
            res.status(201).json(data);
        });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

//---------------------------------------------------------------------------------------------------------MEMBER------------------------------------------------------------------------------------------------//
//get all members
app.get("/members", async (req, res) => {
    //gọi về firebase
    const membRef = db.collection('members');
    try {
        // Từ clothesRef lấy hết thì(then)
        membRef.get().then((snapshot) => {
            const items = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))
            console.log('Get All Members Success');
            res.status(201).json(items);
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get top10 members with highest point
app.get("/members/top10", async (req, res) => {
    //gọi về firebase
    const membRef = db.collection('members');
    try {
        await membRef
            .orderBy('totalPoint', 'desc')
            .limit(10)
            .get()
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                console.log('Get Top 10 Members Success');
                res.status(201).json(items);
            })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get member detail by id
app.get("/members/:id", async (req, res) => {
    const ref = db.collection("members");
    const id = req.params.id;
    try {
        ref.doc(id).get().then((snapshot) => {
            const data = snapshot.data();
            console.log(`Get member detail by id ${id} success!!!!`);
            res.status(201).json(data);
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//add new member
app.post("/members/add", async (req, res) => {
    const ref = db.collection("members");
    const data = req.body;
    console.log(req.body);
    try {
        ref.add(data);
        res.status(201).json({ message: "New member added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//delete member
app.delete("/members/delete/:id", async (req, res) => {
    const ref = db.collection("members");
    const id = req.params.id;
    try {
        ref.doc(id).delete();
        console.log(`Delete member with id:${id} successfull`);
        res.status(201).json({ message: "Member deleted successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

//update member
app.put("/members/update/:id", async (req, res) => {
    const ref = db.collection("members");
    const id = req.params.id;
    const data = req.body;
    try {
        ref.doc(id).set(data);
        console.log(`Update member info with id:${id} successfull`);
        res.status(201).json({ message: "Members updated successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

//search member
app.get("/members/search/:name", async (req, res) => {
    const ref = db.collection("members");
    const name = req.params.name;
    // console.log(name);
    try {
        ref.where("name", "==", name).get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(`Member total were searched by keyword(${name}): ${data.length}}`);
            res.status(201).json(data);
        });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

//---------------------------------------------------------------------------------------------------------TRANSACTION------------------------------------------------------------------------------------------------//
//get all trans
app.get("/trans", async (req, res) => {
    //gọi về firebase
    const transRef = db.collection('transactions');
    try {
        // Từ clothesRef lấy hết thì(then)
        transRef.get().then((snapshot) => {
            const items = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))
            console.log('Get All Transactions Success');
            res.status(201).json(items);
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get transaction detail by id
app.get("/trans/:id", async (req, res) => {
    const ref = db.collection("transactions");
    const id = req.params.id;
    try {
        ref.doc(id).get().then((snapshot) => {
            const data = snapshot.data();
            console.log(`Get transaction detail by id ${id} success!!!!`);
            res.status(201).json(data);
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//add new transaction
app.post("/trans/add", async (req, res) => {
    const ref = db.collection("transactions");
    const data = req.body;
    console.log(req.body);
    try {
        ref.add(data);
        res.status(201).json({ message: "New transaction added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//delete transaction
app.delete("/trans/delete/:id", async (req, res) => {
    const ref = db.collection("transactions");
    const id = req.params.id;
    try {
        ref.doc(id).delete();
        console.log(`Delete member with id:${id} successfull`);
        res.status(201).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

//update transaction
app.put("/trans/update/:id", async (req, res) => {
    const ref = db.collection("transactions");
    const id = req.params.id;
    const data = req.body;
    try {
        ref.doc(id).set(data);
        console.log(`Update member info with id:${id} successfull`);
        res.status(201).json({ message: "Transactions updated successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

// //search transaction
// app.get("/trans/search/:name", async (req, res) => {
//     const ref = db.collection("transactions");
//     const name = req.params.name;
//     // console.log(name);
//     try {
//         ref.where("name", "==", name).get().then((snapshot) => {
//             const data = snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             console.log(`Transaction total were searched by keyword(${name}): ${data.length}}`);
//             res.status(201).json(data);
//         });
//     } catch (error) {
//         res.status(500).json({ general: "Something went wrong, please try again" });
//     }
// });

//---------------------------------------------------------------------------------------------------------EVENTS------------------------------------------------------------------------------------------------//
//get all events
app.get("/events", async (req, res) => {
    //gọi về firebase
    const eventsRef = db.collection('events');
    try {
        // Từ clothesRef lấy hết thì(then)
        eventsRef.get().then((snapshot) => {
            const items = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))
            console.log('Get All Events Success');
            res.status(201).json(items);
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//get events detail by id
app.get("/events/:id", async (req, res) => {
    const ref = db.collection("events");
    const id = req.params.id;
    try {
        ref.doc(id).get().then((snapshot) => {
            const data = snapshot.data();
            console.log(`Get event detail by id ${id} success!!!!`);
            res.status(201).json(data);
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//add new events
app.post("/events/add", async (req, res) => {
    const ref = db.collection("events");
    const data = req.body;
    console.log(req.body);
    try {
        ref.add(data);
        res.status(201).json({ message: "New event added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
});

//delete events
app.delete("/events/delete/:id", async (req, res) => {
    const ref = db.collection("events");
    const id = req.params.id;
    try {
        ref.doc(id).delete();
        console.log(`Delete event with id:${id} successfull`);
        res.status(201).json({ message: "Events deleted successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

//update events
app.put("/events/update/:id", async (req, res) => {
    const ref = db.collection("events");
    const id = req.params.id;
    const data = req.body;
    try {
        ref.doc(id).set(data);
        console.log(`Update event info with id:${id} successfull`);
        res.status(201).json({ message: "Events updated successfully" });
    } catch (error) {
        res.status(500).json({ general: "Something went wrong, please try again" });
    }
});

