import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import team_avatar_3 from "@/assets/img/teamsimg3.jpg";

import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  img: string;
  avatar_name: string;
  designation: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    img: "/sneha.jpg",
    avatar_name: "Dr. Sneha Ambwani",
    designation: "President",
  },
  {
    id: 2,
    img: "/jsbhawalkar.jpeg",
    avatar_name: "Dr. J. S. Bhawalkar",
    designation: "Vice President",
  },
  {
    id: 3,
    img: "/vikram.jpeg",
    avatar_name: "Vikram Choudhary",
    designation: "Secretary",
  },
  //   {
  //     id: 4,
  //     img: team_avatar_4,
  //     avatar_name: "Andrew Lopenza",
  //     designation: "UX Sketch Designer",
  //   },
];

export default team_data;
