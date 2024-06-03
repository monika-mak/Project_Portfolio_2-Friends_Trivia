const questions = [
    { 
        question: "What song is famously associated with Ross and Rachel's relationship?",
        choice1: "With or Without You",
        choice2: "My Heart Will Go On",
        choice3: "I Will Always Love You",
        choice4: "Endless Love",
        correctChoice: 1,
        hint: "It's a U2 song that Ross plays repeatedly after their breakup."
    },
    { 
        question: "Which friend was famously on a 'break' with Rachel?",
        choice1: "Chandler",
        choice2: "Joey",
        choice3: "Ross",
        choice4: "Phoebe",
        correctChoice: 3,
        hint: "'We were on a break!'"
    },
    { 
        question: "What is the name of Ross and Carol's son?",
        choice1: "Ben",
        choice2: "Jack",
        choice3: "Joey Jr.",
        choice4: "Luke",
        correctChoice: 1,
        hint: "He was played by twins, Cole and Dylan Sprouse."
    },
    { 
        question: "What does Joey never share?",
        choice1: "His money",
        choice2: "His food",
        choice3: "His clothes",
        choice4: "His car",
        correctChoice: 2,
        hint: "Joey doesn't share food!"
    },
    { 
        question: "What is the name of Joey's stuffed penguin?",
        choice1: "Snowflake",
        choice2: "Hugsy",
        choice3: "Waddle",
        choice4: "Pengy",
        correctChoice: 2,
        hint: "Joey's bedtime pal."
    },
    { 
        question: "What is Chandler's middle name?",
        choice1: "Muriel",
        choice2: "Bing",
        choice3: "Matthew",
        choice4: "Marcel",
        correctChoice: 1,
        hint: "It's often a source of embarrassment for Chandler."
    },
    { 
        question: "Who officiates Monica and Chandler's wedding?",
        choice1: "Joey",
        choice2: "Ross",
        choice3: "Phoebe",
        choice4: "Rachel",
        correctChoice: 1,
        hint: "He gets ordained online."
    },
    { 
        question: "What was the name of Ross's second wife?",
        choice1: "Emily",
        choice2: "Rachel",
        choice3: "Carol",
        choice4: "Susan",
        correctChoice: 1,
        hint: "They had a disastrous wedding in London."
    },
    { 
        question: "What is Phoebe's twin sister's name?",
        choice1: "Ursula",
        choice2: "Lisa",
        choice3: "Monica",
        choice4: "Rachel",
        correctChoice: 1,
        hint: "She is a waitress in Mad About You."
    },
    { 
        question: "What is the name of the coffee shop where the friends hang out?",
        choice1: "Central Park",
        choice2: "Central Perk",
        choice3: "Coffee House",
        choice4: "Coffee Central",
        correctChoice: 2,
        hint: "It's located in Greenwich Village."
    },
    { 
        question: "What does Rachel's father do for a living?",
        choice1: "Lawyer",
        choice2: "Doctor",
        choice3: "Dentist",
        choice4: "Businessman",
        correctChoice: 2,
        hint: "He often disapproves of Rachel's life choices."
    },
    { 
        question: "What does Monica do for a living?",
        choice1: "Chef",
        choice2: "Teacher",
        choice3: "Photographer",
        choice4: "Writer",
        correctChoice: 1,
        hint: "She is very passionate about cooking."
    },
    { 
        question: "What is the name of Ross's pet monkey?",
        choice1: "Maurice",
        choice2: "Marcel",
        choice3: "Mark",
        choice4: "Milo",
        correctChoice: 2,
        hint: "He had to give him up to a zoo."
    },
    { 
        question: "What was the name of Rachel's fiance who she left at the altar?",
        choice1: "Barry",
        choice2: "Paolo",
        choice3: "Tag",
        choice4: "Joshua",
        correctChoice: 1,
        hint: "He was an orthodontist."
    },
    { 
        question: "What are Ross and Monica's parents' names?",
        choice1: "Jack and Judy",
        choice2: "Jerry and Judy",
        choice3: "Jack and Jill",
        choice4: "Jerry and Jane",
        correctChoice: 1,
        hint: "They are often critical of Monica."
    },
    { 
        question: "What is the name of Chandler's roommate before Joey?",
        choice1: "Eddie",
        choice2: "Kip",
        choice3: "Ben",
        choice4: "Pete",
        correctChoice: 2,
        hint: "He moved out before Joey moved in."
    },
    { 
        question: "What is the name of Phoebe's birth mother?",
        choice1: "Lily",
        choice2: "Ursula",
        choice3: "Phoebe",
        choice4: "Alice",
        correctChoice: 3,
        hint: "She lives in Montauk."
    },
    { 
        question: "What holiday does Chandler hate?",
        choice1: "Christmas",
        choice2: "Thanksgiving",
        choice3: "Halloween",
        choice4: "New Year's Eve",
        correctChoice: 2,
        hint: "It has something to do with his parents' divorce."
    },
    { 
        question: "What is Joey's favorite food?",
        choice1: "Pizza",
        choice2: "Sandwiches",
        choice3: "Spaghetti",
        choice4: "Burgers",
        correctChoice: 2,
        hint: "He would never share it."
    },
    { 
        question: "Who was Monica's first kiss?",
        choice1: "Chandler",
        choice2: "Ross",
        choice3: "Joey",
        choice4: "Richard",
        correctChoice: 2,
        hint: "It happened in a dark college party."
    },
    { 
        question: "What instrument does Phoebe play?",
        choice1: "Guitar",
        choice2: "Piano",
        choice3: "Drums",
        choice4: "Violin",
        correctChoice: 1,
        hint: "She often plays it at Central Perk."
    },
    { 
        question: "What fruit is Ross allergic to?",
        choice1: "Strawberries",
        choice2: "Bananas",
        choice3: "Kiwi",
        choice4: "Peaches",
        correctChoice: 3,
        hint: "He ends up in the hospital after eating it."
    },
    { 
        question: "What is Rachel's favorite movie?",
        choice1: "Dangerous Liaisons",
        choice2: "Die Hard",
        choice3: "Weekend at Bernie's",
        choice4: "Pretty Woman",
        correctChoice: 4,
        hint: "It's a romantic comedy from 1990."
    },
    { 
        question: "What is Chandler's job?",
        choice1: "IT Procurement Manager",
        choice2: "Statistical Analysis and Data Reconfiguration",
        choice3: "Transponster",
        choice4: "Advertising Executive",
        correctChoice: 2,
        hint: "Even his friends don't understand it."
    },
    { 
        question: "What was the name of Ross and Monica's dog when they were kids?",
        choice1: "Chi-Chi",
        choice2: "LaPooh",
        choice3: "Buddy",
        choice4: "Marcel",
        correctChoice: 1,
        hint: "The dog was hit by an ice cream truck."
    },
    { 
        question: "Who pees on Monica's leg when she is stung by a jellyfish?",
        choice1: "Joey",
        choice2: "Chandler",
        choice3: "Ross",
        choice4: "Rachel",
        correctChoice: 2,
        hint: "It was the only solution to her pain."
    },
    { 
        question: "Who plays Dr. Drake Ramoray on Days of Our Lives?",
        choice1: "Ross",
        choice2: "Joey",
        choice3: "Chandler",
        choice4: "Gunther",
        correctChoice: 2,
        hint: "It's Joey's acting role."
    },
    { 
        question: "What does Rachel name her daughter?",
        choice1: "Emma",
        choice2: "Emily",
        choice3: "Ella",
        choice4: "Evie",
        correctChoice: 1,
        hint: "Ross suggests the name."
    },
    { 
        question: "Who gets stuck in an ATM vestibule with a supermodel?",
        choice1: "Ross",
        choice2: "Chandler",
        choice3: "Joey",
        choice4: "Monica",
        correctChoice: 2,
        hint: "The model's name is Jill Goodacre."
    },
    { 
        question: "What dessert does Rachel try to make for Thanksgiving?",
        choice1: "Pumpkin Pie",
        choice2: "Trifle",
        choice3: "Cheesecake",
        choice4: "Brownies",
        correctChoice: 2,
        hint: "She accidentally mixes it with shepherd's pie."
    }
];

