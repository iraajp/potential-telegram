import { useState } from 'react';
import Header from '../components/Header';
import BookItem from '../components/BookItem';
import BackgroundPattern from '../components/BackgroundPattern';
import { books } from '../data/books';

export default function Books() {
  const [sortBy, setSortBy] = useState('date');
  
  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === 'date') {
      return b.date.localeCompare(a.date);
    }
    return b.rating - a.rating;
  });

  return (
    <div className="min-h-screen bg-bg text-text relative">
      <BackgroundPattern />
      <div className="max-w-2xl mx-auto px-8 sm:px-12 py-16 sm:py-24 relative z-10">
        <Header />
        
        <main className="mt-12 sm:mt-16">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setSortBy(sortBy === 'date' ? 'rating' : 'date')}
              className="text-xs text-text border border-muted px-2.5 py-1 hover:border-text transition-colors"
            >
              Sort by: {sortBy === 'date' ? 'Date' : 'Rating'}
            </button>
          </div>
          
          <div className="space-y-8 sm:space-y-10">
            {sortedBooks.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
