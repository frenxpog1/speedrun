import VideoDemonstration from './VideoDemonstration'

export default function StrengtheningExercises() {
  const exercises = [
    {
      id: "squats",
      name: "Squats (Bodyweight)",
      purpose: "To strengthen your left quadriceps, which is essential for standing, walking, and sitting.",
      equipment: [
        "A yoga mat",
        "An optional chair behind you for safety"
      ],
      procedure: [
        "Stand with feet shoulder-width apart, toes pointed forward",
        "Raise arms in front at shoulder height, palms facing down",
        "Pull your belly inward to engage the core",
        "Inhale as you lower into a squat, pushing hips back like you're sitting on a chair",
        "Keep knees behind toes and heels flat on the floor",
        "Exhale as you push back up to standing",
        "Perform 12 reps × 3 sets, rest 1–2 minutes between sets"
      ],
      feeling: "A tightening sensation at the front of your thighs (quadriceps)",
      videoUrl: "/videos/squats.mp4"
    },
    {
      id: "knee-extension",
      name: "Weighted Knee Extension (Seated)",
      purpose: "To strengthen your hamstrings and improve knee control.",
      equipment: [
        "Ankle weights (or bottle + towel alternative)",
        "Yoga mat and pillow for comfort"
      ],
      procedure: [
        "Lie on your stomach, body straight, feet shoulder-width apart",
        "Hands should rest at your sides or on your hips",
        "Slowly bend your left knee as far as possible",
        "Return to the starting position",
        "Repeat 8 times on the left leg, then switch to right",
        "Rest for 2 minutes between sets"
      ],
      feeling: "A strengthening sensation in your hamstring muscles",
      videoUrl: "/videos/knee-extension.mp4"
    },
    {
      id: "forward-lunges",
      name: "Left Forward Lunges",
      purpose: "To strengthen your left quadriceps muscle and improve balance.",
      equipment: [
        "Flat surface or yoga mat",
        "Free from clutter"
      ],
      procedure: [
        "Stand with feet shoulder-width apart, facing forward",
        "Place both hands on hips",
        "Step forward with your left leg",
        "Slowly lower until your right knee nearly touches the ground",
        "Keep trunk upright and shin vertical",
        "Push off with the left foot to return to starting position",
        "Perform 8 reps × 3 sets, resting 2–3 minutes between sets"
      ],
      feeling: "A strengthening sensation in your left quadriceps and glutes",
      videoUrl: "/videos/forward-lunges.mp4"
    }
  ]

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Strengthening Exercises</h2>
        <p className="text-lg text-center mb-8">
          These exercises are designed to build strength in your lower extremities.
          Remember to maintain proper form and stop if you experience any pain.
        </p>
        <div className="grid grid-cols-1 gap-8">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{exercise.name}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Purpose</h4>
                  <p>{exercise.purpose}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Equipment Needed</h4>
                  <ul className="list-disc list-inside">
                    {exercise.equipment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Procedure</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {exercise.procedure.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">What You Should Feel</h4>
                  <p>{exercise.feeling}</p>
                </div>
                <VideoDemonstration 
                  title={exercise.name}
                  videoUrl={exercise.videoUrl}
                  instructor="Sasha Guadalquiver"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 