import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px", once: false });
  return (
    <motion.div
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      animate={"animate"}
      className="services"
      ref={ref}
    >
      <motion.div variants={variants} className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            asperiores enim sapiente quia iste iusto fugit minus ea facere
            voluptatibus, recusandae, ad laborum veritatis debitis voluptate
            itaque at et nostrum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            asperiores enim sapiente quia iste iusto fugit minus ea facere
            voluptatibus, recusandae, ad laborum veritatis debitis voluptate
            itaque at et nostrum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            asperiores enim sapiente quia iste iusto fugit minus ea facere
            voluptatibus, recusandae, ad laborum veritatis debitis voluptate
            itaque at et nostrum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            asperiores enim sapiente quia iste iusto fugit minus ea facere
            voluptatibus, recusandae, ad laborum veritatis debitis voluptate
            itaque at et nostrum.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
