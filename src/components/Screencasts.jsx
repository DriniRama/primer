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
    image: twoImage,
  },
  {
    image: threeImage,
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
        Produced and packaged in Switzerland, the Madoxtea drink contains plant extracts, one of which is Glucomannan, which helps satiate the stomach and curbs appetite. We can also mention Morosil, which melts the fat accumulated for years in sensitive areas. It is also well known for the efficiency of fat melting in the abdominal area (stomach). We have also proven this fact with real results for our clients.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        The content of the drink is completed by many other extracts, carefully selected, useful for everyone&apos;s immunity. The drink is used by both sexes from the age of 16. While using the drink, we recommend a healthy diet that will keep you in the habit even after finishing with Madoxtea.
        </p>
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
