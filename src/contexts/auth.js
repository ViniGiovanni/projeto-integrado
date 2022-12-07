import { useState, useEffect, createContext } from "react";
import firebase from "../services/firebaseConnection";
import {toast} from 'react-toastify'

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [carregandoAuth, setCarregandoAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        function carregarStorage(){
            const storageUser = localStorage.getItem('SistemaIntegrado')
       
        if(storageUser){
            setUser(JSON.parse(storageUser))
            setLoading(false)
        }

        setLoading(false);
        }

        carregarStorage()
    }, [])

    async function cadastrar(email, senha, nome){
        setCarregandoAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then( async (value)=>{
            let uid = value.user.uid;

            await firebase.firestore().collection('usuarios')
            .doc(uid).set({
                nome: nome,
                avatarUrl: null
            })
            .then( ()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                }

                setUser(data)
                storageUser(data)
                setCarregandoAuth(false)
                toast.success('Bem vindo à plataforma')
            })
        })
        .catch( (error) =>{
            console.log(error)
            setCarregandoAuth(false)
            toast.error('Algo deu errado...')
        })
    }

    async function login(email, senha){
        setCarregandoAuth(true)

        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(async (value)=>{
            let uid = value.user.uid

            const perfilUsuario = await firebase.firestore().collection('usuarios')
            .doc(uid).get()

            let data = {
                uid: uid,
                nome: perfilUsuario.data().nome,
                avatarUrl: perfilUsuario.data().avatarUrl,
                email: value.user.email
            }

            setUser(data)
            storageUser(data)
            setCarregandoAuth(false)
            toast.success('Bem-vindo de volta!')
        })
        .catch((error)=>{
            console.log(error)
            setCarregandoAuth(false)
            toast.error('Algo deu errado...')
        })

    }
    function storageUser(data){
        localStorage.setItem('SistemaIntegrado', JSON.stringify(data))
    }

    async function deslogar(){
        await firebase.auth().signOut()
        localStorage.removeItem('SistemaIntegrado')
        setUser(null)

    }

    return(
        <AuthContext.Provider 
        value={
            {signed : !!user, 
            user, 
            loading, 
            cadastrar,
            deslogar,
            login,
            carregandoAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
