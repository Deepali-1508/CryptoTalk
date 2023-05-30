import React from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

const ErrorComponent = ({message}) => {
  return (
    <Alert>
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent