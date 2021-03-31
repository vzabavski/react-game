import React from 'react'
import { options } from '../../utills/options';
import { Counter } from '../Counter/Counter';
import { Gamefield } from '../Gamefield/Gamefield';
import { Time } from '../Time/Time';


export const Game: React.FC = (props): React.ReactElement => {
    const memSteps = localStorage.getItem('steps')
    const [steps, setSteps] = React.useState(memSteps ? +memSteps : 0)
    const addStep = () => {
        const currentStep = steps;
        setSteps(currentStep + 1)
        localStorage.setItem('steps', String(steps + 1))
    }
    return (
        <div className={`wrapper ${options.style}`}>
            <Time />
            <Gamefield addStep={addStep} />
            <Counter steps={steps} />
        </div>
    )
}