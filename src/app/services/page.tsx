export default function Services() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
            MedSwift Services
          </h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            At MedSwift, we provide top-notch healthcare and medical delivery services.
          </p>
          
<ul className="list-disc pl-6 space-y-2 text-gray-600">
  {[
    { icon: "🚑", title: "Emergency Medicine Supply", description: "Fast delivery of essential medicines anytime, anywhere." },
    { icon: "👩‍⚕️", title: "24/7 Doctor Consultation", description: "Talk to expert doctors anytime through online consultation." },
    { icon: "📦", title: "24-Hour Medicine Delivery", description: "Get your prescribed medicines delivered within hours." },
    { icon: "💰", title: "Exclusive Health Deals", description: "Special discounts on medicines and healthcare products." },
    { icon: "📚", title: "Expert Health Articles", description: "Stay informed with verified medical and health blogs." },
    { icon: "🏥", title: "Branded Medical Products", description: "100% genuine medicines and healthcare essentials from top brands." },
    { icon: "💵", title: "Best Price Guarantee", description: "Affordable pricing with price-match guarantee." },
    { icon: "💉", title: "Vaccination & Health Packages", description: "Book doorstep vaccination and preventive health checkups." },
    { icon: "🛒", title: "Subscription-Based Medicine Plans", description: "Monthly medicine refills, so you never run out of essential meds." },
    { icon: "🔬", title: "Lab Test Booking", description: "Get diagnostic tests done from trusted labs with home sample collection." },
    { icon: "📦", title: "Personalized Health Packages", description: "Custom health packages based on your medical needs." },
    { icon: "🌿", title: "Herbal & Organic Products", description: "Explore a range of natural and organic wellness products." },
    { icon: "💳", title: "Health Insurance Assistance", description: "Compare and purchase medical insurance plans easily." },
    { icon: "💉", title: "Blood & Organ Donation Support", description: "Connect with registered donation centers hassle-free." },
    { icon: "⚕️", title: "AI-Powered Symptom Checker", description: "Get preliminary health assessments instantly using AI." },
    { icon: "🌍", title: "Global Medicine Access", description: "Order international medicines not available locally." },
    { icon: "🎁", title: "Wellness & Fitness Products", description: "Shop vitamins, supplements, and fitness gear for a healthier lifestyle." },
    { icon: "🔄", title: "Easy Return & Exchange Policy", description: "Hassle-free returns on eligible medicines and health products." },
  ].map((service, index) => (
    <li key={index}>
      <span>{service.icon}</span> <strong>{service.title}</strong>: {service.description}
    </li>
  ))}
</ul>
  
          <div className="text-center mt-6">
            <a href="/" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
  