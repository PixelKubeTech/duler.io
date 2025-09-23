import React, { useState } from 'react';
import { Menu, X, Calendar, Monitor, Globe, Smartphone, Play, ArrowRight, Star } from 'lucide-react';
import PixRoomSection from './components/PixRoomSection';
import PixWebSection from './components/PixWebSection';
import PixMobSection from './components/PixMobSection';
import PixRoomFeatures from './components/PixRoomFeatures';
import ContactForm from './components/ContactForm';
import dulerVideo from './assets/duler-video.mp4';

const DulerLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pixroom');
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // This function closes the features modal and opens the form modal.
  const handleOpenFormFromFeatures = () => {
    setIsFeaturesOpen(false);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">

      {/* Navigation */}
      <nav className="relative z-50 bg-white backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-black">D U L E R</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">Home</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">Contact</a>
              {/* <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get started
              </button> */}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white backdrop-blur-lg rounded-2xl mb-6 p-6 border border-gray-200 shadow-lg">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-600 hover:text-black transition-colors font-medium py-2">Home</a>
                <a href="#contact" className="text-gray-600 hover:text-black transition-colors font-medium py-2">Contact</a>
                {/* <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold mt-4 hover:bg-gray-800"
                >
                  Get started
                </button> */}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
              <Monitor className="w-4 h-4 text-gray-600 mr-2" />
              <span className="text-sm font-medium text-black">Complete meeting room solution</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6 text-black">D U L E R</h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
                Transform your meeting spaces with our complete ecosystem of tablet interfaces, 
                web administration, and mobile applications for seamless room management.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="group bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button 
                onClick={() => setIsFormOpen(true)}
                className="border-2 border-gray-300 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 backdrop-blur-sm"
              >
                Get started
              </button> */}
            </div>

            {/* Explore Features Button */}
            <div className="pt-8">
              <button 
                onClick={() => setIsFeaturesOpen(true)}
                className="group inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full font-medium text-black hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Star className="w-4 h-4 mr-2" />
                Explore all features
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="py-32 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-20">
            <div className="bg-white border border-gray-200 rounded-full p-2 flex space-x-2">
              <button
                onClick={() => setActiveTab('pixroom')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'pixroom'
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Monitor className="w-5 h-5" />
                <span>PixRoom</span>
              </button>
              <button
                onClick={() => setActiveTab('pixweb')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'pixweb'
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Globe className="w-5 h-5" />
                <span>PixWeb</span>
              </button>
              <button
                onClick={() => setActiveTab('pixmob')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'pixmob'
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                <span>PixMob</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[80vh]">
            {activeTab === 'pixroom' && <PixRoomSection />}
            {activeTab === 'pixweb' && <PixWebSection />}
            {activeTab === 'pixmob' && <PixMobSection />}
          </div>

          {/* Additional Features Call-to-Action within the product section */}
          <div className="text-center pt-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">
                Discover more powerful features
              </h3>
              <p className="text-gray-600 mb-6">
                From QR code authentication to multi-language support, PixRoom offers 
                comprehensive features designed to enhance your meeting experience.
              </p>
              <button 
                onClick={() => setIsFeaturesOpen(true)}
                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
              >
                <Star className="w-4 h-4 mr-2" />
                View all features
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to transform your meeting spaces?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Get in touch with our team to learn more about DULER's complete 
                meeting room solution ecosystem.
              </p>
              <a
                href="mailto:tech@pixelkube.io"
                className="inline-flex items-center text-white text-lg font-medium hover:underline"
              >
                tech@pixelkube.io
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-black" />
                </div>
                <h1 className="text-3xl font-bold text-white">D U L E R</h1>
              </div>
              <p className="text-gray-400">Meeting room solutions by PixelKube</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Player Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-black rounded-2xl shadow-2xl w-full max-w-4xl mx-4 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">DULER Demo</h2>
              <button 
                onClick={() => setIsVideoOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Video Container */}
            <div className="relative aspect-video">
              <video
  className="w-full h-full rounded-b-2xl object-cover focus:outline-none"
  controls
  playsInline
  muted={false} // keep muted={true} if you want autoplay
  preload="auto"
  controlsList="nodownload noremoteplayback"
  disablePictureInPicture
  style={{
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none'
  }}
  onContextMenu={(e) => e.preventDefault()}
>
  <source src={dulerVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

              
              {/* Loading overlay */}
              <div 
                className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-b-2xl pointer-events-none" 
                id="video-loading"
                style={{ display: 'none' }}
              >
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                  <p className="text-sm">Loading DULER demo...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PixRoom Features Modal */}
      <PixRoomFeatures 
        isOpen={isFeaturesOpen} 
        onClose={() => setIsFeaturesOpen(false)} 
        onOpenForm={handleOpenFormFromFeatures}
      />

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
            {/* <button 
              onClick={() => setIsFormOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-black">Get started</h2>
            <ContactForm /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DulerLandingPage;