import React from 'react';
import { Monitor, Globe, Calendar, Settings, Users, BarChart, Wrench } from 'lucide-react';
import pixwebImage1 from '../assets/pixweb-parking-management.png'; // Image 1 - Parking management interface
import pixwebImage2 from '../assets/pixweb-catering-services.png'; // Image 2 - Catering services modal
import pixwebImage3 from '../assets/pixweb-space-management.png'; // Image 3 - Space management dashboard

const DesktopFrame = ({ children }) => (
  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg md:rounded-xl p-1 md:p-3 shadow-2xl">
    <div className="bg-black rounded-md md:rounded-lg p-0.5 md:p-1.5 relative z-10">
      {children}
    </div>
  </div>
);

const PixWebSection = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* Header Section */}
      <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gray-100 backdrop-blur-sm rounded-full border border-gray-200">
          <Globe className="w-4 h-4 text-gray-600 mr-2" />
          <span className="text-xs md:text-sm font-medium text-black">Advanced web portal for space management</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black">
          Customize your space bookings with Pixweb
        </h3>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Pixweb is your all-in-one solution for efficiently booking meeting rooms across multiple 
          locations. Whether you're managing a single space or several, Pixweb lets you customize 
          your bookings, ensuring you have the right space at the right time.
        </p>
      </div>

      {/* Feature 1: Flexible & User-friendly */}
      <div className="space-y-6 md:space-y-8">
        <div className="text-center space-y-3 md:space-y-4 px-4">
          <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 inline-block">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-pulse"></div>
              <span className="text-black font-bold text-lg md:text-xl">Flexible & user-friendly: book rooms with ease</span>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Experience intuitive parking management with our visual interface that shows real-time availability 
            across all your locations. Reserve parking spots alongside your meeting rooms for a seamless experience.
          </p>
        </div>

        {/* First Desktop - Parking Management */}
        <div className="max-w-6xl mx-auto px-4">
          <DesktopFrame>
            <img 
              src={pixwebImage1} 
              alt="Pixweb Parking Management Interface"
              className="w-full h-auto rounded-sm md:rounded-md"
            />
          </DesktopFrame>
        </div>

        <div className="text-center px-4">
          <div className="inline-flex items-center space-x-2 md:space-x-3 bg-white rounded-xl p-3 md:p-4 shadow-lg border border-gray-200">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
            <span className="text-black font-semibold text-sm md:text-base">
              Visual parking management with real-time availability
            </span>
          </div>
        </div>
      </div>

      {/* Feature 2: Integrated Services */}
      <div className="space-y-6 md:space-y-8">
        <div className="text-center space-y-3 md:space-y-4 px-4">
          <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 inline-block">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-black font-bold text-lg md:text-xl">Complete service integration</span>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Including any additional services such as catering, parking, and IT equipment. 
            Book everything you need from one convenient portal, streamlining your meeting preparation process.
          </p>
        </div>

        {/* Second Desktop - Catering Services */}
        <div className="max-w-6xl mx-auto px-4">
          <DesktopFrame>
            <img 
              src={pixwebImage2} 
              alt="Pixweb Catering Services Interface"
              className="w-full h-auto rounded-sm md:rounded-md"
            />
          </DesktopFrame>
        </div>

        <div className="text-center px-4">
          <div className="inline-flex items-center space-x-2 md:space-x-3 bg-white rounded-xl p-3 md:p-4 shadow-lg border border-gray-200">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
            <span className="text-black font-semibold text-sm md:text-base">
              One-stop solution for all meeting services
            </span>
          </div>
        </div>
      </div>

      {/* Feature 3: Administrative Control */}
      <div className="space-y-6 md:space-y-8">
        <div className="text-center space-y-3 md:space-y-4 px-4">
          <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 inline-block">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-pulse"></div>
              <span className="text-black font-bold text-lg md:text-xl">Centralized control for all reservations</span>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive management tools for spaces, users, organizations, and system-wide configurations. 
            Monitor usage, generate reports, and maintain complete control over your space ecosystem.
          </p>
        </div>

        {/* Third Desktop - Space Management */}
        <div className="max-w-6xl mx-auto px-4">
          <DesktopFrame>
            <img 
              src={pixwebImage3} 
              alt="Pixweb Space Management Dashboard"
              className="w-full h-auto rounded-md md:rounded-lg"
            />
          </DesktopFrame>
        </div>

        <div className="text-center px-4">
          <div className="inline-flex items-center space-x-2 md:space-x-3 bg-white rounded-xl p-3 md:p-4 shadow-lg border border-gray-200">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
            <span className="text-black font-semibold text-sm md:text-base">
              Comprehensive dashboard for complete space management
            </span>
          </div>
        </div>
      </div>

      {/* System Administration */}
      <div className="text-center space-y-4 md:space-y-6 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200 mx-4">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Wrench className="w-5 h-5 md:w-6 md:h-6 text-black" />
          <span className="text-xl md:text-2xl font-bold text-black">
            System administration
          </span>
        </div>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Advanced tools for managing your entire space ecosystem with granular control over permissions, 
          configurations, and integrations.
        </p>
      </div>

      {/* Management Capabilities */}
      <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200 mx-4">
        <h4 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 text-center">Management capabilities</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="text-center space-y-2 md:space-y-3">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black/10 rounded-2xl flex items-center justify-center mx-auto">
              <BarChart className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </div>
            <span className="text-black font-medium text-sm md:text-base">Analytics & reports (coming soon)</span>
          </div>
          <div className="text-center space-y-2 md:space-y-3">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black/10 rounded-2xl flex items-center justify-center mx-auto">
              <Monitor className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </div>
            <span className="text-black font-medium text-sm md:text-base">Space management</span>
          </div>
          <div className="text-center space-y-2 md:space-y-3">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black/10 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </div>
            <span className="text-black font-medium text-sm md:text-base">User control</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PixWebSection;