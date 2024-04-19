import projImg1 from '../assets/img/dumbbels.png'
import projImg2 from '../assets/img/kittDumb.webp'
import projImg3 from '../assets/img/disk.png'
import projImg4 from '../assets/img/vest.png'
import projImg5 from '../assets/img/kettlebell.png'
import projImg6 from '../assets/img/curl.webp'

import shopCart from '../assets/img/shopping-cart.png'

const echipamente = [
        {
            nume: "Set gantere de fier",
            prodID: "18",
            numar_serviri: "2",
            cantitate: "10 kg",
            pret: "9.99",
            descriere: "Set de gantere perfect pentru antrenamentul de acasa. Ganterele nu sunt reglabile, greutatea este nemodificabila",
            imgUrl: projImg1,
            imgCart: shopCart,
        }, 
        {
            nume: "Kit gantere bodybuilding",   
            prodID: "19",
            numar_serviri: "18",
            cantitate: "32 kg",     
            pret: "27.99",
            descriere: "Set de gantere reglabile, perfecte pentru antrenamente complete de biceps, triceps, piept si spate, de acasa",
            imgUrl: projImg2,
            imgCart: shopCart,
        },
        {
            nume: "Discuri bodybuilding",
            prodID: "20",
            numar_serviri: "1",
            cantitate: "2.5 kg",
            pret: "4.99",
            descriere: "Discuri perfecte pentru a va completa kitul de gantere, de dimensiuni si greutati diferite, din material de plumb",
            imgUrl: projImg3,
            imgCart: shopCart,
        },
        {
            nume: "Vesta fitness greutati",
            prodID: "21",
            numar_serviri: "1",
            cantitate: "15 kg",
            pret: "22.99",
            descriere: "Vesta cu greutati ofera o dificultate in plus pentru executarea exercitiilor fizice, ajutand la cresterea masei musculare",
            imgUrl: projImg4,
            imgCart: shopCart,
        },
        {
            nume: "Gantera kettlebell",
            prodID: "22",
            numar_serviri: "1",
            cantitate: "40 kg",
            pret: "33.49",
            descriere: "Folosita in special la exercitiile de squat, gantera kettleball este potrivita celor ce vor sa adauge o greutate in plus",
            imgUrl: projImg5,
            imgCart: shopCart,
        },
        {
            nume: "Bara de curl fitness",
            prodID: "23",
            numar_serviri: "1",
            cantitate: "2.5 kg",
            pret: "8.99",
            descriere: "Folosita pentru exercitiile de biceps, triceps, spate , dar si piept, bara curl este ideala pentru bench press si curl press",
            imgUrl: projImg6,
            imgCart: shopCart,
        }

    ]


    export default echipamente;