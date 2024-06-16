import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { experiences } from "../Constants/experience"
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({experience}) => ( <VerticalTimelineElement contentStyle={{background: "#1d1836", color:"#fff"}}
  contentArrowStyle={{borderRight: "7px solid #232631"}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img  src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
    </div>
  }>
    <div className="font-InstagramSansBold">
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>
        {experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2 font-InstagramSans">
        {experience.points.map((point, index) => (
          <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
          ))
          }
      </ul>
    </div>
  </VerticalTimelineElement>)

const Experience = () => {
    return ( <div className=" flex flex-col my-16">
        <h1 className="font-Billabong text-white font-bold text-5xl hover:text-sidebarText
                    flex justify-center items-center m-8">{"< Experiences />"}</h1>
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience}/>
      ))
      }
    </VerticalTimeline>
  </div>)
}
export default Experience