import React from "react";
import { createPortal } from "react-dom";
import { Transition } from "@headlessui/react";
import { ToastType } from "@/contexts/toast-context/types";
import ToastContainer, { ToastPlacement } from "./ToastContainer";
import ToastController from "./ToastController";
import useSettle from "@/hooks/utils/useSettle";

interface Props {
  toasts: ToastType[];
  placement: ToastPlacement;
  transitionProps: string;
  inheritedAutoDismiss: boolean;
  inheritedAutoDismissTimeout: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDismissFunc: any;
}

const ToastContextInner = ({
  toasts,
  placement,
  transitionProps,
  inheritedAutoDismiss,
  inheritedAutoDismissTimeout,
  onDismissFunc,
}: Props) => {
  const { isSettled } = useSettle();

  return (
    <>
      {isSettled &&
        createPortal(
          <ToastContainer placement={placement} hasToasts={!!toasts.length}>
            {toasts.map(
              ({
                appearance,
                autoDismiss,
                content,
                id,
                autoDismissTimeout,
                onDismiss,
              }) => (
                <Transition
                  show={true}
                  appear={true}
                  key={id}
                  // enter="transition-all transform-gpu duration-200 ease-out"
                  // leave="transition-all transform-gpu duration-200 ease-out"
                  // {...transitionProps}
                >
                  <ToastController
                    appearance={appearance}
                    autoDismiss={
                      autoDismiss !== undefined
                        ? autoDismiss
                        : inheritedAutoDismiss
                    }
                    autoDismissTimeout={
                      autoDismissTimeout !== undefined
                        ? autoDismissTimeout
                        : inheritedAutoDismissTimeout
                    }
                    key={id}
                    content={content}
                    onDismiss={onDismissFunc(id, onDismiss)}
                    transitionProps={transitionProps}
                  />
                </Transition>
              )
            )}
          </ToastContainer>,
          window?.document?.body
        )}
    </>
  );
};

export default ToastContextInner;
