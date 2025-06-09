import React from 'react'

const Footer = () => {
  return (
        <section className="bg-[#141414] text-white body-font">
          <div className="max-w-6xl px-5 py-12 mx-auto">
            {/* Header Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  items-center gap-3">
                <div>Logo</div>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Contact</div>
                <div>Socials</div>
              
            </div>
    
          </div>
          
        </section>
  )
}

export default Footer