import { motion } from "framer-motion";

export default function LocationPrompt() {
  return (
    <div className="mt-6 flex h-[80%] w-full justify-center">
      <motion.div
        className="text-primary flex h-full w-[94%] flex-col items-center justify-center gap-6 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        {/* pointer to the search bar above */}
        <motion.span
          className="text-[22px] opacity-60"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.span>

        {/* glowing location badge */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full bg-white/10"
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
            <svg
              className="h-9 w-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] leading-tight font-bold tracking-tight">
            Where are you?
          </h1>
          <p className="max-w-80 text-[15px] font-light opacity-60">
            Type a city or place in the search bar above to see its weather
            forecast.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
