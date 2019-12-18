import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';

const initialToast = {
  message: '',
  type: null,
  visible: false,
};

export const ToastContext = createContext({});

export const ToastProvider = ({children}) => {
  const [toast, setToast] = useState(initialToast);
  const timeout = useRef();

  const show = useCallback(args => {
    setToast({...initialToast, visible: true, ...args});
  }, []);

  const hide = useCallback(() => {
    setToast({...toast, visible: false});
  }, [toast]);

  useEffect(() => {
    if (toast.visible) {
      timeout.current = setTimeout(hide, 1500);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [hide, toast]);

  return (
    <ToastContext.Provider
      value={{
        hide,
        show,
        toast,
      }}>
      {children}
    </ToastContext.Provider>
  );
};
