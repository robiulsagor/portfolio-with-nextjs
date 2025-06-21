import Image from "next/image"
import image from '../../public/pic.jpg'
import logo1 from '../../public/Logo 1.png'
import logo2 from '../../public/Logo 2.png'
import logo3 from '../../public/Logo 3.png'
import logo4 from '../../public/Logo 4.png'
import logo5 from '../../public/Logo 5.png'
import Navbar from "./Navbar"
import { IoChevronForwardOutline } from "react-icons/io5"

const Hero = () => {
    return (
        <div className="bg-[#080808]">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 py-8">

                <div className="md:flex items-center justify-between ">
                    <div className="flex-1">
                        <Image
                            src={image}
                            alt='Robiul Islam'
                            height={400}
                            width={400}
                            className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover mx-auto md:mx-0"
                        />
                    </div>
                    <div className="flex-1 space-y-7 mt-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-200 font-bold">Robiul Islam Sagar</h2>
                        <p className="text-gray-400 leading-7 tracking-wider">I’m a self-taught MERN stack developer with a strong focus on building real-world, fullstack web applications. With a passion for clean UI and efficient backend logic, I love turning ideas into responsive, user-friendly products. </p>

                        <button className="bg-green-primary rounded py-3 px-8 text-white text-xl flex gap-2 items-center cursor-pointer group mx-auto md:mx-0">
                            Let&apos;s Get Started <IoChevronForwardOutline className="group-hover:translate-x-3 transition" />
                        </button>
                    </div>


                </div>

                <div className="pb-10 pt-10">
                    <h3 className="text-gray-200 text-xl">Worked With</h3>

                    <div className="flex justify-around md:justify-between items-center flex-wrap mt-4 gap-4">
                        <Image src={logo1} alt="logo1" width={190} height={200} className="w-[150px]" />
                        <Image src={logo2} alt="logo1" width={190} height={200} className="w-[150px]" />
                        <Image src={logo3} alt="logo1" width={190} height={200} className="w-[150px]" />
                        <Image src={logo4} alt="logo1" width={190} height={200} className="w-[150px]" />
                        <Image src={logo5} alt="logo1" width={190} height={200} className="w-[150px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero