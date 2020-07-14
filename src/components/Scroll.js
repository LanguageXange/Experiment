import { useEffect, useState } from "react";

export const Scroll = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const checkScroll = window.scrollY > 620;
      if (checkScroll !== scroll) {
        setScroll(checkScroll);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
