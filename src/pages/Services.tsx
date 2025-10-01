import React, { useState } from 'react';
import { Brain, Code, Cloud, Users, Search, Building, Shield, Smartphone, Globe, BarChart, Cog, UserCheck, Database, Network, Lightbulb, Target, Zap, HeadphonesIcon, ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { translate } = useLanguage();
  const [activeServiceType, setActiveServiceType] = useState('IT');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceTypes = [
    { name: 'IT Services', key: 'IT' },
    { name: 'Recruitment Services', key: 'RECRUITMENT' }
  ];

  const allServices = {
    IT: [
      {
        id: 'ai-solutions',
        title: 'AI & Machine Learning Solutions',
        icon: Brain,
        shortDesc: 'Advanced AI implementation for business transformation',
        fullDesc: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions. Our AI experts develop custom models, implement deep learning algorithms, and create intelligent systems that automate processes, predict outcomes, and drive innovation across your organization.',
        features: [
          'Custom Machine Learning Models',
          'Natural Language Processing',
          'Computer Vision Solutions',
          'Predictive Analytics',
          'AI Strategy Consulting',
          'Deep Learning Implementation',
          'Neural Network Development',
          'AI Model Training & Optimization'
        ],
        technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS ML', 'Google AI'],
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Increase operational efficiency by 40%',
          'Reduce manual processing time by 60%',
          'Improve decision-making accuracy',
          'Automate complex business processes'
        ]
      },
      {
        id: 'software-development',
        title: 'Custom Software Development',
        icon: Code,
        shortDesc: 'End-to-end software development solutions',
        fullDesc: 'Build robust, scalable software solutions tailored to your business needs. Our development team creates web applications, mobile apps, enterprise software, and APIs using modern technologies and best practices to ensure high performance and maintainability.',
        features: [
          'Web Application Development',
          'Mobile App Development',
          'Enterprise Software Solutions',
          'API Development & Integration',
          'Database Design & Optimization',
          'Cloud-Native Applications',
          'Microservices Architecture',
          'DevOps Implementation'
        ],
        technologies: ['React', 'Node.js', 'Python', 'Java', 'Flutter', 'AWS', 'Docker', 'Kubernetes'],
        image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Faster time-to-market',
          'Scalable architecture',
          'Reduced maintenance costs',
          'Enhanced user experience'
        ]
      },
      {
        id: 'cloud-services',
        title: 'Cloud Services & Migration',
        icon: Cloud,
        shortDesc: 'Comprehensive cloud solutions and migration services',
        fullDesc: 'Accelerate your digital transformation with our comprehensive cloud services. We help organizations migrate to the cloud, optimize cloud infrastructure, and implement cloud-native solutions that improve scalability, reduce costs, and enhance security.',
        features: [
          'Cloud Migration Strategy',
          'AWS/Azure/GCP Implementation',
          'Cloud Infrastructure Design',
          'DevOps & CI/CD Pipelines',
          'Cloud Security Implementation',
          'Cost Optimization',
          'Disaster Recovery Planning',
          'Multi-Cloud Management'
        ],
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
        image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Reduce infrastructure costs by 30%',
          'Improve system reliability',
          'Enhanced scalability',
          'Better disaster recovery'
        ]
      },
      {
        id: 'data-analytics',
        title: 'Data Analytics & Business Intelligence',
        icon: BarChart,
        shortDesc: 'Transform data into actionable business insights',
        fullDesc: 'Unlock the power of your data with our comprehensive analytics and business intelligence solutions. We help organizations collect, process, and analyze data to make informed decisions, identify trends, and drive business growth.',
        features: [
          'Data Warehouse Design',
          'ETL Pipeline Development',
          'Business Intelligence Dashboards',
          'Real-time Analytics',
          'Data Visualization',
          'Predictive Modeling',
          'Statistical Analysis',
          'Data Governance'
        ],
        technologies: ['Power BI', 'Tableau', 'Apache Spark', 'SQL Server', 'Python', 'R'],
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Data-driven decision making',
          'Improved operational efficiency',
          'Better customer insights',
          'Increased revenue opportunities'
        ]
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity Solutions',
        icon: Shield,
        shortDesc: 'Comprehensive security solutions to protect your business',
        fullDesc: 'Protect your organization from cyber threats with our comprehensive security solutions. We provide security assessments, implement robust security measures, and offer ongoing monitoring to ensure your data and systems remain secure.',
        features: [
          'Security Assessment & Auditing',
          'Penetration Testing',
          'Security Architecture Design',
          'Identity & Access Management',
          'Incident Response Planning',
          'Compliance Management',
          'Security Monitoring',
          'Employee Security Training'
        ],
        technologies: ['SIEM Tools', 'Firewall Solutions', 'Encryption Technologies', 'IAM Systems'],
        image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Reduced security risks',
          'Compliance adherence',
          'Protected business reputation',
          'Minimized downtime'
        ]
      },
      {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        icon: Zap,
        shortDesc: 'Complete digital transformation strategies',
        fullDesc: 'Transform your business for the digital age with our comprehensive digital transformation services. We help organizations modernize their processes, adopt new technologies, and create digital-first strategies that drive growth and innovation.',
        features: [
          'Digital Strategy Development',
          'Process Automation',
          'Legacy System Modernization',
          'Change Management',
          'Technology Roadmapping',
          'Digital Culture Development',
          'Innovation Workshops',
          'ROI Measurement'
        ],
        technologies: ['RPA Tools', 'Low-Code Platforms', 'Integration Platforms', 'Analytics Tools'],
        image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Improved operational efficiency',
          'Enhanced customer experience',
          'Increased agility',
          'Competitive advantage'
        ]
      }
    ],
    RECRUITMENT: [
      {
        id: 'it-recruitment',
        title: 'IT Recruitment Services',
        icon: Code,
        shortDesc: 'Expert IT talent acquisition across all technologies',
        fullDesc: 'Find the best IT professionals for your organization with our specialized recruitment services. We have extensive networks and deep understanding of technology roles across Singapore, Japan, and India markets.',
        features: [
          'Software Developer Recruitment',
          'DevOps Engineer Placement',
          'Data Scientist Sourcing',
          'AI/ML Specialist Recruitment',
          'Cloud Architect Placement',
          'Cybersecurity Expert Sourcing',
          'Technical Lead Recruitment',
          'Full-Stack Developer Placement'
        ],
        technologies: ['Technical Assessment', 'Skill Evaluation', 'Cultural Fit Analysis', 'Reference Checks'],
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Access to top 1% talent',
          'Reduced hiring time by 50%',
          'Cultural fit guarantee',
          'Ongoing support'
        ]
      },
      {
        id: 'executive-search',
        title: 'Executive Search Services',
        icon: Users,
        shortDesc: 'Senior leadership and C-level executive placement',
        fullDesc: 'Find exceptional leaders for your organization with our executive search services. We specialize in placing C-level executives, VPs, and senior management across technology companies in Asia-Pacific.',
        features: [
          'C-Level Executive Search',
          'VP & Director Placement',
          'Board Member Recruitment',
          'Succession Planning',
          'Leadership Assessment',
          'Executive Coaching',
          'Compensation Benchmarking',
          'Onboarding Support'
        ],
        technologies: ['Executive Assessment Tools', 'Leadership Profiling', 'Market Intelligence', 'Succession Planning'],
        image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Access to passive candidates',
          'Confidential search process',
          'Market insights',
          'Long-term partnerships'
        ]
      },
      {
        id: 'contract-staffing',
        title: 'Contract & Temporary Staffing',
        icon: UserCheck,
        shortDesc: 'Flexible staffing solutions for project needs',
        fullDesc: 'Get the right talent for your projects with our flexible staffing solutions. We provide contract, temporary, and project-based staffing across all technology domains.',
        features: [
          'Contract Developer Placement',
          'Project Team Assembly',
          'Temporary Staff Solutions',
          'Freelance Expert Network',
          'Rapid Deployment',
          'Skill-Based Matching',
          'Performance Management',
          'Flexible Contracts'
        ],
        technologies: ['Skill Matching Algorithms', 'Performance Tracking', 'Time Management Systems'],
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Quick deployment',
          'Cost-effective solutions',
          'Scalable teams',
          'Risk mitigation'
        ]
      },
      {
        id: 'talent-consulting',
        title: 'Talent Strategy Consulting',
        icon: Lightbulb,
        shortDesc: 'Strategic talent planning and workforce optimization',
        fullDesc: 'Optimize your talent strategy with our consulting services. We help organizations plan their workforce, develop talent acquisition strategies, and build high-performing teams.',
        features: [
          'Workforce Planning',
          'Talent Strategy Development',
          'Compensation Benchmarking',
          'Employer Branding',
          'Recruitment Process Optimization',
          'Talent Pipeline Development',
          'Market Intelligence',
          'Diversity & Inclusion Programs'
        ],
        technologies: ['HR Analytics', 'Talent Management Systems', 'Assessment Tools', 'Market Research'],
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        benefits: [
          'Strategic talent planning',
          'Improved hiring quality',
          'Reduced turnover',
          'Enhanced employer brand'
        ]
      }
    ]
  };

  const currentServices = allServices[activeServiceType as keyof typeof allServices];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const getSelectedServiceData = () => {
    if (!selectedService) return null;
    return currentServices.find(service => service.id === selectedService);
  };

  const selectedServiceData = getSelectedServiceData();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]"></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              Comprehensive technology and recruitment solutions designed to accelerate your business growth 
              across Singapore, Japan, and India markets.
            </p>
          </div>
        </div>
      </section>

      {/* Service Type Selector */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative">
              <select
                value={activeServiceType}
                onChange={(e) => {
                  setActiveServiceType(e.target.value);
                  setSelectedService(null);
                }}
                className="appearance-none bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 pr-12 rounded-lg font-semibold text-lg cursor-pointer hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg"
              >
                {serviceTypes.map((type) => (
                  <option key={type.key} value={type.key} className="bg-blue-600 text-white">
                    {type.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection Dropdown */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Select a {activeServiceType === 'IT' ? 'Technology' : 'Recruitment'} Service
            </h2>
            <div className="relative max-w-md mx-auto">
              <select
                value={selectedService || ''}
                onChange={(e) => handleServiceSelect(e.target.value)}
                className="w-full appearance-none bg-white border-2 border-blue-600 text-gray-700 px-6 py-3 pr-12 rounded-lg font-medium text-lg cursor-pointer hover:border-blue-700 transition-all shadow-md"
              >
                <option value="">Choose a service...</option>
                {currentServices.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Service Detail */}
      {selectedServiceData && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4 rounded-xl">
                    <selectedServiceData.icon className="text-white" size={40} />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">{selectedServiceData.title}</h2>
                </div>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {selectedServiceData.fullDesc}
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedServiceData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Implementation Process:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Initial consultation and requirement analysis</li>
                      <li>• Custom solution design and architecture</li>
                      <li>• Development and testing phases</li>
                      <li>• Deployment and ongoing support</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Why Choose This Service:</h4>
                    <p className="text-sm text-blue-700">
                      Our proven methodology ensures successful delivery with measurable ROI. 
                      We provide end-to-end support from conception to deployment and beyond.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Success Metrics:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-green-700">
                      <div>• 98% Client Satisfaction</div>
                      <div>• 40% Efficiency Gain</div>
                      <div>• 60% Cost Reduction</div>
                      <div>• 24/7 Support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={selectedServiceData.image}
                  alt={selectedServiceData.title}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Features and Technologies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedServiceData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Services Overview */}
      {!selectedService && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {activeServiceType === 'IT' ? 'Technology Services' : 'Recruitment Services'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {activeServiceType === 'IT' 
                  ? 'Comprehensive technology solutions to transform your business'
                  : 'Expert recruitment services to build your dream team'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                        <service.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.shortDesc}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={() => handleServiceSelect(service.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our {activeServiceType === 'IT' ? 'technology' : 'recruitment'} services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-block text-center"
            >
              Request Quote
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block text-center"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;