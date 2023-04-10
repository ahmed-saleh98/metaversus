'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.4, 1)}
    className=" flex md:flex-row flex-col gap-4 "
  >
    <img
      src={imgUrl}
      alt="palnet"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover "
    />
    <div className=" w-full flex justify-between items-center ">
      <div className="font-normal flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className=" lg:text-5xl text-2xl text-white ">{title}</h4>
        <p className="mt-4 lg:text-xl text-sm  text-secondary-white ">
          {subtitle}
        </p>
      </div>
      <div
        className="lg:flex hidden items-center justify-center 
                  w-[100px] h-[100px] rounded-full bg-transparent 
                  border-[1px] border-white cursor-pointer ml-2"
      >
        <img
          src="arrow.svg"
          alt="arrow"
          className=" w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
