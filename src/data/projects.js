export const projects = [
    {
        id: 1,
        title: "Personal Portfolio",
        tagline: "My digital identity, built from scratch.",
        description: "A modern, responsive portfolio website with smooth animations, built from scratch.",
        fulldescription: "A modern, responsive personal portfolio designed and built from scratch to showcase my projects, skills, and journey as a computer science student. The site features a clean blue-and-white design system, smooth scroll-triggered animations powered by Motion, and a fully responsive layout that adapts beautifully from mobile to desktop. It includes dedicated sections for an about introduction, an animated resume timeline, a skills overview with animated progress bars, and a project gallery with detail pages routed through React Router. This project reflects my passion for frontend development and my commitment to writing clean, maintainable, component-based React code.",
        image: "/images/projects/portfolio.png",
        screenshots: ["/images/projects/portfolio-2.png", "/images/projects/portfolio-3.png"],
        features: [
            "Fully responsive layout that adapts from mobile to desktop",
            "Smooth scroll-triggered animations powered by Motion",
            "Dynamic project pages routed with React Router",
            "Reusable component architecture with data-driven sections"
        ],
        learned: [
            "How to structure a large React app into clean, reusable components",
            "How to design a consistent color system and visual hierarchy",
            "How to manage routing and dynamic pages with React Router"
        ],
        challenge: "One of the biggest challenges was keeping the animations smooth without hurting performance. I learned to use viewport-based triggers and the 'once' option so animations run a single time, which made scrolling feel fast and fluid.",
        role: "Designer & Full-Stack Developer",
        duration: "Ongoing",
        year: "2026",
        status: "Live",
        tags: ["React", "Tailwind CSS", "Motion", "React Router"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "To-Do List App",
        tagline: "A full-stack task manager that never loses your data.",
        description: "A task manager with add, delete, and complete features.",
        fulldescription: "A full-featured task management application that allows users to add, complete, and delete tasks through a clean and intuitive interface. The application is built with a Node.js backend and a SQL database layer, demonstrating my ability to connect a frontend to a real data store. Key features include persistent task storage and filtering between active and completed tasks. Building this project strengthened my understanding of full-stack development, CRUD operations, and how to structure a complete application from the database all the way to the user interface.",
        image: "/images/projects/todo.png",
        screenshots: ["/images/projects/todo-2.png", "/images/projects/todo-3.png"],
        features: [
            "Add, complete, and delete tasks",
            "Persistent storage with a SQL database",
            "Filter between active and completed tasks",
            "Clean interface"
        ],
        learned: [
            "How to connect a frontend to a Node.js backend",
            "How to design and query a SQL database",
            "How CRUD operations work in a real application"
        ],
        challenge: "The hardest part was keeping the UI in sync with the database. I solved it by refetching the task list after every change, which taught me how real full-stack data flow works.",
        role: "Full-Stack Developer",
        duration: "3 weeks",
        year: "2026",
        status: "Completed",
        tags: ["Node.js", "JavaScript", "HTML/CSS", "SQL"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Blackjack",
        tagline: "The classic casino game, reimagined for the browser.",
        description: "A cooperative Blackjack card game with turn-based play and score tracking.",
        fulldescription: "A cooperative Blackjack card game that brings the classic casino experience to the browser. The game implements the full rules of Blackjack, including turn-based gameplay, automatic score calculation, flexible ace handling, and win/loss detection. It was built with vanilla JavaScript, HTML, and CSS, focusing on clean game logic and dynamic DOM updates. This project sharpened my problem-solving skills and taught me how to translate real-world game rules into structured, reliable code.",
        image: "/images/projects/blackjack.png",
        screenshots: ["/images/projects/blackjack-2.png", "/images/projects/blackjack-3.png"],
        features: [
            "Full Blackjack rules with flexible ace handling",
            "Turn-based co-op gameplay",
            "Automatic score calculation and win/loss detection",
            "Polished card-table design"
        ],
        learned: [
            "How to model game rules as clean, testable logic",
            "How to update the DOM dynamically with vanilla JavaScript",
            "How to manage game state across turns"
        ],
        challenge: "Handling aces was tricky because they can count as 1 or 11. I wrote a scoring function that automatically picks the best value, which taught me to think carefully about edge cases.",
        role: "Frontend Developer",
        duration: "2 weeks",
        year: "2026",
        status: "Completed",
        tags: ["JavaScript", "HTML", "CSS"],
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        title: "Snake",
        tagline: "A modern remake of the timeless classic, built with Pygame.",
        description: "A modern remake of the classic Snake game, built with Python and Pygame.",
        fulldescription: "A modern remake of the classic Snake game, developed in Python using the Pygame library. The game features smooth and responsive controls, real-time score tracking and collision detection. Building this project deepened my understanding of game loops, event handling, and object-oriented programming in Python, while also teaching me how to manage state and timing in a real-time application.",
        image: "/images/projects/snake.png",
        screenshots: ["/images/projects/snake-2.png", "/images/projects/snake-3.png"],
        features: [
            "Smooth, responsive keyboard controls",
            "Real-time score tracking",
            "Collision detection for walls and self",
            "Start screen and gameover screen"
        ],
        learned: [
            "How a real-time game loop works",
            "Object-oriented programming in Python",
            "How to handle events and timing with Pygame"
        ],
        challenge: "The snake kept responding one frame late to key presses. I learned about event queues and fixed it by processing input once per frame, which made the controls feel instant.",
        role: "Game Developer",
        duration: "2 week",
        year: "2025",
        status: "Completed",
        tags: ["Python", "Pygame"],
        github: "#",
        demo: "#"
    }
];