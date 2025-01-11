import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';


const stackItems = [
  { id: 1, name: 'React', icon: FaReact, color: '#00D8FF' },
  { id: 2, name: 'Node.js', icon: IoLogoNodejs, color: '#3C873A' },
  { id: 3, name: 'MongoDB', icon: SiMongodb, color: '#00FA72' },
  { id: 4, name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { id: 5, name: 'HTML 5', icon: FaHtml5, color: '#FF4500' },
  { id: 6, name: 'CSS 3', icon: FaCss3, color: '#1E90FF' },
]

function Stack() {
  return (
    <section id='stack' className='py-16 glass '>
      <div className='max-w-[1200px] mx-auto px-4 text-center'>
        <h2 className='text-5xl text-gray-200 font-bold mb-10'>
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