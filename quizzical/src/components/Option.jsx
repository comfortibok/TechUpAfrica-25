export default function Option({
  option,
  selected,
  correctAnswer,
  userAnswer,
  reviewMode,
  onSelect,
}) {
  let bgColor = "";

  if (reviewMode) {
    if (option === correctAnswer) {
      bgColor = "rgba(148, 215, 162, 1)"; 
    } else if (userAnswer === option) {
      bgColor = "rgba(248, 188, 188, 1)";
    }
  } else {
    bgColor = selected === option ? "rgba(214, 219, 245, 1)" : "";
  }

  return (
    <button
      disabled={reviewMode}
      onClick={reviewMode ? undefined : () => onSelect(option)}
      style={{ backgroundColor: bgColor }}
      dangerouslySetInnerHTML={{ __html: option }}
    />
  );
}
