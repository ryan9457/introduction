import GameProduct from "./GameProduct";

type Props = {
    params: Promise<{ id: string }>
};

export async function generateStaticParams() {
 return [
    { id: "dragon's-trail" },
  ]
}

export async function generateMetadata({ params }: Props) {
  const id = (await params).id;
  return {
    title: `${id}`,
  }
}

export default async function GamePage({ params }: Props) {
  const id = (await params).id;
  return <div>
    <GameProduct dir = {`../game/${id}`} name = {id}/>
  </div>
}