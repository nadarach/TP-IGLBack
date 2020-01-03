var studentController = require('../Controller/studentController')
var teacherContoller = require('../Controller/teacherController')

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json({ 'message': "Welcome to TP IGL" })
    })
    //Student routes
    app.get('/Students/all/1cp', studentController.getCpOneStudents)
    app.get('/Students/all/2cp', studentController.getCpTwoStudents)
    app.get('/Students/all/1cs', studentController.getCsOneStudents)
    app.get('/Students/all/2cs', studentController.getCsTwoStudents)
    app.get('/Students/all/3cs', studentController.getCsThreeStudents)
    app.post('/Students/add', studentController.addStudent)
    app.put('/Students/update/:id', studentController.updateStudent)
    app.delete('/Students/delete/:id', studentController.deleteStudent)
    //Teachers routes
    app.post('/Teachers/add', teacherContoller.addTeacher)
    app.get('/Teachers/all', teacherContoller.getAllTeachers)
    app.put('/Teachers/update/:id', teacherContoller.updateTeacher)
    app.delete('/Teachers/delete/:id', teacherContoller.deleteTeacher)
}