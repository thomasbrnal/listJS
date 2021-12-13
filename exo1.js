const usersList = [
    {id: 1, prenom: "Jonathan", age: 40, role: 'utilisateur'},
    {id: 2, prenom: "Florence", age: 18, role: 'administrateur'},
    {id: 3, prenom: "Morgane", age: 20, role: 'utilisateur'},
    {id: 4, prenom: "Rodolphe", age: 30, role: 'utilisateur'},]

let list = document.getElementById("userList");
usersList.map(user => {
    // je crée une variable à chaque tour de boucle 
    // qui sera un nouvel element html ol (liste ordonnée)
    let newOl = document.createElement("ol");
    // je crée une condition pour varier les couleurs selon le role
    if (user.role == "administrateur"){
        newOl.style.color = "red";
    } else {
        newOl.style.color = "blue";
    }
    // j'ajoute le text à l'élément crée avec un template string
    newOl.textContent = 
        `ID: ${user.id};
        Prénom: ${user.prenom};
        Age: ${user.age};
        Role: ${user.role}`;
    // enfin j'ajoute cet élément à la variable qui fait appelle à la div.
    list.appendChild(newOl);
    newOl.addEventListener('mouseenter', event => {
        newOl.style.backgroundColor = "lightgray";
    });
    newOl.addEventListener('mouseleave', event => {
        newOl.style.backgroundColor = "white";
    });
    // je crée mon bouton
let btSupprimer = document.createElement("input");// 3.4
// je lui donne ses attributs
btSupprimer.setAttribute('type', "button");//3.4
btSupprimer.setAttribute('value', "Supprimer");// 3.4
//je pousse le bouton sur la ligne
newOl.appendChild(btSupprimer); // 3.4

btSupprimer.addEventListener('click', event => { // 3.4
    list.removeChild(newOl); //3.4
}); //3.4
});


document.getElementById("create")
    .addEventListener("click", function(event) {
    event.preventDefault();
    
    let nvxP =document.getElementById("create").click();
    //ecoute du clic sur creér
    let s = usersList.id;
    for(s = 4; s < 100 ; s++){
        let nvxR = document.getElementById("C").innerHTML;
    }
    //ajouter +1 pour id
        let nvxP = document.getElementById("forPrenom").innerHTML;
        let nvxA = document.getElementById("forAge").innerHTML;
    //inserer  
    document.getElementById("forPrenom").innerHTML = "";
    document.getElementById("forAge")})
    //remise a 0