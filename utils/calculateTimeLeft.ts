import { ITimeLeft } from "@/components/common/countdown";

const padWithZero = (num: number) => (num < 10 ? `0${num}` : num.toString());

export const calculateTimeLeft = (targetDate: string): ITimeLeft => {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  if (difference <= 0)
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };

  return {
    days: padWithZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: padWithZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: padWithZero(Math.floor((difference / (1000 * 60)) % 60)),
    seconds: padWithZero(Math.floor((difference / 1000) % 60)),
  };
};
