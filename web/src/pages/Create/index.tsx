import { useEffect, useState } from "react"

const Create = () => {

    const [width, setwidth] = useState(0)



    useEffect(() => {

        const handleWidth = () => {
            setwidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }


    }, [])

    return (
        <div>
            CREATE
        </div>
    )
}

export default Create
