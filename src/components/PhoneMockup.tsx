import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Video, Check, Heart, User, Mail, Lock, Search } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [screenKey, setScreenKey] = useState(0);

  useEffect(() => {
    const screenDurations = [4000, 4000, 4000];
    const pauseDuration = 1000;

    const timer = setTimeout(() => {
      if (currentScreen === 2) {
        // Pause before looping
        setTimeout(() => {
          setCurrentScreen(0);
          setScreenKey(prev => prev + 1);
        }, pauseDuration);
      } else {
        setCurrentScreen(prev => prev + 1);
      }
    }, screenDurations[currentScreen]);

    return () => clearTimeout(timer);
  }, [currentScreen, screenKey]);

  const screens = [
    <Screen1 key="screen1" />,
    <Screen2 key="screen2" />,
    <Screen3 key="screen3" />,
  ];

  return (
    <div className="flex items-center justify-center p-8">
      {/* Phone Frame */}
      <div className="relative">
        {/* Phone Shadow */}
        <div className="absolute inset-0 bg-black/20 blur-3xl rounded-[60px] transform translate-y-4 scale-95" />
        
        {/* Phone Body */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[55px] p-3 shadow-2xl">
          {/* Phone Bezel */}
          <div className="relative bg-black rounded-[45px] overflow-hidden">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black w-32 h-8 rounded-b-3xl flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-700" />
              <div className="w-16 h-4 rounded-full bg-gray-900" />
            </div>

            {/* Screen Container */}
            <div className="w-[320px] h-[680px] bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentScreen}-${screenKey}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  {screens[currentScreen]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-l-full" />
        <div className="absolute left-0 top-44 w-1 h-12 bg-gray-700 rounded-l-full" />
        <div className="absolute left-0 top-60 w-1 h-12 bg-gray-700 rounded-l-full" />
        <div className="absolute right-0 top-40 w-1 h-16 bg-gray-700 rounded-r-full" />
      </div>
    </div>
  );
};

