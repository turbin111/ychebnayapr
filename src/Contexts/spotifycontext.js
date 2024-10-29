import { createContext } from "react";

const spotify = createContext({
    client_id: "7c41d04e15714fe9902d4516cf92303d",
    REDIRECT_URI: "http://localhost:3000",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
    token: ""
})

export default spotify