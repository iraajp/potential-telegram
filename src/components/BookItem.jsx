import StarRating from './StarRating';

export default function BookItem({ book }) {
  return (
    <article className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6">
      <div className="flex-1">
        <h3 className="text-sm sm:text-base font-normal text-text mb-0.5">
          {book.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted mb-0.5">
          {book.author}
        </p>
        {book.note && (
          <p className="text-xs sm:text-sm text-muted">
            {book.note}
          </p>
        )}
      </div>
      
      <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
        <StarRating rating={book.rating} />
        <p className="text-xs sm:text-sm text-muted whitespace-nowrap">
          {book.date}
        </p>
      </div>
    </article>
  );
}
