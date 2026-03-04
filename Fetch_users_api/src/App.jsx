import { useEffect, useState } from "react"
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);      // Store users
  const [loading, setLoading] = useState(true); // Loading state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array → runs only once on mount

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <UserCard key={user.id} name={user.name} />
        ))
      )}
    </div>
  );
}

export default App
