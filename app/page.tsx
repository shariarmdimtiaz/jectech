'use client';

import { FormEvent, useState } from 'react';

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Team', '#team'],
  ['Contact', '#contact'],
];

const searchSections = [
  { label: 'Home', href: '#home', terms: 'home managed it technology support business' },
  { label: 'About', href: '#about', terms: 'about mission experience company team expertise' },
  { label: 'Services', href: '#services', terms: 'services helpdesk server office 365 firewall cloud security pricing' },
  { label: 'Projects', href: '#projects', terms: 'projects portfolio cloud infrastructure cybersecurity modernization migration' },
  { label: 'Team', href: '#team', terms: 'team leadership people michael sarah david lisa' },
  { label: 'Contact', href: '#contact', terms: 'contact email phone message consultation support address' },
];

const benefits = ['24/7 Support', '99.9% Uptime', 'Cloud Migration', 'Security First'];

const missionPoints = [
  '24/7 helpdesk and technical support',
  'Server management and monitoring',
  'Office 365 migration and support',
  'Enterprise firewall and security',
];

const companyStats = [
  ['10+', 'Years Experience'],
  ['500+', 'Projects Completed'],
  ['50+', 'Team Members'],
  ['25+', 'Countries Served'],
];

const aboutFeatures = [
  {
    icon: 'ET',
    title: 'Expert Team',
    text: 'Our team of seasoned professionals brings decades of combined experience in cutting-edge technologies.',
  },
  {
    icon: 'PT',
    title: 'Proven Track Record',
    text: "We've successfully delivered 500+ projects across various industries with 99% client satisfaction.",
  },
  {
    icon: 'IF',
    title: 'Innovation First',
    text: 'We stay ahead of technology trends and implement the latest solutions to keep you competitive.',
  },
];

const services = [
  {
    icon: 'HD',
    name: 'MSP HelpDesk',
    price: 'Starting at $99/month',
    description: '24/7 technical support and helpdesk services to keep your team productive and systems running smoothly.',
    features: ['24/7 Phone & Email Support', 'Remote Desktop Assistance', 'Ticket Management System', 'User Account Management'],
  },
  {
    icon: 'SE',
    name: 'MSP Server Elite',
    price: 'Starting at $299/month',
    description: 'Comprehensive server management and monitoring services for optimal performance and reliability.',
    features: ['Server Monitoring & Maintenance', 'Performance Optimization', 'Backup & Recovery', 'Security Patching'],
  },
  {
    icon: '365',
    name: 'MSP Office 365',
    price: 'Starting at $15/user/month',
    description: 'Complete Office 365 management, migration, and ongoing support for enhanced productivity.',
    features: ['Email Migration & Setup', 'User Management', 'Security Configuration', 'Training & Support'],
  },
  {
    icon: 'AN',
    name: 'MSP Office 365 Annual',
    price: 'Save 15% - Annual Plans',
    description: 'Annual Office 365 management package with significant savings and premium support included.',
    features: ['All Monthly Features', 'Priority Support', 'Annual Health Checks', 'Compliance Reporting'],
  },
  {
    icon: 'FW',
    name: 'MSP Firewall Elite',
    price: 'Starting at $199/month',
    description: 'Enterprise-grade firewall management and network security monitoring to protect your business.',
    features: ['Firewall Configuration', 'Threat Monitoring', 'VPN Management', 'Security Reporting'],
  },
];

const projects = [
  {
    index: '01',
    category: 'Cloud Infrastructure',
    title: 'Global Workspace Modernization',
    description: 'A secure Microsoft 365 migration and identity rollout designed for a distributed 320-person organization.',
    result: 'Zero-downtime rollout',
  },
  {
    index: '02',
    category: 'Cybersecurity',
    title: 'Managed Security Transformation',
    description: 'Centralized threat monitoring, firewall management, and automated incident response across 14 locations.',
    result: '24/7 threat visibility',
  },
  {
    index: '03',
    category: 'Server Management',
    title: 'Hybrid Infrastructure Upgrade',
    description: 'Modernized aging servers with resilient cloud backups, proactive monitoring, and a tested recovery plan.',
    result: '99.9% service uptime',
  },
];

