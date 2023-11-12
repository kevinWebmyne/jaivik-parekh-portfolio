import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const experiences = [
  {
    id: 1,
    position: "Web Developer Intern",
    company: "Chai Sutta Bar",
    companyLink: "https://www.linkedin.com/company/chai-sutta-bar/?originalSubdomain=in",
    time: "July 15, 2021 - September 07, 2021",
    address: "Vadodara, Gujarat, INDIA",
    work: "Orchestrated for the company’s website, and maintained the data of more than 100 clients and frameworks. Basic understanding and implementation of Apache Hadoop.Experience in ways to provide customer service as well as infrastructure and send a daily report of test results to team members and got a success of 85 percent.",
  },
  {
    id: 2,
    position: "Software Developer",
    company: "Webmyne systems Pvt. ltd",
    companyLink: "https://www.linkedin.com/company/webmyne/",
    time: "August 23, 2022 - April 28, 2023",
    address: "Vadodara, Gujarat, INDIA",
    work: "Functioning as a software developer responsible for completing the training modules in open-source technologies. Completed hands-on experience in HTML, CSS, Javascript, PHP, and WordPress. On the basis of performance got the best employee award",
  },

];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div>
        <h3
          className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
          intial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {position}&nbsp;{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[50%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experiences.map(
            ({ id, position, company, companyLink, time, address, work }) => (
              <Details
                key={id}
                position={position}
                company={company}
                companyLink={companyLink}
                time={time}
                address={address}
                work={work}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
