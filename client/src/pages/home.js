import React, {useState} from "react";
import Search from "../components/search";
import Results from "../components/results/index";
import Api from "../utils/api";
 
function Home () {
// set starting state
const [books, setBooks] = useState([]);
const [keyword, setKeyword] = useState("");
const handleInputChange = event =>{
    const {value} = event.target
    setKeyword(value);
    console.log(value)
}

const handleSubmit = () => {
    Api.getGoogleBooks(keyword).then(res =>{
        setBooks(res.data.items)
    })
}


// load search list
return (
    <div>
        <Search keyword={keyword}/>
        <Results />
    </div>
)

// updates saved list

}

export default Home;

