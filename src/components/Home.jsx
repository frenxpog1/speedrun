export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="section-title">Welcome to Your Digital Home Exercise Program</h1>
          <p className="text-lg text-[var(--secondary)] mb-4">
            Your personalized journey to recovery and wellness starts here. Follow these exercises as prescribed by your physical therapist to achieve optimal results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          <div className="exercise-card">
            <h2 className="text-xl font-semibold mb-2 text-[var(--primary)]">Stretching Exercises</h2>
            <p className="text-[var(--secondary)] mb-4 text-sm">
              Improve flexibility and reduce muscle tension with our carefully designed stretching routine. Perfect for warming up and cooling down.
            </p>
            <ul className="space-y-2 text-[var(--text)] text-sm">
              <li>• Neck stretches</li>
              <li>• Shoulder mobility</li>
              <li>• Back flexibility</li>
            </ul>
          </div>

          <div className="exercise-card">
            <h2 className="text-xl font-semibold mb-2 text-[var(--primary)]">Strengthening Exercises</h2>
            <p className="text-[var(--secondary)] mb-4 text-sm">
              Build strength and stability with our progressive strengthening program. Designed to help you regain and maintain muscle function.
            </p>
            <ul className="space-y-2 text-[var(--text)] text-sm">
              <li>• Core exercises</li>
              <li>• Upper body strength</li>
              <li>• Lower body stability</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 modern-card p-6">
          <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">Important Notes</h2>
          <ul className="list-disc pl-5 space-y-1 text-[var(--secondary)] text-sm">
            <li>Perform exercises in a pain-free range of motion</li>
            <li>Maintain proper form throughout each exercise</li>
            <li>Breathe normally during exercises</li>
            <li>Stop if you experience any pain or discomfort</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 