import React from 'react'
import { Counter } from './Counter';
import { Gamefield } from './Gamefield';
import { Time } from './Time';


export const Game: React.FC = (props): React.ReactElement => {
    const [steps, setSteps] = React.useState(0)
    const addStep = () => {
        const currentStep = steps;
        setSteps(currentStep + 1)
    }
    return (
        <div className='wrapper asian'>
            <Time/>
            <Gamefield addStep={addStep}/>
            <Counter steps={steps}/>
        </div>
    )
}