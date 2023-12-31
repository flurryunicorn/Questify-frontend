import React, { useEffect, useState } from "react";

export type CompassBoxType = {
  index: number;
  free?: boolean;
  opened?: boolean;
  title: string;
  activeThumbnail: string;
  inactiveThumbnail: string;
  style?: string;
  className?: string;
  value?: number;
  rewardID?: number;
};

const CompassBox = (props: CompassBoxType) => {
  return <div></div>;
};

export default CompassBox;
