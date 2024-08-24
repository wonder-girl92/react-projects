export default function Suggestions({ data, handleClick }) {
  return (
    <>
      <ul>
        {data && data.length
          ? data.map((item) => (
              <li onClick={() => handleClick(item.id)} key={item.id}>
                {item.firstName}
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
