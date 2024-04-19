import projImg1 from '../assets/img/whey_protein.avif'
import projImg2 from '../assets/img/gainMass.png'
import projImg3 from '../assets/img/bcaa.png'
import projImg4 from '../assets/img/proteinVeg.png'
import projImg6 from '../assets/img/postWorkout.png'
import projImg7 from '../assets/img/recoveryShake.png'
import projImg8 from '../assets/img/superPost.webp'

import shopCart from '../assets/img/shopping-cart.png'

const supplements2 = [

        {
            nume: "Whey Protein Vanilla",
            prodID: "56",
            numar_serviri: "40",
            cantitate: "1 kg",
            pret: "34.99",
            descriere: "100% concentrat proteic din zer premium. Contribuie la cresterea si mentinerea masei musculare",
            imgUrl: projImg1,
            imgCart: shopCart,
            countCart: 0,
        },
        {
            nume: "Mutant Mass PVL",
            prodID: "61",
            numar_serviri: "50",
            cantitate: "6800 g",            
            pret: "77.99",
            descriere: "Contine o proportie ridicata de carbohidrati cu absorbtie rapida, din concentrat de protein din zer si matrice proteica",
            imgUrl: projImg2,
            imgCart: shopCart,
        },
        
        {
            nume: "Super Post Human",
            prodID: "66",
            numar_serviri: "77",
            cantitate: "1000 g",
            pret: "59.99",
            descriere: "SuperHuman Post este ultimatum in cresterea masei musculare, in volum, marime si putere. Mai mult de creatina",
            imgUrl: projImg8,
            imgCart: shopCart,
        }, 
        {
            nume: "BCAA Supplement",
            prodID: "62",
            numar_serviri: "70",
            cantitate: "600 g",
            pret: "13.99",
            descriere: "Compozitie echilibrata in aminoacizi BCAA cristalini (Leucina, Valina, Izoleucina), imbogatita cu vitamina B6",
            imgUrl: projImg3,
            imgCart: shopCart,
        },
        {
            nume: "Vegan Protein Green",
            prodID: "63",
            numar_serviri: "60",
            cantitate: "750 g",
            pret: "15.99",
            descriere: "Proteina naturala din extract de plante, legume si fructe. Aport excelent de proteine pentru cei care nu consuma produse animale",
            imgUrl: projImg4,
            imgCart: shopCart,
        },
        {
            nume: "PostWorkout Fruits",
            prodID: "65",
            numar_serviri: "73",
            cantitate: "900g",
            pret: "40.99",
            descriere: "POST WORKOUT este plin de aminoacizi si alte substante nutritive de care corpul tau are nevoie pentru o recuperare rapida",
            imgUrl: projImg6,
            imgCart: shopCart,
        },
        {
            nume: "Recovery Shake",
            prodID: "69",
            numar_serviri: "60",
            cantitate: "750 g",
            pret: "26.99",
            descriere: "Combinatia optima dintre proteine si carbohidrati asigura absorbtia rapida a carbohidratilor in muschi, ceea ce ajuta refacerea",
            imgUrl: projImg7,
            imgCart: shopCart,
        }

    ]


    export default supplements2;