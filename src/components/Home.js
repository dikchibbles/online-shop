import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import { useEffect } from "react";

const Home = (props) => {
    useEffect(() => {
        props.fetchItems();
    }, [])

    console.log(props.items)

    return (
        <div className="home">

        </div>
    );
}

const mapStateToProps = (state) => {
    return { items: state.items }
} 

export default connect(mapStateToProps, { fetchItems })(Home);



