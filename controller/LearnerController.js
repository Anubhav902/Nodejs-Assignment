const Learner = require("../models/Learner")
const Course = require("../models/Course")

//add-learner
exports.addLearner = (req,res) => {
   const learner = new Learner({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
   })

   learner.save().then((data)=>{
    res.send(data)
   }).catch((error)=>
   {
     res.send(error)
   })
}
 
//add-course
exports.addCourse= (req,res) => {
    const course=new Course({
       id:req.body.id,
       name:req.body.name,
       description:req.body.description
    })
 
    course.
    save().
    then((data)=>{
     res.send(data)
    }).
    catch((error)=>
    {
      res.send(error)
    })
 }



//get-all-learners
exports.getAllLearners = (req,res) => {
    const learners = Learner.find()
    learners.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}
 
//get-all-courses
exports.getAllCourses = (req,res) => {
    const courses = Course.find()
    courses.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

//get-learner-by-name
exports.getLearnerByName=(req,res) => {
 
    const learners= Learner.find({name:req.params.name}) 
    learners.then( (data) => {
        res.send(data)
    }).
    catch( (error) => {
        res.send(error)
    })

}      


//get-course-by-id
exports.getCourseById=(req,res) => {
 
    const courses= Course.find({id:req.params.id})
    courses.
    then( (data) => {
        res.send(data)
    }).
    catch( (error) => {
        res.send(error)
    })

}  


// updatePasswordByNameLearner
exports.updatePasswordByNameLearner = (req,res) => {
    Learner.updateOne({name:req.params.name}, { $set: {password : req.params.password}}, () => {
        res.status(200).json({
            message : "Updated... "+req.params.name+"'s password by "+req.params.password
        })
    })
}

//updateNameByIdCourse
exports.updateNameByIdCourse = (req,res) => {
    Course.updateOne({id:req.params.id}, { $set: {name : req.params.name}}, () => {
        res.status(200).json({
            message : "Updated..."+req.params.id+"'s name by "+req.params.name
        })
    })
}



// deleteLearner
exports.deleteLearnerByName = (req,res) => {
    Learner.deleteOne({name:req.params.name}, () => {
        res.status(200).json({
            message : "Deleted..."+req.params.name+"'s Data"
        })
    })
}


// deleteCourse
exports.deleteCourseById = (req,res) => {
    Course.deleteOne({id:req.params.id}, () => {
        res.status(200).json({
            message : "Deleted... "+req.params.id+"'s Data"
        })
    })
}