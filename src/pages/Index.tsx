import TherapyOnboarding from "@/components/TherapyOnboarding";

const Index = () => {
  return (
    <div className="min-h-screen gradient-calm flex flex-col items-center justify-center p-8">
      {/* Main Animation Container */}
      <div className="w-full max-w-3xl mx-auto">
        <TherapyOnboarding />
      </div>

      {/* CTA Section */}
      <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '5.5s', animationFillMode: 'both' }}>
        <button className="gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
          Hemen Başla
        </button>
        <p className="mt-4 text-muted-foreground text-sm">
          Profesyonel destek bir tık uzağında
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 flex items-center gap-8 text-muted-foreground text-sm opacity-0 animate-fade-in" style={{ animationDelay: '6s', animationFillMode: 'forwards' }}>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-therapy-green" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>%100 Gizlilik</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-therapy-teal" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Onaylı Terapistler</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-therapy-purple" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <span>7/24 Destek</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
