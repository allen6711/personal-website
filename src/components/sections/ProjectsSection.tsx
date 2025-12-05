import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Distributed Task Processing Service',
      subtitle: 'Scalable Microservices Architecture',
      period: 'November–December 2025',
      description: 'A distributed task processing service with separate API, scheduler, and worker containers, featuring reliable message delivery and horizontal scaling capabilities.',
      techStack: ['Java', 'Spring Boot', 'Redis', 'Docker'],
      highlights: [
        'Designed a Java/Spring Boot + Redis task service with separate API, scheduler, and worker Docker containers',
        'Implemented at-least-once delivery with Redis Lists/ZSETs, 3 retries (2/4/8s backoff), and a dead-letter queue',
        'Scaled worker containers from 1→4 in Docker Compose, reducing 40-task batch time from ~60s to ~18s in local tests'
      ],
      githubUrl: 'https://github.com/allen6711/distributed-task-service',
      liveUrl: '#'
    },
    {
      title: 'F1 2025 Season Researcher',
      subtitle: 'Cloudflare Workers AI Knowledge Agent',
      period: 'October–November 2025',
      description: 'An AI-powered knowledge agent built on Cloudflare Workers that tracks F1 entities and answers questions using cached season data with automatic refresh capabilities.',
      techStack: ['TypeScript', 'Cloudflare Workers', 'Durable Objects', 'Workers AI (Llama 3.3)', 'Serper API'],
      highlights: [
        'Developed an AI agent on Cloudflare Workers tracking 50+ F1 entities and refreshing data every 4 hours via cron jobs',
        'Used Durable Objects as a topic-scoped state store, enabling Llama 3.3 to answer questions from cached season data',
        'Built an ingestion pipeline with Serper and Workers AI (50+ searches/cycle, <2-min refresh) within free-tier limits'
      ],
      githubUrl: 'https://github.com/allen6711/cf_ai_f1_2025_researcher',
      liveUrl: '#'
    },
    {
      title: 'High-Performance LeetCode Query Engine',
      subtitle: 'Database-Driven Full-Stack App',
      period: 'August 2025',
      description: 'A high-performance full-stack application that aggregates and queries LeetCode problems from multiple sources, featuring a Chrome extension and optimized database queries.',
      techStack: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Chrome MV3', 'HTML/CSS'],
      highlights: [
        'Integrated 3,700+ problems from 5 sources into a normalized PostgreSQL schema via a Node.js ETL pipeline',
        'Optimized a sub-50ms search service on Express using parameterized SQL queries against the normalized schema',
        'Developed a Chrome MV3 extension and resolved CORS, async, and Service Worker issues for a reliable UX'
      ],
      githubUrl: 'https://github.com/allen6711/leetcode-finder-extension',
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