
const projects = [
    {
        id: 1,
        title: "Smart URL Shortener",
        description:
            "Full-stack MERN URL shortener with analytics, QR codes, and admin dashboard.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/url-shortener",
        github: "https://github.com/example/url-shortener",
    },
    {
        id: 2,
        title: "Portfolio Admin Panel",
        description:
            "Personal portfolio with admin dashboard, visitor tracking, and project management.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/portfolio",
        github: "https://github.com/example/portfolio",
    },
    {
        id: 3,
        title: "E-commerce Store",
        description:
            "MERN-based e-commerce platform with product catalog, cart, and payment integration.",
        tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/ecommerce",
        github: "https://github.com/example/ecommerce",
    },
    {
        id: 4,
        title: "Blog CMS",
        description:
            "Content management system for blogs with user authentication and admin panel.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/blog-cms",
        github: "https://github.com/example/blog-cms",
    },
    {
        id: 5,
        title: "Chat App",
        description:
            "Real-time chat application with WebSocket integration and private rooms.",
        tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/chat-app",
        github: "https://github.com/example/chat-app",
    },
    {
        id: 6,
        title: "Task Manager",
        description:
            "Task management tool with drag-and-drop interface and multiple projects support.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/task-manager",
        github: "https://github.com/example/task-manager",
    },
    {
        id: 7,
        title: "Weather App",
        description:
            "Weather forecasting app using OpenWeatherMap API with beautiful UI.",
        tech: ["React", "Axios", "CSS", "API"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/weather-app",
        github: "https://github.com/example/weather-app",
    },
    {
        id: 8,
        title: "Expense Tracker",
        description:
            "Track daily expenses with charts and analytics in a MERN stack application.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
        image: "https://via.placeholder.com/300",
        live: "https://example.com/expense-tracker",
        github: "https://github.com/example/expense-tracker",
    },
];

const visitors = [
    {
        id: 1,
        ip: "2409:40d0:12d3:5bc5",
        country: "India",
        city: "Delhi",
        device: "Windows",
        browser: "Firefox",
        time: "2026-02-17 10:30",
    },
    {
        id: 2,
        ip: "103.21.44.12",
        country: "India",
        city: "Mumbai",
        device: "Android",
        browser: "Chrome",
        time: "2026-02-17 12:15",
    },
    {
        id: 3,
        ip: "192.168.1.15",
        country: "USA",
        city: "New York",
        device: "MacOS",
        browser: "Safari",
        time: "2026-02-16 09:45",
    },
    {
        id: 4,
        ip: "172.16.0.5",
        country: "UK",
        city: "London",
        device: "Windows",
        browser: "Edge",
        time: "2026-02-16 14:20",
    },
    {
        id: 5,
        ip: "10.0.0.12",
        country: "Canada",
        city: "Toronto",
        device: "Linux",
        browser: "Firefox",
        time: "2026-02-15 18:05",
    },
    {
        id: 6,
        ip: "203.0.113.55",
        country: "Australia",
        city: "Sydney",
        device: "iOS",
        browser: "Safari",
        time: "2026-02-14 22:10",
    },
    {
        id: 7,
        ip: "198.51.100.24",
        country: "Germany",
        city: "Berlin",
        device: "Windows",
        browser: "Chrome",
        time: "2026-02-14 11:30",
    },
    {
        id: 8,
        ip: "203.0.113.99",
        country: "India",
        city: "Bangalore",
        device: "Android",
        browser: "Chrome",
        time: "2026-02-13 15:50",
    },
];

const settings = {
    adminEmail: "arpit.prajapati@gmail.com",
    github: "https://github.com/arpitprajapati",
    linkedin: "https://linkedin.com/in/arpitprajapati",
    theme: "dark",
    siteTitle: "Arpit Prajapati Portfolio",
    siteDescription: "Full-stack MERN Developer | Projects | Admin Panel",
};

module.exports = {
    projects,
    visitors,
    settings,
};
