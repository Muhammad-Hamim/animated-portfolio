import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id incidunt mollitia nihil ducimus at hic beatae voluptas omnis iusto, a error veniam rerum vero ad nam facilis adipisci quas molestiae.",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id incidunt mollitia nihil ducimus at hic beatae voluptas omnis iusto, a error veniam rerum vero ad nam facilis adipisci quas molestiae.",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id incidunt mollitia nihil ducimus at hic beatae voluptas omnis iusto, a error veniam rerum vero ad nam facilis adipisci quas molestiae.",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id incidunt mollitia nihil ducimus at hic beatae voluptas omnis iusto, a error veniam rerum vero ad nam facilis adipisci quas molestiae.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imgContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
