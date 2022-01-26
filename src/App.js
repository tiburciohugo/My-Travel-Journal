import {data} from './data'
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const cards = data.map(card => {
        return(
            <Card 
                key={card.id}
                title={card.title}
                location={card.location}
                googleMapsUrl={card.googleMapsUrl}
                startDate={card.startDate}
                endDate={card.endDate}
                description={card.description}
                imageUrl={card.imageUrl} />
        )
    })    

  return (
    <div className="app">
      <Navbar />
            <section className="cards-list">
                {cards}
            </section>
      <Footer />      
    </div>
  );
}

export default App;
