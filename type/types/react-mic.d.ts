declare module "react-mic" {
  import * as React from "react";

  export interface ReactMicProps {
    record: boolean;
    className?: string;
    onStop: (recordedBlob: any) => void;
    onData?: (recordedBlob: any) => void;
    strokeColor?: string;
    backgroundColor?: string;
    mimeType?: string;
    visualSetting?: "sinewave" | "frequencyBars";
    echoCancellation?: boolean;
    autoGainControl?: boolean;
    noiseSuppression?: boolean;
    channelCount?: number;
    sampleRate?: number;
    bitRate?: number;
  }

  export class ReactMic extends React.Component<ReactMicProps> {}
}
