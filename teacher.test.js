const {addTeacher2} = require('./app/Controller/teacherController');
test('Méthode ajouter enseignant', () => {
    expect(addTeacher2({nom:"test",prenom:"edd",annee:"2018"})).toMatch(JSON.stringify({nom:"test",prenom:"edd",annee:"2018"}));
    expect(addTeacher2({nom:"test",prenom:"edd"})).toMatch('Please provide nom/prenom/annee');

 });