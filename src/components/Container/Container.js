import { useState } from 'react'
import styled from 'styled-components'

import complete from '../../assets/Complete.png'
import Form from '../Form/Form'
import Header from '../TextComponent/Header'
import Input from '../Form/Input'
import Label from '../Form/Label'
import Logo from '../Logo/Logo'
import Stepper from '../Stepper/Stepper'
import Text from '../TextComponent/Text'
import TextComponent from '../TextComponent/TextComponent'
import URLInput from '../Form/URLInput'
import useForm from '../../hooks/useForm'
import UserSelector from '../Form/UserSelector'

const StyledContainer = styled.div`
  overflow: hidden;
  height: 600px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`

const CompletionStatus = styled.img`
  height: 55px;
  width: 55px;
`

export const TOTAL_STEPS = 4

function Container() {
  const [ currentStep, setCurrentStep ] = useState(1)

  const {
    fullName,
    setFullName,
    displayName,
    setDisplayName,
    workspaceName,
    setWorkspaceName,
    workspaceURL,
    setWorkspaceURL,
    user,
    setUser
  } = useForm("", "", "", "", "myself")

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

  const updateStep = () => {
    if(currentStep + 1 > TOTAL_STEPS) {
      return
    }

    setCurrentStep(current => current + 1)
  }

  const stepConfig = [
    {
      stepIndex: 1,
      textRenderer: (
        <>
          <Header>Welcome! First things first...</Header>
          <Text>You can always change them later</Text>
        </>
      ),
      formRenderer: (
        <>
          <Label htmlFor="fname" text={"Full name"}/>
          <Input
            type="text"
            id="fname"
            placeholder="Steve Jobs"
            onChange={handleFullName}
            value={fullName}
          />
          <br/>
          <Label htmlFor="dname" text={"Display name"}/>
          <Input
            type="text"
            id="dname"
            placeholder="Steve"
            onChange={handleDisplayName}
            value={displayName}
          />
        </>
      )
    },
    {
      stepIndex: 2,
      textRenderer: (
        <>
          <Header>Let's set up a home for all your work</Header>
          <Text>You can always create another workspace later</Text>
        </>
      ),
      formRenderer: (
        <>
          <Label htmlFor="wname" text={"Workspace Name"}/>
          <Input
            type="text"
            id="wname"
            placeholder="Eden"
            onChange={handleWorkspaceName}
            value={workspaceName}
          />
          <br/>
          <Label htmlFor="url" text={"Workspace URL"} optionalText={"(optional)"}/>
          <URLInput
            id="url"
            type="text"
            placeholder="Example"
            domainText={"www.eden.com/"}
            onChange={handleWorkspaceURL}
            value={workspaceURL}
          />
        </>
      )
    },
    {
      stepIndex: 3,
      textRenderer: (
        <>
          <Header>How are you planing to use Eden?</Header>
          <Text>We'll streamline your setup experience accordingly.</Text>
        </>
      ),
      formRenderer: (
        <>
          <UserSelector handleChange={handleUser} checked={user}/>
        </>
      )
    },
    {
      stepIndex: 4,
      textRenderer: (
        <>
          <Header>Congratulations, {displayName}</Header>
          <Text>You have completed onboarding, you can start using the Eden!</Text>
        </>
      )
    }
  ]

  return (
    <StyledContainer>
      <Logo/>
      <Stepper currentStep={currentStep} steps={stepConfig}/>
      {/* {currentStep === TOTAL_STEPS && <CompletionStatus>L</CompletionStatus>} */}
      {currentStep === TOTAL_STEPS && <CompletionStatus src={complete}/>}
      <TextComponent currentStep={currentStep} steps={stepConfig}/>
      <Form currentStep={currentStep} nextStep={updateStep} steps={stepConfig}/>
    </StyledContainer>
  )
}

export default Container
