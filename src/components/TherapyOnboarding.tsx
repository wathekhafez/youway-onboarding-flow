import React from 'react';

const TherapyOnboarding: React.FC = () => {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-full max-w-[600px] max-h-[600px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
        
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
        </linearGradient>

        {/* Glow filters */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#8B5CF6" floodOpacity="0.25" />
        </filter>
      </defs>

      <style>{`
        /* Animation Keyframes */
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes drawLine {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes connectionDraw {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.15); }
        }

        @keyframes wave {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes fadeLoop {
          0%, 5% { opacity: 0; }
          10%, 30% { opacity: 1; }
          35%, 100% { opacity: 1; }
        }

        /* Step 1 Animations */
        .step1-group {
          animation: fadeInScale 0.8s ease-out 0.2s both, float 4s ease-in-out infinite 1s;
        }

        .step1-icon {
          animation: fadeInScale 0.6s ease-out 0.4s both;
        }

        .step1-check {
          animation: fadeInScale 0.4s ease-out 0.8s both;
        }

        .step1-badge {
          animation: fadeInScale 0.5s ease-out 0.6s both;
        }

        /* Step 2 Animations */
        .step2-group {
          animation: fadeInScale 0.8s ease-out 2.2s both, float 4s ease-in-out infinite 1.5s;
        }

        .step2-user1, .step2-user2 {
          animation: fadeInScale 0.6s ease-out 2.4s both;
        }

        .step2-heart {
          animation: fadeInScale 0.5s ease-out 2.8s both, heartBeat 2s ease-in-out infinite 3.3s;
          transform-origin: center;
        }

        .step2-connection {
          stroke-dasharray: 100;
          animation: connectionDraw 0.8s ease-out 2.6s both;
        }

        .step2-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }

        .step2-sparkle:nth-child(1) { animation-delay: 3s; }
        .step2-sparkle:nth-child(2) { animation-delay: 3.3s; }
        .step2-sparkle:nth-child(3) { animation-delay: 3.6s; }

        .step2-badge {
          animation: fadeInScale 0.5s ease-out 2.6s both;
        }

        /* Step 3 Animations */
        .step3-group {
          animation: fadeInScale 0.8s ease-out 4.2s both, float 4s ease-in-out infinite 2s;
        }

        .step3-screen {
          animation: fadeInScale 0.6s ease-out 4.4s both;
        }

        .step3-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .step3-wave:nth-child(1) { animation-delay: 4.8s; }
        .step3-wave:nth-child(2) { animation-delay: 5s; }
        .step3-wave:nth-child(3) { animation-delay: 5.2s; }

        .step3-icons {
          animation: slideInUp 0.6s ease-out 4.6s both;
        }

        .step3-badge {
          animation: fadeInScale 0.5s ease-out 4.6s both;
        }

        /* Connection Lines */
        .connector-line {
          stroke-dasharray: 200;
          animation: connectionDraw 1s ease-out 1.8s both;
        }

        .connector-line-2 {
          stroke-dasharray: 200;
          animation: connectionDraw 1s ease-out 3.8s both;
        }

        /* Text Labels */
        .label-text {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 500;
          fill: #1F2937;
        }

        .step-label {
          animation: slideInUp 0.6s ease-out both;
        }

        .step-label-1 { animation-delay: 1s; }
        .step-label-2 { animation-delay: 3s; }
        .step-label-3 { animation-delay: 5s; }

        /* Hover Effects */
        .step-group:hover {
          filter: url(#glow);
          cursor: pointer;
        }

        .step-group {
          transition: filter 0.3s ease;
        }

        /* Subtle Background Orbs */
        .bg-orb {
          animation: pulse 6s ease-in-out infinite;
        }

        .bg-orb-1 { animation-delay: 0s; }
        .bg-orb-2 { animation-delay: 2s; }
        .bg-orb-3 { animation-delay: 4s; }
      `}</style>

      {/* Background Orbs */}
      <circle className="bg-orb bg-orb-1" cx="100" cy="150" r="60" fill="#8B5CF6" opacity="0.08" />
      <circle className="bg-orb bg-orb-2" cx="300" cy="100" r="80" fill="#14B8A6" opacity="0.06" />
      <circle className="bg-orb bg-orb-3" cx="500" cy="180" r="50" fill="#10B981" opacity="0.08" />
      <circle className="bg-orb bg-orb-1" cx="150" cy="450" r="40" fill="#14B8A6" opacity="0.05" />
      <circle className="bg-orb bg-orb-2" cx="450" cy="400" r="70" fill="#8B5CF6" opacity="0.06" />

      {/* Connection Lines */}
      <path
        className="connector-line"
        d="M 185 280 Q 230 240 270 280"
        fill="none"
        stroke="url(#connectionLine)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="connector-line-2"
        d="M 330 280 Q 375 240 415 280"
        fill="none"
        stroke="url(#connectionLine)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Step 1 - Create Account */}
      <g className="step-group step1-group" filter="url(#softShadow)">
        {/* Card Background */}
        <rect
          x="70"
          y="200"
          width="130"
          height="160"
          rx="20"
          fill="white"
          opacity="0.95"
        />
        
        {/* Badge */}
        <g className="step1-badge">
          <circle cx="135" cy="205" r="18" fill="url(#purpleGradient)" />
          <text x="135" y="211" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">1</text>
        </g>

        {/* User Icon */}
        <g className="step1-icon">
          <circle cx="135" cy="265" r="22" fill="#F3E8FF" />
          <circle cx="135" cy="258" r="10" fill="url(#purpleGradient)" />
          <ellipse cx="135" cy="282" rx="16" ry="10" fill="url(#purpleGradient)" />
        </g>

        {/* Checkmark */}
        <g className="step1-check">
          <circle cx="155" cy="250" r="10" fill="#10B981" />
          <path
            d="M 150 250 L 153 253 L 160 246"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Form Lines */}
        <rect x="105" y="300" width="60" height="6" rx="3" fill="#E9D5FF" opacity="0.8" />
        <rect x="105" y="312" width="45" height="6" rx="3" fill="#E9D5FF" opacity="0.5" />
        <rect x="105" y="324" width="55" height="6" rx="3" fill="#E9D5FF" opacity="0.6" />
      </g>

      {/* Step 1 Label */}
      <text className="label-text step-label step-label-1" x="135" y="385" textAnchor="middle" fontSize="13">
        Hesap Oluştur
      </text>

      {/* Step 2 - Match with Therapist */}
      <g className="step-group step2-group" filter="url(#softShadow)">
        {/* Card Background */}
        <rect
          x="235"
          y="200"
          width="130"
          height="160"
          rx="20"
          fill="white"
          opacity="0.95"
        />

        {/* Badge */}
        <g className="step2-badge">
          <circle cx="300" cy="205" r="18" fill="url(#tealGradient)" />
          <text x="300" y="211" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">2</text>
        </g>

        {/* User 1 */}
        <g className="step2-user1">
          <circle cx="270" cy="270" r="20" fill="#CCFBF1" />
          <circle cx="270" cy="264" r="8" fill="url(#tealGradient)" />
          <ellipse cx="270" cy="282" rx="12" ry="8" fill="url(#tealGradient)" />
        </g>

        {/* User 2 (Therapist) */}
        <g className="step2-user2">
          <circle cx="330" cy="270" r="20" fill="#CCFBF1" />
          <circle cx="330" cy="264" r="8" fill="url(#tealGradient)" />
          <ellipse cx="330" cy="282" rx="12" ry="8" fill="url(#tealGradient)" />
          {/* Therapist badge */}
          <rect x="340" y="255" width="12" height="8" rx="2" fill="#10B981" />
        </g>

        {/* Connection Line */}
        <path
          className="step2-connection"
          d="M 285 270 Q 300 250 315 270"
          fill="none"
          stroke="url(#tealGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Heart */}
        <g className="step2-heart">
          <path
            d="M 300 258 C 296 252 288 252 288 260 C 288 268 300 276 300 276 C 300 276 312 268 312 260 C 312 252 304 252 300 258"
            fill="#F472B6"
          />
        </g>

        {/* Sparkles */}
        <circle className="step2-sparkle" cx="258" cy="248" r="3" fill="#FBBF24" />
        <circle className="step2-sparkle" cx="342" cy="252" r="2.5" fill="#FBBF24" />
        <circle className="step2-sparkle" cx="300" cy="235" r="2" fill="#FBBF24" />

        {/* Matching dots */}
        <circle cx="275" cy="320" r="4" fill="#14B8A6" opacity="0.6" />
        <circle cx="290" cy="320" r="4" fill="#14B8A6" opacity="0.8" />
        <circle cx="305" cy="320" r="4" fill="#14B8A6" />
        <circle cx="320" cy="320" r="4" fill="#14B8A6" opacity="0.8" />
        <circle cx="335" cy="320" r="4" fill="#14B8A6" opacity="0.6" />
      </g>

      {/* Step 2 Label */}
      <text className="label-text step-label step-label-2" x="300" y="385" textAnchor="middle" fontSize="13">
        Terapistinle Eşleş
      </text>

      {/* Step 3 - Connect Instantly */}
      <g className="step-group step3-group" filter="url(#softShadow)">
        {/* Card Background */}
        <rect
          x="400"
          y="200"
          width="130"
          height="160"
          rx="20"
          fill="white"
          opacity="0.95"
        />

        {/* Badge */}
        <g className="step3-badge">
          <circle cx="465" cy="205" r="18" fill="url(#greenGradient)" />
          <text x="465" y="211" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">3</text>
        </g>

        {/* Screen */}
        <g className="step3-screen">
          <rect x="435" y="240" width="60" height="45" rx="8" fill="#D1FAE5" />
          <rect x="440" y="245" width="50" height="35" rx="4" fill="url(#greenGradient)" />
          
          {/* Video call icon */}
          <circle cx="455" cy="262" r="8" fill="white" opacity="0.9" />
          <circle cx="455" cy="259" r="3" fill="#10B981" />
          <ellipse cx="455" cy="267" rx="5" ry="3" fill="#10B981" />
          
          {/* Camera icon */}
          <rect x="468" y="256" width="14" height="10" rx="2" fill="white" opacity="0.9" />
          <circle cx="475" cy="261" r="3" fill="#10B981" />
        </g>

        {/* Signal Waves */}
        <circle className="step3-wave" cx="465" cy="262" r="35" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.3" />
        <circle className="step3-wave" cx="465" cy="262" r="45" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.2" />
        <circle className="step3-wave" cx="465" cy="262" r="55" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.1" />

        {/* Communication Icons */}
        <g className="step3-icons">
          {/* Chat Bubble */}
          <g>
            <rect x="420" y="305" width="26" height="20" rx="6" fill="#34D399" />
            <circle cx="428" cy="315" r="2" fill="white" />
            <circle cx="433" cy="315" r="2" fill="white" />
            <circle cx="438" cy="315" r="2" fill="white" />
          </g>

          {/* Phone */}
          <g>
            <rect x="452" y="305" width="26" height="20" rx="6" fill="#10B981" />
            <path
              d="M 460 310 Q 458 312 458 315 Q 458 318 460 320 M 470 310 Q 472 312 472 315 Q 472 318 470 320"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="465" cy="315" r="3" fill="white" />
          </g>

          {/* Video */}
          <g>
            <rect x="484" y="305" width="26" height="20" rx="6" fill="#059669" />
            <rect x="489" y="310" width="12" height="10" rx="2" fill="white" />
            <path d="M 503 312 L 508 315 L 503 318 Z" fill="white" />
          </g>
        </g>
      </g>

      {/* Step 3 Label */}
      <text className="label-text step-label step-label-3" x="465" y="385" textAnchor="middle" fontSize="13">
        Anında Bağlan
      </text>

      {/* YouWay Logo/Title */}
      <g className="step-label" style={{ animationDelay: '0.3s' }}>
        <text
          x="300"
          y="130"
          textAnchor="middle"
          fontSize="32"
          fontWeight="700"
          fill="url(#purpleGradient)"
          fontFamily="'Inter', system-ui, sans-serif"
        >
          YouWay
        </text>
        <text
          x="300"
          y="155"
          textAnchor="middle"
          fontSize="14"
          fill="#6B7280"
          fontFamily="'Inter', system-ui, sans-serif"
        >
          Terapi yolculuğun başlasın
        </text>
      </g>

      {/* Bottom decorative elements */}
      <g opacity="0.5">
        <circle cx="180" cy="500" r="4" fill="#8B5CF6" />
        <circle cx="220" cy="480" r="3" fill="#14B8A6" />
        <circle cx="260" cy="495" r="2" fill="#10B981" />
        <circle cx="340" cy="490" r="3" fill="#8B5CF6" />
        <circle cx="380" cy="505" r="4" fill="#14B8A6" />
        <circle cx="420" cy="485" r="2" fill="#10B981" />
      </g>
    </svg>
  );
};

export default TherapyOnboarding;
