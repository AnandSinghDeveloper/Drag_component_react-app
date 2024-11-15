import { data } from 'autoprefixer';
import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from 'react-icons/lu';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';


const Card = ({data,refrence}) => {

  console.log();
  
// conct data =
// icon dec ,filesize , cloesorDownload,taddetails




  return (
    <motion.div drag dragConstraints={refrence} dragTransition={{bounceStiffness:100, bounceDamping:30}} dragElastic={0.2}  whileDrag={{scale:1.1}} className=' relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
      <FaRegFileAlt /> {/* Corrected by making FaRegFileAlt a self-closing tag */}
      <p className='text-sm mt-5'>{data.desc}</p>
      <div className=' footer absolute w-full  bottom-0 left-0  '>

        <div className=' flex items-center justify-between mb-3 px-8 py-3  '>
            <h5>{data.fileSize}</h5>
            <span className='flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600 '>
               {
                data.close ? <IoClose /> :  <LuDownload size=".7em" color='#fff' />
               }
             
             </span>
            
       
       </div>

         {
          data.tag.isOpen && (<div className='tag w-full h-10  flex items-center justify-center  '     style={{ backgroundColor: data.tag.tagColor }}>
         
            <h3 className='  '> {data.tag.tagTitle}</h3>
         </div>)
         }

       
     </div>
      
   </motion.div>
  );
};

export default Card;
