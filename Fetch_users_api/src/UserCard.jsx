function UserCard({ name }) {
  return (
    <div style={{
      padding: "10px",
      margin: "10px 0",
      background: "#1c1c1c",
      borderRadius: "8px"
    }}>
      <h3>{name}</h3>
    </div>
  );
}

export default UserCard;