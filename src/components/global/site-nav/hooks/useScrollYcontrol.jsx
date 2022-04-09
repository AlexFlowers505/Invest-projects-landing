import React, {useState,useEffect} from 'react'

const useScrollYcontrol = () => {
    const [clientY, setClientY] = useState({
        y: 0,
        lastY: 0
    })
    const handleScroll = () => {
        setClientY((currentY) => {
            return {
                y: window.scrollY,
                lastY: currentY.y
            }
        })
    }
    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return clientY
}

export default useScrollYcontrol