import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import toast from 'react-hot-toast';
import { contactAPI } from '../../services/api';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await contactAPI.send(formData);
      toast.success('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'hello@portfolio.com' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to work together? Drop me a message!"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left Info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isDark
                        ? 'bg-primary-500/10 text-primary-400'
                        : 'bg-primary-50 text-primary-600'
                    }`}
                  >
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isDark ? 'text-dark-300' : 'text-dark-500'}`}>
                      {info.label}
                    </h4>
                    <p className={`text-base font-semibold ${isDark ? 'text-white' : 'text-dark-800'}`}>
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <h4 className={`text-sm font-bold mb-3 ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {[
                    { icon: FaGithub, href: '#', label: 'GitHub' },
                    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                    { icon: FaTwitter, href: '#', label: 'Twitter' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -3 }}
                      className={`p-3 rounded-xl transition-colors ${
                        isDark
                          ? 'bg-dark-800 text-dark-300 hover:bg-primary-500 hover:text-white'
                          : 'bg-dark-100 text-dark-500 hover:bg-primary-500 hover:text-white'
                      }`}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8" id="contact-form">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`text-sm font-semibold mb-1.5 block ${isDark ? 'text-dark-300' : 'text-dark-600'}`}
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`input ${errors.name ? 'border-error' : ''}`}
                  />
                  {errors.name && (
                    <span className="text-error text-xs mt-1 block">{errors.name}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className={`text-sm font-semibold mb-1.5 block ${isDark ? 'text-dark-300' : 'text-dark-600'}`}
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`input ${errors.email ? 'border-error' : ''}`}
                  />
                  {errors.email && (
                    <span className="text-error text-xs mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact-subject"
                  className={`text-sm font-semibold mb-1.5 block ${isDark ? 'text-dark-300' : 'text-dark-600'}`}
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="input"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className={`text-sm font-semibold mb-1.5 block ${isDark ? 'text-dark-300' : 'text-dark-600'}`}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`input resize-none ${errors.message ? 'border-error' : ''}`}
                />
                {errors.message && (
                  <span className="text-error text-xs mt-1 block">{errors.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`btn-primary w-full justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
