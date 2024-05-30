import {Button, ButtonLink} from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import Image from 'next/image'
import threeImage from '@/images/screencasts/2.jpg'



export function FreeChapters() {
  return (
    <section
      id="perdorimi"
      aria-labelledby="free-chapters-title"
      className="scroll-mt-14 bg-indigo-600 sm:scroll-mt-32"
    >
      
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
            A ka me të vërtetë efekt reçeta <b>Madox?</b>           </h2>
            <p className="mt-4 text-lg tracking-tight text-indigo-200">
           Edhe pse reçeta Madox është e njohur prej vitesh, ka pasur shumë dyshime në lidhje me efektivitetin e saj. Studimet e fundit konfirmojnë se reçeta është shumë e nevojshme dhe mjaft efektive në humbjen e shpejtë të peshës. Ndërsa recetat tipike të humbjes së peshës mund të ndihmojnë një person që të humb më së shumti 1-2 kilogram, reçeta e Madox mund të ju ndihmojë të humbni më shumë peshë brenda vetëm një jave!!! Deri në 8 kilogram.
            </p>
          </div>
          <Image src={threeImage} alt="" />
          <ButtonLink href="#shkarkolibrin" variant="solid" color="white">
            Shkarko Recetën
          </ButtonLink>
          </Container>
      </div>

    </section>
  )
}
