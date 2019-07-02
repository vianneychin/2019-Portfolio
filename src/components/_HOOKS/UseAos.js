import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function UseAOS() {
  return useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])
}

export default UseAOS