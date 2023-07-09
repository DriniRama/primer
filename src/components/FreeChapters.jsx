import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import Image from 'next/image'
import threeImage from '@/images/content.jpg'



export function FreeChapters() {
  return (
    <section
      id="perdorimi"
      aria-labelledby="free-chapters-title"
      className="scroll-mt-14 bg-green-600 sm:scroll-mt-32"
    >
      
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
            Përbërësit origjinalë natyralë            </h2>
            <p className="mt-4 text-lg tracking-tight text-green-200">
            Çaji Madoxtea përmban ekstrakte bimore, një prej të cilave është Glucomannan, i cili ndihmon në ngopjen e stomakut dhe frenon oreksin. Mund të përmendim edhe Morosil, i cili shkrin yndyrën e grumbulluar prej vitesh në zonat e ndjeshme.
            </p>
          </div>
          <Image src={threeImage} alt="" />
          </Container>
      </div>
    </section>
  )
}
