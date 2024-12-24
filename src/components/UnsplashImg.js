import React, { useState, useEffect } from "react";
import './UnsplashImg.css';

const UnsplashImg = function(props) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Query received:", props.query); // Debugging

        fetch(`https://api.unsplash.com/search/collections/?query=${props.query}&client_id=ecpxGJcXsUcW5ZcLmxhuJrOKioKfvpqLcJww77rGuks`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Unsplash Data:", data); // Debugging
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Error:", err.message);
                setLoading(false);
            });
    }, [props.query]);

    let fullURL = "";
    if (posts.results && posts.results.length > 0) {
        fullURL = posts.results[0].cover_photo.urls.regular;
        console.log("Image URL:", fullURL); // Debugging
    }

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex justify-content-center unsplash-container">
                    <img
                        className="unsplash-img"
                        src={fullURL || "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy"}
                        alt="Unsplash collection"
                    />
                </div>
            )}
        </>
    );
};

export default UnsplashImg;
