"use client";

import { useEffect, useRef } from "react";

type Handler = () => void;

//handler: A function to execute when a click outside the referenced element occurs.
//listenCapturing (optional): A boolean indicating whether to use the capturing phase for the click event listener. The default is true.
export function useOutsideClick(
  handler: Handler,
  listenCapturing: boolean = true
) {
  // creates a reference object that will be attached to the element
  // we want to monitor for outside clicks.
  const ref = useRef<HTMLElement | null>(null);

  // The useEffect hook is used to set up the event listener and clean it up when the component
  //unmounts or when dependencies change.
  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        // handleClick is defined within useEffect.
        //It checks if the click event target is outside the referenced element (ref.current).
        //If true, it calls the handler function.

        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      }
      // document.addEventListener("click", handleClick, listenCapturing);
      // adds the event listener to the document.
      document.addEventListener("click", handleClick, listenCapturing);
      // The cleanup function (return () => document.removeEventListener("click", handleClick);) removes the event listener when the component is unmounted or when handler or listenCapturing changes.
      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing]
  );
  return ref;
}
