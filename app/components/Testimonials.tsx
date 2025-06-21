import { testimonials } from "../data"
import Testimonial from "./Testimonial"
import TextHeaders from "./TextHeaders"

const Testimonials = () => {
    return (
        <div className="bg-[#080808]" id="testimonials">
            <div className="wrapper">
                <TextHeaders
                    header="Testimonials"
                    subtitle="What others say about my previous projects."
                    bg="black"
                />

                <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center justify-center gap-10 text-white">
                    {
                        testimonials.map(data => (
                            <Testimonial key={data.id}
                                client={data.client}
                                text={data.text} />
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Testimonials