function Contact() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="card-title text-4xl font-bold text-primary">Contact Us</h1>
          <p className="text-base-content">Get in touch with us for any questions or support.</p>
          <div className="card-actions">
            <button className="btn btn-accent">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
