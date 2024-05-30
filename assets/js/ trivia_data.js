const questions = [
    { 
        question: "What song is famously associated with Ross and Rachel's relationship?",
        choice1: "With or Without You",
        choice2: "My Heart Will Go On",
        choice3: "I Will Always Love You",
        choice4: "Endless Love",
        answer: 1,
        hint: "It's a U2 song that Ross plays repeatedly after their breakup."
    },
    { 
        question: "Which friend was famously on a 'break' with Rachel?",
        choice1: "Chandler",
        choice2: "Joey",
        choice3: "Ross",
        choice4: "Phoebe",
        answer: 3,
        hint: "'We were on a break!'"
    },
    { 
        question: "What is the name of Ross and Carol's son?",
        choice1: "Ben",
        choice2: "Jack",
        choice3: "Joey Jr.",
        choice4: "Luke",
        answer: 1,
        hint: "He was played by twins, Cole and Dylan Sprouse."
    },
    { 
        question: "What does Joey never share?",
        choice1: "His money",
        choice2: "His food",
        choice3: "His clothes",
        choice4: "His car",
        answer: 2,
        hint: "Joey doesn't share food!"
    },
    { 
        question: "What was the name of Ross's second wife?",
        choice1: "Carol",
        choice2: "Emily",
        choice3: "Rachel",
        choice4: "Susan",
        answer: 2,
        hint: "She was British and their wedding was in London."
    },
    { 
        question: "What fruit is Ross allergic to?",
        choice1: "Bananas",
        choice2: "Apples",
        choice3: "Kiwi",
        choice4: "Strawberries",
        answer: 3,
        hint: "He has an allergic reaction after eating it in Monica's pie."
    },
    { 
        question: "What was Monica's biggest childhood insecurity?",
        choice1: "Her braces",
        choice2: "Her weight",
        choice3: "Her height",
        choice4: "Her freckles",
        answer: 2,
        hint: "She used to be overweight in high school."
    },
    { 
        question: "Which friend worked as a sous-chef?",
        choice1: "Chandler",
        choice2: "Phoebe",
        choice3: "Rachel",
        choice4: "Monica",
        answer: 4,
        hint: "She later becomes a head chef."
    },
    { 
        question: "What was the name of Chandler's roommate before Joey?",
        choice1: "Ross",
        choice2: "Eddie",
        choice3: "Kip",
        choice4: "Gunther",
        answer: 3,
        hint: "He is mentioned but never appears in the show."
    },
    { 
        question: "Who got stuck in an ATM vestibule with a supermodel?",
        choice1: "Joey",
        choice2: "Ross",
        choice3: "Chandler",
        choice4: "Gunther",
        answer: 3,
        hint: "It happened during a blackout in the city."
    },
    { 
        question: "What is Phoebe’s most famous song?",
        choice1: "Tiny Dancer",
        choice2: "Smelly Cat",
        choice3: "Yellow Submarine",
        choice4: "Little Red Corvette",
        answer: 2,
        hint: "It's about a not-so-fresh feline."
    },
    { 
        question: "What was the name of Joey's character on 'Days of Our Lives'?",
        choice1: "Dr. Drake Ramoray",
        choice2: "Dr. Richard Burke",
        choice3: "Dr. Mike Hannigan",
        choice4: "Dr. Frank Buffay",
        answer: 1,
        hint: "He was a neurosurgeon."
    },
    { 
        question: "Which friend got their head stuck in a turkey?",
        choice1: "Ross",
        choice2: "Rachel",
        choice3: "Joey",
        choice4: "Monica",
        answer: 3,
        hint: "It happened during Thanksgiving."
    },
    { 
        question: "What was the name of Ross’s pet monkey?",
        choice1: "Marcel",
        choice2: "Max",
        choice3: "Manny",
        choice4: "Maurice",
        answer: 1,
        hint: "He eventually went to live in a zoo."
    },
    { 
        question: "What did Joey name his recliner?",
        choice1: "Hugsy",
        choice2: "Pat the Chair",
        choice3: "Rosita",
        choice4: "La-Z-Boy",
        answer: 3,
        hint: "It's not a common name for furniture."
    },
    { 
        question: "What is the name of Chandler's father’s Las Vegas all-male burlesque?",
        choice1: "Viva Las Gaygas",
        choice2: "Guys and Dolls",
        choice3: "La Cage aux Folles",
        choice4: "Priscilla's Palace",
        answer: 1,
        hint: "It's a pun on a famous Las Vegas slogan."
    },
    { 
        question: "What is the name of Rachel's daughter?",
        choice1: "Emma",
        choice2: "Emily",
        choice3: "Ella",
        choice4: "Elise",
        answer: 1,
        hint: "She has the same name as Ross's second wife."
    },
    { 
        question: "Which character famously shouted, 'Pivot!'?",
        choice1: "Joey",
        choice2: "Ross",
        choice3: "Chandler",
        choice4: "Rachel",
        answer: 2,
        hint: "It happened while moving a couch."
    },
    { 
        question: "Which friend’s mother is a best-selling erotic novelist?",
        choice1: "Chandler",
        choice2: "Monica",
        choice3: "Phoebe",
        choice4: "Ross",
        answer: 1,
        hint: "Her name is Nora."
    },
    { 
        question: "What did Monica and Chandler name their twins?",
        choice1: "Jack and Judy",
        choice2: "Ben and Emma",
        choice3: "Erica and Jack",
        choice4: "Lily and Ross",
        answer: 3,
        hint: "One is named after Monica's father."
    },
    { 
        question: "Who sang the theme song for 'Friends'?",
        choice1: "The Rembrandts",
        choice2: "R.E.M.",
        choice3: "The Cranberries",
        choice4: "The B-52's",
        answer: 1,
        hint: "'I'll Be There for You.'"
    },
    { 
        question: "Who was married to a woman named Carol?",
        choice1: "Joey",
        choice2: "Ross",
        choice3: "Chandler",
        choice4: "Mike",
        answer: 2,
        hint: "She later realizes she is a lesbian."
    },
    { 
        question: "What game show did Joey appear on?",
        choice1: "Jeopardy!",
        choice2: "Pyramid",
        choice3: "Wheel of Fortune",
        choice4: "Family Feud",
        answer: 2,
        hint: "The host was Donny Osmond."
    },
    { 
        question: "What is the name of Ross's second wife?",
        choice1: "Carol",
        choice2: "Rachel",
        choice3: "Emily",
        choice4: "Susan",
        answer: 3,
        hint: "They married in London."
    },
    { 
        question: "Which friend was a masseuse?",
        choice1: "Monica",
        choice2: "Phoebe",
        choice3: "Rachel",
        choice4: "Chandler",
        answer: 2,
        hint: "She also sang at Central Perk."
    },
    { 
        question: "Which of Joey's sisters did Chandler kiss?",
        choice1: "Gina",
        choice2: "Mary Angela",
        choice3: "Dina",
        choice4: "Veronica",
        answer: 2,
        hint: "It happened at Joey's birthday party."
    },
    { 
        question: "What is the name of the coffee shop the friends frequently visit?",
        choice1: "Central Park",
        choice2: "Central Perk",
        choice3: "Central Coffee",
        choice4: "Perk Central",
        answer: 2,
        hint: "It's a pun on a famous New York City location."
    },
    { 
        question: "Which friend famously said, 'See? He's her lobster.'",
        choice1: "Monica",
        choice2: "Rachel",
        choice3: "Phoebe",
        choice4: "Joey",
        answer: 3,
        hint: "It refers to Ross and Rachel's destined love."
    },
    { 
        question: "Who was Ross's first wife?",
        choice1: "Rachel",
        choice2: "Emily",
        choice3: "Carol",
        choice4: "Susan",
        answer: 3,
        hint: "They had a son named Ben together."
    },
    { 
        question: "What did Chandler do to make money before switching careers to advertising?",
        choice1: "Accountant",
        choice2: "Actor",
        choice3: "Data processing",
        choice4: "Chef",
        answer: 3,
        hint: "No one really knew what his job was."
    }
];
