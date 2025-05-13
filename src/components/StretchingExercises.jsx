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
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Stretching Exercises</h2>
        <p className="text-lg text-center mb-8">
          These exercises are designed to improve flexibility and reduce tightness in your lower extremities.
          Remember to breathe deeply and never force a stretch beyond your comfort level.
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