export default function AboutUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About This HEP</h2>
        <p className="text-lg mb-6">
          This is in compliance to PT17 HIT subject in Velez College.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-semibold mb-4">Team Members</h3>
          <ul className="text-left space-y-2">
            <li><span className="font-semibold">Exercise Reporter:</span> Guadalquiver</li>
            <li><span className="font-semibold">Researcher:</span> Suson</li>
            <li><span className="font-semibold">Website Editor:</span> Balundo</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="italic font-bold text-[#E53935] text-lg font-serif text-center">
            Disclaimer: This HEP is designed for educational and simulated patient purposes only. Please consult a licensed physical therapist for real-life diagnosis, evaluation, or treatment.
          </p>
        </div>
      </div>
    </section>
  )
} 