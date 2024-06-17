import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt }  from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className='flex flex-row justify-start items-start white-glassmorphism p-3 m-2 hover:shadow-xl animate-pulse hover:animate-none'>
        <div className={`mt-4 ml-3 w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='mt-0 text-white text-lg'>{title}</h1>
            <p className='mt-1 text-white text-sm md:w-9/12 font-light font-manrope'>{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className='flex lg:flex-row md:flex-col w-full justify-center items-center gradient-bg-services'> 
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 sm:flex-col'>
                <div className='flex-1 flex flex-col justify-center items-center text-center'>
                    <h1 className='text-white text-3xl sm:text-4xl py-2 text-gradient' >
                        Services that we <br /> continue to improve 
                    </h1>
                    <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base text-center font-manrope">
                        The best choice for buying and selling your crypto assets, with the
                        various super friendly services we offer
                    </p>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-start items-center'>
                <ServiceCard 
                    color='bg-[#2952E3]'
                    title='Security Guaranteed'
                    icon={<BsShieldFillCheck fontSize={21} className='text-white'/>} 
                    subtitle='Security is guaranteed. We always maintain privacy and quality of our product.'
                />
                <ServiceCard 
                    color='bg-[#8945F8]'
                    title='Best Exhange Rates'
                    icon={<BiSearchAlt fontSize={21} className='text-white'/>} 
                    subtitle='Security is guaranteed. We always maintain privacy and quality of our product.'
                />
                <ServiceCard 
                    color='bg-[#F84550]'
                    title='Fastest Transactions'
                    icon={<RiHeart2Fill fontSize={21} className='text-white'/>} 
                    subtitle='Security is guaranteed. We always maintain privacy and quality of our product.'
                />
            </div>
        </div>
    );
}

export default Services;