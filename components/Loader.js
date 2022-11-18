import { useEffect, useState } from "react"

const Loader = () => {
    const [isPageLoad, setIsPageLoad] = useState(true);
    
    useEffect(() => {
        setIsPageLoad(false)
    }, [])

  return (
    <div className={`loader ${isPageLoad ? "show" : ""}`}>
        <div className="loader__circle">
        </div>
        <img className="loader__image" src="/icon/logo-loader.svg" alt="Easy Lens Logo" />
    </div>
  )
}

export default Loader