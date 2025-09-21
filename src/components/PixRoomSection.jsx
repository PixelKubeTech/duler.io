import React from 'react';
import { Monitor, Wifi, Zap, Calendar, Users, Clock, Settings } from 'lucide-react';
import roomBusyImage from '../assets/room-busy-ui.png';
import roomFreeImage from '../assets/room-free-ui.png';

const TabletFrame = ({ children, isActive = true, status = 'busy' }) => {
  const ledColor = status === 'busy' ? 'red' : 'green';
  const ringColor = status === 'busy' ? 'ring-red-500' : 'ring-green-500';
  const shadowColor = status === 'busy' ? 'shadow-red-500/50' : 'shadow-green-500/50';
  const borderColor = status === 'busy' ? 'border-red-500' : 'border-green-500';
  
  return (
    <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl ${isActive ? `ring-4 ${ringColor}` : ''}`}>
      {/* LED Border Effect */}
      {isActive && (
        <div className={`absolute inset-0 rounded-3xl border-4 ${borderColor} animate-pulse shadow-lg ${shadowColor}`}></div>
      )}
      <div className="bg-black rounded-2xl p-2 relative z-10">
        {children}
      </div>
    </div>
  );
};

const PixRoomSection = () => {
  return (
    <div className="space-y-16">
      {/* Main Feature - Room Busy */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 backdrop-blur-sm rounded-full border border-gray-200">
            <Monitor className="w-4 h-4 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-black">Smart meeting room display</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-black">
            The smart meeting room solution
          </h3>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Pixroom is an advanced 10.1-inch interactive device designed to provide a comprehensive 
            snapshot of all the meetings happening in a particular room. With its clear, intuitive 
            interface and vibrant LED indicators, you can easily see room availability at a glance.
          </p>

          {/* <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-black font-medium">Green = Available</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-black font-medium">Red = In use</span>
            </div>
          </div> */}

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-green-500" />
              <span className="text-black">
                <strong>PoE+ powered</strong> - No need for extra cables—operates seamlessly with Power over Ethernet
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Wifi className="w-5 h-5 text-black" />
              <span className="text-black">
                <strong>Wi-Fi & LAN compatible</strong> - Flexible connectivity options for any office environment
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Monitor className="w-5 h-5 text-black" />
              <span className="text-black">
                <strong>Multiple screen sizes</strong> - Available in 10.1 inch, 15.6 inch and 21.5 inches
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Room Busy Display */}
        <div className="relative lg:pl-12">
          <div className="relative">
            <TabletFrame isActive={true} status="busy">
              <img 
                src={roomBusyImage} 
                alt="Room Busy Interface"
                className="w-full h-auto rounded-xl"
              />
            </TabletFrame>
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Room occupied
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Room Free Display Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Room Free Display */}
        <div className="relative lg:pr-12">
          <div className="relative">
            <TabletFrame isActive={true} status="free">
              <img 
                src={roomFreeImage} 
                alt="Room Available Interface"
                className="w-full h-auto rounded-xl"
              />
            </TabletFrame>
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Room available
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 backdrop-blur-sm rounded-full border border-green-200">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-green-800">Room available</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-black">
            Clear visual feedback
          </h3>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            When a room is available, the LED border glows green, providing instant visual confirmation. 
            The interface clearly displays the next scheduled meeting and allows for quick bookings 
            directly from the device.
          </p>

          <div className="bg-green-50 backdrop-blur-sm rounded-xl p-6 border border-green-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-medium">Instant booking available</span>
            </div>
            <div className="flex items-center space-x-4">
              <Monitor className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-medium">Next meeting display</span>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Possibilities Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
            <Settings className="w-4 h-4 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-black">Seamless integration</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Integration possibilities
          </h3>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Pixroom seamlessly integrates with your existing calendar and scheduling systems, 
            ensuring real-time synchronization and streamlined workflow management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* O365 Integration */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-black/10 transition-colors">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
            </div>
            <h4 className="text-xl font-bold text-black text-center">Office 365</h4>
          </div>

          {/* Google Calendar */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-black/10 transition-colors">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-black text-center">Google Calendar</h4>
          </div>

          {/* Classroom Timetabling */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-black/10 transition-colors">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-black text-center">Classroom timetabling systems</h4>
          </div>

          {/* Built-in Calendar */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-black/10 transition-colors">
              <Clock className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-black text-center">Built-in calendar</h4>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mb-6">
            <Monitor className="w-6 h-6 text-black" />
          </div>
          <h4 className="text-xl font-bold text-black mb-4">10.1" / 15.6" / 21.5" interactive displays</h4>
          <p className="text-gray-600">Crystal clear interface showing real-time room status and meeting information at a glance.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-black" />
          </div>
          <h4 className="text-xl font-bold text-black mb-4">PoE+ powered</h4>
          <p className="text-gray-600">Single cable solution providing both power and data connection for streamlined installation.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mb-6">
            <Wifi className="w-6 h-6 text-black" />
          </div>
          <h4 className="text-xl font-bold text-black mb-4">Flexible connectivity</h4>
          <p className="text-gray-600">Wi-Fi and LAN compatibility ensures seamless integration into any office network setup.</p>
        </div>
      </div>
    </div>
  );
};

export default PixRoomSection;