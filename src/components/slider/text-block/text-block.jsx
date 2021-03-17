import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './text-block.module.scss';

function TextBlock({ data, ind, slideClasses }) {
  const moveTitleRef = useRef(null);
  const [blockHeight, setHeight] = useState(0);

  const moveTextRef = useRef(null);
  const [blockTextHeight, setTextHeight] = useState(0);

  function generateItems(arr, name, cls) {
    return arr.map((item, i) => (
      <div
        key={`${arr[i].title}-${name}`}
        className={`${style[name]} ${style[cls[i]]}`}
      >
        {arr[i][name]}
      </div>
    ));
  }

  useEffect(() => {
    if (moveTitleRef.current) {
      setHeight(moveTitleRef.current.offsetHeight);
    }
    if (moveTextRef.current) {
      setTextHeight(moveTextRef.current.offsetHeight);
    }
  }, [moveTitleRef, moveTextRef]);

  return (
    <div className={style.sliderTextBlock}>
      <div className={style.titleBlock} ref={moveTitleRef}>
        <div className={style.mover} style={{ top: `${ind * -blockHeight}px` }}>
          {generateItems(data, 'title', slideClasses)}
        </div>
      </div>
      <div className={style.textBlock} ref={moveTextRef}>
        <div
          className={style.mover}
          style={{ top: `${ind * -blockTextHeight}px` }}
        >
          {generateItems(data, 'text', slideClasses)}
        </div>
      </div>
    </div>
  );
}

export { TextBlock };

TextBlock.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  ind: PropTypes.number,
  slideClasses: PropTypes.arrayOf(PropTypes.string),
};

TextBlock.defaultProps = {
  data: null,
  ind: null,
  slideClasses: null,
};
