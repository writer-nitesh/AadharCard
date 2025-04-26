import Image from "next/image";
import Aadhaar from "../../../public/Aadhaar_Logo.svg";
import Emblem from "../../../public/Emblem_of_India.svg";
import OrangeStripe from "../../../public/stripe1.svg";
import GreenStripe from "../../../public/stripe2.svg";

export default function Header() {
    return (
        <div className="flex w-full justify-between mt-3">
            <Image src={Emblem} className="size-10 ml-2" alt="Emblem_of_India" />
            <div className="flex flex-col items-center align-middle font-medium w-96 relative">
                <span>
                    <p className="z-10 relative">भारत सरकार</p>
                    <Image
                        src={OrangeStripe}
                        className="w-56 absolute left-20 top-0 transform  fill-orange-400"
                        alt="Orange Stripe"
                    />
                </span>
                <span>
                    <p className="z-10 relative">Government of India</p>
                    <Image
                        src={GreenStripe}
                        className="w-56 absolute left-20 top-7 transform  fill-orange-400"
                        alt="Orange Stripe"
                    />
                </span>
            </div>
            <Image src={Aadhaar} className="h-9 w-auto mr-2" alt="Aadhaar_Logo" />
        </div>
    )
}
