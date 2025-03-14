import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { Formik } from "formik";
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const SignUpForm = () => {
  const sendEmail = async (values, { resetForm, setSubmitting }) => {
    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'service_e5o11gb';
      const templateId = 'template_r1aw4ar';
      const publicKey = 'H3AmsLJvlANPg8DAM';

      const templateParams = {
        from_name: `${values.firstname} ${values.lastname}`,
        from_email: values.email,
        from_phone: values.phonenumber,
        subject: values.subject || 'No Subject',
        message: values.message || 'No Message',
      };

      const response = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams, 
        publicKey
      );

      if (response.status === 200) {
        toast.success(`Hey ${values.firstname}, your message was sent successfully!`);
        resetForm();
      } else {
        toast.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('An error occurred while sending the message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-end">
      <Formik
        initialValues={{ firstname: '', lastname: '', phonenumber: '', email: '', subject: '', message: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = 'Required';
          }
          if (!values.lastname) {
            errors.lastname = 'Required';
          }

          if (!values.phonenumber) {
            errors.phonenumber = 'Required';
          } else if (!/^\d{10}$/i.test(values.phonenumber)) {
            errors.phonenumber = 'Phone number must be 10 digits';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={sendEmail}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            className="flex flex-col gap-8 bg-[#1E1E1E] rounded-[20px] p-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="w-full">
                <label
                  className="block tracking-wide text-white text-xs font-semibold mb-2 dark:text-[#fff]"
                  htmlFor="grid-first-name"
                >
                  {" "}
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                  id="grid-first-name"
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname && <div className='text-red-500'>{errors.firstname}</div>}
              </div>
              <div className="w-full ">
                <label
                  className="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                  id="grid-last-name"
                  type="text"
                  name="lastname"
                  placeholder="Enter Last Name"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname && <div className='text-red-500'>{errors.lastname}</div>}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="w-full ">
                <label
                  className="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                  htmlFor="grid-email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                  id="grid-email"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <div className='text-red-500'>{errors.email}</div>}
              </div>
              <div className="w-full ">
                <label
                  className="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                  htmlFor="grid-number"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                  id="grid-number"
                  type="number"
                  name="phonenumber"
                  placeholder="Enter your Phone Number"
                  value={values.phonenumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phonenumber && touched.phonenumber && <div className='text-red-500'>{errors.phonenumber}</div>}
              </div>
            </div>
            <div className="w-full ">
              <label
                className="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                htmlFor="grid-subject"
              >
                Subject
              </label>
              <input
                className="w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                id="grid-subject"
                type="text"
                name="subject"
                placeholder="Enter your Subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full ">
              <label
                className="block tracking-wide text-white text-xs font-semibold mb-2 dark:text-[#fff]"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                className="appearance-none text-white block w-full bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                id="grid-message"
                type="text"
                name="message"
                placeholder="Enter your Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex justify-center">
            <button type='submit' disabled={isSubmitting}
                  className="button-57 flex justify-center items-center gap-3 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
                  href=""
                >
                  <div className="bg-black rounded-full w-12 h-12 text-2xl text-white flex justify-center items-center">
                    <BsSend />
                  </div>
                  <span className="text-btn flex gap-2 items-center">
                    Send Message
                  </span>

                  <span className="pb-3">Send Message</span>
                </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;