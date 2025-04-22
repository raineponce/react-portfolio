
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-[url(/whiteFlower.jpg)] top-16">
            <div className="text-center z-10 px-8">
                <h1 className="text-5xl md:text-6xl mb-6 ">Hello! My name's Raine Ponce.</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">I am a digital media creator, which means I love creating and designing. Whether it be a website, a video, or a piece of art, I find joy in bringing people's visions to life.</p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-[#75917a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-[#a6ccad] hover:text-[#75917a]">See My Work</a>
                </div>

            </div>
        </section>
    )

}