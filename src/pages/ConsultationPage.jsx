import React, { useEffect, useState } from 'react';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    topic: 'career-guidance',
    message: '',
    preferredTime: 'morning'
  });
  
  const [submitted, setSubmitted] = useState(false);

  const consultationTopics = [
    {
      id: 'career-guidance',
      title: 'Career Guidance',
      description: 'Get expert advice on career paths in tech and required skills',
      icon: '📖'
    },
    {
      id: 'skill-assessment',
      title: 'Skill Assessment',
      description: 'Evaluate your current coding skills and get a learning roadmap',
      icon: '✅'
    },
    {
      id: 'placement-prep',
      title: 'Placement Preparation',
      description: 'Learn how to prepare for technical interviews and placements',
      icon: '📅'
    },
    {
      id: 'learning-path',
      title: 'Learning Path',
      description: 'Get a personalized learning path based on your goals',
      icon: '💬'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    document.title = 'Free Consultation Session | Expert Guidance for Your Coding Journey | Rezime Edtech'
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-[5rem] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Consultation Session
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized guidance from our experts to kickstart your coding journey
            and boost your career prospects.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto">
            We don't promote our products. Instead, we provide genuine guidance. 
            We strictly avoid promoting our products during free services. We are 
            on a mission to revolutionize the coding culture. We're not here to earn money, 
            but to make a real impact.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits and Topics */}
          <div className="space-y-8">
            {/* Why Choose Us Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Our Consultation?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Personalized guidance from industry experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Custom learning path based on your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Interview preparation tips and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Industry insights and placement guidance</span>
                </li>
              </ul>
            </div>

            {/* Consultation Topics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultationTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-indigo-600 text-3xl mb-3">{topic.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800">
                Thank you! We'll contact you shortly to confirm your consultation.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      College Name
                    </label>
                    <input
                      type="text"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Year of Study
                    </label>
                    <select
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="graduated">Graduated</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Consultation Topic
                  </label>
                  <select
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    {consultationTopics.map(topic => (
                      <option key={topic.id} value={topic.id}>
                        {topic.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-indigo-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
