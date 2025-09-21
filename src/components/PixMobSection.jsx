import React from 'react';
import { Smartphone, Zap, Calendar, Wrench, Coffee, Car, Monitor } from 'lucide-react';
import pixmobImage1 from '../assets/pixmob-booking-screen.png'; // Image 1 - Room booking interface
import pixmobImage2 from '../assets/pixmob-dashboard.png'; // Image 2 - Main dashboard

const PhoneFrame = ({ children }) => (
  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl max-w-xs mx-auto">
    {/* Phone Notch */}
    <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20"></div>
    <div className="bg-black rounded-2xl p-1.5 relative z-10">
      {children}
    </div>
  </div>
);

const PixMobSection = () => {
  return (
    <div className="space-y-20">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 backdrop-blur-sm rounded-full border border-gray-200">
          <Smartphone className="w-4 h-4 text-gray-600 mr-2" />
          <span className="text-sm font-medium text-black">Mobile app for instant booking</span>
        </div>
        
        <h3 className="text-3xl lg:text-5xl font-bold text-black">
          Book on the go with Pixmob
        </h3>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          With the Pixmob app, booking spaces becomes faster and more efficient than ever. 
          Authenticate and confirm your reservations right from your mobile device, saving 
          time and increasing productivity.
        </p>
      </div>

      {/* Feature 1: Instant Booking */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-4 h-4 bg-black rounded-full animate-pulse"></div>
              <span className="text-black font-bold text-xl">Instant booking with real-time availability</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Book spaces instantly from the scheduling device with real-time availability updates. 
            Our ad-hoc booking system ensures you can reserve spaces on-demand without any delays.
          </p>

          <div className="flex items-center space-x-3">
            <Zap className="w-5 h-5 text-black" />
            <span className="text-black text-lg">
              <strong>Ad-hoc booking</strong> - Book spaces instantly from the scheduling device
            </span>
          </div>

          <div className="inline-flex items-center space-x-3 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <span className="text-black font-semibold">
              Quick & easy room booking interface
            </span>
          </div>
        </div>

        <div className="lg:pl-8">
          <PhoneFrame>
            <img 
              src={pixmobImage1} 
              alt="Pixmob Room Booking Interface"
              className="w-full h-auto rounded-xl"
            />
          </PhoneFrame>
        </div>
      </div>

      {/* Feature 2: Additional Services */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-black font-bold text-xl">Access to additional services</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Reserve catering, parking, IT equipment, and more directly from the app. 
            Everything you need for your meeting, available at your fingertips.
          </p>

          <div className="flex items-center space-x-3">
            <Coffee className="w-5 h-5 text-green-500" />
            <span className="text-black text-lg">
              <strong>Additional services</strong> - Reserve catering, parking, IT equipment, and more
            </span>
          </div>

          <div className="inline-flex items-center space-x-3 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-black font-semibold">
              Comprehensive dashboard with service access
            </span>
          </div>
        </div>

        <div className="lg:pl-8">
          <PhoneFrame>
            <img 
              src={pixmobImage2} 
              alt="Pixmob Dashboard Interface"
              className="w-full h-auto rounded-xl"
            />
          </PhoneFrame>
        </div>
      </div>

      {/* Feature 3: Fault Reporting */}
      <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-8 border border-gray-200">
        <div className="text-center space-y-6">
          <div className="inline-block bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-black font-bold text-xl">Direct fault reporting</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Report any issues directly from the app for prompt resolution. 
            Our integrated fault reporting system ensures quick response times and efficient maintenance.
          </p>

          <div className="flex items-center justify-center space-x-3">
            <Wrench className="w-5 h-5 text-orange-500" />
            <span className="text-black text-lg">
              <strong>Fault reporting</strong> - Report any issues directly from the app for prompt resolution
            </span>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
        <h4 className="text-2xl font-bold text-black mb-8 text-center">Available services</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8 text-black" />
            </div>
            <span className="text-black font-medium">Room booking</span>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto">
              <Coffee className="w-8 h-8 text-green-500" />
            </div>
            <span className="text-black font-medium">Catering</span>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center mx-auto">
              <Car className="w-8 h-8 text-black" />
            </div>
            <span className="text-black font-medium">Parking</span>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto">
              <Monitor className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-black font-medium">IT equipment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixMobSection;