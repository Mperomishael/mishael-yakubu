import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  number: string;
  title: string;
  icon: string;
  items: string[];
  index: number;
}

export default function FeatureCard({ number, title, icon, items, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-[#212121] rounded-2xl p-5 sm:p-6 flex flex-col h-full min-h-[280px] lg:min-h-0"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" />

      <h3 className="mt-6 text-primary text-lg sm:text-xl font-medium">
        <span className="text-gray-500 mr-2">{number}</span>
        {title}
      </h3>

      <ul className="mt-4 space-y-2.5 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="group mt-6 inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm self-start"
      >
        Learn more
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          style={{ transform: "rotate(-45deg)" }}
        />
      </a>
    </motion.div>
  );
}
