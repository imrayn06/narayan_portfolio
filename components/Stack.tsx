import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaGoogle, FaSearch, FaFacebook, FaWordpress, FaInstagram, FaPenNib } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb, SiExpress, SiCanva, SiGoogleanalytics, SiMailchimp } from 'react-icons/si'



const stackItems = [
  {
    id: 1,
    name: 'MERN Stack',
    icon: FaReact,
    color: '#00D8FF',
  },
  {
    id: 2,
    name: 'WordPress',
    icon: FaWordpress,
    color: '#21759B',
  },
  {
    id: 3,
    name: 'SEO & Local SEO',
    icon: FaSearch,
    color: '#FACC15',
  },
  {
    id: 4,
    name: 'Google Analytics',
    icon: SiGoogleanalytics,
    color: '#F97316',
  },
  {
    id: 5,
    name: 'Google Tools',
    icon: FaGoogle,
    color: '#4285F4',
  },
  {
    id: 6,
    name: 'Meta Ads',
    icon: FaFacebook,
    color: '#1877F2',
  },
  {
    id: 7,
    name: 'Canva & Design',
    icon: SiCanva,
    color: '#00C4CC',
  },
  {
    id: 8,
    name: 'HTML5',
    icon: FaHtml5,
    color: '#FF4500',
  },
  {
    id: 9,
    name: 'CSS3',
    icon: FaCss3,
    color: '#1E90FF',
  },
  {
    id: 10,
    name: 'Email Marketing',
    icon: SiMailchimp, // import from react-icons/si
    color: '#FF9900',
  },
  {
    id: 11,
    name: 'Content Marketing',
    icon: FaPenNib, // import from react-icons/fa
    color: '#8B5CF6',
  },
  {
    id: 12,
    name: 'Social Media Management',
    icon: FaInstagram, // or FaFacebook, depending on your focus
    color: '#E1306C',
  },
];


function Stack() {
  return (
    <section id='stack' className='py-16 glass font-black '>
      <div className='max-w-[1200px] mx-auto px-4 text-center'>
        <h2 className='text-5xl text-gray-200 font-black mb-10'>
          My Stack
        </h2>
        <div className='grid sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 '>
          {stackItems.map((item)=>(
            <div key={item.id}
            className='flex items-center justify-center flex-col rounded-xl px-2'>
                <div className='mb-4 bg-white/10 p-6 rounded-xl'>
                  {React.createElement(item.icon,{
                    className:"w-32 h-32",
                    style: {color: item.color}
                  })}
                </div>
                <p className='text-gray-100 font-semibold'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Stack