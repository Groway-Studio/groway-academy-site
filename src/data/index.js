import user from "./assets/user.png";
import ratingStarsIcon from "./assets/star-filled.png";
import unratingStarsIcon from "./assets/star.png";

export const fakeCustomers = [
  {
    id: 1,
    ratingStars: `${ratingStarsIcon} `.repeat(5).trim().split(" "),
    unratingStars: [],
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing.",
    profilePicture: user,
  },
  {
    id: 2,
    ratingStars: `${ratingStarsIcon} `.repeat(3).trim().split(" "),
    unratingStars: `${unratingStarsIcon} `.repeat(2).trim().split(" "),
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing.",
    profilePicture: user,
  },
  {
    id: 3,
    ratingStars: `${ratingStarsIcon} `.repeat(3).trim().split(" "),
    unratingStars: `${unratingStarsIcon} `.repeat(2).trim().split(" "),
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing.",
    profilePicture: user,
  },
];

export const filtersData = [
  { title: "Nivel", options: ["Principiante", "Medio", "Experimentado"] },
  {
    title: "Precio",
    options: ["$0 - $30", "$30 - $60", "$60 - $100", "+ $100"],
  },
  {
    title: "Tecnología",
    options: ["Python", "Bases de datos", "Git", "SCRUM"],
  },
];

export const courses_categories = [
  {
    title: "- Categorías -",
    value: "",
  },
  {
    title: "Curso",
    value: "curso",
  },
  {
    title: "Bootcamp",
    value: "bootcamp",
  },
  {
    title: "Webinar",
    value: "webinar",
  },
];

import python from "../assets/next-courses/python.svg";
import git from "../assets/git.png";
import database from "../assets/database.jpg";
import interview from "../assets/interview.jpeg";

export const courses = [
  {
    id: 1,
    title: "Python de 0 a Experto",
    description: "Lorem Ipsum",
    category: "curso",
    technology: "Python",
    level: "Principiante",
    image: python,
    price: 25,
  },
  {
    id: 2,
    title: "Diseño y administración de base de datos",
    description: "Lorem Ipsum",
    category: "bootcamp",
    technology: "Bases de datos",
    level: "Experimentado",
    image: database,
    price: 50,
  },
  {
    id: 3,
    title: "Git de 0 a experto",
    description: "Lorem Ipsum",
    category: "curso",
    technology: "Git",
    level: "Principiante",
    image: git,
    price: 70,
  },
  {
    id: 4,
    title: "Preparación para entrevistas técnicas",
    description: "Lorem Ipsum",
    category: "webinar",
    technology: "SCRUM",
    level: "Medio",
    image: interview,
    price: 120,
  },
];
