import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-jade-dark font-medium text-lg">Hey, I'm Wei-Lun 👋</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Full-Stack
                <span className="text-gradient block">Software Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                MS Computer Engineering at University of Washington | Full-Stack Development | 
                Machine Learning Enthusiast
              </p>
            </div>

            <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl">
              I'm passionate about exploring new technologies, building full-stack applications, 
              and applying object-oriented design and databases to solve real-world problems. 
              With a background as a Senior Statistical Programmer at Parexel, I bring both 
              academic knowledge and industry experience to every project.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-jade-light hover:bg-jade-medium text-charcoal font-medium px-8"
                onClick={() => scrollToSection('projects')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-jade-light text-jade-dark hover:bg-jade-light/10 px-8"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-jade-dark transition-smooth"
              >
                <span className="text-sm">Scroll to learn more</span>
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end pr-4 lg:pr-24 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-jade-light to-jade-medium rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-jade-light/20 border-4 border-jade-light/30 shadow-hover flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-jade-medium/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-jade-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-jade-dark font-medium text-sm">Your Profile Photo</p>
                  <p className="text-jade-dark/70 text-xs mt-1">Replace with your image</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;