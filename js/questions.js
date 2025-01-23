const questions = [
    { // 1
        question: "Hvor skal brus-flasker kastes?",
        image: "img/coke.png",
        correct: "Pant",
        opt1: "Papp og Papir",
        opt2: "Plastikk",
        opt3: "Glass og Metall",
        tip: "ikke prøv å pant glass flasker, det er ikke en god idè"
    },
    { // 2
        question: "Hva kan man gjøre med plastposer?",
        image: "img/plastic_bag.png",
        correct: "Bruke de igjen",
        opt1: "Ta den på hodet",
        opt2: "Kaste i plastsøppel",
        opt3: "Papp og Papir",
        tip: "Eller bruk handlenett!"
    },
    { // 3
        question: "Hvor skal bananer kastes?",
        image: "img/banana.png",
        correct: "Matavfall",
        opt1: "Farlig avfall",
        opt2: "Restavfall",
        opt3: "Elektronisk Avfall",
        tip: "Vær forsiktig med Bananskall.  De er veldig glatte."
    },
    { // 4
        question: "Hvor skal appelsiner kastes?",
        image: "img/mandarine.png",
        correct: "Matavfall",
        opt1: "Glass og Metall",
        opt2: "Bruk den igjen",
        opt3: "Farlig avfall",
        tip: "Apple, Hey Apple! Appelsiner skal kastes i Matavfall."
    },
    { // 5
        question: "Hvor skal M&M's kastes?",
        image: "img/mnm.png",
        correct: "I munnen din",
        opt1: "Matavfall",
        opt2: "Farlig avfall",
        opt3: "Plastikk",
        tip: "M&Ms har en veldig lang holdbarhetstid. De kan være gode i flere år."
    },
    { // 6
        question: "Hvor skal sokker kastes?",
        image: "img/sock.png",
        correct: "Klær og Tekstiler",
        opt1: "Glass og Metall",
        opt2: "Ikke kastes",
        opt3: "I munnen din",
        tip: "Klær skal ikke kastes i Restavfall, men i Brukbare / Ødelagte Klær og Tekstiler."
    },
    { // 7
        question: "Hvor skal lyspærer kastes?",
        image: "img/lightbulb.png",
        correct: "Farlig avfall",
        opt1: "Elektronisk Avfall",
        opt2: "Glass og Metall",
        opt3: "Matavfall",
        tip: "Lyspærer å kastes I farlig avfall siden gamle lyspærer inneholder argon gass, som ikke er farlig."
    },
    { // 8
        question: "Hvor skal en kjevle kastes?",
        image: "img/rollingpin.png",
        correct: "Treverk",
        opt1: "Restavfall",
        opt2: "Matavfall",
        opt3: "Glass og Metall",
        tip: "Ikke slå noen du bryr deg om med en kjevle. Det er en veldig dårlig ide."
    },
    { // 9
        question: "Hvor skal hundeposer kastes?",
        image: "img/poop.png",
        correct: "Restavfall",
        opt1: "Matavfall",
        opt2: "Elektronisk Avfall",
        opt3: "Farlig avfall",
        tip: "Ikke vær lat, plukk opp posene etter bruk!"
    },
    { // 10
        question: "Hvor skal svamper kastes?",
        image: "img/sponge.png",
        correct: "Restavfall",
        opt1: "Matavfall",
        opt2: "Papp og Papir",
        opt3: "Farlig avfall",
        tip: "Hvis du tror svampen din heter Bob, tar du feil. Den heter faktisk Patrick."
    },
    { // 11
        question: "Hvor skal bukser kastes?",
        image: "img/pant.png",
        correct: "Klær og Tekstiler",
        opt1: "I munnen din",
        opt2: "Elektronisk Avfall",
        opt3: "Glass og Metall",
        tip: "Klær skal ikke kastes i Restavfall, men i Brukbare / Ødelagte Klær og Tekstiler."
    },
    { // 12
        question: "Hvor skal kalkulatorer kastes?",
        image: "img/calc.png",
        correct: "Elektronisk Avfall",
        opt1: "Glass og Metall",
        opt2: "Farlig avfall",
        opt3: "Plastikk",
        tip: "En kalkulator kan inneholde verdifulle materialer som kan brukes om igjen. Kan også kjøre DOOM."
    },
    { // 13
        question: "Hvor skal AA-batterier kastes?",
        image: "img/aa.png",
        correct: "Farlig avfall",
        opt1: "Restavfall",
        opt2: "Matavfall",
        opt3: "Papp og Papir",
        tip: "Batterier er laget av verdifull materialer som kan gjenbrukes. De er også brannfarlige."
    },
    { // 14
        question: "Hvor skal basketballer kastes?",
        image: "img/balls.png",
        correct: "I kurven",
        opt1: "Matavfall",
        opt2: "Elektronisk Avfall",
        opt3: "Farlig avfall",
        tip: "Basketballer skal kastes i Restavfall, ikke Plast! Eller I kurven, det funker også."
    },
    { // 15
        question: "Hvor skal gensere kastes?",
        image: "img/uglyshirt.png",
        correct: "Klær og Tekstiler",
        opt1: "Matavfall",
        opt2: "Elektronisk Avfall",
        opt3: "Farlig avfall",
        tip: "Klær skal ikke kastes i Restavfall, men i Brukbare / Ødelagte Klær og Tekstiler."
    },
    { // 16
        question: "Hvor skal kamera kastes?",
        image: "img/phas.png",
        correct: "Elektronisk Avfall",
        opt1: "Farlig avfall",
        opt2: "Restavfall",
        opt3: "Papp og Papir",
        tip: "Kameraer inneholder mange verdifulle deler. Disse kan bli brukt om igjen."
    },
    { // 17
        question: "Hvor skal mus kastes?",
        image: "img/imouse.png",
        correct: "Elektronisk Avfall",
        opt1: "Farlig avfall",
        opt2: "Matavfall",
        opt3: "Restavfall",
        tip: "Ikke kast levende mus, bare datamus."
    },
    { // 18
        question: "Hva kan man gjøre med gamle bøker?",
        image: "img/nothebible.png",
        correct: "Selge / Gi bort",
        opt1: "Brenne",
        opt2: "Spis den",
        opt3: "Kaste",
        tip: "Bøker kan leve i flere århundrer hvis de er behandlet riktig!"
    },
    { // 19
        question: "Hva kan man gjøre med gamle møbler?",
        image: "img/sneako.png",
        correct: "Selge / Gi bort",
        opt1: "Brenne",
        opt2: "Spis den",
        opt3: "Kaste",
        tip: "Noen er alltid på utkikk etter billige og brukte møbler!"
    },
    { // 20
        question: "Hvor skal man kaste glanset gavepapir?",
        image: "img/paper.png",
        correct: "Restavfall",
        opt1: "Papp og Papir",
        opt2: "Matavfall",
        opt3: "Plastikk",
        tip: "Glanset gavepapir inneholder store menger leire og fargestoffer og lite papirfiber."
    },
    { // 20
        question: "Hvor skal sjokolade melk kartonger kastes?",
        image: "img/milkwithchunks.png",
        correct: "Papp og Papir",
        opt1: "Farlig avfall",
        opt2: "Restavfall",
        opt3: "Glass og Metall",
        tip: "Visste du at 7% av voksne amerikanere tror at sjokolademelk kommer fra brune kuer? Det er ca 23.5 millioner mennesker."
    },
    { // 21
        question: "Hvor kaster man en gammel dør?",
        image: "img/doors.png",
        correct: "Impregnert Trevirke",
        opt1: "Farlig avfall",
        opt2: "Hageavfall",
        opt3: "IKEA",
        tip: "Hvor fikk du en dør fra? Hvorfor må du kaste en dør?"
    },
    { // 22
        question: "Hvor kaster du en brukt malepensel?",
        image: "img/paintbrushII.png",
        correct: "Restavfall",
        opt1: "Farlig avfall",
        opt2: "Treverk",
        opt3: "Matavfall",
        tip: "Du må ikke alltid kaste malepensler!"
    },
    { // 23
        question: "Hvor skal vindusviskere kastes?",
        image: "img/wash.png",
        correct: "Restavfall",
        opt1: "Farlig avfall",
        opt2: "Papp og Papir",
        opt3: "Glass og Metall",
        tip: "Visk bort alle problemene dine."
    },
    { // 24
        question: "Hvor skal et ekte juletre kastes?",
        image: "img/preparethyjolliness.png",
        correct: "Hageavfall",
        opt1: "Farlig avfall",
        opt2: "Elektronisk Avfall",
        opt3: "Papp og Papir",
        tip: "God Jul! (Kanskje invester I et falskt juletre.)"
    },
    { // 25
        question: "Hvor kaster man en snøkule?",
        image: "img/lospingvinosmevanamascar.png",
        correct: "Restavfall",
        opt1: "Farlig avfall",
        opt2: "Papp og Papir",
        opt3: "Glass og Metall",
        tip: "Los Pingüinos Me La Van a Mascar"
    },
    { // 26
        question: "Hva gjør man med en tennis ball?",
        image: "img/tengolf.png",
        correct: "Spille Tennis med den",
        opt1: "Kaste den på noen",
        opt2: "Spise den",
        opt3: "Lage et hus av den",
        tip: "Hva elles skulle det vært?"
    },
    { // 27
        question: "Hvor kaster man et keramik krus?",
        image: "img/krus.png",
        correct: "Restavfall",
        opt1: "Farlig avfall",
        opt2: "Matavfall",
        opt3: "Elektronisk Avfall",
        tip: "Pass på å ikke kutt deg på de små keramikk skårene, de er gansker skarpe."
    },
    { // 28
        question: "Hvor kaster man en lampe?",
        image: "img/frisky.png",
        correct: "Elektronisk Avfall",
        opt1: "Farlig avfall",
        opt2: "Papp og Papir",
        opt3: "Restavfall",
        tip: "Du kan også gjemme deg veldig godt med den ;)"
    },
    { // 29
        question: "Hvor kaster man en analog klokke?",
        image: "img/ITFT.png",
        correct: "Elektronisk Avfall",
        opt1: "Farlig avfall",
        opt2: "Matavfall",
        opt3: "Restavfall",
        tip: "Tick Tock!"
    }
    
]
