import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import video from "@/assets/video.mp4";

export function HeroSectionOne() {
  const navigate = useNavigate();

  return (
    <WavyBackground
      className="relative mx-auto max-w-7xl"
      backgroundFill="#faf9f5"
    >
      <div className="flex flex-col md:flex-row px-4 py-10 md:py-20">
        {/* Left side content */}
        <div className="w-full md:w-1/2 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mb-6 flex justify-center md:justify-start"
          >
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800 shadow-sm ring-1 ring-blue-200">
              Launched April 2025
            </div>
          </motion.div>
          <h1 className="relative z-10 text-center md:text-left text-2xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
            {"AI Consensus".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 py-4 text-center md:text-left text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            What makes IndiaAGI different from ChatGPT? ChatGPT gives you one
            answer based on what it knows. IndiaAGI brings together four AIs —
            ChatGPT, Gemini, Claude, and Grok — who debate and agree on the best
            answer after 3 rounds. It's the only place where AIs work together
            instead of competing. Want to see how it works? Just click “Explore
            Now.”
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <button
              onClick={() => {
                navigate("/trynow");
              }}
              className="group w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:cursor-pointer"
            >
              <span className="inline-flex items-center">
                Explore Now
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right side video section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center"
        >
          <div className="relative rounded-xl bg-gray-100 shadow-lg overflow-hidden aspect-video w-full border border-black p-2">
            <video
              className="w-full h-full overflow-hidden object-cover rounded-[calc(theme(borderRadius.lg)-1px)] border border-black"
              autoPlay
              muted
              loop
              controls
            >
              {/* Replace with your actual video source */}
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm text-center mt-2 text-gray-500">
            See AI Consensus in action
          </p>
        </motion.div>
      </div>
    </WavyBackground>
  );
}
