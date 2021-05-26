import React, { useEffect, Component } from 'react'; 
import axios from 'axios'


 const HomeContainer = () => {
    useEffect ( () => {
            axios.get(' https://superheroapi.com/api.php/3786074581416140/search/id').then(results => {
                console.log(results.data);
            })
                .catch(console.log)
            }, [])
            return(
                    <div>
                    <h1>app captain</h1>
                    </div>
            )
    }  
 
export default HomeContainer;
