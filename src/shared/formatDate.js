export default function formatDate(date) {
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);

  return `${month} ${day}, ${year}`;
}
