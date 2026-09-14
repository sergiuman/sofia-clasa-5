// Baza de date extinsă cu programa completă clasa a V-a extrasă din manualele Sofiei

export const SUBJECTS = [
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
          "Sistemul Solar: Soarele și cele 8 planete",
          "Mișcarea de rotație (24 ore -> zi/noapte)",
          "Mișcarea de revoluție (365 zile -> anotimpuri)"
        ]
      },
      {
        id: "geo-u2",
        title: "Unitatea 2: Harta și Globul Geografic",
        topics: [
          "Globul și Harta geografică",
          "Scara hărții și coordonatele (Ecuator, Meridiene)"
        ]
      },
      {
        id: "geo-u3",
        title: "Unitatea 3: Învelișurile Pământului",
        topics: [
          "Litosfera: Continentele, Vulcanii, Cutremurele și Relieful",
          "Hidrosfera: Oceanele (Pacific, Atlantic, Indian, Arctic) și Râurile",
          "Atmosfera: Vremea, Clima și Precipitațiile"
        ]
      }
    ],
    quizzes: [
      {
        id: "q-geo-1",
        question: "Care mișcare a Pământului determină alternanța zilelor și nopților?",
        options: ["Mișcarea de revoluție", "Mișcarea de rotație", "Translația", "Eclipsa"],
        correct: 1,
        explanation: "Rotația în jurul propriei axe durează 24 de ore și creează ziua și noaptea."
      },
      {
        id: "q-geo-2",
        question: "Care este cel mai mare și adânc ocean de pe Planeta Pământ?",
        options: ["Oceanul Atlantic", "Oceanul Indian", "Oceanul Pacific", "Oceanul Arctic"],
        correct: 2,
        explanation: "Oceanul Pacific acoperă peste o treime din suprafața Pământului."
      },
      {
        id: "q-geo-3",
        question: "Câte continente există pe Glob?",
        options: ["5 continente", "6 continente", "7 continente", "8 continente"],
        correct: 2,
        explanation: "Cele 7 continente sunt: Europa, Asia, Africa, America de Nord, America de Sud, Australia și Antarctica."
      },
      {
        id: "q-geo-4",
        question: "Linia imaginară ce taie Pământul la mijloc în Emisfera Nordică și Sudică se numește:",
        options: ["Meridianul Greenwich", "Ecuatorul", "Tropicul Racului", "Polul Nord"],
        correct: 1,
        explanation: "Ecuatorul este paralela de 0 grade ce împarte planeta în două emisfere."
      },
      {
        id: "q-geo-5",
        question: "Cât durează o mișcare completă de revoluție a Pământului în jurul Soarelui?",
        options: ["24 de ore", "30 de zile", "365 de zile și 6 ore (1 an)", "12 luni lunar"],
        correct: 2,
        explanation: "Mișcarea de revoluție durează un an calendaristic și determină cele 4 anotimpuri."
      },
      {
        id: "q-geo-6",
        question: "Cum se numește magma care iese la suprafață în timpul erupției unui vulcan?",
        options: ["Cenușă", "Lavă", "Granit", "Basalt"],
        correct: 1,
        explanation: "Magma topită care se scurge la suprafața scoarței terestre poartă numele de lavă."
      },
      {
        id: "q-geo-7",
        question: "Care este cea mai înaltă formă de relief de pe suprafața terestră?",
        options: ["Câmpia", "Podișul", "Muntele", "Dealul"],
        correct: 2,
        explanation: "Munții sunt forme de relief cu altitudini mari (peste 800-1000m)."
      },
      {
        id: "q-geo-8",
        question: "Învelișul de aer care înconjoară și protejează Pământul se numește:",
        options: ["Litosferă", "Hidrosferă", "Atmosferă", "Biosferă"],
        correct: 2,
        explanation: "Atmosfera conține oxigenul pe care îl respirăm și blochează radiațiile dăunătoare."
      },
      {
        id: "q-geo-9",
        question: "Ce ne arată scara unei hărți geografice?",
        options: [
          "Numele orașelor",
          "De câte ori au fost reduse distanțele reale pe hartă",
          "Vremea de afară",
          "Culorile munților"
        ],
        correct: 1,
        explanation: "Scara hărții (ex: 1:100.000) arată raportul de micșorare al distanțelor reale."
      },
      {
        id: "q-geo-10",
        question: "Pe ce continent se află țara noastră, România?",
        options: ["Asia", "Europa", "Africa", "America"],
        correct: 1,
        explanation: "România este situată în centrul continentului European."
      }
    ],
    flashcards: [
      { front: "Cele 7 continente:", back: "Europa, Asia, Africa, America de Nord, America de Sud, Australia, Antarctica." },
      { front: "Cele 4 oceane principale:", back: "Oceanul Pacific, Oceanul Atlantic, Oceanul Indian, Oceanul Arctic." },
      { front: "Ce este Ecuatorul?", back: "Paralela de 0° ce împarte Pământul în Emisfera Nordică și Emisfera Sudică." },
      { front: "Ce este litosfera?", back: "Învelișul solid al Pământului (scoarța terestră și partea superioară a mantalei)." }
    ],
    audioPrompts: ["Podcast Geografie: Călătorie prin toate continentele."]
  },
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
        topics: ["Microscopul optic", "Structura celulei vegetale și animale", "Țesuturi și organe"]
      },
      {
        id: "bio-u2",
        title: "Unitatea 2: Viețuitoarele și Regnurile",
        topics: ["Bacterii, Ciuperci, Protiste, Plante, Animale (Nevertebrate & Vertebrate)"]
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
        question: "Ce organit celular vegetal captează lumina soarelui pentru fotosinteză?",
        options: ["Nucleul", "Mitocondria", "Cloroplastul", "Membrana"],
        correct: 2,
        explanation: "Cloroplastele conțin clorofilă verde și produc hrana plantei."
      },
      {
        id: "q-bio-3",
        question: "Care dintre următoarele animale este un VERTEBRAT?",
        options: ["Râma", "Melcul", "Iepurele", "Fluturele"],
        correct: 2,
        explanation: "Iepurele are schelet osos intern și coloană vertebrală."
      },
      {
        id: "q-bio-4",
        question: "Din ce regn fac parte ciupercile precum galbiorii și mucegaiul?",
        options: ["Regnul Plante", "Regnul Fungi", "Regnul Protiste", "Regnul Monera"],
        correct: 1,
        explanation: "Ciupercile aparțin Regnului Fungi (nu conțin clorofilă)."
      },
      {
        id: "q-bio-5",
        question: "Ce instrument folosește biologul pentru a mări imaginea celulelor?",
        options: ["Telescopul", "Microscopul optic", "Barometrul", "Stetoscopul"],
        correct: 1,
        explanation: "Microscopul optic mărește de sute sau mii de ori preparatele celulare."
      },
      {
        id: "q-bio-6",
        question: "Cum se numește gazul eliberat de plante în aer în timpul fotosintezei?",
        options: ["Dioxid de carbon", "Oxigen", "Azot", "Metan"],
        correct: 1,
        explanation: "Plantele produc Oxigen esențial pentru respirația oamenilor și animalelor."
      },
      {
        id: "q-bio-7",
        question: "Care animal este un amfibian ce trăiește atât pe uscat cât și în apă?",
        options: ["Broasca țestoasă", "Broasca râioasă/verde", "Șarpele", "Știuca"],
        correct: 1,
        explanation: "Amfibienii (ex: broaștele, salamandrele) își încep viața în apă și continuă pe uscat."
      },
      {
        id: "q-bio-8",
        question: "Partea din celulă care conține informația genetică și conduce activitatea se numește:",
        options: ["Citoplasmă", "Nucleu", "Membrană", "Vacuolă"],
        correct: 1,
        explanation: "Nucleul este centrul de comandă al celulei."
      }
    ],
    flashcards: [
      { front: "Ce este celula?", back: "Unitatea de bază structurală și funcțională a tuturor viețuitoarelor." },
      { front: "Componentele celulei vegetale:", back: "Perete celular, membrană, citoplasmă, nucleu, vacuolă și cloroplaste." },
      { front: "Ce este fotosinteza?", back: "Procesul prin care plantele verzui produc hrana folosind soarele, apa și CO2." }
    ],
    audioPrompts: ["Podcast Biologie: Călătorie în interiorul celulei."]
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
        title: "Unitatea 1: Numere naturale și Fracții",
        topics: ["Operații cu numere naturale", "Fracții ordinare și zecimale", "Geometrie"]
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
      },
      {
        id: "q-mat-5",
        question: "Cât este 2 la puterea a 3-a (2³)?",
        options: ["6", "8", "9", "5"],
        correct: 1,
        explanation: "2³ = 2 × 2 × 2 = 8."
      },
      {
        id: "q-mat-6",
        question: "Formula ariei unui dreptunghi cu Lungimea L și Lățimea l este:",
        options: ["L + l", "2 × (L + l)", "L × l", "L ÷ l"],
        correct: 2,
        explanation: "Aria dreptunghiului = L × l."
      },
      {
        id: "q-mat-7",
        question: "Care este ultimul cifră a unui număr divizibil cu 5?",
        options: ["1 sau 3", "0 sau 5", "2 sau 4", "Doar 9"],
        correct: 1,
        explanation: "Un număr se împarte exact la 5 dacă se termină în 0 sau 5."
      },
      {
        id: "q-mat-8",
        question: "Fracția 7/3 este o fracție:",
        options: ["Subunitară", "Echiunitară", "Supraunitară", "Zecimală"],
        correct: 2,
        explanation: "7/3 este supraunitară pentru că numărătorul (7) e mai mare decât numitorul (3)."
      }
    ],
    flashcards: [
      { front: "Ce este o fracție supraunitară?", back: "Fracție în care numărătorul este mai mare decât numitorul (ex: 5/2)." },
      { front: "Formula ariei dreptunghiului:", back: "Aria = Lungime × Lățime." },
      { front: "Criteriul de divizibilitate cu 3:", back: "Un număr este divizibil cu 3 dacă suma cifrelor sale se împarte la 3." }
    ],
    audioPrompts: ["Podcast Matematică: Rezolvarea problemelor prin metoda figurativă."]
  },
  {
    id: "romana",
    title: "Limba Română",
    icon: "📖",
    color: "from-rose-500 to-red-700",
    themeColor: "#f43f5e",
    manualName: "Romana 5.pdf",
    description: "Lectură, texte literare și nonliterare, gramatică și comunicare.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "rom-u1",
        title: "Unitatea I: Lectură și Gramatică",
        topics: ["Textul literar", "Schița Vizită...", "Basmul", "Substantivul, Adjectivul, Verbul"]
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
        options: ["Darnic", "Zgârcit", "Blând", "Vesel"],
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
        question: "Cine a scris schița umoristică 'Vizită...'?",
        options: ["Ion Creangă", "I.L. Caragiale", "Mihai Eminescu", "Ioana Pârvulescu"],
        correct: 1,
        explanation: "I.L. Caragiale este autorul schiței 'Vizită...' (cu personajul Ionel)."
      },
      {
        id: "q-rom-5",
        question: "Ce exprimă un VERB într-o propoziție?",
        options: ["O însușire", "O acțiune, stare sau existență", "Un nume de lucru", "Un număr"],
        correct: 1,
        explanation: "Verbul arată ce face subiectul (ex: a învăța, a citi, a rula)."
      },
      {
        id: "q-rom-6",
        question: "Cifrele magice întâlnite cel mai des în basmele populare sunt:",
        options: ["1 și 2", "3, 7 și 12", "10 și 100", "5 și 9"],
        correct: 1,
        explanation: "3 frați, 3 încercări, 7 mări și 7 țări sunt specifice basmului."
      },
      {
        id: "q-rom-7",
        question: "Cuvintele cu formă diferită dar sens asemănător se numesc:",
        options: ["Antonime", "Sinonime", "Omograme", "Paronime"],
        correct: 1,
        explanation: "Sinonimele au sens similar (ex: omăt = zăpadă)."
      }
    ],
    flashcards: [
      { front: "Ce sunt sinonimele?", back: "Cuvinte cu formă diferită dar înțeles similar (ex: vorbă = cuvânt)." },
      { front: "Părțile unei compuneri:", back: "Introducere, Cuprins și Încheiere." }
    ],
    audioPrompts: ["Podcast Română: Povestea schiței Vizită de Caragiale."]
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
        title: "Unitatea I: De la Preistorie la Geto-Daci",
        topics: ["Egiptul Antic", "Grecia și Roma Antică", "Burebista și Decebal"]
      }
    ],
    quizzes: [
      {
        id: "q-ist-1",
        question: "Pe malul cărui fluviu s-a dezvoltat civilizația Egiptului Antic?",
        options: ["Dunărea", "Nilul", "Tigru", "Rinul"],
        correct: 1,
        explanation: "Egiptul a înflorit datorită recoltelor bogate aduse de Nil."
      },
      {
        id: "q-ist-2",
        question: "Cine au fost cei doi mari regi ai dacilor?",
        options: ["Alexandru Cel Mare și Cezar", "Burebista și Decebal", "Romulus și Remus", "Traian și Pericle"],
        correct: 1,
        explanation: "Burebista a creat statul dac unificat, iar Decebal a luptat cu romanii."
      },
      {
        id: "q-ist-3",
        question: "Unde au avut loc primele Jocuri Olimpice din istorie?",
        options: ["La Roma", "În Grecia Antică (Olympia)", "La Cairo", "La Paris"],
        correct: 1,
        explanation: "Jocurile Olimpice antice erau organizate în Grecia în onoarea lui Zeus."
      },
      {
        id: "q-ist-4",
        question: "Ce mare descoperire a schimbat viața oamenilor din Paleolitic?",
        options: ["Procesorul", "Focul", "Motorul cu abur", "Tiparul"],
        correct: 1,
        explanation: "Focul le-a oferit căldură, lumină și posibilitatea de a găti hrana."
      },
      {
        id: "q-ist-5",
        question: "Conducătorii supreme ai Egiptului Antic purtau titlul de:",
        options: ["Împărați", "Faraoni", "Consuli", "Sultani"],
        correct: 1,
        explanation: "Faraonul era considerat rege și zeu viu în Egiptul Antic."
      },
      {
        id: "q-ist-6",
        question: "Orașul-stat din Grecia Antică renumit pentru democrație și cultură a fost:",
        options: ["Sparta", "Atena", "Roma", "Cartagina"],
        correct: 1,
        explanation: "Atena este leagănul democrației și al filosofiei antice."
      }
    ],
    flashcards: [
      { front: "Ce este un secol?", back: "O perioadă istorică de 100 de ani." },
      { front: "Cine a fost Burebista?", back: "Primul rege care a unificat triburile geto-dace (82 î.Hr.)." }
    ],
    audioPrompts: ["Podcast Istorie: O zi în Atena Antică."]
  },
  {
    id: "informatica",
    title: "Informatică & TIC",
    icon: "💻",
    color: "from-purple-600 to-indigo-900",
    themeColor: "#9333ea",
    manualName: "Informatica 5.pdf",
    description: "Componentele calculatorului, algoritmi și creare de jocuri în Scratch.",
    progress: 0,
    xp: 0,
    units: [
      {
        id: "inf-u1",
        title: "Unitatea 1: Hardware, Software și Scratch",
        topics: ["Sistem de operare", "Algoritmica", "Scratch"]
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
          "O tastatură"
        ],
        correct: 1,
        explanation: "Scratch îi ajută pe copii să creeze jocuri combinând blocuri vizuale."
      },
      {
        id: "q-inf-3",
        question: "Ce numim 'creierul calculatorului'?",
        options: ["Hard Disk-ul", "Procesorul (CPU)", "Tastatura", "Ecranul"],
        correct: 1,
        explanation: "CPU procesează toate calculele și instrucțiunile."
      },
      {
        id: "q-inf-4",
        question: "Ce este un algoritm?",
        options: [
          "O piesă din monitor",
          "O succesiune clară de pași pentru rezolvarea unei probleme",
          "Un virus informatic",
          "O memorie RAM"
        ],
        correct: 1,
        explanation: "Algoritmul este o rețetă / pas cu pas de instrucțiuni precise."
      },
      {
        id: "q-inf-5",
        question: "Personajul implicit din mediul Scratch este:",
        options: ["Un câine", "O pisică", "Un robot", "Un fluture"],
        correct: 1,
        explanation: "Pisica galbenă Scratch (Scratch Cat) este personajul simbolic."
      }
    ],
    flashcards: [
      { front: "Hardware vs Software:", back: "Hardware = componente fizice. Software = programe și aplicații." },
      { front: "Ce este o variabilă în Scratch?", back: "Un container care memorează o valoare (ex: Scorul jocului)." }
    ],
    audioPrompts: ["Ghid Audio Scratch: Cum creezi primul tău joc."]
  },
  {
    id: "tehnologica",
    title: "Educație Tehnologică",
    icon: "⚙️",
    color: "from-cyan-600 to-blue-800",
    themeColor: "#0891b2",
    manualName: "Educatie Tehnologica 5.pdf",
    description: "Materiale, tehnologii curate și alimentație sănătoasă.",
    progress: 0,
    xp: 0,
    units: [
      { id: "teh-u1", title: "Unitatea 1: Tehnologii și Alimentație", topics: ["Reciclare", "Piramida alimentară"] }
    ],
    quizzes: [
      {
        id: "q-teh-1",
        question: "Care este scopul reciclării hârtiei?",
        options: ["Economisirea lemnului și protejarea pădurilor", "Poluarea apei", "Distrugerea copacilor", "Consumul de gaz"],
        correct: 0,
        explanation: "Reciclarea hârtiei salvează milioane de copaci."
      },
      {
        id: "q-teh-2",
        question: "Care alimente oferă proteine esențiale pentru creștere?",
        options: ["Bomboanele", "Ouăle, laptele și carnea", "Sucul acidulat", "Chipsurile"],
        correct: 1,
        explanation: "Proteinele din lactate, ouă și carne construiesc mușchii."
      },
      {
        id: "q-teh-3",
        question: "Care grupă se află la baza piramidei alimentare sănătoase?",
        options: ["Dulciurile", "Cerealele, legumele și fructele", "Grăsimile", "Prăjelile"],
        correct: 1,
        explanation: "Cerealele integrale, fructele și legumele trebuie consumate zilnic."
      }
    ],
    flashcards: [
      { front: "Piramida alimentară:", back: "Ghid al proporțiilor zilnice de hrana sănătoasă." }
    ],
    audioPrompts: ["Podcast Tehnologic: Reciclarea plasticului."]
  },
  {
    id: "plastica",
    title: "Educație Plastică",
    icon: "🎨",
    color: "from-fuchsia-500 to-pink-700",
    themeColor: "#d946ef",
    manualName: "Educatie Plastica 5.pdf",
    description: "Limbajul vizual, culori primare, secundare și compoziție.",
    progress: 0,
    xp: 0,
    units: [
      { id: "pla-u1", title: "Unitatea 1: Culori și Compoziție", topics: ["Culori calde/reci", "Cercul cromatic"] }
    ],
    quizzes: [
      {
        id: "q-pla-1",
        question: "Cum obținem culoarea secundară PORTOCALIU?",
        options: ["Roșu + Albastru", "Roșu + Galben", "Galben + Albastru", "Alb + Negru"],
        correct: 1,
        explanation: "Roșu amestecat cu Galben dă Portocaliu."
      },
      {
        id: "q-pla-2",
        question: "Care dintre următoarele este o CULOARE CALDĂ?",
        options: ["Albastru", "Verde", "Roșu", "Violet"],
        correct: 2,
        explanation: "Roșul, galbenul și portocaliul sunt culori calde."
      },
      {
        id: "q-pla-3",
        question: "Care sunt cele 3 culori primare?",
        options: ["Verde, Mov, Oranj", "Roșu, Galben, Albastru", "Alb, Negru, Gri", "Roz, Maro, Turcoaz"],
        correct: 1,
        explanation: "Roșu, Galben și Albastru sunt culorile pure neobținute din amestec."
      }
    ],
    flashcards: [
      { front: "Culorile secundare:", back: "Portocaliu (R+G), Verde (G+A) și Violet (R+A)." }
    ],
    audioPrompts: ["Lecție audio: Culorile calde și reci."]
  },
  {
    id: "muzicala",
    title: "Educație Muzicală",
    icon: "🎵",
    color: "from-violet-500 to-purple-800",
    themeColor: "#8b5cf6",
    manualName: "Educatie Muzicala 5.pdf",
    description: "Notarea muzicală, portativul, cheia Sol și ritmul.",
    progress: 0,
    xp: 0,
    units: [
      { id: "muz-u1", title: "Unitatea 1: Limbajul muzical", topics: ["Portativul", "Cheia Sol", "Notele"] }
    ],
    quizzes: [
      {
        id: "q-muz-1",
        question: "Câte linii paralele are un portativ muzical?",
        options: ["4 linii", "5 linii", "6 linii", "3 linii"],
        correct: 1,
        explanation: "Portativul are 5 linii orizontale și 4 spații."
      },
      {
        id: "q-muz-2",
        question: "Care instrument face parte din familia instrumentelor de SUFLAT?",
        options: ["Vioara", "Flautul", "Toba", "Pianul"],
        correct: 1,
        explanation: "Flautul produce sunet prin suflarea aerului."
      },
      {
        id: "q-muz-3",
        question: "Care este prima notă din gama muzicală?",
        options: ["RE", "MI", "DO", "SOL"],
        correct: 2,
        explanation: "Gama începe cu nota DO (Do, Re, Mi, Fa, Sol, La, Si, Do)."
      }
    ],
    flashcards: [
      { front: "Cele 7 note muzicale:", back: "DO, RE, MI, FA, SOL, LA, SI." }
    ],
    audioPrompts: ["Audio explicativ: Sunetele instrumentelor din orchestră."]
  },
  {
    id: "consiliere",
    title: "Consiliere și Dezvoltare",
    icon: "🤝",
    color: "from-teal-500 to-emerald-700",
    themeColor: "#14b8a6",
    manualName: "Consiliere 5.pdf",
    description: "Managementul învățării, emoții și relații de prietenie.",
    progress: 0,
    xp: 0,
    units: [
      { id: "con-u1", title: "Unitatea 1: Autocunoaștere", topics: ["Orarul de teme", "Asertivitate"] }
    ],
    quizzes: [
      {
        id: "q-con-1",
        question: "Care este o tehnică eficientă pentru pregătirea temelor?",
        options: ["Lăsarea temelor pe dimineață", "Orar zilnic cu pauze scurte", "Fără pauze 5 ore", "Cu TV-ul pornit"],
        correct: 1,
        explanation: "Un orar bine structurat cu pauze menține creierul odihnit."
      },
      {
        id: "q-con-2",
        question: "Ce înseamnă comunicarea asertivă?",
        options: ["Să țipi la celălalt", "Să-ți spui ideile cu respect, fără a-i jigni pe ceilalți", "Să taci mereu", "Să nu vorbești"],
        correct: 1,
        explanation: "Asertivitatea înseamnă fermitate și respect reciproc."
      }
    ],
    flashcards: [
      { front: "Regula 45/10 la teme:", back: "45 de minute de teme concentrate urmate de 10 minute pauză." }
    ],
    audioPrompts: ["Podcast motivațional: Depășirea emoțiilor la teste."]
  }
];

export const BADGES = [
  { id: "b1", title: "Începător Curios", icon: "🌱", description: "Rezolvă primul quiz din aplicație!", unlocked: false },
  { id: "b2", title: "Geograf de Elită", icon: "🌍", description: "Rezolvă cu succes quiz-ul de Geografie!", unlocked: false },
  { id: "b3", title: "Cercetător Biolog", icon: "🧬", description: "Treci de întrebările despre celulă și plante!", unlocked: false },
  { id: "b4", title: "Maestru al Fracțiilor", icon: "📐", description: "Scor maxim la testul de Matematică!", unlocked: false },
  { id: "b5", title: "Campioana Lecturii", icon: "📖", description: "Completează quiz-ul de Limba Română!", unlocked: false },
  { id: "b6", title: "Explorator Istoric", icon: "🏛️", description: "Răspunde corect la Istorie!", unlocked: false },
  { id: "b7", title: "Coder Scratch", icon: "💻", description: "Treci de quiz-ul de Informatică!", unlocked: false },
  { id: "b8", title: "Geniu Multidisciplinar", icon: "🌟", description: "Treci de 50% din programa tuturor materiilor!", unlocked: false }
];
