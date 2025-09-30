import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Unified LeetCode Problem Finder',
      subtitle: 'Database-Driven Full-Stack App',
      period: 'September–October 2025',
      description: 'A high-performance full-stack application that aggregates and queries LeetCode problems from multiple sources, featuring a Chrome extension and optimized database queries for lightning-fast search capabilities.',
      techStack: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Chrome MV3', 'HTML/CSS'],
      highlights: [
        'Achieved sub-50ms query response with REST API + parameterized SQL',
        'Integrated 3,700+ problems from 5 sources using a Node.js ETL pipeline',
        'Developed Chrome MV3 extension and resolved CORS, async, Service Worker challenges'
      ],
      githubUrl: 'https://github.com/allen6711/leetcode-finder-extension',
      liveUrl: '#'
    },
    {
      title: 'Twitter-Style Social App',
      subtitle: 'Full-Stack Web App',
      period: 'March–May 2025',
      description: 'A comprehensive social media application featuring real-time notifications, secure authentication, and a responsive modern interface built with React and TailwindCSS.',
      techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'JWT'],
      highlights: [
        'Built a social app with authentication, posting, and real-time notifications (500+ test posts)',
        'Designed responsive React + Tailwind frontend, optimized via Vite for 20% faster load times',
        'Implemented backend REST APIs and secured 15+ routes with JWT authentication'
      ],
      githubUrl: 'https://github.com/allen6711',
      liveUrl: '#'
    },
    {
      title: 'AI Smart Accounting Platform',
      subtitle: 'AI-Driven Automation Platform',
      period: 'January–February 2025',
      description: 'An intelligent financial management platform leveraging AI to automate transaction classification and seamlessly integrate with Google Sheets for real-time data synchronization.',
      techStack: ['Python', 'Flask', 'React', 'Pandas', 'Google Sheets API', 'Gemini API'],
      highlights: [
        'Reduced manual entry by 70% across 2,000+ XLSX/CSV records using Gemini API for auto-classification',
        'Built ETL with validation, OAuth 2.0, and exponential-backoff retries to sync with Google Sheets',
        'Delivered REST APIs and backend schemas, demonstrating end-to-end ownership'
      ],
      githubUrl: 'https://github.com/allen6711',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that combine technical excellence with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="shadow-card hover:shadow-hover transition-smooth group animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-charcoal group-hover:text-jade-dark transition-smooth">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-jade-light/20 hover:text-jade-dark"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-jade-light/20 hover:text-jade-dark"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-jade-dark font-medium mb-2">{project.subtitle}</p>
                  
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-charcoal-light text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-charcoal mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-charcoal-light flex items-center">
                        <span className="w-1.5 h-1.5 bg-jade-medium rounded-full mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-jade-light/10 text-jade-dark hover:bg-jade-light/20 transition-smooth text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            size="lg"
            className="bg-jade-light hover:bg-jade-medium text-charcoal font-medium"
            asChild
          >
            <a href="https://github.com/allen6711" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;