import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Shakespear’s Text Generator RNN + LSTM ',
        description: "This project showcases the implementation of a sophisticated text generation system utilizing a Recurrent Neural Network (RNN) with Long Short-Term Memory (LSTM) architecture trained on Shakespearean text data. By meticulously preparing the dataset and fine-tuning hyperparameters, the model demonstrates the ability to generate coherent and contextually relevant text reminiscent of Shakespeare's style. Furthermore, the project highlights proficiency in deep learning techniques, data preprocessing, model development, and optimization, reflecting a strong foundation in machine learning and natural language processing. (Check It Out On My GitHub)",
        tools: ['PyTorch', 'Numpy', 'Jupiter NoteBook'],
        role: 'Hustler',
        code: '',
        demo: '',
        image: crefin,
        link: 'https://github.com/EyadAbouKer/Shakespeare_text_Generator_RNN_LSTM/tree/main',
        pic: '/RNN.jpeg',
    },
    {
        id: 2,
        name: 'EEG Brain Waves Activity Analyzer',
        description: 'This project encompasses the development and evaluation of neural networks tailored for decoding motor imagery from EEG data. The architecture utilizes 4 convolutional layers, batch normalization, activation functions, pooling layers, dropout regularization, and a fully connected layer to effectively capture spatial and temporal patterns in EEG signals and classify them into different classes. Through training on random data and tracking accuracy metrics, the model demonstrates promising performance, achieving an accuracy of approximately 82% after 100 epochs. (Check It Out On My GitHub)',
        tools: ["PyTorch" , "NumPy", "Matplotlib", "PyCharm", "Jupiter Notebooks"],
        role: 'Researcher',
        code: '',
        demo: '',
        image: travel,
        link: 'https://github.com/EyadAbouKer/EEG-Neural-Network/tree/main',
        pic: '/EEGpic.jpeg',
    },
    {
        id: 3,
        name: 'CondensaCore - AI-Enhanced YouTube Consumption',
        description: "In an era where time is a precious commodity, especially for students and professionals, CondensaCore emerges as a groundbreaking solution. A YouTube Video Summarizer Web App, developed during the intense 24-hour ConUHacks challenge, demonstrates my ability to innovate under pressure. CondensaCore intelligently condenses lengthy lectures into digestible summaries, empowering users to grasp key content in minutes. This project showcases my proficiency in programming and passion for AI applications in everyday life. CondensaCore isn't just about saving time; it's about enhancing the way we engage with digital content.",
        tools: ['React', 'Bootstrap', 'Figma', 'Flask', 'VENV', 'CORS', 'OpenAI GPT4 API', 'Youtube-Transcript API'],
        code: '',
        role: '24 hours Hackathon Competitor',
        demo: '',
        image: "",
        link: 'https://devpost.com/software/condensacore',
        pic: '/Summarizer.jpeg',
    },
    {
        id: 4,
        name: 'KnowTap – NFC powered phone cover',
        description: "To enhance interpersonal communication in the face of the expanding array of online communication avenues and the proliferation of social media handles and email addresses, I have devised a solution: a smartphone cover powered by NFC technology. This innovation aims to alleviate the challenges associated with sharing such information in person, thereby facilitating seamless interaction",
        tools: ['JS', 'HTML','CSS', 'NFC Chips (NTAG213)'],
        code: '',
        demo: '',
        image: "",
        role: '24 hours Hackathon Competitor',
        link: 'https://eyadabouker.github.io/nfc-smartphone-cover/goog.html',
        pic: '/NFC.jpeg',
    },
    {
        id: 5,
        name: 'Mechanical Servo Design',
        description: "A project implemeted to compete to enter one of Canadas best Space exploration Hubs, Space Concordia, where i am serving under CDH (Command and data handling) team ",
        tools: ['JS', 'HTML','CSS'],
        code: '',
        demo: '',
        image: "",
        role: 'Developer',
        link: 'https://wokwi.com/projects/343666335670075988',
        pic: '/servo.jpeg',
    },
    {
        id: 6,
        name: 'Dungeons And Dragons game – C++',
        description: "in an arena where players engage in battles and adventures. It begins with the main function, where a game session is initiated. The player is prompted to choose a character from a list including an Axe-wielder, an Assassin, a Blood Seeker, or a Spirit Breaker. After selecting a character, the game initializes and the chosen player is prepared for battle. A campaign is loaded, offering a series of challenges for the player to overcome. The player navigates through maps, encountering enemies, chests with loot, friendly characters, and doors leading to new areas. The player's movements are controlled using WASD keys, with 'q' to quit the game. Upon encountering enemies, the player engages in combat within a combat arena, with outcomes determining whether the player progresses or faces defeat. Loot found in chests can be added to the player's inventory. If the player successfully navigates through a map and accesses a door, they proceed to the next stage of the campaign. The game continues until the player decides to quit.",
        tools: ['C++', 'CMake'],
        code: '',
        demo: '',
        image: "",
        role: 'A try to show my OOP proficiency in C++',
        link: 'https://www.youtube.com/watch?v=DZtvYKIUk3Q',
        pic: '/dragons.jpeg',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },