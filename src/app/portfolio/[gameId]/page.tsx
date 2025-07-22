import GameProduct from "./GameProduct";

const gameNames = [`Drgon's Trail`];

type Props = {
    params: Promise<{ gameId: string, gameName: string }>
};

export async function generateStaticParams() {
 return [
    { gameId: '0' },
  ]
}

export async function generateMetadata({ params }: Props) {
  const id = (await params).gameId;

  return {
    title: `${gameNames[+id]}`,
  }
}

export default async function GamePage({ params }: Props) {
  const id = +(await params).gameId;
  
  return <div>
    <GameProduct id = {id} dir = {`../game/${id}`} name = {gameNames[id]}/>
  </div>
}