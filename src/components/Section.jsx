// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Cards } from "./Cards";

export const Section = ({ extensions = [], onToggle, onRemove }) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      <AnimatePresence>
        {extensions.map((extension) => (
          <motion.div
            key={extension.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}>
            <Cards {...extension} onToggle={onToggle} onRemove={onRemove} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
