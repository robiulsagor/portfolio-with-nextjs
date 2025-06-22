"use client"

import { useEffect, useRef, useState } from "react";
import TextHeaders from "./TextHeaders"
import emailjs from "emailjs-com"; // Ensure you have emailjs-com installed
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form.current);

        // Basic validation
        if (!form.current) return;

        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );
            setSuccess(true);
            form.current.reset();
            toast.success("Message sent successfully!");
        } catch (error) {
            console.error("EmailJS error:", error);
            setError("Failed to send message");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 5000); // Reset success message after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [success])

    return (
        <section className="bg-[#080808]" id="contact">
            <div className="wrapper">
                <TextHeaders
                    bg="black"
                    header="Get in touch"
                    subtitle="Contact us for your beautiful project or project ideas. I would love hearing you so beautiful and amazing project idea"
                />

                <form ref={form} onSubmit={handleSubmit}
                    className="mt-8 md:mt-14 max-w-md mx-auto text-white space-y-8">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Please enter your email"
                            name="email" required
                            className="input-class" />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" id="mobile" placeholder="Please enter Mobile number"
                            name="mobile" required
                            className="input-class" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message"
                            name="message" required
                            className="input-class" rows={6}></textarea>
                    </div>

                    {error && <p className="text-red-500 bg-red-500/20 p-2 rounded text-center">{error}</p>}
                    {loading && <p className="text-green-500 bg-green-500/20 p-2 rounded text-center">Sending Message...</p>}
                    {success && <p className="text-green-500 bg-green-500/20 p-2 rounded text-center">Message sent successfully!</p>}

                    <button type="submit" disabled={loading}
                        className="py-2 w-full bg-green-primary rounded-md cursor-pointer hover:opacity-85 transition disabled:opacity-50 disabled:cursor-not-allowed">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact