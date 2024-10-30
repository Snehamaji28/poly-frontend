import React from "react"
import { Mail, MapPin, Phone, Globe, School, Briefcase, Users, Award, Target, Megaphone } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Rezime Edtech</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Reach out to us for partnerships, campus invitations, or any inquiries about our coding awareness programs
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-indigo-600 mr-3" />
                <span className="text-gray-600">founder@rezime.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-indigo-600 mr-3" />
                <span className="text-gray-600">+91 9999999999</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600 mr-3" />
                <span className="text-gray-600">Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-indigo-600 mr-3" />
                <span className="text-gray-600">www.rezime.in</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Our Mission</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Empower polytechnic students with practical coding skills</li>
                <li>Bridge the gap between academic learning and industry requirements</li>
                <li>Provide affordable and accessible coding education</li>
                <li>Foster a community of lifelong learners and innovators</li>
                <li>Enhance employability of polytechnic graduates in the tech industry</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Our Vision</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>To be the leading coding education platform for polytechnic students in West Bengal</li>
                <li>Create a workforce of skilled developers from diverse backgrounds</li>
                <li>Establish strong industry-academia partnerships</li>
                <li>Contribute to the growth of the tech ecosystem in West Bengal</li>
                <li>Inspire innovation and entrepreneurship among polytechnic students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Awareness Opportunities Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Brand Awareness Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
                <Megaphone className="w-6 h-6 mr-2" />
                Spread Your Brand
              </h3>
              <p className="text-gray-600 mb-4">
                Partner with Rezime Edtech to increase your brand visibility among polytechnic students and the tech community in West Bengal.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Logo placement on our website and marketing materials</li>
                <li>Branded workshops and coding challenges</li>
                <li>Sponsored content in our educational resources</li>
                <li>Co-branded events and hackathons</li>
                <li>Featured articles in our newsletter and blog</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Reach Your Audience
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with a diverse and engaged audience of aspiring developers and tech enthusiasts.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Direct access to polytechnic students across West Bengal</li>
                <li>Engagement with our community of 10,000+ learners</li>
                <li>Participation in career fairs and networking events</li>
                <li>Opportunities for product demonstrations and workshops</li>
                <li>Talent acquisition and internship programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Invite Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Invite Us to Your Campus</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="flex items-start mb-6">
              <School className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">For Polytechnic Colleges</h3>
                <p className="text-gray-600 mb-4">
                  Align with our mission to empower polytechnic students and contribute to our vision of creating a skilled tech workforce. Our campus visits include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                  <li>Interactive coding awareness workshops</li>
                  <li>Career guidance sessions with industry experts</li>
                  <li>Hands-on coding demonstrations</li>
                  <li>Mentoring programs for aspiring developers</li>
                  <li>Opportunities for industry-academia collaborations</li>
                </ul>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  Request Campus Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsorship Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Sponsorship Opportunities</h2>
          <div className="bg-indigo-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="flex items-start mb-6">
              <Briefcase className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">For Brands and Companies</h3>
                <p className="text-gray-600 mb-4">
                  Support our mission and vision by partnering with Rezime Edtech. Your sponsorship helps us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                  <li>Reach a wider audience of polytechnic students across West Bengal</li>
                  <li>Provide more free coding workshops and career guidance sessions</li>
                  <li>Develop cutting-edge learning resources for aspiring developers</li>
                  <li>Create networking opportunities between students and industry leaders</li>
                  <li>Foster innovation and entrepreneurship in the tech community</li>
                </ul>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  Explore Sponsorship
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Help us empower polytechnic students with essential coding skills and career guidance
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-50 transition duration-300">
            Get Involved Today
          </button>
        </div>
      </div> */}
    </div>
  )
}