import { CheckCircle, Users, Trophy, Sparkles, Instagram, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#304FFE] to-[#5E72FF] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6F00] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo-chorma.svg.jpg"
              alt="Chorma Logo"
              className="w-24 h-24 mx-auto"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
            Haushalt? Einfach. Fair. Belohnt.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-10 text-white/90">
            Chorma verteilt Aufgaben automatisch, belohnt Engagement – und bringt Spaß in den Alltag.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/DEIN_FORM_LINK/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white bg-[#304FFE] hover:opacity-90 transition"
            >
              Jetzt 3 Monate kostenlos vormerken
            </a>
            <p className="text-sm text-white/70">
              Keine Verpflichtung. Start in Kürze.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Warum Chorma?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hausarbeit führt oft zu Stress, unfairer Verteilung und Chaos. Chorma löst das – durch klare Aufgaben, Motivation und Belohnung.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-gradient-to-br from-[#304FFE]/10 to-[#FF6F00]/10 p-12 rounded-3xl">
                <Users className="w-32 h-32 text-[#304FFE]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#304FFE]/5 to-transparent hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#304FFE] rounded-2xl mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Automatische Aufgabenverteilung
              </h3>
              <p className="text-gray-600">
                Keine manuellen Listen mehr. Chorma plant und verteilt Aufgaben fair und intelligent.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#FF6F00]/5 to-transparent hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6F00] rounded-2xl mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Motivierendes Punktesystem
              </h3>
              <p className="text-gray-600">
                Sammle Punkte für jede erledigte Aufgabe und steigere deine Motivation Tag für Tag.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#304FFE]/5 to-transparent hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#304FFE] rounded-2xl mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Belohnungen & Challenges für Familien
              </h3>
              <p className="text-gray-600">
                Erreiche Meilensteine gemeinsam und feiere Erfolge als Familie oder WG.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#304FFE]/5 to-[#FF6F00]/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            So einfach funktioniert Chorma.
          </h2>
          <div className="bg-gradient-to-br from-[#304FFE] to-[#5E72FF] rounded-3xl shadow-2xl p-8 sm:p-16 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border-2 border-white/20">
                <Sparkles className="w-24 h-24 mx-auto mb-4" />
                <p className="text-xl font-semibold">App Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Werde Teil der Beta!
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Teste Chorma 3 Monate kostenlos und hilf uns, Hausarbeit neu zu denken.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#304FFE] focus:outline-none transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#FF6F00] hover:bg-[#E66300] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap"
              >
                Jetzt anmelden
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#304FFE] to-[#5E72FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-semibold mb-8">
            Schon über 100 Interessierte warten auf den Start!
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="X"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Chorma – Alle Rechte vorbehalten.
            </p>
            <a
              href="#impressum"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Impressum & Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
