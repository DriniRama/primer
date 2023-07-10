import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import oneImage from '@/images/screencasts/1.jpg'
import twoImage from '@/images/screencasts/2.jpg'
import threeImage from '@/images/screencasts/3.jpg'
import fourImage from '@/images/screencasts/4.jpg'
import fiveImage from '@/images/screencasts/5.jpg'
import sixImage from '@/images/screencasts/6.jpg'

const videos = [
  {
    image: oneImage,
  },

  {
    image: fourImage,
  },
  {
    image: fiveImage,
  },
  {
    image: sixImage,
  },
]

export function Screencasts() {
  return (
    <section
      id="rrethproduktit"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="screencasts-title">
          Detaje
        </SectionHeading>
        <p className="mt-8 font-display text-2xl font-bold tracking-tight text-slate-900">
        E prodhuar dhe e paketuar në Zvicër, pija Madoxtea përmban ekstrakte bimore, një prej të cilave është Glucomannan, i cili ndihmon në ngopjen e stomakut dhe frenon oreksin. Mund të përmendim edhe Morosil, i cili shkrin yndyrën e grumbulluar prej vitesh në zonat e ndjeshme. Është gjithashtu i njohur për efikasitetin e shkrirjes së yndyrës në zonën e barkut (stomak). Këtë fakt e kemi vërtetuar edhe me rezultate reale për klientët tanë.        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        Përmbajtja e pijes plotësohet nga shumë ekstrakte të tjera, të zgjedhura me kujdes, të dobishme për imunitetin e të gjithëve. Pija përdoret nga të dyja gjinitë që nga mosha 16 vjeçare. Gjatë përdorimit të pijes ju rekomandojmë një dietë të shëndetshme që do t&apos;ju mbajë në zakon edhe pasi të keni mbaruar me Madoxtea.        </p>
      </Container>
      <Container size="lg" className="mt-16">
  <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-2">
    {videos.map((video, index) => (
      <div className="flex overflow-hidden rounded shadow-sm" key={index}>
        <Image src={video.image} alt="" />
      </div>
    ))}
  </div>
</Container>

    </section>
  )
}
