import React, { Component } from 'react'
import _ from 'underscore'

const sortCardsByColor = cards => {
  return _.groupBy(cards, c => c.color)
}

const orderCards = cards => {
  return _.sortBy(cards, c => c.number)
}

const VisibleCardGroup = ({ cards }) => {
  const colors = ['Blue', 'Green', 'Red', 'White', 'Yellow']
  const cardsByColor = sortCardsByColor(cards)
  return (
    <div className='uk-flex'>
      {
        colors.map((color, i) => {
          return(
            <div className='uk-card uk-card-default uk-card-body' key={i}>
              {color}
              <ul>
                { console.log(cardsByColor)}
                {
                  orderCards(cardsByColor[color]).map((card, i) => {
                    return <li key={i}>{card.number}</li>
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default VisibleCardGroup
