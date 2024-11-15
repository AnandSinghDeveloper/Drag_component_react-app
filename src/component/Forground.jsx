import React, { useRef } from 'react';
import Card from './Card';

const Forground = () => {

 const ref =useRef(null)

  const data = [
    {
      desc: " Hello anand this is your first card component and code is working properlly ",
      fileSize: '0.9mb',
      close: true,
      tag: { isOpen: true, tagTitle:"Hello Anand", tagColor: "blue" }
    },
    {
      desc: " Hello anand this is your first card component and code is working properlly ",
      fileSize: '0.9mb',
      close: false,
      tag: { isOpen: true, tagTitle: " React App" , tagColor: "green" }
    },
    {
      desc: " Hello anand this is your first card component and code is working properlly ",
      fileSize: '0.9mb',
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
    }
  ];

  return (
    <div ref={ref} className='fixed z-[3] left-0 top-0 w-full h-full flex flex-wrap gap-10 p-5'>
      {
        data.map((item, index) => (
          <Card key={index} data={item} refrence={ref} />
        ))
      }
    </div>
  );
};

export default Forground;
