import Header from '../components/Header';
import BackgroundPattern from '../components/BackgroundPattern';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text relative">
      <BackgroundPattern />
      <div className="max-w-2xl mx-auto px-8 sm:px-12 py-16 sm:py-24 relative z-10">
        <Header />
         <main className="mt-16 sm:mt-20">
          <p className="text-sm sm:text-base leading-relaxed text-text">
            For me, it's not just about moving AI forward in general-it's about being the one who builds the next wave of truly transformative AI technologies. I want to create the next big thing that changes how we live and work. And to do that, I'm focused on clearing the roadblocks so that all of our talent and energy can go into building that future.
            </p>
          
          <div className="mt-16 sm:mt-20 space-y-1.5">
            <a href="https://x.com/theiter8r" className="block text-muted hover:text-text text-xs sm:text-sm">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/raaj-patkar/" className="block text-muted hover:text-text text-xs sm:text-sm">
              LinkedIn
            </a>
            <a href="https://github.com/iraajp" className="block text-muted hover:text-text text-xs sm:text-sm">
              Github
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
