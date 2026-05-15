'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  title: React.ReactNode;   // 👈 important (string + JSX dono allow)
  subtitle?: string;
  children?: React.ReactNode;
};

export default function AnimatedHeader({
  title,
  subtitle,
  children = null,
}: Props) {
  return (
    <div className="text-center mb-12 md:mb-16">

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}

      {children}
    </div>
  );
}