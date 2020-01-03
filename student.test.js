const {addStudent2} = require('./app/Controller/studentController');
test('Méthode ajouter étudiant', () => {
    expect(addStudent2({nom:"test",prenom:"edd",annee:"2018"})).toMatch(JSON.stringify({nom:"test",prenom:"edd",annee:"2018"}));
    expect(addStudent2({nom:"test",prenom:"edd"})).toMatch('Please provide nom/prenom/annee');

 });