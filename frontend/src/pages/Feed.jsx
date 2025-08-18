function Feed() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Feed</h1>
        
        <div className="grid gap-6">
          {/* Sample Feed Items */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-base-content/70">2 hours ago</p>
                </div>
              </div>
              <p className="text-base-content">This is a sample post in the feed. Here you can see how content would be displayed.</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-ghost">Like</button>
                <button className="btn btn-sm btn-ghost">Comment</button>
                <button className="btn btn-sm btn-ghost">Share</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full bg-secondary"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-sm text-base-content/70">5 hours ago</p>
                </div>
              </div>
              <p className="text-base-content">Another interesting post with some engaging content for the feed.</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-ghost">Like</button>
                <button className="btn btn-sm btn-ghost">Comment</button>
                <button className="btn btn-sm btn-ghost">Share</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Mike Johnson</h3>
                  <p className="text-sm text-base-content/70">1 day ago</p>
                </div>
              </div>
              <p className="text-base-content">This is the third post in our feed example. Each post has its own avatar and interaction buttons.</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-ghost">Like</button>
                <button className="btn btn-sm btn-ghost">Comment</button>
                <button className="btn btn-sm btn-ghost">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
