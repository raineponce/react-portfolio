
export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 border-t-8 border-dotted border-t-[#75917a]">

            <div className="px-4 w-200">
                <h1 className="text-5xl md:text-6xl mb-6 text-center">Contact</h1>

                <div className="flex items-center justify-center py-20 text-2xl">
                    <a href="https://www.linkedin.com/in/raine-ponce/" target="_blank" className="text-[#a6ccad] hover:text-[#75917a] pr-6" >LinkedIn</a>
                    <a href="https://www.instagram.com/_raine.draws_/?igsh=MTZtYmJvcGRyejdhcg%3D%3D&utm_source=qr" target="_blank" className="text-[#a6ccad] hover:text-[#75917a] pr-6">Instagram</a>
                    <a href="https://www.behance.net/raineponce" target="_blank" className="text-[#a6ccad] hover:text-[#75917a] pr-6">Behance</a>
                </div>

                <form className="space-y-6">
                    <div className="relative">
                        <input id="name" name="name" type="text" placeholder="Name..." required className="w-full bg-white border-2 border-[#a6ccad] rounded px-4 py-3 focus:border-[#75917a]" />
                    </div>

                    <div className="relative">
                        <input id="email" name="email" type="text" placeholder="Email..." required pattern="^\w+@\w+(.com|.edu)$" className="w-full bg-white border-2 border-[#a6ccad] rounded px-4 py-3 focus:border-[#75917a]" />
                    </div>

                    <div className="relative">
                        <textarea id="message" name="message" placeholder="Message..." rows={4} required className="w-full bg-white border-2 border-[#a6ccad] rounded px-4 py-3 focus:border-[#75917a]" />
                    </div>

                    <div className="relative">
                        <button type="submit" className="bg-[#75917a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-[#a6ccad] hover:text-[#75917a] object-bottom">Send!</button>
                    </div>



                </form>
            </div>



        </section>
    );
}