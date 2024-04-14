import React from 'react'

function Colorchanger() {

    const colorNew = () =>{

        var colors = ['violet','indigo','blue','green','yellow','orange','red']

        colors.forEach((change=>change)%colors)


    }
    return (

        <>
            <body>
                <div className='d-flex text-center'>
                    <h1>Color Changer</h1>
                </div>
    
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={colorNew} value={violet} style={{color: 'violet'}} type='button' className='btn '> hii</button>
                    <button onClick={colorNew}  style={{color: 'indigo'}} type='button' className='btn'> hii</button>
                    <button onClick={colorNew} style={{color: 'blue'}} type='button' className='btn'> hii</button>
                    <button onClick={colorNew} style={{color: 'green'}} type='button' className='btn'> hii</button>
                </div>
            </body>
        </>

    )
}

export default Colorchanger