import React from 'react';
import ContactForm from './ContactForm';
import {
  Zap,
  AlertTriangle,
  Search,
  Shield,
  Monitor,
  Clock,
  X,
  Calendar,
  Info,
  QrCode,
  Lightbulb,
  Palette,
  Plug,
  Map,
  Users,
  Car,
  Utensils,
  ListVideo,
  UserCog,
  Languages,
} from 'lucide-react';

// Added onOpenForm prop to receive the function from the parent
const PixRoomFeatures = ({ isOpen, onClose, onOpenForm }) => {
  if (!isOpen) return null;

  const features = [
    // Existing features
    {
      icon: Zap,
      title: "Ad-hoc Booking",
      description: "Quickly book available rooms on the spot, without the hassle of searching for a slot.",
    },
    {
      icon: AlertTriangle,
      title: "Fault Reporting",
      description: "If something isn't right with the room or equipment, simply report it from your device for fast action.",
    },
    {
      icon: Search,
      title: "Find Free Rooms",
      description: "The system shows real-time room availability, helping you quickly locate an open meeting space.",
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Tailored access levels ensure users have the permissions they need.",
    },
    {
      icon: Monitor,
      title: "Digital Signage",
      description: "Display important information and updates on your devices.",
    },
    {
      icon: Clock,
      title: "Meeting Extensions",
      description: "Extend, shorten, or end meetings directly from the scheduling device for maximum convenience.",
    },

    // New features
    {
      icon: Calendar,
      title: "Upcoming Meetings",
      description: "Scroll through the week and book a meeting from there.",
    },
    {
      icon: Info,
      title: "Meeting Information",
      description: "Company logo, meeting time, booked by, status bar, participant numbers.",
    },
    {
      icon: QrCode,
      title: "QR Code Authentication",
      description: "Authenticate and join meetings with a simple QR code scan.",
    },
    {
      icon: Lightbulb,
      title: "LED Status Indicator",
      description: "LED turns red when busy and green when the room is free.",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book available rooms instantly without hassle.",
    },
    {
      icon: Palette,
      title: "Theme Management",
      description: "Control all the visibility and design settings on PixRoom.",
    },
    {
      icon: Plug,
      title: "Connector Management",
      description: "Manage integrations and external connectors seamlessly.",
    },
    {
      icon: Map,
      title: "Space Management",
      description: "Organize and manage all available meeting spaces effectively.",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Control user access levels and manage roles.",
    },
    {
      icon: Car,
      title: "Service Management",
      description: "Manage organizational services such as parking, catering, and other facilities.",
    },
    {
      icon: ListVideo,
      title: "Playlist Management",
      description: "Manage signage content such as videos and images displayed in PixRoom.",
    },
    {
      icon: UserCog,
      title: "Player Management",
      description: "Oversee and manage users accessing PixRoom.",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Switch between multiple languages on PixRoom instantly.",
    },
    {
      icon: Zap,
      title: "More...",
      description: "PixRoom comes packed with additional powerful features designed to enhance your meeting experience.",
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">
                PixRoom Features
              </h2>
              <p className="text-gray-600">
                Discover the powerful capabilities of our tablet-based meeting room solution
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-3xl border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Ready to transform your meeting room experience?
            </p>
            {/* Added onClick handler to call the function from parent */}
            <button 
              onClick={onOpenForm}
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixRoomFeatures;