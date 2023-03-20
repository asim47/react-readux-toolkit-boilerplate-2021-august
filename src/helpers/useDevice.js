import { useEffect, useState } from 'react'

export const useDevice = () => {

    const [IsBigWeb, setIsBigWeb] = useState(false)
    const [IsWeb, setIsWeb] = useState(false)
    const [IsTab, setIsTab] = useState(false)
    const [IsMob, setIsMob] = useState(false)

    useEffect(() => {
        setIsBigWeb(window.innerWidth >= 1400)
        setIsWeb(window.innerWidth >= 1090)
        setIsTab(window.innerWidth < 1090 && window.innerWidth >= 768)
        setIsMob(window.innerWidth < 768)
        window.addEventListener("resize", () => {
            setIsWeb(window.innerWidth >= 1090)
            setIsTab(window.innerWidth < 1090 && window.innerWidth >= 768)
            setIsMob(window.innerWidth < 768)
        })
    }, [])

    return { IsWeb, IsTab, IsMob, IsBigWeb }

}