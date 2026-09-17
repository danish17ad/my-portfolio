import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('Project Coordinator Opportunity');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail) return;

    const subject = encodeURIComponent(`[${inquiryType}] Opportunity Discussion from ${senderName}`);
    const body = encodeURIComponent(
      `Hi Danish,\n\n${senderMessage || 'I would like to discuss an opportunity with you.'}\n\nBest regards,\n${senderName}\n${senderEmail}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSenderName('');
      setSenderEmail('');
      setSenderMessage('');
    }, 4000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-b border-[#27272a]/60 relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b border-[#27272a] pb-4 gap-2">
        <div>
          <h2 id="contact-heading" className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#a1a1aa]">
            06 / CONTACT
          </h2>
          <p className="text-xs text-[#71717a] mt-1 font-mono">
            Direct Inquiries & Professional Coordination
          </p>
        </div>
        <span className="font-mono text-[11px] text-[#71717a] uppercase bg-[#121214] border border-[#27272a] px-2.5 py-1 rounded-full self-start sm:self-auto">
          Direct Channels
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Headline and Direct Channels */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3
              id="contact-main-headline"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa] leading-[1.15] mb-4 sm:mb-6"
            >
              Let’s build structured, dependable workflows together.
            </h3>
            <p
              id="contact-subtext"
              className="text-sm sm:text-base md:text-lg text-[#a1a1aa] leading-relaxed mb-6 sm:mb-10"
            >
              Open to entry-level opportunities in Project Coordination, PMO, and Associate Project Management. Let's connect.
            </p>

            {/* Action Links & Micro-interactions */}
            <div className="space-y-3 sm:space-y-4">
              {/* Email item with Copy micro-interaction */}
              <div
                id="contact-email-card"
                className="p-4 bg-[#121214] border border-[#27272a] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#09090b] border border-[#27272a] rounded-xl shrink-0">
                    <Mail className="w-4 h-4 text-[#fafafa]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] block">
                      Direct Email
                    </span>
                    <a
                      id="contact-email-mailto-link"
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm md:text-base font-mono text-[#fafafa] hover:underline break-all sm:break-normal"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <button
                    id="contact-copy-email-btn"
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] bg-[#09090b] hover:bg-[#18181b] border border-[#27272a] hover:border-[#fafafa]/50 rounded-full cursor-pointer transition-colors min-h-[38px]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span className="text-white">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    id="contact-open-email-btn"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 text-[#a1a1aa] hover:text-[#fafafa] bg-[#09090b] hover:bg-[#18181b] border border-[#27272a] rounded-full min-h-[38px] min-w-[38px] flex items-center justify-center"
                    title="Open mail client"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* LinkedIn item */}
              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#121214] border border-[#27272a] hover:border-[#3f3f46] rounded-2xl flex items-center justify-between group transition-colors min-h-[64px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#09090b] border border-[#27272a] rounded-xl font-mono text-xs text-[#fafafa] font-bold flex items-center justify-center shrink-0">
                    in
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] block">
                      Professional Network
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#fafafa] group-hover:text-white">
                      {PERSONAL_INFO.linkedinDisplay}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-[#fafafa] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>

              {/* Location item */}
              <div
                id="contact-location-info"
                className="p-4 bg-[#121214] border border-[#27272a] rounded-2xl flex items-center gap-3 min-h-[64px]"
              >
                <div className="p-2.5 bg-[#09090b] border border-[#27272a] rounded-xl shrink-0">
                  <MapPin className="w-4 h-4 text-[#a1a1aa]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] block">
                    Location & Mobility
                  </span>
                  <span className="text-xs sm:text-sm text-[#fafafa]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 font-mono text-xs text-[#71717a]">
            RESPONSE WINDOW: PROMPT REVERT WITHIN 12 HOURS
          </div>
        </div>

        {/* Right Column: Clean Quick Dispatch Form */}
        <div className="lg:col-span-6">
          <form
            id="contact-inquiry-form"
            onSubmit={handleInquirySubmit}
            className="p-5 sm:p-6 md:p-8 bg-[#121214] border border-[#27272a] rounded-2xl space-y-5 sm:space-y-6"
          >
            <div className="border-b border-[#27272a] pb-4">
              <span className="font-mono text-xs text-[#71717a] block mb-1">
                RECRUITER & HIRING DISPATCH
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#fafafa] tracking-tight">
                Send Direct Opportunity Brief
              </h4>
            </div>

            {/* Opportunity Type Select */}
            <div>
              <label htmlFor="inquiry-type-select" className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                Target Role Domain
              </label>
              <select
                id="inquiry-type-select"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-[#09090b] border border-[#27272a] focus:border-[#fafafa] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-mono text-[#fafafa] outline-none transition-colors min-h-[44px]"
              >
                <option value="Project Coordinator Opportunity">Project Coordinator</option>
                <option value="PMO Role">PMO (Project Management Office)</option>
                <option value="Associate Project Manager Role">Associate Project Manager</option>
                <option value="Operations Executive Opportunity">Operations Executive / Support</option>
                <option value="General Professional Inquiry">General Professional Inquiry</option>
              </select>
            </div>

            {/* Name & Email inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sender-name-input" className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                  Your Name
                </label>
                <input
                  id="sender-name-input"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#27272a] focus:border-[#fafafa] rounded-xl px-3.5 py-3 text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none transition-colors min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="sender-email-input" className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                  Your Email
                </label>
                <input
                  id="sender-email-input"
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#27272a] focus:border-[#fafafa] rounded-xl px-3.5 py-3 text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none transition-colors min-h-[44px]"
                />
              </div>
            </div>

            {/* Message input */}
            <div>
              <label htmlFor="sender-message-input" className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                Opportunity Details / Notes
              </label>
              <textarea
                id="sender-message-input"
                rows={4}
                placeholder="Share role scope, team structure, or interview schedule..."
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                className="w-full bg-[#09090b] border border-[#27272a] focus:border-[#fafafa] rounded-xl px-3.5 py-3 text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              id="contact-form-submit-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#fafafa] hover:bg-white text-[#09090b] font-semibold text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer shadow-sm min-h-[48px]"
            >
              {formSubmitted ? (
                <>
                  <Check className="w-4 h-4 text-[#09090b]" />
                  <span>Dispatching to Mail Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#09090b]" />
                  <span className="truncate">Transmit Inquiry to {PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
