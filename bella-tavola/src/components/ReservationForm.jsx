import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from './Button';

export default function ReservationForm() {
  const today = new Date().toISOString().split('T')[0];

  const initialForm = {
    fullName: '',
    email: '',
    phone: '',
    date: today,
    time: '19:30',
    guests: '2',
    seatingPreference: 'Main Dining Hall',
    specialRequest: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (phoneDigits.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (!formData.date) {
      errs.date = 'Please select a reservation date.';
    } else if (formData.date < today) {
      errs.date = 'Reservation date cannot be in the past.';
    }

    if (!formData.time) {
      errs.time = 'Please select a preferred dining time.';
    }

    const guestsNum = parseInt(formData.guests, 10);
    if (!guestsNum || guestsNum < 1 || guestsNum > 20) {
      errs.guests = 'Please select between 1 and 20 guests.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setConfirmationData({
        ...formData,
        bookingId: 'BT-' + Math.floor(100000 + Math.random() * 900000),
        bookingTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1000);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    setIsSuccess(false);
    setConfirmationData(null);
  };

  if (isSuccess && confirmationData) {
    return (
      <div className="bg-forest-900 text-cream-100 rounded-xl p-8 sm:p-10 border border-gold-500/40 shadow-2xl animate-fade-in text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-gold-500/40">
          <CheckCircle2 className="w-10 h-10 text-gold-400" />
        </div>
        
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
          Reservation Request Received
        </span>
        
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream-100 mt-2 mb-3">
          Grazie, {confirmationData.fullName}!
        </h3>
        
        <p className="text-cream-200/80 text-sm leading-relaxed mb-6 font-light">
          We have received your reservation request and will be in touch shortly. A confirmation SMS and email have been queued.
        </p>

        <div className="bg-forest-800/80 rounded-lg p-5 border border-forest-700 text-left mb-6 space-y-2.5 text-xs sm:text-sm">
          <div className="flex justify-between border-b border-forest-700/60 pb-2">
            <span className="text-muted">Booking Reference:</span>
            <span className="font-mono text-gold-400 font-bold">{confirmationData.bookingId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Date & Time:</span>
            <span className="text-cream-100 font-medium">{confirmationData.date} at {confirmationData.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Guests:</span>
            <span className="text-cream-100 font-medium">{confirmationData.guests} Guests ({confirmationData.seatingPreference})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Contact:</span>
            <span className="text-cream-100 font-medium">{confirmationData.phone}</span>
          </div>
          {confirmationData.specialRequest && (
            <div className="pt-2 border-t border-forest-700/60 text-xs text-cream-200/70 italic">
              Special Note: "{confirmationData.specialRequest}"
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="gold" size="md" onClick={handleReset} icon={RefreshCw}>
            Make Another Reservation
          </Button>
          <Button variant="outline" size="md" href="#menu">
            Explore Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl p-6 sm:p-10 border border-beige-300 shadow-card text-forest-900"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="sm:col-span-2">
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-gold-600" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-3 rounded-md bg-cream-50 border ${
              errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-beige-300'
            } text-forest-900 text-sm focus:bg-white transition-all`}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-gold-600" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul@example.com"
            className={`w-full px-4 py-3 rounded-md bg-cream-50 border ${
              errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-beige-300'
            } text-forest-900 text-sm focus:bg-white transition-all`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold-600" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 rounded-md bg-cream-50 border ${
              errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-beige-300'
            } text-forest-900 text-sm focus:bg-white transition-all`}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gold-600" />
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md bg-cream-50 border ${
              errors.date ? 'border-red-500 ring-1 ring-red-500' : 'border-beige-300'
            } text-forest-900 text-sm focus:bg-white transition-all`}
          />
          {errors.date && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.date}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            Time Slot <span className="text-red-500">*</span>
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md bg-cream-50 border ${
              errors.time ? 'border-red-500 ring-1 ring-red-500' : 'border-beige-300'
            } text-forest-900 text-sm focus:bg-white transition-all`}
          >
            <optgroup label="Lunch Service">
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="13:30">01:30 PM</option>
              <option value="14:00">02:00 PM</option>
            </optgroup>
            <optgroup label="Dinner Service">
              <option value="19:00">07:00 PM</option>
              <option value="19:30">07:30 PM</option>
              <option value="20:00">08:00 PM</option>
              <option value="20:30">08:30 PM</option>
              <option value="21:00">09:00 PM</option>
              <option value="21:30">09:30 PM</option>
              <option value="22:00">10:00 PM</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gold-600" />
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md bg-cream-50 border ${
              errors.guests ? 'border-red-500 ring-1 ring-red-500' : 'border-beige-300'
            } text-forest-900 text-sm focus:bg-white transition-all`}
          >
            <option value="1">1 Person (Solo Dining)</option>
            <option value="2">2 Guests (Table for Two)</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests (Family / Group)</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests (Party)</option>
            <option value="8">8+ Guests (Celebration)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
            Seating Preference
          </label>
          <select
            name="seatingPreference"
            value={formData.seatingPreference}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-cream-50 border border-beige-300 text-forest-900 text-sm focus:bg-white transition-all"
          >
            <option value="Main Dining Hall">Main Dining Hall</option>
            <option value="Alfresco Garden Terrace">Alfresco Garden Terrace</option>
            <option value="Private Wine Cellar Booth">Private Wine Cellar Booth</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
            Special Requests & Dietary Notes
          </label>
          <textarea
            name="specialRequest"
            rows="3"
            value={formData.specialRequest}
            onChange={handleChange}
            placeholder="Dietary allergies, window booth preference, birthday celebration cake..."
            className="w-full px-4 py-3 rounded-md bg-cream-50 border border-beige-300 text-forest-900 text-sm focus:bg-white transition-all resize-none"
          ></textarea>
        </div>
      </div>

      <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          * Complimentary reservation hold. We look forward to hosting you!
        </p>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          loading={isLoading}
          className="w-full sm:w-auto min-w-[220px]"
        >
          Reserve My Table
        </Button>
      </div>
    </form>
  );
}
