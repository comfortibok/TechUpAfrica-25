import styles from "../components/Banner.module.css";

export default function Banner() {
  const banners = [
    {
      type: "success",
      title: "Congratulations!",
      bgColor: "rgba(236, 253, 245, 1)",
      titleColor: "rgba(6, 95, 70, 1)",
      color: "rgba(4, 120, 87, 1)",
      icon: "./src/assets/success.svg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      type: "warning",
      title: "Attention",
      bgColor: "rgba(255, 251, 235, 1)",
      titleColor: "rgba(146, 64, 14, 1)",
      color: "rgba(180, 83, 9, 1)",
      icon: "./src/assets/warning.svg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      type: "error",
      title: "There is a problem with your application",
      bgColor: "rgba(254, 242, 242, 1)",
      titleColor: "rgba(146, 64, 14, 1)",
      color: "rgba(180, 83, 9, 1)",
      icon: "./src/assets/error.svg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      type: "neutral",
      title: "Update available",
      bgColor: "rgba(239, 246, 255, 1)",
      titleColor: "rgba(30, 64, 175, 1)",
      color: "rgba(28, 81, 185, 1)",
      icon: "./src/assets/neutral.svg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
  ];

  const singleLineBanners = [
    {
      type: "success",
      title: "Congratulations!",
      bgColor: "rgba(236, 253, 245, 1)",
      titleColor: "rgba(6, 95, 70, 1)",
      icon: "./src/assets/success.svg",
    },
    {
      type: "warning",
      title: "Attention",
      bgColor: "rgba(255, 251, 235, 1)",
      titleColor: "rgba(146, 64, 14, 1)",
      icon: "./src/assets/warning.svg",
    },
    {
      type: "error",
      title: "There is a problem with your application",
      bgColor: "rgba(254, 242, 242, 1)",
      titleColor: "rgba(146, 64, 14, 1)",
      icon: "./src/assets/error.svg",
    },
    {
      type: "neutral",
      title: "Update available",
      bgColor: "rgba(239, 246, 255, 1)",
      titleColor: "rgba(30, 64, 175, 1)",
      icon: "./src/assets/neutral.svg",
    },
  ];

  return (
    <section>
      <h1>Banner</h1>
      <div className={styles.bannerContainer}>
              <div className={styles.bannerContent}>
          {banners.map((banner) => (
            <div
              key={banner.type}
              style={{
                backgroundColor: banner.bgColor,
                color: banner.color,
              }}
            >
              <img src={banner.icon} alt={banner.type} />
              <div>
                <h2 style={{ color: banner.titleColor }}>{banner.title}</h2>
                <p>{banner.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bannerContent} style={{ alignItems: "center" }}>
          {singleLineBanners.map((singleLineBanner) => (
            <div
              key={singleLineBanner.type}
              style={{
                backgroundColor: singleLineBanner.bgColor,
              }}
            >
              <img src={singleLineBanner.icon} alt={singleLineBanner.type} />
              <h2 style={{ color: singleLineBanner.titleColor }}>
                {singleLineBanner.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
