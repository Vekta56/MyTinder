function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="card-title text-4xl font-bold text-primary">Hello World!</h1>
          <p className="text-base-content">Welcome to your React app with Tailwind CSS and Daisy UI</p>
          <div className="card-actions">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-ghost">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
