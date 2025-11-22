export default function ThoughtSection({ title, children }) {
  return (
    <section className="mb-10 sm:mb-12">
      <h2 className="text-base sm:text-lg font-semibold text-text mb-4 sm:mb-6">
        {title}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {children}
      </div>
    </section>
  );
}
