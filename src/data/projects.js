export const projects = [
    {
        _id: "6a8584d67b4ba4c465cda45b",
        title: "AI Management Agent",
        tagline: "A bilingual AI system that generates comprehensive management reports.",
        description: "A full-stack AI application that analyzes management topics in Persian or English and generates structured, professional reports.",
        image: "/images/projects/management-agent.png",
        github: "https://github.com/ariya-rajaeinezhad/Management-Agent",
        role: "Full-Stack Developer & AI Integration Specialist",
        duration: "4 weeks",
        year: "2026",
        status: "Completed",
        fulldescription: "A bilingual (Persian/English) AI-powered system that generates comprehensive, structured management reports based on the four fundamental functions of management: Planning, Organizing, Leading, and Controlling. Originally developed for a university Management Principles course, this project bridges classical management theory with modern AI engineering. It features a stunning ocean-themed UI with glassmorphism, seamless language switching with full RTL support, and smart currency handling (Iranian Toman for Persian, USD for English). The backend is a robust FastAPI application with Pydantic validation, automatic retry logic, and a local SQLite database for report archiving, while the frontend is a highly responsive React application built with Vite and Tailwind CSS v4.",
        challenge: "The biggest challenge was ensuring the LLM consistently returned valid, structured JSON without hallucinating or breaking the schema, especially when dynamically switching between languages and currency formats. I solved this by implementing a robust retry mechanism using `tenacity`, strict Pydantic data validation, and dynamic prompt engineering that adapts to the user's selected language, ensuring reliable and academically sound output every time.",
        tags: ["React", "FastAPI", "Python", "Tailwind CSS v4", "OpenRouter API", "SQLite", "Vite", "Pydantic"],
        features: [
            "Bilingual support (Persian/English) with seamless RTL/LTR layout switching",
            "AI-powered analysis using the 4 classical functions of management",
            "Smart currency handling (Iranian Toman for Persian, USD for English)",
            "Full CRUD operations for report archiving using a local SQLite database",
            "Markdown export functionality for offline use and sharing",
            "Modern, responsive UI with an ocean dark theme and glassmorphism effects"
        ],
        screenshots: ["/images/projects/management-agent-2.png", "/images/projects/management-agent-3.png"],
        learned: [
            "How to integrate LLMs with strict JSON schema enforcement and automatic retry logic",
            "How to build a bilingual, RTL-supported React application with a custom i18n context",
            "How to design a clean monorepo architecture separating a FastAPI backend from a Vite frontend",
            "How to implement robust error handling and data validation using Pydantic"
        ]
    },
    {
        _id: "6a8584d67b4ba4c465cda457",
        title: "Personal Portfolio",
        tagline: "My digital identity, built from scratch.",
        description: "A modern, responsive portfolio website with smooth animations, built from scratch.",
        image: "/images/projects/portfolio.png",
        github: "https://github.com/ariya-rajaeinezhad/portfolio",
        demo: "https://portfolio-nine-drab-65.vercel.app/",
        role: "Designer and Full-Stack Developer",
        duration: "3 weeks",
        year: "2026",
        status: "Completed",
        fulldescription: "A modern, responsive personal portfolio designed and built from scratch to showcase my projects, skills, and journey as a computer science student. The site features a clean blue-and-white design system, smooth scroll-triggered animations powered by Motion, and a fully responsive layout that adapts beautifully from mobile to desktop. It includes dedicated sections for an about introduction, an animated resume timeline, a skills overview with animated progress bars, and a project gallery with detail pages routed through React Router. This project reflects my passion for Full-Stack development and my commitment to writing clean, maintainable, component-based React code.",
        challenge: "One of the biggest challenges was keeping the animations smooth without hurting performance. I learned to use viewport-based triggers and the 'once' option so animations run a single time, which made scrolling feel fast and fluid.",
        tags: ["Node.js", "Tailwind Css", "React", "MongoDB", "React Router", "Motion"],
        features: [
            "Fully responsive layout that adapts from mobile to desktop",
            "Smooth scroll-triggered animations powered by Motion",
            "Dynamic project pages routed with React Router",
            "Reusable component architecture with data-driven sections"
        ],
        screenshots: ["/images/projects/portfolio-2.png", "/images/projects/portfolio-3.png"],
        learned: [
            "How to structure a large React app into clean, reusable components",
            "How to design a consistent color system and visual hierarchy",
            "How to manage routing and dynamic pages with React Router"
        ]
    },
    {
        _id: "6a8584d67b4ba4c465cda458",
        title: "To-Do List App",
        tagline: "A full-stack task manager that never loses your data.",
        description: "A task manager with add, delete, and complete features.",
        image: "/images/projects/todo.png",
        github: "https://github.com/ariya-rajaeinezhad/ToDo-App",
        role: "Full-Stack Developer",
        duration: "3 weeks",
        year: "2026",
        status: "Completed",
        fulldescription: "A full-featured task management application that allows users to add, complete, and delete tasks through a clean and intuitive interface. The application is built with a Node.js backend and a SQL database layer, demonstrating my ability to connect a frontend to a real data store. Key features include persistent task storage and filtering between active and completed tasks. Building this project strengthened my understanding of full-stack development, CRUD operations, and how to structure a complete application from the database all the way to the user interface.",
        challenge: "The hardest part was keeping the UI in sync with the database. I solved it by refetching the task list after every change, which taught me how real full-stack data flow works.",
        tags: ["Node.js", "JavaScript", "HTML/CSS", "SQL"],
        features: [
            "Add, complete, and delete tasks",
            "Persistent storage with a SQL database",
            "Filter between active and completed tasks",
            "Clean interface"
        ],
        screenshots: ["/images/projects/todo-2.png", "/images/projects/todo-3.png"],
        learned: [
            "How to connect a frontend to a Node.js backend",
            "How to design and query a SQL database",
            "How CRUD operations work in a real application"
        ]
    },
    {
        _id: "6a8584d67b4ba4c465cda459",
        title: "Blackjack",
        tagline: "The classic casino game, reimagined for the browser.",
        description: "The classic casino game, reimagined for the browser.",
        image: "/images/projects/blackjack.png",
        github: "https://github.com/ariya-rajaeinezhad/BlackJack",
        role: "Frontend Developer",
        duration: "2 weeks",
        year: "2026",
        status: "Completed",
        fulldescription: "A cooperative Blackjack card game that brings the classic casino experience to the browser. The game implements the full rules of Blackjack, including turn-based gameplay, automatic score calculation, flexible ace handling, and win/loss detection. It was built with vanilla JavaScript, HTML, and CSS, focusing on clean game logic and dynamic DOM updates. This project sharpened my problem-solving skills and taught me how to translate real-world game rules into structured, reliable code.",
        challenge: "Handling aces was tricky because they can count as 1 or 11. I wrote a scoring function that automatically picks the best value, which taught me to think carefully about edge cases.",
        tags: ["JavaScript", "HTML", "CSS"],
        features: [
            "Full Blackjack rules with flexible ace handling",
            "Turn-based co-op gameplay",
            "Automatic score calculation and win/loss detection",
            "Polished card-table design"
        ],
        screenshots: ["/images/projects/blackjack-2.png", "/images/projects/blackjack-3.png"],
        learned: [
            "How to model game rules as clean, testable logic",
            "How to update the DOM dynamically with vanilla JavaScript",
            "How to manage game state across turns"
        ]
    },
    {
        _id: "6a8584d67b4ba4c465cda45a",
        title: "Snake",
        tagline: "A modern remake of the timeless classic, built with Pygame.",
        description: "A modern remake of the timeless classic, built with Pygame.",
        image: "/images/projects/snake.png",
        github: "https://github.com/ariya-rajaeinezhad/Snake",
        role: "Game Developer",
        duration: "2 week",
        year: "2025",
        status: "Completed",
        fulldescription: "A modern remake of the classic Snake game, developed in Python using the Pygame library. The game features smooth and responsive controls, real-time score tracking and collision detection. Building this project deepened my understanding of game loops, event handling, and object-oriented programming in Python, while also teaching me how to manage state and timing in a real-time application.",
        challenge: "The snake kept responding one frame late to key presses. I learned about event queues and fixed it by processing input once per frame, which made the controls feel instant.",
        tags: ["Python", "Pygame"],
        features: [
            "Smooth, responsive keyboard controls",
            "Real-time score tracking",
            "Collision detection for walls and self",
            "Start screen and gameover screen"
        ],
        screenshots: ["/images/projects/snake-2.png", "/images/projects/snake-3.png"],
        learned: [
            "How a real-time game loop works",
            "Object-oriented programming in Python",
            "How to handle events and timing with Pygame"
        ]
    }
];