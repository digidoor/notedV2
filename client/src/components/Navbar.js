import React from "react";


export default function Navbar() {
    return (
        <nav>
            <ul className="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Calendar/cal-index.html">Calendar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Nutrition/nut-index.html">Nutrition</a>
                </li>
            </ul>
        </nav>
    )
}