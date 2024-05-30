import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/screencasts/3.jpg'

export function Hero() {
  return (
    <header className="overflow-hidden bg-indigo-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-indigo-900 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative layout-fill z-10 mx-auto flex w-64 rounded-xl bg-indigo-900 shadow-xl md:w-80 lg:w-auto">
            <Image src={coverImage} alt="" priority />
          </div>
        </div>
        {/*<div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">*/}
        {/*  <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />*/}
        {/*  <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">*/}
        {/*    <div className="flex justify-center text-yellow-600 lg:justify-start">*/}
        {/*      <StarRating />*/}
        {/*    </div>*/}
        {/*    <blockquote className="mt-2">*/}
        {/*      <p className="font-display text-xl font-medium text-slate-900">*/}
        {/*        “Një çaj i jashtëzakonshëm që mban me lehtësi shijen e këndshme me përfitimet e tij të fuqishme për humbjen e peshës, duke ofruar një mënyrë të freskët dhe efektive për të arritur qëllimet e mia të shëndetit.”*/}
        {/*      </p>*/}
        {/*    </blockquote>*/}

        {/*  </figure>*/}
        {/*</div>*/}
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-indigo-900 sm:text-6xl">
              Si të humbisni 5-8 kilogram për një javë?      </h1>
            <p className="mt-4 text-3xl text-zinc-700">
              Shkarkoni reçetën falas dhe mësoni se si të humbisni 5-8kg brenda javës. </p>
            <div className="mt-10 mb-12 flex">
              <ButtonLink className="mx-5" href="#shporta" variant="outline" color="indigo">
                Porosite produktin
              </ButtonLink>
              <ButtonLink href="#shkarkolibrin" variant="outline" color="indigo">
                Shkarko Recetën
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
