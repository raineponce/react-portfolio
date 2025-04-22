
export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 border-t-8 border-dotted border-t-[#75917a]">
            <div>
                <h1 className="text-5xl md:text-6xl mb-8 text-center">About</h1>

                <img src="/portrait.png" alt="image of Raine" className="max-h-80 float-left mr-4" />

                <p className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto">I am currently pursuing a Bachelor's in Digital Media at the University of Central Florida, specializing in web and interactive media, with strong skills in Adobe Creative Suite, Google Suite, and Microsoft Office. Through my experience as a Social Media Content Creator for Her Campus UCF and a Face Paint Artist at Universal Studios, I've honed my ability to craft engaging content and connect with diverse audiences. I am eager to contribute my creativity and technical skills to a team where I can make a meaningful impact in design and digital marketing.</p>

                <p className="text-lg md:text-2xl mb-8 ml-4 max-w-4xl mx-auto"><span className="font-bold">Skills: </span> Adobe Photoshop, Illustrator, InDesign. Figma, Canva, CapCut. HTML, CSS, Javascript, React, React Native. Microsoft Word, Outlook, Excel, Powerpoint.</p>

                <div className="flex justify-center space-x-4">
                    <a href="#contact" className="bg-[#75917a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-[#a6ccad] hover:text-[#75917a]">Let's work together!</a>
                </div>

            </div>
        </section>
    )
}