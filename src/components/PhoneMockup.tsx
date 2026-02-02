import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Video, Check, Heart, User, Mail, Lock, Search } from 'lucide-react';
import './PhoneMockup.css';

const PhoneMockup: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [screenKey, setScreenKey] = useState(0);

  useEffect(() => {
    const screenDurations = [4000, 4000, 4000];
    const pauseDuration = 1000;

    const timer = setTimeout(() => {
      if (currentScreen === 2) {
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
    <div className="phone-container">
      <div className="phone-wrapper">
        <div className="phone-shadow" />
        
        <div className="phone-body">
          <div className="phone-bezel">
            <div className="dynamic-island">
              <div className="island-dot" />
              <div className="island-pill" />
            </div>

            <div className="phone-screen">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentScreen}-${screenKey}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="screen-content"
                >
                  {screens[currentScreen]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="home-indicator" />
          </div>
        </div>

        <div className="side-button side-button-1" />
        <div className="side-button side-button-2" />
        <div className="side-button side-button-3" />
        <div className="side-button side-button-right" />
      </div>
    </div>
  );
};

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
    <div className="screen screen-1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="screen-header"
      >
        <div className="logo-box">
          <span className="logo-text">Y</span>
        </div>
        <h1 className="screen-title">Hesap Oluştur</h1>
        <p className="screen-subtitle">Terapi yolculuğun başlasın</p>
      </motion.div>

      <div className="form-fields">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -20 }}
          className="input-wrapper"
        >
          <div className="input-icon input-icon-purple">
            <User size={18} />
          </div>
          <div className="input-field input-field-purple">
            <TypewriterText text="Ayşe Yılmaz" show={step >= 2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : -20 }}
          transition={{ delay: 0.1 }}
          className="input-wrapper"
        >
          <div className="input-icon input-icon-teal">
            <Mail size={18} />
          </div>
          <div className="input-field input-field-teal">
            <TypewriterText text="ayse@email.com" show={step >= 3} delay={0.8} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 3 ? 1 : 0, x: step >= 3 ? 0 : -20 }}
          transition={{ delay: 0.2 }}
          className="input-wrapper"
        >
          <div className="input-icon input-icon-green">
            <Lock size={18} />
          </div>
          <div className="input-field input-field-green">
            <PasswordDots show={step >= 4} />
          </div>
        </motion.div>
      </div>

      <motion.div className="button-container">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: step >= 4 ? 1 : 0, 
            y: step >= 4 ? 0 : 20,
            scale: step >= 5 ? [1, 0.95, 1] : 1
          }}
          transition={{ duration: 0.3 }}
          className="submit-button submit-button-purple"
        >
          {step >= 5 ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check size={24} className="check-icon" />
            </motion.div>
          ) : (
            "Kayıt Ol"
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

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
    <div className="screen screen-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="screen-header"
      >
        <h1 className="screen-title">Terapistini Bul</h1>
        <p className="screen-subtitle">Sana uygun terapisti eşleştiriyoruz</p>
      </motion.div>

      <AnimatePresence>
        {step < 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="loading-container"
          >
            <div className="loading-spinner-wrapper">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="loading-spinner"
              />
              <Search className="search-icon" size={24} />
            </div>
            <p className="loading-text">Aranıyor...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="therapist-list">
        {step >= 2 && therapists.map((therapist, index) => (
          <motion.div
            key={therapist.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: step >= 4 && index === 1 ? 1.02 : 1,
            }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className={`therapist-card ${step >= 4 && index === 1 ? 'therapist-card-selected' : ''}`}
          >
            <div className="therapist-content">
              <div className={`therapist-avatar therapist-avatar-${index}`}>
                {therapist.avatar}
              </div>
              <div className="therapist-info">
                <h3 className="therapist-name">{therapist.name}</h3>
                <p className="therapist-specialty">{therapist.specialty}</p>
              </div>
              
              {step >= 4 && index === 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.4 }}
                >
                  <Heart className="heart-icon" size={24} />
                </motion.div>
              )}
            </div>

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
                    className="particle"
                  />
                ))}
              </>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="button-container"
          >
            <div className="success-message success-message-teal">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="success-icon-wrapper"
              >
                <Check className="success-check-icon" size={24} />
              </motion.div>
              <p className="success-text">Eşleşme Tamamlandı!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
    { icon: MessageCircle, label: "Mesaj", colorClass: "option-purple" },
    { icon: Phone, label: "Sesli Arama", colorClass: "option-teal" },
    { icon: Video, label: "Görüntülü", colorClass: "option-green" },
  ];

  return (
    <div className="screen screen-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="screen-header"
      >
        <h1 className="screen-title">İletişim Yöntemini Seç</h1>
        <p className="screen-subtitle">Terapistinle nasıl bağlanmak istersin?</p>
      </motion.div>

      <div className="options-container">
        <div className="options-row">
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
              className="option-wrapper"
            >
              <div className={`option-box ${option.colorClass}`}>
                <option.icon size={32} className="option-icon" />
                
                {step >= 4 && (
                  <>
                    <motion.div
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ripple-effect"
                    />
                    <motion.div
                      animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      className="ripple-effect"
                    />
                  </>
                )}

                {step >= 5 && index === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="selection-glow"
                  />
                )}
              </div>
              <p className="option-label">{option.label}</p>
            </motion.div>
          ))}
        </div>

        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="signal-container"
          >
            <div className="signal-wrapper">
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
                  className="signal-ring"
                />
              ))}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="signal-center"
              >
                <Video size={24} className="option-icon" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {step >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="button-container"
          >
            <div className="success-message success-message-green">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="success-icon-wrapper success-icon-wrapper-green"
              >
                <Check className="success-check-icon success-check-green" size={24} />
              </motion.div>
              <p className="success-text">Bağlandı!</p>
              <p className="success-subtext">Terapistiniz sizi bekliyor</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
    <span className="typewriter-container">
      {displayText || <span className="placeholder-text">Adınız</span>}
      {show && showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="cursor"
        />
      )}
    </span>
  );
};

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
    <div className="password-dots">
      {dots > 0 ? (
        [...Array(dots)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="password-dot"
          />
        ))
      ) : (
        <span className="placeholder-text">Şifreniz</span>
      )}
    </div>
  );
};

export default PhoneMockup;
