import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
        <Link to="/" className="text-base sm:text-lg font-semibold text-text hover:text-text">
          Raaj Patkar
        </Link>
        
        <nav className="flex gap-4 sm:gap-6">
          <Link 
            to="/thoughts" 
            className={`text-xs sm:text-sm transition-colors ${
              location.pathname === '/thoughts' ? 'text-text' : 'text-muted hover:text-text'
            }`}
          >
            Thoughts
          </Link>
          <Link 
            to="/builds" 
            className={`text-xs sm:text-sm transition-colors ${
              location.pathname === '/builds' ? 'text-text' : 'text-muted hover:text-text'
            }`}
          >
            Builds
          </Link>
          <Link 
            to="/books" 
            className={`text-xs sm:text-sm transition-colors ${
              location.pathname === '/books' ? 'text-text' : 'text-muted hover:text-text'
            }`}
          >
            Books
          </Link>
        </nav>
      </div>
    </header>
  );
}
