export const Section7 = () => (
    <div className="w-full flex justify-center bg-white relative mb-20">
        <div className="absolute top-0 h-1/2 w-full bg-6"/>
        <div className="max-w-[900px] py-8 px-8 relative z-10 bg-white w-full lg:grid grid-cols-3 gap-16 flex flex-col">
            <div className="text-center flex flex-col items-center">
                <img alt="matthias en celeste" src="section_7_1.png"
                     className="object-contain w-[150px] h-[100px] lg:h-[150px] lg:w-full"/>
                <div className="font-parisienne text-4xl mt-4">Receptie</div>
                <div className="font-tenor text-xl mt-4">
                    17:00
                    <br/>
                    Binnenplaats
                    <br/>
                    Brouwerij de Wilde Brouwers
                </div>
            </div>
            <div className="text-center flex flex-col items-center">
                <img alt="matthias en celeste" src="section_7_2.png"
                     className="object-contain w-[150px] h-[100px] lg:h-[150px] lg:w-full"/>
                <div className="font-parisienne text-4xl mt-4">Diner</div>
                <div className="font-tenor text-xl mt-4">
                    19:00
                    <br/>
                    Zittend diner
                    <br/>
                    Tussen de brouwvaten
                </div>
            </div>
            <div className="text-center flex flex-col items-center">
                <img alt="matthias en celeste" src="section_7_3.png"
                     className="object-contain w-[150px] h-[100px] lg:h-[150px] lg:w-full"/>
                <div className="font-parisienne text-4xl mt-4">Avondfeest</div>
                <div className="font-tenor text-xl mt-4">
                    23:00
                    <br/>
                    Tot de vroege
                    <br/>
                    uurtjes
                </div>
            </div>
        </div>
    </div>
)