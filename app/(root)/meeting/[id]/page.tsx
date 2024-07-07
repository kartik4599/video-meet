"use client";

import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";

const page = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupCompleted, setisSetupCompleted] = useState(false);

  const { call, isCallLoading } = useGetCallById(params.id);

  if (isCallLoading || !isLoaded) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {isSetupCompleted ? (
            <MeetingRoom />
          ) : (
            <MeetingSetup setisSetupCompleted={setisSetupCompleted} />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default page;
