import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import QRCode from "react-qr-code";

export default function BackFace({ data }) {
    const { address, id } = data
    return (
        <div className="h-[430] w-[700] p-1 rounded-lg border-2 shadow-md bg-white  border-neutral-50">
            <Header />

            <div className="flex p-2 mx-2 gap-4 mt-1 relative h-[270]">
                <div className="flex flex-col gap-1">
                    <span>पता:</span>
                    <span>
                        {address.hindi}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span>Address:</span>
                    <span>
                        {address.english}
                    </span>
                </div>
            </div>

            {/* Bottom */}

            <Footer aadharId={id.aadhar.aadhar_no} vid={id.aadhar.vid} />
        </div>
    )
}
