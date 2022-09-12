import { RefObject, useEffect, useRef, useState } from "react";
interface IuseIsElementInViewport<T> {
  isVisible: boolean;
  elementRef: RefObject<T>;
}
export const useIsElementInViewport = <T extends HTMLElement>(
  rootMargin: number = 0
): IuseIsElementInViewport<T> => {
  const elementRef = useRef<T>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const options = {
      rootMargin: rootMargin + "px",
    };
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (!isVisible) setVisible(entry.isIntersecting);
      },
      options
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef, isVisible]);
  return { isVisible, elementRef };
};
