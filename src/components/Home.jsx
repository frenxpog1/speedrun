export default function Home({ setPage }) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Digital Home Exercise Program (HEP)</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-4">Patient Case</h3>
          <p className="text-lg mb-6">
            This program is designed for a hypothetical patient with left lower extremity tightness and quadriceps/hamstring weakness, 
            experiencing difficulty in prolonged sitting and standing tasks.
          </p>
          <p className="text-lg mb-6">
            Welcome to your personalized Home Exercise Program! This is specifically designed to target your left lower extremity — 
            focusing on improving hamstring flexibility and strengthening the quadriceps muscles. These exercises are tailored for 
            individuals experiencing tightness, poor posture tolerance, and difficulty during prolonged sitting or weight-bearing tasks.
          </p>
          <p className="text-lg">
            Our HEP includes stretching and strengthening routines, complete with detailed instructions, safety tips, and progressive 
            modifications to help you gain strength and flexibility at home safely and efficiently.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setPage('stretching')}
            style={{ backgroundColor: 'var(--rose-gold)' }}
            className="text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            View Stretching Exercises
          </button>
          <button
            onClick={() => setPage('strengthening')}
            style={{ backgroundColor: 'var(--rose-gold)' }}
            className="text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            View Strengthening Exercises
          </button>
        </div>
      </div>
    </section>
  )
} 