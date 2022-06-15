import Mole from './Mole'
import { useEffect, useState} from 'react'

const MoleContainer = (props) => {
    const { displayMole, setDisplayMole } = useState(false)
    return (
        <div>
            <Mole displayMole={displayMole} setDisplayMole={setDisplayMole} setScore={props.setScore} score={props.score}/>
        </div>
    )
}

export default MoleContainer