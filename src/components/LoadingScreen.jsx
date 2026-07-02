import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-semibold text-mist-100"
          >
            <span className="text-azure-300">{"<"}</span>
            Vinoth
            <span className="grad-text">.T</span>
            <span className="text-azure-300">{" />"}</span>
          </motion.div>
          <div className="mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-full bg-grad-primary"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
