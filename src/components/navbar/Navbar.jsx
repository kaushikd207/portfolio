import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Kaushik Dev
        </motion.span>
        <div className="social">
          <a
            href="https://mail.google.com/mail/u/0/#all?compose=CllgCJTGmXXDnXVnWwQhCVNjTlTpGBRzDRQbdZhBnCPXHFqGTDpJMkLkjSLPGJShKHhlTLvcNWg"
            target="_blank"
          >
            <img src="/gmail.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/kaushikd207/" target="_blank">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="https://linkedin.com/in/kaushikd207" target="_blank">
            <img src="/linkedIn.png" alt="" />
          </a>
          <a href="https://github.com/kaushikd207" target="_blank">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
