import React from "react";
import IconBoxLink from "./../../IconBoxLink";
import Flag from "./../../../images/IconComponents/Flag";
import Github from "./../../../images/IconComponents/Github";
import { LinkVisible } from "../../Link";

export default function IconList3(props) {
  const { project } = props;
  return (
    <>
      <IconBoxLink
        iconLinkAddress={project.links.linkA.linkAddress}
        iconComponent={<Flag color={props.themeColor} />}
      />
      <IconBoxLink
        iconLinkAddress={project.links.linkB.linkAddress}
        iconComponent={<Github color={props.themeColor} />}
      />
      <IconBoxLink
        iconComponent={
          <LinkVisible
            href={project.links.linkC.linkAddress}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reflection
          </LinkVisible>
        }
      />
    </>
  );
}
