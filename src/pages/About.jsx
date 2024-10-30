import React from "react";
import { BookOpen, Users, Award, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">
            About Rezime Edtech
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Empowering polytechnic students in West Bengal with coding skills
            and career guidance
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded by a former polytechnic student who experienced firsthand
              the challenges of limited coding education, Rezime Edtech emerged
              from a deep understanding of the gaps in technical education at
              polytechnic institutions in West Bengal.
            </p>
            <p className="text-gray-600">
              We recognized that many computer science students complete their
              polytechnic education without gaining essential coding skills,
              limiting their career opportunities. This inspired us to create a
              platform that combines awareness, guidance, and affordable
              education to empower students with the skills they need to
              succeed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                ISO Certified
              </h3>
              <p className="text-gray-600">Quality assured education</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                MSME Registered
              </h3>
              <p className="text-gray-600">
                Government recognized organization
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Free Workshops
              </h3>
              <p className="text-gray-600">
                Regular coding awareness campaigns
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Career Guidance
              </h3>
              <p className="text-gray-600">Free consultation services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Coding Awareness</h3>
              <p className="text-gray-600">
                Building strong coding foundations through hands-on workshops
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accessible Education
              </h3>
              <p className="text-gray-600">
                Making quality coding education affordable for everyone
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600">
                Guiding students toward better opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">
                Creating a supportive learning environment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem We're Solving Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          The Challenge We're Addressing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Lack of Awareness
            </h3>
            <p className="text-gray-600">
              Many polytechnic students graduate without realizing the
              importance of practical coding skills in today's job market. We're
              changing this through regular awareness campaigns and workshops.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Limited Guidance
            </h3>
            <p className="text-gray-600">
              Students often struggle with questions about career paths and
              skill development. Our free career consultation services provide
              the guidance they need to make informed decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Affordable Solutions
            </h3>
            <p className="text-gray-600">
              Quality coding education shouldn't be a luxury. We offer
              affordable courses and free workshops to ensure every student has
              access to essential learning resources.
            </p>
          </div>
        </div>
      </div>

      {/* Students CTA */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Coding Journey Today
          </h2>
          <p className="text-xl mb-8">
            Join our community of aspiring polytechnic developers
          </p>
          <a
            href="https://forms.gle/KX16pa8iL7LDRs826"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* College Partnership Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bring coding awareness to your campus! We organize comprehensive
            workshops and career guidance sessions for polytechnic colleges
            across West Bengal. Let's work together to empower your students
            with essential tech skills.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              What We Offer:
            </h3>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li>• Professional coding awareness workshops</li>
              <li>• Structured career guidance sessions</li>
              <li>• Industry expert interactions</li>
              <li>• Hands-on coding demonstrations</li>
              <li>• Student mentoring programs</li>
            </ul>
            <a
              href="https://forms.gle/inviteForm123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Invite Us to Your Campus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
