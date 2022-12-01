import './index.css';

function App() {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label>Enter your note</label>
                    <textarea className="form-control" rows="2"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    );
}

export default App;
