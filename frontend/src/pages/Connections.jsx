function Connections() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Connections</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample Connection Cards */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full bg-primary"></div>
              </div>
              <h2 className="card-title">John Doe</h2>
              <p className="text-base-content/70">Software Developer</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm">Message</button>
                <button className="btn btn-ghost btn-sm">View Profile</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full bg-secondary"></div>
              </div>
              <h2 className="card-title">Jane Smith</h2>
              <p className="text-base-content/70">UX Designer</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm">Message</button>
                <button className="btn btn-ghost btn-sm">View Profile</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full bg-accent"></div>
              </div>
              <h2 className="card-title">Mike Johnson</h2>
              <p className="text-base-content/70">Product Manager</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm">Message</button>
                <button className="btn btn-ghost btn-sm">View Profile</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full bg-info"></div>
              </div>
              <h2 className="card-title">Sarah Wilson</h2>
              <p className="text-base-content/70">Data Scientist</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm">Message</button>
                <button className="btn btn-ghost btn-sm">View Profile</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full bg-success"></div>
              </div>
              <h2 className="card-title">Alex Brown</h2>
              <p className="text-base-content/70">Frontend Developer</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm">Message</button>
                <button className="btn btn-ghost btn-sm">View Profile</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full bg-warning"></div>
              </div>
              <h2 className="card-title">Emily Davis</h2>
              <p className="text-base-content/70">Marketing Specialist</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm">Message</button>
                <button className="btn btn-ghost btn-sm">View Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connections
