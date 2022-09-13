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
