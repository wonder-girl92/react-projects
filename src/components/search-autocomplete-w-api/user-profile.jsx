export default function UserProfile({ data }) {
  return (
    <div className='user-card'>
      <h2>Имя, Фамилия: {data.lastName}</h2>
      <p>Возраст: {data.age}</p>
      <p>Профессия: {data.role}</p>
      <p>{data.image}</p>
    </div>
  );
}
