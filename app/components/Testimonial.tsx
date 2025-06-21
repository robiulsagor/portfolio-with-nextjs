import Image from "next/image"
import clientImage from '@/public/image 4.png'
import { FaQuoteLeft } from "react-icons/fa"

interface TestimonialProps {
  text: string,
  client: string
}

const Testimonial = ({ text, client }: TestimonialProps) => {
  // todo: next solve image issue with real images

  return (
    <div className="border-l border-slate-700 max-w-lg w-full p-4 md:p-8 space-y-5 md:space-y-8 relative">
      {/* for top line */}
      <div className="absolute w-full h-[.8px] bg-gradient-to-r from-slate-700 to-[#080808] left-0 top-0"></div>

      {/* for top side */}
      <div className="absolute w-3 h-3 border border-slate-700 border-e-0 border-b-0 rounded-tl-lg -left-[0.8px] top-0 z-10" />
      <div className="absolute w-3 h-3  bg-[#080808]  -left-[0.8px] top-0 z-0" />

      {/* for bottom line */}
      <div className="absolute w-full h-[.8px] bg-gradient-to-r from-slate-700 to-[#080808] left-0 -bottom-8" />

      {/* for bottom side */}
      <div className="absolute w-3 h-3 border border-slate-700 border-t-0 border-e-0 rounded-bl-lg -left-[0.8px] -bottom-8 z-10 " />
      <div className="absolute w-3 h-3  bg-[#080808]  -left-[0.8px] -bottom-8 z-0" />

      {/* Quotation mark */}
      <FaQuoteLeft size={22} className="absolute -top-2.5 left-5" />

      <p className="text-slate-400 tracking-wide md:tracking-wider leading-7 text-justify">
        {text}
      </p>

      <div className="flex items-center gap-5">
        <Image src={clientImage}
          alt="client image"
          width={70}
          height={70}
          className="rounded-full w-[45px] h-[45px]"
        />

        <p className="text-slate-200">{client} </p>
      </div>

    </div >
  )
}

export default Testimonial