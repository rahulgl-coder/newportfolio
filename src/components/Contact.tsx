// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate form submission
//     toast({
//       title: "Message Sent!",
//       description: "Thank you for your message. I'll get back to you soon!",
//     });
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="h-6 w-6" />,
//       label: "Email",
//       value: "rahulnandhu0521@gmail.com",
//       href: "mailto:rahulnandhu0521@gmail.com",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <Phone className="h-6 w-6" />,
//       label: "Phone",
//       value: "+91 8848481641",
//       href: "tel:+918848481641",
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       label: "Location",
//       value: "Trivandrum, Kerala",
//       href: "#",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: <Github className="h-6 w-6" />,
//       label: "GitHub",
//       value: "github.com/rahul-gl",
//       href: "https://github.com/rahul-gl",
//       color: "from-gray-600 to-gray-800"
//     },
//     {
//       icon: <Linkedin className="h-6 w-6" />,
//       label: "LinkedIn",
//       value: "linkedin.com/in/rahul-gl",
//       href: "https://linkedin.com/in/rahul-gl",
//       color: "from-blue-600 to-blue-800"
//     }
//   ];

//   const availability = [
//     "Full-time opportunities",
//     "Freelance projects",
//     "Collaboration",
//     "Mentoring"
//   ];

//   return (
//     <section id="contact" className="py-20 px-6 bg-secondary/20">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-gradient">Let's Connect</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Information */}
//           <div className="lg:col-span-1 space-y-6">
//             <Card className="card-gradient border-border animate-slide-up">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-gradient">Get In Touch</CardTitle>
//                 <CardDescription>
//                   I'm always excited to work on new projects and collaborate with fellow developers.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <a
//                     key={info.label}
//                     href={info.href}
//                     target={info.href.startsWith('http') ? '_blank' : undefined}
//                     rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                     className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group cursor-pointer"
//                   >
//                     <div className={`p-2 rounded-lg bg-gradient-to-br ${info.color} text-white group-hover:scale-110 transition-transform`}>
//                       {info.icon}
//                     </div>
//                     <div>
//                       <p className="font-medium text-foreground">{info.label}</p>
//                       <p className="text-sm text-muted-foreground">{info.value}</p>
//                     </div>
//                   </a>
//                 ))}
//               </CardContent>
//             </Card>

//             <Card className="card-gradient border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
//               <CardHeader>
//                 <CardTitle className="text-xl text-gradient">Currently Available For</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {availability.map((item) => (
//                     <Badge 
//                       key={item} 
//                       variant="secondary"
//                       className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
//                     >
//                       {item}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <Card className="card-gradient border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
//               <CardHeader>
//                 <CardTitle className="text-2xl text-gradient">Send Me a Message</CardTitle>
//                 <CardDescription>
//                   Fill out the form below and I'll get back to you as soon as possible.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-medium text-foreground">
//                         Name *
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your full name"
//                         required
//                         className="bg-secondary/50 border-border focus:border-primary"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-medium text-foreground">
//                         Email *
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="your.email@example.com"
//                         required
//                         className="bg-secondary/50 border-border focus:border-primary"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="text-sm font-medium text-foreground">
//                       Subject *
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="What's this about?"
//                       required
//                       className="bg-secondary/50 border-border focus:border-primary"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-medium text-foreground">
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell me about your project or just say hello!"
//                       required
//                       rows={6}
//                       className="bg-secondary/50 border-border focus:border-primary resize-none"
//                     />
//                   </div>

//                   <Button 
//                     type="submit" 
//                     size="lg"
//                     className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-[1.02]"
//                   >
//                     <Send className="h-5 w-5 mr-2" />
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Message Sent! Thank you for your message. I'll get back to you soon!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "rahulnandhu0521@gmail.com",
      href: "mailto:rahulnandhu0521@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 8848481641",
      href: "tel:+918848481641",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Trivandrum, Kerala",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/rahul-gl",
      href: "https://github.com/rahul-gl",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rahul-gl",
      href: "https://linkedin.com/in/rahul-gl",
      color: "from-blue-600 to-blue-800"
    }
  ];

  const availability = [
    "Full-time opportunities",
    "Freelance projects",
    "Collaboration",
    "Mentoring"
  ];

  return (
    <div className="min-h-screen" >
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #ff8c00, #ffaa00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-gradient {
          // background: linear-gradient(145deg, rgba(255, 140, 0, 0.1), rgba(0, 0, 0, 0.8));
          border: 1px solid rgba(255, 140, 0, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(255, 140, 0, 0.3);
        }
        
        .glow-effect:hover {
          box-shadow: 0 0 30px rgba(255, 140, 0, 0.5);
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-gradient animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Get In Touch</CardTitle>
                  <CardDescription className="text-gray-300">
                    I'm always excited to work on new projects and collaborate with fellow developers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-orange-500/20 transition-colors group cursor-pointer"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${info.color} text-white group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">{info.label}</p>
                        <p className="text-sm text-gray-300">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-gradient animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-xl text-gradient">Currently Available For</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {availability.map((item) => (
                      <Badge 
                        key={item} 
                        className="bg-orange-500/30 text-orange-200 hover:bg-orange-500 hover:text-white transition-colors border-orange-400/50"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Send Me a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the fields below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-black/50 border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-black/50 border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-black/50 border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        required
                        rows={6}
                        className="bg-black/50 border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400 resize-none"
                      />
                    </div>

                    <Button 
                      onClick={handleSubmit}
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white glow-effect transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;