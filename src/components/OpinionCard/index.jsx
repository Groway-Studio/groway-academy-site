import styles from "./opinion_card.module.scss";

const OpinionCard = ({
  ratingStars,
  unratingStars,
  comment,
  profilePicture,
}) => {
  return (
    <li className={styles.opinion__card}>
      <div className={styles.opinion__card_content}>
        {ratingStars.map((image, index) => (
          <img src={image} key={index} alt="rating star" draggable={false} />
        ))}

        {unratingStars.map((image, index) => (
          <img src={image} key={index} alt="unrating star" draggable={false} />
        ))}

        <p>{comment}</p>
      </div>

      <div className={styles.opinion__card_profile}>
        <img
          className={styles.opinion__card_profile_picture}
          src={profilePicture}
          alt="profile pic"
          draggable={false}
        />
      </div>
    </li>
  );
};

export default OpinionCard;
