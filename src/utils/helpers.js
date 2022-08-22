export const getFormattedDate = (date) => {
    console.log(date);
  return (
    new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date) +
    " - " +
    date.toLocaleDateString('en-US')
  );
};
