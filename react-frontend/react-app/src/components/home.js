import React, { useState, useEffect } from "react";

function Home () {

    const [time, setTime] = useState([{}])

    useEffect(() => {
        fetch('/time').then(
            res => res.json()
        ).then(
            data => {
                setTime(data)
                console.log(data)
            }
        )
    }, [])

    /* The empty array defines this useEffect function as having no dependencies, therefore the
    page is not always rerendered when the time changes. */

    return(
        <div>
            {(typeof time.time ==='undefined') ? (
                <p>Loading ...</p>
            ) : (
                <p>{time.time}</p>
            )}
        </div>
    );
}

export default Home;