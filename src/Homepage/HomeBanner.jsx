import React, { useState, useEffect } from 'react';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  const slides = [
    {
      title: "আলোর পথে শিক্ষার আলো",
      subtitle: "Learn Anytime, Anywhere",
      description: "বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্ল্যাটফর্ম। বিশেষজ্ঞ শিক্ষকদের সাথে ঘরে বসে শিখুন",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80",
      badge: "🎓 Expert Teachers"
    },
    {
      title: "অসীম সম্ভাবনার দরজা খুলুন",
      subtitle: "100+ Expert-Led Courses",
      description: "প্রোগ্রামিং, ডিজাইন, ভাষা শিক্ষা থেকে শুরু করে ক্যারিয়ার ডেভেলপমেন্ট - সব কিছু এক জায়গায়",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80",
      badge: "📚 10,000+ Students"
    },
    {
      title: "সার্টিফিকেট অর্জন করুন",
      subtitle: "Industry-Recognized Certificates",
      description: "কোর্স সম্পন্ন করে পান আন্তর্জাতিক মানের সার্টিফিকেট যা আপনার ক্যারিয়ারকে এগিয়ে নিয়ে যাবে",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
      badge: "🏆 Certified Learning"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const target = 10247;
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    
    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        setStudentCount(target);
        clearInterval(counter);
      } else {
        setStudentCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(counter);
  }, []);

  const categories = [
    { name: 'প্রোগ্রামিং', icon: '💻', count: '25+ কোর্স' },
    { name: 'ডিজাইন', icon: '🎨', count: '18+ কোর্স' },
    { name: 'ভাষা শিক্ষা', icon: '🗣️', count: '15+ কোর্স' },
    { name: 'ব্যবসা', icon: '💼', count: '20+ কোর্স' }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              {/* Logo & Brand */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                    আলোর পথ
                  </h1>
                  <p className="text-purple-200 text-sm">AlorPoth Learning Platform</p>
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-2xl">{slides[currentSlide].badge.split(' ')[0]}</span>
                  <span className="text-white font-medium">{slides[currentSlide].badge.split(' ').slice(1).join(' ')}</span>
                </div>

                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  {slides[currentSlide].title}
                </h2>
                
                <h3 className="text-2xl sm:text-3xl font-semibold text-purple-200">
                  {slides[currentSlide].subtitle}
                </h3>
                
                <p className="text-lg text-purple-100 max-w-xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 font-bold text-lg overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>কোর্স দেখুন</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 font-bold text-lg">
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>ফ্রি ট্রাইল</span>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-white">{studentCount.toLocaleString()}+</div>
                  <div className="text-sm text-purple-200">শিক্ষার্থী</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-white">100+</div>
                  <div className="text-sm text-purple-200">কোর্স</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-white">50+</div>
                  <div className="text-sm text-purple-200">শিক্ষক</div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Course Card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  {/* Course Image */}
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={slides[currentSlide].image}
                      alt="Course"
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  {/* Course Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-4 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold">
                        বেস্টসেলার
                      </span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-semibold">4.9</span>
                        <span className="text-purple-200 text-sm">(2,450)</span>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-white">
                      Complete Web Development Course
                    </h4>

                    <p className="text-purple-200 text-sm leading-relaxed">
                      শূন্য থেকে শুরু করে প্রফেশনাল ওয়েব ডেভেলপার হয়ে উঠুন। HTML, CSS, JavaScript এবং আরও অনেক কিছু শিখুন।
                    </p>

                    {/* Course Features */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2 text-purple-200 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>40 ঘন্টা ভিডিও</span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-200 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>150+ লেসন</span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-200 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>সার্টিফিকেট</span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-200 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>লাইফটাইম এক্সেস</span>
                      </div>
                    </div>

                    {/* Price & Enroll */}
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="text-3xl font-bold text-white">৳২,৯৯৯</div>
                        <div className="text-sm text-purple-300 line-through">৳৫,৯৯৯</div>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg">
                        এনরোল করুন
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-2xl transform rotate-3 animate-pulse">
                  <div className="text-sm font-bold">50% ছাড়</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="mt-16 flex flex-wrap gap-4 justify-center">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl border border-white/20 transition-all duration-300 cursor-pointer"
              >
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <div className="font-bold text-white">{cat.name}</div>
                  <div className="text-sm text-purple-200">{cat.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-yellow-400 shadow-lg shadow-yellow-500/50'
                : 'w-3 h-3 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-medium">Scroll Down</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;