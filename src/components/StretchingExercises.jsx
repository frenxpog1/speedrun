import VideoDemonstration from './VideoDemonstration'

export default function StretchingExercises() {
  const exercises = [
    {
      id: "hamstring-towel",
      name: "Hamstring Stretch Using a Towel",
      purpose: "To increase flexibility of your left hamstring and reduce tightness.",
      equipment: [
        "A 1-meter towel or bath towel",
        "A flat surface (mat, bed, or sofa), free from clutter",
        "Fold the towel lengthwise to a width of 2–4 inches"
      ],
      procedure: [
        "Sit with your left leg extended straight",
        "You may bend your left leg if it's more comfortable",
        "Loop the towel around the ball of your left foot",
        "Hold each end with both hands evenly",
        "Avoid slouching or shrugging",
        "Gently pull the towel toward your stomach, keeping your back straight",
        "Avoid bending your right knee",
        "Hold the stretch for 30 seconds, repeat 3 sets"
      ],
      feeling: "A stretch at the back of your right thigh",
      videoUrl: "/videos/hamstring-towel-stretch.mp4"
    },
    {
      id: "sit-reach",
      name: "Sit and Reach Stretch",
      purpose: "To stretch the hamstrings and improve flexibility in sitting/weight-bearing tasks.",
      equipment: ["A flat surface or mat"],
      procedure: [
        "Sit with both legs straight and together",
        "Feet should be facing the ceiling",
        "Start with arms raised and palms forward",
        "Reach for your toes, trying to hold them with your hands",
        "Keep your back flat and avoid twisting",
        "Return to starting position and repeat",
        "Perform for 30 seconds × 3 sets"
      ],
      feeling: "A stretch in the back of your thighs",
      videoUrl: "/videos/sit-reach-stretch.mp4"
    },
    {
      id: "standing-hamstring",
      name: "Standing Hamstring Stretch Using a Chair",
      purpose: "To target your tight hamstring (muscle at the back of your thigh) and reduce tightness and pain.",
      equipment: [
        "A sturdy chair (non-rolling) placed on a non-slip surface",
        "Make sure there's ample space free of clutter"
      ],
      procedure: [
        "Position the chair one foot in front of you",
        "Stand with feet hip-width apart, shoulders relaxed",
        "Place left heel on the center of the chair seat",
        "Keep the right leg slightly bent (not locked)",
        "With a straight back, begin to lean forward from the hips",
        "Lead with the chest, not the head",
        "Keep hands lightly on your hips for balance",
        "Hold for 20 seconds, then return slowly and repeat 3 times"
      ],
      feeling: "A stretch at the back of your left thigh",
      videoUrl: "/videos/standing-hamstring-stretch.mp4"
    },
    {
      id: "quad-stretch",
      name: "Quadriceps Stretch (Standing)",
      purpose: "To stretch the muscles at the front of your thigh (quadriceps) and reduce tightness.",
      equipment: ["Chair or stable surface to hold for balance"],
      procedure: [
        "Stand with both feet on the ground",
        "Bend your right knee, reach back and hold your right ankle",
        "Keep knees close together, thighs aligned",
        "Make sure your body doesn't tilt or twist",
        "Hold the stretch for 30 seconds, repeat 3 sets"
      ],
      feeling: "A pulling sensation in the front of the right thigh",
      videoUrl: "/videos/quad-stretch.mp4"
    }
  ]

  return (
    <section className="py-12 bg-[var(--background)] min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#B76E79] text-center">Stretching Exercises</h2>
        <p className="text-base md:text-lg text-center mb-8 text-[var(--text)]">
          These exercises are designed to improve flexibility and reduce tightness in your lower extremities. Remember to breathe deeply and never force a stretch beyond your comfort level.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="exercise-card">
              <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">{exercise.name}</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-[var(--accent)]">Purpose</h4>
                  <p className="text-sm">{exercise.purpose}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[var(--accent)]">Equipment Needed</h4>
                  <ul className="list-disc pl-5 text-sm">
                    {exercise.equipment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[var(--accent)]">Procedure</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    {exercise.procedure.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[var(--accent)]">What You Should Feel</h4>
                  <p className="text-sm">{exercise.feeling}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 