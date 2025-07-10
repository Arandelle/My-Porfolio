import React from "react"

type ContentProps = {
  name: string;
  description: string;
};

const Content: React.FC<ContentProps> = ({name, description}) => {
  return (
    <div className='flex-grow'>
        <p className='font-extrabold text-amber-500/70 text-center text-[60px] mt-12'>
        {name}
        </p>
        <p className='text-center text-gray-500 font-bold text-lg'>
          {description}
        </p>
    </div>
  )
}

export default Content
