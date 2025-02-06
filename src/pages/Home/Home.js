import React from 'react';
import { motion } from 'framer-motion';
import './Home.scss';
import CustomSlider from '../../components/CustomSlider'

const Home = () => {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="hero-section">
        <CustomSlider />
      </section>

    </motion.div>
  );
};

export default Home;