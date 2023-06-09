'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';
import { InsightCard, TitleText, TypingText } from '@/components';
import { insights } from '@/constants';

const Insights = () => (
  <section id="insight" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="insight avout metaverse" textStyles="text-center" />
      <div className=" mt-12 flex flex-col gap-8">
        {insights.map((insight, i) => (
          <InsightCard key={`insight-${i}`} index={i + 1} {...insight} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
