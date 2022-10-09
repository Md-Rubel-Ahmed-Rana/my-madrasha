import { useLoaderData } from 'react-router-dom';
import "./Results.css"
import ShowResult from './ShowResult';

const Results = () => {
    const results = useLoaderData();
    return (
        <div>
            <div className='results'>
            <h3 className='text-white my-3'>All Results Here</h3> 
                {
                    results.map((result) => <ShowResult allresult={result} key={result.id} />)
                }
            </div>
        </div>
    )
};

export default Results;