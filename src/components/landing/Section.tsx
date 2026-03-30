import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image, imageAlt, imagePosition = 'right', tag }: SectionProps) {
  const hasImage = !!image

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center overflow-hidden">
      {hasImage ? (
        <div className={`flex h-full w-full items-center ${imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10">
            {tag && (
              <motion.p
                className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                {tag}
              </motion.p>
            )}
            <motion.h2
              className="text-3xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight max-w-xl text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            {content && (
              <motion.p
                className="text-lg md:text-xl max-w-lg mt-6 text-neutral-400 leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {content}
              </motion.p>
            )}
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-amber-400 bg-transparent border-amber-400 hover:bg-amber-400 hover:text-black transition-colors font-semibold"
                >
                  {buttonText}
                </Button>
              </motion.div>
            )}
          </div>
          <motion.div
            className="flex-1 h-full relative"
            initial={{ opacity: 0, x: imagePosition === 'right' ? 80 : -80 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${imagePosition === 'right' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#060606] via-transparent to-transparent`} />
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24">
          {subtitle && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 md:mt-16"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-amber-400 bg-transparent border-amber-400 hover:bg-amber-400 hover:text-black transition-colors font-semibold"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      )}
    </section>
  )
}
