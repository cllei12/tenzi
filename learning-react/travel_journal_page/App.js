import React from "react"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card
                key = {item.id} 
                {...item}
            />
        )
    })
    
    return (
        <div>
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
