import { useEffect, useState } from 'react';
import Suggestions from './suggestions';
import './search-w-api.css';

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const [searchParam, setSearchParam] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.firstName.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
      setSelectedUser([]);
    }
  }

  const handleClick = (userId) => {
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  // function handleClick(event) {
  //   setShowDropdown(false);
  //   setSearchParam(event.target.innerText);
  //   setFilteredUsers([]);
  // }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users);
        setLoading(false);
        setErr(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(err);
      setErr(error.message);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(filteredUsers);

  return (
    <>
      <div className='search-autocomplete-container'>
        {loading ? (
          <h1>Loading Data! Pls wait...</h1>
        ) : (
          <input
            value={searchParam}
            type='text'
            name='search-users'
            placeholder='Search Users here...'
            onChange={handleChange}
          />
        )}
      </div>

      <div className='filtered-item'>
        {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
      </div>

      {selectedUser.length !== 0 && (
        <div className='user-card'>
          <h2>
            Имя, Фамилия: {selectedUser.firstName} {selectedUser.lastName}
          </h2>
          <p>Возраст: {selectedUser.age}</p>
          <p>Профессия: {selectedUser.company.title || ''}</p>
          <p>Номер телефона: {selectedUser.phone}</p>
          <p>
            <img src={selectedUser.image} alt={selectedUser.image} />
          </p>
        </div>
      )}
    </>
  );
}
