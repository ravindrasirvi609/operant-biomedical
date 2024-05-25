import protfolio_details_1 from "@/assets/img/portfolio/Pharmanecia1_E.png";
import protfolio_details_2 from "@/assets/img/portfolio/pharmanecia2_E.png";
import protfolio_details_3 from "@/assets/img/portfolio/Pharmanecia3_E.png";
import protfolio_details_4 from "@/assets/img/portfolio/Pharmanecia4_E.png";
import protfolio_details_5 from "@/assets/img/portfolio/Pharmanecia5_E.png";
import protfolio_details_6 from "@/assets/img/portfolio/Pharmanecia6_E.png";
import pharmanecia3_E1 from "@/assets/img/testimonial/head_testimonial.jpg";
import pharmanecia3_E2 from "@/assets/img/portfolio/1B1A0810.jpg";
import pharmanecia3_E3 from "@/assets/img/portfolio/1B1A0823.jpg";
import pharmanecia3_E4 from "@/assets/img/portfolio/1B1A0938.jpg";
import pharmanecia3_E5 from "@/assets/img/portfolio/1B1A0952.jpg";
import pharmanecia3_E6 from "@/assets/img/portfolio/1B1A0961.jpg";
import { StaticImageData } from "next/image";

interface PortfolioDataType {
  id: number;
  title: string;
  client: string;
  services: string;
  date: string;
  images: StaticImageData[];
  challenges: string[];
  solutions: string[];
}

