import React from 'react';
import BombProgress from './bomb_components/bombProgress';
import bomb_0 from './bomb_images/bomb_0.jpg';
import bomb_1 from './bomb_images/bomb_1.jpg';
import bomb_2 from './bomb_images/bomb_2.jpg';
import bomb_3 from './bomb_images/bomb_3.jpg';
import bomb_4 from './bomb_images/bomb_4.jpg';
import bomb_5 from './bomb_images/bomb_5.jpg';
import bomb_6 from './bomb_images/bomb_6.jpg';
import './bomb.css';

const Bomb = (props) => {

    const renderBomb = () => {
        switch (props.incorrectGuesses) {
            default:
                return <BombProgress styles={'bomb-progress'} src={bomb_0} />
            case 1:
                return <BombProgress styles={'bomb-progress'} src={bomb_1} />;
            case 2:
                return <BombProgress styles={'bomb-progress'} src={bomb_2} />;
            case 3:
                return <BombProgress styles={'bomb-progress'} src={bomb_3} />;
            case 4:
                return <BombProgress styles={'bomb-progress'} src={bomb_4} />;
            case 5:
                return <BombProgress styles={'bomb-progress'} src={bomb_5} />;
            case 6:
                return <BombProgress styles={'bomb-boom'} src={bomb_6} />;
        }
    }



    return (
        <div className={'bomb-body'} >
            {renderBomb()}
        </div>
    )
};

export default Bomb;