const team = [
  {
    name: 'Michael Thompson',
    role: 'CEO & Founder',
    image: '/team-michael.jpg',
    bio: '20+ years in enterprise IT management and MSP operations. Microsoft MVP and certified cloud architect.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Director of Operations',
    image: '/team-sarah.jpg',
    bio: 'Expert in cybersecurity and network infrastructure with CISSP and CISM certifications.',
  },
  {
    name: 'David Rodriguez',
    role: 'Technical Director',
    image: '/team-david.jpg',
    bio: '15+ years specializing in Office 365 migrations, server management, and firewall security solutions.',
  },
  {
    name: 'Lisa Chen',
    role: 'Client Success Manager',
    image: '/team-lisa.jpg',
    bio: 'Dedicated to ensuring exceptional customer experience and long-term partnership success.',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [selectedService, setSelectedService] = useState('General inquiry');
  const [formSent, setFormSent] = useState(false);

  function handleSiteSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setSearchMessage('Enter a section or service to search.');
      return;
    }

    const match = searchSections.find(({ label, terms }) =>
      `${label} ${terms}`.toLowerCase().includes(query),
    );

    if (!match) {
      setSearchMessage('No match found. Try Services, Projects, Team, or Contact.');
      return;
    }

    document.querySelector(match.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', match.href);
    setSearchMessage(`Showing ${match.label}.`);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="JEC Technologies home">
            <span className="brand-mark">J</span>
            <span>JEC Technologies</span>
          </a>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>

          <div className="header-actions" aria-label="Site tools">
            <form className="header-search desktop-only" role="search" onSubmit={handleSiteSearch}>
              <label className="sr-only" htmlFor="site-search">Search this website</label>
              <input
                id="site-search"
                type="search"
                placeholder="Search site"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button className="search-submit" type="submit" aria-label="Search" />
              <p className="sr-only" id="site-search-status" role="status" aria-live="polite">
                {searchMessage}
              </p>
            </form>

            <div className="login-action">
              <button
                className={loginOpen ? 'login-button is-active' : 'login-button'}
                type="button"
                aria-label="Client login"
                aria-expanded={loginOpen}
                aria-controls="client-login-menu"
                title="Client login"
                onClick={() => setLoginOpen((open) => !open)}
              >
                <span className="login-glyph" aria-hidden="true" />
              </button>

              {loginOpen && (
                <div className="login-popover" id="client-login-menu" role="dialog" aria-label="Client login">
                  <span className="login-kicker">Client access</span>
                  <strong>Portal login</strong>
                  <p>Your secure client portal is being prepared. Contact support to request access.</p>
                  <a href="mailto:support@jectechnologies.com?subject=Client%20portal%20access">
                    Request access <span aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </div>

            <button
              className="menu-button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? '×' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Reliable. Secure. Always on.</p>
            <h1>Managed IT Services <span>Excellence</span></h1>
            <p className="hero-description">
              JEC Technologies provides comprehensive Managed Service Provider (MSP)
              solutions to keep your business running smoothly. From helpdesk support
              to enterprise-grade security.
            </p>
            <a className="hero-link" href="#services">Explore our services <span>→</span></a>
          </div>

          <div className="hero-panels">
            <div className="glass-card solution-card">
              <p className="card-kicker">Enterprise-Grade MSP Solutions</p>
              <div className="benefit-grid">
                {benefits.map((item) => <span key={item}><b>✓</b>{item}</span>)}
              </div>
            </div>

            <div className="mini-card-grid">
              <div className="glass-card mini-card">
                <span className="mini-icon">⌁</span>
                <strong>HelpDesk</strong>
                <small>Instant Support</small>
              </div>
              <div className="glass-card mini-card">
                <span className="mini-icon">▤</span>
                <strong>Server Elite</strong>
                <small>Full Management</small>
              </div>
            </div>

            <div className="stat-card">
              <strong>500+</strong>
              <span>Businesses Protected</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="about">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Who we are</p>
            <h2>About JEC Technologies</h2>
            <p>
              We are a premier Managed Service Provider (MSP) dedicated to delivering reliable,
              scalable IT solutions that power your digital future and drive business success.
            </p>
          </div>

          <div className="about-layout">
            <div className="mission-card">
              <span className="section-icon">◎</span>
              <h3>Our Mission</h3>
              <p>
                At JEC Technologies, we believe that reliable IT infrastructure is the foundation
                of business success. We partner with organizations of all sizes to provide
                comprehensive managed services that ensure optimal performance, security, and growth.
              </p>
              <ul className="check-list">
                {missionPoints.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>

            <div className="stats-grid">
              {companyStats.map(([value, label]) => (
                <div className="number-card" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="feature-grid">
            {aboutFeatures.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">What we do</p>
            <h2>Our MSP Services</h2>
            <p>
              Comprehensive Managed Service Provider solutions designed to optimize your IT
              infrastructure and support your business growth.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-description">{service.description}</p>
                <ul className="check-list compact">
                  {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <div className="service-actions">
                  <a
                    className="button button-primary"
                    href="#contact"
                    onClick={() => setSelectedService(service.name)}
                  >
                    Quote Me
                  </a>
                  <a className="button button-outline" href="#contact">Learn More</a>
                </div>
              </article>
            ))}
          </div>

          <div className="consultation">
            <div>
              <h3>Ready to optimize your IT infrastructure?</h3>
              <p>Let&apos;s discuss how our MSP services can streamline your operations, reduce costs, and improve productivity.</p>
            </div>
            <a className="button button-primary" href="#contact">Get Free Consultation</a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading projects-heading">
            <p className="section-kicker">Work in action</p>
            <h2>Selected Projects</h2>
            <p>
              A snapshot of the infrastructure, security, and cloud transformation work
              we deliver for growing organizations.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-index">{project.index}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-result"><span>✓</span>{project.result}</div>
              </article>
            ))}
          </div>

          <div className="projects-cta">
            <p>Have a technology project in mind?</p>
            <a className="button button-primary" href="#contact">Plan Your Project</a>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="team">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">People behind the service</p>
            <h2>Meet Our Team</h2>
            <p>
              Our certified team of MSP professionals brings together decades of experience in
              enterprise IT management, cybersecurity, and cloud solutions.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-image-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Start a conversation</p>
            <h2>Get In Touch</h2>
          </div>

          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span className="section-icon">↗</span>
                <div>
                  <h3>Send us a message</h3>
                  <p>Tell us what you need and our team will respond shortly.</p>
                </div>
              </div>

              {selectedService !== 'General inquiry' && (
                <p className="selected-service">Interested in: <strong>{selectedService}</strong></p>
              )}
              <input type="hidden" name="service" value={selectedService} />

              <div className="field-grid">
                <label>
                  <span>Name *</span>
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  <span>Email *</span>
                  <input name="email" type="email" required autoComplete="email" />
                </label>
              </div>
              <label>
                <span>Company</span>
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                <span>Message *</span>
                <textarea name="message" rows={5} required />
              </label>
              <button className="button button-primary submit-button" type="submit">Send Message</button>
              {formSent && <p className="form-success" role="status">Thanks — your message is ready for our team.</p>}
            </form>

            <div className="contact-info">
              <div>
                <h3>Contact Information</h3>
                <p className="contact-intro">We&apos;re here to help! Reach out to us through any of the following channels.</p>
              </div>

              <div className="info-list">
                <div className="info-item">
                  <span>⌖</span>
                  <div><strong>Address</strong><p>123 Tech Street<br />San Francisco, CA 94105</p></div>
                </div>
                <div className="info-item">
                  <span>☎</span>
                  <div><strong>Phone</strong><p>+1 (555) 123-4567<br />+1 (555) 987-6543</p></div>
                </div>
                <div className="info-item">
                  <span>✉</span>
                  <div><strong>Email</strong><p>info@jectechnologies.com<br />support@jectechnologies.com</p></div>
                </div>
                <div className="info-item">
                  <span>◷</span>
                  <div><strong>Business Hours</strong><p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p></div>
                </div>
              </div>

              <div className="urgent-card">
                <h3>Need Immediate Assistance?</h3>
                <p>For urgent matters, give us a call and speak directly with our team.</p>
                <a className="button button-light" href="tel:+15551234567">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand brand-light" href="#home">
                <span className="brand-mark">J</span>
                <span>JEC Technologies</span>
              </a>
              <p className="footer-tagline">Powering Your Digital Future</p>
              <p>Your trusted Managed Service Provider delivering reliable IT solutions that power your digital future and business growth.</p>
              <div className="social-links" aria-label="Social media">
                <a href="#home" aria-label="LinkedIn">in</a>
                <a href="#home" aria-label="Facebook">f</a>
                <a href="#home" aria-label="X">𝕏</a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#team">Our Team</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h3>MSP Services</h3>
              {services.map((service) => <a href="#services" key={service.name}>{service.name}</a>)}
            </div>

            <div className="footer-column footer-contact">
              <h3>Contact Info</h3>
              <p>123 Tech Street, San Francisco, CA 94105</p>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
              <a href="mailto:info@jectechnologies.com">info@jectechnologies.com</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 JEC Technologies. All rights reserved.</p>
            <div>
              <a href="#contact">Privacy Policy</a>
              <a href="#contact">Terms of Service</a>
              <a href="#contact">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
