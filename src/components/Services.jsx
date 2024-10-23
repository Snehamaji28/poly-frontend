import React from 'react';
import { Users, BookOpen, MessagesSquare, GraduationCap, School, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Free Career Consultation',
    description: 'One-on-one guidance from industry experts to help you plan your tech career path and prepare for placements.',
    icon: GraduationCap,
    link: '/career-consultation'
  },
  {
    title: 'Doubt Support',
    description: 'Get your programming doubts solved 24/7 by experienced mentors. Never let confusion stop your learning journey.',
    icon: MessagesSquare,
    link: '/doubt-support'
  },
  {
    title: 'Free Awareness Workshops',
    description: 'Regular workshops at polytechnic colleges to spread awareness about coding opportunities and industry requirements.',
    icon: Users,
    link: '/workshops'
  },
  {
    title: 'Structured Learning Path',
    description: 'Well-planned, affordable courses designed specifically for polytechnic students, taught by trusted industry mentors.',
    icon: BookOpen,
    link: '/courses'
  },
  {
    title: 'Practice Platform',
    description: 'Free coding platform with hundreds of practice problems to build your programming skills from scratch.',
    icon: PenTool,
    link: '/practice'
  },
  {
    title: 'College Partnerships',
    description: 'We collaborate with polytechnic colleges to integrate coding education into the regular curriculum.',
    icon: School,
    link: 'https://forms.gle/KX16pa8iL7LDRs826'
  }
];

export default function Services() {
  return (
    <div className="py-12 bg-gradient-to-br from-violet-200 via-blue-200 to-cyan-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Supporting West Bengal Polytechnic Students
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're committed to making quality coding education accessible to every polytechnic student in West Bengal.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link 
                key={service.title} 
                to={service.link}
                className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-indigo-400 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Call to Action
          <div className="mt-12 text-center">
            <p className="text-base text-gray-600 mb-4">
              Help us to spread coding awareness by Inviting us to your College Campus
            </p>
            <Link to="/get-started"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Support Our Cause
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}