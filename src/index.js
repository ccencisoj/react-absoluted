import { useRef, useEffect } from 'react';

const Absoluted = ({ children })=> {
  const absolutedRef = useRef();
  
  useEffect(()=> {
    const reqAnimation = requestAnimationFrame(updatePosition);
    return ()=> cancelAnimationFrame(reqAnimation);
  }, []);

  const updatePosition = ()=> {
    
    if(absolutedRef.current && absolutedRef.current.parentElement) {
      const absoluted = absolutedRef.current;
      const parent = absoluted.parentElement;
      const { top, left } = parent.getBoundingClientRect();
      absoluted.style.top = `${top}px`;
      absoluted.style.left =  `${left}px`;
    }

    requestAnimationFrame(updatePosition);
  }

  const absolutedStyles = {
    top: "0px",
    left: "0px",
    width: "0px",
    height: "0px",
    position: "fixed"
  }

  return (
    <div style={absolutedStyles} ref={absolutedRef}>
      {children}
    </div>
  )
}

export default Absoluted;
