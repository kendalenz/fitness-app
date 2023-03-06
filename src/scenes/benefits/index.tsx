import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Blah blah blah blah blah blah blah blah blah"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Blah blah blah blah blah blah blah blah blah"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Pro Trainers",
    description: "Blah blah blah blah blah blah blah blah blah"
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div 
          className="md:my-5 md:my-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide blah blah blah to all our members.  
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          variants={container}
          >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div>
          {/* Graphic */}
          <img>

          </img>
          {/* Description */}
          <div>
            {/* Title */}
            <div
              className="relative"
            >
              <div
                className="
                  before:absolute 
                  before:-top-20 
                  before:-left-20 
                  before:z-[1] 
                  before:content-abstractwaves
                "
              >
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span
                      className="text-primary-500"
                    >FIT</span>
                  </HText>
                </div>

              </div>
            </div>
            {/* Description */}
            <div>
              <p className="my-5">
                Master of One. Choreo Cult. Anthem. All classes at Equinox are created and developed by the industry's best minds and taught by talented fitness instructors who test your limits and inspire results.
              </p>

              <p className="mb-5">
                Every class is booked in advance and complimentary to you as a member.
              </p>
            </div>
            {/* Button */}
            <div
              className="relative mt-16"
            >
              <div
                className="
                  before:absolute 
                  before:-bottom-20 
                  before:right-40 
                  before:z-[-1] 
                  before:content-sparkles"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;