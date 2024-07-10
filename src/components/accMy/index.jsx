import { useState } from 'react';
import data from '../components/accordion/data';

export default function AccMy() {
  const [selectId, setSelectId] = useState(null);
  const [onMulti, setOnMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingle(id) {
    setSelectId(id === selectId ? null : id);
  }

  function handleMulti(id) {
    let copyMulti = [...multi];
    let findIndex = copyMulti.indexOf(id);
    console.log(findIndex);

    if (findIndex === -1) copyMulti.push(id);
    else copyMulti.splice(findIndex, 1);
    setMulti(copyMulti);
  }
  console.log(selectId, multi);
  return (
    <div className='wrapper'>
      <button onClick={() => setOnMulti(!onMulti)}>Switch Single/Multiple Selection!!!</button>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className='item'>
              <div
                onClick={onMulti ? () => handleMulti(item.id) : () => handleSingle(item.id)}
                className='title'>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {onMulti
                ? multi.indexOf(item.id) !== -1 && <div className='content'>{item.answer}</div>
                : selectId === item.id && <div className='content'>{item.answer}</div>}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
