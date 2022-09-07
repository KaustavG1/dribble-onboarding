import { useState } from 'react'

function useForm(
  initialFullName,
  initialDisplayName,
  initialWorkspaceName,
  initialWorkspaceURL,
  initialUser
) {
  const [ fullName, setFullName ] = useState(initialFullName || "")
  const [ displayName, setDisplayName ] = useState(initialDisplayName || "")
  const [ workspaceName, setWorkspaceName ] = useState(initialWorkspaceName || "")
  const [ workspaceURL, setWorkspaceURL ] = useState(initialWorkspaceURL || "")
  const [ user, setUser ] = useState(initialUser || "myself")

  return {
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
  }
}

export default useForm
