import styles from "../components/Questions.module.css"
import Option from "./OPtion";

export default function Questions({
  id,
  question,
  options,
  selected,
  onSelect,
}) {
  return (
    <div className={styles.question}>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className={styles.optionsSection}>
        {options.map((option, i) => (
          <Option
            key={i}
            option={option}
            selected={selected}
            onSelect={(opt) => onSelect(id, opt)}
            reviewMode={false}
          />
        ))}
      </div>
    </div>
  );
}
