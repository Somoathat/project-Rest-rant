const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
  )
  // let ratingsAverage = 0;
  let ratings = (
    <h3 className="inactive">
      Not yet rated.
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let ratingsAverage = sumRatings / data.place.comments.length;
    ratingsAverage = Math.round(ratingsAverage)

    let stars = '';
    for(let i =0; i < ratingsAverage; i++) {
      stars += '⭐'
    }
    ratings = (
      <h3>
        {stars} stars
      </h3>
    )

    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  } else {
    ratingsAverage = -1
  }

    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h1>Rating</h1>
            <h3>
          Located in {data.place.city}, {data.place.state}
             </h3>
             <h3>
          {data.place.showEstablished()}
        </h3>
        
         {/ ratingsAverage === -1? (
              ratings
            ) : (
              <p>Average Rating: {ratingsAverage}</p>
            )}
          {ratings}
         
        
            

            <h2>Comments</h2>
            {comments}
            <form method="POST" action={`/places/${data.place._id}/comment`}>
            <label for="author">Author:</label>
    <input type="text" id="author" name="author" required/>
    <br/>
    <label for="content">Content:</label>
    <textarea id="content" name="content" rows="4" required></textarea>
    <br/>
    <label for="stars">Star Rating:</label>
    <select id="stars" name="stars">
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
    </select>
    <br/>
    <label for="rant">Is this a rant?</label>
    <input type="checkbox" id="rant" name="rant" value="yes"/>
    <br/>
    <input type="submit" value="Submit"/>




            </form>
            
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 








          </main>
        </Def>
    )
}https://github.com/Somoathat/project-Rest-rant

module.exports = show
