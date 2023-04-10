'use client';
import { motion } from 'framer-motion';

import styles from '@/styles';
import { fadeIn, staggerContainer, zoomIn } from '@/utils/motion';
import { TitleText, TypingText } from '@/components';

const World = () => (
  <section id="people" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles=" text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-16  flex w-full max-h-[550px]
        "
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <motion.div
          variants={zoomIn(1, 0.5)}
          className={`${styles.mapPerson} md:bottom-20  md:right-20 lg:bottom-24 lg:right-24 bottom-14 right-5 `}
        >
          <img src="people-01.png" alt="people" className="w-full h-full" />
          <div className="map-person-ancor" />
        </motion.div>
        <motion.div
          variants={zoomIn(0.6, 0.5)}
          className={`${styles.mapPerson}  top-0 sm:left-10 md:left-24 md:top-5`}
        >
          <img src="people-02.png" alt="people" className="w-full h-full" />
          <div className="map-person-ancor" />
        </motion.div>
        <motion.div
          variants={zoomIn(0.8, 0.5)}
          className={`${styles.mapPerson}  top-1/4 left-[40%]  md:top-1/3`}
        >
          <img src="people-03.png" alt="people" className="w-full h-full" />
          <div className="map-person-ancor" />
        </motion.div>

        <motion.div
          variants={zoomIn(0.8, 0.5)}
          className="hidden lg:flex absolute rounded-[32px] bg-[#5d668086] p-2 top-[25%] left-[15%] w-[260px] "
        >
          <img
            src="Map-mask-1.png"
            alt="mapMask"
            className="w-full object-cover"
          />
          <div className="flex absolute flex-wrap  ml-4 bottom-[15%]">
            <ul className="flex ">
              <li className="z-20">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-[30px] h-[30px]"
                />
              </li>
              <li className="z-10 relative right-3">
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-[30px] h-[30px]"
                />
              </li>
              <li className=" relative right-6">
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-[30px] h-[30px]"
                />
              </li>
            </ul>
            <p className="text-white -ml-2 ">+ 264 has joined</p>
            <h4 className=" font-bold text-white text-lg mt-4">
              The Upside Down
            </h4>
          </div>
        </motion.div>
        <motion.div
          variants={zoomIn(0.6, 0.5)}
          className="hidden lg:flex absolute rounded-[32px] 
          bg-[#5d668086] p-2 top-[5%] right-[15%] w-[260px] "
        >
          <img
            src="Map-mask-2.png"
            alt="mapMask"
            className="w-full object-cover"
          />
          <div className="flex absolute flex-wrap  ml-4 bottom-[15%]">
            <ul className="flex ">
              <li className="z-20">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-[30px] h-[30px]"
                />
              </li>
              <li className="z-10 relative right-3">
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-[30px] h-[30px]"
                />
              </li>
              <li className=" relative right-6">
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-[30px] h-[30px]"
                />
              </li>
            </ul>
            <p className="text-white -ml-2 ">+ 264 has joined</p>
            <h4 className=" font-bold text-white text-lg mt-4">Hawkins Labs</h4>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
