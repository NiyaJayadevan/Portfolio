import React, { useState } from 'react';
import { X, Mail, Phone, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-slide">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-[32px] p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono mb-2 border border-orange-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Connect with Niya Jayadevan</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Open for software engineering internships, research projects, and technical hackathons.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">Email Address</span>
                <span className="text-xs text-white font-medium truncate block">{personalInfo.email}</span>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 transition-colors"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">Phone Number</span>
                <span className="text-xs text-white font-medium block">{personalInfo.phone}</span>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 transition-colors"
              title="Copy phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Direct Message Form */}
        {messageSent ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
            <Check className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-white">Message Delivered!</h4>
            <p className="text-xs text-neutral-300">
              Thank you for reaching out to Niya Jayadevan. I will respond to your email promptly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-400 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Manager / Collaborator"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="text-xs text-neutral-400 block mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-neutral-400 block mb-1">Message</label>
              <textarea
                required
                rows={3}
                placeholder="Hi Niya, we would love to discuss an opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-orange-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-orange-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to Niya</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
