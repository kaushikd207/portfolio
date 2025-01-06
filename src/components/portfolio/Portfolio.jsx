import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "VGLink",
    img: "/vgLink.webp",
    link: "https://vglink.canwebe.in/",
    desc: "VGLink is a cutting-edge digital visiting card application designed to revolutionize the way professionals network and share their information. Unlike traditional business cards, VGLink offers an all-in-one solution that includes detailed profiles with contact information, professional experiences, social media links, and a link tree for easy access to all your digital identities. With VGLink, you can seamlessly share your card with anyone, anywhere, eliminating the need for physical cards and reducing printing costs. Additionally, VGLink provides robust analytics tools that allow you to track the performance of your card, giving you insights into views, clicks, and engagements. Whether you’re an individual looking to enhance your personal brand or a company seeking custom-made cards for your team, VGLink offers tailored solutions to meet your needs. Join the VGLink community and experience a new age of digital networking with convenience and efficiency.",
  },
  {
    id: 2,
    title: "SilentShare",
    img: "/silentshare.png",
    link: "https://silentshare.canwebe.in/",
    desc: "SilentShare is a very useful App which helps you to share any documents,files & photos securely without losing your privacy.",
  },
  {
    id: 3,
    title: "FlowFine",
    img: "/flowfine.png",
    link: "https://flowfine.canwebe.in/welcome",
    desc: "Effortlessly manage tasks on-the-go with our user-friendly mobile app! With its lightweight and PWA features, it ensures seamless team collaboration without any lag. Best of all, it's completely free to use!",
  },
  {
    id: 4,
    title: "UnFunny",
    img: "/unfunny.png",
    desc: "It is a joke application.",
    link: "https://unfunny.netlify.app/",
  },
  {
    id: 5,
    title: "HGAMES",
    link: "https://hgames.netlify.app/",
    img: "/hgames.png",
    desc: "It is an online-based HTML5 game site, where you and your loved ones can play the game without the need to download.It has some new updated pwa features.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.link)}>See Live</button>
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
    <div className="portfolio" id="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
