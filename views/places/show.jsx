const React = require('react');
const Def = require('../default');

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive"
      style={{ color: 'darkgray' }}
    >
      Not yet rated!
    </h3>
  )

  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      // ! Im at here 
      return (
        <div className="border" key={c._id}>
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }

  return (
    <Def>
      <main className="show-main">

        {/* •••••••••••••••••••••••••••••• Left Section •••••••••••••••••••••••••••••• */}
        <section className='main-left-section'>
          <div>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
        </section>

        {/* •••••••••••••••••••••••••••••• Right Section •••••••••••••••••••••••••••••• */}
        <section className='main-right-section'>
          <div>
            <h1>{data.place.name}</h1>
            <div>
              <h2>Rating</h2>
              {rating}
            </div>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4
              style={{ color: 'darkgray' }}
            >
              Serving
              {data.place.cuisines}
            </h4>
          </div>


          <div className='show-edit-delete-buttons'>
            <button className="btn btn-warning"
              style={{ marginRight: '10px' }}
            >
              <a href={`/places/${data.place._id}/edit`}>
                Edit
              </a>
            </button>

            <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </section>

        {/* •••••••••••••••••••••••••••••• Mid Section •••••••••••••••••••••••••••••• */}
        <section className="row main-mid-section">
          <div>
            <h2
              style={{ color: 'cornflowerblue' }}
            >
              Comments
            </h2>
            <div className='section-mid-comments'>
            {comments}
            </div>
          </div>
        </section>

        {/* •••••••••••••••••••••••••••••• Bottom Section •••••••••••••••••••••••••••••• */}
        <section className="row main-bottom-section">
          <h2
            style={{ color: 'cornflowerblue' }}
          >
            Leave a Review
          </h2>

          <form id="comment-form" action={`/places/${data.place._id}/comment`} method="POST">
            <label htmlFor="author"> Author </label>
            <div
              style={{
                display: 'flex',
                flexFlow: 'wrap row',
                width: '100%'
              }}
            >
              <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                style={{ backgroundColor: 'white', color: 'black', borderRadius: '6px', margin: '10px', }}
              >
              </input>

              <div style={{ flexGrow: '1' }}>
                <label htmlFor="content"> Content </label>
                <input
                  type="textarea"
                  name="content"
                  id="content"
                  className="form-control"
                  style={{ backgroundColor: 'white', color: 'black', borderRadius: '6px', margin: '10px', }}
                >
                </input>
              </div>

              <br />

              <div className="star-rating"
                style={{}}
              >
                <label htmlFor="stars"> Star Rating </label>
                <br />
                <input type="range" name="stars" min="0" max="5" step="0.5" required></input>
                <br />
                <datalist id="values">
                  <option value="0" label="0"></option>
                  <option value="1" label="1"></option>
                  <option value="2" label="2"></option>
                  <option value="3" label="3"></option>
                  <option value="4" label="4"></option>
                  <option value="5" label="5"></option>
                </datalist>
              </div>

              <div>
                <label htmlFor="rant"> Rant </label>
                <br />
                <input type="checkbox" name="rant" id="rant"></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-outline-primary"
              > Add Comment </button>
            </div>

          </form>
        </section>
      </main>
    </Def >
  );
}

module.exports = show;