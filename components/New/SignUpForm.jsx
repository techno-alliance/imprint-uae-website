import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { Formik } from "formik";
import toast from 'react-hot-toast';


const SignUpForm = () => {

  
    // const sendEmail = async e => {
    //     e.preventDefault()
    //     const response = await fetch("/api/send", {
    //       method: "POST",
    //       headers: {
    //         "content-Type": "application/json"
    //       },
    //       body: JSON.stringify(data)
    //     })
      
    //     if (response.status === 200) {
    //       setData({})
    //       toast.success(`Hey ${data.name}, your message was sent successfully`)
    //     }
    //   }
  return (
    <div className="flex flex-col justify-end">
        <Formik
       initialValues={{ firstname:'', lastname:'', phonenumber:'', email: '', subject: '' }}
       validate={values => {
         const errors = {};
         if (!values.firstname) {
            errors.firstname = 'Required';
          }
          if (!values.lastname) {
            errors.lastname = 'Required';
          }

          if (!values.phonenumber) {
            errors.phonenumber = 'Required';
          }  else if (!/^\d{10}$/i.test(values.phonenumber)) {
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
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
            <form
              class="flex flex-col gap-8 bg-[#1E1E1E] rounded-[20px] p-8"
              onSubmit={handleSubmit}
            >
              <div class="flex flex-col lg:flex-row justify-between gap-6">
                <div class="w-full">
                  <label
                    class="block tracking-wide text-white text-xs font-semibold mb-2 dark:text-[#fff]"
                    for="grid-first-name"
                  >
                    {" "}
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                    id="grid-first-name"
                    type="text"
                    name="firstname"
                    placeholder="Enter First Name"
                    // value={form.name}
                    onChange={handleChange}
                    // onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                    {errors.firstname && touched.firstname && <div className='text-red-500'>{errors.firstname}</div>}
                </div>
                <div class="w-full ">
                  <label
                    class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                    for="grid-last-name"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class=" w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                    id="grid-last-name"
                    type="text"
                    name="lastname"
                    placeholder="Enter Last Name"
                    
                    // value={form.lastname}
                    onChange={handleChange}
                    // onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                    {errors.lastname && touched.lastname && <div className='text-red-500'>{errors.lastname}</div>}

                </div>
              </div>
              <div class="flex flex-col lg:flex-row justify-between gap-6">
                <div class="w-full ">
                  <label
                    class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                    for="grid-email"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    class=" w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    
                    // value={form.email}
                    onChange={handleChange}
                    // onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <div className='text-red-500'>{errors.email}</div>}
                </div>
                <div class="w-full ">
                  <label
                    class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                    for="grid-number"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    class=" w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                    id="grid-number"
                    type="number"
                    name="phonenumber"
                    placeholder="Enter your Phone Number"
                    
                    // value={form.phone}
                    onChange={handleChange}
                    // onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                    {errors.phonenumber && touched.phonenumber && <div className='text-red-500'>{errors.phonenumber}</div>}

                </div>
              </div>
              <div class="w-full ">
                <label
                  class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                  for="grid-last-name"
                >
                  Subject
                </label>
                <input
                  class=" w-full text-white bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                  id="grid-subject"
                  type="text"
                  name="subject"
                  placeholder="Enter your Subject"
                //   value={form.subject}
                  onChange={handleChange}
                //   onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div class="w-full ">
                <label
                  class="block tracking-wide text-white text-xs font-semibold mb-2 dark:text-[#fff]"
                  for="grid-message"
                >
                  Message
                </label>
                <textarea
                  class="appearance-none text-white block w-full bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight"
                  id="grid-message"
                  type="text"
                  name="message"
                  placeholder="Enter your Message"
                  
                //   value={form.message}
                  onChange={handleChange}
                //   onFocus={handleFocus}
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
  )
}

export default SignUpForm
