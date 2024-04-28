import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/udhezues.pdf";
    link.setAttribute("download", "udhezues.pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };


export function ShkarkoLibrin() {
  return (
    <section
      id="shkarkolibrin"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-6 sm:scroll-mt-32 "
    >
      <Container>
        <SectionHeading number="4" id="shkarko-librin">
Libri       </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
Shkarko guidën e personalizuar për humbjen e peshës       </p>

      </Container>
      <div className="mx-auto mt-6 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-6 md:grid-cols-1 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <div className="relative bg-green-600 py-16 px-4 sm:rounded-5xl sm:py-12 sm:px-10 sm:shadow-lg lg:px-12">
            
            <div className="relative flex flex-col">
              <p className="mt-2 text-lg tracking-tight text-white">
                Konfirmoni detajet dhe shkarkoni dokumentin 
              </p>
                           <ButtonLink
                href="#libri"
                color="white"
                className="mt-8"
                aria-label="Get started with the Icon Pro plan for $229"
              >
                Shkarko librin 📖
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="isolate grid grid-cols-1 pb-10 px-6 sm:py-10 lg:px-8">
    <div className="w-full max-w-screen-lg mx-auto">

      <form action="https://formspree.io/f/mwkdlkak" id='libri'  method="POST" className="mx-auto mt-6 max-w-xl sm:mt-6" onSubmit={(e) => {
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
          // Form submission successful
          handleDownload();
          // Reset the form or show a success message
          e.target.reset();
        } else {
          // Form submission failed
          // Handle the error or show an error message
        }
      })
      .catch((error) => {
        // Handle any network or other errors
        console.error("Error:", error);
      });
  }}
>
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
            <label htmlFor="first-name-libri" className="block text-sm font-semibold leading-6 text-gray-700">
            Emri dhe Mbiemri
                        </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="grid text-sm font-semibold leading-6 text-gray-800">
              <p className="text-sm font-semibold leading-6 text-gray-700">

Shteti                            </p>


              <select data-te-select-init>
                <option value="1">Kosove</option>
                <option value="2">Shqiperi </option>
                <option value="3">Maqedoni</option>
              </select>
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-700">
            Nr. tel        </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                Land                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-600 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm"
                >
                  <option>+383</option>
                  <option>+355</option>
                  <option>+389</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute top-0 right-3 h-full w-5 text-gray-700"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-700">
            Email adresa        </label>
                        <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={1}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-100 shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
Konfirmo      </button>
        </div>
      </form>
    </div>
  </div>
    </section>
  )
}
