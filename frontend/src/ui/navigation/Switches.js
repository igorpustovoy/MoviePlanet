import {Routes, Route} from 'react-router-dom';
import MovieList from '../movie/list/MovieList';
import PersonList from '../person/list/PersonList';
import SingleMovie from '../movie/singleView/SingleMovie';
import SinglePerson from '../person/singleView/SinglePerson';
import FrontPanel from '../frontPage/FrontPanel';

function Switches() {
    return(
        <Routes>
            <Route path='/' element={<FrontPanel />}/>
            <Route path='/movies' element={<MovieList />}/>
            <Route path='/movies/:id' element={<SingleMovie />}/>
            <Route path='/people' element={<PersonList />}/>
            <Route path='/people/:id' element={<SinglePerson />}/>
        </Routes>
    )
}

export default Switches;