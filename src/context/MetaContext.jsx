import React, { createContext, useState, useContext, useCallback } from 'react';




// 1. Criamos um contexto chamado MetaContext usando createContext().
const MetaContext = createContext();

// 2. Criamos um componente MetaProvider que mantém o estado da meta e fornece funções para alterá-la.
export const MetaProvider = ({ children }) => {
  const [meta, setMetaState] = useState(0);

  // 3. Usamos useCallback para memorizar a função setMeta, evitando recriações desnecessárias.

  const setMeta = useCallback((novoValor) => {
    const valorNumerico = parseFloat(novoValor) || 0;
    setMetaState(valorNumerico);
  }, []);

  return (
    <MetaContext.Provider value={{ meta, setMeta }}>
      {children}
    </MetaContext.Provider>
  );
};

// hook é basicamente uma função que permite que você "ligue" o estado e 
// outros recursos do React a partir de componentes funcionais. 
// Ele permite que você use recursos como estado, efeitos colaterais e contexto sem precisar escrever uma classe.
export const useMeta = () => {
  const context = useContext(MetaContext);
  if (!context) {
    throw new Error('useMeta deve ser usado dentro de um MetaProvider');
  }
  return context;
};


