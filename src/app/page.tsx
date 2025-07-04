import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [stats, setStats] = useState([
    { value: 0, label: "Active Users" },
    { value: 0, label: "Projects Completed" },
    { value: 0, label: "AI Tools" }
  ]);

  const features = [
    {
      title: "AI-Powered Article Generator",
      description: "Create high-quality articles in seconds with our advanced NLP algorithms. Perfect for blog posts and academic papers.",
      icon: "📝"
    },
    {
      title: "Smart Research Assistant",
      description: "Find and synthesize information faster than ever. Our AI scans thousands of sources to give you the insights you need.",
      icon: "🔍"
    },
    {
      title: "Content Optimization",
      description: "Improve your writing with real-time suggestions for clarity, SEO, and engagement. Perfect for freelancers and students alike.",
      icon: "✨"
    },
    {
      title: "Plagiarism Checker",
      description: "Ensure your work is original with our advanced detection system that scans across billions of web pages.",
      icon: "✅"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Writer",
      text: "This platform cut my research time in half and doubled my client satisfaction. An absolute game-changer!",
      avatar: "/avatar1.svg"
    },
    {
      name: "Michael Chen",
      role: "Computer Science Student",
      text: "The AI writing assistant helped me structure my thesis and catch errors I would've missed. Highly recommended!",
      avatar: "/avatar2.svg"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Consultant",
      text: "My content engagement increased by 40% after using the optimization tools. Worth every penny!",
      avatar: "/avatar3.svg"
    }
  ];

  useEffect(() => {
    // Stats counter animation
    const counters = [
      { target: 12500, index: 0 },
      { target: 32000, index: 1 },
      { target: 12, index: 2 }
    ];
    
    counters.forEach(counter => {
      let start = 0;
      const duration = 2000;
      const increment = counter.target / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        if (start >= counter.target) {
          clearInterval(timer);
          start = counter.target;
        }
        setStats(prev => prev.map((stat, i) => 
          i === counter.index ? { ...stat, value: Math.floor(start) } : stat
        ));
      }, 10);
    });

    // Auto rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-indigo-500/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 10 + 10}s infinite`
            }}
          />
        ))}
      </div>
      
      {/* Header */}
      <header className="relative z-10 py-6 px-6 sm:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Article.TechnovaVista
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-indigo-300 transition-colors">Features</a>
          <a href="#" className="hover:text-indigo-300 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-indigo-300 transition-colors">Pricing</a>
          <a href="#" className="hover:text-indigo-300 transition-colors">Resources</a>
        </nav>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
            Sign In
          </button>
          <button 
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg hover:opacity-90 transition-opacity"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="flex items-center">
              Get Started Free
              <span className="ml-2">
                {isHovering ? '🚀' : '✨'}
              </span>
            </span>
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-indigo-500/20 text-indigo-300 text-sm px-4 py-1.5 rounded-full inline-flex items-center mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
              </span>
              AI-Powered Content Creation Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Supercharge Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Writing & Research</span> with AI
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 max-w-2xl">
              The ultimate toolkit for students and freelancers to create high-quality content, conduct research, and optimize their workflow with cutting-edge artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl font-medium text-lg hover:opacity-90 transition-opacity flex items-center">
                Start Free Trial
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-xl font-medium text-lg hover:bg-white/20 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">AI Content Generator</h3>
                  <p className="text-gray-400 text-sm">Generate article in seconds</p>
                </div>
                <div className="bg-indigo-500/30 rounded-lg px-2 py-1 text-xs">AI-Powered</div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                </div>
                <div className="h-40 overflow-y-auto">
                  <p className="text-sm text-gray-300">
                    <span className="text-gray-500">> </span>
                    The impact of artificial intelligence on modern education is profound and multifaceted. AI-powered tools are revolutionizing how students learn by providing personalized learning experiences tailored to individual needs and learning styles...
                  </p>
                  <div className="flex mt-4">
                    <div className="h-2 w-2 rounded-full bg-indigo-400 mr-1 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-indigo-400 mr-1 animate-pulse delay-75"></div>
                    <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <input 
                  type="text" 
                  placeholder="Enter your topic..." 
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Generate
                </button>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg p-4 rounded-xl border border-white/10 shadow-xl w-40">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 rounded-full w-3 h-3 mr-2"></div>
                <span className="text-sm">Real-time Stats</span>
              </div>
              <div className="text-2xl font-bold mb-1">98%</div>
              <div className="text-xs text-gray-400">Content Quality Score</div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 backdrop-blur-lg p-4 rounded-xl border border-white/10 shadow-xl w-40">
              <div className="flex items-center mb-2">
                <div className="bg-yellow-500 rounded-full w-3 h-3 mr-2"></div>
                <span className="text-sm">Time Saved</span>
              </div>
              <div className="text-2xl font-bold mb-1">12.5 hrs</div>
              <div className="text-xs text-gray-400">Average per user/week</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl border border-white/10 p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value.toLocaleString()}
                {index === 2 && '+'}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-28">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Tools for Your Success</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform combines multiple AI technologies to help you create, optimize, and perfect your content with unprecedented efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 h-full border border-white/10 backdrop-blur-lg">
              <div className="text-7xl mb-6">{features[activeFeature].icon}</div>
              <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
              <p className="text-gray-300 mb-8">{features[activeFeature].description}</p>
              
              <div className="flex space-x-4 mb-8">
                <button 
                  onClick={() => setActiveFeature(activeFeature === 0 ? features.length - 1 : activeFeature - 1)}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  onClick={() => setActiveFeature((activeFeature + 1) % features.length)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${index === activeFeature ? 'w-8 bg-indigo-500' : 'w-3 bg-gray-700'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br rounded-2xl p-6 border backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer ${index === activeFeature ? 'from-indigo-500/20 to-cyan-500/20 border-indigo-500/30' : 'from-gray-800 to-gray-900/70 border-white/10'}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Students & Freelancers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of users who have transformed their workflow with our AI tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900/70 rounded-2xl p-6 border border-white/10 backdrop-blur-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg w-12 h-12 flex items-center justify-center text-lg">
                  {testimonial.avatar ? (
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48} 
                      className="rounded-lg"
                    />
                  ) : testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-indigo-400">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              <div className="flex mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-28">
        <div className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Join thousands of students and freelancers boosting their productivity with our AI tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl font-medium text-lg hover:opacity-90 transition-opacity">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-xl font-medium text-lg hover:bg-white/20 transition-colors">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            No credit card required • Cancel anytime
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Article.TechnovaVista
              </h1>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered tools for students and freelancers to create, optimize, and perfect content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Article.TechnovaVista. All rights reserved.
        </div>
      </footer>
    </div>
  );
}