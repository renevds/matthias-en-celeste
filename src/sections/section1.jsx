export const Section1 = () => (
    <div className="w-full flex justify-center">
        <div className="p-10 flex items-center max-w-[900px] w-full relative">
            <img src="date_opt.svg"
                 className="block absolute h-[650px] bottom-0 left-0
                 -translate-x-[65%] translate-y-1/2 bg-b
                 opacity-50"/>
            <img src="uitnodiging.png" className="h-[350px]"/>
            <div className="grow flex justify-end text-end">
                <div>
                    <div className="text-3xl font-tenor font-medium">DE UITNODIGING</div>
                    <div className="text-gray-600 text-2xl font-extralight mt-4">
                        <div>
                            Graag wij u uit voor ons
                            <br/>
                            huwelijksfeest op 29 juni 2024.
                        </div>
                        <button className="mt-4 border px-3 py-2 text-xl">Bevestig hier uw aanwezigheid.</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)