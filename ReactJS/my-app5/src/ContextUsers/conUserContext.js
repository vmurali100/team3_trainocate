import React from "react";

const ConUserContext = React.createContext();

const ConUserProvider = ConUserContext.Provider;
const ConUserConsumer = ConUserContext.Consumer;

export { ConUserProvider, ConUserConsumer };