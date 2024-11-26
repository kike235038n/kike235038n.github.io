let respuestas = [];
let cantiCorrectas = 0;
let numPregunta = 0;

const bd_juego = [
    {
        
        id: 0,
        pregunta: " She______ ready for the meeting?",
        op0: "a) Am",
        op1: "b) Are",
        op2: "c)Is ",
        correcta: "2"
    },
    {
        id: 1,
        pregunta: " _______ your sister play the guitar?",
        op0: "a) Do",
        op1: "b) Did",
        op2: "c) Does",
        correcta: "2"
    },
    {
        id: 2,
        pregunta: "3 The sun _____ in the east?",
        op0: "a) Rises",
        op1: "b) Rise",
        op2: "c) Rising",
        correcta: "0"
    },
    {
        id:3,
        pregunta: " Charlie _______ on weekends", 
        op0: "a) Doesn't work",
        op1: "b) Doesn't works",
        op2: "c) Don't work",
        correcta: "0"
    },
    {
        id:4,
        pregunta: " _______ is your best friend? Maria", 
        op0: "a) Why",
        op1: "b) When",
        op2: "c) Who",
        correcta: "2"
    },
    {
        id:5,
        pregunta: " _______ do you get to school? I get to school by bus", 
        op0: "a) How",
        op1: "b) What",
        op2: "c) Where",
        correcta: "0"
    },
    {
        id:6,
        pregunta: " The cat is licking _______ paws.", 
        op0: "a) Her",
        op1: "b) Its",
        op2: "c) His",
        correcta: "1"
    },
    {
        id:7,
        pregunta: " The ______ chocolate.", 
        op0: "a) Hot, delicious",
        op1: "b) Delicius, hot",
        op2: "c) Hottest, delicious",
        correcta: "1"
    },
    {
        id:8,
        pregunta: " _____ front yard is beautiful.", 
        op0: "a) A",
        op1: "b) The",
        op2: "c) An",
        correcta: "1"
    },
    {
        id:9,
        pregunta: " We have _____ hour to finish the Project.", 
        op0: "a) A",
        op1: " b) The",
        op2: "c) An",
        correcta: "2"
    },
    {
        id:10,
        pregunta: " _____ bags of chips are there on the table?", 
        op0: "a) How many",
        op1: "b) How much",
        op2: "c) Is there",
        correcta: "0"
    },
    {
        id:11,
        pregunta: " ______ chicken do we have?", 
        op0: "a) How Many",
        op1: "b)  How Much",
        op2: "c) Are there",
        correcta: "1"
    },
    {
        id:12,
        pregunta: " How many _____ do you have?", 
        op0: "a) Childs",
        op1: "b) Childrens",
        op2: "c) Children",
        correcta: "2"
    },
    {
        id:13,
        pregunta: " The police officer is ___ the cars.", 
        op0: "a) Stoping",
        op1: "b) Stopping",
        op2: "c) Stops",
        correcta: "1"
    },
    {
        id:14,
        pregunta: " I live ____ Oxford Street ____ London.",
        op0: "a) On / In",
        op1: "b) In / On",
        op2: "c) At / Under",
        correcta: "0"
    },
    {
        id:15,
        pregunta: " Don't make ___ noise. She wants to get ___ sleep.", 
        op0: "a) Any / Some",
        op1: "b) Some / Any",
        op2: "c) Many / A lot",
        correcta: "0"
    },
    {
        id:16,
        pregunta: " 'Hi, Chris. ____ is my friend Jona.'' Hi, Jona. Nice to meet you'", 
        op0: "a) That",
        op1: "b) These",
        op2: "c) This",
        correcta: "0"
    },
    {
        id:17,
        pregunta: " I need to find Mandy. I took ____ jacket by mistake. ", 
        op0: "a) Are / Aren't",
        op1: "b) Is / Aren't ",
        op2: "c) Is / Isn't",
        correcta: "2"
    },
    {
        id:18,
        pregunta: " I need to find Mandy. I took _____ jacket by mistake. ", 
        op0: "a) Her's",
        op1: "b) Its",
        op2: "c) Her",
        correcta: "2"
    },
    {
        id:19,
        pregunta: " Do you ______ the avocado? ", 
        op0: "a) Like",
        op1: "b) Likes",
        op2: "c) Linking",
        correcta: "0"
    },
    {
        id:20,
        pregunta: ".- He _____ swim. He's afraid of water. ", 
        op0: "a) Can",
        op1: "b) Cans",
        op2: "c) Can't",
        correcta: "2"
    },
    {
        id:21,
        pregunta: " We should _______ begin tests in 48 hours", 
        op0: "a) Be able to",
        op1: "b) Will be able to",
        op2: "c) Are able to",
        correcta: "1"
    },
    {
        id:22,
        pregunta: " They _______ get home before midnigth. ", 
        op0: "a) Go",
        op1: "b) Never",
        op2: "c) Always go",
        correcta: "2"
    },
    {
        id:23,
        pregunta: " The children _______ stay up late. ", 
        op0: "a) Sometimes ",
        op1: "b)  Rarely go",
        op2: "c) Go",
        correcta: "0"
    },
    {
        id: 24,
        pregunta: " Betty rarely _______ in her rom working.",
        op0: "a) was",
        op1: "b) were",
        correcta: "0"
    },
    {
        id: 25,
        pregunta: "_______ we good at football",
        op0: "a) was",
        op1: "b) were",
        correcta: "1"
    },
    {
        id: 26,
        pregunta: "I  ______ to work very hard.",
        op0:"a) used to",
        op1:"b) use to",
        correcta: "0"
    },
    {
        id: 27,
        pregunta:" Did they _______ to swim on weekends?",
        op0:"a) used to",
        op1:"b) use to",
        correcta:"1"
    },
    {
        id: 28,
        pregunta: "Marcus _____ a lot of money yesterday, he _____ an expensive car.",
        op0: "a)  spend/buy",
        op1: "b) spent/buys",
        op2:"c)spent/bought",
         correcta: "2"
    },
    {
        id: 29,
        pregunta: " Nobody ______ the school uniforms yesterday.",
        op0: "a)  didn’t wear",
        op1: "b)  wore ",
        op2:"c)wore didn’t wore",
         correcta: "1"
    },
    {
        id: 30,
        pregunta: " The window was open and the birds ____ out of the room. ",
        op0: "a)  flew ",
        op1: "b)  flewed  ",
        op2: "c) flewn ",
        correcta: "0"
    },
    {
        id: 31,
        pregunta: "Harrison his math test 2 days ago? ",
        op0:"a)  Does/fail",
        op1:"b)  Is/ failing ",
        op2:"c)  Did/fail ",
        correcta: "2"
    },
    {
        id: 32,
        pregunta:"The film wasn’t very good. I _____ it!. ",
        op0:"a) enjoy ",
        op1:"b) didn’t enjoy ",
        op2:"c) don’t enjoy ",
        correcta:"1"
    },
    {
        id: 33,
        pregunta: "I ____ the kitchen floor yesterday ",
        op0:"a)  moped",
        op1:"b)  mopped  ",
        op2:"b)  was mopped ",
        correcta: "1"
    },
    {
        id: 34,
        pregunta:" That book is ________________ this book.",
        op0:"a)  most interesting ",
        op1:"b) interesting  ",
        op2:"c) more interesting than ",
        correcta:"2"
    },
    {
        id: 35,
        pregunta:" Pedro is _________________in the classroom. ",
        op0:"a)   shortest  ",
        op1:"b) the shortest  ",
        op2:"c) more short",
        correcta:"1"
    },
    {
        id: 36,
        pregunta:" The elephant is ______________ than mouse.",
        op0:"a) more biggest  ",
        op1:"b) more bigger ",
        op2:"c) bigger ",
        correcta:"2"
    },
    {
        id: 37,
        pregunta:" Paco is the _________________ guy of my class. ",
        op0:"a) funny  ",
        op1:"b) most funniest ",
        op2:"c) funniest ",
        correcta:"2"
    },
    {
        id: 38,
        pregunta:" Caviar is the _________________food in the world.  ",
        op0:"a)  more expensive  ",
        op1:"b) most expensive ",
        op2:"c) the expensive ",
        correcta:"1"
    },
    {
        id: 39,
        pregunta:"He ________________________ fun with his Friends.  ",
        op0:"a)  Was having  ",
        op1:"b) Were having  ",
        op2:"c) Was have ",
        correcta:"0"
    },
    {
        id: 40,
        pregunta:"We ______________________ dinner. ",
        op0:"a)  Weren t making ",
        op1:"b) Wasn ́t making  ",
        op2:"c)  Weren ́t make ",
        correcta:"0"
    },
    {
        id: 41,
        pregunta:"Susan ___________ pizza. ",
        op0:"a)  Were eat ",
        op1:"b) Was eating  ",
        op2:"c)  Were eating ",
        correcta:"1"
    },
    {
        id: 42,
        pregunta:"She gave _________ a birthday gift. I really like it. ",
        op0:"a) him",
        op1:"b) my  ",
        op2:"c) me ",
        correcta:"2"
    },
    {
        id: 43,
        pregunta:"I need to find my book. Where did you put ______?.",
        op0:"a) it",
        op1:"b) them",
        op2:"c) its",
        correcta:"0"
    },
    {
        id: 44,
        pregunta:" Do you feel okay? Can I help _______?.",
        op0:"a) your",
        op1:"b) me",
        op2:"c) you",
        correcta:"2"
    },
    {
        id: 45,
        pregunta:"_____ I borrow a pen, please?.",
        op0:"a) would",
        op1:"b) could",
        op2:"c) will",
        correcta:"1"
    },
    {
        id: 46,
        pregunta:"We _____ watch the movie las nigth, our tv was broken.",
        op0:"a) can't",
        op1:"b)  could",
        op2:"c) coudn't",
        correcta:"2"
    },
    {
        id: 47,
        pregunta:"Tonny ____ run fast when he was 10 years old.",
        op0:"a) can",
        op1:"b) was",
        op2:"c) could",
        correcta:"2"
    },
    {
        id: 48,
        pregunta: "This year, Jen __________ War and Peace.",
        op0: "a)  read",
        op1: "b) will read",
        op2:"c) reading",
        op3:"d) won't pay",
         correcta: "1"
    },
    {
        id:49,
        pregunta:"It_hard, but she's determined to do it.",
        op0:"a) will be",
        op1:"b) will been",
        op2:"c) be",
        op3:"d) is",
        correcta:"0"
    },
    {
        id: 50,
        pregunta:"_____ I _______ the discipline to study Spanish every day?",
        op0:"a) will/eat",
        op1:"b) have/you",
        op2:"c) will/have",
        op3:"d) is/have",
        correcta:"2",
    },
    {
        id: 51,
        pregunta:"What _____ you ______ with the money you found?",
        op0:"a) will/buy",
        op1:"b) will/not",
        op2:"c) won't/try",
        op3:"d) is/buy",
        correcta:"0",
    },
    {
        id:52,
        pregunta:"_______ until I've seen the manager!",
        op0:"a) won't see",
        op1:"b) going to",
        op2:"c) does leave",
        op3:"d) won't leave",
        correcta:"3"
    },
    {
        id: 53,
        pregunta: "Is your cousin _______ move to another apartment?",
        op0: "a) going",
        op1: "b) going to",
        op2:"c) will",
        op3:"d) will to",
         correcta: "1"
    },
    {
        id: 54,
        pregunta:"I _______ going to _____ my homework after I finish dinner.",
        op0:"a) am/do",
        op1:"b) am/doing",
        op2:"c) is/do",
        op3:"d) is/doing",
        correcta:"0",
    },
    {
        id: 55,
        pregunta:"______ your friend going to join us? Yes, she______.",
        op0:"a) is/is",
        op1:"b) is/will",
        op2:"c) will/is",
        op3:"d) is/going",
        correcta:"0"
    },
    {
        id: 56,
        pregunta:"We ______ going to ____ and see what happens before we make a decision.",
        op0:"a) are/going",
        op1:"b) is/is",
        op2:"c) will/going",
        op3:"d) are/wait",
        correcta:"0"
    },
    {
        id: 57,
        pregunta:" Jon _____ going to get a promotion this year.",
        op0:"a) isn't",
        op1:"b) aren't",
        op2:"c) won't",
        op3:"d) will",
        correcta:"0"
    },
    {
        id: 58,
        pregunta: "You _______ drink alcohol when you drive",
        op0: "a) don't have to",
        op1: "b) mustn't",
        op2:"c) can't",
        op3:"d) could't",
         correcta: "1"
    },
    {
        id:59,
        pregunta:"______ I have a coffe, please?",
        op0:"a) Would",
        op1:"b) Will",
        op2:"c) Should",
        op3:"d) Could",
        correcta:"3"
    },
    {
        id:60,
        pregunta:"You ________ smoke so much, it will be bad for your healt.",
        op0:"a) shouldn't",
        op1:"b) can't",
        op2:"c) would't",
        op3:"d) musn't",
        correcta:"0"
    },
    {
        id: 61,
        pregunta:"Lily _______ swim when she was six years old.",
        op0:"a) couldn't",
        op1:"b) shouldn't",
        op2:"c) musn't",
        op3:"d) can't",
        correcta:"0"
    },
    {
        id: 62,
        pregunta:"It ________ rain later.",
        op0:"a) might",
        op1:"b) can",
        op2:"c) should",
        op3:"d) has to",
        correcta:"0",
    },
    {
        id: 63,
        pregunta: "Have you ________ to a circus?",
        op0: "a) ever gone ",
        op1: "b) ever go",
        op2:"c) for gone  ",
        op3:"d) since go",
         correcta: "0"
    },
    {
        id:64,
        pregunta:"They have languages ________ 5 years",
        op0:"a) studied / since ",
        op1:"b) study / for",
        op2:"c) study / eve",
        op3:"d) studied / for",
        correcta:"3"
    },
    {
        id:65,
        pregunta:"He ________ drunk alchol",
        op0:"a) have / never",
        op1:"b) has / ever",
        op2:"c) has / never",
        op3:"d) have / for",
        correcta:"2"
    },
    {
        id: 66,
        pregunta: "it ________ rained here ________ march",
        op0:"a) hasn´t / ever ",
        op1:"b) hasn´t / since ",
        op2:"c) haven´t / never",
        op3:"d) haven´t / since",
        correcta:"1"
    },
    {
        id: 67,
        pregunta:"Have you ever ________ insects?",
        op0:"a) ate",
        op1:"b) eating",
        op2:"c) eat",
        op3:"d) eaten",
        correcta:"3",
    },
    {
        id: 68,
        pregunta: "If we ________ early, we will go to the cinema",
        op0: "a) finishes",
        op1: "b) finish",
        op2:"c) are finishing",
        op3:"d) will finish",
         correcta: "1"
    },
    {
        id:69,
        pregunta:"If he comes,I ________ go ",
        op0:"a) am going to",
        op1:"b) was going to",
        op2:"c) will",
        op3:"d) were",
        correcta:"2"
    },
    {
        id:70,
        pregunta:"If we ________ , we won´t be late.",
        op0:"a) hurry",
        op1:"b) hurries",
        op2:"c) happy",
        op3:"d) are going to hurries",
        correcta:"0"
    },
    {
        id: 71,
        pregunta: "If you don´t feel well, you ________ see a doctor.",
        op0:"a) are going to",
        op1:"b) was to ",
        op2:"c) must",
        op3:"d) doesn´t",
        correcta:"2"
    },
    {
        id: 72,
        pregunta: "It isn't too cold today, __________________?",
        op0: "a) is it",
        op1: "b) isn´t it",
        op2:"c) it is",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 73,
        pregunta: "She arrived too late, ____________________?",
        op0: "a) didn´t she",
        op1: "b) wasn´t she",
        op2:"c) did she",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 74,
        pregunta: " Your little Angie can't walk yet,____________________?",
        op0: "a) She can´t",
        op1: "b) can she",
        op2:"c) can´t she",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 75,
        pregunta: "When you arrived, she had already left, _______________?",
        op0: "a) hadn´t she",
        op1: "b) she didn´t",
        op2:"c) didn´t",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 76,
        pregunta: "I have a friend __________ speaks four languages.",
        op0: "a) which",
        op1: "b) that he",
        op2:"c) who",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 77,
        pregunta: "A technophobe is someone ___________ is scared of technology",
        op0: "a) that",
        op1: "b) which",
        op2:"c) where",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 78,
        pregunta: " We should only buy products ____________ can be recycled.",
        op0: "a) who",
        op1: "b) that",
        op2:"c) where",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 79,
        pregunta: "That's the shop ______________ I bought those shoes.",
        op0: "a) that",
        op1: "b) where",
        op2:"c) which",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 80,
        pregunta: "PAST SIMPLE: What is the correct past simple form of the verb to go?",
        op0: "a) gone",
        op1: "b) going",
        op2:"c) went",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 81,
        pregunta: "PAST PROGRESSIVE: Which sentence is in the past progressive tense?",
        op0: "a) I go to the store",
        op1: "b) I was going to the store",
        op2:"c)  I go to the store every day",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 82,
        pregunta: "PAST PERFECT: Choose the sentence that correctly uses the past perfect tense.",
        op0: "a)  She will finish her work before dinner",
        op1: "b) She finishes her work before dinner",
        op2:"c) She had finished her work before dinner",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 83,
        pregunta: "2nd CONDITIONAL: If I ___________ more time, I would have finished the project.",
        op0: "a) have",
        op1: "b) has",
        op2:"c) had",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 84,
        pregunta: " 3rd CONDITIONAL: What is the correct form of the 3rd conditional for this sentence?  If I ____________ you, I would have apologized.",
        op0: "a) am ",
        op1: "b) was",
        op2:"c) were",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 85,
        pregunta: ". Modals: Which modal verb is used for expressing obligation?",
        op0: "a) must",
        op1: "b) could",
        op2:"c) would",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 86,
        pregunta: ". Phrasal Verbs: I decided to abandon my old unhealthy habits and start exercising regularly",
        op0: "a) give in",
        op1: "b) give off",
        op2:"c) give up",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 87,
        pregunta: " Present Perfect: Which sentence uses the present perfect tense correctly?",
        op0: "a)  I studied yesterday",
        op1: "b)  I have studied for the exam ",
        op2:"c) I study every day",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 88,
        pregunta: " Passive Voice: In passive voice, the object of the sentence becomes the ___________.",
        op0: "a) subject",
        op1: "b) verb",
        op2:"c) adverb",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 89,
        pregunta: "Predictions with may and might:Choose the correct sentence using may for predictions.",
        op0: "a) He may have lunch with us",
        op1: "b) He might have lunch with us ",
        op2:"c) He may lunch with us",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 90,
        pregunta: "PAST SIMPLE: What is the correct past simple form of the verb to swim?",
        op0: "a) swimmed",
        op1: "b) swam",
        op2:"c) swum",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 91,
        pregunta: "PRESENT PERFECT: Which sentence correctly uses the present perfect tense?",
        op0: "a) I have visited Paris last year",
        op1: "b)  I visited Paris last year",
        op2:"c)  I have visited Paris before.",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 92,
        pregunta: "2nd CONDITIONAL: If she _________ English, she could have applied for the job.",
        op0: "a) knows",
        op1: "b) known",
        op2:"c) knowing",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 93,
        pregunta: " MODALS: Choose the modal verb for giving advice.",
        op0: "a) should",
        op1: "b)would ",
        op2:"c) might",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 94,
        pregunta: "PHRASAL VERBS: Which phrasal verb means to start something?",
        op0: "a) break up",
        op1: "b) bring up",
        op2:"c) bring about",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 95,
        pregunta: "PRESENT PERFECT: What is the correct form of the present perfect for the sentence? She ____________ her keys.",
        op0: "a) have lost",
        op1: "b) had lost",
        op2:"c) has lost",
        op3:"d) ",
         correcta: "2"
    },
    {
        id: 96,
        pregunta: "PAST PROGRESSIVE: What is the correct past progressive form of the verb to eat?",
        op0: "a) eating",
        op1: "b) ate",
        op2:"c) eats",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 97,
        pregunta: "PASSIVE VOICE: In passive voice, the agent performing the action is often preceded by the preposition ___________.",
        op0: "a) with",
        op1: "b) by",
        op2:"c) in",
        op3:"d) ",
         correcta: "1"
    },
    {
        id: 98,
        pregunta: "PREDICTIONS WITH MIGHT: Which sentence expresses a possibility using might?",
        op0: "a)  She might go to the party if she finishes her work.",
        op1: "b) She might went to the party last night.",
        op2:"c)  She might go to the party after finishing her work.",
        op3:"d) ",
         correcta: "0"
    },
    {
        id: 99,
        pregunta: " MODALS: Choose the correct modal verb for expressing a strong obligation.",
        op0: "a) can",
        op1: "b) must",
        op2:"c) may",
        op3:"d) ",
         correcta: "1"
    },

];

    

