export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[var(--background)]">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            Welcome to Your Digital Home Exercise Program
          </h1>
          <p className="text-lg text-[var(--text)] mb-8">
            Your personalized journey to recovery and wellness starts here. Follow these exercises
            as prescribed by your physical therapist to achieve optimal results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Stretching Exercises</h2>
            <p className="text-[var(--text)] mb-6">
              Improve flexibility and reduce muscle tension with our carefully designed stretching routine.
              Perfect for warming up and cooling down.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-[var(--text)]">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Neck stretches
              </li>
              <li className="flex items-center text-[var(--text)]">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Shoulder mobility
              </li>
              <li className="flex items-center text-[var(--text)]">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Back flexibility
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Strengthening Exercises</h2>
            <p className="text-[var(--text)] mb-6">
              Build strength and stability with our progressive strengthening program.
              Designed to help you regain and maintain muscle function.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-[var(--text)]">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Core exercises
              </li>
              <li className="flex items-center text-[var(--text)]">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Upper body strength
              </li>
              <li className="flex items-center text-[var(--text)]">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                Lower body stability
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Important Notes</h2>
          <div className="space-y-4 text-[var(--text)]">
            <p className="flex items-start">
              <span className="text-[var(--primary)] mr-2">•</span>
              Perform exercises in a pain-free range of motion
            </p>
            <p className="flex items-start">
              <span className="text-[var(--primary)] mr-2">•</span>
              Maintain proper form throughout each exercise
            </p>
            <p className="flex items-start">
              <span className="text-[var(--primary)] mr-2">•</span>
              Breathe normally during exercises
            </p>
            <p className="flex items-start">
              <span className="text-[var(--primary)] mr-2">•</span>
              Stop if you experience any pain or discomfort
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 