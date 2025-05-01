"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const SubscribeHomeOne = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />

      <div className="container relative">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="glass-dark rounded-3xl p-8 md:p-12">
            <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
              <span className="text-primary-300 text-sm font-medium">
                Stay Updated
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get the latest updates on medical research, healthcare
              innovations, and upcoming events delivered to your inbox.
            </p>

            {isSubscribed ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                <p className="font-medium">
                  Thank you for subscribing! We'll keep you updated with the
                  latest news.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 font-medium"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  10K+
                </div>
                <p className="text-gray-600">Subscribers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  Weekly
                </div>
                <p className="text-gray-600">Updates</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  100%
                </div>
                <p className="text-gray-600">Privacy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeHomeOne;
