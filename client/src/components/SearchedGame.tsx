import SearchedGameItem from './SearchedGameItem';

interface Games {
	developer: string;
	freetogame_profile_url: string;
	game_url: string;
	genre: string;
	id: number;
	platform: string;
	publisher: string;
	short_description: string;
	thumbnail: string;
	title: string;
}

interface Props {
	gameItem: Games[];
}

const SearchedGame: React.FC<Props> = ({ gameItem }) => {
	return (
		<div className='browse'>
			{gameItem.map((game) => (
				<SearchedGameItem
					key={game.id}
					gameTitle={game.title}
					gameImg={game.thumbnail}
					gameDev={game.developer}
				/>
			))}
		</div>
	);
};
export default SearchedGame;