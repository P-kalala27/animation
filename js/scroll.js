const boxes = document.querySelectorAll('.box')

//ajoute des nouvement scroll
window.addEventListener('scroll', checkBoxes)

checkBoxes()
/**
 * @returns{checkBoxes} fonction pour scroll
 */
function checkBoxes(){
    //prendre la taille de la fenetre diviser
    const lgrfen = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        /**
         * boucle sur le box
         * La Element.getBoundingClientRect()méthode 
         * renvoie un DOMRectobjet fournissant
         *  des informations sur la taille 
         * d'un élément et sa position par
         *  rapport à la fenêtre .
         */
        const lgrTop = box.getBoundingClientRect().top

        if(lgrTop < lgrfen){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}