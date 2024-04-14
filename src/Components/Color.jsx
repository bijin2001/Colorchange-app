import React, { useState } from 'react'

function Color() {

    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
    const [index, setCount] = useState(0)

    const colorChanger = () => {

        setCount(indexPresent => (indexPresent + 1) % colors.length)
        document.body.style.backgroundColor = colors[index]
    }




    return (
        <>

            <div className='d-flex justify-content-center align-items-center mt-5'><h3 style={{ fontSize: '4em' }}>Color Changer</h3></div>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <button onClick={colorChanger} style={{ backgroundColor: colors[index], color: 'white' }} type='button' className='btn'>Paint It</button>
            </div>
        </>

    )
}

export default Color