import Mock from "../mock";

const database = {
  information: {
    name: 'Frank Shin',
    aboutContent: "I'm a software developer interested in several different areas of technology, including web, machine learning, and compilers.",
    age: '',
    phone: '703-232-6095',
    nationality: 'American',
    language: 'English, Korean',
    email: 'im@frnkshin.io',
    address: '',
    freelanceStatus: '',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://linkedin.com/in/frank-shin-3b06a917a/',
      dribbble: '',
      github: 'https://github.com/frnkshin'
    },
    brandImage: '/images/about-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/resume.pdf'
  },
  services: [
  ],
  reviews: [
  ],
  skills: [
    {
      title: "Java",
      value: 80
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "ReactJS",
      value: 80
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "zalla",
      subtitle: "URL Shortener with custom links.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://zal.la'
    },
    {
      id: 2,
      title: "gdaw",
      subtitle: "Golang Docs API Wrapper.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://github.com/frnkshin/gdaw'
    },
    {
      id: 3,
      title: "Amazon Review Classifier",
      subtitle: "Classify ~10000 Amazon reviews into positive and negative groups.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://github.com/frnkshin/Amazon-Review-Classifier'
    },
    {
      id: 4,
      title: "A Recommender System for Movies",
      subtitle: "Developed for Data Mining class at GMU.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://github.com/frnkshin/recommender-system'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Nov, 2019",
        position: "Software Developer",
        company: "Freddie Mac",
        details: ""
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2016 - 2018",
        graduation: "Bachelor of Science in Computer Science",
        university: "George Mason University",
        details: ""
      }
    ]
  },
  blogs: [
  ],
  contactInfo: {
    phoneNumbers: ['703-232-6095'],
    emailAddress: ['im@frnkshin.io'],
    address: "6321 Millwood Ct. Springfield VA 22152"
  }
};


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
