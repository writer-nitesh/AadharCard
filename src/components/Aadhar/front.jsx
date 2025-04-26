import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import QRCode from "react-qr-code";

export default function FrontFace({ data }) {

    const { dob, gender, id, mobile, name } = data

    return (
        <div className="h-[430] w-[700] p-1 rounded-lg border-2 shadow-md bg-white  border-neutral-50 ">
            <Header />
            <div className="flex p-2 mx-2 gap-4 mt-1 relative">

                <div className=" h-64 w-52 border-2">
                    <Image
                        // src="https://images.pexels.com/photos/7397453/pexels-photo-7397453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        src="/India_PM_Narendra_Modi-2.webp"
                        height={100}
                        width={100}
                        className="h-full w-full object-cover object-top"
                        alt="profile-image"
                    />
                </div>

                <div className="gap-0.5 flex flex-col">
                    <div className="flex flex-col gap-0.5">
                        <span>{name.hindi}</span>
                        <span>{name.english}</span>
                    </div>
                    <div className="flex">
                        <span>जन्म तिथि/ DOB:  &nbsp;</span>
                        <span>
                            {new Date(dob).toLocaleDateString('en-US',)}
                        </span>
                    </div>
                    <div>
                        {gender}
                    </div>
                    <div>
                        <span>Mobile No. &nbsp;</span>
                        <span>{mobile}</span>
                    </div>

                </div>

                <div className="flex items-baseline justify-end absolute right-0 bottom-0 mr-5">
                    <div className="h-30 w-30">
                        <QRCode
                            value={JSON.stringify(data)}
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom */}

            <Footer aadharId={id.aadhar.aadhar_no} vid={id.aadhar.vid} />
        </div>
    )
}
