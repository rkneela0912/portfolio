import { Mail, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "connect@ranjithneela.com", href: "mailto:connect@ranjithneela.com" },
    { icon: Phone, label: "Phone", value: "(443) 574-4254", href: "tel:+14435744254" },
    { icon: Globe, label: "Website", value: "www.ranjithneela.com", href: "https://www.ranjithneela.com" },
    { icon: Globe, label: "GitHub", value: "Open Source Projects Contribution", href: "https://github.com/rkneela0912" }
  ];

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="contact-item"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={`${item.label}: ${item.value}`}
            >
              <item.icon size={24} aria-hidden="true" />
              <span>{item.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
