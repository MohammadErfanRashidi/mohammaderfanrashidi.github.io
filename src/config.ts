export const siteConfig = {
  name: "Mohammad Erfan Rashidi",
  title: "Junior Data Scientist",
  description: "Portfolio website of Mohammad Erfan Rashidi",
  accentColor: "#1d4ed8",
  social: {
    email: "mohammaderfanrashidi@gmail.com",
    linkedin: "www.linkedin.com/in/mohammad-erfan-rashidi-4a50b0284",
    github: "https://github.com/MohammadErfanRashidi",
  },
  aboutMe:
    "Data scientist who builds end‑to‑end machine learning solutions—from rigorous data cleaning and feature engineering to deploying interactive web apps (Streamlit & FastAPI)—spanning classification, clustering, and regression problems.",
  skills: ["Python", "SQL", "Data-Cleaning", "ML", "PowerBI", "MLOps"],
  projects: [
    {
      name: "Bank Term Deposit Subscription Prediction",
      description:
        "Predicted term deposit subscriptions from bank marketing data using a Random Forest and deployed an interactive Streamlit web app.",
      link: "https://github.com/MohammadErfanRashidi/Bank-Marketing-Classification",
      skills: ["Classification", "Random-Forest", "Feature-Engineering", "GridSearchCV", "MLOps"],
    },
    {
      name: "Customer Segmentation with K-Means Clustering",
      description:
        "Segmented credit card customers into five behavioral clusters with K-Means and deployed a Streamlit app that classifies new customers and recommends business strategies.",
      link: "https://github.com/MohammadErfanRashidi/Credit-Card-Customer-Segmentation",
      skills: ["Clustering", "K-Means", "KPI", "EDA", "Web-application"],
    },
    {
      name: "Life Expectancy Predictor",
      description:
        "Built a high‑accuracy Random Forest regressor to predict life expectancy from health and socioeconomic indicators, served via a FastAPI web app.",
      link: "https://github.com/MohammadErfanRashidi/Life-Expectancy-",
      skills: ["Regression", "Random-Forest", "FastAPI", "SQL", "VIF"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
