import protfolio_details_1 from "@/assets/img/portfolio/Pharmanecia1_E.png";
import protfolio_details_2 from "@/assets/img/portfolio/pharmanecia2_E.png";
import protfolio_details_3 from "@/assets/img/portfolio/Pharmanecia3_E.png";
import protfolio_details_4 from "@/assets/img/portfolio/Pharmanecia4_E.png";
import protfolio_details_5 from "@/assets/img/portfolio/Pharmanecia5_E.png";
import protfolio_details_6 from "@/assets/img/portfolio/Pharmanecia6_E.png";
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
];

export default portfolio_data;
