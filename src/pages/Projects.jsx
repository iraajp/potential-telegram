import Header from '../components/Header';
import ThoughtSection from '../components/ThoughtSection';
import ThoughtItem from '../components/ThoughtItem';
import PaperclipIcon from '../components/PaperclipIcon';
import BackgroundPattern from '../components/BackgroundPattern';
import { builds } from '../data/projects';

export default function Builds() {
  return (
    <div className="min-h-screen bg-bg text-text relative">
      <BackgroundPattern />
      <div className="max-w-2xl mx-auto px-8 sm:px-12 py-16 sm:py-24 relative z-10">
        <Header />
        
        <main className="mt-12 sm:mt-16">
          <ThoughtSection title="Builds">
            {builds.map((project) => (
              <ThoughtItem key={project.id} date={project.date}>
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xs sm:text-sm text-text font-normal">
                        {project.title}
                      </h3>
                      {project.inProgress && (
                        <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Building
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted">
                      {project.description}
                    </p>
                  </div>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-text transition-colors flex-shrink-0 mt-0.5"
                      title="View demo"
                    >
                      <PaperclipIcon />
                    </a>
                  )}
                </div>
              </ThoughtItem>
            ))}
          </ThoughtSection>
        </main>
      </div>
    </div>
  );
}
