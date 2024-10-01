import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: '-100%', opacity: 0 },
};

interface PagreTransitionProps{
    children: ReactNode
}

const PageTransition = ({ children }: PagreTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className='overflow-x-hidden overflow-y-auto'
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
