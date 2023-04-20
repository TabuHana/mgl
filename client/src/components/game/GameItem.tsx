import { FiHeart } from 'react-icons/fi';
import { Game } from '../../context/GameContext';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

type GameProps = {
	game: Game;
};


// () => check if saved if yes -> savegame btn if no delete game btn

const GameItem: React.FC<GameProps> = ({ game }) => {
	const { favorite, save } = useContext(GameContext);

	console.log(favorite.includes(game))

	return (
		<div className='browse-option' key={game.id}>
			<img className='browse-option-background' src={game.thumbnail} alt={game.title} />

			<div className='label-btn'>
				<h1>{game.title}</h1>
				<button className='btn' onClick={() => save(game.id)}>
					<FiHeart />
				</button>
			</div>
		</div>
	);
};
export default GameItem;
