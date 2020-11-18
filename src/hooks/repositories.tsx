import React, { useContext, createContext, useState, useCallback } from 'react';

import IRepository from '../models/IRepository';

import api from '../services/api';

interface RepositoriesContextData {
  loading: boolean;
  repositories: IRepository[];
  loadRepositories: () => Promise<void>;
}

const RepositoriesContext = createContext<RepositoriesContextData>(
  {} as RepositoriesContextData,
);

export const RepositoriesProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const loadRepositories = useCallback(async () => {
    try {
      const response = await api.get<IRepository[]>('');
      setRepositories(response.data);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch {
      setLoading(false);
    }
  }, []);

  return (
    <RepositoriesContext.Provider
      value={{ repositories, loading, loadRepositories }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};

export function useRepositories(): RepositoriesContextData {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error('useRepositories must be used within RepositoriesProvider');
  }

  return context;
}
