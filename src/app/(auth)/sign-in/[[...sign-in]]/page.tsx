import { SignedIn } from '@clerk/nextjs'
import React from 'react'

function SignInPage() {
  return (
    <div>
      <h1><SignedIn/></h1>
    </div>
  )
}

export default SignInPage
