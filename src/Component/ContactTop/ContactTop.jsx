import React from 'react'

const ContactTop = () => {
  return (
    <div>
      <div className="flex text-sm space-x-5  justify-center font-poppin md:space-x-16 bg-black text-white py-2">
        <p>
          Call:{" "}
          <a href="tel:+917010696323" className="hover:underline">
            +91 7010696323
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:eyarkaibanangal@gmail.com"
            className="hover:underline">
            eyarkaibanangal@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactTop