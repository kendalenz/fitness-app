import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from '@/shared/HText';
import Class from "./Class";
import { motion } from "framer-motion";
import { SelectedPage, ClassType } from '@/shared/types'

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Gain strength, confidence and community in this one-of-a-kind class scientifically made to push you to your edge. Ditch the cardio and use heavy weights to challenge every muscle group. An Equinox exclusive.",
    image: image1
  },
  {
    name: "Yoga Classes",
    description: "Whether you’re looking for a challenging experience or a beginner yoga class near you, EvoGym members enjoy access to a wide array of yoga classes in our state-of-the-art studios - and digitally as well through EvoGym+.",
    image: image2
  },
  {
    name: "Core Classes",
    description: "Power your most important parts. Enhance your core, back strength, and flexibility with a workout that makes you stand straighter, walk taller, and move better.",
    image: image3
  },
  {
    name: "Sculpt Classes",
    description: "If long and lean body is your goal, our challenging conditioning classes will push you to sculpt, tone, and burn toward your transformation. You will build strength, endurance and shape every muscle in your body.",
    image: image4
  },
  {
    name: "HIIT Classes",
    description: "We offer every HIIT workout imaginable raging from Tabata-style workouts to HIIT weight training for optimum results",
    image: image5
  },
  {
    name: "Stretch and Recovery Classes",
    description: "Stretch and Recovery are vital parts of a high-performance lifestyle. Reboot your body post-performance with stretching workouts focusing on self-massage and controlled breathing techniques.",
    image: image6
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fitness classes at Evogym are experiences, created, and developed by the industry’s best minds bringing results through innovation.
            </p>
          </div>
          </motion.div>
          <div
            className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"
          >
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index) => (
                <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </motion.div>
    </section>
  );
};

export default OurClasses;
