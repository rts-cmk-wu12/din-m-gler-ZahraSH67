
import Link from 'next/link';
import ContactHeader from './ContactHeader';
import OptionsHeader from './OptionsHeader';
import building from "@/assets/images/building.png"
import Image from 'next/image';
import errorIcon from "../assets/images/errorIcon.jpg"
import galleryPic from "@/assets/images/galleryPic.png"
import Footer from './Footer';


export default function ErrorPage() {
  return (
    <div>
            <ContactHeader />
            <OptionsHeader />
            <section className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center px-6">
                <Image src={errorIcon} alt="errorIcon" height={400} width={400}/>
                <h2 className="mt-4 text-lg font-semibold">
                    Du er havnet på en side som ikke findes!
                </h2>
                <p className="mt-2 text-gray-700 mb-[2em]">
                    Det er vi kede af! Vi har sendt en besked af sted til vores <br/>
                    internetbureau, og bedt dem se på fejlen.
                </p>
                <Link href="/" className='bg-customBlue text-white p-[1em]'>
                
                    Tilbage til forsiden
                
                </Link>
            </section>
            <section className=' flex flex-col  bg-errorFooter text-white'>
            <div className='flex justify-evenly p-x[2em] py-[4em]'>
                    <div className=''>
                        <div className='flex gap-[0.5em]'>
                            <Image src={building} alt="building icon " className='w-[1em] h-full'/>
                            <h3 className='font-bold'>Ghor Bari</h3>
                        </div>
                        <p className='my-[2em] text-gray-300 text-sm'>There are many variations of passages <br/> Lorem Ipsum available,
                             but the majority is <br/> have suffered alteration.
                        </p>
                        <div>
                            <h4 className='font-bold text-sm text-gray-300 '>Business Hour</h4>
                            <p className='text-sm text-gray-300 '>Monday - Friday 10:00am - 06:00pm</p>
                        </div>
                    </div>


                    <div className=''>
                        <h4 className='font-bold mb-[2em]'>Important Links</h4>
                        <div className='flex gap-[2em]'>
                        <ul className='flex flex-col gap-[0.5em] text-sm text-gray-300 '>
                            <li> 
                                <Link href="/">Our Services</Link>
                            </li>
                            <li>
                                <Link href="/">Privacy</Link>
                            </li>
                            <li>
                            <Link href="/">Contacts</Link>
                            </li>
                            <li>
                            <Link href="/">Meet Our Team</Link>
                            </li>
                            <li>
                            <Link href="/">Help Desk</Link>
                            </li>
                        </ul>


                        <ul className='flex flex-col gap-[0.5em] text-sm text-gray-300 '>
                            <li> 
                                <Link href="/">Our Services</Link>
                            </li>
                            <li>
                                <Link href="/">Privacy</Link>
                            </li>
                            <li>
                            <Link href="/">Contacts</Link>
                            </li>
                            <li>
                            <Link href="/">Meet Our Team</Link>
                            </li>
                            <li>
                            <Link href="/">Help Desk</Link>
                            </li>
                        </ul>

                        </div>
                        
                    </div>
                    <div>
                        <h4 className='font-bold mb-4'>Follow Instagram</h4>
                        <Image src={galleryPic} alt="galleryPic" height={200} width={200}/>
                    </div>
                </div>

                <div className='w-[50em] mx-auto border-b-2 border-gray-200 mt-[2em] mb-[1em]'></div>

                <div className='text-center mb-[2em] text-sm text-gray-300 '>All Right Reserve By Jit Banik 2020</div>
            </section>
          
            <Footer />
           
    </div>
  );
    

}
