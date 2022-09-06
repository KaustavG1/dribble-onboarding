import { useState } from 'react'

import styled from 'styled-components'

import Button from './Button'
import Input from './Input'
import Label from './Label'
import URLInput from './URLInput'
import UserSelector from './UserSelector'

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

function Form() {
  const [ fullName, setFullName ] = useState("")
  const [ displayName, setDisplayName ] = useState("")
  const [ workspaceName, setWorkspaceName ] = useState("")
  const [ workspaceURL, setWorkspaceURL ] = useState("")
  const [ user, setUser] = useState("myself")

  const handleFullName = (event) => {
    setFullName(event.target.value)
  }
  const handleDisplayName = (event) => {
    setDisplayName(event.target.value)
  }
  const handleWorkspaceName = (event) => {
    setWorkspaceName(event.target.value)
  }
  const handleWorkspaceURL = (event) => {
    setWorkspaceURL(event.target.value)
  }
  const handleUser = (event) => {
    setUser(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log("Clicked")
  }

  return (
    <StyledForm>
      {/* <Label for="fname" text={"Full name"}/>
      <Input type="text" id="fname" placeholder="Steve Jobs" onChange={handleFullName}/>
      <br/>
      <Label for="dname" text={"Display name"}/>
      <Input type="text" id="dname" placeholder="Steve" onChange={handleDisplayName}/>
      <br/> */}
      <Label for="wname" text={"Workspace Name"}/>
      <Input type="text" id="wname" placeholder="Eden" onChange={handleWorkspaceName}/>
      <br/>
      <Label for="url" text={"Workspace URL"} optionalText={"(optional)"}/>
      <URLInput
        id="url"
        type="text"
        placeholder="Example"
        domainText={"www.eden.com/"}
        onChange={handleWorkspaceURL}
      />
      <br/>
      <UserSelector handleChange={handleUser} checked={user}/>
      <br/>
      <Button onClick={handleClick} text={"Create Workspace"} />
    </StyledForm>
  )
}

export default Form
