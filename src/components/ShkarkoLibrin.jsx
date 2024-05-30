import { ButtonLink } from '@/components/Button';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/udhezues.pdf";
  link.setAttribute("download", "udhezues.pdf");
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
};

export function ShkarkoLibrin() {
  const [formData, setFormData] = useState({
    firstName: '',
    country: '+383', // Default country code
    phoneNumber: '',
    email: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { firstName, phoneNumber, email } = formData;
    const isValidEmail = validateEmail(email);
    setIsFormValid(firstName && phoneNumber && isValidEmail && !formErrors.email);
  }, [formData, formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'email') {
      const errorMessage = validateEmail(value) ? '' : 'Please enter a valid email address';
      setFormErrors({ ...formErrors, email: errorMessage });
    }
  };

  const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  return (
    <section
      id="shkarkolibrin"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-6 sm:scroll-mt-32"
    >
      <Container>
        <p id="shkarko-librin">Çka përfshihet në këtë recetë?</p>
        <p className="mt-8 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Kjo Recetë tregon mënyrën e saktë se si të humbni peshë shpejtë dhe lehtë.

        </p>
        <div className="mt-5 text-lg font-normal text-slate-800">Këtu i gjeni detajet rreth: </div>
        <li className="mt-5 text-xl font-normal text-slate-800"> Çfarë ushqime të hani</li>
        <li className="mt-5 text-xl font-normal text-slate-800"> Çfarë ushqime të ndaloni</li>
      </Container>
      <div className="mx-auto mt-6 max-w-5xl lg:px-6">
          <div className="relative flex items-center justify-center bg-indigo-600 py-16 px-4 sm:rounded-5xl sm:py-12 sm:px-10 sm:shadow-lg lg:px-12">
            <div className="relative  flex-col">
              <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">
               Shkarko recetën FALAS
              </p>
              <p className="mt-2 text-xl font-normal uppercase tracking-tight text-white">
                duke plotësuar të dhënat më poshtë 👇
              </p>
            </div>
          </div>
        </div>
      <div className="isolate grid grid-cols-1 pb-10 px-6 sm:py-10 lg:px-8">
        <div className="w-full max-w-screen-lg mx-auto">
          <form
            action="https://formspree.io/f/mwkdlkak"
            id='shkarko-librin'
            method="POST"
            className="mx-auto mt-6 max-w-xl sm:mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              fetch("https://formspree.io/f/mwkdlkak", {
                method: "POST",
                body: new FormData(e.target),
                headers: {
                  Accept: "application/json",
                },
              })
                .then((response) => {
                  if (response.ok) {
                    handleDownload();
                    e.target.reset();
                  } else {
                    console.error("Form submission failed");
                  }
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }}
          >
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-700">
                  Emri dhe Mbiemri
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  required
                  className="mt-2.5 block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-700">
                  Nr. tel
                </label>
                <div className="relative mt-2.5">
                  <select
                    id="country"
                    name="country"
                    className="absolute inset-y-0 left-0 h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-9 text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    onChange={handleChange}
                    value={formData.country}
                  >
                    <option value="+383">+383</option>
                    <option value="+355">+355</option>
                    <option value="+389">+389</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute top-0 right-3 h-full w-5 text-gray-700"
                    aria-hidden="true"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-700">
                  Email adresa
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className={`mt-2.5 block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${formErrors.email ? 'ring-2 ring-red-500' : ''}`}
                  onChange={handleChange}
                  value={formData.email}
                />
                {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-100 shadow-sm ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}`}
              >
                Shkarko librin 📖
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

