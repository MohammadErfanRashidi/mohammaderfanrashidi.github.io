export const siteConfig = {
  name: "Mohammad Erfan Rashidi",
  title: "Junior Data Scientist",
  description: "Portfolio website of Mohammad Erfan Rashidi",
  accentColor: "#000000",
  social: {
    email: "mohammaderfanrashidi@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammad-erfan-rashidi-4a50b0284",
    github: "https://github.com/MohammadErfanRashidi",
    whatsapp: "https://wa.me/989352170440",
  },
  aboutMe:
    "My practice in data science and business intelligence centres on translating raw data into strategic insight. With a strong foundation in business administration, I evaluate analytical opportunities through a commercial lens, design KPI frameworks, and deliver executive-ready narratives that drive informed decision-making.\nI engineer end‑to‑end machine learning and deep learning solutions—from rigorous data cleaning and feature engineering to model deployment—solving classification, regression, and clustering challenges. I emphasise robustness, interpretability, and scalability to ensure AI systems generate measurable value.\nA deep engagement with natural language processing, grounded in computational linguistics and formal study of language and psychology, enables me to model unstructured text, uncover semantic patterns, and build systems that understand and generate human language at scale.\nMy multidisciplinary education—an MBA, a minor in psychology, and a major in Spanish language and literature—provides a distinct analytical advantage: business acumen aligns projects with strategy; psychological and linguistic training refines experimental design, textual analysis, and user‑centric thinking, all converging to strengthen my work in data science, artificial intelligence, and natural language processing.",
  skills: ["Data Science (DS)", "Machine Learning (ML)", "Deep Learning (DL)", "Artificial Intelligence (AI)", "Natural Language Processing (NLP)", "Business Intelligence (BI)"],
  projects: [
    {
      name: "Classification:\nBank Marketing",
      description:
        "This project tackles a classic customer conversion challenge: predicting which bank clients will subscribe to a term deposit after a direct marketing campaign. Using historical call data from a Portuguese bank, I engineered a set of binary indicators that capture the most predictive signals—such as previous campaign successes, favorable contact months, and specific job categories—while maintaining interpretability. After exploring the data and validating against a dummy baseline, a Random Forest classifier was chosen for its strong balance of accuracy (ROC AUC 0.906) and recall on the minority class, ensuring that high-potential leads are not overlooked.\nThe trained model is packaged into an interactive Streamlit application, making the prediction logic accessible to non‑technical stakeholders. Users can either input client details manually for an instant subscription forecast, or upload a CSV file for batch processing. The app automatically applies the same cleaning and feature‑engineering steps, scales numeric inputs, and returns predictions along with downloadable results. This end‑to‑end pipeline—from raw marketing data to a business‑ready web interface—demonstrates the full cycle of a machine learning solution designed for real‑world decision support.",
      link: "https://github.com/MohammadErfanRashidi/Bank-Marketing-Classification",
      skills: ["Classification", "Random-Forest", "Feature-Engineering", "GridSearchCV", "MLOps"],
    },
    {
      name: "Regression:\nLife Expectancy",
      description:
        "This project predicts national life expectancy using health and socioeconomic indicators from the WHO Global Health Observatory. After rigorous data cleaning and exploratory analysis, I engineered interaction and polynomial features—such as mortality‑BMI interactions and log‑transformed HIV rates—to capture non‑linear relationships. Multiple regression models were tested, and a Random Forest achieved an R² of 0.958 with an RMSE of 1.93 years, explaining over 95% of the variance in life expectancy.\nThe trained model is deployed as a FastAPI web application, exposing a REST endpoint that accepts JSON input and returns an instant prediction. A lightweight HTML frontend allows non‑technical users to adjust sliders and see the expected life expectancy update in real time. This end‑to‑end pipeline—from raw WHO data to an interactive API—demonstrates the full cycle of building, validating, and serving a high‑accuracy regression model for public health insight.",
      link: "https://github.com/MohammadErfanRashidi/Life-Expectancy-",
      skills: ["Regression", "REST", "FastAPI", "SQL", "VIF"],
    },
    {
      name: "Clustering:\nCredit Card Segmentation",
      description:
        "This project segments credit card customers into five distinct behavioural clusters using K‑Means clustering. After rigorous data cleaning, I engineered domain‑driven features—such as cash advance ratio and purchase frequency—and refined them through correlation analysis, skewness treatment, and multimodality checks, retaining four highly interpretable dimensions. K‑Means with 5 clusters was chosen after comparing silhouette scores and Davies‑Bouldin indices with DBSCAN, and the resulting segments reveal clear profiles, from 'Everyday Super Users' to 'Cash‑Advance Dependent', each accompanied by actionable business strategies.\nThe trained model, scaler, and segment profiles are serialized and served through an interactive Streamlit web application. Users input a new customer’s transaction behaviour, and the app instantly classifies them into a segment, displaying a descriptive profile and a tailored strategic recommendation. This end‑to‑end pipeline—from raw transaction data to a business‑ready decision tool—demonstrates how unsupervised learning can drive targeted marketing, risk management, and product personalisation without friction.",
      link: "https://github.com/MohammadErfanRashidi/Credit-Card-Customer-Segmentation",
      skills: ["Clustering", "K-Means", "KPI", "EDA", "Web-application"],
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
      degree: "Master of Business Administration (MBA)",
      logo: "/logos/University_of_Tehran_logo.svg.png",
      achievements: [
        "A business‑first approach ties data projects directly to company goals.",
        "Leading across teams connects technical work with real business needs.",
        "Building financial models sharpens number analysis and ROI thinking.",
      ],
    },
    {
      school: "University of Tehran",
      degree: "Bachelor of Arts,\nMajor in Spanish Language and Literature,\nMinor in Psychology",
      logo: "/logos/University_of_Tehran_logo.svg.png",
      achievements: [
        "Combined literary analysis and psychological research methods to extract patterns from unstructured text and human behavior data.",
        "Applied experimental design and statistical reasoning from psychology, together with clear communication skills from language studies, to deliver actionable data insights.",
        "Leveraged cross‑cultural competence and cognitive bias awareness to build inclusive, user‑centric data products for diverse audiences.",
      ],
    },
  ],
};
