import { useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { navlinks } from "./navlinks";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import "./css/navmenu.scss"
import { BsArrowRight } from "react-icons/bs"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0.01px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

function Dimensions(ref) {
  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref])

  const dimensions = useRef({ width: 0, height: 0 });
  return dimensions.current
}

export default function NavMenu() {
  const { isOpen } = useContext(Context)
  const containerRef = useRef(null)
  const { height } = Dimensions(containerRef)

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="framer_menu"
    >
      <motion.div className="framer_bg" variants={sidebar} />
      <Navigation />
    </motion.div>
  )
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    visibility: "visible",
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    visibility: "hidden",
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const variantsNav = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

function Navigation() {
  const { toggleOpen } = useContext(Context)

  function toggleSubmenu() {
    alert()
  }

  return (
    <div>
      <motion.ul variants={variantsNav} className="main_ul">
        {
          navlinks.map((e, i) => {
            return (
              <>
                <motion.li
                  key={i}
                  onClick={() => toggleOpen()}
                  variants={variants}>
                  <Link onMouseOver={toggleSubmenu} to={e.href}>{e.title} {!e.sublink ? "" : <BsArrowRight />}</Link>
                  {
                    !e.sublink ? <span></span> :
                      <motion.ul variants={variantsNav} className="sub_ul">
                        {
                          e.sublink.map((e, i) => {
                            return (
                              <>
                                < motion.li
                                  key={i}
                                  onClick={() => toggleOpen()}
                                  variants={variants}>
                                  <Link to={e.href}>{e.title} {!e.sublink ? "" : <BsArrowRight />}</Link>
                                  {
                                    !e.sublink ? <span></span> :
                                      <motion.ul variants={variantsNav} className="sub_sub_ul">
                                        {
                                          e.sublink.map((e, i) => {
                                            return (
                                              <>
                                                < motion.li
                                                  key={i}
                                                  onClick={() => toggleOpen()}
                                                  variants={variants}>
                                                  <Link to={e.href}>{e.title}</Link>
                                                </motion.li>
                                              </>
                                            )
                                          })
                                        }
                                      </motion.ul>
                                  }
                                </motion.li>
                              </>
                            )
                          })
                        }
                      </motion.ul>
                  }
                </motion.li>
              </>
            )
          })
        }
      </motion.ul >
    </div>
  )
}