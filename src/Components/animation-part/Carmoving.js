import React from 'react'
import './Carmoving.css'
export default function Carmoving() {
  return (
        <>
            <div className="car">
                <div className="car-container">
                    <div className="car-top1">
                        <div className="window1"></div>
                        <div className="window2"></div>
                    </div>
                    <div className="car-top2">
                        <div className="door">
                            <div className="door-knob"></div>
                        </div>
                    </div>
                    <div className="car-bottom">
                        <div className="wheel1-top"></div>
                        <div className="wheel1">
                            <div className="wheel-dot1"></div>
                            <div className="wheel-dot2"></div>
                            <div className="wheel-dot3"></div>
                            <div className="wheel-dot4"></div>
                        </div>
                        <div className="wheel2-top"></div>
                        <div className="wheel2">
                            <div className="wheel-dot1"></div>
                            <div className="wheel-dot2"></div>
                            <div className="wheel-dot3"></div>
                            <div className="wheel-dot4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
