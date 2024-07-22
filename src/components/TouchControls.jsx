import { useEffect } from "react";
import { useKeyboardControls } from "@react-three/drei";

export function TouchControls() {
  const [, get, set] = useKeyboardControls();

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      if (touch) {
        set((state) => ({
          ...state,
          forward: touch.clientY < window.innerHeight / 2,
          backward: touch.clientY >= window.innerHeight / 2,
          left: touch.clientX < window.innerWidth / 2,
          right: touch.clientX >= window.innerWidth / 2,
        }));
      }
    };

    const handleTouchEnd = () => {
      set({
        forward: false,
        backward: false,
        left: false,
        right: false,
      });
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [set]);

  return null;
}
