function About() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="card-title text-4xl font-bold text-primary">About Us</h1>
          <p className="text-base-content">This is a React application built with modern technologies including Vite, Tailwind CSS, and Daisy UI.</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
