import Navbar from '@/components/Nav'
import { Poppins } from 'next/font/google'

const font = Poppins({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <div>
      <Navbar />

      <div id="content" className='ml-3 overflow-hidden'>
        <div className='mt-36 ml-14 z-10'>
          <h1 className={`${font} text-7xl`}>The MUN experience,
            <br />designed for you</h1>
          <h2 className='mt-4'>
            <span className={`mr-4 text-red-600 ${font.className} text-lg `}>Virtual MUNs</span>
            <span className={`mr-4 text-blue-600 ${font.className} text-lg `}>MUN Planning</span>
            <span className={`mr-4 text-green-600 ${font.className} text-lg `}>MUN Software</span>
          </h2>
        </div>

        <div id="cool image">
          <img src="/oof.gif" className='w-[400px] ml-auto mr-10 -mt-24' />
        </div>

        <div className='flex justify-center mt-20 mb-10'>
          <button className={`${font.className} text-2xl rounded-xl w-48 h-16 bg-blue-500 hover:scale-110 transition-all`}>Contact Us</button>
        </div>
      </div>
    </div>
  )
}
