import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError} from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, error = null, ...rest }, ref) => {

  return (
    <FormControl isInvalid={!!error}> {/* !! - transforma o valor em boleano */}
    {/* é invalido caso exista algo dentro da variável error */}

      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      {/* Se o label existir mostra o form */}

      <ChakraInput 
        name={name} 
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled" // https://chakra-ui.com/docs/form/input
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>   
  )
}

export const Input = forwardRef(InputBase);