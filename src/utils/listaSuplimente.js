import projImg1 from '../assets/img/PreWorkout.png'
import projImg2 from '../assets/img/creatine.webp'
import projImg3 from '../assets/img/testoAlpha.webp'
import projImg4 from '../assets/img/Multivitamins.webp'
import projImg5 from '../assets/img/seriousMass.webp'
import projImg6 from '../assets/img/goldWhey.png'

import shopCart from '../assets/img/shopping-cart.png'

const supplements = [
        {
            nume: "PreWorkout Xtreme Pump",
            prodID: "54",
            numar_serviri: "25",
            cantitate: "600 g",
            pret: "19.99",
            descriere: "Aduce energie si concentrare. Perfect pentru a atinge potentialul maxim in cadrul antrenamentelor de lunga durata, intensitate sporita extra",
            imgUrl: projImg1,
            imgCart: shopCart,
            countCart: 0,
        }, 
        {
            nume: "AlphaMale TestoBooster",
            prodID: "60",
            numar_serviri: "90",
            cantitate: "180 g",
            pret: "16.99",
            descriere: "Ajuta la mentinerea nivelului optim de testosteron din sange. Este necesar pentru sanatatea barbatilor si bun functionare a organismului",
            imgUrl: projImg3,
            imgCart: shopCart,
        }, 
        {
            nume: "Multivitamine Men",
            prodID: "57",
            numar_serviri: "60",
            cantitate: "200 g",
            pret: "7.99",
            descriere: "Cel mai bun supliment de vitamine la concursul Supplement Awards. Este un supliment nutritiv cu vitamine si minerale esentiale, aminoacizi si extracte de plante",
            imgUrl: projImg4,
            imgCart: shopCart,
            countCart: 0,
        },
        {
            nume: "Serious Mass Gainer",
            prodID: "58",
            numar_serviri: "8",
            cantitate: "2.7 kg",
            pret: "22.49",
            descriere: "Cel mai bun gainer al anului 2011, 2012, 2013 la concursul Supplement Awards. Are rolul de a creste valoarea calorica a nutritiei, aducand un aport important de proteine si carbohidrati de calitate",
            imgUrl: projImg5,
            imgCart: shopCart,
            countCart: 0,
        },
        {
            nume: "Whey Gold Standard",
            prodID: "59",
            numar_serviri: "73",
            cantitate: "700g",
            pret: "36.99",
            descriere: "Contine o combinatie functionala de izolat, concentrat si hidrolizat din zer. Are un spectru de aminoacizi benefic, o aroma echilibrata gustoasa si un aport mare de proteine esentiale",
            imgUrl: projImg6,
            imgCart: shopCart,
            countCart: 0,
        }

    ]


    export default supplements;