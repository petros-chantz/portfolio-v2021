import React from "react";
import IconBoxLink from "./../../IconBoxLink";
import Report from "./../../../images/IconComponents/Report";
import Camera from "./../../../images/IconComponents/Camera";

export default function IconList2(props) {
  const { project } = props;
  return (
    <>
      <IconBoxLink
        iconLinkAddress={project.links.linkA.linkAddress}
        iconComponent={<Report color={props.themeColor} />}
        title="Report"
      />
      <IconBoxLink
        iconLinkAddress={project.links.linkB.linkAddress}
        iconComponent={<Camera color={props.themeColor} />}
        title="More Photos"
      />
    </>
  );
}
