import React from 'react'


type Prop = {
  title: string
}

const FormTitle = ( { title }: Prop) => {

  return (
    <>
      <h1 className="text-center text-xl">{ title }</h1>
    </>
  )

}


export default FormTitle