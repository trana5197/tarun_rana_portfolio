import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { useActiveContext } from "./../context/activeSectionContext";
import { SectionName } from "./types";

export function useSectionInView(
  sectionName: SectionName,
  threshold: number = 0,
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveContext();

  useEffect(
    function () {
      if (inView && Date.now() - timeOfLastClick > 1000)
        setActiveSection(sectionName);
    },
    [inView, setActiveSection, timeOfLastClick, sectionName],
  );

  return { ref };
}
