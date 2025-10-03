import styles from "./Toast.module.css";
export default function Toast() {
  const toasts = [
    {
      type: "success",
      icon: "./src/assets/sucPop.svg",
      title: "Success",
      message: "Your work has been saved",
      bgColor: "rgba(236, 253, 245, 1)",
      titleColor: "rgba(6, 95, 70, 1)",
      color: "rgba(4, 120, 87, 1)",
    },
    {
      type: "warning",
      icon: "./src/assets/warnPop.svg",
      title: "Warning",
      message: "A network error was detected",
      bgColor: "rgba(255, 251, 235, 1)",
      titleColor: "rgba(146, 64, 14, 1)",
      color: "rgba(180, 83, 9, 1)",
    },
    {
      type: "information",
      icon: "./src/assets/info.svg",
      title: "Information",
      message: "Please read updated information",
      bgColor: "rgba(239, 246, 255, 1)",
      titleColor: "rgba(30, 64, 175, 1)",
      color: "rgba(28, 81, 185, 1)",
    },
    {
      type: "error",
      icon: "./src/assets/errPop.svg",
      title: "Error",
      message: "Please re-save your work again",
      bgColor: "rgba(254, 242, 242, 1)",
      titleColor: "rgba(146, 64, 14, 1)",
      color: "rgba(180, 83, 9, 1)",
    },
  ];
  return (
    <section>
      <h1>Toast</h1>
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <div
            className={styles.toastContent}
            key={toast.type}
            style={{
              backgroundColor: toast.bgColor,
              color: toast.color,
            }}
          >
            <img src={toast.icon} alt={toast.type} />
            <div>
              <h2 style={{ color: toast.titleColor }}>{toast.title}</h2>
              <p>{toast.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
