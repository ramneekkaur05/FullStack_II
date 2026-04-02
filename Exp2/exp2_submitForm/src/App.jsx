// import bootstrap;
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div className="d-flex justify-content-center align-items-center" style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
      <div className="card shadow" style={{width: '500px'}}>
        <div className="card-body p-5">
          <h1 className="card-title text-center mb-4">Learning Bootstrap</h1>
          
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label fw-bold">Name</label>
            <input 
              id="nameInput"
              className="form-control" 
              type="text" 
              placeholder="Enter your name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="emailInput" className="form-label fw-bold">Email</label>
            <input 
              id="emailInput"
              className="form-control" 
              type="email" 
              placeholder="Enter your email"
            />
          </div>
          
          <button className="btn btn-primary w-100">Submit</button>
        </div>
      </div>
    </div>    
  );
}
export default App;