import { Mail, Phone, Globe, Github, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "connect@ranjithneela.com",
      href: "mailto:connect@ranjithneela.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(443) 574-4254",
      href: "tel:+14435744254"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.ranjithneela.com",
      href: "https://www.ranjithneela.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rkneela0912",
      href: "https://github.com/rkneela0912"
    }
  ];

  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageCircle size={14} /> Contact
          </motion.span>
          <motion.h2
            id="contact-title"
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to discuss your next project or opportunity
          </motion.p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="contact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              aria-label={`${item.label}: ${item.value}`}
            >
              <div className="contact-icon">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <div className="contact-info">
                <div className="contact-label">{item.label}</div>
                <div className="contact-value">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
