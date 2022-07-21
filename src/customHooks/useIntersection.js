import { useState, useEffect } from "react";

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);
  let observerRefValue = null;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (element.current) {
      observer.observe(element.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observerRefValue = element.current; // <-- save ref value
    }

    return () => observer.unobserve(observerRefValue);
  }, [element, rootMargin]);

  return isVisible;
};
export default useIntersection;
