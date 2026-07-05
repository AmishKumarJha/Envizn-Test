import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    end: 200,
    prefix: "+",
    suffix: "",
    label: "Active users",
  },
  {
    end: 10000,
    prefix: "+",
    suffix: "$",
    label: "Avg. profit p/m per client",
  },
  {
    end: 1200000,
    prefix: "+",
    suffix: "$",
    label: "Total capital",
  },
];

const Counter = ({ end, prefix, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("en-US")
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, end, count]);

  return (
    <h2
      ref={ref}
      className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight tabular-nums"
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </h2>
  );
};

const HeroStats = () => {
  return (
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">

      {stats.map((item, index) => (

        <motion.div

          key={index}

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{
            delay: 0.3 + index * 0.2,
          }}

          className="text-center"
        >

          <Counter end={item.end} prefix={item.prefix} suffix={item.suffix} />

          <p className="mt-2 text-[#9d9daa] text-sm md:text-base">

            {item.label}

          </p>

        </motion.div>

      ))}

    </div>
  );
};

export default HeroStats;