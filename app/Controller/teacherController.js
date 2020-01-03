
/** 
 * 
 * Controleur de la classe enseignant
 * 
 */

var Teacher = require('../Model/teacherModel')


/** 
 * 
 * Controlleur de la procédure récupérer enseignants
 * 
 */

exports.getAllTeachers = (req, res) => {
    console.log('getAllTeachers controller !')
    Teacher.getAllTeachers((err, teacher) => {
        console.log(teacher)
        if (err) {
            res.send(err)
        } else {
            res.send(teacher)
        }
    })
}

/** 
 * 
 * Controlleur de la procédure ajouter enseignant
 * 
 */

exports.addTeacher = (req, res) => {
    console.log('addTeacher controller !')

    var newTeacher = req.body.teacher
    console.log(newTeacher)

    if (!newTeacher.nom || !newTeacher.prenom) {
        res.status(400).send({ error:true, message: 'Please provide nom/prenom/annee' });
    }
    else {
        Teacher.creatTeacher(newTeacher, (err, teacher) => {
            if (err) {
                res.send(err)
            } else {
                res.json(newTeacher)
            }
        })
    }
}

/** 
 * 
 * Controlleur de la procédure mise à jour enseignants
 * 
 */

exports.updateTeacher = (req, res) => {
    console.log('updateTeacher controller !')
    var updatedTeacher = req.body.teacher
    Teacher.update(req.params.id, updatedTeacher, (err, teacher) => {
        if (err) {
            res.send(err)
        } else {
            console.log("Final result " + updatedTeacher)
            res.json(updatedTeacher)
        }
    })
}

/** 
 * 
 * Controlleur de la procédure suppression enseignant
 * 
 */


exports.deleteTeacher = (req, res) => {
    console.log('deleteTeacher controller !')
    var teacher = req.body
    Teacher.remove(req.params.id, (err, teacher) => {
        if (err) {
            res.send(err)
        } else {
            res.json({"message": "Teacher deleted !"})
        }
    })
}

/*function addTeacher2(teacher) {
    if (!teacher.nom || !teacher.prenom || !teacher.annee) {
        return 'Please provide nom/prenom/annee';
    }
    else {
        Teacher.creatTeacher(teacher, (err, teacher) => {
            if (err) {
                console.log(err);
            }
        });
        return JSON.stringify(teacher);
    }
}

module.exports = {addTeacher2}; */