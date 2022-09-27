import { createContext, ReactNode, useContext } from 'react'
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrorsImpl,
  UseFormHandleSubmit,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InvoiceContext } from '../../context/InvoiceContext'

interface PropsCheckoutActionContextProvider {
  children: ReactNode
}

interface CheckoutFormData {
  name: string
  cpf: number
  phone: number
  email: string
  cep: number
  address: string
  city: string
  state: string
}

interface ICheckoutActionContext {
  register: UseFormRegister<CheckoutFormData>
  errors: FieldErrorsImpl<CheckoutFormData>
  handleSubmit: UseFormHandleSubmit<CheckoutFormData>
  handleCreateUser: SubmitHandler<CheckoutFormData>
}

const createUserFormSchema = yup
  .object({
    name: yup.string().required('Nome obrigatório'),
    cpf: yup.number().required('CPF obrigatório'),
    phone: yup.number().required('Telefone obrigatório'),
    email: yup
      .string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    cep: yup.number().required('cep obrigatório'),
    address: yup.string().required('Endereço obrigatório'),
    city: yup.string().required('Cidade obrigatório'),
    state: yup.string().required('Estado obrigatório'),
  })
  .required()

export const CheckoutActionContext = createContext({} as ICheckoutActionContext)

export function CheckoutActionContextProvider({
  children,
}: PropsCheckoutActionContextProvider) {
  const { register, handleSubmit, formState } = useForm<CheckoutFormData>({
    resolver: yupResolver(createUserFormSchema),
  })
  const { errors } = formState

  const { solicitationInvoice } = useContext(InvoiceContext)

  const navigate = useNavigate()

  const handleCreateUser: SubmitHandler<CheckoutFormData> = async (
    data,
    event,
  ) => {
    event?.preventDefault()
    solicitationInvoice(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    navigate('/thanks')
  }

  return (
    <CheckoutActionContext.Provider
      value={{
        register,
        errors,
        handleSubmit,
        handleCreateUser,
      }}
    >
      {children}
    </CheckoutActionContext.Provider>
  )
}

export const useCheckoutAction = () => useContext(CheckoutActionContext)
