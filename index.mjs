import Employe from './Employe.js';

let form = document.getElementById('formulaire');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let matricule = e.target.elements.matricule.value
    let nom = e.target.elements.nom.value
    let prenom = e.target.elements.prenom.value
    let naissance = e.target.elements.naissance.value
    let embauche = e.target.elements.embauche.value
    let salaire = e.target.elements.salaire.value

    //form.reset();
    let employe = new Employe(matricule, nom, prenom, naissance, embauche, salaire);
    document.getElementById('affichage').innerHTML = ''
    employe.afficherEmploye('affichage');
})