function cargarPreguntas() {
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;

    const h2 = document.createElement("h2");
    h2.textContent = (pregunta.id + 1) + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);

    const opciones = document.createElement("div");
    
    // Crear las opciones de respuesta
    opciones.appendChild(crearRadioButton(pregunta.id, "0", pregunta.op0));
    opciones.appendChild(crearRadioButton(pregunta.id, "1", pregunta.op1));
    opciones.appendChild(crearRadioButton(pregunta.id, "2", pregunta.op2));
    opciones.appendChild(crearRadioButton(pregunta.id, "3", pregunta.op3));


    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

// Función para crear un radio button
function crearRadioButton(idPregunta, valor, texto) {
    const div = document.createElement("div");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "p" + idPregunta;  // Asignar el mismo nombre a todas las opciones de la misma pregunta
    input.value = valor;  // Valor de la opción (0, 1, 2)
    input.id = "opcion_" + idPregunta + "_" + valor;

    // Añadir evento para guardar la respuesta seleccionada
    input.addEventListener("change", () => {
        respuestas[idPregunta] = valor; // Guardar la opción seleccionada en el array de respuestas
    });

    // Crear el label con el texto
    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.textContent = texto;

    // Agregar el input y el label al div
    div.appendChild(input);
    div.appendChild(label);

    return div;
}

