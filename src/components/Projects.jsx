// import webDesign from '../assets/MA3_website_previews.png'


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 border-t-8 border-dotted border-t-[#75917a]">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl mb-8 text-center">Projects</h1>

                {/* project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-[#75917a] flex flex-col items-center justify-center">
                        <img src="webDesign.png" className="mb-0 rounded-xl h-80 inset-0 w-full object-cover" alt="web design thumbnail" />
                        <h2 className="text-xl font-bold mb-4">Web Designs</h2>
                        <p className="mb-8 text-xl md:text-2xl">Simple websites coded from scratch using HTML, CSS/SASS, and Javascript in Visual Studio Code and hosted on GitHub Pages.</p>
                        <a href="https://raineponce.myportfolio.com/sites" target="_blank" className="bg-[#75917a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-[#a6ccad] hover:text-[#75917a] ">View Here</a>
                    </div>

                    <div className="p-6 rounded-xl border border-[#75917a] flex flex-col items-center justify-center">
                        <img src="graphicDesign.jpg" className="mb-4 rounded-xl h-80 inset-0 w-full object-cover inset-0 w-full object-cover" alt="graphic design thumbnail" />
                        <h2 className="text-xl font-bold mb-4">Graphic Designs</h2>
                        <p className="mb-8 text-xl md:text-2xl">Various designs for social media or school projects created with Adobe Photoshop, Illustrator, InDesign, and/or Canva.</p>
                        <a href="https://raineponce.myportfolio.com/work" target="_blank" className="bg-[#75917a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-[#a6ccad] hover:text-[#75917a]">View Here</a>
                    </div>

                    <div className="p-6 rounded-xl border border-[#75917a] flex flex-col items-center justify-center">
                        <img src="videoEdit.jpg" className="mb-4 rounded-xl h-80 inset-0 w-full object-cover" alt="video editing thumbnail" />
                        <h2 className="text-xl font-bold mb-4">Video Editing</h2>
                        <p className="mb-8 text-xl md:text-2xl">Self-recorded video clips edited using CapCut. Includes vlog-style edits matched to music with styled text.</p>
                        <a href="https://raineponce.myportfolio.com/videos" target="_blank" className="bg-[#75917a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-[#a6ccad] hover:text-[#75917a]">View Here</a>
                    </div>

                    <div className="p-6 rounded-xl border border-[#75917a] flex flex-col items-center justify-center ">
                        <img src="artwork.jpg" className="mb-4 rounded-xl h-80 inset-0 w-full object-cover" alt="artwork thumbnail" />
                        <h2 className="text-xl font-bold mb-4 ">Artwork</h2>
                        <p className="mb-8 text-xl md:text-2xl">Collection of traditional and digital artwork I have created since 2019. Includes mediums such as charcoal, watercolor, acrylic, graphite, and more.</p>
                        <a href="https://raineponce.myportfolio.com/copy-of-work" target="_blank" className="bg-[#75917a] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-[#a6ccad] hover:text-[#75917a]">View Here</a>
                    </div>

                </div>
            </div>
        </section>
    );
}
