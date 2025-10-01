import React, { useState } from 'react';
import { MapPin, Clock, Users, Briefcase, Search, Filter, ArrowRight, Star, Globe, Award, Heart, Zap, X } from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Singapore',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients across Asia-Pacific.',
      requirements: ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
      salary: 'S$120,000 - S$180,000',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Japan',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and frameworks.',
      requirements: ['React', 'Node.js', 'TypeScript', 'AWS'],
      salary: '¥8,000,000 - ¥12,000,000',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Technical Recruiter',
      department: 'Recruitment',
      location: 'India',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Source and recruit top technology talent across Asia-Pacific markets.',
      requirements: ['Technical Recruiting', 'Stakeholder Management', 'Market Knowledge'],
      salary: '₹15,00,000 - ₹25,00,000',
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Singapore',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS', 'Azure', 'Kubernetes', 'DevOps'],
      salary: 'S$140,000 - S$200,000',
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Japan',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex datasets to drive business insights and AI model development.',
      requirements: ['Python', 'R', 'SQL', 'Machine Learning'],
      salary: '¥9,000,000 - ¥14,000,000',
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'Executive Search Consultant',
      department: 'Recruitment',
      location: 'Singapore',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead executive search mandates for C-level and senior leadership positions.',
      requirements: ['Executive Search', 'Business Development', 'Client Management'],
      salary: 'S$100,000 - S$150,000',
      posted: '4 days ago'
    },
    {
      id: 7,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and maintain CI/CD pipelines and cloud infrastructure.',
      requirements: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      salary: '₹12,00,000 - ₹20,00,000',
      posted: '6 days ago'
    },
    {
      id: 8,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Japan',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and engaging user experiences for our technology solutions.',
      requirements: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      salary: '¥7,000,000 - ¥10,000,000',
      posted: '1 week ago'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Work across our offices in Singapore, Japan, and India with relocation support'
    },
    {
      icon: Zap,
      title: 'Learning & Development',
      description: 'Continuous learning budget, conferences, certifications, and skill development'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Performance bonuses, stock options, and recognition programs'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and generous vacation policy'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    }
  ];

  const offices = [
    {
      location: 'Singapore',
      address: '1 Marina Bay Financial Centre, Level 20',
      image: '/singapore2.jpg',
      team: '45+ Professionals',
      culture: 'Innovation Hub'
    },
    {
      location: 'Japan',
      address: '1-1-1 Shibuya, Shibuya-ku, Tokyo',
      image: '/tokyo.jpg',
      team: '35+ Professionals',
      culture: 'Technology Center'
    },
    {
      location: 'India',
      address: 'Hitech City, Madhapur, Hyderabad',
      image: '/Career.avif',
      team: '70+ Professionals',
      culture: 'Development Center'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLocation && matchesDepartment && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Career.avif"
            alt="Careers at IdealFolks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Join Our Global Team
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]"></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              Shape the future of technology across Asia-Pacific. Join a team of innovators, 
              problem-solvers, and visionaries who are transforming businesses with cutting-edge AI solutions.
            </p>
            <div className="mt-8 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-blue-100">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">Global Offices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="Singapore">Singapore</option>
                <option value="Japan">Japan</option>
                <option value="India">India</option>
              </select>

              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Analytics">Analytics</option>
                <option value="Design">Design</option>
              </select>

              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all">
                <Filter className="inline mr-2" size={20} />
                Filter Jobs
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.experience}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-green-600">{job.salary}</div>
                    <div className="text-sm text-gray-500">Posted {job.posted}</div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedJob(job);
                      setShowApplicationForm(true);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all flex items-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No jobs found matching your criteria.</div>
              <button 
                onClick={() => {
                  setSelectedLocation('all');
                  setSelectedDepartment('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, grow, and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work from any of our strategically located offices across Asia-Pacific
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={office.image}
                  alt={`${office.location} office`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.location}</h3>
                  <p className="text-gray-600 mb-4">{office.address}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">{office.team}</div>
                      <div className="text-sm font-medium text-blue-600">{office.culture}</div>
                    </div>
                    <Star className="text-yellow-400 fill-current" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? We're always looking for exceptional talent. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Submit Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Apply for {selectedJob?.title}
              </h3>
              <button
                onClick={() => {
                  setShowApplicationForm(false);
                  setSelectedJob(null);
                  setApplicationData({
                    fullName: '',
                    email: '',
                    phone: '',
                    experience: '',
                    coverLetter: '',
                    resume: null
                  });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <form className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={applicationData.fullName}
                    onChange={(e) => setApplicationData({...applicationData, fullName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <select
                    value={applicationData.experience}
                    onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-8">6-8 years</option>
                    <option value="9+">9+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setApplicationData({...applicationData, resume: e.target.files?.[0] || null})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, DOCX)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowApplicationForm(false);
                    setSelectedJob(null);
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Application submitted successfully! We will contact you soon.');
                    setShowApplicationForm(false);
                    setSelectedJob(null);
                    setApplicationData({
                      fullName: '',
                      email: '',
                      phone: '',
                      experience: '',
                      coverLetter: '',
                      resume: null
                    });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;