import React from 'react'
import { BsGearFill } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'
import { LuHeadphones } from 'react-icons/lu'

function profileBadge() {
  return (
    <div className=' absolute bg-zinc-600 rounded-xl w-80 py-3 px-3 left-2 bottom-2 flex flex-row justify-between '>
       
       
        <div className=' w-fit justify-start items-center flex flex-row gap-2 '>
            <div className=' w-12 h-12 bg-green-500 rounded-full relative'>
                <img src="" alt="" />
                <div className=' h-5 w-5 rounded-full bg-zinc-800 absolute right-0 bottom-1 flex flex-row items-center justify-center'>
                    
                    <div className=' bg-green-500 h-3 w-3 rounded-full'></div>
                    </div>
                </div>
                    <div className=' flex text-white/90 flex-col items-start justify-center'>
                        <p className=' text-sm'>KanatOfficial</p>
                        <p className=' text-xs text-zinc-400'>Online</p>
                    </div>
                    
            </div>
                    <div className='flex flex-row gap-2 items-center'>
                      <FaMicrophone size={16} className='text-zinc-400'/>
                      <LuHeadphones size={16} className='text-zinc-400' />
                      <BsGearFill size={16} className='text-zinc-400' />
                            

        </div>        
        
    </div>
  )
}

export default profileBadge


//доделать иконки