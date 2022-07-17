import React from 'react'

function MessagePiece({id, anotherId, content ,date, type}) {
  return (
    <div className='MessagePiece'>
      <section className={['MessagePieceInfo', `MessagePieceInfo_${type? 1 : 2}`].join(" ")}>
        <h4>보내는 사람: {type ? id : anotherId}</h4>
        <h4>{date}</h4>
      </section>
      <section className='MessagePieceContent'>
        <p>{content}</p>
      </section>
    </div>
  )
}

export default MessagePiece