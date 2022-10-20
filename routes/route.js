const express = require("express")

const router=express.Router()

const controller = require("../controller/LearnerController")


router.post("/add-learner",controller.addLearner)
router.post("/add-course",controller.addCourse)

router.get("/get-all-learners",controller.getAllLearners)
router.get("/get-all-courses",controller.getAllCourses)

router.get("/get-course-by-id/:id",controller.getCourseById)
router.get("/get-learner-by-name/:name",controller.getLearnerByName)




router.put("/update-password-by-name-learner/:name/:password", controller.updatePasswordByNameLearner)

router.put("/update-name-by-id-course/:id/:name", controller.updateNameByIdCourse)

router.delete("/delete-by-name-learner/:name", controller.deleteLearnerByName)

router.delete("/delete-by-id-course/:id", controller.deleteCourseById)

module.exports=router