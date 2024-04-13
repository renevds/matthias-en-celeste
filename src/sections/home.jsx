import {ChevronDown} from "lucide-react";

export const Home = () => (
    <div className="w-full h-screen bg-black bg-image flex flex-col">
        <div className="w-full grow flex justify-center lg:grid lg:grid-cols-2">
            <div/>
            <div className="text-white flex justify-center items-center mb-half">
                <div className="text-center lg:mr-20 opacity-90">
                    <div className="uppercase lg:text-6xl text-3xl lg:mb-6 mb-3 font-tenor font-bold">Céleste</div>
                    <div className="lg:text-5xl text-3xl lg:mb-6 mb-3 font-parisienne">en</div>
                    <div className="uppercase  lg:text-6xl text-3xl lg:mb-10 mb-5 font-tenor font-bold">Matthias</div>
                    <div className="lg:text-4xl text-2xl font-tenor">29.06.2024</div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center text-white h-40">
            <ChevronDown className="h-10 w-10"/>
        </div>
    </div>
)