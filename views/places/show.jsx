const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="col-sm-6">
          <img src={data.place.pic} alt={data.place.name} />
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <h1>{data.place.name}</h1>
        <h2>Ratings</h2>
        <p>no ratings</p>
        <h2>Comments</h2>
        <p>No comments</p>
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
  );
}

module.exports = show;
