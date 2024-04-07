export const Section1 = () => (
    <div className="w-full flex justify-center mt-4">
        <div className="container-section">
            <img src="date_opt.svg"
                 className="absolute h-[650px] bottom-0 left-0
                 -translate-x-[65%] translate-y-1/2 bg-b
                 opacity-50 lg:block hidden"/>
            <img src="foto1.png" className="w-[270px] hidden lg:inline-block"/>
            <div className="lg:grow flex lg:justify-end lg:text-end text-start">
                <div>
                    <div className="text-title font-tenor font-medium">DE UITNODIGING</div>
                    <div className="text-gray-600 text-normal font-extralight">
                        <div>
                            Graag nodigen wij u uit voor ons
                            <br/>
                            huwelijksfeest op 29 juni 2024.
                        </div>
                        <button className="lg:mt-16 mt-4 border px-4 py-2 text-small">Bevestig hier uw aanwezigheid.
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-full overflow-visible relative lg:hidden grow ml-4">
                <img src="foto1.png" className="block left-0 top-0 absolute min-w-[120px]"/>
            </div>
        </div>
    </div>
)