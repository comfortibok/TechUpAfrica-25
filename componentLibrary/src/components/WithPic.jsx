import styles from "../components/WithPic.module.css";
import Image from "../assets/Image.png";

export default function WithPic() {
  return (
    <div className={styles.withPicContainer}>
      <div className={styles.withPicContent}>
        <img src={Image} alt="Testimonial" />
        <div className={styles.withPicInfo}>
          <svg
            width="44"
            height="35"
            viewBox="0 0 45 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.028 0C5.684 5.184 0.5 13.68 0.5 23.04C0.5 30.672 5.108 35.136 10.436 35.136C15.476 35.136 19.22 31.104 19.22 26.352C19.22 21.6 15.908 18.144 11.588 18.144C10.724 18.144 9.572 18.288 9.284 18.432C10.004 13.536 14.612 7.776 19.22 4.896L13.028 0ZM37.796 0C30.596 5.184 25.412 13.68 25.412 23.04C25.412 30.672 30.02 35.136 35.348 35.136C40.244 35.136 44.132 31.104 44.132 26.352C44.132 21.6 40.676 18.144 36.356 18.144C35.492 18.144 34.484 18.288 34.196 18.432C34.916 13.536 39.38 7.776 43.988 4.896L37.796 0Z"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
          </p>
          <strong>May Andersons</strong>
          <span>Workcation, CTO</span>
        </div>
      </div>
    </div>
  );
}
