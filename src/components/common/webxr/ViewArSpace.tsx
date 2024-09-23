// ViewArSpace.tsx
import React from 'react';
import { ArIcon } from './assets'; // Ensure ArIcon2 is correctly imported
import Image from 'next/image';
const ViewArSpace: React.FC = () => {
  return (
    <button>
      <div className='text-sm flex gap-3 text-white flex-row backdrop-blur-lg justify-center w-[14rem] items-center mb-5 border border-white p-2 rounded-full hover:bg-[#ffffff2c]'>
        <Image src={ArIcon } alt='Ar view Button'/>
         View in your space
      </div>
    </button>
  );
};

export default ViewArSpace;
