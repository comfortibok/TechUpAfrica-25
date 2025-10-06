import styles from "../components/WithNoPic.module.css";
import TestimonialLogo from "../assets/TestimonialLogo.svg";
export default function WithNoPic() {
  return (
    <div className={styles.withNoPicWrap}>
      <img src={TestimonialLogo} alt="" />

      <p className={styles.description}>
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
        voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
        rerum et corporis.”
      </p>
      <div className={styles.ctoName}>
        <p>May Andersons</p> <p>Workcation, CTO</p>
      </div>
    </div>
  );
}
