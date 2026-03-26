const Contact = () => {
    return (
        <section id="contact" className="bg-[#0f172a] px-6 py-24">
            <div className="mx-auto max-w-4xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                    Contact
                </p>
                <h2 className="mb-6 text-4xl font-black text-white">
                    Let’s Work Together
                </h2>
                <p className="mb-10 text-gray-400">
                    Have a project idea or want to work with me? Feel free to contact me.
                </p>

                <div className="space-y-4 text-lg text-white">
                    <p>Email: your@email.com</p>
                    <p>WhatsApp: +8801XXXXXXXXX</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;