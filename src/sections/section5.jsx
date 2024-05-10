export const Section5 = () => (
    <div className="w-full flex justify-center bg-white">
        <div className="max-w-[900px] lg:py-16 py-8 px-8 w-full relative lg:grid grid-cols-2">
            <div>
                <img src="section_5.jpeg" alt="matthias en celeste"
                     className="object-cover lg:w-full w-full lg:h-[250px] h-[150px]" loading="lazy"/>
            </div>
            <div className="lg:text-end flex flex-col lg:items-end lg:mt-0 mt-4">
                <div className="text-title font-tenor">DE FOTO'S</div>
                <div className="text-normal text-gray-600 font-extralight">Na ons huwelijk kan je hier
                    <br/>
                    de mooiste kiekjes van ons en jezelf
                    <br/>
                    terugvinden!
                </div>
                <div className="grow"/>
                {/*<button className="custom-button">Bekijk hier de foto's</button>*/}
            </div>
        </div>
    </div>
)