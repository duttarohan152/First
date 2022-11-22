import React from 'react'
// import { useState } from "react"

export default function About(props) {
    // const changeTheme = ()=>
    // {
    //     if(myStyle.color==="white")
    //     {
    //         setMyStyle
    //         ({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setThemeBtnText("Enable Dark Mode");
    //         setBtnTheme('btn btn-dark');
    //     }
    //     else
    //     {
    //         setMyStyle
    //         ({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setThemeBtnText("Enable Light Mode");
    //         setBtnTheme('btn btn-light');
    //     }
    // }

    // const [myStyle, setMyStyle] = useState
    // ({
    //     color: (props.mode === "dark")?'white':'black',
    //     backgroundColor: (props.mode === "dark")?'black':'white',

    // })

    // const [themeBtnText, setThemeBtnText] = useState("Enable Light Mode")
    // const [btnTheme, setBtnTheme] = useState('btn btn-light')

    return (
        <div className='container pb-3' style={{color: (props.mode === "dark")?'white':'black',backgroundColor: (props.mode === "dark")?'black':'white'}}>
            <h2 className='my-3 pt-1'>About Us</h2>
            <div className="accordion mx-1" id="accordionExample">
                <div className="accordion-item my-1">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={{color: (props.mode === "dark")?'white':'black',backgroundColor: (props.mode === "dark")?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: (props.mode === "dark")?'white':'black',backgroundColor: (props.mode === "dark")?'black':'white'}}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-1">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={{color: (props.mode === "dark")?'white':'black',backgroundColor: (props.mode === "dark")?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: (props.mode === "dark")?'white':'black',backgroundColor: (props.mode === "dark")?'black':'white'}}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-1">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={{color: (props.mode === "dark")?'white':'black',backgroundColor: (props.mode === "dark")?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: (props.mode === "dark")?'white':'black',backgroundColor: (props.mode === "dark")?'black':'white'}}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                <button type="button" className={btnTheme} onClick={changeTheme}>{themeBtnText}</button>
            </div> */}
        </div>
    )
}
