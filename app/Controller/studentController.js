/** 
 * 
 * Controleur de la classe étudiant
 * 
 */

var Student = require('../Model/studentModel')

/** 
 * 
 * Controlleur de la procédure récupérer étudiants 1cp
 * 
 */

exports.getCpOneStudents = (req, res) => {
    console.log('get 1cp Students controller !')
    Student.getCpOneStudents((err, student) => {
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

/** 
 * 
 * Controlleur de la procédure récupérer étudiants 2cp
 * 
 */


exports.getCpTwoStudents = (req, res) => {
    console.log('get 2cp Students controller !')
    Student.getCpTwoStudents((err, student) => {

        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}


/** 
 * 
 * Controlleur de la procédure récupérer étudiants 1cs
 * 
 */

exports.getCsOneStudents = (req, res) => {
    console.log('get 1cs Students controller !')
    Student.getCsOneStudents((err, student) => {
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

/** 
 * 
 * Controlleur de la procédure récupérer étudiants 2cs
 * 
 */


exports.getCsTwoStudents = (req, res) => {
    console.log('get 2cs Students controller !')
    Student.getCsTwoStudents((err, student) => {
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

/** 
 * 
 * Controlleur de la procédure récupérer étudiants 3cs
 * 
 */


exports.getCsThreeStudents = (req, res) => {
    console.log('get 3cs Students controller !')
    Student.getCsThreeStudents((err, student) => {
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

/** 
 * 
 * Controlleur de la procédure ajouter étudiant
 * 
 */


exports.addStudent = (req, res) => {
    console.log('addStudent controller !')

    var newStudent = req.body.student
    console.log(newStudent)

    if (!newStudent.nom || !newStudent.prenom || !newStudent.annee) {
        res.status(400).send({ error:true, message: 'Please provide nom/prenom/annee' });
    }
    else {
        Student.creatStudent(newStudent, (err, student) => {
            if (err) {
                res.send(err)
            } else {
                res.json(newStudent)
            }
        })
    }
}

/** 
 * 
 * Controlleur de la procédure mise à jour des étudiants
 * 
 */

exports.updateStudent = (req, res) => {
    console.log('updateStudent controller !')
    console.log("Body.student.annee : " + req.body.student.annee)
    var updatedStudent = req.body.student
    console.log("Before model ! " + updatedStudent)
    Student.update(req.params.id, updatedStudent, (err, student) => {
        if (err) {
            res.send(err)
        } else {
            console.log("Final result " + updatedStudent)
            res.json(updatedStudent)
        }
    })
}

/** 
 * 
 * Controlleur de la procédure suppression étudiant
 * 
 */

exports.deleteStudent = (req, res) => {
    console.log('deleteStudent controller !')
    var student = req.body
    console.log(req.params.id)
    console.log(student)
    Student.remove(req.params.id, (err, student) => {
        if (err) {
            res.send(err)
        } else {
            res.json({"message": "Student deleted !"})
        }
    })
}

/*function addStudent2(student) {
    if (!student.nom || !student.prenom || !student.annee) {
        return 'Please provide nom/prenom/annee';
    }
    else {
        Student.creatStudent(student, (err, student) => {
            if (err) {
                console.log(err);
            }
        });
        return JSON.stringify(student);
    }
}

module.exports = {addStudent2}; */