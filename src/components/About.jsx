export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Disclaimer - styled as plain text above all content */}
      <p className="italic font-bold text-[#C0392B] text-lg font-serif text-center mt-4 mb-2">
        Disclaimer: This HEP is designed for educational and simulated patient purposes only.<br />
        Please consult a licensed physical therapist for real-life diagnosis, evaluation, or treatment.
      </p>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 drop-shadow-lg">About Sharthea Clinics</h1>
        <p className="text-lg md:text-xl text-[var(--text)] max-w-2xl mx-auto mb-6">
          Empowering your journey to health and wellness with modern, evidence-based physical therapy and a caring touch.
        </p>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-4 pb-12 grid gap-8 md:grid-cols-2">
        <div className="modern-card p-8 text-center">
          <h2 className="text-xl font-bold mb-2 text-black">Our Mission</h2>
          <p className="text-[var(--text)] text-base">
            At Sharthea Clinics, we are dedicated to providing exceptional physical therapy care that empowers our patients to achieve their optimal health and wellness goals. Our team of experienced professionals combines evidence-based practices with personalized attention to ensure the best possible outcomes for every patient.
          </p>
        </div>
        <div className="modern-card p-8 text-center">
          <h2 className="text-xl font-bold mb-2 text-black">Our Approach</h2>
          <ul className="list-disc pl-5 space-y-1 text-[var(--text)] text-sm text-left w-full max-w-xs mx-auto">
            <li>Personalized treatment plans tailored to individual needs</li>
            <li>Evidence-based therapeutic techniques</li>
            <li>Comprehensive assessment and ongoing evaluation</li>
            <li>Patient education and self-management strategies</li>
          </ul>
        </div>
        <div className="modern-card p-8 text-center">
          <h2 className="text-xl font-bold mb-2 text-black">Our Services</h2>
          <ul className="list-disc pl-5 space-y-1 text-[var(--text)] text-sm text-left w-full max-w-xs mx-auto">
            <li>Physical therapy for various conditions</li>
            <li>Sports rehabilitation</li>
            <li>Post-surgical rehabilitation</li>
            <li>Preventive care and wellness programs</li>
          </ul>
        </div>
        <div className="modern-card p-8 text-center">
          <h2 className="text-xl font-bold mb-2 text-black">Contact Us</h2>
          <ul className="space-y-1 text-[var(--text)] text-sm">
            <li><span className="font-medium text-[var(--primary)]">Address:</span> 123 Therapy Street, Wellness City, WC 12345</li>
            <li><span className="font-medium text-[var(--primary)]">Phone:</span> (555) 123-4567</li>
            <li><span className="font-medium text-[var(--primary)]">Email:</span> info@shartheaclinics.com</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 