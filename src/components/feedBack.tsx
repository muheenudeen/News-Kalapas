"use client";

import { useState } from "react";
import { Search, Check, Home as HomeIcon } from "lucide-react";
import Link from "next/link";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    country: "",
    state: "",
    email: "",
    mobile: "",
    addressSecond: ""
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    mobile: false
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = (mobile: string) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    if (id === "email") {
      setErrors(prev => ({ ...prev, email: value !== "" && !validateEmail(value) }));
    } else if (id === "mobile") {
      setErrors(prev => ({ ...prev, mobile: value !== "" && !validateMobile(value) }));
    } else if (id === "fullName") {
      setErrors(prev => ({ ...prev, fullName: value === "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      fullName: formData.fullName === "",
      email: !validateEmail(formData.email),
      mobile: formData.mobile !== "" && !validateMobile(formData.mobile)
    };

    setErrors(newErrors);

    const isValid = !newErrors.fullName && !newErrors.email && 
                  (formData.mobile === "" || !newErrors.mobile);

    if (isValid) {
      console.log("Form submitted:", formData);
      alert("Thank you for your feedback!");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Thank you for your time!</h1>
              <p className="text-gray-600 mt-2">Please provide the details below</p>
            </div>
            <Link 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
            >
              <HomeIcon size={18} />
              <span>Home</span>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                placeholder="Enter Your Full Name"
                className={`w-full p-3 border rounded-md ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">Full name is required</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <textarea
                id="address"
                placeholder="Enter your full Postal Address"
                className="w-full p-3 border border-gray-300 rounded-md min-h-[100px]"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
                  Country
                </label>
                <div className="relative">
                  <input
                    id="country"
                    placeholder="Enter Your Country Name"
                    className="w-full p-3 border border-gray-300 rounded-md pr-10"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="state" className="block text-gray-700 font-medium mb-1">
                  State
                </label>
                <div className="relative">
                  <input
                    id="state"
                    placeholder="Enter Your State Name"
                    className="w-full p-3 border border-gray-300 rounded-md pr-10"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email id"
                  className={`w-full p-3 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <div className="flex items-center justify-center bg-white border border-r-0 rounded-l-md px-3 border-gray-300">
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-4 bg-[#FF9933] rounded-sm"></div>
                      <Check className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                  <input
                    id="mobile"
                    placeholder="Enter Your Mobile Number"
                    className={`w-full p-3 border rounded-r-md ${errors.mobile ? "border-red-500" : "border-gray-300"}`}
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                {errors.mobile && <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit number</p>}
              </div>
            </div>

            <div>
              <label htmlFor="addressSecond" className="block text-gray-700 font-medium mb-1">
                Additional Address
              </label>
              <textarea
                id="addressSecond"
                className="w-full p-3 border border-gray-300 rounded-md min-h-[100px]"
                value={formData.addressSecond}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Link
                href="/"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-mint-600 text-blue rounded-md hover:bg-mint-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}