import Modal from "@/Components/Modal";
import Preferences from "@/Components/Modals/Preferences";
import { createContext, useContext, useReducer } from "react";

type ModalViews = "PREFERENCES";

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl";

type OpenModal<T = any> = {
  view: ModalViews;
  size?: ModalSize;
  payload?: T;
};

type State<T = any> = {
  view?: ModalViews;
  size?: ModalSize;
  data?: T;
  isOpen: boolean;
  openModal: <T>({ view, size, payload }: OpenModal<T>) => void;
  closeModal: () => void;
};

type Action<T = any> =
  | ({
      type: "OPEN";
    } & OpenModal<T>)
  | {
      type: "CLOSE";
    };

const initialState: State = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        view: action.view,
        size: action.size,
        data: action.payload,
        isOpen: true,
      };

    case "CLOSE":
      return {
        ...state,
        view: undefined,
        size: undefined,
        data: undefined,
        isOpen: false,
      };
  }
};

const ModelContext = createContext(initialState);

export const useModalContext = () => useContext(ModelContext);

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState,
  );

  const openModal = ({ view, size, payload }: OpenModal) =>
    dispatch({ type: "OPEN", view, size, payload });

  const closeModal = () => dispatch({ type: "CLOSE" });

  const value: State = {
    ...state,
    openModal,
    closeModal,
  };

  return (
    <ModelContext.Provider value={value}>
      {children}
      <ModalChildren />
    </ModelContext.Provider>
  );
};

export const ModalChildren = () => {
  const { isOpen, view, size, closeModal } = useModalContext();

  return (
    <Modal show={isOpen} onClose={closeModal} maxWidth={size}>
      {view === "PREFERENCES" && <Preferences />}
    </Modal>
  );
};
