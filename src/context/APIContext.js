import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import APIService from '../service/APIService.ts';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [characters, setCharacters] = useState([]);
  const [endings, setEndings] = useState([]);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(`${APIService.BASE_URL}/characters`);
      if (response.data.status === 'success') {
        setCharacters(response.data.data);
      } else {
        console.error('API did not return the expected data structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching characters data:', error);
    }
  };

  const getAllEndings = async () => {
    try {
      const response = await axios.get(`${APIService.BASE_URL}/endings`);
      if (response.data.status === 'success') {
        return response.data.data;
      } else {
        console.error('API did not return the expected data structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching endings data:', error);
    }
  };

  const getUnlockableEndings = async () => {
    if (!user) return [];
    try {
      const response = await axios.get(`${APIService.BASE_URL}/unlockableEndings?userId=${user.id}`);
      if (response.data.status === 'success') {
        return response.data.data.map(item => item.endingId);
      } else {
        console.error('API did not return the expected data structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching unlockable endings data:', error);
    }
  };

  const getOutcome = async (endingId) => {
    if (!user) return null;
    try {
      const response = await axios.get(`${APIService.BASE_URL}/outcome/${endingId}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (response.data.status === 'success') {
        return response.data.data;
      } else {
        console.error('API did not return the expected data structure:', response.data);
      }
    } catch (error) {
      console.error(`Error fetching outcome for endingId ${endingId}:`, error);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    const fetchEndings = async () => {
      if (user) {
        const allEndings = await getAllEndings();
        const unlockedEndingIds = await getUnlockableEndings();

        const unlockedEndingsData = await Promise.all(
          unlockedEndingIds.map(id => getOutcome(id))
        );

        const unlockedEndings = unlockedEndingsData.filter(ending => ending !== null);

        const combinedEndings = allEndings.map(ending => {
          const unlockedEnding = unlockedEndings.find(e => e.id === ending.id);
          return unlockedEnding ? { ...ending, unlocked: true } : { ...ending, unlocked: false };
        });

        setEndings(combinedEndings);
      }
    };

    fetchEndings();
  }, [user]);

  return (
    <APIContext.Provider value={{ characters, endings }}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => {
  return useContext(APIContext);
};