import { motion } from 'framer-motion'
import { Code, Palette, Zap, Star, Heart, Coffee } from 'lucide-react'

const FloatingElements = () => {
  const icons = [
    { Icon: Code, delay: 0, duration: 20, x: '10%', y: '20%' },
    { Icon: Palette, delay: 2, duration: 25, x: '80%', y: '15%' },
    { Icon: Zap, delay: 4, duration: 18, x: '15%', y: '70%' },
    { Icon: Star, delay: 1, duration: 22, x: '85%', y: '60%' },
    { Icon: Heart, delay: 3, duration: 24, x: '50%', y: '10%' },
    { Icon: Coffee, delay: 5, duration: 19, x: '90%', y: '80%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, index) => {
        const Icon = item.Icon
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-12 h-12 text-primary/20 dark:text-primary/30" />
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingElements
