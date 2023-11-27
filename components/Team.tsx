import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { bebasneue } from "@/app/layout";

const trainerData = [
  {
    name: "Dan",
    qualifications: [
      "Level 2 Gym Instructor",
      "Level 2 Circuit Instructor",
      "Level 3 Personal Trainer",
      "Level 3 Advanced Nutrition",
      "Indoor Rock Climbing & High Ropes Instructor",
    ],
    image: "/team/dan.jpeg",
    description:
      "Dan specializes in nutrition and body composition, offering guidance for those seeking to build muscle, gain strength, or lose fat and enhance their physique. He adopts a balanced approach, integrating both weight training and cardio in a 70/30 split. Dan emphasizes realistic and sustainable eating practices, making it easier for individuals to reach their fitness goals. Renowned for his down-to-earth approach, he doesn't sugarcoat information and aims to provide practical knowledge, debunking fitness and nutrition myths to set clients on the right path.",
    specialty:
      "Specializing in Nutrition and Weight Management, Dan offers expertise in helping individuals achieve their fitness goals, whether it's gaining lean muscle, shedding body fat, or a combination of both. Through personalized sessions, he not only guides clients in their journey but also imparts knowledge for sustainable self-management. Dan's approach goes beyond immediate results, empowering clients to continue their fitness journey independently.",
  },
  {
    name: "Mollie",
    qualifications: [
      "Level 1 Strength & Conditioning",
      "Level 2 Gym Instructor",
      "Personal Trainer",
      "Pound Fit",
      "First Aid",
    ],
    image: "/team/mollie.jpeg",
    description:
      "Molly manages classes, supports with Rehab sessions, conducts gym inductions, and handles reception duties. Her passion and enthusiasm drive her commitment to assisting individuals in their pursuit of self-improvement, whether sport-specific or for general health and development. Molly's keen interest in Strength and Conditioning is evident as she actively pursues additional UKSCA exams, enhancing her ability to work with athletes and sports teams.",
  },
];

const therapistData = [
  {
    name: "Laura",
    image: "/team/laura.jpeg",
    description:
      "With nearly two decades of experience in the Beauty Therapy industry, Laura holds a Higher National Diploma in Beauty Therapy since 1998 and has traversed various settings, from salons and spas to cruise ships. Her diverse background ensures a unique and unparalleled experience. Specializing in a range of massage techniques, Laura adeptly addresses muscle discomfort and enhances beauty for special occasions.",
  },
  {
    name: "Kirsty",
    image: "/team/kirsty.jpeg",
    description:
      "Kirsty, a self-employed Sports and Remedial Massage Therapist, boasts over 15 years of experience, fully qualified and insured. With a client-centric approach, she tailors treatments to individual needs, making them accessible to people of all ages and abilities. Kirsty practices at Life & Sole and in Aviemore, catering to a diverse clientele. Additionally, she finds fulfillment in providing massage therapy at various sporting events, from marathons to 24-hour endurance challenges. Kirsty is available at Life & Sole exclusively on Thursdays.",
  },
  {
    name: "Bryony",
    image: "/team/bryony.jpeg",
    description:
      "Bryony, a seasoned Nutritionist since 2012, has immersed herself in private practice, offering personalized nutritional guidance to a varied clientele. Her expertise extends from weight management to dietary support for chronic conditions. Alongside her clinic commitments, Bryony is a dedicated advocate for community wellness, conducting informative workshops and participating in local health initiatives. With a passion for holistic well-being, she brings a fresh and dynamic approach to nutrition.",
  },
  {
    name: "Andrew",
    image: "/team/andrew.jpeg",
    description:
      "Andrew, a Physiotherapist since 2009, specializes in private practice, excelling in areas like Post-Operative Orthopaedics, Stroke Rehabilitation, and Sports Injuries. His broad experience includes collaborating with diverse clientele. Beyond the clinic, Andrew actively participates in sports, often seen on the pitch or behind the scenes aiding in athlete rehabilitation. Notably, he served as Physiotherapist for the Highland League team, Lossiemouth FC, for over five years.",
  },
];

const Team = () => {
  return (
    <div className="text-center md:mt-20" id="team">
      <h1 className={`${bebasneue.className} text-center`}>Meet The Team</h1>

      <div className="justify-center items-center flex">
        <div className="flex flex-col lg:flex-row">
          <Tabs defaultValue="Dan" className="w-[400px] m-14">
            <h2 className={`${bebasneue.className} border-b border-[#ff0000]`}>
              Trainers
            </h2>
            <TabsList className="m-6 rounded-sm">
              {trainerData.map((trainer, index) => (
                <TabsTrigger
                  key={index}
                  value={trainer.name}
                  className="w-[80px] tracking-wider uppercase"
                >
                  {trainer.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {trainerData.map((trainer, index) => (
              <TabsContent
                key={index}
                value={trainer.name}
                className="items-center flex flex-col"
              >
                <div className="m-4 space-x-6 flex flex-row items-center justify-between">
                  <div>
                    <Image
                      src={trainer.image}
                      alt="trainer"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl p-2 text-left border-b border-black">
                      Qualifications
                    </h3>
                    <ul className="p-2 text-left list-disc">
                      {trainer.qualifications.map((qualification, index) => (
                        <li key={index}>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-left">{trainer.description}</p>
              </TabsContent>
            ))}
          </Tabs>

          <Tabs defaultValue="Laura" className="w-[400px] m-14">
            <h2 className={`${bebasneue.className} border-b border-[#ff0000]`}>
              Therapists
            </h2>
            <TabsList className="m-6 rounded-sm">
              {therapistData.map((therapist, index) => (
                <TabsTrigger
                  key={index}
                  value={therapist.name}
                  className="w-[80px] tracking-wider uppercase"
                >
                  {therapist.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {therapistData.map((therapist, index) => (
              <TabsContent
                key={index}
                value={therapist.name}
                className="items-center flex flex-col"
              >
                <div className="m-4">
                  <Image
                    src={therapist.image}
                    alt="therapist"
                    width={150}
                    height={150}
                  />
                </div>
                <p className="text-left">{therapist.description}</p>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Team;
