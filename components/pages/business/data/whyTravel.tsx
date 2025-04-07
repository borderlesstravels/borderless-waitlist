import { WhyTravelCardProps } from "../components/whyTravelCard";
import WhyTravel1Icon from "@/assets/svgs/why-travel-1.svg";
import WhyTravel2Icon from "@/assets/svgs/why-travel-2.svg";
import WhyTravel3Icon from "@/assets/svgs/why-travel-3.svg";

export const whyTravelData: WhyTravelCardProps[] = [
  {
    icon: <WhyTravel1Icon className="w-[36px] h-[36px]" />,
    label: "Flights cancelled? We reschedule before you even ask",
  },
  {
    icon: <WhyTravel2Icon className="w-[36px] h-[36px]" />,
    label: "Hotel issues? Upgraded before you step in",
  },
  {
    icon: <WhyTravel3Icon className="w-[36px] h-[36px]" />,
    label: "Airport transfer delays? Now a thing of the past",
  },
];
