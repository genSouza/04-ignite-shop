import { styled } from "../styles"; 

const Button  = styled('button', {
  backgroundColor: '$green300',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
}) 

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Button>Enviar</Button>
    </div>
  );
}
