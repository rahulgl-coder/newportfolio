import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MessageCircle, ShoppingCart, Users, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blogging & Chat Application",
      description: "A comprehensive blogging platform with real-time chat functionality, role-based authentication, and live notifications.",
      longDescription: "Built a visually interactive blogging platform featuring secure user authentication, real-time communication using Socket.io, full CRUD operations for blog management, and personalized user roles (Admin, Editor, Viewer) for effective access control.",
      technologies: ["Node.js", "EJS", "Socket.IO", "MongoDB", "Express.js", "JWT"],
      features: [
        "Real-time chat system with Socket.io",
        "Role-based authentication & authorization",
        "Full CRUD operations for blog posts",
        "Live notification updates",
        "MVC architecture implementation",
        "Deployed on Render platform"
      ],

          githubUrl: "https://github.com/rahulgl-coder/chat-App",
      icon: <MessageCircle className="h-8 w-8" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "E-Commerce Web Application",
      description: "Full-featured e-commerce platform with secure authentication, product management, and real-time cart functionality.",
      longDescription: "Developed a comprehensive e-commerce solution with modern UI built in React and Tailwind, secure JWT authentication, dynamic product interactions, and complete order management system with admin panel.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "JWT"],
      features: [
        "Responsive UI with React & Tailwind",
        "Product listings with search & filters",
        "Real-time cart updates",
        "Secure JWT authentication",
        "Admin panel for product management",
        "Order confirmation with billing"
      ],
      liveUrl: "https://e-commerce-frontend-1-7tv7.onrender.com/",
      githubUrl: "https://github.com/rahulgl-coder/E-commerce-Frontend",
      icon: <ShoppingCart className="h-8 w-8" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Employee Management System",
      description: "Interactive web application for managing employee records with full CRUD operations and modern UI.",
      longDescription: "Built a comprehensive employee management system with the ability to add, edit, delete, and display employee records dynamically, featuring an intuitive user interface for efficient data management.",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      features: [
        "Dynamic employee record management",
        "Interactive user interface",
        "Real-time data updates",
        "Responsive design",
        "Local data persistence",
        "Modern form validation"
      ],
      
      githubUrl: "https://github.com/rahulgl-coder/Employee_Managment.git",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Responsive Static Webpage",
      description: "Fully responsive static webpage designed with modern principles and cross-device compatibility.",
      longDescription: "Created a professional static webpage using pure HTML and CSS, focusing on responsive design principles and ensuring seamless compatibility across different screen sizes and devices.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      features: [
        "Fully responsive across all devices",
        "Modern design principles",
        "Cross-browser compatibility",
        "Optimized performance",
        "Clean code structure",
        "Intuitive user experience"
      ],
      
      githubUrl: "https://github.com/rahulgl-coder/web-design",
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my full-stack development projects, demonstrating expertise in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-gradient border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-secondary/70 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {project.liveUrl&&(
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >

                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button> )}
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;