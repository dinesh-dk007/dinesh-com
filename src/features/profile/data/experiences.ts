import { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "Rocket India",
    companyLogo: "/images/companies/RocketIndia.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Software Developer",
        year: "07.2026 - ꝏ {Chennai} ",
        employmentType: "Intern",
        icon: "code",
        skills: [
          "Python", "Java",
          "Software Development",
          "Problem Solving",
          "Algorithms",
          "Data Engineering",
          "Teamwork"
        ],
        expanded: true
      }
    ],
    current: true
  },
  {
    company: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "R M K College of Engineering and Technology",
        year: "09.2023 — present",
        icon: "education",
        description:
          "- Currently studying for a Bachelor's degree in Computer Science Engineering.\n- Language Proficiency: B1 English Level.\n- Achieved several awards, including:\n  - Ranked 2nd place in Inter-Department Coding Competition.\n  - Compeletion of Advance Java Fundamentals Course from [Iamneo](https://iamneo.ai/).\n  - Compeletion of Web Development Frameworks Course from [Iamneo](https://iamneo.ai/).",
        skills: [
          "Engineering",
          "C",
          "C++",
          "Advance Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Development Lifecycle",
          "Self-learning",
          "Teamwork",
          "Presentation",
          "Leadership",
          "Communication",
          "Problem Solving",
        ]
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Velammal Vidyalaya Higher Secondary School CBSE",
        year: "01.2012 — 03.2023",
        icon: "school",
        description:
          "- Achieved numerous awards:\n  - Gold Medal in athletics 400m Relay Race\n- Achieved the title of Outstanding Student from Grade 2-12.\n",
        skills: [
          "Python",
          "Math",
          "History",
          "MySQL",
          "Science",
        ]
      }
    ]
  }
];
