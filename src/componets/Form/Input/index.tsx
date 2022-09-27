import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'
import { WarningCircle } from 'phosphor-react'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  error: FieldError | undefined
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, ...rest },
  ref,
) => {
  return (
    <Container
      isFocused={false}
      isFilled={false}
      isErrored={false}
      data-testid="input-container"
    >
      <input name={name} ref={ref} {...rest} />
      {error && (
        <Error title={error.message || ''}>
          <WarningCircle size={20} color="#AB222E" weight="fill" />
        </Error>
      )}
    </Container>
  )
}

export const Input = forwardRef(InputBase)
