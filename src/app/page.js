import { Hero, Choice, About, Gift } from "@/Components";
import Image from "next/image";

export default function Home() {
  return (
    <main className=' grid place-content-center'>
      <div className='relative bed'>
        {/* <div className='sticky top-0 left-0 -z-10    '>
          <Image
            width={800}
            height={600}
            priority={false}
            placeholder='blur'
            blurDataURL='/next.svg'
            src='/about-1.svg'
            alt='img'
            className='  '
          />
          <p className='hidden'>
            <a href='https://freesvg.org/vector-illustration-of-person-sleeping'>
              Free Svg
            </a>
          </p>
        </div> */}
        <Hero />
      </div>
      <About />
      <Choice />
      <Gift />
    </main>
  );
}
