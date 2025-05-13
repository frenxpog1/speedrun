export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[var(--background)] py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            About Sharthea Clinics
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Our Mission</h2>
            <p className="text-[var(--text)] mb-6">
              At Sharthea Clinics, we are dedicated to providing exceptional physical therapy care
              that empowers our patients to achieve their optimal health and wellness goals. Our
              team of experienced professionals combines evidence-based practices with personalized
              attention to ensure the best possible outcomes for every patient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Our Approach</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Personalized treatment plans tailored to individual needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Evidence-based therapeutic techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Comprehensive assessment and ongoing evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Patient education and self-management strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Our Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Physical therapy for various conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Sports rehabilitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Post-surgical rehabilitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text)]">Preventive care and wellness programs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Contact Us</h2>
            <div className="space-y-4 text-[var(--text)]">
              <p className="flex items-center">
                <span className="text-[var(--primary)] mr-2">📍</span>
                123 Therapy Street, Wellness City, WC 12345
              </p>
              <p className="flex items-center">
                <span className="text-[var(--primary)] mr-2">📞</span>
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <span className="text-[var(--primary)] mr-2">✉️</span>
                info@shartheaclinics.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 