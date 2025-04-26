/**
 * Aadhar Footer Component
 * 
 * @param {Object} props
 * @param {string} props.aadharId - Formatted Aadhaar number (e.g., "1234 5678 9012").
 * @param {string} props.vid - Formatted VID number (e.g., "1234 5678 9012 3456").
 * @returns {JSX.Element}
 */

export default function Footer({ aadharId, vid }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <span className='font-bold '>{aadharId}</span>
                <span className='text-sm'>VID : {vid}</span>
            </div>
            <hr className="h-0.5 bg-red-500 border-none" />

            <span className="flex justify-center font-bold p-1 text-xl">
                मेरा
                &nbsp;
                <span className="text-red-500">आधार</span>,
                मेरी पहचान
            </span>
        </>
    )
}
