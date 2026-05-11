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
  skills: ["Data Science (DS)", "Machine Learning (ML)", "Deep Learning (DL)", "Business Intelligence (BI)", "Natural Language Processing (NLP)"],
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
      skills: ["Regression", "REST", "FastAPI", "SQL", "VIF"],
    },
  ],
  certificates: [
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    logo: "/logos/images.png",        
    description: "End-to-end data analysis with Python, statistics, machine learning, and data storytelling.",
    skills: ["Python", "Data Cleaning", "Exploratory Data Analysis (EDA)", "Regression", "Classification"],
    link: "https://www.credly.com/badges/ac571f08-0daa-4c01-bf46-2e230d1710f7/linked_in_profile",
  },
  {
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google",
    logo: "/logos/images.png",
    description: "Data transformation, pipeline creation, and dashboard design for business decision-making.",
    skills: ["SQL", "BigQuery", "Data Modeling", "ETL", "Tableau"],
    link: "https://www.coursera.org/account/accomplishments/specialization/S1AMNZ4HM04C",
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    issuer: "IBM",
    logo: "/logos/ibm-logo.png",
    description: "Supervised and unsupervised learning, deep learning, and ML deployment with Python.",
    skills: ["Scikit-Learn", "Hyperparameter Tuning", "Feature Engineering", "Model Deployment", "Convolutional Neural Networks (CNN)"],
    link: "https://www.coursera.org/account/accomplishments/specialization/EJ81OBR4Y0DK",
  },
],
  education: [
    {
      school: "University of Tehran",
      degree: "MBA",
      achievements: [
        "Business-first mindset aligns data projects with strategic goals.",
        "Cross-functional leadership bridges the gap between technical work and business stakeholders.",
        "Financial modeling experience sharpens quantitative analysis and ROI thinking.",
      ],
    },
    {
      school: "University of Tehran",
      degree: "Minor in Psychology",
      achievements: [
        "Experimental design skills are the foundation for A/B testing and hypothesis-driven analysis.",
        "Cognitive bias knowledge helps build more interpretable, user-centric models.",
        "Psychometrics training improves handling of noisy data and feature engineering.",
      ],
    },
    {
      school: "University of Tehran",
      degree: "Bachelor of Arts - BA, Spanish Language and Literature",
      achievements: [
        "Clear communication turns complex data into compelling stories for any audience.",
        "Textual analysis skills directly transfer to mining unstructured data for patterns.",
        "Cross-cultural competence makes collaboration in international teams seamless.",
      ],
    },
  ],
};
