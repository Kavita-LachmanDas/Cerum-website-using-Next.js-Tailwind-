import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


export default function Contact() {
  return (
    <div>
   <section className="text-gray-600 body-font relative">
  <div className="mnn w-full max-w-full mx-auto p-6 py-24 border-2 border-white rounded-2xl bg-[#5492af] mt-24 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Contact Us</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        {/* Name Input */}
        <div className="p-2 w-full sm:w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-white font-bold">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        {/* Email Input */}
        <div className="p-2 w-full sm:w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-white font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-white font-bold">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>

        {/* Contact Info */}
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-white">kavitaluhana11@email.com</a>
          <br />
          <div className="flex justify-center my-2 gap-4">
            <Link href="https://www.linkedin.com/in/kavita-luhana-0a31842ab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Btxl9VcSbQ0ChtnXRGhnisQ%3D%3D">
              <BsLinkedin className="text-[30px]" />
            </Link>
            <Link href="https://github.com/Kavita-LachmanDas">
              <BsGithub className="text-[30px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
