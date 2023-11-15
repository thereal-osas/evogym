import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "@/scenes/benefits/Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, natus"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, natus"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experts and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, natus"
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

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
          className="md:w-3/5 md:my-5"
          initial="hidden" 
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipments, trainers and classes that get you to your ultimate fitness goals with ease. We provide true care into each and every member
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="items-center justify-between gap-8 mt-5 md:flex"
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

        {/* Graphics and desc */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto" />

          {/* Desc */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden" 
                  whileInView="visible"
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0}
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}<span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden" 
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{ delay: 0.3, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: 50},
                visible: {opacity: 1, x: 0}
              }}
            >
              <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis harum saepe. Hic illum veritatis facilis, ut esse recusandae modi id fuga reprehenderit placeat aut odit perspiciatis sequi sed quisquam?</p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam officia sint nesciunt velit ad numquam esse voluptate pariatur illo?</p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits