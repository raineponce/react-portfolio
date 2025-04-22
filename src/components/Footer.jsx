
export const Footer = () => {
    return (
        <section id="footer" className="h-48 flex items-center justify-between p-20 border-t-8 border-dotted border-t-[#75917a]">
            <div className="flex items-center justify-center py-20 text-xl">
                <a href="https://www.linkedin.com/in/raine-ponce/" target="_blank" className="text-[#a6ccad] hover:text-[#75917a] pr-6" >LinkedIn</a>
                <a href="https://www.instagram.com/_raine.draws_/?igsh=MTZtYmJvcGRyejdhcg%3D%3D&utm_source=qr" target="_blank" className="text-[#a6ccad] hover:text-[#75917a] pr-6">Instagram</a>
                <a href="https://www.behance.net/raineponce" target="_blank" className="text-[#a6ccad] hover:text-[#75917a] pr-6">Behance</a>
            </div>

            <div className="flex items-center justify-center py-20 text-xl">
                <p>ponceraine23@gmail.com  ||  407-000-0000</p>
            </div>
        </section>
    );

}