// Función para verificar las respuestas
let resultado = document.getElementById("resultado");
resultado.onclick = function() {
    cantiCorrectas = 0;

    for (let i = 0; i < bd_juego.length; i++) {
        const pregunta = bd_juego[i];
        const respuestaSeleccionada = respuestas[i]; // Usar el array de respuestas

        if (respuestaSeleccionada == pregunta.correcta) {
            cantiCorrectas++;
            let idcorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idcorreccion).innerHTML = "&check;";
            document.getElementById(idcorreccion).className = "acierto";
        } else {
            let id = "p" + i + respuestaSeleccionada;
            let idcorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";  // Mostrar un "X" si la respuesta es incorrecta
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idcorreccion).innerHTML = "&check;";  // Mostrar un "check" en la opción correcta
            document.getElementById(idcorreccion).className = "acierto";
        }
    }
    mostrarMensajeFinal();
};

// Mostrar mensaje final con la cantidad de respuestas correctas
function mostrarMensajeFinal() {
    const totalPreguntas = bd_juego.length;
    const mensajeFinal = document.createElement("div");
    mensajeFinal.style.textAlign = "center";
    mensajeFinal.style.marginTop = "20px";
    mensajeFinal.style.fontSize = "24px";
    mensajeFinal.style.fontWeight = "bold";

    if (cantiCorrectas === totalPreguntas) {
        mensajeFinal.textContent = "¡Carajo si le Sabes :D!";
    } else {
        mensajeFinal.textContent = "¡Ups, Echale coquito :,c!";
    }

    document.getElementById("juego").appendChild(mensajeFinal);
}

