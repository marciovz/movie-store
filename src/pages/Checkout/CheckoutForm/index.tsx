import { useContext } from 'react'

import { Input } from '../../../componets/Form/Input'

import { Container, LineBlock } from './styles'
import { CheckoutActionContext } from '../CheckoutActionContext'

export function CheckoutForm() {
  const { register, errors, handleCreateUser, handleSubmit } = useContext(
    CheckoutActionContext,
  )

  return (
    <Container>
      <form id="form-checkout" onSubmit={handleSubmit(handleCreateUser)}>
        <LineBlock>
          <Input
            placeholder="Nome Completo"
            error={errors.name}
            {...register('name')}
          />
        </LineBlock>

        <LineBlock>
          <Input placeholder="CPF" error={errors.cpf} {...register('cpf')} />
          <Input
            placeholder="Celular"
            error={errors.phone}
            {...register('phone')}
          />
        </LineBlock>

        <LineBlock>
          <Input
            type="email"
            placeholder="E-mail"
            error={errors.email}
            {...register('email')}
          />
        </LineBlock>

        <LineBlock>
          <Input placeholder="CEP" error={errors.cep} {...register('cep')} />
          <Input
            placeholder="Endereço"
            error={errors.address}
            {...register('address')}
          />
        </LineBlock>

        <LineBlock>
          <Input
            placeholder="Cidade"
            error={errors.city}
            {...register('city')}
          />
          <Input
            placeholder="Estado"
            error={errors.state}
            {...register('state')}
          />
        </LineBlock>
      </form>
    </Container>
  )
}
