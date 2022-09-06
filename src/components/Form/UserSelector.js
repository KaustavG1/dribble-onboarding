import styled from 'styled-components'

import Input from './Input'
import Label from './Label'
import User from './User'

const StyledSelector = styled.div`
  display: flex;
  justify-content: space-between;

`

function UserSelector({ handleChange, checked }) {
  return (
    <StyledSelector>
      <Input
        type="radio"
        id="myself"
        value="myself"
        name="user_selector"
        checked={checked === "myself"}
        onChange={handleChange}
      />
      <Label for="myself">
        <User
          icon={"&#9823;"}
          header={"For myself"}
          content={"Write better. Think more clearly. Stay organized."}
          active={checked === "myself"}
        />
      </Label>
      <br/>
      <Input
        type="radio"
        id="team"
        value="team"
        name="user_selector"
        checked={checked === "team"}
        onChange={handleChange}
      />
      <Label for="team">
        <User
          icon={"&#9823;"}
          header={"With my team"}
          content={"Wikis, docs, tasks & projects, all in one place."}
          active={checked === "team"}
        />
      </Label>
    </StyledSelector>
  )
}

export default UserSelector
