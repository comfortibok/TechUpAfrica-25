import styles from "../components/Badge.module.css";
export default function Badge() {
  const squareBadge = [
    { bgColor: "rgba(243, 244, 246, 1)", color: "rgba(31, 41, 55, 1)" },
    { bgColor: "rgba(254, 226, 226, 1)", color: "rgba(153, 27, 27, 1)" },
    { bgColor: "rgba(254, 243, 199, 1)", color: "rgba(146, 64, 14, 1)" },
    { bgColor: "rgba(209, 250, 229, 1)", color: "rgba(6, 95, 70, 1)" },
    { bgColor: "rgba(219, 234, 254, 1)", color: "rgba(30, 64, 175, 1)" },
    { bgColor: "rgba(224, 231, 255, 1)", color: "rgba(55, 48, 163, 1)" },
    { bgColor: "rgba(237, 233, 254, 1)", color: "rgba(91, 33, 182, 1)" },
    { bgColor: "rgba(252, 231, 243, 1)", color: "rgba(157, 23, 77, 1)" },
  ];

  const pillBadge = [
    { bgColor: "rgba(243, 244, 246, 1)", color: "rgba(31, 41, 55, 1)" },
    { bgColor: "rgba(254, 226, 226, 1)", color: "rgba(153, 27, 27, 1)" },
    { bgColor: "rgba(254, 243, 199, 1)", color: "rgba(146, 64, 14, 1)" },
    { bgColor: "rgba(209, 250, 229, 1)", color: "rgba(6, 95, 70, 1)" },
    { bgColor: "rgba(219, 234, 254, 1)", color: "rgba(30, 64, 175, 1)" },
    { bgColor: "rgba(224, 231, 255, 1)", color: "rgba(55, 48, 163, 1)" },
    { bgColor: "rgba(237, 233, 254, 1)", color: "rgba(91, 33, 182, 1)" },
    { bgColor: "rgba(252, 231, 243, 1)", color: "rgba(157, 23, 77, 1)" },
  ];
  return (
      <section>
          <h1>Badge</h1>
      <div className={styles.badgeContainer}>
        <div className={styles.squareBadgeContent}>
          {squareBadge.map((sqBadge) => (
            <button
              key={sqBadge.color}
              style={{
                backgroundColor: sqBadge.bgColor,
                color: sqBadge.color,
              }}
            >
              Badge
            </button>
          ))}
        </div>

        <div className={styles.pillBadgeContent}>
          {pillBadge.map((pill) => (
            <button
              key={pill.color}
              style={{
                backgroundColor: pill.bgColor,
                color: pill.color,
              }}
            >
              Badge
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
