export const Section1 = () => (
    <div className="w-full flex justify-center">
        <div className="p-10 flex gap-20 items-center justify-center container-lg relative">
            <img src="date_opt.svg"
                 className="block absolute h-[650px] bottom-0 left-0 -translate-x-[65%] translate-y-1/2 opacity-50"/>
            <img src="uitnodiging.png" className="h-80"/>
            <div>
                <div className="text-3xl font-tenor font-medium">DE UITNODIGING</div>
                <div className="text-gray-600 text-xl font-extralight mt-4">
                    <div>
                        Graag wij u uit voor ons
                        <br/>
                        huwelijksfeest op 29 juni 2024.
                    </div>
                    <button className="mt-4 border px-3 py-2 text-lg">Bevestig hier uw aanwezigheid.</button>
                </div>
            </div>
        </div>
    </div>
)