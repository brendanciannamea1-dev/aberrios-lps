import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

const EMAILJS_SERVICE_ID = "service_hsnc7ws";
const EMAILJS_TEMPLATE_ID = "template_ahox6cd";
const EMAILJS_PUBLIC_KEY = "oeE_AL71N8Q6e6zT0";

export const ContactForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const getTrackingParams = () => {
    if (typeof window === 'undefined') return {};

    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    const currentUrl = window.location.href;

    return {
      source: urlParams.get('utm_source') || 'direct',
      medium: urlParams.get('utm_medium') || 'none',
      campaign: urlParams.get('utm_campaign') || '',
      term: urlParams.get('utm_term') || '',
      content: urlParams.get('utm_content') || '',

      gclid: urlParams.get('gclid') || '',
      fbclid: urlParams.get('fbclid') || '',
      msclkid: urlParams.get('msclkid') || '',

      referrer: referrer || 'direct',
      landing_page: currentUrl,
      current_page: currentUrl,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString(),

      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,

      session_start: sessionStorage.getItem('session_start') || new Date().toISOString(),
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!sessionStorage.getItem('session_start')) {
      sessionStorage.setItem('session_start', new Date().toISOString());
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const trackingParams = getTrackingParams();

      const templateParams = {
        to_email: 'jakebg32@gmail.com',
        reply_to: formData.email,
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: trackingParams.source,
        landing_page: trackingParams.landing_page,
        timestamp: trackingParams.timestamp,
        form_location: 'Puerto Rico - English',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        window.location.href = '/lp-thank-you';
      }, 1500);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md lg:max-w-none bg-black/90 border-[#b89158] border-2 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-white text-center [font-family:'Poppins',Helvetica] font-bold text-lg md:text-xl">
          Request Case Evaluation
        </CardTitle>
        <p className="text-[#cbd5e0] text-center text-xs md:text-sm [font-family:'Roboto',Helvetica] font-light">
          Get bilingual immigration support
        </p>
      </CardHeader>
      <CardContent>
        <form name="puerto-rico-immigration-form-english" onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#b89158] focus:ring-1 focus:ring-[#b89158] [font-family:'Roboto',Helvetica] text-sm md:text-base"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#b89158] focus:ring-1 focus:ring-[#b89158] [font-family:'Roboto',Helvetica] text-sm md:text-base"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#b89158] focus:ring-1 focus:ring-[#b89158] [font-family:'Roboto',Helvetica] text-sm md:text-base"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Brief description of your case"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#b89158] focus:ring-1 focus:ring-[#b89158] resize-none [font-family:'Roboto',Helvetica] text-sm md:text-base"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#b89158] hover:bg-[#a67d47] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors duration-200 [font-family:'Roboto',Helvetica] text-sm md:text-base"
          >
            {isSubmitting ? 'Submitting...' : 'Request Evaluation'}
          </Button>

          {submitStatus === 'success' && (
            <div className="text-green-400 text-center text-sm [font-family:'Roboto',Helvetica]">
              Thank you! We'll contact you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-400 text-center text-sm [font-family:'Roboto',Helvetica]">
              Something went wrong. Please try again or call us directly.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
