export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title">About Sharthea Clinics</h1>

          <div className="modern-card p-6 mb-8 text-center">
            <h2 className="text-xl font-bold mb-2 text-[var(--primary)]">Our Mission</h2>
            <p className="text-[var(--text)] text-base">
              At Sharthea Clinics, we are dedicated to providing exceptional physical therapy care that empowers our patients to achieve their optimal health and wellness goals. Our team of experienced professionals combines evidence-based practices with personalized attention to ensure the best possible outcomes for every patient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="modern-card p-6 text-center md:text-left">
              <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">Our Approach</h2>
              <ul className="list-disc pl-5 space-y-1 text-[var(--text)] text-sm text-left">
                <li>Personalized treatment plans tailored to individual needs</li>
                <li>Evidence-based therapeutic techniques</li>
                <li>Comprehensive assessment and ongoing evaluation</li>
                <li>Patient education and self-management strategies</li>
              </ul>
            </div>

            <div className="modern-card p-6 text-center md:text-left">
              <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">Our Services</h2>
              <ul className="list-disc pl-5 space-y-1 text-[var(--text)] text-sm text-left">
                <li>Physical therapy for various conditions</li>
                <li>Sports rehabilitation</li>
                <li>Post-surgical rehabilitation</li>
                <li>Preventive care and wellness programs</li>
              </ul>
            </div>
          </div>

          <div className="modern-card p-6 text-center">
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">Contact Us</h2>
            <ul className="space-y-1 text-[var(--text)] text-sm">
              <li><span className="font-medium text-[var(--primary)]">Address:</span> 123 Therapy Street, Wellness City, WC 12345</li>
              <li><span className="font-medium text-[var(--primary)]">Phone:</span> (555) 123-4567</li>
              <li><span className="font-medium text-[var(--primary)]">Email:</span> info@shartheaclinics.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 