const portfolio_data: PortfolioDataType[] = [
  {
    id: 1,
    title:
      "Pharmaceutical and Clinical Research in India: Current Scenario, Challenges, Opportunities and Future Perspectives",
    client: "V. V. Institute of Pharmaceutical Sciences, Gudlavalleru",
    services: "Two day International Conference Pharmanecia'1.E",
    date: "25 & 26 September, 2018",
    images: [
      protfolio_details_6,
      protfolio_details_2,
      protfolio_details_3,
      protfolio_details_4,
      protfolio_details_5,
      protfolio_details_1,
    ],
    challenges: [
      "Design Welcome to our digital agency!",
      "Dev online. From website design Implementation world of digital.",
      "Implementation evolving world of digital Design Welcome to our digital agency!",
      "Launch growth and reach your goals. Implementation evolving world of digital.",
    ],
    solutions: [
      "Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.",
      "Welcome to our digital agency! We specialize in helping businesses like yours online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.",
    ],
  },
  {
    id: 2,
    title: "Project Two - Another Web And Mobile Application",
    client: "Another Company Inc, USA",
    services: "UX Research, Prototyping, UI Design",
    date: "01 Feb 2023 - 01 Mar 2023, 1 Month",
    images: [
      // Replace with actual image imports
      protfolio_details_1,
      protfolio_details_2,
      protfolio_details_3,
      protfolio_details_4,
      protfolio_details_5,
      protfolio_details_6,
    ],
    challenges: [
      "Another project design challenge 1",
      "Another project design challenge 2",
      "Another project design challenge 3",
      "Another project design challenge 4",
    ],
    solutions: [
      "Another project solution description 1.",
      "Another project solution description 2.",
    ],
  },
  {
    id: 3,
    title:
      "The Pharmanecia 3.E International Conference on Emerging Trends in Pharmaceutical Research",
    client:
      "Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune ",
    services: "One day International Conference Pharmanecia'3.E",
    date: "25 Febuary 2023",
    images: [
      pharmanecia3_E1,
      pharmanecia3_E5,
      pharmanecia3_E3,
      pharmanecia3_E4,
      pharmanecia3_E2,
      pharmanecia3_E6,
    ],
    challenges: [
      "Another project design challenge 1",
      "Another project design challenge 2",
      "Another project design challenge 3",
      "Another project design challenge 4",
    ],
    solutions: [
      "One of the key outcomes was the dissemination of cutting-edge research findings and insights. Participants presented their research through E-Posters and Oral Presentations, showcasing their novel discoveries and breakthroughs. This contributed to expanding the collective knowledge base in pharmaceutical research and paving the way for further exploration and development.",
      "The conference also facilitated networking and collaboration among attendees. Researchers had the opportunity to connect with experts in their respective fields, fostering meaningful partnerships and potential collaborations.",
      "The exchange of ideas and experiences during the conference led to the formation of new research alliances and initiatives aimed at addressing emerging challenges in the pharmaceutical industry.",
    ],
  },
  {
    id: 4,
    title:
      "The Pharmanecia 3.E International Conference on Emerging Trends in Pharmaceutical Research",
    client:
      "Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune ",
    services: "One day International Conference Pharmanecia'3.E",
    date: "25 Febuary 2023",
    images: [
      pharmanecia3_E1,
      pharmanecia3_E5,
      pharmanecia3_E3,
      pharmanecia3_E4,
      pharmanecia3_E2,
      pharmanecia3_E6,
    ],
    challenges: [
      "Another project design challenge 1",
      "Another project design challenge 2",
      "Another project design challenge 3",
      "Another project design challenge 4",
    ],
    solutions: [
      "One of the key outcomes was the dissemination of cutting-edge research findings and insights. Participants presented their research through E-Posters and Oral Presentations, showcasing their novel discoveries and breakthroughs. This contributed to expanding the collective knowledge base in pharmaceutical research and paving the way for further exploration and development.",
      "The conference also facilitated networking and collaboration among attendees. Researchers had the opportunity to connect with experts in their respective fields, fostering meaningful partnerships and potential collaborations.",
      "The exchange of ideas and experiences during the conference led to the formation of new research alliances and initiatives aimed at addressing emerging challenges in the pharmaceutical industry.",
    ],
  },
  {
    id: 5,
    title:
      "The Pharmanecia 3.E International Conference on Emerging Trends in Pharmaceutical Research",
    client:
      "Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune ",
    services: "One day International Conference Pharmanecia'3.E",
    date: "25 Febuary 2023",
    images: [
      pharmanecia3_E1,
      pharmanecia3_E5,
      pharmanecia3_E3,
      pharmanecia3_E4,
      pharmanecia3_E2,
      pharmanecia3_E6,
    ],
    challenges: [
      "Another project design challenge 1",
      "Another project design challenge 2",
      "Another project design challenge 3",
      "Another project design challenge 4",
    ],
    solutions: [
      "One of the key outcomes was the dissemination of cutting-edge research findings and insights. Participants presented their research through E-Posters and Oral Presentations, showcasing their novel discoveries and breakthroughs. This contributed to expanding the collective knowledge base in pharmaceutical research and paving the way for further exploration and development.",
      "The conference also facilitated networking and collaboration among attendees. Researchers had the opportunity to connect with experts in their respective fields, fostering meaningful partnerships and potential collaborations.",
      "The exchange of ideas and experiences during the conference led to the formation of new research alliances and initiatives aimed at addressing emerging challenges in the pharmaceutical industry.",
    ],
  },
  {
    id: 4,
    title:
      "The Pharmanecia 3.E International Conference on Emerging Trends in Pharmaceutical Research",
    client:
      "Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune ",
    services: "One day International Conference Pharmanecia'3.E",
    date: "25 Febuary 2023",
    images: [
      pharmanecia3_E1,
      pharmanecia3_E5,
      pharmanecia3_E3,
      pharmanecia3_E4,
      pharmanecia3_E2,
      pharmanecia3_E6,
    ],
    challenges: [
      "Another project design challenge 1",
      "Another project design challenge 2",
      "Another project design challenge 3",
      "Another project design challenge 4",
    ],
    solutions: [
      "One of the key outcomes was the dissemination of cutting-edge research findings and insights. Participants presented their research through E-Posters and Oral Presentations, showcasing their novel discoveries and breakthroughs. This contributed to expanding the collective knowledge base in pharmaceutical research and paving the way for further exploration and development.",
      "The conference also facilitated networking and collaboration among attendees. Researchers had the opportunity to connect with experts in their respective fields, fostering meaningful partnerships and potential collaborations.",
      "The exchange of ideas and experiences during the conference led to the formation of new research alliances and initiatives aimed at addressing emerging challenges in the pharmaceutical industry.",
    ],
  },
  {
    id: 5,
    title:
      "The Pharmanecia 3.E International Conference on Emerging Trends in Pharmaceutical Research",
    client:
      "Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune ",
    services: "One day International Conference Pharmanecia'3.E",
    date: "25 Febuary 2023",
    images: [
      pharmanecia3_E1,
      pharmanecia3_E5,
      pharmanecia3_E3,
      pharmanecia3_E4,
      pharmanecia3_E2,
      pharmanecia3_E6,
    ],
    challenges: [
      "Another project design challenge 1",
      "Another project design challenge 2",
      "Another project design challenge 3",
      "Another project design challenge 4",
    ],
    solutions: [
      "One of the key outcomes was the dissemination of cutting-edge research findings and insights. Participants presented their research through E-Posters and Oral Presentations, showcasing their novel discoveries and breakthroughs. This contributed to expanding the collective knowledge base in pharmaceutical research and paving the way for further exploration and development.",
      "The conference also facilitated networking and collaboration among attendees. Researchers had the opportunity to connect with experts in their respective fields, fostering meaningful partnerships and potential collaborations.",
      "The exchange of ideas and experiences during the conference led to the formation of new research alliances and initiatives aimed at addressing emerging challenges in the pharmaceutical industry.",
    ],
  },
];

export default portfolio_data;
