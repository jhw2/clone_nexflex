import { Ref, RefObject, useEffect, useRef } from "react";

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}
interface IUseOnClickOutSide<T> {
  elementRef: RefObject<T>;
}
export const useOnClickOutSide = <T extends HTMLElement>(
  callBackFn: () => void
): IUseOnClickOutSide<T> => {
  const elementRef = useRef<T>(null);
  useEffect(() => {
    const onClick = ({ target }: MouseEvent) => {
      assertIsNode(target);
      if (!elementRef.current || elementRef.current.contains(target)) {
        callBackFn();
      }
    };
    elementRef.current?.addEventListener("click", onClick);
    return () => elementRef.current?.removeEventListener("click", onClick);
  }, []);
  return {
    elementRef,
  };
};
