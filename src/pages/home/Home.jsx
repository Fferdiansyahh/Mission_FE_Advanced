import "../login/Login.css";
import Container from "../navbar/Container";
import Home2 from "./home-2/Home2";
import Home1 from "./Home1";
import Home3 from "./Home3";

export default function Home() {
  return (
    <>
      <Container>
        <main className="my-16 mx-30 max-sm:w-full max-sm:my-10 max-sm:mx-0  border-box ">
          <div>
            <Home1 />
          </div>
          <div className="flex-1 border-box">
            <Home2 />
          </div>
          <div>
            <Home3 />
          </div>
        </main>
      </Container>
    </>
  );
}
