import { useRef, useState } from 'react';
import useOutsideClick from '.';

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, ()=> setShowContent(false));
  console.log(ref.current);
  

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Pls click outside of this to close this. It won't close if u click inside of this
            content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
