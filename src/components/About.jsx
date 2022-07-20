import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#C53634]'>
              About
            </p>
          </div>

          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Andrés, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              Basically I've been looking for an opportunity as a Developer for years 
              but there has never been an opportunity 
              but now I've been learning, practicing 
              and becoming passionate about programming. 
              I'm building functional software that helps those around me 
              and because I have important reasons. 
              I love the challenge of finding a way and discovering solutions. 
              Together, let's build something truly special.
              </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default About