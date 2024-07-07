import { useEffect, useState } from "react";
import {
  useCall,
  VideoPreview,
  DeviceSettings,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setisSetupCompleted,
}: {
  setisSetupCompleted: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setisMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("");
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
    }
  }, [isMicCamToggledOn]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-2 font-medium">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={() => setisMicCamToggledOn((pre) => !pre)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setisSetupCompleted(true);
        }}>
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
