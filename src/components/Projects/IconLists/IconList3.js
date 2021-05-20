import React from "react";
import IconBoxLink from "./../../IconBoxLink";
import Flag from "./../../../images/IconComponents/Flag";
import Github from "./../../../images/IconComponents/Github";

export default function IconList3(props) {
  const { project } = props;
  return (
    <>
      <IconBoxLink
        iconLinkAddress={project.links.linkA.linkAddress}
        iconComponent={<Flag color={props.themeColor} />}
        title="Live Demo"
      />
      <IconBoxLink
        iconLinkAddress={project.links.linkB.linkAddress}
        iconComponent={<Github color={props.themeColor} />}
        title="Github repo"
      />
    </>
  );
}
