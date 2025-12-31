import { motion } from "framer-motion";

const experiences = [
    {
        role: "Frontline Support Specialist",
        company: "SalesHunterThemes",
        startDate: "April 2025",
        endDate: "Till present",
        description: [
          "Provided tier-1 technical support and troubleshooting.",
          "Documented issues and escalated complex problems to engineering.",
          "Trained new agents on support best practices.",
        
        ],
      },
    {
    role: "Front-line Customer Support Specialist",
    company: "PageFly",
    startDate: "March 2023",
    endDate: "April 2025",
    description: [
      "Provided customer support for Shopify app users with a focus on quick resolution.",
      "Collaborated with development to fix bugs and improve app UX.",
      "Handled technical troubleshooting and account escalations.",
    ],
  },
  {
    role: "Call Center Agent",
    company: "ISON BPO International",
    startDate: "July 2019",
    endDate: "February 2023",
    description: [
      "Managed inbound and outbound calls for MTN and Airtel Nigeria.",
      "Maintained high customer satisfaction with professional communication.",
      "Resolved billing and technical issues efficiently.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-1xl mx-auto"
      aria-label="Work experience timeline"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <ol className="relative border-l border-primary ml-4 space-y-10">
        {experiences.map(({ role, company, startDate, endDate, description }, idx) => (
          <motion.li
            key={idx}
            className="mb-6 ml-6 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {/* Timeline Dot */}
            <span className="absolute -left-6 top-2 w-4 h-4 bg-primary rounded-full ring-4 ring-white dark:ring-gray-900"></span>

            <article>
              <header className="mb-2">
                <h3 className="text-xl font-semibold">{role}</h3>
                <p className="text-primary font-medium">{company}</p>
                <time className="text-sm text-gray-600 dark:text-gray-400">
                  {startDate} - {endDate}
                </time>
              </header>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                {description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
