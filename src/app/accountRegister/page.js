
'use client'
import { useState } from "react";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Title from "@/components/Title";
import Footer from "@/components/Footer";

export default function AccountRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // مدیریت پیام موفقیت
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // مشخص کردن اینکه فرم ارسال شده

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.fullName) validationErrors.fullName = "Navn er påkrævet.";
    if (!formData.email) validationErrors.email = "Email er påkrævet.";
    if (!formData.password) validationErrors.password = "Password er påkrævet.";
    if (formData.password.length < 6)
      validationErrors.password = "Password skal være mindst 6 tegn.";
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = "Passwords matcher ikke.";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccessMessage("Bruger oprettet med succes!"); // پیام موفقیت
      setIsFormSubmitted(true); // فرم ارسال شده
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" }); // پاک کردن فرم
    }
  };

  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Account Register" subTitle="Home | Register" />
      <main className="flex justify-center p-6">
        <div className="bg-white border border-gray-300 shadow-lg py-10 px-6 w-full max-w-lg sm:px-10">
          {isFormSubmitted ? ( // نمایش پیام موفقیت اگر فرم ارسال شده باشد
            <h2 className="text-lg font-bold mb-6 text-center text-green-600">
              {successMessage}
            </h2>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-6 text-center">
                Opret bruger hos Din Mægler
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                  <label htmlFor="fullName" className="text-sm mb-2">
                    Fulde navn
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-10 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-xs">{errors.fullName}</span>
                  )}
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="text-sm mb-2">
                    Email adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-10 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-10 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-xs">{errors.password}</span>
                  )}
                </div>

                <div className="flex flex-col mb-6">
                  <label htmlFor="confirmPassword" className="text-sm mb-2">
                    Bekræft password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="h-10 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-xs">{errors.confirmPassword}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-customBlue text-white h-10 w-full rounded hover:bg-blue-600 transition duration-300"
                >
                  Opret bruger
                </button>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
