/** 
 * 
 * Classe étudiant
 * 
 */


var sql = require('./db.js')

/** 
 * 
 * Constructeur de la classe étudiant
 * 
 */
var Student = (student) => {
/** 
 * Nom étudiant
 * @type {string}
 * 
 */
    this.nom = student.nom
/** 
 * Prénom étudiant
 * @type {string}
 * 
 */
    this.prenom = student.prenom
/** 
 * Annnée étudiant
 * @type {int}
 * 
 */
    this.annee = student.annee
}



/** 
 * Procédure créer étudiant 
 */

Student.creatStudent = (newStudent, result) => {
    sql.query("INSERT INTO students SET ?", newStudent, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId);
        }
    })
}

/** 
 * 
 * Procédure : récupérer étudiants 1cp
 * 
 */

Student.getCpOneStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '1cp' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

/** 
 * 
 * Procédure : récupérer étudiants 2cp
 * 
 */

Student.getCpTwoStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '2cp' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

/** 
 * 
 * Procédure : récupérer étudiants 1cs
 * 
 */

Student.getCsOneStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '1cs' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

/** 
 * 
 * Procédure : récupérer étudiants 2cs
 * 
 */

Student.getCsTwoStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '2cs' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

/** 
 * 
 * Procédure : récupérer étudiants 3cs
 * 
 */

Student.getCsThreeStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '3cs' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

/** 
 * 
 * Procédure : Mise à jour des étudiants
 * 
 */

Student.update = (id, student, result) => {
    sql.query("UPDATE students SET nom = ?, prenom = ?, annee = ? WHERE id = ?", [student.nom, student.prenom, student.annee, id], function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        }
        else {
            result(null, res)
        }
    })
}

/** 
 * 
 * Procédure : suppression étudiant
 * 
 */

Student.remove = function (id, result) {
    sql.query("DELETE FROM students WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        }
        else {
            result(null, res)
        }
    })
}

module.exports = Student