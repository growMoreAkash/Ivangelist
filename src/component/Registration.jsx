import React, { useEffect, useState } from 'react'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbySLp8qtnm2I14Ocdbuo097-t3f39uzmNE0RtecaAbZs2GiF5JhT8-crvshu5TWrn0B/exec';

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    gstDetails: '',
    officeAddress: '',
    city: '',
    state: '',
    pin: ['', '', '', '', '', ''],
    officeEmail: '',
    officeContact: '',
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    designation: '',
    mobileNumber: '',
    email: '',
    dob: ['', '', '', '', '', '', '', ''],
    spouse: '',
    doa: ['', '', '', '', '', '', '', ''],
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  /* ---------- generic helpers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleArrayChange = (e, idx, field) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const arr = [...formData[field]];
      arr[idx] = value;
      setFormData((p) => ({ ...p, [field]: arr }));
      if (value && idx < arr.length - 1) {
        e.target.nextElementSibling?.focus();
      }
    }
  };

  /* 1️⃣  NEW helper — handles Backspace */
  const handleArrayKeyDown = (e, idx, field) => {
    if (e.key !== 'Backspace') return;

    // if current box still has a digit, let the default “erase” happen
    if (formData[field][idx]) return;

    // otherwise jump left and clear the previous box
    if (idx > 0) {
      const arr = [...formData[field]];
      arr[idx - 1] = '';
      setFormData((p) => ({ ...p, [field]: arr }));

      // give React a tick, then focus the previous input
      requestAnimationFrame(() => {
        e.target.previousElementSibling?.focus();
      });

      // stop the browser from navigating back a page
      e.preventDefault();
    }
  };


  /** 2️⃣  Serialize + POST to Apps Script --------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      pin: formData.pin.join(''),
      dob: formData.dob.join(''),
      doa: formData.doa.join(''),
    };

    // Turn the object into x-www-form-urlencoded
    const body = Object.entries(payload)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');

    try {
      setSending(true);
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      const text = await res.text();
      console.log(text);        // <-- optional: see server reply
      setSubmitted(true);
    } catch (err) {
      alert('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  /* ---------- small render helpers ---------- */
  const renderInput = (name, placeholder, type = 'text') => (
    <div className="w-full">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
    </div>
  );

  const renderArrayInput = (field, length) => (
    <div className="flex space-x-2">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength="1"
          value={formData[field][idx]}
          onChange={(e) => handleArrayChange(e, idx, field)}
          onKeyDown={(e) => handleArrayKeyDown(e, idx, field)}
          className="xe:w-8 xe:h-8 w-6 h-6 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      ))}
    </div>
  );


  /* ---------- UI states ---------- */
  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank you!</h2>
        <p className="text-gray-600 text-lg">
          Your registration has been saved successfully.
        </p>
      </div>
    );
  }

  return (
    <div className=" p-8 md:p-12 m-auto max-w-4xl w-full font-montserratLight" id="registrationForm">
      {/* Header */}
      <div className="relative mb-8">
        <h1 className="xa:text-8xl xb:text-5xl text-3xl font-montserrat lg:mb-5'">Registration Form</h1>
      </div>

      <p className="font-semibold text-gray-600 mb-6">
        (To be filled in BLOCK letters)
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Company information */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderInput('companyName', 'Company Name')}
            {renderInput('gstDetails', 'GST Details')}
          </div>
          {renderInput('officeAddress', 'Office Address')}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {renderInput('city', 'City')}
            {renderInput('state', 'State')}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Pin:</span>
              {renderArrayInput('pin', 6)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderInput('officeEmail', 'Office Email', 'email')}
            {renderInput('officeContact', 'Office Contact No.', 'tel')}
          </div>
        </div>

        {/* Member information */}
        <div className="border-t border-gray-200 pt-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-yellow-400"></div>
            </div>
            <div className="relative flex justify-start">
              <span className="bg-yellow-400 p-3 text-lg font-semibold text-gray-900">
                Member Info
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {renderInput('title', 'Title')}
              {renderInput('firstName', 'First Name')}
              {renderInput('middleName', 'Middle Name')}
              {renderInput('lastName', 'Last Name')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput('designation', 'Designation')}
              {renderInput('email', 'Email', 'email')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {renderInput('mobileNumber', 'Mobile No.', 'tel')}
              <div className="flex flex-col items-start space-x-2">
                <span className="text-gray-600">DOB:</span>
                {renderArrayInput('dob', 8)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {renderInput('spouse', 'Spouse')}
              <div className="flex flex-col items-start space-x-2">
                <span className="text-gray-600">DOA:</span>
                {renderArrayInput('doa', 8)}
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={sending}
            className={`bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg ${sending ? 'opacity-60 cursor-not-allowed' : 'hover:bg-yellow-600'
              }`}
          >
            {sending ? 'Submitting…' : 'Submit Registration'}
          </button>
        </div>
      </form>
    </div>
  );
}
