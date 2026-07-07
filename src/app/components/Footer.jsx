export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>ETRA</h2>

          <p>
            Creating premium automotive digital experiences through
            HMI, CGI, Realtime 3D and Engineering.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <h4>Navigation</h4>

            <a href="/">Home</a>
            <a href="/explorations">Explorations</a>
            <a href="/studio">Studio</a>
            <a href="/expertise">Expertise</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h4>Services</h4>

            <p>HMI</p>
            <p>CGI</p>
            <p>Realtime 3D</p>
            <p>Configurator</p>
            <p>Digital Twin</p>
          </div>

          <div>
            <h4>Contact</h4>

            <p>hello@etraautomotive.com</p>
            <p>India</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ETRA Automotive. All Rights Reserved.</p>
      </div>

    </footer>
  );
}