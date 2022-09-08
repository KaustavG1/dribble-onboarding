import styled from 'styled-components'

import Input from './Input'
import Label from './Label'
import myself_active from '../../assets/Myself_active.png';
import myself from '../../assets/Myself.png';
import team_active from '../../assets/Team_active.png';
import team from '../../assets/Team.png';
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
      <Label htmlFor="myself">
        <User
          header={"For myself"}
          content={"Write better. Think more clearly. Stay organized."}
          active={checked === "myself"}
          src={checked === "myself" ? myself_active : myself}
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
      <Label htmlFor="team">
        <User
          header={"With my team"}
          content={"Wikis, docs, tasks & projects, all in one place."}
          active={checked === "team"}
          src={checked === "team" ? team_active : team}
        />
      </Label>
    </StyledSelector>
  )
}

export default UserSelector
