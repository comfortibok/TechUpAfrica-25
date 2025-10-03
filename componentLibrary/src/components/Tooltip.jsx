import styles from "../components/Tooltip.module.css";

export default function Tooltip() {
  const tooltips = [
    {
      type: "black",
      icon: "/src/assets/black.svg",
      button: "/src/assets/blackBtn.svg",
      bgColor: "rgba(38, 38, 38, 1)",
      titleColor: "rgba(255, 255, 255, 1)",
      color: "rgba(199, 199, 199, 1)",
    },
    {
      type: "white",
      icon: "/src/assets/white.svg",
      button: "/src/assets/whiteBtn.svg",
      bgColor: "rgba(255, 255, 255, 1)",
      titleColor: "rgba(17, 24, 39, 1)",
      color: "rgba(107, 114, 128, 1)",
    },
    {
      type: "blue",
      icon: "/src/assets/blue.svg",
      button: "/src/assets/blueBtn.svg",
      bgColor: "rgba(30, 64, 175, 1)",
      titleColor: "rgba(255, 255, 255, 1)",
      color: "rgba(232, 237, 255, 1)",
    },
    {
      type: "lightblue",
      icon: "/src/assets/lightblue.svg",
      button: "/src/assets/lightblueBtn.svg",
      bgColor: "rgba(224, 231, 255, 1)",
      titleColor: "rgba(30, 64, 175, 1)",
      color: "rgba(28, 81, 185, 1)",
    },
    {
      type: "purple",
      icon: "/src/assets/purple.svg",
      button: "/src/assets/purpleBtn.svg",
      bgColor: "rgba(169, 34, 155, 1)",
      titleColor: "rgba(255, 255, 255, 1)",
      color: "rgba(255, 233, 253, 1)",
    },
    {
      type: "lightpink",
      icon: "/src/assets/lightpink.svg",
      button: "/src/assets/lightpinkBtn.svg",
      bgColor: "rgba(255, 243, 252, 1)",
      titleColor: "rgba(169, 34, 155, 1)",
      color: "rgba(199, 54, 158, 1)",
    },
    {
      type: "green",
      icon: "/src/assets/green.svg",
      button: "/src/assets/greenBtn.svg",
      bgColor: "rgba(71, 170, 93, 1)",
      titleColor: "rgba(255, 255, 255, 1)",
      color: "rgba(227, 255, 233, 1)",
    },
    {
      type: "lightgreen",
      icon: "/src/assets/lightgreen.svg",
      button: "/src/assets/lightgreenBtn.svg",
      bgColor: "rgba(231, 255, 243, 1)",
      titleColor: "rgba(19, 122, 42, 1)",
      color: "rgba(60, 140, 78, 1)",
    },
  ];

  return (
    <section>
      <h1>Tooltip Component</h1>
      <div className={styles.tooltipContainer}>
        {tooltips.map((tooltip) => (
          <div
            key={tooltip.type}
            className={styles.tooltip}
            style={{ backgroundColor: tooltip.bgColor, color: tooltip.color }}
          >
            <img
              src={tooltip.icon}
              alt={`${tooltip.type} icon`}
              className={styles.tooltipIcon}
            />

            <div className={styles.tooltipContent}>
              <h2 style={{ color: tooltip.titleColor }}>Archive notes</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum tenetur.
              </p>
              <button className={styles.tooltipBtnWrap}>
                <img
                  src={tooltip.button}
                  alt={`${tooltip.type} button`}
                  className={styles.tooltipBtn}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
