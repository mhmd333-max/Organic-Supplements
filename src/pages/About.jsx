import "../css/About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-overlay">
          <h1>About OrganicFuel</h1>
          <p>
            Premium organic supplements designed to support your fitness,
            performance, recovery, and healthy lifestyle.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            OrganicFuel was created with one mission: to provide athletes,
            fitness enthusiasts, and health-conscious individuals with clean,
            high-quality supplements made from carefully selected ingredients.
          </p>

          <p>
            We believe that fitness starts with proper nutrition. That's why our
            products are developed to help you achieve your goals while avoiding
            unnecessary artificial additives.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <h3>🌱 Organic Ingredients</h3>
            <p>
              Carefully sourced natural ingredients for superior quality and
              effectiveness.
            </p>
          </div>

          <div className="feature-card">
            <h3>💪 Performance Focused</h3>
            <p>
              Products designed to support muscle growth, endurance, and
              recovery.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔬 Quality Tested</h3>
            <p>
              Every product undergoes strict quality control and testing.
            </p>
          </div>

          <div className="feature-card">
            <h3>❤️ Customer First</h3>
            <p>
              Your health and satisfaction remain our highest priority.
            </p>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make premium organic supplements accessible to
            everyone seeking a healthier and stronger lifestyle. We strive to
            combine science, nutrition, and natural ingredients to deliver
            products that truly make a difference.
          </p>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h2>50+</h2>
            <p>Organic Products</p>
          </div>

          <div className="stat-card">
            <h2>99%</h2>
            <p>Customer Satisfaction</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;