export const DateFormat = (dateString) => {
  const date = new Date(dateString);
  const formatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("es-ES", formatOptions).format(date);
};
