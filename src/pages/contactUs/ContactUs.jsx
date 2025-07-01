import { FaFacebookF} from "react-icons/fa";
import { Link } from "react-router";
const ContactUs = () => {
  return (
    <div className="bg-base-100 px-4 py-10 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Contact Us</h2>
          <p className=" mt-2">We’d love to hear from you! Please reach out with any questions or feedback.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-4 bg-base-200 p-6 rounded-lg shadow">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input type="text" placeholder="Enter your name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Email</span>
              </label>
              <input type="email" placeholder="Enter your email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Subject</span>
              </label>
              <input type="text" placeholder="Subject of your message" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Message</span>
              </label>
              <textarea className="textarea textarea-bordered" rows="4" placeholder="Write your message..." required></textarea>
            </div>

            <div className="text-right">
              <button className="btn btn-primary mt-2">Send Message</button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-base-200 p-6 rounded-lg shadow space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Get in Touch</h3>
              <p className="">Have questions about donations or requests? Reach us anytime.</p>
            </div>

            <div className="space-y-3 ">
              <p><strong>Email:</strong> riajul.karim52@gmail.com</p>
              <p><strong>Phone:</strong> +880-1708867912</p>
              <p><strong>Address:</strong> 123 Donation Street, Dhaka, Bangladesh</p>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-primary">Follow Us</h4>
              <div className="flex gap-4 mt-2">
                <Link to="https://www.facebook.com/share/1JHcRoWsFS/" target="_blank"><FaFacebookF className="hover:text-blue-500" size={25}/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
