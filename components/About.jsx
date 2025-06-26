import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Hello! I&apos;m Aashan Khan, a passionate software developer and problem solver. Currently, I&apos;m the CO-Founder of TechTribe Software Company, where I lead a talented team delivering innovative software solutions globally. I have a strong presence on Upwork, with over many successful projects completed for international clients.

I&apos;m a developer with experience in JavaScript, Python, and modern web technologies. I specialize in frameworks such as React, Node.js, Next.js, and Three.js, along with expertise in automation, API integrations, and business software solutions. My knowledge also extends to project management, team leadership, and client satisfaction, making me well-versed in delivering high-quality software products.
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </div>
        <div className="w-fit break-words">
          <Link
            href="aashankhan2981@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            aashankhan2981@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/AashanKhan-Cv-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
