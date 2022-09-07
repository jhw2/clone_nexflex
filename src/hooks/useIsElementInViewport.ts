import { RefObject, useEffect, useRef, useState } from "react";
interface IuseIsElementInViewport<T> {
  isVisible: boolean;
  elementRef: RefObject<T>;
}
export const useIsElementInViewport = <T>(
  rootMargin: number = 0
): IuseIsElementInViewport<T> => {
  const elementRef = useRef<any>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const options = {
      rootMargin: rootMargin + "px",
    };
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        console.log(entry.isIntersecting)
        if (!isVisible) setVisible(entry.isIntersecting);
      },
      options
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef, isVisible]);
  return { isVisible, elementRef };
};
