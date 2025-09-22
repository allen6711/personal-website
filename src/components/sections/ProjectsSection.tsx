import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'EchoX',
      subtitle: 'Full-Stack Twitter Clone',
      period: 'July–August 2025',
      description: 'A comprehensive Twitter clone replicating core social media features with modern web technologies. Includes user authentication, real-time posting, notifications, and a responsive design.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      highlights: [
        'Real-time notifications system',
        'JWT-based authentication',
        'Responsive user interface',
        'Post creation and interaction'
      ],
      githubUrl: 'https://github.com/allen6711/echox',
      liveUrl: '#'
    },
    {
      title: 'FinPipe',
      subtitle: 'Smart Accounting Web App',
      period: 'August 2025',
      description: 'Intelligent financial management application that automatically categorizes transactions and integrates seamlessly with Google Sheets for real-time data synchronization.',
      techStack: ['Python', 'Flask', 'JavaScript', 'Pandas', 'Google Sheets API'],
      highlights: [
        'Automated transaction categorization',
        'Google Sheets integration',
        'Real-time data processing',
        'Intuitive financial dashboard'
      ],
      githubUrl: 'https://github.com/allen6711/finpipe',
      liveUrl: '#'
    },
    {
      title: 'PolicyGuard',
      subtitle: 'Content Moderation Engine',
      period: 'September 2025',
      description: 'Advanced content moderation system combining large language models with rule-based filtering to simulate policy enforcement across various content types.',
      techStack: ['Python', 'OpenAI API', 'Regex', 'Prompt Engineering'],
      highlights: [
        'LLM-powered content analysis',
        'Rule-based policy enforcement',
        'Scalable moderation pipeline',
        'Custom prompt engineering'
      ],
      githubUrl: 'https://github.com/allen6711/policyguard',
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