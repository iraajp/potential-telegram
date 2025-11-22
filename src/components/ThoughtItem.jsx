export default function ThoughtItem({ children, date }) {
  return (
    <article className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-6">
      <div className="flex-1">
        {children}
      </div>
      <p className="text-xs sm:text-sm text-muted whitespace-nowrap sm:text-right">
        {date}
      </p>
    </article>
  );
}
