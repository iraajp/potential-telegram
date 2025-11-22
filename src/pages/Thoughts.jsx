import Header from '../components/Header';
import ThoughtSection from '../components/ThoughtSection';
import ThoughtItem from '../components/ThoughtItem';
import TwitterIcon from '../components/TwitterIcon';
import BackgroundPattern from '../components/BackgroundPattern';
import { thoughts } from '../data/thoughts';

export default function Thoughts() {
  return (
    <div className="min-h-screen bg-bg text-text relative">
      <BackgroundPattern />
      <div className="max-w-2xl mx-auto px-8 sm:px-12 py-16 sm:py-24 relative z-10">
        <Header />
        
        <main className="mt-12 sm:mt-16">
          <ThoughtSection title="Thoughts">
            {thoughts.map((item) => (
              <ThoughtItem key={item.id} date={item.date}>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-text hover:text-muted transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm text-text">
                    {item.title}
                  </p>
                )}
              </ThoughtItem>
            ))}
          </ThoughtSection>
        </main>
      </div>
    </div>
  );
}
