import CongUjianAkhir from "./DetailC/CongUjianAkhir";
import TryUjianAkhir from "./DetailC/TryUjianAkhir";
import Container from "../../navbar/Container";


export default function Congrats() {
  
  return (
    <>
      <Container>
        <main className="flex flex-row w-full h-max box-border bg-white max-sm:flex-col">
          <CongUjianAkhir/>          
        </main>
      </Container>
    </>
  );
}
