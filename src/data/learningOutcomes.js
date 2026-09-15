// Baza de date cu competențele și superputerile pe care Sofia le va dobândi la Clasa a V-a

export const LEARNING_OUTCOMES = [
  {
    subjectId: "biologie",
    title: "Biologie",
    icon: "🧬",
    color: "#10b981",
    superpower: "Detectiv al Lumii Vii & Micro-Explorator",
    description: "Sofia va înțelege cum funcționează viața la nivel microscopic și va putea identifica orice celulă, plantă sau animal din ecosistemele României.",
    skills: [
      "Va explica structura celulei vegetale și animale ca pe un oraș cu centri de comandă (nucleu) și fabrici de energie (cloroplaste).",
      "Va ști să folosească un microscop optic și o lupă pentru investigații biologice.",
      "Va clasifica toate viețuitoarele în cele 5 regnuri (Bacterii, Protiste, Ciuperci, Plante și Animale).",
      "Va înțelege lanțurile trofice din pădure, lacuri și Marea Neagră și cum protejăm mediul înconjurător."
    ],
    realWorldExample: "În excursii la pădure sau la mare, Sofia va putea explica cum produc plantele oxigen prin fotosinteză și cum trăiesc organismele în ecosisteme!"
  },
  {
    subjectId: "matematica",
    title: "Matematică",
    icon: "📐",
    color: "#3b82f6",
    superpower: "Maestru al Logicii & Problemei Reale",
    description: "Sofia va dezvolta o gândire matematică rapidă, stăpânind calculul cu fracții, metodele elegante de rezolvare și geometria spațială.",
    skills: [
      "Va calcula și aduce la numitor comun orice fracție ordinară sau zecimală cu ușurință.",
      "Va rezolva probleme complexe prin Metoda Figurativă (desenarea grafică a segmentelor) și Metoda Mersului Invers.",
      "Va recunoaște numerele prime, divizorii și criteriile rapide de divizibilitate (cu 2, 3, 5, 9, 10).",
      "Va calcula perimetre, arii de dreptunghi/pătrat și volumul corpurilor 3D (cuburi și paralelipipede)."
    ],
    realWorldExample: "Când împarte o pizza, calculează reducerea procentuală la cumpărături sau amenajează camera ei, Sofia va aplica matematica cu încredere!"
  },
  {
    subjectId: "romana",
    title: "Limba Română",
    icon: "📖",
    color: "#f43f5e",
    superpower: "Povestitor Expresiv & Maestru al Cuvintelor",
    description: "Sofia va deveni un cititor pasionat și un scriitor talentat, capabilă să creeze compuneri de nota 10 și să analizeze orice text literar.",
    skills: [
      "Va identifica personajele, timpul, spațiul și ideile principale din schițe (I.L. Caragiale), basme (Petre Ispirescu) și poezii.",
      "Va recunoaște și folosi creativ figurile de stil: Personificarea și Comparația.",
      "Va stăpâni gramatica clasei a V-a: Substantivul, Adjectivul, Verbul, Pronumele, Subiectul și Predicatul.",
      "Va redacta compuneri narative și descriptive respectând structura: Introducere, Cuprins și Încheiere."
    ],
    realWorldExample: "Sofia își va exprima gândurile și emoțiile cu claritate în prezentări la școală, eseuri sau jurnale personale!"
  },
  {
    subjectId: "geografie",
    title: "Geografie",
    icon: "🌍",
    color: "#0284c7",
    superpower: "Cartograf al Planetei Pământ",
    description: "Sofia va înțelege cum funcționează planeta noastră, de la mișcările în Univers până la munți, oceane și fenomene naturale.",
    skills: [
      "Va cunoaște poziția celor 7 continente și 4 oceane de pe Glob.",
      "Va explica de ce avem zi și noapte (mișcarea de rotație) și de ce se schimba anotimpurile (mișcarea de revoluție).",
      "Va citit o hartă geografică folosind scara hărții, Ecuatorul, Latitudinea și Longitudinea.",
      "Va înțelege cum se formează vulcanii, cutremurele și marile lanțuri muntoase."
    ],
    realWorldExample: "Când călătorește sau se uită pe o hartă, Sofia va orienta busola, va cunoaște clima din orice parte a globului și structura reliefului!"
  },
  {
    subjectId: "istorie",
    title: "Istorie",
    icon: "🏛️",
    color: "#d97706",
    superpower: "Călător în Timp & Arheolog al Civilizațiilor",
    description: "Sofia va descoperi cum au trăit strămoșii noștri și cum s-au născut marile civilizații ale lumii antice.",
    skills: [
      "Va deosebi izvoarele istorice scrise și nescrise și va calcula timpul în secole și milenii.",
      "Va explora misterele Egiptului Antic (Piramidele, Faraonii) și ale Mesopotamiei (scrierea cuneiformă).",
      "Va înțelege democrația din Atena Antică, vitejia Spartei și grandoarea Imperiului Roman (Colosseumul).",
      "Va cunoaște istoria geto-dacilor și marii regi Burebista și Decebal."
    ],
    realWorldExample: "La muzee sau în lecțiile de cultură generală, Sofia va înțelege rădăcinile istoriei noastre și moștenirea lăsată de romani și greci!"
  },
  {
    subjectId: "informatica",
    title: "Informatică & TIC",
    icon: "💻",
    color: "#9333ea",
    superpower: "Creator Digital & Programator Scratch",
    description: "Sofia va trece de la statutul de consumator de tehnologie la cel de CREATOR digital de jocuri și algoritmi.",
    skills: [
      "Va programa propriile jocuri și povești animate în mediul vizual Scratch.",
      "Va înțelege algoritmii: secvențe pas-cu-pas, decizii (Dacă... Atunci) și bucle repetitive.",
      "Va cunoaște componentele hardware ale calculatorului (CPU, RAM, stocare) și software-ul de sistem.",
      "Va aplica regulile de securitate cibernetică și protecție a datelor personale pe Internet."
    ],
    realWorldExample: "Sofia își va putea construi primul ei joc interactiv pe calculator pe care îl poate arăta prietenilor și colegilor de clasă!"
  },
  {
    subjectId: "tehnologica",
    title: "Educație Tehnologică",
    icon: "⚙️",
    color: "#0891b2",
    superpower: "Designer al Stilului de Viață Sănătos & Ecologic",
    description: "Sofia va învăța cum se produc materialele din jurul nostru și cum să aibă o alimentație echilibrată.",
    skills: [
      "Va înțelege originea materialelor (lemn, hârtie, textile, sticlă) și procesul de reciclare.",
      "Va cunoaște Piramida Alimentară și cum se construiește un meniu zilnic sănătos.",
      "Va învăța regulile de economisire a energiei și a apei în locuință."
    ],
    realWorldExample: "Sofia va alege alimente nutritive și va aplica obiceiuri de reciclare și sustenabilitate în viața de zi cu zi!"
  },
  {
    subjectId: "plastica",
    title: "Educație Plastică",
    icon: "🎨",
    color: "#d946ef",
    superpower: "Artist Vizual & Maestru al Culorilor",
    description: "Sofia își va dezvolta simțul estetic și tehnica de exprimare vizuală prin pictură și grafică.",
    skills: [
      "Va folosi Cercul Cromatic pentru a combina culorile primare și secundare.",
      "Va crea compoziții plastice folosind jocul dintre culorile calde (roșu, galben) și reci (albastru, verde).",
      "Va stăpâni elementele de limbaj vizual: punctul, linia, forma bidimensională și volumul."
    ],
    realWorldExample: "Sofia va putea crea desenuri expresive, felicitări și proiecte vizuale spectaculoase!"
  },
  {
    subjectId: "muzicala",
    title: "Educație Muzicală",
    icon: "🎵",
    color: "#8b5cf6",
    superpower: "Auditor Avizat & Cunoscător al Ritmului",
    description: "Sofia va înțelege limbajul muzicii, citirea notelor pe portativ și marile instrumente ale orchestrei.",
    skills: [
      "Va citi notele pe portativ în Cheia Sol și va măsura ritmurile de 2/4 și 3/4.",
      "Va recunoaște sunetul instrumentelor muzicale din familiile de coarde, suflat și percuție.",
      "Va cânta și interpreta piese din folclor și muzica clasică."
    ],
    realWorldExample: "Sofia va asculta muzica cu ureche muzicală antrenată, identificând instrumentele și ritmul în melodii!"
  },
  {
    subjectId: "consiliere",
    title: "Consiliere și Dezvoltare",
    icon: "🤝",
    color: "#14b8a6",
    superpower: "Lider Empatic & Maestru al Încrederii în Sine",
    description: "Sofia își va dezvolta inteligența emoțională, stăpânirea de sine și abilitățile de organizare personală.",
    skills: [
      "Va aplica tehnica 45/10 pentru pregătirea ghiozdanului și a temelor fără stres.",
      "Va practica comunicarea asertivă (exprimarea opiniei cu fermitate și respect).",
      "Va învăța cum să gestioneze emoțiile dinaintea testelor și cum să lege prietenii puternice."
    ],
    realWorldExample: "Sofia își va gestiona timpul liber și temele cu calm și va fi un prieten de încredere în colectivul clasei!"
  }
];
