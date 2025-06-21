import TextHeaders from "./TextHeaders"

const Contact = () => {
    return (
        <section className="bg-[#080808]" id="contact">
            <div className="wrapper">
                <TextHeaders
                    bg="black"
                    header="Get in touch"
                    subtitle="Contact us for your beautiful project or project ideas. I would love hearing you so beautiful and amazing project idea"
                />

                <form className="mt-8 md:mt-14 max-w-md mx-auto text-white space-y-8">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Please enter your email"
                            className="bg-white rounded-md py-2.5 px-3 block w-full mt-2 placeholder:text-slate-400" />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" id="mobile" placeholder="Please enter Mobile number"
                            className="bg-white rounded-md py-2.5 px-3 block w-full mt-2 placeholder:text-slate-400" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message"
                            className="bg-white rounded-md py-2.5 px-3 block w-full mt-2 placeholder:text-slate-400" rows={6}></textarea>
                    </div>

                    <button type="submit" className="py-2 w-full bg-green-primary rounded-md">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact