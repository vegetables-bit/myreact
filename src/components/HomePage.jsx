import React from 'react';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      {/* Company Section */}
      <section id="company" style={{ padding: '100px 20px', background: '#f9f9f9' }}>
        <h2>Our Company</h2>
        <p>We are committed to providing high-quality products.</p>
      </section>

      {/* Products Section */}
      <section id="products" style={{ padding: '100px 20px' }}>
        <h2>Our Products</h2>
        <p>Explore our wide range of products.</p>
      </section>

      {/* Offices Section */}
      <section id="offices" style={{ padding: '100px 20px', background: '#f9f9f9' }}>
        <h2>Our Offices</h2>
        <p>We have offices worldwide to serve you better.</p>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '100px 20px' }}>
        <h2>About Us</h2>
        <p>Learn more about our story and mission.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 20px', background: '#f9f9f9' }}>
        <h2>Contact Us</h2>
        <p>Get in touch with our support team anytime.</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
