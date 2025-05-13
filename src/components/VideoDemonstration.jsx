export default function VideoDemonstration({ title, videoUrl, instructor }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Video Demonstration</h3>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <video 
          className="w-full h-full object-cover rounded-lg"
          controls
          poster="/video-placeholder.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-sm text-gray-600">
        <p>Demonstrated by: {instructor}</p>
        <p className="mt-2">Note: Please wear appropriate exercise attire and follow safety guidelines while performing these exercises.</p>
      </div>
    </div>
  )
} 