import './App.css';
// import IdCard from './components/IdCard';
// import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div>
      <h1>App</h1>
      {/* 1st Iteration
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      /> */}

      {/* 2nd Iteration
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings> */}

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;
