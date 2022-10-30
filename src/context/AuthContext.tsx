// import { useEffect } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  toastFail,
  toastFailTechRegister,
  toastSuccesLogin,
  toastSuccesRegister,
  toastSuccesTechEdit,
  toastSuccesTechRegister,
  toastSuccesTechRmv,
} from "../components/Toast";
import api from "../services/api";

interface IAuthProviderProps {
  children: ReactNode;
}

export interface ITechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  techs: ITechs[];
  works: [];
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ISubmitRegisterTech {
  title: string;
  status: string;
}

export interface IhandleTechEdit {
  status: string;
}

export interface ISetActualTechs {
  id: string;
  title: string;
  status: string;
}

export interface IAuthContext {
  onSubmitLoginFunction: (data: IUserLogin) => void;
  onSubmitRegisterFunction: (data: IUserRegister) => void;
  onSubmitRegisterTechFunction: (data: ISubmitRegisterTech) => void;
  handleTechEdit: (data: IhandleTechEdit) => void;
  handleTechRmv: () => void;
  logout: () => void;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  setActualTech: React.Dispatch<React.SetStateAction<ISetActualTechs>>;
  setTechAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTechEditRmvModal: React.Dispatch<React.SetStateAction<boolean>>;
  userData: IUserData;
  loading: boolean;
  techAddModal: boolean;
  techEditRmvModal: boolean;
  techList: ITechs[];
  actualTech: ISetActualTechs;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState(true);
  const [techAddModal, setTechAddModal] = useState(false);
  const [techEditRmvModal, setTechEditRmvModal] = useState(false);
  const [techList, setTechList] = useState<ITechs[]>([] as ITechs[]);
  const [newTechList, setNewTechList] = useState<ITechs[]>([] as ITechs[]);
  const [actualTech, setActualTech] = useState<ISetActualTechs>(
    {} as ISetActualTechs
  );

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KenzieHub-token");
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUserData(data);
          setTechList(data.techs);
          navigate("/Dashboard", { replace: true });
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [navigate]);

  useEffect(() => {
    setTechList(newTechList);
  }, [newTechList]);

  const onSubmitLoginFunction = async (data: IUserLogin) => {
    await api
      .post("sessions", { ...data })
      .then((response) => {
        const { user, token } = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setUserData(user);
        localStorage.setItem("@KenzieHub-token", token);
        setTechList(response.data.user.techs);
        navigate("/Dashboard", { replace: true });
        toastSuccesLogin();
      })
      .catch((response) => {
        console.log(response);
        toastFail();
      });
  };

  const onSubmitRegisterFunction = async (data: IUserRegister) => {
    await api
      .post("users", { ...data })
      .then((res) => {
        toastSuccesRegister();
      })
      .catch((res) => {
        console.error(res);
        toastFail();
      });
    navigate("../");
  };

  const onSubmitRegisterTechFunction = async (data: ISubmitRegisterTech) => {
    await api
      .post("/users/techs", data)
      .then((res) => {
        setNewTechList([...techList, res.data]);
        toastSuccesTechRegister();
        setTechAddModal(false);
      })
      .catch((res) => {
        console.error(res);
        toastFailTechRegister();
      });
  };

  const actTechList = async () => {
    const { id } = userData;
    await api.get(`/users/${id}`).then((res) => {
      setNewTechList(res.data.techs);
    });
  };

  const handleTechEdit = async (data: IhandleTechEdit) => {
    const { id } = actualTech;
    console.log(data);
    await api.put(`/users/techs/${id}`, { status: data.status }).then(() => {
      actTechList();
      const newList = techList.filter((elem) => elem);
      setNewTechList(newList);
      setTechEditRmvModal(false);
      toastSuccesTechEdit();
    });
  };

  const handleTechRmv = async () => {
    const { id } = actualTech;
    await api.delete(`/users/techs/${id}`).then(() => {
      const newList = techList.filter((elem) => elem.id !== id);
      setNewTechList(newList);
      toastSuccesTechRmv();
      setTechEditRmvModal(false);
    });
  };

  function logout() {
    localStorage.clear();
    navigate("../", { replace: true });
  }

  return (
    <AuthContext.Provider
      value={{
        logout,
        loading,
        techList,
        userData,
        actualTech,
        setUserData,
        techAddModal,
        handleTechRmv,
        setActualTech,
        handleTechEdit,
        setTechAddModal,
        techEditRmvModal,
        setTechEditRmvModal,
        onSubmitLoginFunction,
        onSubmitRegisterFunction,
        onSubmitRegisterTechFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
