'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation"; 
import { motion } from 'framer-motion';

const ease = [0.4, 0, 0.2, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

function truncateText(text, maxLength = 100) {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

export default function JoinTeam({ data = [] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    job_title: '',
    about_yourself: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({}); 
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess('');
    setLoading(true);

    const { name, email, mobile, job_title, about_yourself } = formData;
    let newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!mobile) newErrors.mobile = 'Mobile is required';
    if (!job_title) newErrors.job_title = 'Please select a job';
    if (!about_yourself) newErrors.about_yourself = 'This field is required';
    if (!selectedFile) newErrors.file = 'Resume is required';

    // Agar koi error hai
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false); // ✅ loader band karo
      return;
    }

    const submission = new FormData();
    submission.append('name', name);
    submission.append('email', email);
    submission.append('mobile', mobile);
    submission.append('job_title', job_title);
    submission.append('about_yourself', about_yourself);
    submission.append('file', selectedFile);

    try {
      const res = await fetch('https://reinventmedia.in/kgkgroup-backend/wp-json/custom/v1/careers/apply', {
        method: 'POST',
        body: submission,
      });

      if (!res.ok) throw new Error('Failed to apply');
      router.push('/join-thank-you');
      /* setSuccess('Application submitted successfully!');
      setFormData({ name: '', email: '', mobile: '', job_title: '', about_yourself: '' });
      setSelectedFile(null); */
    } catch (err) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="container">
        <div className="px-0 lg:px-[70px] max-w-6xl mx-auto">
          <motion.h2 className="text-center text-4xl font-normal text-heading mb-4"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
            Join Our Team
          </motion.h2>

          <motion.p className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }} viewport={{ once: true }}>
            We are always on the lookout for talented individuals to join our growing team.
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-7">
            {/* Left Column – Job Cards */}
            <div className="w-full lg:w-7/12">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-7"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
              >
                {data.map((job, i) => {
                  const isLastSingleItem =
                    data.length % 2 !== 0 && i === data.length - 1; // Check if it's the last and odd one

                  return (
                    <motion.div
                      key={job.slug}
                      className={`border border-dark-gray rounded-xl px-4 py-7 hover:shadow-md ${
                        isLastSingleItem ? 'lg:col-span-2' : ''
                      }`}
                      variants={fadeInUp}
                      custom={i}
                    >
                      <p className="text-xs font-medium text-dark-gray mb-1">
                        {job.job_type}
                      </p>
                      <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                      <p className="text-sm text-dark-gray mb-4">
                        {truncateText(job.short_description, 100)}
                      </p>
                      <button
                        className="cursor-pointer px-4 py-1.5 text-xs font-medium bg-primary uppercase text-white rounded-full"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, job_title: job.title }));

                          // Only scroll on mobile
                          if (window.innerWidth < 1024) {
                            document
                              .getElementById("apply-form")
                              ?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }

                          // Focus the first input field after a short delay
                          setTimeout(() => {
                            document.querySelector("#apply-form input[name='name']")?.focus();
                          }, 300);
                        }}
                      >
                        Apply Now
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>

            {/* Right Column – Application Form */}
            <motion.form 
              id="apply-form"
              onSubmit={handleSubmit}
              className="w-full lg:w-5/12 bg-dark-primary text-white rounded-xl px-12 py-4 space-y-3 sm:pointer-events-auto pointer-events-non"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }}
            >
              <motion.h3 className="text-center text-lg mb-4"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
                Apply Now
              </motion.h3>

              {['name', 'email', 'mobile'].map((field, i) => (
                <motion.div key={field}>
                  <motion.input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field[0].toUpperCase() + field.slice(1)}
                    className="w-full bg-transparent border-b border-[#545750] py-2 placeholder:text-white/60 focus:outline-none"
                    custom={i + 1} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  />
                  {errors[field] && <p className="text-sm text-red-400">{errors[field]}</p>}
                </motion.div>
              ))}

              <div>
                <motion.select
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#545750] py-2 text-white focus:outline-none"
                  initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }} variants={fadeInUp}
                >
                  <option className="text-black" value="">Select Job</option>
                  {data.map(job => (
                    <option className="text-black" key={job.slug} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </motion.select>
                {errors.job_title && <p className="text-sm text-red-400">{errors.job_title}</p>}
              </div>

              {/* About Yourself */}
              <div>
                <motion.textarea
                  name="about_yourself"
                  value={formData.about_yourself}
                  onChange={handleChange}
                  rows={3}
                  placeholder="About yourself"
                  className="w-full bg-transparent border-b border-[#545750] py-2 placeholder:text-white/70 focus:outline-none resize-none"
                  initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }} variants={fadeInUp}
                />
                {errors.about_yourself && <p className="text-sm text-red-400">{errors.about_yourself}</p>}
              </div>

              {/* File Upload */}
              <div>
                <motion.div className="flex items-center gap-3"
                  initial="hidden" whileInView="visible" custom={6} viewport={{ once: true }} variants={fadeInUp}>
                  <label className="px-4 py-1.5 bg-primary text-xs font-medium text-white rounded-full cursor-pointer">
                    Choose file
                    <input type="file" className="hidden" accept=".doc,.pdf,.docx"
                      onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
                  </label>
                  <span className="text-[11px] text-white font-normal italic">
                    Upload Resume (doc, pdf, docx)
                  </span>
                </motion.div>
                {errors.file && <p className="text-sm text-red-400">{errors.file}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-primary text-white text-lg font-medium rounded-full mt-4 flex items-center justify-center"
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
                custom={7}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : (
                  'Send Application'
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