// Screen 1: Create Account
const Screen1: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1600),
      setTimeout(() => setStep(4), 2400),
      setTimeout(() => setStep(5), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="h-full bg-gradient-to-b from-purple-50 via-white to-teal-50 pt-14 px-6 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-8 mt-4"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-200">
          <span className="text-white text-2xl font-bold">Y</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Hesap Oluştur</h1>
        <p className="text-gray-500 text-sm mt-1">Terapi yolculuğun başlasın</p>
      </motion.div>

      {/* Form Fields */}
      <div className="space-y-4 flex-1">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -20 }}
          className="relative"
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
            <User size={18} />
          </div>
          <div className="w-full bg-white border-2 border-purple-100 rounded-2xl pl-12 pr-4 py-4 text-gray-700 shadow-sm">
            <TypewriterText text="Ayşe Yılmaz" show={step >= 2} />
          </div>
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : -20 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400">
            <Mail size={18} />
          </div>
          <div className="w-full bg-white border-2 border-teal-100 rounded-2xl pl-12 pr-4 py-4 text-gray-700 shadow-sm">
            <TypewriterText text="ayse@email.com" show={step >= 3} delay={0.8} />
          </div>
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 3 ? 1 : 0, x: step >= 3 ? 0 : -20 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400">
            <Lock size={18} />
          </div>
          <div className="w-full bg-white border-2 border-green-100 rounded-2xl pl-12 pr-4 py-4 text-gray-700 shadow-sm">
            <PasswordDots show={step >= 4} />
          </div>
        </motion.div>
      </div>

      {/* Submit Button */}
      <motion.div className="pb-8">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: step >= 4 ? 1 : 0, 
            y: step >= 4 ? 0 : 20,
            scale: step >= 5 ? [1, 0.95, 1] : 1
          }}
          transition={{ duration: 0.3 }}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-purple-200 flex items-center justify-center gap-2"
        >
          {step >= 5 ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check size={24} className="text-white" />
            </motion.div>
          ) : (
            "Kayıt Ol"
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

// Screen 2: Match with Therapist
const Screen2: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 1200),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => setStep(4), 2800),
      setTimeout(() => setStep(5), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const therapists = [
    { name: "Dr. Mehmet Kaya", specialty: "Anksiyete", avatar: "M" },
    { name: "Dr. Zeynep Demir", specialty: "Depresyon", avatar: "Z" },
    { name: "Dr. Ali Yıldız", specialty: "İlişki Terapisi", avatar: "A" },
  ];

  return (
    <div className="h-full bg-gradient-to-b from-teal-50 via-white to-purple-50 pt-14 px-6 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-6 mt-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">Terapistini Bul</h1>
        <p className="text-gray-500 text-sm mt-1">Sana uygun terapisti eşleştiriyoruz</p>
      </motion.div>

      {/* Loading Animation */}
      <AnimatePresence>
        {step < 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center py-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-teal-200 border-t-teal-500 rounded-full"
              />
              <Search className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-teal-500" size={24} />
            </div>
            <p className="mt-4 text-gray-500 text-sm">Aranıyor...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Therapist Cards */}
      <div className="space-y-3 flex-1">
        {step >= 2 && therapists.map((therapist, index) => (
          <motion.div
            key={therapist.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: step >= 4 && index === 1 ? 1.02 : 1,
              borderColor: step >= 4 && index === 1 ? "rgb(20, 184, 166)" : "transparent"
            }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all relative overflow-hidden ${
              step >= 4 && index === 1 ? "shadow-teal-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                index === 0 ? "bg-purple-400" : index === 1 ? "bg-teal-400" : "bg-green-400"
              }`}>
                {therapist.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{therapist.name}</h3>
                <p className="text-sm text-gray-500">{therapist.specialty}</p>
              </div>
              
              {/* Heart Animation */}
              {step >= 4 && index === 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.4 }}
                >
                  <Heart className="text-pink-500 fill-pink-500" size={24} />
                </motion.div>
              )}
            </div>

            {/* Connection Particles */}
            {step >= 4 && index === 1 && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 60]
                    }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="absolute w-2 h-2 bg-teal-400 rounded-full"
                    style={{ left: "50%", top: "50%" }}
                  />
                ))}
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Match Complete Message */}
      <AnimatePresence>
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-8"
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-4 text-center text-white shadow-lg shadow-teal-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="w-10 h-10 bg-white rounded-full mx-auto mb-2 flex items-center justify-center"
              >
                <Check className="text-teal-500" size={24} />
              </motion.div>
              <p className="font-semibold">Eşleşme Tamamlandı!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Screen 3: Connect Instantly
const Screen3: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1300),
      setTimeout(() => setStep(4), 2000),
      setTimeout(() => setStep(5), 2800),
      setTimeout(() => setStep(6), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const options = [
    { icon: MessageCircle, label: "Mesaj", color: "from-purple-400 to-purple-500" },
    { icon: Phone, label: "Sesli Arama", color: "from-teal-400 to-teal-500" },
    { icon: Video, label: "Görüntülü", color: "from-green-400 to-green-500" },
  ];

  return (
    <div className="h-full bg-gradient-to-b from-green-50 via-white to-purple-50 pt-14 px-6 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 mt-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">İletişim Yöntemini Seç</h1>
        <p className="text-gray-500 text-sm mt-1">Terapistinle nasıl bağlanmak istersin?</p>
      </motion.div>

      {/* Communication Options */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-4 justify-center">
          {options.map((option, index) => (
            <motion.div
              key={option.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ 
                opacity: step >= index + 1 ? 1 : 0,
                y: step >= index + 1 ? 0 : 30,
                scale: step >= 5 && index === 2 ? 1.1 : 1
              }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: index * 0.15
              }}
              className="relative"
            >
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg relative overflow-hidden`}>
                <option.icon size={32} className="text-white" />
                
                {/* Ripple Effect */}
                {step >= 4 && (
                  <>
                    <motion.div
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-3xl border-2 border-white"
                    />
                    <motion.div
                      animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      className="absolute inset-0 rounded-3xl border-2 border-white"
                    />
                  </>
                )}

                {/* Selection Glow */}
                {step >= 5 && index === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 rounded-3xl bg-white/30"
                  />
                )}
              </div>
              <p className="text-center mt-2 text-sm font-medium text-gray-600">{option.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection Animation */}
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex flex-col items-center"
          >
            {/* Signal Waves */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ 
                    scale: [0.5, 1.5],
                    opacity: [0.8, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                  className="absolute w-full h-full rounded-full border-2 border-green-400"
                />
              ))}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Video size={24} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {step >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-8"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-center text-white shadow-lg shadow-green-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="w-10 h-10 bg-white rounded-full mx-auto mb-2 flex items-center justify-center"
              >
                <Check className="text-green-500" size={24} />
              </motion.div>
              <p className="font-semibold">Bağlandı!</p>
              <p className="text-sm text-green-100">Terapistiniz sizi bekliyor</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Typewriter Text Component
const TypewriterText: React.FC<{ text: string; show: boolean; delay?: number }> = ({ text, show, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!show) {
      setDisplayText("");
      return;
    }

    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 500);
        }
      }, 60);
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [show, text, delay]);

  return (
    <span className="flex items-center">
      {displayText || <span className="text-gray-400 text-sm">Adınız</span>}
      {show && showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-0.5 w-0.5 h-5 bg-purple-500 inline-block"
        />
      )}
    </span>
  );
};

// Password Dots Component
const PasswordDots: React.FC<{ show: boolean }> = ({ show }) => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    if (!show) {
      setDots(0);
      return;
    }

    const interval = setInterval(() => {
      setDots(prev => (prev < 8 ? prev + 1 : prev));
    }, 80);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className="flex items-center gap-1 h-5">
      {dots > 0 ? (
        [...Array(dots)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 bg-gray-700 rounded-full"
          />
        ))
      ) : (
        <span className="text-gray-400 text-sm">Şifreniz</span>
      )}
    </div>
  );
};

export default PhoneMockup;
