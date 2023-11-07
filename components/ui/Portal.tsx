import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  show?: boolean;
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ show, children }) => {
  const [showAnimation, setShowAnimation] = useState<boolean | undefined>(
    false
  );
  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(show);
    }, 1);
  }, [show]);

  return show
    ? createPortal(
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 ${
            !showAnimation
              ? "translate-x-12 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {children}
        </div>,
        document.body
      )
    : null;
};

export default Portal;
