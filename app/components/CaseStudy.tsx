import { IoChevronForwardOutline } from "react-icons/io5";
import { roboto_mono } from "../fonts";
import Image from "next/image";
import photo from '@/public/case.png'
import Link from "next/link";

interface CaseStudyType {
    title: string,
    description: string, category: string, image: string, link: string, index: number
}

const CaseStudy = ({ title, description, category, link, index }: CaseStudyType) => {

    return (
        <div className={`flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 max-w-lg md:max-w-max mx-auto`}>
            <div className="flex-1 w-full">
                <Image
                    src={photo}
                    alt={`Case Study ${index}`}
                    height={400}
                    width={400}
                    className="rounded-lg w-full  h-full object-cover"
                />
            </div>
            <div className="flex-1 space-y-4">
                <p className={`color-category-${index} px-3 py-1.5 inline-block rounded-xl text-sm`}>
                    {category}
                </p>

                <h3 className="text-slate-800 text-2xl lg:text-3xl font-bold">{title} </h3>
                <p className="text-slate-400 leading-6 md:leading-7 tracking-wide md:tracking-widest text-justify text-sm md:text-base">{description} </p>

                <Link href={link} className={`color-caseStudy-${index} text-white py-2 px-4 rounded-lg inline-flex gap-3 items-center font-semibold ${roboto_mono.className} group cursor-pointer`}>View Case Study <IoChevronForwardOutline className="group-hover:translate-x-2 transition" /> </Link>
            </div>

        </div>
    )
}

export default CaseStudy