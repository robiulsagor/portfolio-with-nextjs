import Image from "next/image"
import recent from "@/public/recent.png"
import { IoChevronForwardOutline } from "react-icons/io5"

interface RecentWorkProps {
    data: {
        name: string,
        description: string
    }
}

const RecentWork = ({ data }: RecentWorkProps) => {
    return (
        <div className="max-w-lg mx-auto space-y-6">
            <Image src={recent} alt="recent project img"
                width={300} height={300} className="w-full h-[280px] object-cover rounded-lg" />

            <h2 className="text-2xl font-semibold">{data.name} </h2>
            <p className="text-slate-400 tracking-wide text-sm">
                {data.description} </p>

            <button className="bg-green-primary text-white py-2 px-4 rounded-md group flex items-center gap-1.5 cursor-pointer text-sm">Know More
                <IoChevronForwardOutline className="group-hover:translate-x-3 transition" />
            </button>
        </div>
    )
}

export default RecentWork