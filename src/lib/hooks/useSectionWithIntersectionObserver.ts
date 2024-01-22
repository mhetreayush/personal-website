import { useEffect, useRef } from "react";
import { useNavLinkStore } from "./useNavLinkStore";
import { slugify } from "@/lib/utils/slugify";

const useSectionWithIntersectionObserver = ({
  title,
  threshold,
}: {
  title: string;
  threshold?: number;
}) => {
  const setActive = useNavLinkStore((state) => state.setActive);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(slugify(title));
        }
      },
      {
        threshold: threshold || 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActive, threshold, title]);

  return { sectionRef };
};

export { useSectionWithIntersectionObserver };
