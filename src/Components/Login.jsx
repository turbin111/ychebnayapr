import React, { useContext } from 'react';
import styled from 'styled-components';
import spotify from '../Contexts/spotifycontext';

const Login = () => {
    const { client_id, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE } = useContext(spotify);

    const handleConnectSpotify = () => {
        window.location.href = `${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`;
    };

    return (
        <Container>
            <button onClick={handleConnectSpotify}>Connect Spotify</button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #000000;
    gap: 5rem;

    img {
        height: 30vh;
    }

    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        background-color: black;
        color: #ffffff;
        border: 2px solid #ff0000;
        font-size: 1.4rem;
        font-family: Arial, sans-serif;
        cursor: pointer;
    }
`;

export default Login;
