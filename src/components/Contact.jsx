export default function Contact() {
  return (
    <section id="contact" className="rc-contact relative overflow-hidden scroll-mt-24">
      <div className="rc-contact-orb rc-contact-orb-one" aria-hidden="true"></div>
      <div className="rc-contact-orb rc-contact-orb-two" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rc-contact-heading" data-aos="fade-up">
          <span className="rc-section-kicker">Start a conversation</span>
          <h2>Have a project in mind?</h2>
          <p>
            Tell us what you need, ask for a quote, or use WhatsApp if you want a quicker
            conversation. No pressure — just a clear next step.
          </p>
        </div>

        <div className="rc-contact-layout">
          <aside className="rc-contact-sidebar" data-aos="fade-right">
            <div className="rc-contact-sidebar-head">
              <span>Direct contact</span>
              <h3>Prefer to talk first?</h3>
              <p>Reach out directly and we’ll help you figure out the best way forward.</p>
            </div>

            <div className="rc-contact-methods">
              <a
                href="https://wa.me/27634733098?text=Hi%20Ruan%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="rc-contact-method rc-contact-whatsapp"
              >
                <span aria-hidden="true"><i data-feather="message-circle"></i></span>
                <div>
                  <small>WhatsApp</small>
                  <strong>Start a quick chat</strong>
                </div>
                <i data-feather="arrow-up-right" aria-hidden="true"></i>
              </a>

              <a href="tel:+27634733098" className="rc-contact-method">
                <span aria-hidden="true"><i data-feather="phone"></i></span>
                <div>
                  <small>Phone</small>
                  <strong>063 473 3098</strong>
                </div>
                <i data-feather="arrow-up-right" aria-hidden="true"></i>
              </a>

              <a href="mailto:info@rcdigitalcreations.co.za" className="rc-contact-method">
                <span aria-hidden="true"><i data-feather="mail"></i></span>
                <div>
                  <small>Email</small>
                  <strong>info@rcdigitalcreations.co.za</strong>
                </div>
                <i data-feather="arrow-up-right" aria-hidden="true"></i>
              </a>
            </div>

            <div className="rc-contact-brief">
              <span className="rc-contact-brief-icon" aria-hidden="true">
                <i data-feather="clipboard"></i>
              </span>
              <div>
                <strong>Already know you need a website?</strong>
                <p>Complete the website brief so we can understand the project before we talk.</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgReyOlg7z7Xt7D_UisBDMn2acF34X8OO4wCpNXGUbpXPmjA/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Website Brief <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </aside>

          <div className="rc-contact-form-card" data-aos="fade-left">
            <div className="rc-contact-form-head">
              <span>Project enquiry</span>
              <h3>Tell us what you’re planning.</h3>
              <p>We’ll use this to understand the basics and get back to you with the right next step.</p>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="agency-form"
              className="rc-contact-form"
            >
              <input type="hidden" name="access_key" value="13e3d3b7-e0ac-482d-9ecb-19395a35beae" />
              <input type="hidden" name="subject" value="New Inquiry - RC Digital Creations" />
              <input type="hidden" name="from_name" value="RC Digital Creations Site" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="rc-form-grid">
                <label>
                  <span>Your Name</span>
                  <input type="text" name="name" required placeholder="John Doe" />
                </label>

                <label>
                  <span>Email Address</span>
                  <input type="email" name="email" required placeholder="john@example.com" />
                </label>

                <label>
                  <span>Phone Number <small>optional</small></span>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9+\-()\s]{7,}"
                    placeholder="063 473 3098"
                  />
                </label>

                <label>
                  <span>Service Interested In</span>
                  <select name="service">
                    <option value="Web Design">Website Design & Development</option>
                    <option value="AI Chatbot">AI Chatbot Integration</option>
                    <option value="Branding">Logo / Branding Design</option>
                    <option value="Other">Other / Consultation</option>
                  </select>
                </label>
              </div>

              <label className="rc-form-message">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your project, what you need, and any timeline you have in mind..."
                ></textarea>
              </label>

              <button type="submit" className="rc-contact-submit">
                Send Project Enquiry
                <span aria-hidden="true">→</span>
              </button>

              <p className="text-center text-sm mt-4 hidden" id="form-result"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
