export const Section3 = () => (
    <div className="w-full flex justify-center bg-white mt-12">
        <div className="max-w-[900px] w-full relative h-[500px] lg:block hidden">
            <img src="foto_3_1.jpg" alt="de feestzaal" className="w-[400px] absolute right-0 top-8 -translate-y-1/3"/>
            <img src="foto_3_2.JPG" alt="matthias en celeste"
                 className="w-[550px] h-[400px] object-cover absolute top-1/2 -translate-y-1/2 z-10"/>
            <img src="foto_3_3.JPG" alt="matthias en celeste" className="w-[350px] absolute right-5 bottom-0 z-20 translate-y-1/4"/>
        </div>
        <div className="max-w-[900px] w-full relative h-[300px] lg:hidden block">
            <img src="foto_3_1.jpg" alt="de feestzaal" className="w-[200px] absolute -right-5 -translate-y-1/3"/>
            <img src="foto_3_2.JPG" alt="matthias en celeste"
                 className="w-[250px] h-[200px] object-cover absolute top-1/2 -translate-y-1/2 z-10 -left-5"/>
            <img src="foto_3_3.JPG" alt="matthias en celeste"
                 className="w-[200px] absolute bottom-0 translate-y-1/3 -right-4"/>
        </div>
    </div>
)