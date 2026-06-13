import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

// Higher-order component that anchors a section, applies consistent padding,
// and triggers a staggered scroll-in animation for its children.
const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative scroll-mt-24"
      >
        <span id={idName} className="absolute -top-24" aria-hidden="true" />
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
