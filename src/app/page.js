import AadharCard from '@/components/Aadhar/aadharCard'
import { getAadharNumber, getPhoneNumber, getRandomDate, getVIDNumber } from '@/libs/utils'
export const dynamic = 'force-dynamic';

/**
 * Example person data object.
 * @type {import('@/components/Aadhar/aadharCard').Info}
 */
const person = {
  name: {
    hindi: "नरेन्द्र मोदी",
    english: "Narendra Modi"
  },
  dob: getRandomDate(),
  gender: "पुरुष/Male",
  mobile: getPhoneNumber(),
  id: {
    aadhar: {
      aadhar_no: getAadharNumber(),
      vid: getVIDNumber()
    }
  },
  address: {
    hindi: 'S/O जय जन्म पासवान, हाउस न. स्वतंत्र नगर, नरेला, नोर्थ वेस्ट देल्ही, देल्ही - 110040 ',
    english: 'S/O Jai Janam Paswan, house no. swatantra nagar, Narela, North West Delhi, Delhi 110040 '
  }
}

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-neutral-200'>
      <div className='lg:scale-100 md:scale-75 scale-50 '>
        <AadharCard info={person} />
      </div>
    </div>
  )
}
