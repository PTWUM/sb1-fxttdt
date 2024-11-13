import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Building2, UserCircle, ShieldCheck } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Pharmaceutical Marketplace
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect with verified pharmacies and get your medications delivered safely
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/auth"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Building2 className="w-12 h-12 text-blue-600" />}
            title="For Pharmacies"
            description="List your products, manage inventory, and reach more customers securely."
          />
          <FeatureCard
            icon={<UserCircle className="w-12 h-12 text-blue-600" />}
            title="For Customers"
            description="Find medications easily, compare prices, and manage prescriptions."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-12 h-12 text-blue-600" />}
            title="Verified & Secure"
            description="All pharmacies are verified and transactions are secure."
          />
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Healthcare Providers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <Pill className="w-16 h-16 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;