// Cargar todas las preguntas al inicio
for (let i = 0; i < bd_juego.length; i++) {
    cargarPreguntas();
    numPregunta++;
}

// Cargar preguntas adicionales con audios
function cargarPreguntasAdicionales10() {
    const bd_juego_adicional = [
        {
            id: 100,
            pregunta: "SCRIPT 1",
            audio: "audio1.mp3", // Ruta al audio
            op0: "a) Tom is not in.",
            op1: "b) Sarah is not there.",
            op2: "c) Sarah called Tom.",
            op3: "d) Tom called Sarah.",
            correcta: "1",
        },
        {
            id: 101,
            pregunta: "SCRIPT 2",
            audio: "audio2.mp3",
            op0: "a) The tour is about modern civilizations",
            op1: "b) The exhibit is about recent artifacts.",
            op2: "c) The museum is closed.",
            op3: "d) Ancient civilizations left artifacts.",
            correcta: "3", 
        },
        {
            id: 102,
            pregunta: "SCRIPT 3",
            audio: "audio3.mp3" ,
            op0: "a) The woman doesn't like the new restaurant.",
            op1: "b) The man should avoid the new restaurant.",
            op2: "c) The woman recommends trying the new restaurant.",
            op3: "d) The man thinks the food is terrible",
            correcta: "2", 
        },
        {
            id: 103,
            pregunta: "SCRIPT 4",
            audio: "audio4.mp3" ,
            op0: "a) The sale is at ABC Electronics.",
            op1: "b) The sale is only on old gadgets.",
            op2: "c) The sale is next month.",
            op3: "d) The sale is on this weekend.",
            correcta: "3", 
        },
        {
            id: 104,
            pregunta: "SCRIPT 5",
            audio: "audio5.mp3" ,
            op0: "a) The candidate has no experience in project management.",
            op1: "b) The candidate's project was late and over budget.",
            op2: "c) The candidate led a successful project in the past.",
            op3: "d) The candidate is not willing to talk about their experience",
            correcta: "1", 
        },
    ];

    bd_juego_adicional.forEach((pregunta, index) => {
        const contenedor = document.createElement("div");
        contenedor.className = "contenedor-pregunta";
        contenedor.id = "adicional-" + pregunta.id;

        const h2 = document.createElement("h2");
        h2.textContent = (pregunta.id + 1) + " - " + pregunta.pregunta;
        contenedor.appendChild(h2);

        // Crear y agregar el elemento de audio
        const audio = document.createElement("audio");
        audio.src = pregunta.audio;  // Ruta al archivo de audio
        audio.controls = true;  // Permitir que el usuario controle la reproducción
        contenedor.appendChild(audio);
        
        // Crear las opciones de respuesta
        const opciones = document.createElement("div");
        opciones.appendChild(crearRadioButton(pregunta.id, "0", pregunta.op0));
        opciones.appendChild(crearRadioButton(pregunta.id, "1", pregunta.op1));
        opciones.appendChild(crearRadioButton(pregunta.id, "2", pregunta.op2));
        opciones.appendChild(crearRadioButton(pregunta.id, "3", pregunta.op3));

        contenedor.appendChild(opciones);

        // Añadir la pregunta al contenedor principal
        document.getElementById("juego-adicional10").appendChild(contenedor);
    });
}

cargarPreguntasAdicionales10();

// Objeto global para almacenar las respuestas seleccionadas
let respuestasSeleccionadas = {};

// Función para crear los labels (como ya tenías)
function crearLabel(valor, texto, preguntaId) {
    const label = document.createElement("label");
    label.setAttribute("for", "opcion" + valor);
    label.textContent = texto;
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "pregunta-" + preguntaId;  // Asegúrate de que el nombre de cada radio sea único por pregunta
    input.id = "opcion" + valor;
    input.value = valor;

    // Verifica si la respuesta fue previamente seleccionada
    if (respuestasSeleccionadas[preguntaId] === valor) {
        input.checked = true;  // Si la respuesta fue seleccionada, marcarla como checked
    }

    // Evento para guardar la respuesta seleccionada en la variable global
    input.addEventListener("change", function () {
        respuestasSeleccionadas[preguntaId] = valor;
    });

    label.appendChild(input);
    return label;
}

// Función para cargar las preguntas del examen
function cargarPreguntasAdicionales11() {
    const bd_juego_adicional = [
        {
            id: 106,
            pregunta: "What was the weather like during the day in the park?",
            op0: "a) Rainy",
            op1: "b) Cloudy",
            op2:"c) Sunny with a gentle breeze",
            op3:"d) Windy",
             correcta: "2"
        },
        {
            id: 107,
            pregunta: "What did the group do when they first entered the park?",
            op0: "a) Played frisbee",
            op1: "b) Had a picnic",
            op2:"c) Flew kites",
            op3:"d) Listened to music",
             correcta: "1"
        },
        {
            id: 108,
            pregunta: " What did the group observe while having their picnic?",
            op0: "a) People playing frisbee",
            op1: "b)  Musicians playing sad tunes",
            op2:"c) Families enjoying the day",
            op3:"d) Ducks swimming in the lake",
             correcta: "2"
        },
        {
            id: 109,
            pregunta: "What added to the joyful atmosphere in the park?",
            op0: "a) Rain",
            op1: "b) Sad music",
            op2:"c) Cheerful tunes played by musicians",
            op3:"d)  Silent surroundings",
             correcta: "2"
        },
        {
            id: 110,
            pregunta: "How did the day end for the group in the park?",
            op0: "a) They stayed overnight",
            op1: "b) They explored the park further",
            op2:"c) They joined a group of musicians",
            op3:"d) They gathered their belongings and headed home",
             correcta: "3"
        },
        
    ];

    bd_juego_adicional.forEach((pregunta) => {
        const contenedor = document.createElement("div");
        contenedor.className = "contenedor-pregunta";
        contenedor.id = "adicional-" + pregunta.id;

        const h2 = document.createElement("h2");
        h2.textContent = pregunta.id + " - " + pregunta.pregunta;  // Aquí no sumes 1 si no lo deseas
        contenedor.appendChild(h2);

        const opciones = document.createElement("div");
        const label1 = crearLabel("0", pregunta.op0, pregunta.id);
        const label2 = crearLabel("1", pregunta.op1, pregunta.id);
        const label3 = crearLabel("2", pregunta.op2, pregunta.id);
        const label4 = crearLabel("3", pregunta.op3, pregunta.id);

        opciones.appendChild(label1);
        opciones.appendChild(label2);
        opciones.appendChild(label3);
        opciones.appendChild(label4);

        contenedor.appendChild(opciones);
        document.getElementById("juego-adicional11").appendChild(contenedor);
    });
}

// Asegúrate de que esta función se llame al fin    al del archivo JavaScript
cargarPreguntasAdicionales11();

document.getElementById('resultado').onclick = async function () {
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const grupo = document.getElementById('grupo').value.trim();

    if (!nombre || !apellidos || !grupo) {
        alert('Por favor, llena todos los campos requeridos.');
        return;
    }

    // Calcular aciertos
    let cantiCorrectas = 0;
    bd_juego.forEach((pregunta, i) => {
        if (respuestas[i] == pregunta.correcta) {
            cantiCorrectas++;
        }
    });

    // Enviar datos al servidor
    try {
        const response = await fetch('http://localhost:3000/api/registrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, apellidos, grupo, aciertos: cantiCorrectas }),
        });

        if (response.ok) {
            alert('Tus resultados se han enviado correctamente.');
        } else {
            alert('Hubo un problema al enviar tus resultados. Intenta de nuevo.');
        }
    } catch (err) {
        console.error('Error al conectar con el servidor:', err);
        alert('Error al conectar con el servidor.');
    }
};

