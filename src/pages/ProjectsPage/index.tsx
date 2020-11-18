import React, { useEffect, useState, useCallback } from 'react';

import Lottie from 'lottie-react-web';

import Header from '../../components/Header';
import Repository from '../../components/Repository';

import Sidebar from '../../components/Sidebar';

import { useRepositories } from '../../hooks/repositories';

import animation from '../../assets/github.json';

import { Container, Repositories, AnimationContainer } from './styles';

const ProjectsPage: React.FC = () => {
  const { loadRepositories, repositories, loading } = useRepositories();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  useEffect(() => {
    loadRepositories();
  }, [loadRepositories]);

  return (
    <Sidebar
      selectedPage="PROJECTS"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container className="projects-body">
        <Header
          fixed
          color="BLACK"
          selectedPage="PROJECTS"
          onMenuShown={handleOnMenuToggle}
        />
        {loading ? (
          <AnimationContainer>
            <Lottie
              options={{
                animationData: animation,
                autoplay: true,
              }}
              height={200}
              width={200}
            />
          </AnimationContainer>
        ) : (
          <Repositories>
            {repositories.map(repository => (
              <Repository key={repository.full_name} repository={repository} />
            ))}
          </Repositories>
        )}
      </Container>
    </Sidebar>
  );
};

export default ProjectsPage;
