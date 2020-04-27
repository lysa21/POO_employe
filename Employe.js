// Définir les propriétés et méthodes d’une classe
// Définir des constructeurs
// Créer une instance de classe
// Accéder par les accesseurs aux propriétés en lecture et écriture d’un objet
// Appliquer des méthodes
// Travail à faire:
// Définir une classe Employé caractérisée par les attributs : Matricule, Nom, Prénom, DateNaissance, DateEmbauche, Salaire.
// Définir à l’aide des propriétés les méthodes d’accès aux différents attributs de la classe.
// Définir un constructeur permettant d’initialiser les attributs de la méthode par des valeurs saisies par l’utilisateur.
// Ajouter à la classe la méthode Age( ) qui retourne l’âge de l’employé.
// Ajouter à la classe la méthode Anciennete( ) qui retourne le nombre d’années d’ancienneté de l’employé.
// Ajouter à la classe la méthode AugmentationDuSalaire( ) qui augmente le salaire de l’employé en prenant en considération l’ancienneté.
//           Si Ancienneté < 5 ans, alors on ajoute 2%. - Si Ancienneté < 10 ans, alors on ajoute 5%. - Sinon, on ajoute 10%.

// Ajouter la méthode AfficherEmployé() qui affiche les informations de l’employé comme suit :
//            - Matricule : […]

//            - Nom complet : [NOM Prénom]

//            - Age : […]

//           - Ancienneté : […]

//            - Salaire : […]

//       Le nom doit être affiché en majuscule. Pour le prénom, la première lettre doit être en majuscule, les autres en minuscule.

// Ecrire un programme de test pour la classe Employé.

export default class Employe {


  // Private attributes -> _ underscore is a convention in es6
  _matricule;
  _nom;
  _prenom;
  _dateNaissance;
  _dateEmbauche;
  _salaire;

  //constructeur whith parameters 
  constructor(matricule, nom, prenom, dateNaissance, dateEmbauche, salaire) {
    this._matricule = matricule;
    this._nom = nom;
    this._prenom = prenom;
    this._dateNaissance = dateNaissance;
    this._dateEmbauche = dateEmbauche;
    this.salaire = salaire;
  }

  // Getter and Setter for call attributes or set attributs of instances of class

  get matricule() {
    return this._matricule;
  }

  set matricule(number) {
    this._matricule = number;
  }

  get nom() {
    return this._nom.toUpperCase();
  }

  set nom(nom) {
    this._nom = nom;
  }

  get prenom() {
    if (!this._prenom)
      return '';
    return this._prenom[0].toUpperCase() + this._prenom.slice(1);
  }

  set prenom(prenom) {
    this._prenom = prenom;
  }

  get dateNaissance() {
    return this._dateNaissance;
  }

  set dateNaissance(date) {
    this._dateNaissance = date;
  }

  get dateEmbauche() {
    return this._dateEmbauche;
  }

  set dateEmbauche(date) {
    this._dateEmbauche = date;
  }

  get salaire() {
    this._augmenterSalaireByAnciennete()
    return this._salaire;
  }

  set salaire(salaire) {
    this._salaire = parseFloat(salaire);
  }

  get age() {
    return this._calculeYears(this._dateNaissance);
  }

  get anciennete() {
    return this._calculeYears(this._dateEmbauche);
  }

  _augmenterSalaireByAnciennete() {
    console.log(this._salaire)
    if (this.anciennete < 5) {
      this._salaire += (2 / 100) * this._salaire;
      console.log(this._salaire)

    } else if (this.anciennete < 10) {
      this._salaire += (5 / 100) * this._salaire;
    } else {
      this._salaire += (10 / 100) * this._salaire;
    }
    console.log(this._salaire)
  }

  _calculeYears(dateString) {
    var today = new Date();
    var date = new Date(dateString);
    var years = today.getFullYear() - date.getFullYear();
    var m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      years--;
    }
    return years;
  }

  afficherEmploye(div) {
    let affichage = document.getElementById(div);
    affichage.innerHTML = (`<div>
    <p>Matricule: [${this.matricule}]</p>
    <p>Nom complet : [${this.nom} ${this.prenom}]</p>
    <p>Age : [${this.age}]</p>
    <p>Ancienneté : [${this.anciennete}]</p>
    <p>Salaire : [${this.salaire}]</p>
    </div>`);
  }
}
