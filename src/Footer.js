import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container" id="contactus-link">
        <div className="row">
          {/* About the Shop Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
            Have Questions or Ideas?<br/> We’re Always Here to Help!
            </p>
            <p>Phone: (974) 000-0000</p>
            <p>Email: sales@albertoclocks.com</p>
            <div>
              <a href="#" className="me-2 text-dark icons-1">
                <i className="fab fa-facebook facebook-icon"></i>
              </a>
              <a href="#" className="me-2 text-dark icons-1">
                <i className="fab fa-instagram instagram-icon"></i>
              </a>
              <a href="#" className="text-dark icons-1">
                <i className="fab fa-tiktok tiktok-icon"></i>
              </a>
            </div>
          </div>

          {/* Policies Section */}
          <div className="col-md-4">
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Search
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-4">
            <h5>Newsletter</h5>
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row mt-4 text-center">
          <div className="col">
            <p className="mb-0">
              © Alberto Clocks <span className="text-muted">Powered by SUHAIB, AHMED & CALVIN</span>
            </p>
            <div className="mt-2 icons-2">
              <i className="fab fa-cc-amex fa-lg me-2 amex" title="AMEX"></i>
              <i className="fab fa-cc-paypal fa-lg me-2 paypal" title="PayPal"></i>
              <i className="fab fa-cc-visa fa-lg me-2 visa" title="VISA"></i>
              <i className="fab fa-cc-mastercard fa-lg me-2 mastercard" title="MasterCard"></i>
              <i className="fab fa-google-pay fa-lg me-2 google-pay" title="Google Pay"></i>
              <i className="fab fa-apple-pay fa-lg apple-pay" title="Apple Pay"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
