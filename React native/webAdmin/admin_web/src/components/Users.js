import * as React from "react";
import styles from "./Users.module.css";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.get("/api/admin/getUserAccount");
        if (res.data) {
          setUsers(res.data.UserData);
        }
      } catch (error) {
        console.error("There was an error fetching the users data!", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.flexcontainer}>
        <div className={styles.drawerPlace}></div>
        <div className={styles.tableContainer}>
          <h2 className={styles.usersTitle}>Users</h2>
          <table className={styles.usersTable}>
            <thead>
              <tr>
                <th>NO</th>
                <th>FULL-NAME</th>
                <th>USERNAME</th>
                <th>DESCRIPTION</th>
                <th>EMAIL</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className={styles.userImage}
                    />
                    {user.name}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.description}</td>

                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
