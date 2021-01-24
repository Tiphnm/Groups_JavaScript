//Rentrer mes noms
var inputName = document.querySelector("#inputname")

// Mes variables
listOfName = []
var persPerGroup = 2; 

function liststored(){
    if (localStorage.getItem("list") === null) {
        listOfName = []
    }
    else {
        listOfName = localStorage.getItem("list").split(",")
        document.getElementById("showinput").innerText = listOfName
    }
}

liststored()

//Rajouter un bouton clear = removeIteam("list")

//Rajouter mes input name dans ma liste de nom 
document.querySelector("#add").addEventListener("click", function()
{
    let myName = document.querySelector("#inputname").value ;
    console.log(myName);
    listOfName.push(myName);
    localStorage.setItem("list", listOfName)
   console.log(listOfName);
   document.getElementById("showinput").innerText = listOfName; //Regarder comment reformater;
})

/*document.querySelector("#creategroup").addEventListener("click", function(){
    }
    document.getElementById("showgroup").innerText = createGroup(listOfName,persPerGroup);
})
*/

//console.log(listOfName)

//
/*document.querySelector("#add").addEventListener("click", function (event){
    add(inputName.value)
    inputName.value = ""
    //console.log(listOfName)
})*/

/*const nbrOfPers = document.querySelector("creategroup");
    nbrOfPers.addEventListener("input", function(event){
        nbrOfPers.value = event.target.value
        console.log(nbrOfPers.value)
})

const createGroup = document.querySelector("#creategroup")
createGroup.addEventListener("click", function (event){
const group = createGroup(listOfName, persPerGroup)
nbrOfPers.value = ""
const showGroup = document.querySelector("#showgroup")
showGroups.insertAdjacentHTML("beforeend", "<div>" + group+ "</div><br>")

})*/
const shuffle = (listOfName) => [...listOfName].sort(() => Math.random() - 0.5);

function createGroup(listOfName,persPerGroup){
    let minigroup = [];
    let names = shuffle(listOfName);
    for (let i = 0; i < names.length; i +=persPerGroup){
    minigroup.push(names.slice(i , i+persPerGroup)); //.join("&") + "\n";
    }
    console.log(minigroup);
    return minigroup
}

document.querySelector("#creategroup").addEventListener("click", function (){
createGroup(listOfName, persPerGroup)
var groups = createGroup(listOfName, persPerGroup)
console.log(groups)
document.querySelector("#showgroup").innerText = groups;
})

/* Tu t'es arrêter au moment ou tu veux printer ta fonctino dans ton HTML mais ca marche pas : null is not an object*/