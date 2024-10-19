// document.getElementById('fileInput').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     const preview = document.getElementById('preview');

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             preview.src = e.target.result;
//             preview.style.display = 'block';
//         };

//         reader.readAsDataURL(file);
//     } else {
//         preview.src = '';
//         preview.style.display = 'none';
//     }
// });


// ========SCRIPT POUR GERER LES NUMEROS DE TELEPHONE ============

function validateInput(event) {
    const input = event.target;
    // Autoriser uniquement les chiffres
    if (event.charCode < 48 || event.charCode > 57) {
        event.preventDefault();
        return false;
    }

    // Limiter à 9 chiffres
    if (input.value.length >= 9) {
        event.preventDefault();
        return false;
    }

    return true;
}

function checkLength(event) {
    const input = event.target;
    if (input.value.length > 9) {
        input.value = input.value.slice(0, 9); // Truncate to 9 characters
    }
}
//=============CheckBox==================
document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('input[name="option"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach((cb) => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });




});


// ======Script slide 1==========

const pages = document.querySelectorAll(".page-form");
const header = document.querySelectorAll("header");
const nombrePages = pages.length;
let pageActive = 1;

window.onload = () => {
     // affiche la première page
    document.querySelector(".page-form").style.display = "initial";

     // On affiche les numéros des page dans le formulaire
     // on parcourt la liste des pages

    pages.forEach( (page, index)=>{
         //On crée l'élément numero de page
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("page-num");
        elementDiv.id ="num"+(index +1);
        if(pageActive === index + 1) {
            elementDiv.classList.add("active")
        }
        elementDiv.innerHTML = index + 1
        console.log(elementDiv);
        document.querySelector("header").appendChild(elementDiv);

    })

    // On manage les Boutons next-btn

    let boutonsNext = document.querySelectorAll(".next-btn");

    let boutonsPrev = document.querySelectorAll(".prev-btn");

        //On fait un for of de de la page pour chaque boutons

        for (let bouton of boutonsNext) {
            bouton.addEventListener("click", nextPage)
        }

        for (let bouton of boutonsPrev) {
            bouton.addEventListener("click", prevPage)
        }




}

/**
 * Fonction next-page
 */
function nextPage() {


//On masque toutes les autres pages
    for (let page of pages) {
        page.style.display = "none";
    }
    //On affiche la page suivante
    this.parentElement.nextElementSibling.style.display="initial";

    //On désactive la page active
    document.querySelector(".active").classList.remove("active");

    //On incrémente pageActive
    pageActive++;

    //On active la nouvelle page
    document.querySelector("#num"+ pageActive).classList.add("active");

}


function prevPage() {


    //On masque toutes les autres pages
    for (let page of pages) {
        page.style.display = "none";
    }
     //On affiche la page suivante
    this.parentElement.previousElementSibling.style.display="initial";

     //On désactive la page active
     document.querySelector(".active").classList.remove("active");


        //On incrémente pageActive
        pageActive--;

          //On active la nouvelle page
         document.querySelector("#num"+ pageActive).classList.add("active");
}











// document.addEventListener('DOMContentLoaded', function(){



// });











// script.js
// document.addEventListener('DOMContentLoaded', function() {
//     let currentPage = 0;
//     const pages = document.querySelectorAll('.form-page');
//     const nextBtns = document.querySelectorAll('.next-btn');
//     const prevBtns = document.querySelectorAll('.prev-btn');

//     // Afficher la première page
//     pages[currentPage].classList.add('active');

//     // Fonction pour aller à la page suivante
//     nextBtns.forEach((btn, index) => {
//       btn.addEventListener('click', function() {
//         pages[currentPage].classList.remove('active');
//         currentPage++;
//         pages[currentPage].classList.add('active');
//       });
//     });

//     // Fonction pour aller à la page précédente
//     prevBtns.forEach((btn, index) => {
//       btn.addEventListener('click', function() {
//         pages[currentPage].classList.remove('active');
//         currentPage--;
//         pages[currentPage].classList.add('active');
//       });
//     });

//     // Gestion de la soumission du formulaire
//     document.querySelector('form').addEventListener('submit', function(e) {
//       alert('Formulaire envoyé');
//       e.preventDefault();
//     });
//   });

