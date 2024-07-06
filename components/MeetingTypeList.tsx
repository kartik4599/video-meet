"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface HomeCard {
  title: string;
  description: string;
  img: string;
  color: string;
  onclick: () => void;
}

const HomeCard = ({ color, onclick, img, description, title }: HomeCard) => (
  <div
    className={cn(
      "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
      color
    )}
    onClick={onclick}>
    <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
      <Image src={img} alt="meeting" width={27} height={27} />
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg font-normal">{description}</p>
    </div>
  </div>
);

const MeetingTypeList = () => {
  const { push } = useRouter();
  const [meetingState, setMeetingState] = useState("");

  const data = [
    {
      title: "New Meeting",
      description: "Start an instant meeting",
      img: "/icons/add-meeting.svg",
      color: "bg-orange-1",
      onclick: setMeetingState.bind(null, "isInstantMeeting"),
    },
    {
      title: "Schedule Meeting",
      description: "Plan your meeting",
      img: "/icons/schedule.svg",
      color: "bg-blue-1",
      onclick: setMeetingState.bind(null, "isScheduleMeeting"),
    },
    {
      title: "View Recorings",
      description: "Check out your recordings",
      img: "/icons/recordings.svg",
      color: "bg-purple-1",
      onclick: setMeetingState.bind(null, "isJoiningMeeting"),
    },
    {
      title: "Join Meeting",
      description: "via invitation link",
      img: "/icons/join-meeting.svg",
      color: "bg-yellow-1",
      onclick: () => push("/recordings"),
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {data.map((props) => (
        <HomeCard {...props} />
      ))}
    </section>
  );
};

export default MeetingTypeList;
