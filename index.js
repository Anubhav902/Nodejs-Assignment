const express = require("express")

const mongoose = require("mongoose")

const router=require("./routes/route")

const app=express()

app.listen(3000,() => {
    console.log("server running on port 3000")
})

app.use(express.json())

app.use("/welcome",(req,res) =>{
    res.send("welcome to Node Application, Blue Yonder ")

}
)

app.use("/learner",router)
app.use("/course",router)


const uri = "mongodb+srv://Anubhav1804:Anu123@cluster0.irft47c.mongodb.net/employeeNodeJs?retryWrites=true&w=majority"
mongoose.
        connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database connected...")}).
        catch((error) => {console.log(error)})
