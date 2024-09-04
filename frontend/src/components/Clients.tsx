import Avatar from "react-avatar"
const Clients = ({username}:any) => {
  return (
    <div className="client flex flex-col px-2">
      <Avatar name={username} size="50px" round="14px"/>
      <span className="font-bold text-sm text-white text-center">{username}</span>
    </div>
  )
}

export default Clients
