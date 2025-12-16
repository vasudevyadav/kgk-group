'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Listbox } from '@headlessui/react';
import { motion } from 'framer-motion';
import { officeLocations } from '@/lib/officeLocations';
import { useRouter } from 'next/navigation';

const DownArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
  setLoading(true);

  try {
    const payload = {
      full_name: data.name,
      phone: data.mobile,
      email: data.email,
      location: data.location,
      about: data.about || '',
    };

    const response = await fetch('https://reinventmedia.in/kgkgroup-backend/wp-json/custom/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }


    reset();
    router.push('/thank-you');
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Something went wrong. Please try again later.');
  } finally {
    setLoading(false);
  }
};


  const officeOptions = officeLocations.flatMap((region) =>
    region.offices
      .filter((office) => office.city)
      .map((office) => ({
        label: `${office.city}, ${office.country}`,
        value: `${office.city}, ${office.country}`,
      }))
  );

  return (
    <div className="w-full bg-[linear-gradient(0deg,white_50%,#e2e2e2_50%)] pt-12 pb-6">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center pb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-heading mb-2">Not sure who to contact?</p>
        <p className="text-lg text-heading mb-4">
          Complete and send the form and a KGK team member will reply as soon as possible:
        </p>

        <motion.div
          className="relative md:w-72 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <select
            {...register('enquiryType', { required: 'Please select an enquiry type' })}
            className="w-full appearance-none pl-5 pr-10 py-2 rounded-full bg-[#8c7459] text-white text-sm border border-[#8c7459] focus:outline-none"
            defaultValue=""
          >
            <option disabled value="">
              HOW CAN WE HELP YOU?
            </option>
            <option value="info@kgkmail.com">General enquiry</option>
            <option value="media@kgkmail.com">Media/press enquiry</option>
            <option value="info@kgkmail.com">Partnership enquiry</option>
            <option value="hr@kgkmail.com">Career enquiry</option>
            <option value="enquiry.minhk@kgkmail.com">Mining</option>
            <option value="enquiry.gemhk@kgkmail.com">Precious and semi-precious gemstones</option>
            <option value="enquiry.diahk@kgkmail.com">Diamonds</option>
            <option value="enquiry.jewhk@kgkmail.com">Jewellery</option>
          </select>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <DownArrowIcon />
          </div>

          {errors.enquiryType && (
            <p className="text-red-500 text-sm mt-2">{errors.enquiryType.message}</p>
          )}
        </motion.div>

        {successMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-medium mt-6"
          >
            {successMessage}
          </motion.p>
        )}
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="relative max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#2c2c25] text-white p-8 rounded-2xl shadow-lg">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {/* Left Side */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('mobile', {
                    required: 'Mobile is required',
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: 'Enter a valid mobile number',
                    },
                  })}
                  type="tel"
                  placeholder="Mobile"
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('about')}
                  placeholder="About yourself"
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300 resize-none"
                />
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* ✅ Fixed Location Select */}
              <div>
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: 'Please select a location' }}
                  render={({ field }) => (
                    <Listbox value={field.value ?? ''} onChange={field.onChange}>
                      <div className="relative">
                        <Listbox.Button className="w-full bg-[#2c2c25] text-gray-300 border-b border-gray-400 py-2 pr-10 text-left focus:outline-none">
                          {field.value || 'Location'}
                        </Listbox.Button>

                        <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#2c2c25] text-gray-100 shadow-lg">
                          {officeOptions.map((option) => (
                            <Listbox.Option
                              key={option.value}
                              value={option.value}
                              className={({ active }) =>
                                `cursor-pointer select-none py-2 px-4 ${
                                  active ? 'bg-[#3a3a30]' : ''
                                }`
                              }
                            >
                              {option.label}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  )}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-2">{errors.location.message}</p>
                )}
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div className="md:col-span-2 mt-4" variants={fadeUp}>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#8c7459] px-8 py-3 rounded-full font-bold text-white mx-auto block hover:opacity-90 transition"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'SUBMIT'
                )}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
