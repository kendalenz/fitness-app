import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Soho - Luxury Fitness in SoHo, NYC",
    description: "Offering motivation, expertise, and a passion for healthy living, our personal trainers build personalized training programs for our members. Choose one-on-one sessions or keep your workouts fun and fresh with a variety of classes: Yoga, Barre, Boxing, Cycling, HIIT, and more."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Enjoy access to 11 class categories, including signature Cycling, high-intensity Boxing and Martial Arts classes, and sculpting Pilates sessions. All classes in the club and on the Equinox+ app are unlimited and included in your membership."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Personal Training",
    description: "Our expert personal trainers with over 150 hours of education will work with you to create a custom plan based on your goals that encompasses both in-club and at-home workouts—then guide you one-on-one through them all."
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
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
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Our magnetic SoHo club is inspired by the artists’ lofts perched above the iconic neighborhood's cobblestone streets and the area’s warm-toned brick and limestone. This high-energy club features challenging classes, a full-service Spa, and more.
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
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          >
          </img>
          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div
                className="
                  before:absolute 
                  before:-top-20 
                  before:-left-20 
                  before:z-[1] 
                  before:content-abstractwaves
                "
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
            >
              <p className="my-5">
                Offering motivation, expertise, and a passion for healthy living, our personal trainers build personalized training programs for our members. Choose one-on-one sessions or keep your workouts fun and fresh with a variety of classes: Yoga, Barre, Boxing, Cycling, HIIT, and more.              
              </p>
              <p className="mb-5">
                Every class is booked in advance and complimentary to you as a member.
              </p>
            </motion.div>
            {/* Button */}
            <div
              className="relative mt-16">
              <div
                className="
                  before:absolute 
                  before:-bottom-20 
                  before:right-40 
                  before:z-[-1] 
                  before:content-sparkles
                "
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