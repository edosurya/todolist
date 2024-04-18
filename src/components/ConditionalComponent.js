import { useState } from "react";

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(true);

    return display ? (
        <div> Display </div>
    ) : (
        <div>Nothing to here </div>
    )
    // if(display) {
    //     return <div> Display </div>
    // } else {
    //     return <div> Nothing to here </div>
    // }

}