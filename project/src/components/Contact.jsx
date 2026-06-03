import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 text-left">
      <div className="container mx-auto px-6 md:px-16">
        <h3 className="text-3xl font-bold text-purple-600 mb-6 text-center">Contact Me</h3>

        <div className="rounded-2xl bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] p-8 max-w-xl mx-auto">
          <form
            action="https://formspree.io/f/mrbkdddw"  // ✅ Use your own Formspree endpoint
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="form-input"
              rows="4"
              required
            ></textarea>

            <div className="text-center">
              <button type="submit" className="send-button">Send Message</button>
            </div>

            <p className="mt-4 text-sm text-center">
              Or reach out directly:<br />
              📧 <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jasleenkaur11rps@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 underline">
                jasleenkaur11rps@gmail.com
                </a><br></br>
              📞 +91 7024026295
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;