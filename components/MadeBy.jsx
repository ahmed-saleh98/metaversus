'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { footerVariants } from '@/utils/motion';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaCodepen,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const MadeBy = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-10 `}
  >
    <div className={`${styles.innerWidth} flex mx-auto flex-col gap-8`}>
      <div className="flex flex-col">
        <div className=" mb-[30px] h-[2px] bg-white opacity-10" />
        <div className=" flex items-center justify-around flex-wrap gap-4">
          <h4 className=" font-extrabold text-xl text-white">
            Made with <span className="[color:red]">&#10084; </span> By Ahmed
            Saleh
          </h4>

          <div className="social-links ">
            <ul className=" flex gap-4 text-white transition">
              <li>
                <a
                  className="facebook"
                  target="_blank"
                  href="https://www.facebook.com/abusaleh1998"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/ahmed_saleh_98"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className="whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=+20 01273698284"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  className="website"
                  target="_blank"
                  rel="noreferrer"
                  href="https://ahmedmsaleh98.wordpress.com"
                >
                  <FaGlobe />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ahmed-mo-saleh"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ahmed-saleh98"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  className="codepen"
                  target="_blank"
                  rel="noreferrer"
                  href="https://codepen.io/ahmed-saleh98"
                >
                  <FaCodepen />
                </a>
              </li>
              <li>
                <a
                  className="mail"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:ahmed.mohamed.saleh1998@gmail.com"
                >
                  <HiMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default MadeBy;
