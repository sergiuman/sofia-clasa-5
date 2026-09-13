// Baza de date completă cu programa clasei a V-a extrasă din cele 10 manuale ale Sofiei

export const SUBJECTS = [
  {
    id: "biologie",
    title: "Biologie",
    icon: "🧬",
    color: "from-emerald-500 to-teal-700",
    themeColor: "#10b981",
    manualName: "Biologie 5.pdf",
    description: "Descooperă lumea viului, microscopul, celula, plantele, animalele și mediile de viață.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "bio-u1",
        title: "Unitatea 1: Laboratorul de Biologie și Celula",
        topics: [
          "Organizarea laboratorului de biologie și reguli de securitate",
          "Instrumente de investigație: microscopul optic și lupa",
          "Structura celulei vegetale și animale (nucleu, membrană, citoplasmă, cloroplaste)",
          "Țesuturi, organe și sisteme de organe"
        ]
      },
      {
        id: "bio-u2",
        title: "Unitatea 2: Viețuitoarele din mediul apropiat",
        topics: [
          "Ecosisteme terestre: Pădurea, Livada, Grădina și Parcul",
          "Ecosisteme acvatice: Baltă, Râu, Lac și Marea Neagră",
          "Plante cultivate și plante spontane",
          "Animale domestice și animale sălbatice din România"
        ]
      },
      {
        id: "bio-u3",
        title: "Unitatea 3: Grupe de viețuitoare",
        topics: [
          "Bacterii și Virusuri (structură și rol în natură)",
          "Regnul Ciuperci (Fungi) și Regnul Protiste (Alge, Amoeba)",
          "Regnul Plante (Mușchi, Ferigi, Gimnosperme, Angiosperme)",
          "Regnul Animal: Nevertebrate (Spongieri, Celenterate, Viermi, Moluște, Artropode)",
          "Regnul Animal: Vertebrate (Pești, Amfibieni, Reptile, Păsări, Mamifere)"
        ]
      },
      {
        id: "bio-u4",
        title: "Unitatea 4: Omul și Mediul Înconjurător",
        topics: [
          "Relații ecologice în natură și lanțuri trofice",
          "Impactul omului asupra naturii și poluarea",
          "Ocrotirea mediului și specii protejate în România"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-bio-1",
        question: "Care este unitatea structurală și funcțională a tuturor organismelor vii?",
        options: ["Atomul", "Celula", "Țesutul", "Organul"],
        correct: 1,
        explanation: "Toate viețuitoarele sunt alcătuite din una sau mai multe celule."
      },
      {
        id: "q-bio-2",
        question: "Ce organit celular este prezent în celula vegetală și realizează fotosinteza?",
        options: ["Nucleul", "Mitocondria", "Cloroplastul", "Membrana"],
        correct: 2,
        explanation: "Cloroplastele conțin clorofilă și captează lumina Soarelui pentru fotosinteză."
      },
      {
        id: "q-bio-3",
        question: "Care dintre următoarele animale este un VERTEBRAT?",
        options: ["Râma", "Melcul", "Iepurele", "Fluturele"],
        correct: 2,
        explanation: "Iepurele are un schelet osos intern cu coloană vertebrală."
      },
      {
        id: "q-bio-4",
        question: "Din ce regn fac parte algele microscopice și amoebele?",
        options: ["Regnul Fungi", "Regnul Protiste", "Regnul Plante", "Regnul Animal"],
        correct: 1,
        explanation: "Protistele sunt organisme unicelulare sau pluricelulare simple, precum algele și protozoarele."
      }
    ],
    flashcards: [
      { front: "Ce este celula?", back: "Unitatea de bază structurală, funcțională și genetică a tuturor organismelor vii." },
      { front: "Componentele celulei vegetale:", back: "Perete celular, membrană, citoplasmă, nucleu, vacuolă mare și cloroplaste." },
      { front: "Ce este fotosinteza?", back: "Procesul prin care plantele verzui produc substanțe hrănitoare folosind lumina soarelui, apa și CO2." },
      { front: "Care sunt cele 5 regnuri ale viețuitoarelor?", back: "Monera (Bacterii), Protista, Fungi (Ciuperci), Plantae (Plante) și Animalia (Animale)." }
    ],
    audioPrompts: [
      "Generează un podcast stil NotebookLM: 'Călătorie microscopică în interiorul unei celule vegetale'.",
      "Înregistrează o explicație audio scurtă pentru 'Cum recunoaștem ciupercile comestibile de cele otrăvitoare'."
    ]
  },
  {
    id: "matematica",
    title: "Matematică",
    icon: "📐",
    color: "from-blue-600 to-indigo-800",
    themeColor: "#3b82f6",
    manualName: "Matematica 5.pdf",
    description: "Operații cu numere naturale, fracții ordinare și zecimale, geometrie și unități de măsură.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "mat-u1",
        title: "Unitatea 1: Operații cu numere naturale",
        topics: [
          "Scrierea și citirea numerelor naturale în sistemul zecimal",
          "Adunarea, scăderea, înmulțirea și împărțirea numerelor naturale",
          "Puterea cu exponent natural, reguli de calcul cu puteri",
          "Ordinea efectuării operațiilor și parantezele"
        ]
      },
      {
        id: "mat-u2",
        title: "Unitatea 2: Metode aritmetice de rezolvare a problemelor",
        topics: [
          "Metoda reducerii la unitate",
          "Metoda figurativă (grafică) - suma și diferența, suma și raportul",
          "Metoda mersului invers",
          "Metoda comparației și eliminării unei necunoscute"
        ]
      },
      {
        id: "mat-u3",
        title: "Unitatea 3: Divizibilitatea numerelor naturale",
        topics: [
          "Notiunea de divizor și multiplu",
          "Criterii de divizibilitate cu 2, 5, 10, 3 și 9",
          "Numere prime și numere compuse",
          "Descompunerea numerelor în factori primi"
        ]
      },
      {
        id: "mat-u4",
        title: "Unitatea 4: Fracții ordinare",
        topics: [
          "Fracții ordinare, fracții subunitare, echiunitare, supraunitare",
          "Fracții echivalente și procente (%)",
          "Amplificarea și simplificarea fracțiilor. Fracții ireductibile",
          "Aducerea fracțiilor la un numitor comun (cmmmc)",
          "Adunarea, scăderea, înmulțirea, împărțirea și puterea fracțiilor"
        ]
      },
      {
        id: "mat-u5",
        title: "Unitatea 5: Fracții zecimale",
        topics: [
          "Scrierea fracțiilor cu numitori puteri ale lui 10 sub formă zecimală",
          "Aproximări, comparare și reprezentare pe axă",
          "Adunarea, scăderea, înmulțirea și împărțirea fracțiilor zecimale",
          "Media aritmetică a două sau mai multor numere",
          "Fracții zecimale periodice (simple și mixte)"
        ]
      },
      {
        id: "mat-u6",
        title: "Unitatea 6: Elemente de geometrie și unități de măsură",
        topics: [
          "Punct, dreaptă, plan, semidreaptă, segment de dreaptă",
          "Unghiuri: definiție, clasificare (ascuțit, drept, obtuz, nul, alungit)",
          "Măsurarea unghiurilor în grade, unghiuri congruente",
          "Unități de măsură pentru lungime, arie (m²), volum (m³) și masă (kg)",
          "Perimetrul și aria pătratului/dreptunghiului, volumul cubului"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-mat-1",
        question: "Cât este 3/4 + 1/4 ?",
        options: ["4/8", "1", "2/4", "3/8"],
        correct: 1,
        explanation: "3/4 + 1/4 = 4/4 = 1 întreg."
      },
      {
        id: "q-mat-2",
        question: "Care dintre următoarele numere este un număr PRIM?",
        options: ["9", "12", "13", "15"],
        correct: 2,
        explanation: "13 are doar doi divizori: 1 și el însuși."
      },
      {
        id: "q-mat-3",
        question: "Care este media aritmetică a numerelor 8, 12 și 16?",
        options: ["10", "12", "14", "36"],
        correct: 1,
        explanation: "ma = (8 + 12 + 16) / 3 = 36 / 3 = 12."
      },
      {
        id: "q-mat-4",
        question: "Un unghi cu măsura de 90 de grade se numește:",
        options: ["Unghi ascuțit", "Unghi drept", "Unghi obtuz", "Unghi alungit"],
        correct: 1,
        explanation: "Unghiul drept are exact 90°."
      }
    ],
    flashcards: [
      { front: "Ce este o fracție supraunitară?", back: "O fracție în care numărătorul este mai mare decât numitorul (ex: 7/3)." },
      { front: "Formula ariei dreptunghiului:", back: "Aria = Lungime × Lățime (A = L × l)." },
      { front: "Care este criteriul de divizibilitate cu 3?", back: "Un număr este divizibil cu 3 dacă suma cifrelor sale se împarte exact la 3." },
      { front: "Formula volumului cubului:", back: "Volum = latura × latura × latura (V = l³)." }
    ],
    audioPrompts: [
      "Podcast NotebookLM: Cum rezolvăm probleme dificile prin metoda figurativă.",
      "Ghid Audio: Trucuri rapide pentru transformarea fracțiilor zecimale în fracții ordinare."
    ]
  },
  {
    id: "romana",
    title: "Limba Română",
    icon: "📖",
    color: "from-rose-500 to-red-700",
    themeColor: "#f43f5e",
    manualName: "Romana 5.pdf",
    description: "Lectură, texte literare și nonliterare, gramatică (substantiv, adjectiv, verb) și comunicare.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "rom-u1",
        title: "Unitatea I: Despre mine. Selfie",
        topics: [
          "Textul literar ('Prietenul meu' de Ioana Pârvulescu)",
          "Trăsăturile textului literar vs. nonliterar",
          "Cuvântul-cheie, tema și planul simplu de idei",
          "Cuvântul și dicționarul. Sinonime și antonime",
          "Câmpul lexical"
        ]
      },
      {
        id: "rom-u2",
        title: "Unitatea II: De-a ce mă joc",
        topics: [
          "Textul narativ literar ('Vizită...' de I.L. Caragiale)",
          "Timp, spațiu, acțiune și caracterizarea personajelor",
          "Planul dezvoltat de idei",
          "Schimburi de replici în dialog și reguli de acces la cuvânt",
          "Substantivul: felul, genul și numărul"
        ]
      },
      {
        id: "rom-u3",
        title: "Unitatea III: Pe strada mea",
        topics: [
          "Textul descriptiv literar ('O stradă cu sentimente' de Ana Blandiana)",
          "Figura de stil: Personificarea",
          "Textul descriptiv nonliterar",
          "Adjectivul: acordul cu substantivul"
        ]
      },
      {
        id: "rom-u4",
        title: "Unitatea IV: Vreau să salvez lumea",
        topics: [
          "Textul narativ mitologic ('Tezeu și Minotaurul' de Florin Bican)",
          "Figura de stil: Comparația",
          "Textul multimodal: Banda desenată",
          "Pronumele personal și posesiunea"
        ]
      },
      {
        id: "rom-u5",
        title: "Unitatea V: Călătoresc prin basme",
        topics: [
          "Basmul popular ('Zâna Munților' cules de Petre Ispirescu)",
          "Cifre magice (3, 7, 12), ajutoare și obiecte fermecate",
          "Verbul: timpul (trecut, prezent, viitor), persoana și numărul"
        ]
      },
      {
        id: "rom-u6",
        title: "Unitatea VI: Din carte spre departe",
        topics: [
          "Jurnalul de călătorie și textul narativ nonliterar",
          "Istoria cărții: de la tăblițele de lut la cartea digitală",
          "Sintaxa propoziției: Subiectul și Predicatul"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-rom-1",
        question: "Ce figură de stil atribuie însușiri omenești lucrurilor sau obiectelor?",
        options: ["Comparația", "Personificarea", "Enumerația", "Metaphora"],
        correct: 1,
        explanation: "Personificarea dă viață obiectelor (ex: 'Soarele zâmbește')."
      },
      {
        id: "q-rom-2",
        question: "Care este antonimul cuvântului 'generos'?",
        options: ["Darnic", "Zgârcit", "Bland", "Vesel"],
        correct: 1,
        explanation: "Zgârcit este antonimul (sensul opus) pentru generos."
      },
      {
        id: "q-rom-3",
        question: "Identifică adjectivul din propoziția: 'Sofia citește o carte interesantă.'",
        options: ["Sofia", "citește", "carte", "interesantă"],
        correct: 3,
        explanation: "'interesantă' exprimă o însușire a substantivului 'carte'."
      },
      {
        id: "q-rom-4",
        question: "Cine a cules basmul popular 'Zâna Munților'?",
        options: ["Ion Creangă", "Petre Ispirescu", "Mihai Eminescu", "Ioana Pârvulescu"],
        correct: 1,
        explanation: "Petre Ispirescu este cel mai cunoscut culegător de basme populare românești."
      }
    ],
    flashcards: [
      { front: "Ce este sinonimul?", back: "Cuvânt cu formă diferită dar sens identic sau foarte asemănător (ex: zăpadă = omăt)." },
      { front: "Părțile principale de propoziție:", back: "Subiectul (Cine face acțiunea?) și Predicatul (Ce face subiectul?)." },
      { front: "Trăsăturile specifice unui basm:", back: "Lupta dintre Bine și Rău, cifre magice (3, 7), personaje fantastice, final fericit." }
    ],
    audioPrompts: [
      "Podcast Română: Povestea schiței Vizită... de I.L. Caragiale repovestită pe scurt.",
      "Lecție audio: Cum recunoști părțile de vorbire flexibile (substantiv, adjectiv, verb)."
    ]
  },
  {
    id: "istorie",
    title: "Istorie",
    icon: "🏛️",
    color: "from-amber-600 to-orange-800",
    themeColor: "#d97706",
    manualName: "Istorie 5.pdf",
    description: "Călătorie de la Preistorie, Orientul Antic, Grecia, Roma Antică până la Geto-Daci.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "ist-u1",
        title: "Unitatea I: Trecutul și izvoarele istorice",
        topics: [
          "Ce este istoria? Izvoare scrise (documente, hărți) și nescrise (unelte, armuri, monezi)",
          "Măsurarea timpului istoric: secolul, mileniul, era noastră (î.Hr. / d.Hr.)"
        ]
      },
      {
        id: "ist-u2",
        title: "Unitatea II: Preistoria",
        topics: [
          "Epoca Paleolitică: viața oamenilor culegători și vânători, descoperirea focului",
          "Epoca Neolitică: apariția agriculturii, îmblânzirea animalelor și prima ceramică",
          "Epoca Metalelor: unelte și arme din bronz și fier"
        ]
      },
      {
        id: "ist-u3",
        title: "Unitatea III: Orientul Antic",
        topics: [
          "Mesopotamia (Tigru și Eufrat), Codul lui Hammurabi, zigguratele",
          "Egiptul Antic (Fluviul Nil), Faraonii, Piramidele și scrierea hieroglifică",
          "Inventarea scrisului (cuneiform, hieroglife, alfabetul fenician)"
        ]
      },
      {
        id: "ist-u4",
        title: "Unitatea IV & V: Grecia Antică și Lumea Romană",
        topics: [
          "Grecia Antică: Polisul (Atena - democrația, Sparta - armata), Jocurile Olimpice",
          "Mitologia greacă: Zeii din Olimp (Zeus, Atena, Poseidon)",
          "Roma Antică: Legendara fondare (Romulus și Remus), Republica și Imperiul Roman",
          "Legiunile romane, Colosseumul, gladiatorii și monumentele romane"
        ]
      },
      {
        id: "ist-u5",
        title: "Unitatea VI: Geto-Dacii și Dacia",
        topics: [
          "Cine au fost geto-dacii? Religia (Zalmoxis) și ocupațiile lor",
          "Regele Burebista și unificarea triburilor dace",
          "Regele Decebal și războaiele daco-romane cu împăratul Traian"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-ist-1",
        question: "Pe malul cărui fluviu s-a dezvoltat civilizația Egiptului Antic?",
        options: ["Dunărea", "Nilul", "Tigru", "Rinul"],
        correct: 1,
        explanation: "Egiptul este numit 'Darul Nilului' datorită recoltelor bogate aduse de revărsările fluviului."
      },
      {
        id: "q-ist-2",
        question: "Cine au fost cei doi mari regi ai dacilor?",
        options: ["Alexandru Cel Mare și Cezar", "Burebista și Decebal", "Romulus și Remus", "Traian și Pericle"],
        correct: 1,
        explanation: "Burebista a creat primul stat dac unificat, iar Decebal a fost ultimul rege dac."
      },
      {
        id: "q-ist-3",
        question: "Unde au avut loc primele Jocuri Olimpice din istorie?",
        options: ["La Roma", "La Atena/Olympia în Grecia Antică", "La Cairo", "La Paris"],
        correct: 1,
        explanation: "Jocurile Olimpice antice au fost organizate în Grecia Antică în onoarea zeului Zeus."
      }
    ],
    flashcards: [
      { front: "Ce reprezintă secolul?", back: "O perioadă istorică de 100 de ani (ex: anii 1901-2000 = Secolul XX)." },
      { front: "Care este primul cod de legi scrise din istorie?", back: "Codul lui Hammurabi din Mesopotamia (regula 'ochi pentru ochi')." },
      { front: "Ce este un Polis grec?", back: "Un oraș-stat independent din Grecia Antică cu legi și armată proprie (ex: Atena, Sparta)." }
    ],
    audioPrompts: [
      "Podcast Istorie NotebookLM: Cum trăia un copil în Sparta vs. un copil în Atena Antică.",
      "Storytime Audio ElevenLabs: Legenda fondării Romei de către Romulus și Remus."
    ]
  },
  {
    id: "geografie",
    title: "Geografie",
    icon: "🌍",
    color: "from-sky-500 to-blue-700",
    themeColor: "#0284c7",
    manualName: "Geografie 5.pdf",
    description: "Pământul în Univers, Harta, Continentele, Relief, Climă și Apele terestre.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "geo-u1",
        title: "Unitatea 1: Pământul în Univers",
        topics: [
          "Sistemul Solar: Soarele, cele 8 planete și corpurile cerești",
          "Forma și dimensiunile Pământului",
          "Mișcarea de rotație (în jurul axei - 24 ore -> zi/noapte)",
          "Mișcarea de revoluție (în jurul Soarelui - 365 zile -> anotimpuri)"
        ]
      },
      {
        id: "geo-u2",
        title: "Unitatea 2: Reprezentarea suprafeței Pământului",
        topics: [
          "Globul geografic și Harta geografică",
          "Scara hărții (cum se calculează distanțele reale)",
          "Coordonate geografice: Ecuatorul, Meridienele, Latitudinea și Longitudinea"
        ]
      },
      {
        id: "geo-u3",
        title: "Unitatea 3: Învelișurile Pământului",
        topics: [
          "Litosfera: Scoarța terestră, Plăcile tectonice, Vulcanii și Cutremurele",
          "Marile forme de relief: Munții, Podișurile, Dealurile și Câmpiile",
          "Hidrosfera: Oceanul Planetar (Pacific, Atlantic, Indian, Arctic), Mări, Fluvii și Lacuri",
          "Atmosfera: Vremea, Temperatura aerului, Precipitațiile și Zonele climatice"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-geo-1",
        question: "Care este mișcarea Pământului ce determină alternanța zilelor și a nopților?",
        options: ["Mișcarea de revoluție", "Mișcarea de rotație", "Translația", "Eclipsa"],
        correct: 1,
        explanation: "Rotația în jurul propriei axe durează 24 de ore și creează ziua și noaptea."
      },
      {
        id: "q-geo-2",
        question: "Care este cea mai înaltă formă de relief de pe Pământ?",
        options: ["Podișul", "Câmpia", "Muntele", "Dealul"],
        correct: 2,
        explanation: "Munții sunt cele mai înalte forme de relief (peste 800-1000m altitudine)."
      },
      {
        id: "q-geo-3",
        question: "Linia imaginară ce împarte Pământul în Emisfera Nordică și Emisfera Sudică se numește:",
        options: ["Meridianul Greenwich", "Ecuatorul", "Tropicul Racului", "Polul Nord"],
        correct: 1,
        explanation: "Ecuatorul este paralela de 0° ce taie planeta exact la jumătate."
      }
    ],
    flashcards: [
      { front: "Cele 7 continente ale Pământului:", back: "Europa, Asia, Africa, America de Nord, America de Sud, Australia și Antarctica." },
      { front: "Cele 4 oceane principale:", back: "Oceanul Pacific, Oceanul Atlantic, Oceanul Indian și Oceanul Arctic." },
      { front: "Ce este scara hărții?", back: "Raportul care arată de câte ori au fost reduse distanțele din teren pentru a fi desenate pe hartă." }
    ],
    audioPrompts: [
      "Podcast Geografie: O vizită imaginară prin toate cele 7 continente.",
      "Lecție audio: Cum funcționează un vulcan și de ce au loc cutremurele."
    ]
  },
  {
    id: "informatica",
    title: "Informatică & TIC",
    icon: "💻",
    color: "from-purple-600 to-indigo-900",
    themeColor: "#9333ea",
    manualName: "Informatica 5.pdf",
    description: "Componentele calculatorului, editare de text, algoritmi și creare de jocuri în Scratch.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "inf-u1",
        title: "Unitatea 1: Utilizarea calculatorului",
        topics: [
          "Sistemul de operare (Windows/macOS/Linux), Desktop, Fișiere și Foldere",
          "Structura ierarhică a fișierelor și operații de bază (copiere, mutare, ștergere)",
          "Siguranța pe Internet și protecția datelor personale"
        ]
      },
      {
        id: "inf-u2",
        title: "Unitatea 2: Componentele calculatorului",
        topics: [
          "Hardware: Unitatea centrală (CPU, RAM, HDD/SSD)",
          "Dispozitive de intrare (Tastatură, Mouse, Microfon, Scanner)",
          "Dispozitive de ieșire (Monitor, Imprimantă, Difuzoare)",
          "Software: Programe de aplicație și editoare de text"
        ]
      },
      {
        id: "inf-u3",
        title: "Unitatea 3 & 4: Algoritmi și jocuri digitale în Scratch",
        topics: [
          "Notiunea de algoritm: caracteristici (claritate, finitudine, precizie)",
          "Structuri de bază: Secvențială (pas cu pas), Decizională (Dacă... Atunci) și Repetitivă (Cât timp / Repetă)",
          "Programare vizuală în Scratch: Personaje (Sprite), Costume, Scene (Backdrop)",
          "Crearea unui joc interactiv în Scratch cu scor și mișcare din tastatură"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-inf-1",
        question: "Care dintre următoarele este un dispozitiv de INTRARE pentru calculator?",
        options: ["Imprimanta", "Monitorul", "Tastatura", "Difuzorul"],
        correct: 2,
        explanation: "Tastatura introduce date în calculator."
      },
      {
        id: "q-inf-2",
        question: "Ce este Scratch?",
        options: [
          "Un antivirus",
          "Un mediu de programare vizuală cu blocuri colorate creat de MIT",
          "Un joc video gata făcut",
          "O marcă de laptop"
        ],
        correct: 1,
        explanation: "Scratch îi ajută pe copii să învețe programare îmbinând blocuri vizuale de cod."
      },
      {
        id: "q-inf-3",
        question: "Ce numim 'creierul calculatorului', responsabil de procesarea instrucțiunilor?",
        options: ["Hard Disk-ul", "Procesorul (CPU)", "Tastatura", "Monitorul"],
        correct: 1,
        explanation: "CPU (Central Processing Unit) execută toate calculele și comenzile din calculator."
      }
    ],
    flashcards: [
      { front: "Hardware vs. Software:", back: "Hardware = piesele fizice ale calculatorului. Software = programele și sistemul de operare." },
      { front: "Cele 3 structuri fundamentale ale unui algoritm:", back: "Secvența (liniară), Decizia (Dacă-Atunci) și Bucla (Repetarea)." },
      { front: "Regula de aur pentru siguranța pe Internet:", back: "Nu oferi niciodată parola, numele complet, adresa sau școala persoanelor străine online!" }
    ],
    audioPrompts: [
      "Ghid Audio Scratch: Cum programezi o pisică să sară peste obstacoles.",
      "Podcast Tehnologie: Istoria calculatoarelor de la primele mașini uriașe la tablete."
    ]
  },
  {
    id: "tehnologica",
    title: "Educație Tehnologică",
    icon: "⚙️",
    color: "from-cyan-600 to-blue-800",
    themeColor: "#0891b2",
    manualName: "Educatie Tehnologica 5.pdf",
    description: "Materiale, tehnologii curate, alimentație sănătoasă și ecosisteme casnice.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "teh-u1",
        title: "Unitatea 1: Tehnologii și materiale",
        topics: [
          "Materiale lemnoase, celuloză, hârtie și carton",
          "Materiale textile (bumbac, lână, mătase, fibre sintetice)",
          "Materiale plastice, sticlă și metale",
          "Reciclarea deșeurilor și economiile circulare"
        ]
      },
      {
        id: "teh-u2",
        title: "Unitatea 2: Alimentația omului",
        topics: [
          "Grupele de alimente și substanțele nutritive (proteine, glucide, lipide, vitamine)",
          "Piramida alimentară și alcătuirea unui meniu echilibrat",
          "Norme de igienă alimentară și conservarea mâncării"
        ]
      },
      {
        id: "teh-u3",
        title: "Unitatea 3: Locuința și spațiul de trai",
        topics: [
          "Zonele locuinței (odihnă, studiu, gătit)",
          "Economisirea energiei electrice și a apei în casă"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-teh-1",
        question: "Care este rolul principal al reciclării cartonului și hârtiei?",
        options: ["Protejarea pădurilor și economisirea lemnului", "Distrugerea copacilor", "Poluarea solului", "Consumul de apă"],
        correct: 0,
        explanation: "Reciclarea hârtiei salvează milioane de copaci de la tăiere."
      },
      {
        id: "q-teh-2",
        question: "Care din următoarele alimente oferă proteine esențiale pentru creștere?",
        options: ["Bomboanele", "Ouăle, laptele și carnea", "Sucul acidulat", "Chipsurile"],
        correct: 1,
        explanation: "Proteinele din lactate, ouă, carne și leguminoase construiesc mușchii și țesuturile."
      }
    ],
    flashcards: [
      { front: "Piramida alimentară:", back: "Baza = cereale și legume (consum zilnic mare); Vârful = dulciuri și grăsimi (consum ocazional mic)." },
      { front: "Ce sunt fibrele textile naturale?", back: "Fibre provenite de la plante (bumbac, in) sau animale (lână, mătase)." }
    ],
    audioPrompts: [
      "Podcast Ed. Tehnologică: Cum funcționează o fabrică de reciclare a plasticului."
    ]
  },
  {
    id: "plastica",
    title: "Educație Plastică",
    icon: "🎨",
    color: "from-fuchsia-500 to-pink-700",
    themeColor: "#d946ef",
    manualName: "Educatie Plastica 5.pdf",
    description: "Limbajul vizual, culori primare, secundare, calde, reci și compoziții artistice.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "pla-u1",
        title: "Unitatea 1: Elemente de limbaj plastic",
        topics: [
          "Punctul plastic și linia (expresivitate, direcție, grosime)",
          "Forma bidimensională (platā) și tridimensională (volum)",
          "Pata picturală și pata decorativă"
        ]
      },
      {
        id: "pla-u2",
        title: "Unitatea 2: Teoria culorilor",
        topics: [
          "Culorile primare: Roșu, Galben, Albastru",
          "Culorile secundare: Portocaliu (R+G), Verde (G+A), Violet (R+A)",
          "Culori calde (Roșu, Galben, Portocaliu) vs. Culori reci (Albastru, Verde, Violet)",
          "Contrastele cromatice (închis-deschis, cald-rece)"
        ]
      },
      {
        id: "pla-u3",
        title: "Unitatea 3: Tehnici plastice și modelaj",
        topics: [
          "Tehnica acvarelei, tempera și dactilopictura",
          "Modelajul în lut sau plastilină",
          "Compoziția plastică închisă și deschisă"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-pla-1",
        question: "Cum obținem culoarea secundară PORTOCALIU?",
        options: ["Amestecând Roșu cu Albastru", "Amestecând Roșu cu Galben", "Amestecând Galben cu Albastru", "Adăugând alb la roșu"],
        correct: 1,
        explanation: "Roșu amestecat cu Galben dă culoarea Portocaliu."
      },
      {
        id: "q-pla-2",
        question: "Care dintre următoarele este o CULOARE CALDĂ?",
        options: ["Albastru", "Verde", "Roșu", "Violet"],
        correct: 2,
        explanation: "Roșul, galbenul și portocaliul amintesc de foc și soare, fiind culori calde."
      }
    ],
    flashcards: [
      { front: "Cele 3 culori primare (purtătoare de lumină):", back: "Roșu, Galben și Albastru." },
      { front: "Ce este cercul cromatic (Steaua culorilor)?", back: "Diagrama circulară care arată relația dintre culorile primare, secundare și terțiare." }
    ],
    audioPrompts: [
      "Lecție audio: Cum combinăm culorile calde și reci într-o pictură de toamnă."
    ]
  },
  {
    id: "muzicala",
    title: "Educație Muzicală",
    icon: "🎵",
    color: "from-violet-500 to-purple-800",
    themeColor: "#8b5cf6",
    manualName: "Educatie Muzicala 5.pdf",
    description: "Notarea muzicală, portativul, cheia Sol, ritmul și auditive muzicale.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "muz-u1",
        title: "Unitatea 1: Elemente de limbaj muzical",
        topics: [
          "Portativul (5 linii și 4 spații) și bara de măsură",
          "Cheia Sol și notația muzicală (Do, Re, Mi, Fa, Sol, La, Si, Do)",
          "Duratele notelor (Nota întreagă, Doimea, Pătrimea, Optimea)",
          "Pauzele muzicale corespunzătoare duratelor"
        ]
      },
      {
        id: "muz-u2",
        title: "Unitatea 2: Interpretarea și genurile muzicale",
        topics: [
          "Ritmul și tactarea măsurilor de 2/4 și 3/4",
          "Cântece din folclorul românesc și colinde",
          "Instrumentele muzicale (Familia de coarde, suflat și percuție)",
          "Orchestra simfonică și dirijorul"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-muz-1",
        question: "Câte linii paralele are un portativ muzical?",
        options: ["4 linii", "5 linii", "6 linii", "3 linii"],
        correct: 1,
        explanation: "Portativul are 5 linii orizontale și 4 spații între ele."
      },
      {
        id: "q-muz-2",
        question: "Care dintre următoarele instrumente face parte din familia instrumentelor de SUFLAT?",
        options: ["Vioara", "Flautul", "Toba", "Pianul"],
        correct: 1,
        explanation: "Flautul produce sunet prin suflarea aerului într-un tub."
      }
    ],
    flashcards: [
      { front: "Rolul Cheii Sol:", back: "Fixează nota Sol pe linia a 2-a a portativului și stabilește denumirea celorlalte note." },
      { front: "Cele 7 note muzicale fundamentale:", back: "DO, RE, MI, FA, SOL, LA, SI." }
    ],
    audioPrompts: [
      "Audio explicativ: Ascultă și recunoaște sunetul marilor instrumente din orchestră."
    ]
  },
  {
    id: "consiliere",
    title: "Consiliere și Dezvoltare",
    icon: "🤝",
    color: "from-teal-500 to-emerald-700",
    themeColor: "#14b8a6",
    manualName: "Consiliere 5.pdf",
    description: "Managementul învățării, autocunoaștere, stăpânirea emoțiilor și relații de prietenie.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "con-u1",
        title: "Unitatea I: Autocunoaștere și stil de viață sănătos",
        topics: [
          "Cine sunt eu? Calități, pasiuni și puncte tari",
          "Managementul învățării: cum îmi pregătesc temele și orarul zilnic",
          "Stil de viață echilibrat: somn, mișcare, timp liber fără ecrane"
        ]
      },
      {
        id: "con-u2",
        title: "Unitatea II: Dezvoltare emoțională și socială",
        topics: [
          "Identificarea și exprimarea emoțiilor (bucurie, frică, furie, tristețe)",
          "Gestionarea stresului și a emoțiilor dinaintea unui test la școală",
          "Empatia și ascultarea atentă a prietenilor"
        ]
      },
      {
        id: "con-u3",
        title: "Unitatea III: Comunicare și rezolvarea conflictelor",
        topics: [
          "Comunicarea asertivă (exprimarea opiniei fără violență)",
          "Regulile clasei și cooperarea în echipa de colegi",
          "Prevenirea hărțuirii (bullying) și sprijinul reciproc"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-con-1",
        question: "Care este o tehnică eficientă pentru pregătirea ghiozdanului și a temelor?",
        options: [
          "Lăsarea temelor pe dimineața înainte de școală",
          "Realizarea unui orar zilnic fix cu pauze scurte",
          "Învățatul 5 ore fără pauze",
          "Privitul la TV în timp ce scrii"
        ],
        correct: 1,
        explanation: "Un orar zilnic cu pauze menține concentrarea și scade oboseala."
      },
      {
        id: "q-con-2",
        question: "Ce înseamnă comunicarea asertivă?",
        options: [
          "Să țipi la celălalt pentru a câștiga",
          "Să-ți exprimi ideile și emoțiile cu respect, fără a-i jigni pe ceilalți",
          "Să taci mereu și să accepti totul",
          "Să nu vorbești cu nimeni"
        ],
        correct: 1,
        explanation: "Asertivitatea înseamnă să spui ferm ce simți sau dorești, respectându-i pe ceilalți."
      }
    ],
    flashcards: [
      { front: "Ce este inteligența emoțională?", back: "Capacitatea de a-ți recunoaște, înțelege și stăpâni propriile emoții, dar și de a fi empatic cu ceilalți." },
      { front: "Cum prevenim oboseala la teme?", back: "Regula 45/10: 45 de minute de teme concentrate urmate de 10 minute de pauză/mișcare." }
    ],
    audioPrompts: [
      "Podcast motivațional: Cum să-ți depășești emoțiile și să ai încredere în tine la testele din Clasa a V-a."
    ]
  }
];

export const BADGES = [
  { id: "b1", title: "Începător Curios", icon: "🌱", description: "Explorează prima materie din hub!", unlocked: false },
  { id: "b2", title: "Maestru al Fracțiilor", icon: "📐", description: "Scor maxim la testul de Matematică!", unlocked: false },
  { id: "b3", title: "Cercetător Biolog", icon: "🧬", description: "Parcurge celula și regnul plantelor!", unlocked: false },
  { id: "b4", title: "Explorator Istoric", icon: "🏛️", description: "Călătorește prin Egiptul și Grecia Antică!", unlocked: false },
  { id: "b5", title: "Coder Scratch", icon: "💻", description: "Creează primul tău algoritm în Informatică!", unlocked: false },
  { id: "b6", title: "Campioana Lecturii", icon: "📖", description: "Finalizează 5 teste de Limba Română!", unlocked: false },
  { id: "b7", title: "Geograf Amator", icon: "🌍", description: "Descooperă continentele și Pământul!", unlocked: false },
  { id: "b8", title: "Geniu Multidisciplinar", icon: "🌟", description: "Parcurge peste 50% din programa clasei a V-a!", unlocked: false }
];
